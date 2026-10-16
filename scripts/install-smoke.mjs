// SPDX-License-Identifier: Apache-2.0
// Standalone skills.sh install check authored for ev3rlit/impeccable-unity.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const repository=fileURLToPath(new URL('..',import.meta.url));
const source=process.env.SKILLS_SOURCE || repository;
function files(dir, relative='') {
  return fs.readdirSync(path.join(dir,relative),{withFileTypes:true}).flatMap(entry=>{
    const file=path.join(relative,entry.name);
    return entry.isDirectory()?files(dir,file):[file];
  }).sort();
}
const temp=fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(),'impeccable-skills-install-')));
const npm=process.platform==='win32'?'npm.cmd':'npm';
const env={...process.env,DISABLE_TELEMETRY:'1',DO_NOT_TRACK:'1'};
function run(args) {
  return execFileSync(npm,['exec','--yes','--package=skills@1.7.2','--','skills',...args],{cwd:temp,env,encoding:'utf8',timeout:120000,stdio:['ignore','pipe','pipe']});
}
try {
  const listing=run(['add',source,'--list']);
  assert.match(listing,/impeccable-unity/);
  console.log('skills@1.7.2 discovered impeccable-unity from '+source+'.');
  run(['add',source,'--skill','impeccable-unity','--agent','codex','--copy','--yes']);
  const installed=path.join(temp,'.agents/skills/impeccable-unity');
  const expected=path.join(repository,'skills/impeccable-unity');
  const expectedFiles=files(expected);
  assert.deepEqual(files(installed),expectedFiles,'Installed file set differs from the intended distribution.');
  for(const name of expectedFiles) {
    assert.ok(fs.existsSync(path.join(installed,name)),'Not installed: '+name);
    assert.ok(fs.readFileSync(path.join(installed,name)).equals(fs.readFileSync(path.join(expected,name))),'Changed during installation: '+name);
  }
  const route=JSON.parse(execFileSync(process.execPath,[path.join(installed,'scripts/impeccable-unity.mjs'),'layout','--project',temp],{encoding:'utf8'}));
  assert.equal(route.command,'layout');
  assert.ok(route.references.every(file=>file.startsWith(installed+path.sep)&&fs.existsSync(file)));
  console.log(expectedFiles.length+' installed files match the intended distribution byte-for-byte.');
  console.log('Project-scoped Codex copy installed with legal notices; installed router and references resolved.');
} catch(error) {
  if(error.stdout)console.error(String(error.stdout).slice(-4000));
  if(error.stderr)console.error(String(error.stderr).slice(-4000));
  throw error;
} finally { fs.rmSync(temp,{recursive:true,force:true}); }
