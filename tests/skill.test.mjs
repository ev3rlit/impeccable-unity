// SPDX-License-Identifier: Apache-2.0
// Standalone distribution checks authored for ev3rlit/impeccable-unity.
import {test, before, after} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import crypto from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync, spawnSync} from 'node:child_process';
const root=fileURLToPath(new URL('..',import.meta.url));
const skill=path.join(root,'skills/impeccable-unity');
const cli=path.join(skill,'scripts/impeccable-unity.mjs');
const text=file=>fs.readFileSync(file,'utf8');
const manifest=JSON.parse(text(path.join(skill,'scripts/command-metadata.json')));
const catalog=JSON.parse(text(path.join(skill,'scripts/before-after-cases.json')));
const names=['init','shape','document','extract','critique','audit','layout','typeset','colorize','clarify','polish','distill','bolder','quieter','adapt','harden','animate','delight','onboard','overdrive','optimize'];
const temp=fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(),'impeccable-unity-test-')));
const project=path.join(temp,'Project With Spaces');
function files(dir) {
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>{
    if(['.git','dist','node_modules'].includes(entry.name))return [];
    const full=path.join(dir,entry.name);
    assert.ok(!entry.isSymbolicLink(),'Distribution must be self-contained: '+full);
    return entry.isDirectory()?files(full):[full];
  });
}
const invoke=args=>JSON.parse(execFileSync(process.execPath,[cli,...args],{encoding:'utf8'}));
before(()=>{
  fs.mkdirSync(path.join(project,'ProjectSettings'),{recursive:true});
  fs.mkdirSync(path.join(project,'Assets/Editor'),{recursive:true});
  fs.writeFileSync(path.join(project,'ProjectSettings/ProjectVersion.txt'),'m_EditorVersion: 6000.6.2f1\n');
  fs.writeFileSync(path.join(project,'DESIGN.md'),'Keep the approved art direction.\n');
  fs.writeFileSync(path.join(project,'Assets/Editor/Settings.uxml'),'<ui:UXML xmlns:ui="UnityEngine.UIElements"/>\n');
});
after(()=>fs.rmSync(temp,{recursive:true,force:true}));

