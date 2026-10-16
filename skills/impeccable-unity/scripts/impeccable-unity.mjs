#!/usr/bin/env node
// Modified for the unofficial Unity UI Toolkit adaptation maintained by ev3rlit, 2026-10-16. Based on Impeccable by Paul Bakaus and contributors (Apache-2.0). See NOTICE and MODIFICATIONS.md.
// SPDX-License-Identifier: Apache-2.0
// Read-only routing and context discovery. The agent, not this helper, edits UI.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
export const skillRoot = path.dirname(scriptDir);
const caseCatalog = JSON.parse(fs.readFileSync(path.join(scriptDir, 'before-after-cases.json'), 'utf8'));
export const commands = JSON.parse(fs.readFileSync(path.join(scriptDir, 'command-metadata.json'), 'utf8')).commands;

function inside(root, target) {
  const relative = path.relative(root, target);
  return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative));
}

export function projectContext(project, target) {
  const root = fs.realpathSync(path.resolve(project));
  if (!fs.statSync(root).isDirectory()) throw new Error('Project must be a directory');
  let resolvedTarget = null;
  if (target) {
    const candidate = path.resolve(root, target);
    if (!inside(root, candidate)) throw new Error('Target must stay inside the selected project');
    if (!fs.existsSync(candidate)) throw new Error(`Target does not exist: ${target}. Search the project before routing a named surface.`);
    resolvedTarget = fs.realpathSync(candidate);
    if (!inside(root, resolvedTarget)) throw new Error('Target symlink leaves the selected project');
  }
  let unityRoot = resolvedTarget && fs.statSync(resolvedTarget).isDirectory() ? resolvedTarget : path.dirname(resolvedTarget || root);
  if (!resolvedTarget) unityRoot = root;
  while (inside(root, unityRoot) && !fs.existsSync(path.join(unityRoot, 'ProjectSettings/ProjectVersion.txt'))) {
    if (unityRoot === root) { unityRoot = null; break; }
    unityRoot = path.dirname(unityRoot);
  }
  const versionFile = unityRoot && path.join(unityRoot, 'ProjectSettings/ProjectVersion.txt');
  const editorVersion = versionFile ? fs.readFileSync(versionFile, 'utf8').match(/^m_EditorVersion:\s*(\S+)/m)?.[1] ?? null : null;
  const guidance = new Set();
  let directory = resolvedTarget
    ? (fs.statSync(resolvedTarget).isDirectory() ? resolvedTarget : path.dirname(resolvedTarget))
    : root;
  while (inside(root, directory)) {
    for (const name of ['AGENTS.md', 'PRODUCT.md', 'DESIGN.md', 'rules/input.md']) {
      const file = path.join(directory, name);
      if (fs.existsSync(file) && fs.statSync(file).isFile()) guidance.add(file);
    }
    if (directory === root) break;
    directory = path.dirname(directory);
  }
  return {
    project: root, unityRoot, editorVersion, target: resolvedTarget,
    surface: resolvedTarget && path.relative(root, resolvedTarget).split(path.sep).includes('Editor') ? 'editor' : 'unresolved',
    guidance: [...guidance].reverse(),
    notice: unityRoot ? 'Confirm Runtime/Editor, host, devices and project policies from source.' : 'Unity project unresolved: choose a project root or an existing target inside one; do not guess a version.',
  };
}

export function route(command, { project = process.cwd(), target } = {}) {
  const context = projectContext(project, target);
  if (!command) return { kind: 'menu', commands: Object.keys(commands), context, writes: [] };
  if (!Object.hasOwn(commands, command)) throw new Error(`Unsupported command: ${command}. Available: ${Object.keys(commands).join(', ')}`);
  const spec = commands[command];
  const references = [...new Set(['unity-platform', 'design-principles', ...spec.references, command])]
    .map(name => path.join(skillRoot, 'reference', `${name}.md`));
  for (const file of references) if (!fs.existsSync(file)) throw new Error(`Missing installed reference: ${file}`);
  const example = caseCatalog.cases.find(item => item.command === command);
  if (!example) throw new Error(`Missing official example: ${command}`);
  return { kind: 'command', command, ...spec, references, context, example };
}

export function main(args = process.argv.slice(2)) {
  let command;
  const options = {};
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg === '--project' || arg === '--target') {
      const value = args[++index];
      if (!value || value.startsWith('--')) throw new Error(`Missing value for ${arg}`);
      const key = arg.slice(2);
      if (Object.hasOwn(options, key)) throw new Error(`Duplicate option: ${arg}`);
      options[key] = value;
    } else if (arg.startsWith('-') || command !== undefined) throw new Error(`Unexpected argument: ${arg}`);
    else command = arg;
  }
  return route(command, options);
}

if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { console.log(JSON.stringify(main(), null, 2)); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