test('one discoverable skill and exactly 21 command examples',()=>{
  const found=files(path.join(root,'skills')).filter(file=>path.basename(file)==='SKILL.md');
  assert.deepEqual(found,[path.join(skill,'SKILL.md')]);
  const entry=text(found[0]);
  assert.match(entry,/^---\nname: impeccable-unity\ndescription: .+/);
  assert.match(entry,/\nlicense: Apache-2.0\n/);
  assert.deepEqual(Object.keys(manifest.commands),names);
  assert.deepEqual(catalog.cases.map(item=>item.command),names);
  for(const item of catalog.cases) {
    assert.equal(new URL(item.sourceUrl).origin,'https://impeccable.style');
    assert.equal(new URL(item.sourceUrl).pathname,`/docs/${item.command}/`);
    assert.ok(item.acceptance.length>=2);
  }
});
for(const command of names)test(command+' routes to a complete local playbook without writing the target',()=>{
  const target=path.join(project,'Assets/Editor/Settings.uxml');
  const before=fs.readFileSync(target);
  const result=invoke([command,'--project',project,'--target','Assets/Editor/Settings.uxml']);
  assert.equal(result.command,command);
  assert.equal(result.context.editorVersion,'6000.6.2f1');
  assert.equal(result.context.surface,'editor');
  assert.equal(result.example.command,command);
  assert.ok(result.references.every(file=>file.startsWith(skill+path.sep)&&fs.statSync(file).isFile()));
  assert.equal(path.basename(result.references.at(-1)),command+'.md');
  if(['audit','critique','shape'].includes(command))assert.deepEqual(result.writes,[]);
  assert.ok(before.equals(fs.readFileSync(target)));
});
test('menu and invalid inputs remain read-only',()=>{
  assert.deepEqual(invoke(['--project',project]).commands,names);
  assert.deepEqual(invoke(['--project',project]).writes,[]);
  for(const args of [['live'],['craft'],['audit','--target','../escape'],['audit','--target','missing.uxml'],['layout','--unknown']]) {
    const result=spawnSync(process.execPath,[cli,...args],{cwd:project,encoding:'utf8'});
    assert.equal(result.status,1,args.join(' '));assert.ok(result.stderr.trim());
  }
  const outside=path.join(temp,'outside.uxml');fs.writeFileSync(outside,'outside');
  fs.symlinkSync(outside,path.join(project,'Assets/Editor/Linked.uxml'));
  const result=spawnSync(process.execPath,[cli,'audit','--project',project,'--target','Assets/Editor/Linked.uxml'],{encoding:'utf8'});
  assert.equal(result.status,1);assert.match(result.stderr,/symlink/);
});
test('all distributed Markdown references resolve inside the skill',()=>{
  for(const file of files(skill).filter(file=>file.endsWith('.md'))) {
    const content=text(file);
    assert.doesNotMatch(content,/\{\{[^}]+\}\}/,file);
    for(const match of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
      if(/^https?:/.test(match[1]))continue;
      const [relative,anchor]=match[1].split('#');
      const destination=relative?path.resolve(path.dirname(file),relative):file;
      assert.ok(destination.startsWith(skill+path.sep),file+': outside skill '+match[1]);
      assert.ok(fs.existsSync(destination),file+': missing '+match[1]);
      if(anchor)assert.ok(text(destination).split('\n').some(line=>/^#{1,6} /.test(line)&&line.replace(/^#+ /,'').trim().toLowerCase()===anchor),file+': missing anchor '+anchor);
    }
  }
});
test('license and notices travel with a skill-only installation',()=>{
  for(const name of ['LICENSE','NOTICE','MODIFICATIONS.md']) {
    assert.equal(text(path.join(skill,name)),text(path.join(root,name)),name);
  }
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(skill,'LICENSE'))).digest('hex'),'02bb8c3b4e70190e3986c0404ad2fd8d639b4f534252d82379cc1b502b6d1812','Apache license text must remain unchanged from the upstream baseline.');
  assert.match(text(path.join(skill,'LICENSE')),/Apache License\s+Version 2.0, January 2004/);
  assert.match(text(path.join(skill,'NOTICE')),/Paul Bakaus/);
  assert.match(text(path.join(skill,'NOTICE')),/5bf0a069dc857e1b5f4b090e004d9d5b231416ca/);
  assert.match(text(path.join(skill,'NOTICE')),/not an official/);
  for(const file of files(skill).filter(file=>/\.(md|mjs|json|yaml)$/.test(file)&&!file.endsWith('MODIFICATIONS.md'))) {
    assert.ok(text(file).includes('2026-10-16')&&text(file).includes('ev3rlit'),file+': missing modification notice');
  }
});
test('portable content excludes demo projects, credentials and local checkout dependencies',()=>{
  for(const file of files(root)) {
    const relative=path.relative(root,file);
    assert.doesNotMatch(relative,/(^|\/)(Assets|Library|Packages|ProjectSettings|demos)(\/|$)|\.(unity|prefab|dll|png|jpg)$/i,relative);
    assert.ok(!path.basename(file).startsWith('.env'),relative);
    const content=text(file);
    assert.doesNotMatch(content,/\/(?:Users|home)\/[^/\s]+\/|\/private\/tmp\//,relative);
    assert.ok(!content.includes('\uFFFD'),relative);
  }
});
test('a relocated skill works independently of the development checkout',()=>{
  const relocated=path.join(temp,'Relocated Skill');fs.cpSync(skill,relocated,{recursive:true});
  const result=JSON.parse(execFileSync(process.execPath,[path.join(relocated,'scripts/impeccable-unity.mjs'),'layout','--project',project],{encoding:'utf8'}));
  assert.equal(result.command,'layout');
  assert.ok(result.references.every(file=>file.startsWith(relocated+path.sep)&&fs.existsSync(file)));
});
