/* Jazykový pas: offline language learning app (no server, no account).
   Progress lives in localStorage; backups move it between devices. */
(function(){
'use strict';

const VERSION = '2.4';
const CONTENT = window.CONTENT || {};

/* ───────────── helpers ───────────── */
const $ = (s, el) => (el || document).querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const DAY = 864e5;
const pad = n => String(n).padStart(2,'0');
const dayKey = t => { const d = new Date(t == null ? Date.now() : t); return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); };
const dayStart = t => { const d = new Date(t == null ? Date.now() : t); d.setHours(0,0,0,0); return d.getTime(); };
const addDays = (t, n) => { const d = new Date(t); d.setDate(d.getDate()+n); return d.getTime(); };
const endToday = () => addDays(dayStart(), 1);
const shuffle = a => { a = a.slice(); for (let i = a.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; };
const pickOne = a => a[Math.floor(Math.random()*a.length)];
const plain = t => String(t||'').replace(/[{}]/g,'');
const wcount = t => plain(t).trim().split(/\s+/).filter(Boolean).length;
const splitCloze = t => { const m = String(t).match(/^([\s\S]*?)\{([^}]+)\}([\s\S]*)$/); return m ? [m[1], m[2], plain(m[3])] : [plain(t), '', '']; };
const uid = () => 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const isLetter = ch => !!ch && /[\p{L}\p{N}]/u.test(ch);
const FINE = !!(window.matchMedia && matchMedia('(pointer:fine)').matches);
function dni(n){ return n === 1 ? 'deň' : (n >= 2 && n <= 4) ? 'dni' : 'dní'; }
function slovicok(n){ return n === 1 ? 'slovíčko' : (n >= 2 && n <= 4) ? 'slovíčka' : 'slovíčok'; }
function ls(k, v){ try { if (v === undefined) { const x = localStorage.getItem('jp2:'+k); return x ? JSON.parse(x) : null; } localStorage.setItem('jp2:'+k, JSON.stringify(v)); } catch(e) { return null; } }

const ICONS = {
  today:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18M9 15.5l2 2 4-4"/>',
  course:'<path d="M12 3 2 8l10 5 10-5z"/><path d="M2 13l10 5 10-5"/><path d="M2 17.5l10 5 10-5"/>',
  games:'<rect x="3" y="3" width="8" height="8" rx="2.2"/><rect x="13" y="3" width="8" height="8" rx="2.2"/><rect x="3" y="13" width="8" height="8" rx="2.2"/><rect x="13" y="13" width="8" height="8" rx="2.2"/>',
  read:'<path d="M12 6.5C10 5 7 4.5 3.5 5v14c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5z"/><path d="M12 6.5v14"/>',
  progress:'<path d="M3 21h18"/><rect x="5" y="11" width="3" height="7" rx="1"/><rect x="10.5" y="6" width="3" height="12" rx="1"/><rect x="16" y="13" width="3" height="5" rx="1"/>',
  flame:'<path d="M12 22c4.1 0 7-2.8 7-6.9 0-3.4-2.2-5.6-4-7.7-.5 2-1.6 3.2-2.8 3.5.4-3.4-.9-6.7-3.8-8.9-.3 3.7-1.9 5.7-3.3 7.7C4 11.4 5 13.2 5 15.1 5 19.2 7.9 22 12 22z"/>',
  speaker:'<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  spark:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 17l.7 1.8 1.8.7-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  chevron:'<path d="M9 6l6 6-6 6"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  repeat:'<path d="M4 12a8 8 0 0 1 13.7-5.6L20 9"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-13.7 5.6L4 15"/><path d="M4 20v-5h5"/>',
  order:'<rect x="2.5" y="9" width="5.5" height="6" rx="1.5"/><rect x="9.25" y="9" width="5.5" height="6" rx="1.5"/><rect x="16" y="9" width="5.5" height="6" rx="1.5"/><path d="M5 5h14M16 3l3 2-3 2"/>',
  fill:'<rect x="2.5" y="8" width="19" height="8" rx="2"/><path d="M9 12h6"/>',
  dict:'<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15 15h6M15 19h4"/>',
  pairs:'<rect x="3" y="3.5" width="8" height="8" rx="2"/><rect x="13" y="12.5" width="8" height="8" rx="2"/><path d="M11 7.5h4.5a1.5 1.5 0 0 1 1.5 1.5v3.5"/>',
  download:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  upload:'<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>',
  copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  chat:'<path d="M20.5 12a8.5 8.5 0 0 1-12.3 7.6L3.5 21l1.3-4.4A8.5 8.5 0 1 1 20.5 12z"/>',
  mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  test:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11l2 2 4-4M9 17h6"/>',
  bell:'<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  dots:'<circle cx="5.5" cy="12" r="3" fill="var(--m)" stroke="none"/><circle cx="12" cy="12" r="3" fill="var(--f)" stroke="none"/><circle cx="18.5" cy="12" r="3" fill="var(--n)" stroke="none"/>'
};
const ic = (n, s) => `<svg class="ic" viewBox="0 0 24 24" width="${s||22}" height="${s||22}" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]||''}</svg>`;

let toastT;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2800); }

/* ───────────── languages ───────────── */
const LANGS = {
  de:{name:'Nemčina', in:'v nemčine', acc:'nemčinu', adv:'po nemecky', self:'Deutsch', loc:'de-DE', c:['#D08A00','#F2B33D','#865700','#FBEFD5','#3A2D12','#1E1503','#1E1503'], hello:['Guten Morgen!','Guten Tag!','Guten Abend!'], bravo:'Super gemacht!'},
  fr:{name:'Francúzština', in:'vo francúzštine', acc:'francúzštinu', adv:'po francúzsky', self:'Français', loc:'fr-FR', c:['#2F5BEA','#8AA5FF','#2448C4','#E4EAFF','#1C2648','#FFFFFF','#0D1633'], hello:['Bonjour !','Bonjour !','Bonsoir !'], bravo:'Bravo !'},
  es:{name:'Španielčina', in:'v španielčine', acc:'španielčinu', adv:'po španielsky', self:'Español', loc:'es-ES', c:['#D9412F','#FF8777','#B3321F','#FCE4E0','#3F1C17','#FFFFFF','#2A0B07'], hello:['¡Buenos días!','¡Buenas tardes!','¡Buenas noches!'], bravo:'¡Muy bien!'},
  pt:{name:'Portugalčina', in:'v portugalčine', acc:'portugalčinu', adv:'po portugalsky', self:'Português (BR)', loc:'pt-BR', c:['#0F8A62','#48D3A2','#0A6E4E','#DBF3EA','#123629','#FFFFFF','#06281C'], hello:['Bom dia!','Boa tarde!','Boa noite!'], bravo:'Muito bem!'},
  ru:{name:'Ruština', in:'v ruštine', acc:'ruštinu', adv:'po rusky', self:'Русский', loc:'ru-RU', c:['#6F45DB','#B096FF','#5A32C2','#ECE5FD','#2A2049','#FFFFFF','#1A0F3A'], hello:['Доброе утро!','Добрый день!','Добрый вечер!'], bravo:'Отлично!'}
};
const SAMPLE = {de:'Hallo! Schön, dich kennenzulernen. Wie geht es dir?', fr:'Bonjour ! Ravie de te rencontrer. Comment ça va ?', es:'¡Hola! Encantada de conocerte. ¿Qué tal?', pt:'Olá! Prazer em te conhecer. Tudo bem?', ru:'Привет! Рада познакомиться. Как дела?'};
const CHARS = {de:['ä','ö','ü','ß'], fr:['é','è','ê','à','ç','ù','œ'], es:['á','é','í','ó','ú','ñ','¿','¡'], pt:['á','â','ã','à','ç','é','ê','ó','õ'], ru:[]};
const G_LABEL = {m:'der · mužský rod', f:'die · ženský rod', n:'das · stredný rod', p:'die · množné číslo'};

/* ───────────── levels ───────────── */
const LEVELS = [
  {id:'A1', name:'Začiatočník', d:'Nevieš skoro nič alebo len pár slov.'},
  {id:'A2', name:'Základy', d:'Zvládneš pozdrav, nákup a jednoduché vety.'},
  {id:'B1', name:'Mierne pokročilý', d:'Dohovoríš sa na cestách, rozumieš bežným témam.'},
  {id:'B2', name:'Pokročilý', d:'Diskutuješ o názoroch, rozumieš článkom a filmom.'},
  {id:'C1', name:'Veľmi pokročilý', d:'Hovoríš plynulo aj o zložitých veciach, poznáš idiómy.'},
  {id:'C2', name:'Majster', d:'Ladíš jemné nuansy a hovorový jazyk.'}
];
const LV = {A1:1, A2:2, B1:3, B2:4, C1:5, C2:6};
const lvn = id => LV[id] || 1;
const lvName = id => (LEVELS.find(l => l.id === id) || {}).name || '';

/* ───────────── content ───────────── */
const UNITS = {}, SENT = {}, BYID = {};
function mkItem(c, base){
  const it = Object.assign({c, ex:'', exSk:'', note:''}, base);
  if (c === 'de') { const m = String(it.t).match(/^(der|die|das)\s/); if (m) it.g = /množn/i.test(it.note) ? 'p' : {der:'m',die:'f',das:'n'}[m[1]]; }
  return it;
}
for (const c in LANGS) {
  const L = CONTENT[c] || {};
  UNITS[c] = (L.units || []).map((u, ui) => {
    const items = String(u.items).split('\n').map(l => l.trim()).filter(Boolean).map(line => {
      const p = line.split(' | ').map(s => s.trim());
      let id = c + ':' + p[0]; while (BYID[id]) id += '+';
      const it = mkItem(c, {id, u:u.id, t:p[0], sk:p[1]||'', ex:p[2]||'', exSk:p[3]||'', note:p[4]||''});
      BYID[id] = it; return it;
    });
    return {id:u.id, n:ui+1, i:ui, level:u.level || 'A1', title:u.title, desc:u.desc||'', items};
  }).sort((a, b) => lvn(a.level) - lvn(b.level) || a.i - b.i);
  UNITS[c].forEach((u, i) => { u.n = i + 1; });
  SENT[c] = (L.sentences || []).map((r,i) => ({id:c+'-s'+i, t:r[0], sk:r[1], note:r[2]||'', level:r[3]||'A2'}));
}

/* ───────────── state & storage ───────────── */
const DEFAULT = () => ({v:2, updatedAt:0, active:'de', order:['de','fr','es','pt','ru'], goal:30, perLesson:5, rate:0.9, translit:true, voices:{}, levels:{}, theme:'auto', langAccent:false, custom:null, why:null, whySkip:false, flags:{}, ach:{}, days:{}, installHidden:false, lastBackup:0, backupSnooze:0});
const emptyP = () => ({updatedAt:0, it:{}, custom:[], best:{}, st:{}, dlg:{}, gram:{}, log:{d:'', l:0, r:0, g:0}});
let S = DEFAULT();
const P = {};
let tab = ls('tab') || 'today';
function load(){
  S = Object.assign(DEFAULT(), ls('settings') || {});
  S.order = (S.order || []).filter(c => LANGS[c]); if (!S.order.length) S.order = ['de'];
  if (!S.order.includes(S.active)) S.active = S.order[0];
  for (const c in LANGS) {
    P[c] = Object.assign(emptyP(), ls('p-'+c) || {});
    if (P[c].story) { const first = (CONTENT[c] || {}).story; if (first) P[c].st[first.title] = Object.assign({answers:{}, done:false}, P[c].story); delete P[c].story; }
  }
}
const dirty = new Set(); let saveT;
function save(key){ const now = Date.now(); if (key === 'settings') S.updatedAt = now; else if (P[key]) P[key].updatedAt = now; dirty.add(key); clearTimeout(saveT); saveT = setTimeout(flush, 300); }
function flush(){ clearTimeout(saveT); for (const k of dirty) ls(k === 'settings' ? 'settings' : 'p-'+k, k === 'settings' ? S : P[k]); dirty.clear(); }

function customItems(c){ return (P[c].custom || []).map(x => mkItem(c, {id:x.id, u:'mine', t:x.t, sk:x.sk, ex:x.ex||'', exSk:x.exSk||''})); }
function unitItems(c, uidArg){ if (uidArg === 'mine') return customItems(c); const u = UNITS[c].find(x => x.id === uidArg); return u ? u.items : []; }
function allItems(c){ return UNITS[c].flatMap(u => u.items).concat(customItems(c)); }
function unitOf(it){ if (it.u === 'mine') return {id:'mine', n:0, title:'Moje slovíčka'}; return UNITS[it.c].find(u => u.id === it.u) || {n:0, title:''}; }
function dueItems(c){ const p = P[c].it, end = endToday(); return allItems(c).filter(x => p[x.id] && p[x.id].due < end).sort((a,b) => p[a.id].due - p[b.id].due); }
function nextNewItems(c, n, unitId){
  const p = P[c].it;
  let pool;
  if (unitId) pool = unitItems(c, unitId);
  else { const L = lvn(userLevel(c)); pool = customItems(c).concat(UNITS[c].filter(u => lvn(u.level) >= L).flatMap(u => u.items), UNITS[c].filter(u => lvn(u.level) < L).flatMap(u => u.items)); }
  const out = []; for (const x of pool) { if (!p[x.id]) out.push(x); if (out.length >= n) break; } return out;
}
const userLevel = c => (S.levels || {})[c] || null;
function currentUnit(c){ const p = P[c].it, L = lvn(userLevel(c)); return UNITS[c].find(u => lvn(u.level) >= L && u.items.some(x => !p[x.id])) || UNITS[c].find(u => u.items.some(x => !p[x.id])) || UNITS[c][UNITS[c].length-1]; }
function itemStats(c){ const p = P[c].it; let m = 0, l = 0, n = 0; for (const x of allItems(c)) { const s = p[x.id]; if (!s) n++; else if (s.ivl >= 21) m++; else l++; } return {m, l, n, t:m+l+n}; }
function logDay(c, k){ const g = P[c].log && P[c].log.d === dayKey() ? P[c].log : {d:dayKey(), l:0, r:0, g:0}; g[k] = (g[k]||0) + 1; P[c].log = g; save(c); }
const todayLog = c => (P[c].log && P[c].log.d === dayKey()) ? P[c].log : {l:0, r:0, g:0};

/* backup */
function backupJSON(){ flush(); return JSON.stringify({app:'jazykovy-pas', v:2, at:Date.now(), settings:S, progress:P}); }
function markBackup(){ S.lastBackup = Date.now(); save('settings'); }
async function exportFile(){
  const json = backupJSON(), name = 'jazykovy-pas-zaloha-' + dayKey() + '.json';
  let file = null; try { file = new File([json], name, {type:'application/json'}); } catch(e) {}
  if (file && navigator.canShare && navigator.canShare({files:[file]})) {
    try { await navigator.share({files:[file], title:'Jazykový pas: záloha'}); markBackup(); toast('Záloha uložená.'); return; }
    catch (e) { if (e && e.name === 'AbortError') return; }
  }
  const blob = file || new Blob([json], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500); markBackup(); toast('Záloha stiahnutá.');
}
async function copyBackup(){
  try { await navigator.clipboard.writeText(backupJSON()); markBackup(); toast('Záloha je v schránke. Vlož ju v druhom zariadení.'); }
  catch (e) { toast('Kopírovanie tu nefunguje. Použi Uložiť zálohu.'); }
}
function importText(txt){
  let d; try { d = JSON.parse(String(txt).trim()); } catch(e) { toast('Toto nie je platná záloha.'); return false; }
  if (!d || d.app !== 'jazykovy-pas' || !d.progress) { toast('Toto nie je záloha Jazykového pasu.'); return false; }
  const rs = d.settings || {};
  for (const c in d.progress) {
    if (!LANGS[c]) continue; const r = d.progress[c] || {}, l = P[c];
    for (const id in (r.it || {})) { const a = l.it[id], b = r.it[id]; if (b && (!a || (b.last||0) > (a.last||0))) l.it[id] = b; }
    const ids = new Set(l.custom.map(x => x.id)); (r.custom || []).forEach(x => { if (x && !ids.has(x.id)) l.custom.push(x); });
    for (const k in (r.best || {})) l.best[k] = Math.max(l.best[k]||0, r.best[k]||0);
    for (const f of ['dlg','gram']) { l[f] = l[f] || {}; for (const k in (r[f] || {})) l[f][k] = Math.max(l[f][k] || 0, r[f][k] || 0); }
    const rst = Object.assign({}, r.st || {}); if (r.story && (CONTENT[c] || {}).story) rst[CONTENT[c].story.title] = r.story;
    for (const t in rst) { const a = l.st[t] || {answers:{}, done:false}, b = rst[t] || {}; l.st[t] = {done:!!(a.done || b.done), answers:Object.assign({}, b.answers || {}, a.answers || {})}; }
    save(c);
  }
  for (const k in (rs.days || {})) S.days[k] = Math.max(S.days[k]||0, rs.days[k]||0);
  S.ach = Object.assign({}, rs.ach || {}, S.ach || {}); S.flags = Object.assign({}, rs.flags || {}, S.flags || {});
  if ((rs.updatedAt||0) > (S.updatedAt||0)) ['goal','perLesson','rate','translit','order','active','voices','levels','theme','langAccent','custom','why'].forEach(k => { if (rs[k] !== undefined) S[k] = rs[k]; });
  S.order = S.order.filter(c => LANGS[c]); if (!S.order.length) S.order = ['de']; if (!S.order.includes(S.active)) S.active = S.order[0];
  save('settings'); flush(); render(); toast('Záloha načítaná a spojená s týmto zariadením.');
  return true;
}

/* ───────────── speech (device voices, work offline) ───────────── */
const Speech = {
  synth:('speechSynthesis' in window) ? window.speechSynthesis : null, voices:[],
  init(){
    if (!this.synth) return;
    const sig = () => Object.keys(LANGS).map(c => this.can(c)).join() + '|' + this.voices.length;
    const load = () => {
      const before = sig(); try { this.voices = this.synth.getVoices() || []; } catch(e) {}
      if (this.ready && before !== sig() && !Sheet.open) render();
    };
    load();
    try { this.synth.addEventListener('voiceschanged', load); } catch(e) { this.synth.onvoiceschanged = load; }
  },
  lang: v => String(v.lang || '').toLowerCase().replace('_','-'),
  can(c){ if (!this.synth) return false; if (!this.voices.length) return true; return this.voices.some(v => this.lang(v).startsWith(c)); },
  /* Device voices don't report gender, so we recognise the common female voices on iPhone, Mac, Windows and Chrome by name. */
  FEMALE:/(anna|helena|petra|marlene|vicki|katja|hedda|amélie|amelie|audrey|aurélie|aurelie|marie|julie|hortense|denise|mónica|monica|paulina|marisol|laura|elvira|luciana|joana|fernanda|francisca|maria|milena|katya|irina|svetlana|dariya|google deutsch|google français|google português|google русский|female)/i,
  ROBOT:/\b(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley|albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox)\b/i,
  female(v){ return this.FEMALE.test(v.name); },
  quality(v){ return /premium|prémi/i.test(v.name) ? 3 : /enhanced|vylepš|natural|neural|erweitert|online/i.test(v.name) ? 2 : 1; },
  list(c){ return this.voices.filter(v => this.lang(v).startsWith(c)); },
  sorted(c){ const sc = v => (this.ROBOT.test(v.name) ? -10 : 0) + (this.female(v) ? 4 : 0) + this.quality(v); return this.list(c).slice().sort((a, b) => sc(b) - sc(a) || a.name.localeCompare(b.name)); },
  refresh(){ if (!this.synth) return; try { this.voices = this.synth.getVoices() || []; } catch(e) {} },
  label(v){ const q = this.quality(v); return v.name.replace(/\s*\((enhanced|premium|vylepšený|prémiový)\)/i, '') + (this.female(v) ? ' · ženský' : '') + (q === 3 ? ' · prémiový' : q === 2 ? ' · vylepšený' : '') + (this.ROBOT.test(v.name) ? ' · robotický' : ''); },
  pick(c){
    const vs = this.list(c); if (!vs.length) return null;
    const want = S.voices && S.voices[c];
    if (want) { const v = vs.find(x => x.voiceURI === want || x.name === want); if (v) return v; }
    const loc = LANGS[c].loc.toLowerCase();
    const score = v => (this.female(v) ? 6 : 0) + this.quality(v) * 2 + (this.lang(v) === loc ? 1 : 0) - (this.ROBOT.test(v.name) ? 20 : 0);
    return vs.slice().sort((a, b) => score(b) - score(a))[0];
  },
  /* iOS: speech is silenced by the Ring/Silent switch and in home-screen apps it must be unlocked by a tap.
     audioSession 'playback' (Safari 16.4+) and a silent clip move the page to the media audio category. */
  unlocked:false, started:0, warned:false, lastOk:null,
  silentUrl(){
    if (this._silent) return this._silent;
    const n = 1600, buf = new ArrayBuffer(44 + n), v = new DataView(buf), w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    w(0,'RIFF'); v.setUint32(4, 36 + n, true); w(8,'WAVE'); w(12,'fmt '); v.setUint32(16,16,true); v.setUint16(20,1,true); v.setUint16(22,1,true);
    v.setUint32(24,8000,true); v.setUint32(28,8000,true); v.setUint16(32,1,true); v.setUint16(34,8,true); w(36,'data'); v.setUint32(40,n,true);
    for (let i = 0; i < n; i++) v.setUint8(44 + i, 128);
    try { this._silent = URL.createObjectURL(new Blob([buf], {type:'audio/wav'})); } catch(e) { this._silent = ''; }
    return this._silent;
  },
  playback(){ try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch(e) {} },
  unlock(){
    if (this.unlocked || !this.synth) return; this.unlocked = true; this.playback();
    try { const a = new Audio(this.silentUrl()); a.setAttribute('playsinline', ''); a.volume = 1; const pr = a.play(); if (pr && pr.catch) pr.catch(() => {}); } catch(e) {}
    try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; this.synth.speak(u); } catch(e) {}
  },
  altVoice(c){ const main = this.pick(c), vs = this.sorted(c).filter(v => !this.ROBOT.test(v.name) && v !== main); return vs.find(v => !this.female(v)) || vs[0] || main; },
  sayLines(lines, c, onLine){
    if (!this.synth || !lines.length) return; this.playback(); if (!this.unlocked) this.unlock();
    try { this.synth.cancel(); } catch(e) {}
    setTimeout(() => lines.forEach((l, i) => {
      try {
        const u = new SpeechSynthesisUtterance(plain(l.t)); u.lang = LANGS[c].loc;
        const v = l.role === 1 ? this.altVoice(c) : this.pick(c); if (v) u.voice = v;
        u.rate = Math.max(0.5, Math.min(1.3, S.rate || 1));
        if (onLine) { u.onstart = () => onLine(i); if (i === lines.length - 1) u.onend = () => onLine(-1); }
        this.synth.speak(u);
      } catch(e) {}
    }), 80);
  },
  say(text, c, slow, onResult, role){
    if (!this.synth) { if (onResult) onResult(false, 'nosynth'); return; }
    this.playback(); if (!this.unlocked) this.unlock();
    const go = () => {
      try {
        if (this.synth.paused) this.synth.resume();
        const u = new SpeechSynthesisUtterance(plain(text)); u.lang = LANGS[c].loc;
        const v = role === 1 ? this.altVoice(c) : this.pick(c); if (v) u.voice = v;
        u.rate = Math.max(0.5, Math.min(1.3, (slow ? 0.7 : 1) * (S.rate || 1))); u.volume = 1;
        let done = false;
        const finish = (ok, why) => { if (done) return; done = true; clearTimeout(t); this.lastOk = ok; if (onResult) onResult(ok, why); else if (!ok && !this.warned) { this.warned = true; toast('Hlas sa nespustil. Skontroluj tichý režim a hlasitosť (Nastavenia → Vyskúšať zvuk).'); } };
        u.onstart = () => finish(true);
        u.onerror = e => { if (e && (e.error === 'interrupted' || e.error === 'canceled')) { done = true; clearTimeout(t); return; } finish(false, e && e.error); };
        const t = setTimeout(() => finish(false, 'timeout'), 3000);
        this.synth.speak(u);
      } catch(e) { if (onResult) onResult(false, 'error'); }
    };
    if (this.synth.speaking || this.synth.pending) { try { this.synth.cancel(); } catch(e) {} setTimeout(go, 60); } else go();
  },
  stop(){ try { if (this.synth) this.synth.cancel(); } catch(e) {} }
};

/* ───────────── text utils ───────────── */
const norm = s => String(s||'').toLowerCase().normalize('NFC').replace(/ё/g,'е').replace(/œ/g,'oe').replace(/æ/g,'ae').replace(/[’`´ʼ]/g,"'").replace(/[.,!?¿¡;:«»"“”„()…–—-]/g,' ').replace(/\s+/g,' ').trim();
const strip = s => s.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ß/g,'ss');
function cmp(a, b){ const x = norm(a), y = norm(b); if (!x) return 'bad'; if (x === y) return 'ok'; if (strip(x) === strip(y)) return 'near'; return 'bad'; }
function check(v, ans, c){ let r = cmp(v, ans); if (r === 'bad' && c === 'ru' && cmp(v, translit(ans)) !== 'bad') r = 'ok'; return r; }
const TR = {а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'jo',ж:'ž',з:'z',и:'i',й:'j',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'ch',ц:'c',ч:'č',ш:'š',щ:'šč',ъ:'',ы:'y',ь:'ʹ',э:'e',ю:'ju',я:'ja'};
function translit(s){
  const t = plain(s); let out = '';
  for (let i = 0; i < t.length; i++) {
    const ch = t[i], low = ch.toLowerCase(); let r = TR[low];
    if (r === undefined) { out += ch; continue; }
    if (low === 'е') { const p = (t[i-1] || ' ').toLowerCase(); r = (i === 0 || /[\sаеёиоуыэюяъь.,!?«"-]/.test(p)) ? 'je' : 'e'; }
    if (ch !== low && r) r = r[0].toUpperCase() + r.slice(1);
    out += r;
  }
  return out;
}
const ARTS = {de:/^(der|die|das)\s+/i, fr:/^(le|la|les)\s+|^l'/i, es:/^(el|la|los|las)\s+/i, pt:/^(o|a|os|as)\s+/i};
function coreOf(it){ let t = it.t; if (ARTS[it.c]) t = t.replace(ARTS[it.c], ''); return t.replace(/[!?.,¡¿]/g,'').trim(); }
function findInEx(it){
  if (!it.ex) return null; const core = coreOf(it); if (!core || wcount(core) > 3) return null;
  const idx = it.ex.toLocaleLowerCase().indexOf(core.toLocaleLowerCase()); if (idx < 0) return null;
  if (isLetter(it.ex[idx-1]) || isLetter(it.ex[idx+core.length])) return null;
  return {i:idx, len:core.length, word:it.ex.substr(idx, core.length)};
}
function hlEx(it){ const f = findInEx(it); if (!f) return esc(it.ex); return esc(it.ex.slice(0, f.i)) + `<mark class="hl">${esc(f.word)}</mark>` + esc(it.ex.slice(f.i + f.len)); }
function maskOf(t, n){ let k = 0; return Array.from(t).map(ch => isLetter(ch) ? (k++ < n ? ch : '_') : ch).join(''); }
function fmtT(it){ if (it.c === 'de' && it.g) { const sp = it.t.indexOf(' '); return `<span class="ga ga-${it.g === 'p' ? 'f' : it.g}">${esc(it.t.slice(0, sp))}</span>${esc(it.t.slice(sp))}`; } return esc(it.t); }
const trLine = (c, t) => c === 'ru' && S.translit ? `<p class="translit">${esc(translit(t))}</p>` : '';

/* ───────────── spaced repetition ───────────── */
function schedule(prev, g){
  const s = prev ? Object.assign({}, prev) : {ivl:0, ease:2.5, reps:0, lapses:0, due:0};
  delete s.known;
  if (g === 0) { s.lapses = (s.lapses||0) + 1; s.reps = 0; s.ivl = 0; s.ease = Math.max(1.3, s.ease - 0.2); s.due = Date.now(); return s; }
  let ivl;
  if (g === 1) { ivl = s.reps === 0 ? 1 : Math.max(s.ivl + 1, Math.round(s.ivl * 1.2)); s.ease = Math.max(1.3, s.ease - 0.15); }
  else if (g === 2) { ivl = s.reps === 0 ? 1 : s.reps === 1 ? 3 : Math.max(s.ivl + 1, Math.round(s.ivl * s.ease)); }
  else { ivl = s.reps === 0 ? 4 : Math.max(s.ivl + 2, Math.round(Math.max(s.ivl,1) * s.ease * 1.3)); s.ease = Math.min(3.2, s.ease + 0.15); }
  s.ivl = Math.min(ivl, 365); s.reps++; s.due = addDays(dayStart(), s.ivl);
  return s;
}
const sentenceOK = it => !!(it.ex && it.exSk && wcount(it.ex) >= 3 && wcount(it.ex) <= 12);
function reviewType(it, s, c){
  const L = lvn(userLevel(c)), bonus = L >= 5 ? 10 : L >= 4 ? 4 : L >= 3 ? 2 : 0;
  const ivl = (s ? s.ivl : 0) + bonus, audio = Speech.can(c);
  if (ivl <= 1) return audio && Math.random() < 0.4 ? 'listen' : 'mc_s2t';
  if (ivl <= 3) return 'build';
  if (ivl <= 10) return L >= 3 && sentenceOK(it) && Math.random() < 0.3 ? 'sentence' : 'type';
  const r = Math.random();
  if (findInEx(it) && r < 0.45) return 'cloze';
  if (L >= 3 && sentenceOK(it) && r < 0.75) return 'sentence';
  return 'type';
}

/* ───────────── XP & streak ───────────── */
function addXP(n){
  if (!(n > 0)) return; const k = dayKey(); S.days[k] = (S.days[k] || 0) + n;
  const keys = Object.keys(S.days); if (keys.length > 800) keys.sort().slice(0, keys.length - 760).forEach(x => delete S.days[x]);
  save('settings'); renderHeader();
}
const todayXP = () => S.days[dayKey()] || 0;
const totalXP = () => Object.values(S.days).reduce((a,b) => a + b, 0);
function streak(){ let n = 0, t = dayStart(); if (!(S.days[dayKey(t)] > 0)) t = addDays(t, -1); while (S.days[dayKey(t)] > 0) { n++; t = addDays(t, -1); } return n; }

/* ───────────── sheet ───────────── */
const Sheet = {
  open:false, ctrl:null, cleanup:null,
  show(title){
    if (this.cleanup) { try { this.cleanup(); } catch(e) {} } this.cleanup = null; this.ctrl = null;
    $('#sheet-title').textContent = title; $('#sheet-meta').textContent = ''; $('#sheet-bar').style.width = '0';
    $('#sheet-body').innerHTML = ''; const s = $('#sheet');
    if (s.hidden) { s.hidden = false; document.documentElement.classList.add('locked'); }
    s.scrollTop = 0; this.open = true;
  },
  body(h, keep){ const s = $('#sheet'), y = s.scrollTop; $('#sheet-body').innerHTML = h; s.scrollTop = keep ? y : 0; },
  progress(p, meta){ $('#sheet-bar').style.width = Math.round(Math.max(0, Math.min(1, p)) * 100) + '%'; if (meta !== undefined) $('#sheet-meta').textContent = meta; },
  meta(m){ $('#sheet-meta').textContent = m; },
  close(){
    if (this.cleanup) { try { this.cleanup(); } catch(e) {} } this.cleanup = null; this.ctrl = null;
    $('#sheet').hidden = true; document.documentElement.classList.remove('locked'); this.open = false; Speech.stop(); flush(); render();
  }
};
const PRAISE = ['Správne!','Výborne!','Presne tak!','Paráda!','Super!'];
function praise(c){ return Math.random() < 0.5 ? LANGS[c].bravo : pickOne(['Výborne!','Paráda!','Super práca!','Tak sa to robí!']); }
function doneHTML(o){
  const c = o.c, xp = todayXP(), met = xp >= S.goal, d = new Date(), st = streak();
  return `<div class="finish">
    <div class="stamp"><span>${esc(LANGS[c].self)}</span><b>+${o.xp} XP</b><span>${d.getDate()}. ${d.getMonth()+1}. ${d.getFullYear()}</span></div>
    <h2 class="h1">${esc(o.title || praise(c))}</h2>
    <p class="muted">${o.line || ''}</p>
    ${o.extra || ''}
    ${met ? `<p class="goal-met">${ic('flame',18)} Denný cieľ splnený · séria ${st} ${dni(st)}</p>` : `<p class="muted">Do denného cieľa ti chýba ${S.goal - xp} XP.</p>`}
    ${o.tiles ? `<div class="tiles">${suggestTiles(c, o.tiles)}</div>` : ''}
    <div class="sheet-actions" style="width:100%">${o.actions || ''}<button class="btn ${o.actions ? '' : 'btn-primary'} btn-wide" data-act="close-sheet">Hotovo</button></div>
  </div>`;
}

/* ───────────── exercise engine ───────────── */
function distract(it, n, field){
  const all = allItems(it.c), key = x => norm(x[field]), used = new Set([key(it)]);
  const phrase = x => wcount(x.t) >= 3;
  const pool = shuffle(all.filter(x => x.u === it.u && x.id !== it.id)).concat(shuffle(all.filter(x => x.u !== it.u)));
  const ranked = pool.map((x, i) => ({x, r:(phrase(x) === phrase(it) ? 0 : 1000) + i})).sort((a,b) => a.r - b.r).map(o => o.x);
  const out = []; for (const x of ranked) { const k = key(x); if (!k || used.has(k)) continue; used.add(k); out.push(x); if (out.length >= n) break; }
  return out;
}
function buildSpec(it){
  const t = it.t.trim(), words = t.split(/\s+/);
  if (words.length === 1) { const w = t.replace(/[!?.,¡¿]/g,''); return {mode:'l', target:Array.from(w), answer:w, extra:[]}; }
  const extra = [];
  if (it.c === 'de' && it.g) ['der','die','das'].filter(a => a !== words[0]).forEach(a => extra.push(a));
  else for (const x of distract(it, 6, 't')) { for (const w of x.t.split(/\s+/)) { if (extra.length < 2 && !words.some(y => norm(y) === norm(w)) && !extra.some(y => norm(y) === norm(w))) extra.push(w); } if (extra.length >= 2) break; }
  return {mode:'w', target:words, answer:t, extra};
}
function gradeType(v, it){
  const r = check(v, it.t, it.c); if (r !== 'bad') return {r};
  if (it.c === 'de' && it.g) {
    const art = it.t.split(' ')[0], noun = it.t.slice(art.length + 1), m = norm(v).match(/^(der|die|das) (.+)$/);
    if (m) { if (check(m[2], noun, 'de') !== 'bad') return {r:'bad', msg:'Nesprávny člen. Správne je ' + art + '.'}; }
    else if (check(v, noun, 'de') !== 'bad') return {r:'near', msg:'Nezabudni na člen: ' + art + '.'};
  }
  const core = coreOf(it); if (core && norm(core) !== norm(it.t) && check(v, core, it.c) !== 'bad') return {r:'near', msg:'Skoro. Celé je to: ' + it.t};
  return {r:'bad'};
}
/* Exercise mix by level: beginners recognise first, advanced learners produce more (typing, cloze, whole sentences). */
function lessonSteps(items, c){
  const steps = [], audio = Speech.can(c), L = lvn(userLevel(c));
  const clozeOr = (it, alt) => findInEx(it) ? 'cloze' : alt;
  const sentOr = (it, alt) => sentenceOK(it) ? 'sentence' : alt;
  for (let b = 0; b < items.length; b += 3) {
    const batch = items.slice(b, b + 3);
    batch.forEach((it, i) => steps.push({type:'intro', it, k:b+i+1, n:items.length}));
    if (L <= 2) shuffle(batch).forEach(it => steps.push({type:audio && Math.random() < 0.35 ? 'listen' : 'mc_t2s', it}));
    if (L <= 4) shuffle(batch).forEach(it => steps.push({type:'mc_s2t', it}));
  }
  if (L <= 2) { shuffle(items).forEach(it => steps.push({type:'build', it})); shuffle(items).forEach(it => steps.push({type:'type', it})); }
  else if (L === 3) { shuffle(items).forEach(it => steps.push({type:'build', it})); shuffle(items).forEach(it => steps.push({type:clozeOr(it, 'type'), it})); shuffle(items).forEach(it => steps.push({type:sentOr(it, 'type'), it})); }
  else { shuffle(items).forEach(it => steps.push({type:'type', it})); shuffle(items).forEach(it => steps.push({type:clozeOr(it, sentOr(it, 'type')), it})); shuffle(items).forEach(it => steps.push({type:sentOr(it, 'type'), it})); }
  return steps;
}
function sayBtns(c, arg){ if (!Speech.can(c)) return ''; arg = arg || 't';
  return `<div class="aud"><button class="speak" data-act="ctl" data-fn="say" data-arg="${arg}" aria-label="Prehrať">${ic('speaker',18)}</button><button class="speak" data-act="ctl" data-fn="say" data-arg="${arg}-slow" aria-label="Prehrať pomaly">0.7×</button></div>`; }

const R = {
  intro(s, c){
    const it = s.it, kind = it.g ? 'Nové slovo' : wcount(it.t) >= 2 ? 'Nová fráza' : 'Nové slovo';
    return `<span class="newtag enter">${ic('spark',14)} ${kind} · ${s.k} z ${s.n}</span>
    <div class="flash enter">
      <div class="flash-row"><p class="ex-word" lang="${c}">${fmtT(it)}</p>${sayBtns(c)}</div>${trLine(c, it.t)}
      <p class="ex-sk">${esc(it.sk)}</p>
      ${it.g ? `<p class="gtip ga-${it.g === 'p' ? 'f' : it.g}"><i></i>${G_LABEL[it.g]}</p>` : ''}
      ${it.ex ? `<div class="example"><div class="flash-row"><p lang="${c}">${hlEx(it)}</p>${Speech.can(c) ? `<button class="speak" data-act="ctl" data-fn="say" data-arg="ex" aria-label="Prehrať vetu">${ic('speaker',16)}</button>` : ''}</div>${trLine(c, it.ex)}<p class="muted">${esc(it.exSk)}</p></div>` : ''}
      ${it.note ? `<p class="note">${esc(it.note)}</p>` : ''}
    </div>
    <div class="sheet-actions two"><button class="btn" data-act="ctl" data-fn="known">Toto už viem</button><button class="btn btn-primary" data-act="ctl" data-fn="next">Ďalej</button></div>`;
  },
  mc(s, c, cur){
    const it = s.it, t2s = s.type !== 'mc_s2t';
    const head = s.type === 'listen'
      ? `<p class="eyebrow">Čo počuješ?</p><div class="listen"><button class="bigplay" data-act="ctl" data-fn="say" data-arg="t" aria-label="Prehrať">${ic('speaker',38)}</button><button class="bigplay sm" data-act="ctl" data-fn="say" data-arg="t-slow" aria-label="Prehrať pomaly">0.7×</button></div>`
      : t2s ? `<p class="eyebrow">Čo to znamená?</p><div class="flash-row"><p class="ex-word" lang="${c}">${fmtT(it)}</p>${sayBtns(c)}</div>${trLine(c, it.t)}`
      : `<p class="eyebrow">Ako sa to povie ${esc(LANGS[c].adv)}?</p><p class="ex-sk">${esc(it.sk)}</p>`;
    const opts = cur.opts.map((o, i) => {
      let cls = ''; if (cur.answered) { if (o.id === it.id) cls = 'right'; else if (i === cur.picked) cls = 'wrong'; }
      return `<button class="opt2 ${t2s ? '' : 't'} ${cls}" ${t2s ? '' : `lang="${c}"`} data-act="ctl" data-fn="pick" data-arg="${i}" ${cur.answered ? 'disabled' : ''}><span class="k">${i+1}</span><span>${t2s ? esc(o.sk) : fmtT(o)}</span></button>`;
    }).join('');
    return `<div class="ex-q">${head}</div><div class="opts">${opts}</div><div id="fbslot" class="sheet-actions"></div>`;
  },
  build(s, c, cur){
    const L = cur.spec.mode === 'l';
    const line = cur.placed.map((ti, pos) => `<button class="wtile ${L ? 'l' : ''}" lang="${c}" data-act="ctl" data-fn="unplace" data-arg="${pos}" ${cur.answered ? 'disabled' : ''}>${esc(cur.tiles[ti])}</button>`).join('')
      || `<span class="muted ord-ph">${L ? 'Ťukaj na písmená v správnom poradí' : 'Ťukaj na slová v správnom poradí'}</span>`;
    const bank = cur.bank.map((ti, pos) => `<button class="wtile ${L ? 'l' : ''}" lang="${c}" data-act="ctl" data-fn="place" data-arg="${pos}">${esc(cur.tiles[ti])}</button>`).join('');
    return `<div class="ex-q"><p class="eyebrow">${s.type === 'sentence' ? 'Poskladaj celú vetu' : 'Poskladaj ' + esc(LANGS[c].adv)}</p><p class="ex-sk">${esc(s.type === 'sentence' ? s.it.exSk : s.it.sk)}</p>${s.type === 'sentence' ? `<p class="muted small">Použi: <b lang="${c}">${esc(s.it.t)}</b></p>` : ''}</div>
      <div class="ord-line ${L ? 'letters' : ''} ${cur.answered ? (cur.res === 'bad' ? 'bad' : 'ok') : ''}">${line}</div>
      ${cur.answered ? '' : `<div class="ord-bank ${L ? 'letters' : ''}">${bank}</div>`}
      <div id="fbslot" class="sheet-actions">${cur.answered ? '' : `<button class="btn btn-primary btn-wide" data-act="ctl" data-fn="checkBuild" ${cur.placed.length < cur.need ? 'disabled' : ''}>Skontrolovať</button>`}</div>`;
  },
  type(s, c, cur){
    const it = s.it, cloze = s.type === 'cloze', f = cloze ? findInEx(it) : null;
    const head = cloze
      ? `<p class="eyebrow">Doplň do vety</p><p class="ex-sent" lang="${c}">${esc(it.ex.slice(0, f.i))}<span class="blank" style="width:${(f.len * 0.55 + 0.8).toFixed(1)}em"></span>${esc(it.ex.slice(f.i + f.len))}</p><p class="muted">${esc(it.exSk)}</p>`
      : `<p class="eyebrow">Napíš ${esc(LANGS[c].adv)}</p><p class="ex-sk">${esc(it.sk)}</p>`;
    const chars = CHARS[c] || [];
    return `<div class="ex-q">${head}<p class="mask" id="mask" lang="${c}" hidden></p></div>
      <input id="ans" class="input" lang="${c}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="${c === 'ru' ? 'Azbukou alebo latinkou' : 'Tvoja odpoveď'}">
      ${chars.length ? `<div class="btnrow">${chars.map(ch => `<button class="btn sm" data-act="ctl" data-fn="ins" data-arg="${ch}" aria-label="Vložiť ${ch}">${ch}</button>`).join('')}</div>` : ''}
      <div id="fbslot" class="sheet-actions"><div class="btnrow" style="justify-content:space-between"><button class="link" data-act="ctl" data-fn="hint">Nápoveda: ďalšie písmeno</button><button class="link" data-act="ctl" data-fn="giveup">Neviem</button></div><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="checkType">Skontrolovať</button></div>`;
  }
};
const RENDER = {intro:R.intro, mc_t2s:R.mc, mc_s2t:R.mc, listen:R.mc, build:R.build, sentence:R.build, type:R.type, cloze:R.type};
function fbHTML(res, it, c, msg, type){
  const head = res === 'ok' ? pickOne(PRAISE) : res === 'near' ? 'Skoro!' : 'Nie celkom.', sent = type === 'sentence';
  return `<div class="fb ${res}" id="fbslot"><p class="fb-h">${head}</p>${sent ? `<p class="fb-a"><b lang="${c}">${esc(it.ex)}</b></p><p class="small">${esc(it.exSk)}</p>${trLine(c, it.ex)}` : `<p class="fb-a"><b lang="${c}">${fmtT(it)}</b> = ${esc(it.sk)}</p>${trLine(c, it.t)}`}${msg ? `<p class="small">${esc(msg)}</p>` : ''}
    <div class="fb-row">${Speech.can(c) ? `<button class="speak" data-act="ctl" data-fn="say" data-arg="${sent ? 'ex' : 't'}" aria-label="Prehrať">${ic('speaker',18)}</button>` : ''}<button class="btn btn-primary" data-act="ctl" data-fn="next">Pokračovať</button></div></div>`;
}

function session(o){
  const c = o.c;
  const st = {steps:o.steps.slice(), i:0, xp:0, ok:0, n:0, miss:{}, seen:new Set(), known:0, cur:null};
  Sheet.show(o.title);
  const paint = keep => { const s = st.steps[st.i]; Sheet.body(RENDER[s.type](s, c, st.cur), keep); };
  const ctrl = {
    draw(){
      if (st.i >= st.steps.length) return ctrl.finish();
      const s = st.steps[st.i];
      if (s.type === 'cloze' && !findInEx(s.it)) s.type = 'type';
      if (s.type === 'listen' && !Speech.can(c)) s.type = 'mc_t2s';
      if (s.type === 'sentence' && !sentenceOK(s.it)) s.type = 'type';
      const cur = st.cur = {answered:false, hint:0, picked:-1, res:null};
      if (s.type === 'mc_t2s' || s.type === 'listen') cur.opts = shuffle([s.it].concat(distract(s.it, 3, 'sk')));
      if (s.type === 'mc_s2t') cur.opts = shuffle([s.it].concat(distract(s.it, 3, 't')));
      if (s.type === 'build' || s.type === 'sentence') {
        const sp = cur.spec = s.type === 'sentence' ? {mode:'w', target:s.it.ex.trim().split(/\s+/), answer:s.it.ex, extra:[]} : buildSpec(s.it); cur.tiles = sp.target.concat(sp.extra); cur.need = sp.target.length; cur.placed = [];
        let b = shuffle(cur.tiles.map((x, i) => i)); if (b.length > 1 && b.every((v, i) => v === i)) b.reverse(); cur.bank = b;
      }
      Sheet.progress(st.i / st.steps.length);
      paint(false);
      if (s.type === 'intro' || s.type === 'mc_t2s' || s.type === 'listen') Speech.say(s.it.t, c);
      if (s.type === 'type' || s.type === 'cloze') { const a = $('#ans'); if (a) a.focus({preventScroll:true}); }
    },
    next(){ st.i++; ctrl.draw(); },
    say(arg){ const it = st.steps[st.i].it, a = String(arg || 't'), slow = /slow$/.test(a); Speech.say(a.startsWith('ex') ? it.ex : it.t, c, slow); },
    known(){
      const it = st.steps[st.i].it;
      P[c].it[it.id] = {ivl:8, ease:2.6, reps:2, lapses:0, due:addDays(dayStart(), 8), last:Date.now(), known:true}; save(c);
      st.known++; st.steps = st.steps.filter((x, j) => j <= st.i || x.it.id !== it.id); ctrl.next();
    },
    pick(i){
      const cur = st.cur; i = +i; if (cur.answered || !cur.opts || !cur.opts[i]) return;
      cur.picked = i; cur.answered = true; cur.res = cur.opts[i].id === st.steps[st.i].it.id ? 'ok' : 'bad';
      paint(true); ctrl.feedback(cur.res);
    },
    place(pos){ const cur = st.cur; if (cur.answered) return; cur.placed.push(cur.bank.splice(+pos, 1)[0]); paint(true); },
    unplace(pos){ const cur = st.cur; if (cur.answered) return; cur.bank.push(cur.placed.splice(+pos, 1)[0]); paint(true); },
    checkBuild(){
      const cur = st.cur; if (cur.answered || cur.placed.length < cur.need) return;
      const got = cur.placed.map(i => cur.tiles[i]).join(cur.spec.mode === 'l' ? '' : ' ');
      cur.res = norm(got) === norm(cur.spec.answer) ? 'ok' : 'bad'; cur.answered = true; paint(true); ctrl.feedback(cur.res);
    },
    ins(ch){
      const a = $('#ans'); if (!a || a.readOnly) return;
      const s0 = a.selectionStart == null ? a.value.length : a.selectionStart, s1 = a.selectionEnd == null ? a.value.length : a.selectionEnd;
      a.value = a.value.slice(0, s0) + ch + a.value.slice(s1); a.focus(); try { a.setSelectionRange(s0 + ch.length, s0 + ch.length); } catch(e) {}
    },
    hint(){
      const cur = st.cur; if (cur.answered) return; const s = st.steps[st.i];
      const target = s.type === 'cloze' ? findInEx(s.it).word : s.it.t;
      cur.hint++; const letters = Array.from(target).filter(isLetter).length;
      if (cur.hint >= letters) return ctrl.giveup();
      const m = $('#mask'); if (m) { m.hidden = false; m.textContent = maskOf(target, cur.hint); }
      const a = $('#ans'); if (a) a.focus({preventScroll:true});
    },
    giveup(){
      const cur = st.cur; if (cur.answered) return; cur.answered = true; cur.res = 'bad';
      const a = $('#ans'); if (a) { a.readOnly = true; a.classList.add('bad'); a.blur(); }
      ctrl.feedback('bad');
    },
    checkType(){
      const cur = st.cur; if (cur.answered) return; const a = $('#ans'); const v = a ? a.value : '';
      if (!v.trim()) { toast('Napíš odpoveď, alebo ťukni na Neviem.'); return; }
      const s = st.steps[st.i]; let g;
      if (s.type === 'cloze') g = {r:check(v, findInEx(s.it).word, c)}; else g = gradeType(v, s.it);
      if (g.r === 'near' && !g.msg) g.msg = 'Skontroluj diakritiku.';
      cur.answered = true; cur.res = g.r; a.readOnly = true; a.classList.add(g.r === 'bad' ? 'bad' : 'ok'); a.blur();
      ctrl.feedback(g.r, g.msg);
    },
    feedback(res, msg){
      const s = st.steps[st.i], slot = $('#fbslot');
      if (slot) slot.outerHTML = fbHTML(res, s.it, c, msg, s.type);
      if (!(s.type === 'mc_t2s' || s.type === 'listen')) Speech.say(s.type === 'sentence' ? s.it.ex : s.it.t, c);
      ctrl.record(res);
      requestAnimationFrame(() => { const sh = $('#sheet'); sh.scrollTo({top:sh.scrollHeight, behavior:'smooth'}); });
    },
    record(res){
      const s = st.steps[st.i], it = s.it, ok = res !== 'bad';
      st.n++; st.seen.add(it.id); if (ok) { st.ok++; st.xp++; addXP(1); }
      const requeue = type => { if ((s.retry||0) < 2) st.steps.splice(Math.min(st.i + 3, st.steps.length), 0, {type, it, retry:(s.retry||0) + 1}); };
      if (o.mode === 'lesson') { if (!ok) { st.miss[it.id] = (st.miss[it.id]||0) + 1; requeue(s.type); } }
      else if (o.mode === 'review') {
        const p = P[c].it[it.id];
        if (p && p.due < endToday()) {
          const g = res === 'bad' ? 0 : (res === 'near' || st.cur.hint) ? 1 : 2;
          P[c].it[it.id] = Object.assign(schedule(p, g), {last:Date.now()}); save(c);
          if (g === 0) requeue('mc_s2t');
        }
      }
      else if (!ok) requeue(s.type);
      Sheet.progress((st.i + 1) / st.steps.length);
    },
    key(e){
      const s = st.steps[st.i]; if (!s || !st.cur) return;
      const inInput = e.target && e.target.matches && e.target.matches('input,textarea');
      if (s.type === 'intro' || st.cur.answered) { if (e.key === 'Enter' || (!inInput && e.key === ' ')) { e.preventDefault(); ctrl.next(); } return; }
      if ((s.type === 'mc_t2s' || s.type === 'mc_s2t' || s.type === 'listen') && e.key.length === 1 && '1234'.includes(e.key)) { ctrl.pick(+e.key - 1); return; }
      if ((s.type === 'type' || s.type === 'cloze') && e.key === 'Enter') { e.preventDefault(); ctrl.checkType(); return; }
      if (s.type === 'build' || s.type === 'sentence') {
        if (e.key === 'Enter') { e.preventDefault(); ctrl.checkBuild(); }
        else if (e.key === 'Backspace' && st.cur.placed.length) { e.preventDefault(); ctrl.unplace(st.cur.placed.length - 1); }
      }
    },
    finish(){
      Sheet.progress(1, '');
      const pct = st.n ? Math.round(st.ok / st.n * 100) : 100;
      if (o.mode === 'lesson') {
        const learned = [];
        for (const it of o.items) {
          const p = P[c].it[it.id]; if (p && p.known) continue;
          const m = st.miss[it.id] || 0;
          P[c].it[it.id] = {ivl:1, ease:Math.max(1.3, 2.5 - 0.15 * Math.min(m, 3)), reps:1, lapses:0, due:addDays(dayStart(), 1), last:Date.now()};
          learned.push(it);
        }
        logDay(c, 'l'); if (learned.length) { addXP(5); st.xp += 5; } save(c);
        const more = nextNewItems(c, S.perLesson).length;
        Sheet.body(doneHTML({c, xp:st.xp, title:!learned.length ? 'Toto všetko už vieš!' : pct >= 80 ? praise(c) : pct >= 50 ? 'Dobrá práca!' : 'Dobrý začiatok!',
          line:learned.length ? `${learned.length} ${learned.length === 1 ? 'nové slovíčko' : learned.length < 5 ? 'nové slovíčka' : 'nových slovíčok'} · ${pct} % správne` : `${st.known} ${slovicok(st.known)} si označil ako známe.`,
          extra:learned.length ? `<div class="learned">${learned.map(it => `<span lang="${c}">${esc(it.t)}</span>`).join('')}</div><p class="muted small">Zajtra ti ich pripomeniem v opakovaní, aby sa uložili natrvalo.</p>` : '',
          actions:more ? `<button class="btn btn-primary btn-wide" data-act="ctl" data-fn="more">Ďalšia lekcia</button>` : ''}));
      } else if (o.mode === 'review') {
        logDay(c, 'r');
        const left = dueItems(c).length, more = nextNewItems(c, S.perLesson).length, lessonDone = todayLog(c).l > 0;
        Sheet.body(doneHTML({c, xp:st.xp, title:pct >= 80 ? praise(c) : pct >= 50 ? 'Dobrá práca!' : 'Zopakované, zajtra to pôjde lepšie', line:`${st.seen.size} ${slovicok(st.seen.size)} zopakovaných · ${pct} % správne`,
          actions:left ? `<button class="btn btn-primary btn-wide" data-act="ctl" data-fn="review">Opakovať ďalej (${left})</button>`
            : more && !lessonDone ? `<button class="btn btn-primary btn-wide" data-act="ctl" data-fn="more">Pokračovať novou lekciou</button>` : ''}));
      } else {
        Sheet.body(doneHTML({c, xp:st.xp, line:`${st.n} úloh · ${pct} % správne`, actions:o.again ? `<button class="btn btn-wide" data-act="ctl" data-fn="again">Ešte raz</button>` : ''}));
      }
    },
    more(){ startLesson(c); },
    review(){ startReview(c); },
    again(){ if (o.again) o.again(); }
  };
  Sheet.ctrl = ctrl; ctrl.draw();
}
function startLesson(c, unitId){
  const items = nextNewItems(c, S.perLesson, unitId);
  if (!items.length) { toast(unitId ? 'V tejto lekcii už nič nové nie je.' : 'Všetko je prebraté. Pridaj si vlastné slovíčka.'); return; }
  const u = unitOf(items[0]);
  session({c, mode:'lesson', items, steps:lessonSteps(items, c), title:u.n ? `Lekcia ${u.n}: ${u.title}` : u.title});
}
function startReview(c){
  const due = dueItems(c).slice(0, 30);
  if (!due.length) { toast('Teraz nič nečaká na opakovanie.'); return; }
  session({c, mode:'review', steps:due.map(it => ({type:reviewType(it, P[c].it[it.id], c), it})), title:'Opakovanie · ' + LANGS[c].name});
}
function startPractice(c, unitId){
  const items = shuffle(unitItems(c, unitId).filter(it => P[c].it[it.id])).slice(0, 10);
  if (items.length < 2) { toast('Najprv sa nauč aspoň dve slovíčka z tejto lekcie.'); return; }
  session({c, mode:'practice', steps:items.map(it => ({type:reviewType(it, P[c].it[it.id], c), it})), title:'Precvičovanie', again:() => startPractice(c, unitId)});
}

/* ───────────── games ───────────── */
const parsePairs = s => String(s||'').split('|').filter(Boolean).map(x => { const i = x.indexOf('='); return {t:x.slice(0,i).trim(), sk:x.slice(i+1).trim()}; });
function genderWords(c){ const G = (CONTENT[c]||{}).gender; if (!G) return []; const out = []; for (const a of G.arts) for (const p of parsePairs(G.words[a])) out.push({a, w:p.t, sk:p.sk}); return out; }
function learnedItems(c){ const p = P[c].it; return allItems(c).filter(x => p[x.id]); }
function examplePool(c){ return learnedItems(c).filter(x => x.ex && x.exSk).map(x => ({t:x.ex, sk:x.exSk})); }
function sentPool(c){ const L = lvn(userLevel(c) || 'A2'), near = SENT[c].filter(x => Math.abs(lvn(x.level) - L) <= 1); return near.length >= 6 ? near : SENT[c].slice().sort((a, b) => Math.abs(lvn(a.level) - L) - Math.abs(lvn(b.level) - L)).slice(0, 12); }
function orderPool(c){ return shuffle(examplePool(c)).concat(shuffle(sentPool(c).map(k => ({t:plain(k.t), sk:k.sk})))).filter(k => { const n = wcount(k.t); return n >= 3 && n <= 9; }); }
function dictPool(c){ return shuffle(examplePool(c)).concat(shuffle(sentPool(c).map(k => ({t:plain(k.t), sk:k.sk})))).filter(k => wcount(k.t) <= 9); }
function pairPool(c){ const learned = shuffle(learnedItems(c).filter(x => wcount(x.t) <= 3)); const first = UNITS[c].slice(0, 3).flatMap(u => u.items).filter(x => wcount(x.t) <= 3 && !learned.includes(x)); return learned.concat(first); }
function gameList(c){
  const G = (CONTENT[c]||{}).gender;
  return [
    {id:'gender', icon:ic('dots'), t:G ? G.title : 'Rod podstatných mien', d:'60 sekúnd, čo najviac správnych členov', ok:!!G},
    {id:'fill', icon:ic('fill'), t:'Doplň vetu', d:'Vyber slovo, ktoré do vety patrí', ok:sentPool(c).length >= 4},
    {id:'order', icon:ic('order'), t:'Poskladaj vetu', d:'Slovosled ťukaním na slová', ok:orderPool(c).length >= 3},
    {id:'dict', icon:ic('dict'), t:'Diktát', d:'Vypočuj si vetu a napíš ju', ok:Speech.can(c) && dictPool(c).length >= 3},
    {id:'pairs', icon:ic('pairs'), t:'Páry', d:'Spoj slovo s prekladom na čas', ok:pairPool(c).length >= 5},
    {id:'speak', icon:ic('mic'), t:'Hovor nahlas', d:Rec.can() ? 'Povieš vetu a appka ti povie, ako ti to išlo' : 'Nahraj sa a porovnaj sa so vzorom', ok:canSpeakPractice() && dictPool(c).length >= 3}
  ];
}
function tile(o){ return `<button class="tile" data-act="${o.act}" data-arg="${esc(o.arg||'')}" ${o.dis ? 'disabled' : ''}><span class="tile-ic">${o.icon}</span><b>${esc(o.t)}</b><small>${esc(o.d)}</small>${o.badge ? `<em class="badge">${esc(o.badge)}</em>` : ''}</button>`; }
function suggestTiles(c, skip){
  const games = shuffle(gameList(c).filter(g => g.ok && g.id !== skip)).slice(0, 2);
  const t = games.map(g => tile({act:'game', arg:g.id, icon:g.icon, t:g.t, d:g.d}));
  if (skip !== 'read') t.push(tile({act:'go', arg:'read', icon:ic('read'), t:'Príbeh', d:'Krátke čítanie s prekladom'}));
  return t.slice(0, 2).join('');
}
function gameDone(c, o){ logDay(c, 'g'); Sheet.progress(1, ''); Sheet.meta(''); Sheet.body(doneHTML(Object.assign({c, actions:`<button class="btn btn-wide" data-act="ctl" data-fn="again">Ešte raz</button>`}, o))); }

function genderGame(c){
  const G = CONTENT[c].gender, arts = G.arts, pool = genderWords(c); let list = shuffle(pool), timer = null;
  const st = {i:0, score:0, combo:0, max:0, time:60, wrong:[], lock:false, run:false};
  Sheet.show(G.title); Sheet.cleanup = () => clearInterval(timer);
  const col = a => `var(--${G.col[a]})`;
  const ctrl = {
    intro(){
      const best = P[c].best.gender || 0;
      Sheet.body(`<div class="intro"><h2 class="h1">${esc(G.title)}</h2>
        <p class="muted">Máš 60 sekúnd. Ku každému slovu ťukni na správny člen. Od piatich správnych za sebou dostávaš dvojnásobné body.</p>
        <div class="art-legend">${arts.map(a => `<span class="art-chip" style="--ac:${col(a)}">${esc(a)}</span>`).join('')}</div>
        <p class="muted small">Farby sa oplatí zapamätať: mužský rod modrý, ženský červený${arts.length > 2 ? ', stredný zelený' : ''}. Rovnaké farby uvidíš aj v lekciách.${FINE ? ' Na klávesnici použi 1–' + arts.length + '.' : ''}</p>
        ${best ? `<p>Tvoj rekord: <b>${best}</b></p>` : ''}</div>
        <div class="sheet-actions"><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="start">Štart</button></div>`);
    },
    start(){ st.run = true; Sheet.meta('60 s'); timer = setInterval(() => { st.time--; Sheet.meta(st.time + ' s'); Sheet.progress(1 - st.time / 60); if (st.time <= 0) ctrl.end(); }, 1000); ctrl.draw(); },
    draw(){
      if (st.i >= list.length) { list = shuffle(pool); st.i = 0; }
      const w = list[st.i];
      Sheet.body(`<div class="gg-stage" id="gg"><p class="gg-art" id="gg-art"></p><p class="gg-word" lang="${c}">${esc(w.w)}</p>${trLine(c, w.w)}<p class="muted">${esc(w.sk)}</p></div>
        <p class="gg-score"><span>Body <b>${st.score}</b></span><span>Séria <b>${st.combo}</b></span></p>
        <div class="gg-btns" style="--n:${arts.length}">${arts.map(a => `<button class="art" style="--ac:${col(a)}" data-act="ctl" data-fn="pick" data-arg="${esc(a)}">${esc(a)}</button>`).join('')}</div>`, true);
    },
    pick(a){
      if (!st.run || st.lock) return; const w = list[st.i], right = a === w.a; st.lock = true;
      const art = $('#gg-art'); art.textContent = w.a; art.style.color = col(w.a);
      if (right) { st.combo++; st.max = Math.max(st.max, st.combo); st.score += st.combo >= 5 ? 2 : 1; $('#gg').classList.add('right'); }
      else { st.combo = 0; st.wrong.push(w); $('#gg').classList.add('wrong'); }
      setTimeout(() => { st.lock = false; st.i++; if (st.run) ctrl.draw(); }, right ? 280 : 900);
    },
    key(e){ const i = e.key.length === 1 ? '123'.indexOf(e.key) : -1; if (st.run && i >= 0 && i < arts.length) ctrl.pick(arts[i]); else if (!st.run && e.key === 'Enter' && st.time === 60) ctrl.start(); },
    end(){
      clearInterval(timer); st.run = false; addXP(st.score);
      const rec = st.score > (P[c].best.gender || 0); if (rec) { P[c].best.gender = st.score; save(c); }
      const seen = new Set(), wrong = st.wrong.filter(w => !seen.has(w.w) && seen.add(w.w));
      gameDone(c, {xp:st.score, title:rec && st.score > 0 ? 'Nový rekord!' : null, tiles:'gender', line:`${st.score} bodov · najdlhšia séria ${st.max}`,
        extra:wrong.length ? `<div><p class="eyebrow">Zopakuj si</p><div class="wrong-list" lang="${c}">${wrong.map(w => `<span><b style="color:${col(w.a)}">${esc(w.a)}</b> ${esc(w.w)}</span>`).join('')}</div></div>` : ''});
    },
    again(){ genderGame(c); }
  };
  Sheet.ctrl = ctrl; ctrl.intro();
}

function fillGame(c){
  const pool = shuffle(sentPool(c)).slice(0, 8), answers = [...new Set(SENT[c].map(k => splitCloze(k.t)[1]))];
  const st = {r:0, ok:0, xp:0, answered:false, picked:-1, opts:[], right:false};
  Sheet.show('Doplň vetu');
  const ctrl = {
    draw(){
      if (st.r >= pool.length) return gameDone(c, {xp:st.xp, line:`${st.ok} z ${pool.length} správne`, tiles:'fill'});
      const ans = splitCloze(pool[st.r].t)[1];
      st.opts = shuffle([ans].concat(shuffle(answers.filter(x => norm(x) !== norm(ans))).slice(0, 3)));
      st.answered = false; st.picked = -1; Sheet.progress(st.r / pool.length, (st.r + 1) + ' / ' + pool.length); ctrl.paint(false);
    },
    paint(keep){
      const k = pool[st.r], [a, ans, b] = splitCloze(k.t);
      Sheet.body(`<div class="ex-q"><p class="eyebrow">Ktoré slovo chýba?</p><p class="ex-sent" lang="${c}">${esc(a)}${st.answered ? `<mark class="hl">${esc(ans)}</mark>` : `<span class="blank" style="width:${(ans.length * 0.55 + 0.8).toFixed(1)}em"></span>`}${esc(b)}</p>${st.answered ? trLine(c, k.t) : ''}<p class="muted">${esc(k.sk)}</p></div>
        <div class="opts">${st.opts.map((o, i) => { let cls = ''; if (st.answered) { if (o === ans) cls = 'right'; else if (i === st.picked) cls = 'wrong'; } return `<button class="opt2 t ${cls}" lang="${c}" data-act="ctl" data-fn="pick" data-arg="${i}" ${st.answered ? 'disabled' : ''}><span class="k">${i+1}</span><span>${esc(o)}</span></button>`; }).join('')}</div>
        ${st.answered ? `<div class="fb ${st.right ? 'ok' : 'bad'}"><p class="fb-h">${st.right ? pickOne(PRAISE) : 'Nie celkom.'}</p>${k.note ? `<p class="small">${esc(k.note)}</p>` : ''}<div class="fb-row">${Speech.can(c) ? `<button class="speak" data-act="ctl" data-fn="say" aria-label="Prehrať">${ic('speaker',18)}</button>` : ''}<button class="btn btn-primary" data-act="ctl" data-fn="next">Pokračovať</button></div></div>` : ''}`, keep);
    },
    pick(i){ if (st.answered) return; st.picked = +i; st.answered = true; st.right = st.opts[+i] === splitCloze(pool[st.r].t)[1]; if (st.right) { st.ok++; st.xp += 2; addXP(2); } ctrl.paint(true); Speech.say(pool[st.r].t, c); },
    say(){ Speech.say(pool[st.r].t, c); },
    next(){ st.r++; ctrl.draw(); },
    key(e){ if (!st.answered && e.key.length === 1 && '1234'.includes(e.key)) ctrl.pick(+e.key - 1); else if (st.answered && e.key === 'Enter') { e.preventDefault(); ctrl.next(); } },
    again(){ fillGame(c); }
  };
  Sheet.ctrl = ctrl; ctrl.draw();
}

function orderGame(c){
  const rounds = orderPool(c).slice(0, 5);
  const st = {r:0, ok:0, xp:0, words:[], placed:[], bank:[], checked:false, right:false};
  Sheet.show('Poskladaj vetu');
  const ctrl = {
    draw(){
      if (st.r >= rounds.length) return gameDone(c, {xp:st.xp, line:`${st.ok} z ${rounds.length} viet správne`, tiles:'order'});
      st.words = rounds[st.r].t.trim().split(/\s+/); st.placed = []; st.checked = false;
      let order = shuffle(st.words.map((w, i) => i)); if (order.every((v, i) => v === i)) order.reverse();
      st.bank = order; Sheet.progress(st.r / rounds.length, (st.r + 1) + ' / ' + rounds.length); ctrl.paint(false);
    },
    paint(keep){
      const k = rounds[st.r];
      Sheet.body(`<div class="ex-q"><p class="eyebrow">Poskladaj ${esc(LANGS[c].adv)}</p><p class="ex-sk">${esc(k.sk)}</p></div>
        <div class="ord-line ${st.checked ? (st.right ? 'ok' : 'bad') : ''}">${st.placed.map((wi, pos) => `<button class="wtile" lang="${c}" data-act="ctl" data-fn="unplace" data-arg="${pos}">${esc(st.words[wi])}</button>`).join('') || '<span class="muted ord-ph">Ťukaj na slová v správnom poradí</span>'}</div>
        <div class="ord-bank">${st.bank.map((wi, pos) => `<button class="wtile" lang="${c}" data-act="ctl" data-fn="place" data-arg="${pos}">${esc(st.words[wi])}</button>`).join('')}</div>
        ${st.checked ? `<div class="fb ${st.right ? 'ok' : 'bad'}"><p class="fb-h">${st.right ? pickOne(PRAISE) : 'Správne poradie:'}</p>${st.right ? '' : `<p class="fb-a"><b lang="${c}">${esc(st.words.join(' '))}</b></p>`}${trLine(c, k.t)}<div class="fb-row">${Speech.can(c) ? `<button class="speak" data-act="ctl" data-fn="say" aria-label="Prehrať">${ic('speaker',18)}</button>` : ''}<button class="btn btn-primary" data-act="ctl" data-fn="next">Pokračovať</button></div></div>`
          : `<div class="sheet-actions"><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="check" ${st.bank.length ? 'disabled' : ''}>Skontrolovať</button></div>`}`, keep);
    },
    place(pos){ if (st.checked) return; st.placed.push(st.bank.splice(+pos, 1)[0]); ctrl.paint(true); },
    unplace(pos){ if (st.checked) return; st.bank.push(st.placed.splice(+pos, 1)[0]); ctrl.paint(true); },
    check(){ st.right = norm(st.placed.map(i => st.words[i]).join(' ')) === norm(st.words.join(' ')); st.checked = true; if (st.right) { st.ok++; st.xp += 3; addXP(3); } Speech.say(rounds[st.r].t, c); ctrl.paint(true); },
    say(){ Speech.say(rounds[st.r].t, c); },
    next(){ st.r++; ctrl.draw(); },
    key(e){ if (e.key === 'Enter') { e.preventDefault(); if (st.checked) ctrl.next(); else if (!st.bank.length) ctrl.check(); } },
    again(){ orderGame(c); }
  };
  Sheet.ctrl = ctrl; ctrl.draw();
}

function dictGame(c){
  const rounds = dictPool(c).slice(0, 5);
  const st = {r:0, ok:0, xp:0, checked:false};
  Sheet.show('Diktát');
  const ctrl = {
    intro(){ Sheet.body(`<div class="intro"><h2 class="h1">Diktát</h2><p class="muted">Vypočuješ si ${rounds.length} viet. Napíš presne, čo počuješ. Pomalá verzia pomôže na ťažkých miestach.</p>${c === 'ru' ? '<p class="muted small">Ruštinu môžeš písať azbukou aj latinkou.</p>' : ''}</div>
      <div class="sheet-actions"><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="draw">Začať</button></div>`); },
    draw(){
      if (st.r >= rounds.length) return gameDone(c, {xp:st.xp, line:`${st.ok} z ${rounds.length} viet bez chyby`, tiles:'dict'});
      st.checked = false; Sheet.progress(st.r / rounds.length, (st.r + 1) + ' / ' + rounds.length);
      Sheet.body(`<div class="listen"><button class="bigplay" data-act="ctl" data-fn="say" aria-label="Prehrať">${ic('speaker',38)}</button><button class="bigplay sm" data-act="ctl" data-fn="say" data-arg="slow" aria-label="Prehrať pomaly">0.7×</button></div>
        <textarea id="dict-in" class="input" rows="3" lang="${c}" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Napíš, čo počuješ"></textarea>
        ${(CHARS[c]||[]).length ? `<div class="btnrow">${CHARS[c].map(ch => `<button class="btn sm" data-act="ctl" data-fn="ins" data-arg="${ch}">${ch}</button>`).join('')}</div>` : ''}
        <div id="dict-res"></div>
        <div class="sheet-actions" id="dict-act"><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="check">Skontrolovať</button><button class="link center" data-act="ctl" data-fn="check" data-arg="give">Neviem, ukáž mi to</button></div>`);
      Speech.say(rounds[st.r].t, c);
    },
    say(arg){ Speech.say(rounds[st.r].t, c, arg === 'slow'); },
    ins(ch){ const a = $('#dict-in'); if (!a || a.readOnly) return; const s0 = a.selectionStart, s1 = a.selectionEnd; a.value = a.value.slice(0, s0) + ch + a.value.slice(s1); a.focus(); try { a.setSelectionRange(s0 + 1, s0 + 1); } catch(e) {} },
    check(arg){
      if (st.checked) return; st.checked = true; const k = rounds[st.r];
      const v = arg === 'give' ? '' : ($('#dict-in').value || '');
      const tw = k.t.trim().split(/\s+/), uw = norm(v).split(' ');
      const marks = tw.map((w, i) => { const n = norm(w); if (!n) return 'ok'; return uw[i] ? check(uw[i], n, c) : 'bad'; });
      const right = !!v.trim() && marks.every(m => m !== 'bad');
      if (right) { st.ok++; st.xp += 3; addXP(3); }
      $('#dict-in').readOnly = true; $('#dict-in').blur();
      $('#dict-res').innerHTML = `<div class="fb ${right ? 'ok' : 'bad'}"><p class="fb-h">${right ? pickOne(PRAISE) : 'Správne znenie:'}</p><p class="ex-sent" lang="${c}">${tw.map((w, i) => `<span class="${marks[i] === 'bad' ? 'ga-f' : marks[i] === 'near' ? '' : ''}">${esc(w)}</span>`).join(' ')}</p>${trLine(c, k.t)}<p class="muted">${esc(k.sk)}</p></div>`;
      $('#dict-act').innerHTML = `<button class="btn btn-primary btn-wide" data-act="ctl" data-fn="next">Pokračovať</button>`;
    },
    next(){ st.r++; ctrl.draw(); },
    key(e){ if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (st.checked) ctrl.next(); else if ($('#dict-in')) ctrl.check(); } },
    again(){ dictGame(c); }
  };
  Sheet.ctrl = ctrl; ctrl.intro();
}

function pairsGame(c){
  const all = pairPool(c), rounds = [];
  for (let i = 0; i < 3 && all.length >= (i + 1) * 5; i++) rounds.push(shuffle(all.slice(i * 5, i * 5 + 5)));
  const st = {r:0, sel:{t:null, s:null}, done:new Set(), miss:0, xp:0, t0:Date.now(), shake:null, L:[], R:[]};
  Sheet.show('Páry'); let tm = null; Sheet.cleanup = () => clearTimeout(tm);
  const ctrl = {
    draw(){
      if (st.r >= rounds.length) { const sec = Math.round((Date.now() - st.t0) / 1000); return gameDone(c, {xp:st.xp, tiles:'pairs', line:`${st.xp} párov · ${st.miss} ${st.miss === 1 ? 'chyba' : st.miss >= 2 && st.miss <= 4 ? 'chyby' : 'chýb'} · ${sec} s`}); }
      const Rr = rounds[st.r]; st.done = new Set(); st.sel = {t:null, s:null};
      st.L = shuffle(Rr.map((p, i) => i)); st.R = shuffle(Rr.map((p, i) => i));
      Sheet.progress(st.r / rounds.length, 'Kolo ' + (st.r + 1) + ' / ' + rounds.length); ctrl.paint(false);
    },
    paint(keep){
      const Rr = rounds[st.r], sh = st.shake || [];
      const btn = (side, i, label) => `<button class="pbtn ${side} ${st.done.has(i) ? 'done' : ''} ${st.sel[side] === i ? 'sel' : ''} ${sh[0] === side + i || sh[1] === side + i ? 'shake' : ''}" ${side === 't' ? `lang="${c}"` : ''} data-act="ctl" data-fn="tap" data-arg="${side}:${i}">${esc(label)}</button>`;
      Sheet.body(`<p class="muted">Ťukni na slovo a potom na jeho preklad.</p>
        <div class="pairs"><div class="pcol">${st.L.map(i => btn('t', i, Rr[i].t)).join('')}</div><div class="pcol">${st.R.map(i => btn('s', i, Rr[i].sk)).join('')}</div></div>`, keep);
      st.shake = null;
    },
    tap(arg){
      const [side, n] = String(arg).split(':'), i = +n; if (st.done.has(i)) return;
      st.sel[side] = st.sel[side] === i ? null : i;
      if (st.sel.t !== null && st.sel.s !== null) {
        const Rr = rounds[st.r];
        if (st.sel.t === st.sel.s) { st.done.add(i); st.xp++; addXP(1); Speech.say(Rr[i].t, c); }
        else { st.miss++; st.shake = ['t' + st.sel.t, 's' + st.sel.s]; }
        st.sel = {t:null, s:null};
      }
      ctrl.paint(true);
      if (st.done.size === rounds[st.r].length) tm = setTimeout(() => { st.r++; ctrl.draw(); }, 450);
    },
    again(){ pairsGame(c); }
  };
  Sheet.ctrl = ctrl; ctrl.draw();
}
function openGame(id){
  const c = S.active, g = gameList(c).find(x => x.id === id);
  if (!g || !g.ok) { toast(id === 'speak' ? 'Tento prehliadač nepodporuje mikrofón.' : id === 'dict' ? 'Diktát potrebuje hlas pre tento jazyk, ktorý tu chýba.' : 'Na túto hru zatiaľ nie je dosť naučených slov. Začni lekciou.'); return; }
  ({gender:genderGame, fill:fillGame, order:orderGame, dict:dictGame, pairs:pairsGame, speak:speakGame})[id](c);
}

/* ───────────── course: unit sheet & own words ───────────── */
function statusChip(p){ if (!p) return ''; if (p.ivl >= 21) return '<span class="st-chip m">Zvládnuté</span>'; return '<span class="st-chip l">Učím sa</span>'; }
function unitSheet(c, unitId){
  const u = unitId === 'mine' ? {id:'mine', n:0, title:'Moje slovíčka', desc:'Slová, ktoré si si pridal sám alebo z príbehov.'} : UNITS[c].find(x => x.id === unitId);
  if (!u) return;
  const st = {confirm:null};
  Sheet.show(u.n ? `Lekcia ${u.n}: ${u.title}` : u.title);
  const ctrl = {
    paint(keep){
      const items = unitItems(c, unitId), p = P[c].it;
      const fresh = items.filter(x => !p[x.id]), learned = items.length - fresh.length;
      Sheet.progress(items.length ? learned / items.length : 0, `${learned}/${items.length}`);
      Sheet.body(`<div class="intro" style="padding-top:4px"><p class="muted">${esc(u.desc)}</p></div>
        <div class="sheet-actions" style="margin-top:0">
          ${fresh.length ? `<button class="btn btn-primary btn-wide" data-act="ctl" data-fn="learn">Učiť sa nové (${Math.min(S.perLesson, fresh.length)})</button>` : ''}
          ${learned >= 2 ? `<button class="btn btn-wide" data-act="ctl" data-fn="practice">${ic('repeat',18)} Precvičiť naučené</button>` : ''}
          ${unitId === 'mine' ? `<button class="btn btn-wide" data-act="ctl" data-fn="add">${ic('plus',18)} Pridať slovíčko</button>` : ''}
        </div>
        <div class="wlist">${items.map(x => `<div class="wrow"><p lang="${c}">${fmtT(x)}${statusChip(p[x.id])}</p>${Speech.can(c) ? `<button class="speak" data-act="ctl" data-fn="say" data-arg="${esc(x.id)}" aria-label="Prehrať">${ic('speaker',16)}</button>` : ''}<p class="muted">${esc(x.sk)}${unitId === 'mine' ? ` · <button class="link" style="color:var(--bad);padding:0" data-act="ctl" data-fn="del" data-arg="${esc(x.id)}">${st.confirm === x.id ? 'Naozaj zmazať?' : 'Zmazať'}</button>` : ''}</p></div>`).join('') || '<p class="muted">Zatiaľ tu nič nie je.</p>'}</div>
        ${fresh.length > 1 && unitId !== 'mine' ? `<button class="link center" data-act="ctl" data-fn="knowAll">${st.confirm === 'all' ? 'Naozaj? Všetky nové sa označia ako známe' : 'Toto všetko už viem'}</button>` : ''}`, keep);
    },
    learn(){ startLesson(c, unitId); },
    practice(){ startPractice(c, unitId); },
    add(){ addWordSheet(c); },
    say(id){ const x = unitItems(c, unitId).find(y => y.id === id); if (x) Speech.say(x.t, c); },
    knowAll(){
      if (st.confirm !== 'all') { st.confirm = 'all'; return ctrl.paint(true); }
      const p = P[c].it; unitItems(c, unitId).forEach(x => { if (!p[x.id]) p[x.id] = {ivl:8, ease:2.6, reps:2, lapses:0, due:addDays(dayStart(), 8), last:Date.now(), known:true}; });
      st.confirm = null; save(c); ctrl.paint(true); toast('Označené ako známe. O týždeň si ich zopakuješ.');
    },
    del(id){
      if (st.confirm !== id) { st.confirm = id; return ctrl.paint(true); }
      P[c].custom = P[c].custom.filter(x => x.id !== id); delete P[c].it[id]; st.confirm = null; save(c); ctrl.paint(true); toast('Slovíčko zmazané.');
    }
  };
  Sheet.ctrl = ctrl; ctrl.paint(false);
}
function addWordSheet(c){
  const L = LANGS[c]; Sheet.show('Pridať slovíčko');
  const ctrl = {
    paint(){
      Sheet.body(`<div class="intro"><h2 class="h1">Vlastné slovíčko</h2><p class="muted">Počul si niečo v seriáli alebo v práci? Pridaj si to a appka ťa to naučí rovnako ako ostatné.</p></div>
        <form class="form" id="addform">
          <label for="w-t">Slovo alebo fráza ${esc(L.adv)}</label><input id="w-t" class="input" lang="${c}" autocomplete="off" autocapitalize="off" placeholder="${c === 'de' ? 'napr. die Gelegenheit' : 'slovo alebo fráza'}" required>
          <label for="w-sk">Význam po slovensky</label><input id="w-sk" class="input" autocomplete="off" placeholder="napr. príležitosť" required>
          <label for="w-ex">Príkladová veta (nepovinné)</label><input id="w-ex" class="input" lang="${c}" autocomplete="off" placeholder="veta, v ktorej si to počul">
          ${c === 'de' ? '<p class="muted small">Pri podstatných menách napíš aj člen (der, die, das). Appka ho zafarbí a bude ho od teba chcieť.</p>' : ''}
          <button class="btn btn-primary btn-wide" type="submit">Uložiť</button>
        </form>`);
      setTimeout(() => { const a = $('#w-t'); if (a && FINE) a.focus(); }, 50);
    },
    submit(){
      const t = ($('#w-t').value || '').trim(), sk = ($('#w-sk').value || '').trim(), ex = ($('#w-ex').value || '').trim();
      if (!t || !sk) { toast('Vyplň slovo aj jeho význam.'); return; }
      if (allItems(c).some(x => norm(x.t) === norm(t))) { toast('Toto slovíčko už v appke máš.'); return; }
      P[c].custom.push({id:uid(), t, sk, ex, exSk:''}); save(c);
      Sheet.body(`<div class="finish"><div class="stamp"><span>${esc(L.self)}</span><b>+1</b><span>nové slovíčko</span></div><h2 class="h1">Uložené</h2><p class="muted" lang="${c}">${esc(t)} = ${esc(sk)}</p>
        <div class="sheet-actions" style="width:100%"><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="learn">Naučiť sa ho hneď</button><button class="btn btn-wide" data-act="ctl" data-fn="paint">Pridať ďalšie</button><button class="btn btn-wide" data-act="close-sheet">Hotovo</button></div></div>`);
    },
    learn(){ startLesson(c, 'mine'); }
  };
  Sheet.ctrl = ctrl; ctrl.paint();
}
function pasteSheet(){
  Sheet.show('Vložiť zálohu');
  Sheet.body(`<div class="intro"><h2 class="h1">Vlož zálohu</h2><p class="muted">Na druhom zariadení ťukni na Kopírovať, pošli si text (napr. cez Poznámky alebo AirDrop) a vlož ho sem. Pokrok sa spojí, nič sa nestratí.</p></div>
    <textarea id="paste-in" class="input" rows="8" autocomplete="off" spellcheck="false" placeholder='{"app":"jazykovy-pas", …}'></textarea>
    <div class="sheet-actions"><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="go">Načítať zálohu</button></div>`);
  Sheet.ctrl = { go(){ if (importText($('#paste-in').value)) Sheet.close(); } };
}

/* ───────────── reading ───────────── */
const trOpen = {};
function glossify(text, gloss, used, c){
  const low = text.toLocaleLowerCase(), ranges = [];
  (gloss || []).forEach((g, gi) => {
    if (used.has(gi) || !g.w) return; const idx = low.indexOf(String(g.w).toLocaleLowerCase()); if (idx < 0) return;
    const end = idx + g.w.length; if (ranges.some(r => idx < r.e && end > r.s)) return;
    ranges.push({s:idx, e:end, gi}); used.add(gi);
  });
  ranges.sort((a, b) => a.s - b.s);
  const cus = P[c].custom || [];
  let out = '', p = 0;
  for (const r of ranges) { const saved = cus.some(k => k.t === gloss[r.gi].w); out += esc(text.slice(p, r.s)) + `<button class="gl ${saved ? 'saved' : ''}" data-act="gloss" data-arg="${r.gi}">${esc(text.slice(r.s, r.e))}</button>`; p = r.e; }
  return out + esc(text.slice(p));
}
function sentenceWith(text, w){ const parts = String(text).split(/(?<=[.!?…»])\s+/); const lw = w.toLocaleLowerCase(); return parts.find(p => p.toLocaleLowerCase().includes(lw)) || ''; }
function storiesOf(c){ const L = CONTENT[c] || {}; return [L.story].concat(L.stories || []).filter(Boolean).map((s, i) => Object.assign({level:'A2', idx:i}, s)).sort((a, b) => (LV[a.level]||2) - (LV[b.level]||2) || a.idx - b.idx); }
const stState = (c, s) => P[c].st[s.title] || (P[c].st[s.title] = {answers:{}, done:false});
function curStory(c){
  const all = storiesOf(c); if (!all.length) return null;
  const want = (ls('read') || {})[c];
  const L = lvn(userLevel(c) || 'A2'), unread = all.filter(s => !(P[c].st[s.title] || {}).done).sort((a, b) => Math.abs(lvn(a.level) - L) - Math.abs(lvn(b.level) - L));
  return all.find(s => s.title === want) || unread[0] || all[0];
}
function readSeg(mode){ return `<div class="seg2" role="tablist"><button class="${mode === 'stories' ? 'on' : ''}" data-act="read-mode" data-arg="stories" role="tab" aria-selected="${mode === 'stories'}">${ic('read',16)} Príbehy</button><button class="${mode === 'dialogs' ? 'on' : ''}" data-act="read-mode" data-arg="dialogs" role="tab" aria-selected="${mode === 'dialogs'}">${ic('chat',16)} Rozhovory</button></div>`; }
function renderRead(view){
  const c = S.active, L = LANGS[c], all = storiesOf(c), s = curStory(c), used = new Set();
  if ((ls('readMode') || 'stories') === 'dialogs') {
    view.innerHTML = `<section class="read-head"><p class="eyebrow">Rozhovory · ${esc(L.name)}</p>${readSeg('dialogs')}<h1 class="h1">Hovor ako v skutočnosti</h1><p class="muted">Vypočuj si rozhovor zo skutočnej situácie a potom si zahraj svoju rolu. ${canSpeakPractice() ? 'Repliky môžeš povedať nahlas.' : ''}</p></section>`;
    renderDialogs(view); return;
  }
  if (!s) { view.innerHTML = `<p class="muted">Pre tento jazyk zatiaľ nie je príbeh.</p>`; return; }
  const sst = P[c].st[s.title] || {answers:{}, done:false}, ans = sst.answers || {}, open = (trOpen[c] || {})[s.title] || {};
  view.innerHTML = `<section class="read-head"><p class="eyebrow">Čítanie · ${esc(L.name)} · ${all.filter(x => (P[c].st[x.title] || {}).done).length} z ${all.length} prečítaných</p>${readSeg('stories')}
    <div class="scn">${all.map(x => `<button class="${x.title === s.title ? 'on' : ''}" data-act="story-pick" data-arg="${esc(x.title)}" lang="${c}">${(P[c].st[x.title] || {}).done ? '✓ ' : ''}${esc(x.title)} <small>${esc(x.level)}</small></button>`).join('')}</div>
    <h1 class="h1" lang="${c}">${esc(s.title)}</h1>
    <div class="row-tools">${Speech.can(c) ? `<button class="btn sm" data-act="read-all">${ic('speaker',16)} Prečítať nahlas</button>` : ''}<span class="muted small">Úroveň ${esc(s.level)} · podčiarknuté slová si ťukni a ulož.</span></div></section>
    <article class="story" lang="${c}">${s.paragraphs.map((p, i) => `<div class="para"><p>${glossify(p, s.glossary, used, c)}</p>${trLine(c, p)}
      <div class="para-tools">${Speech.can(c) ? `<button class="link" data-act="say-para" data-arg="${i}">${ic('speaker',15)} Vypočuť</button>` : ''}${s.tr && s.tr[i] ? `<button class="link" data-act="tr-para" data-arg="${i}">${open[i] ? 'Skryť preklad' : 'Preklad'}</button>` : ''}</div>
      ${open[i] && s.tr ? `<p class="tr" lang="sk">${esc(s.tr[i])}</p>` : ''}</div>`).join('')}</article>
    ${s.questions && s.questions.length ? `<section class="quiz"><h2 class="h2">Porozumel si?</h2>${s.questions.map((q, qi) => `<div class="q"><p class="q-t" lang="${c}">${esc(q.q)}</p>${q.options.map((o, oi) => { const a = ans[qi]; let cls = ''; if (a !== undefined) { if (oi === q.answer) cls = 'right'; else if (oi === a) cls = 'wrong'; } return `<button class="opt ${cls}" lang="${c}" data-act="quiz" data-arg="${qi}:${oi}" ${a !== undefined ? 'disabled' : ''}>${esc(o)}</button>`; }).join('')}</div>`).join('')}
      ${sst.done ? `<p class="goal-met">${ic('check',18)} Prečítané</p>` : `<button class="btn btn-primary btn-wide" data-act="story-done">Mám prečítané · +10 XP</button>`}</section>` : ''}
    ${(() => { const nx = all.find(x => x.title !== s.title && !(P[c].st[x.title] || {}).done); return nx ? `<button class="btn btn-wide" data-act="story-pick" data-arg="${esc(nx.title)}">Ďalší príbeh: <span lang="${c}">${esc(nx.title)}</span></button>` : ''; })()}`;
}
function openGloss(gi){
  const c = S.active, s = curStory(c), g = s && s.glossary[gi]; if (!g) return;
  const ctx = sentenceWith(s.paragraphs.join(' '), g.w), saved = (P[c].custom || []).some(k => k.t === g.w);
  const pop = $('#pop');
  pop.innerHTML = `<div class="pop-card" role="dialog" aria-label="Slovíčko">
    <div class="flash-row"><p class="pop-w" lang="${c}">${esc(g.w)}</p>${Speech.can(c) ? `<button class="speak" data-act="pop-say" data-arg="${gi}" aria-label="Prehrať">${ic('speaker',18)}</button>` : ''}</div>
    ${trLine(c, g.w)}<p style="font-size:18px;font-weight:600">${esc(g.sk)}</p>${ctx ? `<p class="pop-ctx" lang="${c}">${esc(ctx)}</p>` : ''}
    <button class="btn ${saved ? '' : 'btn-primary'} btn-wide" data-act="gloss-add" data-arg="${gi}" ${saved ? 'disabled' : ''}>${saved ? 'Už je v tvojich slovíčkach' : 'Pridať do mojich slovíčok'}</button>
    <button class="btn btn-wide" data-act="pop-close">Zavrieť</button></div>`;
  pop.hidden = false; Speech.say(g.w, c);
}
function closePop(){ $('#pop').hidden = true; $('#pop').innerHTML = ''; }

/* ───────────── speaking: speech recognition & recording ───────────── */
const Rec = {
  SR: window.SpeechRecognition || window.webkitSpeechRecognition || null, active:null, broken:false,
  can(){ return !!this.SR && !this.broken; },
  listen(c, done){
    if (!this.SR) { done('unsupported'); return; }
    Speech.stop();
    let finished = false, r;
    const end = (err, alts) => { if (finished) return; finished = true; clearTimeout(t); this.active = null; done(err, alts); };
    const t = setTimeout(() => { try { r && r.stop(); } catch(e) {} }, 9000);
    try { r = new this.SR(); } catch(e) { end('error'); return; }
    r.lang = LANGS[c].loc; r.interimResults = false; r.maxAlternatives = 3; r.continuous = false;
    r.onresult = e => { const res = e.results && e.results[0]; end(null, res ? Array.from(res).map(a => a.transcript) : []); };
    r.onerror = e => end((e && e.error) || 'error');
    r.onend = () => end('no-speech');
    try { r.start(); this.active = r; } catch(e) { end('error'); }
  },
  stop(){ try { if (this.active) this.active.abort ? this.active.abort() : this.active.stop(); } catch(e) {} this.active = null; }
};
const Recorder = {
  mr:null, stream:null, chunks:[], url:null,
  can(){ return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder); },
  recording(){ return !!this.mr; },
  async start(){
    this.stream = await navigator.mediaDevices.getUserMedia({audio:true});
    let opts; try { if (MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported('audio/mp4')) opts = {mimeType:'audio/mp4'}; } catch(e) {}
    this.mr = new MediaRecorder(this.stream, opts); this.chunks = [];
    this.mr.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
    this.mr.start();
  },
  stop(){
    return new Promise(res => {
      const mr = this.mr; if (!mr) return res(null);
      mr.onstop = () => {
        try { this.stream.getTracks().forEach(t => t.stop()); } catch(e) {}
        if (this.url) URL.revokeObjectURL(this.url);
        this.url = this.chunks.length ? URL.createObjectURL(new Blob(this.chunks, {type:mr.mimeType || 'audio/mp4'})) : null;
        this.mr = null; res(this.url);
      };
      try { mr.stop(); } catch(e) { this.mr = null; res(null); }
    });
  },
  play(){ if (!this.url) return; try { Speech.stop(); const a = new Audio(this.url); a.play().catch(() => {}); } catch(e) {} }
};
function stopMic(){ Rec.stop(); if (Recorder.recording()) Recorder.stop(); }
function speechScore(heard, target){
  const toks = x => norm(x).split(' ').filter(Boolean).map(w => strip(w));
  const tw = toks(target); if (!tw.length) return 0;
  let best = 0;
  for (const h of (Array.isArray(heard) ? heard : [heard])) {
    const pool = toks(h); let m = 0;
    for (const w of tw) { const i = pool.indexOf(w); if (i >= 0) { m++; pool.splice(i, 1); } }
    best = Math.max(best, Math.round(m / tw.length * 100));
  }
  return best;
}
const canSpeakPractice = () => Rec.can() || Recorder.can();
function speakPanelHTML(label){
  if (Rec.can()) return `<button class="btn btn-wide mic" data-act="ctl" data-fn="mic">${ic('mic',18)} ${esc(label || 'Povedz to nahlas')}</button><p class="small" id="mic-res" hidden></p>`;
  if (Recorder.can()) return `<div class="btnrow"><button class="btn mic" data-act="ctl" data-fn="rec">${ic('mic',18)} <span id="rec-label">Nahraj sa</span></button><button class="btn" data-act="ctl" data-fn="playRec" id="rec-play" disabled>${ic('speaker',16)} Moja nahrávka</button></div>`;
  return '';
}
/* Shared mic handlers for any sheet controller: getTarget() returns the sentence to say, onScore(score|null) runs once per attempt. */
function speakMethods(c, getTarget, onScore){
  return {
    mic(){
      const el = $('#mic-res'), b = $('.mic'); if (!el) return;
      el.hidden = false; el.style.color = ''; el.textContent = 'Počúvam… hovor teraz.'; if (b) b.disabled = true;
      Rec.listen(c, (err, alts) => {
        if (b) b.disabled = false; const r = $('#mic-res'); if (!r) return;
        if (err) {
          r.style.color = 'var(--warn)';
          if (['not-allowed','service-not-allowed','network','audio-capture','unsupported'].includes(err) && Recorder.can()) {
            Rec.broken = true; const mb = $('.mic'); if (mb) mb.outerHTML = speakPanelHTML();
            r.textContent = 'Rozpoznávanie reči tu nie je dostupné, tak sa radšej nahraj a porovnaj so vzorom.'; return;
          }
          r.textContent = (err === 'not-allowed' || err === 'service-not-allowed') ? 'Appka nemá prístup k mikrofónu alebo k diktovaniu. Na iPhone zapni Nastavenia → Všeobecné → Klávesnica → Diktovanie a povoľ mikrofón.'
            : err === 'no-speech' ? 'Nič som nepočul. Ťukni znova a hovor zreteľne.' : 'Rozpoznávanie reči teraz nefunguje. Skús to znova.';
          return;
        }
        const sc = speechScore(alts, getTarget());
        r.style.color = sc >= 80 ? 'var(--good)' : sc >= 50 ? 'var(--warn)' : 'var(--bad)';
        r.innerHTML = `<b>${sc >= 80 ? 'Výborne!' : sc >= 50 ? 'Skoro!' : 'Skús to ešte raz'} · ${sc} %</b><br><span class="muted">Počul som: „${esc(alts[0] || '')}“</span>`;
        markFlag('speak'); if (onScore) onScore(sc);
      });
    },
    async rec(){
      const lab = $('#rec-label');
      if (Recorder.recording()) {
        const url = await Recorder.stop(); if (lab) lab.textContent = 'Nahraj sa znova';
        const pb = $('#rec-play'); if (pb) pb.disabled = !url;
        if (url) { Recorder.play(); markFlag('speak'); if (onScore) onScore(null); }
        return;
      }
      try { Speech.stop(); await Recorder.start(); if (lab) lab.textContent = 'Zastaviť'; }
      catch(e) { toast('Appka nemá prístup k mikrofónu. Povoľ ho v nastaveniach prehliadača.'); }
    },
    playRec(){ Recorder.play(); }
  };
}
function markFlag(k){ S.flags = S.flags || {}; if (!S.flags[k]) { S.flags[k] = Date.now(); save('settings'); } }

function speakGame(c){
  const rounds = shuffle(dictPool(c)).slice(0, 5), st = {r:0, xp:0, scores:[], done:false};
  Sheet.show('Hovor nahlas'); Sheet.cleanup = stopMic;
  const ctrl = Object.assign({
    draw(){
      stopMic();
      if (st.r >= rounds.length) { const avg = st.scores.length ? Math.round(st.scores.reduce((a, b) => a + b, 0) / st.scores.length) : null; return gameDone(c, {xp:st.xp, tiles:'speak', line:`${rounds.length} viet nahlas${avg != null ? ` · priemerne ${avg} %` : ''}`}); }
      const k = rounds[st.r]; st.done = false; Sheet.progress(st.r / rounds.length, (st.r + 1) + ' / ' + rounds.length);
      Sheet.body(`<div class="ex-q"><p class="eyebrow">Vypočuj si vetu a povedz ju nahlas</p><div class="flash-row"><p class="ex-sent" lang="${c}">${esc(k.t)}</p>${sayBtns(c)}</div>${trLine(c, k.t)}<p class="muted">${esc(k.sk)}</p></div>
        <p class="small muted">${Rec.can() ? 'Appka porovná, čo povieš, so vzorom.' : 'Nahraj sa a porovnaj svoju výslovnosť so vzorom.'} Hovor pomaly a zreteľne.</p>
        <div class="sheet-actions">${speakPanelHTML()}<button class="btn btn-primary btn-wide" data-act="ctl" data-fn="next">Ďalšia veta</button></div>`);
      Speech.say(k.t, c);
    },
    say(arg){ Speech.say(rounds[st.r].t, c, /slow/.test(arg || '')); },
    next(){ st.r++; ctrl.draw(); },
    again(){ speakGame(c); }
  }, speakMethods(c, () => rounds[st.r].t, sc => { if (st.done) return; st.done = true; const x = sc == null ? 2 : sc >= 80 ? 3 : sc >= 50 ? 2 : 1; st.xp += x; addXP(x); if (sc != null) st.scores.push(sc); }));
  Sheet.ctrl = ctrl; ctrl.draw();
}

/* ───────────── dialogues (role-play) ───────────── */
const dialogsOf = c => ((CONTENT[c] || {}).dialogues || []).slice().sort((a, b) => lvn(a.level) - lvn(b.level));
function dialogSheet(c, id){
  const d = dialogsOf(c).find(x => x.id === id); if (!d) return;
  const L = lvn(userLevel(c) || d.level), st = {mode:'menu', i:0, shown:[], res:{}, open:{}, xp:0, ok:0, mine:0, cur:null};
  Sheet.show(d.title); Sheet.cleanup = () => { stopMic(); Speech.stop(); };
  const bubble = (i, mark) => { const l = d.lines[i]; return `<div class="msg ${l[0] === 1 ? 'me' : 'them'} ${mark || ''}"><span class="who">${esc(d.roles[l[0]])}</span><p class="t" lang="${c}">${esc(l[1])}</p>${trLine(c, l[1])}${st.open[i] ? `<p class="sk">${esc(l[2])}</p>` : ''}
    <div class="msg-tools">${Speech.can(c) ? `<button class="link" data-act="ctl" data-fn="sayLine" data-arg="${i}">${ic('speaker',14)} Vypočuť</button>` : ''}<button class="link" data-act="ctl" data-fn="trLine" data-arg="${i}">${st.open[i] ? 'Skryť preklad' : 'Preklad'}</button></div></div>`; };
  const ctrl = Object.assign({
    menu(){
      st.mode = 'menu'; Sheet.progress(0, '');
      Sheet.body(`<div class="intro"><p><span class="lvtag">${d.level}</span></p><h2 class="h1">${esc(d.title)}</h2><p class="muted">${esc(d.scene)}</p>
        <p class="small muted">Rozprávaš sa s postavou „${esc(d.roles[0])}“. Najprv si rozhovor vypočuj a prečítaj, potom si zahraj svoju rolu${canSpeakPractice() ? ' a repliky hovor nahlas' : ''}.</p></div>
        <div class="sheet-actions"><button class="btn btn-wide" data-act="ctl" data-fn="listen">${ic('speaker',18)} 1. Vypočuť a prečítať</button><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="play">${ic('chat',18)} 2. Zahrať si rolu</button></div>`);
    },
    listen(keep){
      st.mode = 'listen'; Sheet.progress(1, '');
      Sheet.body(`<div class="dlg">${d.lines.map((l, i) => bubble(i)).join('')}</div>
        <div class="sheet-actions">${Speech.can(c) ? `<button class="btn btn-wide" data-act="ctl" data-fn="playAll">${ic('speaker',18)} Prehrať celý rozhovor</button>` : ''}<button class="btn btn-primary btn-wide" data-act="ctl" data-fn="play">${ic('chat',18)} Zahrať si rolu</button></div>`, keep === true);
    },
    playAll(){ Speech.sayLines(d.lines.map(l => ({t:l[1], role:l[0]})), c, i => document.querySelectorAll('.dlg .msg').forEach((m, j) => m.classList.toggle('speaking', j === i))); },
    sayLine(i){ const l = d.lines[+i]; Speech.say(l[1], c, false, null, l[0]); },
    trLine(i){ st.open[+i] = !st.open[+i]; if (st.mode === 'listen') ctrl.listen(true); else ctrl.paint(true); },
    play(){ st.mode = 'play'; st.i = 0; st.shown = []; st.res = {}; st.xp = 0; st.ok = 0; st.mine = d.lines.filter(l => l[0] === 1).length; ctrl.advance(); },
    advance(){
      stopMic();
      const said = [];
      while (st.i < d.lines.length && d.lines[st.i][0] === 0) { st.shown.push(st.i); said.push(st.i); st.i++; }
      if (st.i >= d.lines.length) { ctrl.paint(false); if (said.length) Speech.sayLines(said.map(j => ({t:d.lines[j][1], role:0})), c); return setTimeout(() => ctrl.finish(), said.length ? 400 : 0); }
      const target = d.lines[st.i][1], words = target.trim().split(/\s+/);
      let bank = shuffle(words.map((w, k) => k)); if (bank.length > 1 && bank.every((v, k) => v === k)) bank.reverse();
      st.cur = {answered:false, words, bank, placed:[], typing:L >= 3, res:null};
      ctrl.paint(false);
      if (said.length) Speech.sayLines(said.map(j => ({t:d.lines[j][1], role:0})), c);
    },
    paint(keep){
      const cur = st.cur, n = d.lines.filter((l, j) => l[0] === 1 && j < st.i).length + 1;
      const log = st.shown.map(j => bubble(j, d.lines[j][0] === 1 ? (st.res[j] === 'bad' ? 'bad' : 'ok') : '')).join('');
      let turn = '';
      if (cur && st.i < d.lines.length) {
        const l = d.lines[st.i];
        if (!cur.answered) {
          const input = cur.typing
            ? `<input id="ans" class="input" lang="${c}" autocomplete="off" autocapitalize="sentences" autocorrect="off" spellcheck="false" placeholder="${c === 'ru' ? 'Azbukou alebo latinkou' : 'Napíš svoju repliku'}">${(CHARS[c] || []).length ? `<div class="btnrow">${CHARS[c].map(ch => `<button class="btn sm" data-act="ctl" data-fn="ins" data-arg="${ch}">${ch}</button>`).join('')}</div>` : ''}`
            : `<div class="ord-line">${cur.placed.map((wi, pos) => `<button class="wtile" lang="${c}" data-act="ctl" data-fn="unplace" data-arg="${pos}">${esc(cur.words[wi])}</button>`).join('') || '<span class="muted ord-ph">Ťukaj na slová v správnom poradí</span>'}</div><div class="ord-bank">${cur.bank.map((wi, pos) => `<button class="wtile" lang="${c}" data-act="ctl" data-fn="place" data-arg="${pos}">${esc(cur.words[wi])}</button>`).join('')}</div>`;
          turn = `<div class="yourturn"><p class="eyebrow">Tvoja replika ${n} z ${st.mine} · ${esc(LANGS[c].adv)}</p><p class="ex-sk">${esc(l[2])}</p>${input}
            <div class="sheet-actions"><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="check" ${!cur.typing && cur.bank.length ? 'disabled' : ''}>Skontrolovať</button>${speakPanelHTML('Alebo to povedz nahlas')}<button class="link center" data-act="ctl" data-fn="reveal">Neviem, ukáž mi to</button></div></div>`;
        } else {
          turn = `<div class="fb ${cur.res}"><p class="fb-h">${cur.res === 'ok' ? pickOne(PRAISE) : cur.res === 'near' ? 'Skoro!' : 'Správne je:'}</p><p class="fb-a"><b lang="${c}">${esc(l[1])}</b></p>${cur.msg ? `<p class="small">${esc(cur.msg)}</p>` : ''}
            <div class="fb-row">${Speech.can(c) ? `<button class="speak" data-act="ctl" data-fn="sayLine" data-arg="${st.i}" aria-label="Prehrať">${ic('speaker',18)}</button>` : ''}<button class="btn btn-primary" data-act="ctl" data-fn="next">Pokračovať</button></div></div>`;
        }
      }
      Sheet.progress(st.i / d.lines.length, '');
      Sheet.body(`<div class="dlg">${log}</div>${turn}`, keep);
      if (!keep) requestAnimationFrame(() => { const sh = $('#sheet'); sh.scrollTo({top:sh.scrollHeight, behavior:'smooth'}); });
      if (cur && cur.typing && !cur.answered && !keep) { const a = $('#ans'); if (a && FINE) a.focus({preventScroll:true}); }
    },
    place(pos){ const cur = st.cur; if (!cur || cur.answered) return; cur.placed.push(cur.bank.splice(+pos, 1)[0]); ctrl.paint(true); },
    unplace(pos){ const cur = st.cur; if (!cur || cur.answered) return; cur.bank.push(cur.placed.splice(+pos, 1)[0]); ctrl.paint(true); },
    ins(ch){ const a = $('#ans'); if (!a) return; const s0 = a.selectionStart == null ? a.value.length : a.selectionStart; a.value = a.value.slice(0, s0) + ch + a.value.slice(a.selectionEnd == null ? s0 : a.selectionEnd); a.focus(); },
    check(){
      const cur = st.cur; if (!cur || cur.answered) return; const target = d.lines[st.i][1];
      let res;
      if (cur.typing) { const v = ($('#ans') || {}).value || ''; if (!v.trim()) { toast('Napíš repliku, alebo ťukni na Neviem.'); return; } res = check(v, target, c); if (res === 'bad' && speechScore(v, target) >= 85) { res = 'near'; cur.msg = 'Takmer presne, pozri sa na drobnosti.'; } }
      else res = norm(cur.placed.map(i => cur.words[i]).join(' ')) === norm(target) ? 'ok' : 'bad';
      ctrl.answer(res);
    },
    reveal(){ if (st.cur && !st.cur.answered) ctrl.answer('bad'); },
    answer(res){
      const cur = st.cur; cur.answered = true; cur.res = res; st.res[st.i] = res;
      if (res !== 'bad') { st.ok++; st.xp += 2; addXP(2); }
      ctrl.paint(true); requestAnimationFrame(() => { const sh = $('#sheet'); sh.scrollTo({top:sh.scrollHeight, behavior:'smooth'}); });
      Speech.say(d.lines[st.i][1], c, false, null, 1);
    },
    next(){ if (!st.cur || !st.cur.answered) return; st.shown.push(st.i); st.i++; st.cur = null; ctrl.advance(); },
    key(e){
      if (st.mode !== 'play' || !st.cur) return;
      if (e.key === 'Enter') { e.preventDefault(); if (st.cur.answered) ctrl.next(); else ctrl.check(); }
    },
    finish(){
      P[c].dlg = P[c].dlg || {}; P[c].dlg[d.id] = Math.max(P[c].dlg[d.id] || 0, st.mine ? Math.round(st.ok / st.mine * 100) : 100);
      addXP(5); st.xp += 5; logDay(c, 'g'); save(c);
      Sheet.progress(1, '');
      Sheet.body(doneHTML({c, xp:st.xp, title:st.ok === st.mine ? praise(c) : 'Rozhovor zvládnutý', line:`${st.ok} z ${st.mine} replík správne`,
        actions:`<button class="btn btn-wide" data-act="ctl" data-fn="play">Zahrať znova</button><button class="btn btn-wide" data-act="ctl" data-fn="listen">Prečítať celý rozhovor</button>`}));
    }
  }, speakMethods(c, () => d.lines[st.i] ? d.lines[st.i][1] : '', sc => { if (sc != null && sc >= 70 && st.cur && !st.cur.answered) { st.cur.msg = `Povedal si to na ${sc} %.`; ctrl.answer('ok'); } }));
  Sheet.ctrl = ctrl; ctrl.menu();
}
function renderDialogs(view){
  const c = S.active, L = LANGS[c], all = dialogsOf(c), done = P[c].dlg || {};
  view.innerHTML += all.length ? `<div class="units">${all.map(d => `<button class="unit ${done[d.id] != null ? 'full' : ''}" data-act="dialog" data-arg="${esc(d.id)}"><span class="unit-n">${done[d.id] != null ? ic('check',20) : ic('chat',20)}</span><b>${esc(d.title)}</b><span class="cnt">${d.level}</span><small>${esc(d.scene)}${done[d.id] != null ? ` · ${done[d.id]} %` : ''}</small></button>`).join('')}</div>
    <p class="foot">Rozhovory trénujú to, čo ľudia pri učení chcú najviac: rozumieť a odpovedať v skutočnej situácii.</p>` : `<p class="muted">Pre ${esc(L.name.toLowerCase())} zatiaľ nie sú rozhovory.</p>`;
}

/* ───────────── placement test ───────────── */
function placementTest(c){
  const levels = LEVELS.map(l => l.id).filter(id => UNITS[c].some(u => u.level === id));
  const st = {li:0, qi:0, ok:0, res:{}, qs:[], opts:[], answered:false};
  Sheet.show('Vstupný test · ' + LANGS[c].name);
  const ctrl = {
    intro(){ Sheet.body(`<div class="intro"><h2 class="h1">Zistíme tvoju úroveň</h2><p class="muted">Ukážem ti slovíčka a frázy od najľahších po najťažšie. Pri každom vyber správny preklad. Keď to začne byť priťažké, test skončí. Trvá 1 až 3 minúty.</p><p class="small muted">Ak niečo nevieš, ťukni na Neviem. Hádanie by výsledok skreslilo.</p></div>
      <div class="sheet-actions"><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="start">Začať test</button></div>`); },
    start(){ st.li = 0; st.res = {}; ctrl.level(); },
    level(){ if (st.li >= levels.length) return ctrl.finish(); st.qs = shuffle(UNITS[c].filter(u => u.level === levels[st.li]).flatMap(u => u.items)).slice(0, 4); st.qi = 0; st.ok = 0; ctrl.q(); },
    q(){
      if (st.qi >= st.qs.length) { st.res[levels[st.li]] = st.ok; if (st.ok < 3) return ctrl.finish(); st.li++; return ctrl.level(); }
      const it = st.qs[st.qi]; st.opts = shuffle([it].concat(distract(it, 3, 't'))); st.answered = false;
      Sheet.progress((st.li * 4 + st.qi) / (levels.length * 4), levels[st.li]);
      Sheet.body(`<div class="ex-q"><p class="eyebrow">Úroveň ${levels[st.li]} · otázka ${st.qi + 1} zo 4</p><p class="ex-sk">${esc(it.sk)}</p><p class="muted small">Ako sa to povie ${esc(LANGS[c].adv)}?</p></div>
        <div class="opts">${st.opts.map((o, i) => `<button class="opt2 t" lang="${c}" data-act="ctl" data-fn="pick" data-arg="${i}"><span class="k">${i + 1}</span><span>${fmtT(o)}</span></button>`).join('')}</div>
        <div class="sheet-actions"><button class="btn btn-wide" data-act="ctl" data-fn="pick" data-arg="-1">Neviem</button></div>`);
    },
    pick(i){ if (st.answered) return; st.answered = true; i = +i; if (i >= 0 && st.opts[i] && st.opts[i].id === st.qs[st.qi].id) st.ok++; st.qi++; ctrl.q(); },
    key(e){ if (e.key.length === 1 && '1234'.includes(e.key)) ctrl.pick(+e.key - 1); },
    finish(){
      let passed = -1; for (let k = 0; k < levels.length; k++) { if ((st.res[levels[k]] || 0) >= 3) passed = k; else break; }
      const suggest = passed < 0 ? levels[0] : (levels[passed + 1] || levels[passed]);
      markFlag('test');
      Sheet.progress(1, '');
      Sheet.body(`<div class="finish"><div class="stamp"><span>${esc(LANGS[c].self)}</span><b>${suggest}</b><span>${esc(lvName(suggest))}</span></div>
        <h2 class="h1">Odporúčam úroveň ${suggest}</h2>
        <p class="muted">${levels.filter(lv => st.res[lv] != null).map(lv => `${lv}: ${st.res[lv]}/4`).join(' · ')}</p>
        <p class="small muted">${passed < 0 ? 'Začni od základov, pôjde to rýchlo.' : `Slovíčka do úrovne ${levels[passed]} väčšinou poznáš. Tie, ktoré nevieš, nájdeš v Lekciách ako voliteľné.`}</p>
        <div class="sheet-actions" style="width:100%"><button class="btn btn-primary btn-wide" data-act="set-level" data-arg="${suggest}">Nastaviť ${suggest}</button><button class="btn btn-wide" data-act="level-sheet">Vybrať inú úroveň</button></div></div>`);
    }
  };
  Sheet.ctrl = ctrl; ctrl.intro();
}

/* ───────────── grammar mini-lessons ───────────── */
const grammarOf = c => ((CONTENT[c] || {}).grammar || []).slice().sort((a, b) => lvn(a.level) - lvn(b.level));
function grammarSheet(c, id){
  const all = grammarOf(c), g = all.find(x => x.id === id); if (!g) return;
  const st = {r:0, ok:0, xp:0, answered:false, picked:-1, opts:[], qs:[]};
  Sheet.show('Gramatika · ' + g.title);
  const others = [...new Set(all.flatMap(x => x.practice.map(p => splitCloze(p[0])[1])))];
  const ctrl = {
    explain(){
      Sheet.progress(0, '');
      Sheet.body(`<div class="intro"><p><span class="lvtag">${g.level}</span></p><h2 class="h1">${esc(g.title)}</h2><p class="muted">${esc(g.intro)}</p></div>
        <ul class="gpoints">${g.points.map(pt => `<li>${esc(pt)}</li>`).join('')}</ul>
        <div class="sheet-actions"><button class="btn btn-primary btn-wide" data-act="ctl" data-fn="practice">Precvičiť (${g.practice.length})</button></div>`);
    },
    practice(){ st.qs = shuffle(g.practice); st.r = 0; st.ok = 0; st.xp = 0; ctrl.draw(); },
    draw(){
      if (st.r >= st.qs.length) return ctrl.finish();
      const ans = splitCloze(st.qs[st.r][0])[1];
      const local = g.practice.map(p => splitCloze(p[0])[1]).filter(x => norm(x) !== norm(ans));
      const pool = [...new Set(shuffle(local).concat(shuffle(others)))].filter(x => norm(x) !== norm(ans));
      st.opts = shuffle([ans].concat(pool.slice(0, 3))); st.answered = false; st.picked = -1;
      Sheet.progress(st.r / st.qs.length, (st.r + 1) + ' / ' + st.qs.length); ctrl.paint(false);
    },
    paint(keep){
      const q = st.qs[st.r], [a, ans, b] = splitCloze(q[0]);
      Sheet.body(`<div class="ex-q"><p class="eyebrow">Doplň správny tvar</p><p class="ex-sent" lang="${c}">${esc(a)}${st.answered ? `<mark class="hl">${esc(ans)}</mark>` : `<span class="blank" style="width:${(ans.length * 0.55 + 0.8).toFixed(1)}em"></span>`}${esc(b)}</p>${st.answered ? trLine(c, q[0]) : ''}<p class="muted">${esc(q[1])}</p></div>
        <div class="opts">${st.opts.map((o, i) => { let cls = ''; if (st.answered) { if (o === ans) cls = 'right'; else if (i === st.picked) cls = 'wrong'; } return `<button class="opt2 t ${cls}" lang="${c}" data-act="ctl" data-fn="pick" data-arg="${i}" ${st.answered ? 'disabled' : ''}><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`; }).join('')}</div>
        ${st.answered ? `<div class="fb ${st.right ? 'ok' : 'bad'}"><p class="fb-h">${st.right ? pickOne(PRAISE) : 'Nie celkom.'}</p>${q[2] ? `<p class="small">${esc(q[2])}</p>` : ''}<div class="fb-row">${Speech.can(c) ? `<button class="speak" data-act="ctl" data-fn="say" aria-label="Prehrať">${ic('speaker',18)}</button>` : ''}<button class="btn btn-primary" data-act="ctl" data-fn="next">Pokračovať</button></div></div>` : ''}`, keep);
    },
    pick(i){ if (st.answered) return; st.picked = +i; st.answered = true; st.right = st.opts[+i] === splitCloze(st.qs[st.r][0])[1]; if (st.right) { st.ok++; st.xp += 2; addXP(2); } ctrl.paint(true); Speech.say(st.qs[st.r][0], c); },
    say(){ Speech.say(st.qs[st.r][0], c); },
    next(){ st.r++; ctrl.draw(); },
    key(e){ if (!st.answered && e.key.length === 1 && '1234'.includes(e.key)) ctrl.pick(+e.key - 1); else if (st.answered && e.key === 'Enter') { e.preventDefault(); ctrl.next(); } },
    finish(){
      const pct = Math.round(st.ok / st.qs.length * 100); P[c].gram = P[c].gram || {}; P[c].gram[g.id] = Math.max(P[c].gram[g.id] || 0, pct); save(c); logDay(c, 'g');
      Sheet.progress(1, '');
      Sheet.body(doneHTML({c, xp:st.xp, title:pct >= 75 ? praise(c) : 'Ešte raz a budeš to mať', line:`${st.ok} z ${st.qs.length} správne`,
        actions:`<button class="btn btn-wide" data-act="ctl" data-fn="explain">Pozrieť vysvetlenie</button><button class="btn btn-wide" data-act="ctl" data-fn="practice">Precvičiť znova</button>`}));
    }
  };
  Sheet.ctrl = ctrl; ctrl.explain();
}

/* ───────────── goals, achievements, reminder ───────────── */
const GOALS = [
  {id:'travel', name:'Cestovanie', units:'zaklady bases basicos basico osnovy mesto ville ciudad cidade gorod hotel jedlo cafe comida eda nakup achats compras pokupki pocasie otazky questions preguntas perguntas voprosy'},
  {id:'work', name:'Práca a kariéra', units:'praca travail trabajo trabalho rabota kariera formalne formel formal ofits technika diskusia debat debate diskussiya medien'},
  {id:'people', name:'Priatelia a rodina', units:'rodina gens gente pessoas semja volno loisirs ocio lazer dosug pocity sentiments sentimientos sentimentos chuvstva frazy expressions expresiones expressoes frazy2'},
  {id:'culture', name:'Filmy, knihy, kultúra', units:'medien idiomy idiomes modismos expressoes2 nuansy familier coloquial girias razgovor svet abstrakt'},
  {id:'move', name:'Presťahovanie sa', units:'byvanie maison casa dom zdravie sante salud saude zdorovje praca travail trabajo trabalho rabota formalne formel formal ofits oblecenie'},
  {id:'fun', name:'Pre radosť', units:''}
];
const goalUnits = () => { const g = GOALS.find(x => x.id === S.why); return g ? g.units.split(' ').filter(Boolean) : []; };
const ACH = [
  {id:'first', n:'Prvá lekcia', d:'Nauč sa prvé slovíčka', t:s => s.words >= 1},
  {id:'w50', n:'50 slovíčok', d:'Nauč sa 50 slovíčok', t:s => s.words >= 50},
  {id:'w150', n:'150 slovíčok', d:'Nauč sa 150 slovíčok', t:s => s.words >= 150},
  {id:'w300', n:'300 slovíčok', d:'Nauč sa 300 slovíčok', t:s => s.words >= 300},
  {id:'w600', n:'600 slovíčok', d:'Nauč sa 600 slovíčok', t:s => s.words >= 600},
  {id:'w1000', n:'1000 slovíčok', d:'Nauč sa 1000 slovíčok', t:s => s.words >= 1000},
  {id:'s3', n:'3 dni v rade', d:'Uč sa 3 dni po sebe', t:s => s.streak >= 3},
  {id:'s7', n:'Týždeň v kuse', d:'Uč sa 7 dní po sebe', t:s => s.streak >= 7},
  {id:'s30', n:'Mesiac v kuse', d:'Uč sa 30 dní po sebe', t:s => s.streak >= 30},
  {id:'story', n:'Čitateľ', d:'Prečítaj prvý príbeh', t:s => s.stories >= 1},
  {id:'stories5', n:'Knihomoľ', d:'Prečítaj 5 príbehov', t:s => s.stories >= 5},
  {id:'dlg', n:'Prvý rozhovor', d:'Zahraj si rolu v rozhovore', t:s => s.dialogs >= 1},
  {id:'speak', n:'Odvaha hovoriť', d:'Povedz prvú vetu nahlas', t:() => !!(S.flags || {}).speak},
  {id:'gram', n:'Gramatik', d:'Precvič 3 témy gramatiky', t:s => s.gram >= 3},
  {id:'test', n:'Vstupný test', d:'Urob si vstupný test', t:() => !!(S.flags || {}).test},
  {id:'poly', n:'Polyglot', d:'Nauč sa 20 slovíčok v 3 jazykoch', t:s => s.langs20 >= 3},
  {id:'xp1000', n:'1000 XP', d:'Nazbieraj 1000 XP', t:s => s.xp >= 1000}
];
function achStats(){
  let words = 0, stories = 0, dialogs = 0, gram = 0, langs20 = 0;
  for (const x in LANGS) { const n = Object.keys(P[x].it).length; words += n; if (n >= 20) langs20++; stories += Object.values(P[x].st || {}).filter(v => v && v.done).length; dialogs += Object.keys(P[x].dlg || {}).length; gram += Object.keys(P[x].gram || {}).length; }
  return {words, stories, dialogs, gram, langs20, streak:streak(), xp:totalXP()};
}
let achBusy = false;
function checkAch(){
  if (achBusy) return; achBusy = true;
  try {
    S.ach = S.ach || {}; const s = achStats(), got = [];
    for (const a of ACH) if (!S.ach[a.id] && a.t(s)) { S.ach[a.id] = Date.now(); got.push(a); }
    if (got.length) { save('settings'); setTimeout(() => toast('Nová pečiatka v pase: ' + got.map(a => a.n).join(', ')), 600); }
  } finally { achBusy = false; }
}
function achHTML(){
  S.ach = S.ach || {}; const n = ACH.filter(a => S.ach[a.id]).length;
  return `<section class="sec"><h2 class="h2">Pečiatky v pase · ${n} z ${ACH.length}</h2><div class="ach-grid">${ACH.map((a, i) => { const on = !!S.ach[a.id], dt = on ? new Date(S.ach[a.id]) : null;
    return `<div class="ach ${on ? 'on' : ''}" style="--rot:${(i % 5 - 2) * 4}deg" title="${esc(a.d)}"><span class="ach-ring"><b>${esc(a.n)}</b>${on ? `<small>${dt.getDate()}. ${dt.getMonth() + 1}.</small>` : ''}</span><small class="ach-d">${esc(a.d)}</small></div>`; }).join('')}</div></section>`;
}
const REM_TIMES = ['07:00','08:00','12:00','17:00','18:00','19:00','20:00','21:00'];
function guideHTML(){
  const s = achStats(), c = S.active, cur = Object.keys(P[c].it).length, pct = Math.min(100, cur / 2000 * 100);
  const hours = {es:'asi 600', pt:'asi 600', fr:'asi 750', de:'asi 900', ru:'asi 1 100'}[c];
  return `<section class="sec"><h2 class="h2">Ako sa naučiť jazyk najrýchlejšie</h2>
    <div class="settings"><div class="set col">
      <b>${esc(LANGS[c].name)}: vieš ${cur} ${slovicok(cur)}</b>
      <div class="seg lc" style="--la:var(--accent);--lad:var(--accent)"><i style="width:${pct.toFixed(1)}%"></i></div>
      <p class="small muted">Na bežný rozhovor treba podľa výskumov asi 2 000 až 3 000 najčastejších slov. S nimi rozumieš zhruba 95 % toho, čo ľudia hovoria. Čím častejšie slovo, tým skôr ho appka ponúkne.</p>
    </div></div>
    <ol class="method">
      <li><b>Každý deň, aj keď len 15 minút</b><span>Pravidelnosť porazí dlhé maratóny. Pamäť sa upevňuje v spánku a rozložené opakovanie ti šetrí čas.</span></li>
      <li><b>Najprv najčastejšie slová a celé frázy</b><span>Malé slová (kto, kde, ešte, už) a hotové frázy použiješ stokrát denne. Preto sú v lekciách skôr než zriedkavé slová.</span></li>
      <li><b>Veľa počúvaj a čítaj</b><span>Príbehy a rozhovory, ktorým rozumieš z väčšej časti. Mozog sa jazyk učí hlavne z porozumenia.</span></li>
      <li><b>Hovor nahlas od prvého dňa</b><span>Ľudia chcú pri učení najviac vedieť rozprávať, ale práve to v appkách precvičujú najmenej. Zahraj si rozhovory a opakuj vety nahlas, rozvážeš si jazyk aj ostych.</span></li>
      <li><b>Chyby sú v poriadku</b><span>Kto sa nebojí chýb, učí sa rýchlejšie. Chybné slovíčko sa ti vráti skôr a o to lepšie si ho zapamätáš.</span></li>
      <li><b>Jazyk do bežného dňa</b><span>Prepni si telefón do jazyka, pusti si seriál s titulkami, nájdi si partnera na rozhovor. Appka je základ, skutočný život je tréning.</span></li>
    </ol>
    <p class="small muted">Americký inštitút FSI odhaduje, že rodený Angličan potrebuje na dobrú pracovnú úroveň ${hours} hodín výučby pre ${esc(LANGS[c].acc)}. Pre Slováka je ruština výrazne ľahšia vďaka príbuznosti jazykov. Pri 30 minútach denne to sú roky, preto je kľúčové učiť sa pravidelne a mať jazyk okolo seba aj mimo appky.</p>
  </section>`;
}

/* ───────────── views ───────────── */
function weekHTML(){
  const names = ['Ne','Po','Ut','St','Št','Pi','So']; let h = '';
  for (let i = 6; i >= 0; i--) { const t = addDays(dayStart(), -i), v = S.days[dayKey(t)] || 0;
    h += `<div class="day ${v >= S.goal ? 'full' : v > 0 ? 'some' : ''} ${i === 0 ? 'today' : ''}"><i>${v >= S.goal ? ic('check',16) : ''}</i><span>${names[new Date(t).getDay()]}</span></div>`; }
  return `<div class="week" aria-label="Posledných 7 dní">${h}</div>`;
}
function ring(v, max){ const r = 38, C = 2 * Math.PI * r, p = Math.min(1, v / max);
  return `<svg class="ring" viewBox="0 0 88 88" width="88" height="88" aria-hidden="true"><circle cx="44" cy="44" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="8"/><circle cx="44" cy="44" r="${r}" fill="none" stroke="var(--accent)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - p)).toFixed(1)}" transform="rotate(-90 44 44)"/></svg>`; }
const isStandalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let installEvt = null;
function installHTML(){
  if (isStandalone() || S.installHidden || location.protocol === 'file:') return '';
  const txt = isIOS() ? 'V Safari ťukni na Zdieľať a vyber Pridať na plochu. Appka sa potom otvára na celú obrazovku a funguje aj bez internetu.'
    : installEvt ? 'Nainštaluj si appku, aby sa otvárala v samostatnom okne a fungovala aj offline.'
    : 'V Chrome alebo Edge nájdeš v ponuke prehliadača položku Inštalovať. Na iPhone použi Safari a Pridať na plochu.';
  return `<aside class="install"><b>Pridaj si Jazykový pas ako appku</b><button class="x" data-act="hide-install">Skryť</button><p>${txt}</p>${installEvt ? `<button class="btn sm btn-primary" data-act="install">Nainštalovať</button>` : ''}</aside>`;
}
function backupHTML(){
  const learned = S.order.reduce((n, x) => n + Object.keys(P[x].it).length, 0);
  if (learned < 15 || Date.now() - (S.lastBackup || 0) < 14 * DAY || Date.now() - (S.backupSnooze || 0) < 3 * DAY) return '';
  return `<aside class="install"><b>Zálohuj si pokrok</b><button class="x" data-act="backup-later">Neskôr</button><p>Máš za sebou ${learned} ${slovicok(learned)}. Záloha trvá pár sekúnd a pokrok s ňou prenesieš aj na PC.</p><button class="btn sm btn-primary" data-act="export">${ic('download',16)} Uložiť zálohu</button></aside>`;
}
function renderToday(view){
  const c = S.active, L = LANGS[c], now = new Date(), hr = now.getHours();
  const WD = ['nedeľa','pondelok','utorok','streda','štvrtok','piatok','sobota'], MO = ['januára','februára','marca','apríla','mája','júna','júla','augusta','septembra','októbra','novembra','decembra'];
  const xp = todayXP(), st = streak(), due = dueItems(c), fresh = nextNewItems(c, S.perLesson), log = todayLog(c), u = fresh.length ? unitOf(fresh[0]) : null;
  const games = gameList(c).filter(g => g.ok);
  const s1 = {done:!due.length, b:'Opakovanie', s:due.length ? `${due.length} ${slovicok(due.length)} treba zopakovať, kým ich zabudneš` : log.r ? 'Hotovo, všetko zopakované' : 'Dnes nič nečaká'};
  const s2 = {done:log.l > 0, b:u ? (u.n ? `Lekcia ${u.n}: ${u.title}` : u.title) : 'Nové slovíčka', s:fresh.length ? (log.l ? `Hotovo · ďalších ${fresh.length} je pripravených` : `${fresh.length} ${fresh.length < 5 ? 'nové slovíčka' : 'nových slovíčok'} krok za krokom`) : 'Celý kurz máš prebratý'};
  const s3 = {done:log.g > 0, b:'Hra na spestrenie', s:games.length ? games.slice(0, 2).map(g => g.t).join(' alebo ') : 'Odomkne sa po prvej lekcii'};
  const nowIdx = !s1.done ? 0 : !s2.done && fresh.length ? 1 : !s3.done ? 2 : -1;
  let cta;
  if (nowIdx === 0) cta = `<button class="cta" data-act="review"><span class="cta-k">Zopakovať</span><span class="cta-t">${due.length} ${slovicok(due.length)} · ~${Math.max(1, Math.round(due.length * 0.2))} min</span><span class="cta-go">${ic('arrow',22)}</span></button>`;
  else if (nowIdx === 1) cta = `<button class="cta" data-act="lesson"><span class="cta-k">${log.l || Object.keys(P[c].it).length ? 'Pokračovať v lekcii' : 'Začať prvú lekciu'}</span><span class="cta-t">${fresh.length} ${fresh.length < 5 ? 'nové slovíčka' : 'nových slovíčok'} · ~5 min</span><span class="cta-go">${ic('arrow',22)}</span></button>`;
  else if (nowIdx === 2 && games.length) cta = `<button class="cta" data-act="game" data-arg="${games[0].id}"><span class="cta-k">${esc(games[0].t)}</span><span class="cta-t">${esc(games[0].d)}</span><span class="cta-go">${ic('arrow',22)}</span></button>`;
  else cta = fresh.length ? `<button class="cta calm" data-act="lesson"><span class="cta-k">Na dnes splnené</span><span class="cta-t">Máš chuť na viac? Ďalšia lekcia</span><span class="cta-go">${ic('plus',22)}</span></button>`
    : `<button class="cta calm" data-act="add-word"><span class="cta-k">Kurz máš za sebou</span><span class="cta-t">Pridaj si vlastné slovíčka</span><span class="cta-go">${ic('plus',22)}</span></button>`;
  const steps = [s1, s2, s3].map((x, i) => `<li class="pstep ${x.done ? 'done' : ''} ${i === nowIdx ? 'now' : ''}"><span class="num">${x.done ? ic('check',16) : i + 1}</span><span><b>${esc(x.b)}</b><small>${esc(x.s)}</small></span></li>`).join('');
  const tips = [
    'Nové slovo sa najprv naučíš: uvidíš ho, vypočuješ si ho a až potom ho skúšaš. Od rozpoznania sa postupne dostaneš k písaniu.',
    'Krátko, ale každý deň. 10 minút denne zaberie lepšie ako dve hodiny raz za týždeň, lebo pamäť sa upevňuje v spánku.',
    'Hovor nahlas. Pri každom slove si ho zopakuj po nahrávke. Trénuješ tak výslovnosť aj sebadôveru.',
    'Slovo sa vráti tesne predtým, než by si ho zabudol. Rozostupy rastú: deň, tri dni, týždeň, mesiac.',
    'V nemčine sa uč podstatné mená vždy so členom. Farby pomáhajú: der modrý, die červený, das zelený.',
    'Počul si niečo zaujímavé? V Lekciách si pridaj vlastné slovíčko. To, čo potrebuješ ty, sa učí najlepšie.',
    'Ľudia sa pri učení jazyka najviac chcú naučiť rozprávať. V Čítaní → Rozhovory si zahraj rolu a repliky hovor nahlas.',
    'Nevieš, akú máš úroveň? V Lekciách ťukni na Úroveň a urob si dvojminútový test.',
    'Na bežný rozhovor treba asi 2 000 až 3 000 najčastejších slov. Každá lekcia ťa k nim posúva.',
    'Lepšie hlasy: Nastavenia → Prístupnosť → Hovorený obsah → Hlasy. Stiahni si vylepšený hlas pre jazyk, ktorý sa učíš.'
  ];
  view.innerHTML = `${installHTML()}${backupHTML()}
    <section class="hello"><div class="hello-txt"><p class="eyebrow">${WD[now.getDay()]} ${now.getDate()}. ${MO[now.getMonth()]}</p><h1 class="h1 greet" lang="${c}">${esc(L.hello[hr < 11 ? 0 : hr < 18 ? 1 : 2])}</h1><p class="sub">${esc(L.name)}${userLevel(c) ? ' · ' + userLevel(c) : ''} · séria ${st} ${dni(st)}</p></div>
      <div class="ring-box">${ring(xp, S.goal)}<div class="ring-label"><b>${xp}</b><span>z ${S.goal} XP</span></div></div></section>
    ${userLevel(c) ? `<section class="plan"><p class="eyebrow">Dnešný plán</p><ol class="plan-steps">${steps}</ol>${cta}</section>` : `<section class="plan"><p class="eyebrow">Na začiatok</p>${levelPickerHTML(c)}</section>`}
    ${userLevel(c) && !S.why && !S.whySkip ? `<section class="plan"><p class="eyebrow">Prečo sa učíš ${esc(L.adv)}?</p><p class="muted small">Označím ti lekcie, ktoré sa ti zídu najviac.</p><div class="chips-wrap">${GOALS.map(g => `<button class="tchip" data-act="set-why" data-arg="${g.id}">${esc(g.name)}</button>`).join('')}</div><button class="link" data-act="why-skip">Teraz nie</button></section>` : ''}
    ${weekHTML()}
    <aside class="tip"><p class="eyebrow">Ako sa tu učíš</p><p>${esc(tips[Math.floor(dayStart() / DAY) % tips.length])}</p></aside>`;
}
function levelPickerHTML(c){
  const cur = userLevel(c);
  return `<h2 class="h2">Akú máš úroveň ${esc(LANGS[c].in)}?</h2><p class="muted small">Podľa nej ti pripravím slovíčka, úlohy aj príbehy. Zmeniť ju môžeš kedykoľvek v Lekciách.</p>
    <div class="lvpick">${LEVELS.map(l => { const n = UNITS[c].filter(u => u.level === l.id).length;
      return `<button class="lvbtn ${cur === l.id ? 'on' : ''}" data-act="set-level" data-arg="${l.id}"><b>${l.id}</b><span><strong>${esc(l.name)}</strong><small>${esc(l.d)}${n ? ` · ${n} ${n === 1 ? 'lekcia' : n < 5 ? 'lekcie' : 'lekcií'}` : ''}</small></span></button>`; }).join('')}
      <button class="btn btn-wide" data-act="placement">${ic('test',18)} Neviem, otestuj ma (2 minúty)</button></div>`;
}
function levelSheet(c){ Sheet.show('Úroveň · ' + LANGS[c].name); Sheet.body(`<div class="intro">${levelPickerHTML(c)}<p class="muted small">Nižšie úrovne zostanú v Lekciách ako voliteľné. Tvoj doterajší pokrok sa nemení.</p></div>`); }
function renderCourse(view){
  const c = S.active, L = LANGS[c], p = P[c].it, cur = currentUnit(c), mine = customItems(c);
  const unitBtn = (u, items) => {
    const learned = items.filter(x => p[x.id]).length, full = items.length && learned === items.length, pct = items.length ? learned / items.length * 100 : 0;
    return `<button class="unit ${u.id === (cur && cur.id) && !full ? 'cur' : ''} ${full ? 'full' : ''}" data-act="unit" data-arg="${u.id}"><span class="unit-n">${full ? ic('check',20) : u.n || ic('plus',18)}</span><b>${esc(u.title)}</b><span class="cnt">${learned}/${items.length}</span><small>${esc(u.desc)}${gu.includes(u.id) ? ' <em class="goal-tag">pre tvoj cieľ</em>' : ''}</small><span class="ubar"><i style="width:${pct.toFixed(0)}%"></i></span></button>`;
  };
  const ul = userLevel(c), U = lvn(ul), gu = goalUnits(), gr = grammarOf(c);
  const groups = LEVELS.filter(l => UNITS[c].some(u => u.level === l.id)).map(l => {
    const us = UNITS[c].filter(u => u.level === l.id), below = ul && lvn(l.id) < U;
    const all = us.flatMap(u => u.items), done = all.filter(x => p[x.id]).length;
    const open = !ul || l.id === ul || (cur && cur.level === l.id);
    return `<details class="lvgroup ${below ? 'below' : ''}" ${open ? 'open' : ''}><summary class="lvsum"><span class="lvtag">${l.id}</span><span class="lvt"><span class="h2">${esc(l.name)}</span>${l.id === ul ? '<em class="lvme">Tvoja úroveň</em>' : ''}<small class="lvcount">${us.length} ${us.length === 1 ? 'lekcia' : us.length < 5 ? 'lekcie' : 'lekcií'} · ${done}/${all.length} slov${below ? ' · voliteľné' : ''}</small></span>${ic('chevron',18)}</summary><div class="units">${us.map(u => unitBtn(u, u.items)).join('')}</div></details>`;
  }).join('');
  view.innerHTML = `<section class="read-head"><p class="eyebrow">Lekcie · ${esc(L.name)}</p><h1 class="h1">Krok za krokom</h1>
    <div class="row-tools"><button class="btn sm" data-act="level-sheet">Úroveň: <b>${ul || 'nevybraná'}</b>${ul ? ' · ' + esc(lvName(ul)) : ''} · Zmeniť</button></div>
    <p class="muted">${!ul ? 'Vyber si úroveň a lekcie aj úlohy sa jej prispôsobia.' : U <= 2 ? 'So slovom sa najprv zoznámiš, potom ho spoznávaš medzi možnosťami, skladáš a nakoniec píšeš.' : U === 3 ? 'Na tvojej úrovni viac skladáš, dopĺňaš do viet a píšeš.' : 'Na tvojej úrovni hlavne píšeš, dopĺňaš a skladáš celé vety.'} Čo už vieš, preskočíš jedným ťuknutím.</p></section>
    ${gr.length ? `<section class="sec"><h2 class="h2">Gramatika v krátkosti</h2><div class="gscroll">${gr.map(g => { const sc = (P[c].gram || {})[g.id]; return `<button class="gcard ${ul && lvn(g.level) > U + 1 ? 'dim' : ''}" data-act="grammar" data-arg="${esc(g.id)}"><span class="lvtag">${g.level}</span><b>${esc(g.title)}</b><small>${sc != null ? `${ic('check',12)} ${sc} %` : `${g.practice.length} úloh`}</small></button>`; }).join('')}</div></section>` : ''}
    ${groups}
    <div class="lvgroup"><h2 class="h2 lvh"><span class="lvtag">+</span>Tvoje slovíčka</h2><div class="units">${unitBtn({id:'mine', n:0, title:'Moje slovíčka', desc:mine.length ? 'Tvoje vlastné a z príbehov' : 'Pridaj si slová, ktoré potrebuješ ty'}, mine)}</div></div>`;
}
function renderGames(view){
  const c = S.active, L = LANGS[c], g = gameList(c), due = dueItems(c).length;
  view.innerHTML = `<section class="read-head"><p class="eyebrow">Hry · ${esc(L.name)}</p><h1 class="h1">Precvič si to hravo</h1><p class="muted">Hry berú najmä slová a vety, ktoré si sa už naučil.</p></section>
    <div class="tiles">
      ${tile({act:'review', icon:ic('repeat'), t:'Opakovanie', d:due ? 'Slovíčka, ktoré by si práve zabúdal' : 'Teraz nič nečaká', badge:due ? String(due) : '', dis:!due})}
      ${g.map(x => tile({act:'game', arg:x.id, icon:x.icon, t:x.t, d:x.ok ? x.d : (x.id === 'dict' ? 'Chýba hlas pre tento jazyk' : 'Odomkne sa po prvej lekcii'), dis:!x.ok, badge:x.id === 'gender' && P[c].best.gender ? 'rekord ' + P[c].best.gender : ''})).join('')}
    </div>`;
}
function heatHTML(){
  const today = dayStart(), dow = (new Date(today).getDay() + 6) % 7, start = addDays(today, -dow - 7 * 11); let cells = '';
  for (let i = 0; i < 84; i++) {
    const t = addDays(start, i), v = S.days[dayKey(t)] || 0, d = new Date(t);
    const cls = t > today ? 'fut' : v <= 0 ? '' : v >= S.goal ? 'l3' : v >= S.goal / 2 ? 'l2' : 'l1';
    cells += `<i class="${cls}" title="${d.getDate()}. ${d.getMonth()+1}. · ${v} XP"></i>`;
  }
  return `<div class="heat-wrap"><div class="heat-days"><span>Po</span><span></span><span>St</span><span></span><span>Pi</span><span></span><span>Ne</span></div><div class="heat">${cells}</div></div>`;
}
function renderProgress(view){
  const c = S.active, st = streak();
  view.innerHTML = `<section class="read-head"><p class="eyebrow">Pokrok</p><h1 class="h1">Tvoj jazykový pas</h1></section>
  <div class="stats"><div class="stat"><b>${st}</b><span>${dni(st)} v sérii</span></div><div class="stat"><b>${todayXP()}</b><span>XP dnes z ${S.goal}</span></div><div class="stat"><b>${totalXP()}</b><span>XP celkom</span></div></div>
  <section class="sec"><h2 class="h2">Posledných 12 týždňov</h2>${heatHTML()}<div class="legend"><span>Svetlé: niečo si urobil</span><span>Plné: denný cieľ</span></div></section>
  <section class="sec"><h2 class="h2">Slovíčka podľa jazykov</h2>${S.order.map(x => { const s = itemStats(x), L = LANGS[x], pc = v => s.t ? (v / s.t * 100).toFixed(1) : 0;
    return `<button class="lrow lc" style="--la:${L.c[0]};--lad:${L.c[1]}" data-act="lang" data-arg="${x}"><div class="lrow-h"><b><i></i>${esc(L.name)}</b><span class="muted small">${x === c ? 'aktívny' : ''}</span></div>
      <div class="seg"><i style="width:${pc(s.m)}%"></i><i style="width:${pc(s.l)}%"></i></div>
      <div class="legend"><span>${s.m} zvládnutých</span><span>${s.l} v učení</span><span>${s.n} nových</span></div></button>`; }).join('')}</section>
  <button class="btn btn-wide" data-act="settings">${ic('gear',18)} Nastavenia, vzhľad, hlas a záloha</button>
  ${achHTML()}
  ${guideHTML()}
  <p class="foot">Jazykový pas ${VERSION} · funguje offline · tvoje dáta neopúšťajú zariadenie</p>`;
}

/* ───────────── themes ───────────── */
const THEMES = [
  {id:'auto', name:'Podľa telefónu', auto:true},
  {id:'light', name:'Svetlý', bg:'#F3F4F7', surface:'#FFFFFF', ink:'#14161B'},
  {id:'dark', name:'Tmavý', bg:'#0F1115', surface:'#181B21', ink:'#EEF0F4'},
  {id:'pink', name:'Čierno-ružový', bg:'#0B0A0D', surface:'#19141B', ink:'#F8EEF4', accent:'#FF4FA3'},
  {id:'midnight', name:'Polnočný', bg:'#0A1022', surface:'#131C38', ink:'#E6ECFF', accent:'#7EA6FF'},
  {id:'ocean', name:'Oceán', bg:'#06191E', surface:'#0D2A31', ink:'#E2F6F7', accent:'#2FD4C2'},
  {id:'neon', name:'Neón', bg:'#090909', surface:'#171717', ink:'#F3F3F3', accent:'#C8FF3D'},
  {id:'mint', name:'Mätový', bg:'#ECF6F1', surface:'#FFFFFF', ink:'#0F241B', accent:'#0E9A6C'},
  {id:'lavender', name:'Levanduľový', bg:'#F2EFFA', surface:'#FFFFFF', ink:'#1D1730', accent:'#7655EE'},
  {id:'peach', name:'Broskyňový', bg:'#FFF1EA', surface:'#FFFFFF', ink:'#2A1710', accent:'#E8582C'},
  {id:'rose', name:'Ružový', bg:'#FFF0F6', surface:'#FFFFFF', ink:'#2B1020', accent:'#E0368A'},
  {id:'custom', name:'Vlastný', custom:true}
];
const CUSTOM_DEFAULT = {bg:'#121016', surface:'#1E1A24', ink:'#F5F0F8', accent:'#FF5FA8'};
const mqDark = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
const prefersDark = () => !!(mqDark && mqDark.matches);
const hex2rgb = h => { h = String(h || '#000').replace('#',''); if (h.length === 3) h = h.split('').map(x => x + x).join(''); return [0,2,4].map(i => parseInt(h.slice(i, i + 2), 16) || 0); };
const rgb2hex = r => '#' + r.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2,'0')).join('');
const mix = (a, b, t) => { const A = hex2rgb(a), B = hex2rgb(b); return rgb2hex(A.map((v, i) => v + (B[i] - v) * t)); };
const lum = h => { const c = hex2rgb(h).map(v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; };
const contrast = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
const readableOn = c => contrast(c, '#FFFFFF') >= contrast(c, '#111111') ? '#FFFFFF' : '#111111';
const themeById = id => THEMES.find(t => t.id === id) || THEMES[0];
function baseOf(t){
  if (t.custom) return Object.assign({}, CUSTOM_DEFAULT, S.custom || {});
  if (t.auto) return themeById(prefersDark() ? 'dark' : 'light');
  return t;
}
function palette(c){
  const b = baseOf(themeById(S.theme)), dark = lum(b.bg) < 0.2, L = LANGS[c].c;
  const useLang = !b.accent || S.langAccent;
  const accent = useLang ? (dark ? L[1] : L[0]) : b.accent;
  let aInk = accent; for (let i = 0; i < 8 && contrast(aInk, b.surface) < 4.2; i++) aInk = mix(aInk, b.ink, 0.2);
  const g = dark ? '#4CC584' : '#16834F', bd = dark ? '#FF7070' : '#C93636', w = dark ? '#EDB453' : '#9A6410';
  return {dark, p:{
    '--bg':b.bg, '--surface':b.surface, '--ink':b.ink,
    '--surface-2':mix(b.surface, b.ink, dark ? .08 : .07), '--muted':mix(b.ink, b.bg, dark ? .38 : .42), '--line':mix(b.surface, b.ink, dark ? .16 : .13),
    '--accent':accent, '--accent-soft':mix(b.surface, accent, dark ? .22 : .16), '--accent-ink':useLang && !dark ? L[2] : aInk, '--on-accent':readableOn(accent),
    '--good':g, '--good-soft':mix(b.surface, g, dark ? .2 : .13), '--bad':bd, '--bad-soft':mix(b.surface, bd, dark ? .2 : .12), '--warn':w, '--warn-soft':mix(b.surface, dark ? w : '#C98A1A', dark ? .2 : .15),
    '--m':dark ? '#76A7FF' : '#2563C9', '--f':dark ? '#FF7F99' : '#CF3358', '--n':dark ? '#55D394' : '#17845A',
    '--on-art':dark ? b.bg : '#FFFFFF', '--on-good':dark ? b.bg : '#FFFFFF',
    '--shadow':dark ? 'none' : '0 1px 2px rgba(20,22,27,.05), 0 10px 28px rgba(20,22,27,.07)', '--scrim':dark ? 'rgba(0,0,0,.55)' : 'rgba(14,16,20,.32)'
  }};
}
function applyTheme(c){
  const {p, dark} = palette(c), r = document.documentElement;
  for (const k in p) r.style.setProperty(k, p[k]);
  r.style.colorScheme = dark ? 'dark' : 'light'; r.classList.toggle('dk', dark);
  let m = document.querySelector('meta[name="theme-color"]:not([media])');
  if (!m) { document.querySelectorAll('meta[name="theme-color"]').forEach(x => x.remove()); m = document.createElement('meta'); m.name = 'theme-color'; document.head.appendChild(m); }
  m.content = p['--bg'];
}
if (mqDark && mqDark.addEventListener) mqDark.addEventListener('change', () => { if (S.theme === 'auto') applyTheme(S.active); });
function swatch(t){
  const b = baseOf(t), dark = lum(b.bg) < .2, L = LANGS[S.active].c;
  const acc = b.accent && !S.langAccent ? b.accent : (dark ? L[1] : L[0]);
  return `<button class="sw ${S.theme === t.id ? 'on' : ''}" data-act="theme" data-arg="${t.id}" style="--sb:${b.bg};--ss:${b.surface};--si:${b.ink};--sa:${acc}" aria-pressed="${S.theme === t.id}">
    <span class="sw-prev">${t.auto ? '<i class="sw-half"></i>' : ''}<i class="sw-card"><i class="sw-line"></i><i class="sw-line s"></i><i class="sw-dot"></i></i></span><span class="sw-name">${esc(t.name)}</span></button>`;
}

/* ───────────── settings sheet ───────────── */
function storageKB(){ let n = 0; try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith('jp2:')) n += (k.length + (localStorage.getItem(k) || '').length) * 2; } } catch(e) {} return Math.max(1, Math.round(n / 1024)); }
function settingsHTML(){
  const t = themeById(S.theme), cu = Object.assign({}, CUSTOM_DEFAULT, S.custom || {}), lb = S.lastBackup ? new Date(S.lastBackup) : null;
  const ownAccent = t.custom || !!t.accent;
  return `<section class="sec"><h2 class="h2">Vzhľad</h2>
    <div class="swatches">${THEMES.map(swatch).join('')}</div>
    ${ownAccent ? `<label class="set-inline"><input type="checkbox" data-set="langAccent" ${S.langAccent ? 'checked' : ''}> Farba zvýraznenia podľa jazyka</label>` : `<p class="small muted">Farba zvýraznenia sa mení podľa jazyka, ktorý sa práve učíš.</p>`}
    ${t.custom ? `<div class="settings"><div class="set col"><b>Tvoje farby</b>
      <div class="colors">${[['bg','Pozadie'],['surface','Karty'],['ink','Text'],['accent','Zvýraznenie']].map(([k, l]) => `<label class="cpick"><input type="color" data-set="custom" data-key="${k}" value="${esc(cu[k])}" aria-label="${l}"><span>${l}</span></label>`).join('')}</div>
      ${contrast(cu.ink, cu.surface) < 4.5 ? '<p class="small" style="color:var(--bad)">Text na kartách môže byť zle čitateľný. Skús tmavší alebo svetlejší text.</p>' : '<p class="small muted">Zmena sa ukáže hneď. Pre tmavý vzhľad zvoľ tmavé pozadie a svetlý text.</p>'}
    </div></div>` : ''}
  </section>
  ${Speech.synth ? `<section class="sec"><h2 class="h2">Hlas</h2><div class="settings"><div class="set col">
    <p class="small muted">Appka používa hlasy, ktoré má tvoje zariadenie. Automaticky vyberie ženský hlas v najlepšej kvalite. Ťukni na reproduktor a vypočuj si ho.</p>
    ${S.order.map(x => { const vs = Speech.sorted(x), cur = Speech.pick(x), want = (S.voices || {})[x] || '';
      return `<div class="field" style="align-items:center"><span class="small" style="width:96px;flex:none;font-weight:600">${esc(LANGS[x].name)}<br><span class="muted" style="font-weight:400">${vs.length} ${vs.length === 1 ? 'hlas' : vs.length >= 2 && vs.length <= 4 ? 'hlasy' : 'hlasov'}</span></span>${vs.length
        ? `<select id="voice-${x}" data-set="voice" data-lang="${x}" style="flex:1;min-width:0;max-width:none" aria-label="Hlas pre ${esc(LANGS[x].name)}"><option value="" ${want ? '' : 'selected'}>Automaticky${cur ? ': ' + esc(cur.name.replace(/\s*\(.*\)/, '')) : ''}</option>${vs.map(v => `<option value="${esc(v.voiceURI || v.name)}" ${want && (want === v.voiceURI || want === v.name) ? 'selected' : ''}>${esc(Speech.label(v))}</option>`).join('')}</select><button class="speak" data-act="voice-test" data-arg="${x}" aria-label="Vypočuť hlas">${ic('speaker',16)}</button>`
        : `<span class="small muted" style="flex:1">Zariadenie zatiaľ nemá hlas pre tento jazyk.</span>`}</div>`; }).join('')}
    <div class="btnrow"><button class="btn sm btn-primary" data-act="ctl" data-fn="testSound">${ic('speaker',16)} Vyskúšať zvuk</button><button class="btn sm" data-act="ctl" data-fn="refreshVoices">${ic('repeat',16)} Obnoviť zoznam hlasov</button></div>
    <p class="small" id="sound-res" hidden></p>
  </div></div>
  <details class="howto" id="sound-help"><summary>Nepočuješ hlas?</summary><ol>
    <li><b>Vypni tichý režim.</b> Na boku iPhonu prepni prepínač (alebo na novších iPhonoch stlač tlačidlo Akcia), aby nebol oranžový. iOS hovorený hlas v tichom režime často stlmí.</li>
    <li><b>Zvýš hlasitosť</b> tlačidlami na boku počas toho, ako hlas hrá, nie na obrazovke zvonenia.</li>
    <li><b>Skontroluj Bluetooth</b>, či zvuk neide do slúchadiel alebo reproduktora.</li>
    <li><b>Zavri appku a otvor ju znova</b> (v prepínači appiek ju potiahni nahor) a ťukni na Vyskúšať zvuk.</li>
    <li>Ak hlas stále nejde len v appke na ploche, ale v Safari áno, ide o chybu iOS. Pomôže reštart iPhonu.</li>
  </ol></details>
  <details class="howto"><summary>Ako pridať krajší hlas na iPhone</summary><ol>
    <li>Otvor <b>Nastavenia</b> → <b>Prístupnosť</b> → <b>Hovorený obsah</b> → <b>Hlasy</b>.</li>
    <li>Vyber jazyk a ťukni na ženský hlas: nemčina <b>Anna</b> alebo <b>Petra</b>, francúzština <b>Audrey</b> alebo <b>Aurélie</b>, španielčina <b>Mónica</b> alebo <b>Marisol</b>, portugalčina <b>Luciana</b> alebo <b>Fernanda</b>, ruština <b>Milena</b> alebo <b>Katya</b>.</li>
    <li>Stiahni verziu <b>Vylepšený</b> alebo <b>Prémiový</b> (ikonka so šípkou). Môže mať aj niekoľko sto MB, preto cez Wi‑Fi.</li>
    <li>Appku úplne zavri (v prepínači appiek ju potiahni nahor), otvor ju znova a tu ťukni na <b>Obnoviť zoznam hlasov</b>.</li>
  </ol><p class="small muted">Hlasy Siri nemôže použiť žiadna appka v prehliadači, to je obmedzenie iPhonu. Na PC sú najkrajšie hlasy v prehliadači Edge (označené Natural).</p></details>
  </section>` : ''}
  <section class="sec"><h2 class="h2">Učenie</h2><div class="settings">
    <div class="set"><label for="set-why">Prečo sa učíš<small>Lekcie pre tvoj cieľ sú označené</small></label><select id="set-why" data-set="why"><option value="" ${S.why ? '' : 'selected'}>Nevybrané</option>${GOALS.map(g => `<option value="${g.id}" ${S.why === g.id ? 'selected' : ''}>${esc(g.name)}</option>`).join('')}</select></div>
    <div class="set col"><label>Denná pripomienka<small>Ťukni na čas. Otvorí sa Kalendár s opakovanou udalosťou, potvrď Pridať.</small></label><div class="btnrow">${REM_TIMES.map(t => `<a class="btn sm" href="reminders/${t.replace(':', '')}.ics" target="_blank" rel="noopener">${ic('bell',14)} ${t}</a>`).join('')}</div></div>
    <div class="set col"><label>Úroveň<small>Podľa nej sa vyberajú lekcie, úlohy a príbehy</small></label>${S.order.map(x => `<div class="field" style="align-items:center"><span class="small" style="width:96px;flex:none;font-weight:600">${esc(LANGS[x].name)}</span><select data-set="level" data-lang="${x}" style="flex:1;min-width:0;max-width:none" aria-label="Úroveň ${esc(LANGS[x].name)}"><option value="" ${userLevel(x) ? '' : 'selected'}>Nevybraná</option>${LEVELS.map(l => `<option value="${l.id}" ${userLevel(x) === l.id ? 'selected' : ''}>${l.id} · ${esc(l.name)}</option>`).join('')}</select></div>`).join('')}</div>
    <div class="set"><label for="set-goal">Denný cieľ<small>Jedna lekcia je asi 30 XP</small></label><select id="set-goal" data-set="goal">${[[20,'20 XP · ~5 min'],[30,'30 XP · ~8 min'],[50,'50 XP · ~12 min'],[80,'80 XP · ~20 min']].map(o => `<option value="${o[0]}" ${S.goal === o[0] ? 'selected' : ''}>${o[1]}</option>`).join('')}</select></div>
    <div class="set"><label for="set-per">Nové slovíčka v lekcii</label><select id="set-per" data-set="perLesson">${[3,5,8].map(n => `<option ${S.perLesson === n ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
    <div class="set"><label for="set-rate">Rýchlosť hlasu</label><select id="set-rate" data-set="rate">${[[0.75,'Pomalšie'],[0.9,'Učebná'],[1,'Prirodzená']].map(o => `<option value="${o[0]}" ${S.rate === o[0] ? 'selected' : ''}>${o[1]}</option>`).join('')}</select></div>
    ${S.order.includes('ru') ? `<div class="set"><label for="set-tr">Prepis azbuky<small>Ruština aj latinkou</small></label><input type="checkbox" id="set-tr" data-set="translit" ${S.translit ? 'checked' : ''}></div>` : ''}
    <div class="set col"><label>Jazyky v pase</label><div class="btnrow">${Object.keys(LANGS).map(x => `<label class="btn sm" style="gap:8px"><input type="checkbox" data-set="lang" value="${x}" ${S.order.includes(x) ? 'checked' : ''}> ${esc(LANGS[x].name)}</label>`).join('')}</div></div>
  </div></section>
  <section class="sec"><h2 class="h2">Záloha a prenos na PC</h2><div class="settings"><div class="set col">
    <p class="small muted">Keď chceš pokračovať na PC alebo meníš mobil, ulož si zálohu a načítaj ju na druhom zariadení. Pokrok z oboch sa spojí, nič sa neprepíše.</p>
    <div class="btnrow"><button class="btn sm" data-act="export">${ic('download',16)} Uložiť zálohu</button><button class="btn sm" data-act="copy-backup">${ic('copy',16)} Kopírovať</button><button class="btn sm" data-act="import-file">${ic('upload',16)} Načítať súbor</button><button class="btn sm" data-act="paste-backup">Vložiť text</button></div>
    <p class="small muted">Posledná záloha: ${lb ? `${lb.getDate()}. ${lb.getMonth()+1}. ${lb.getFullYear()}` : 'zatiaľ žiadna'}</p>
    <input type="file" id="imp-file" accept=".json,application/json,text/plain" hidden>
  </div></div></section>
  <section class="sec"><h2 class="h2">Ako appka funguje</h2><div class="faq">
    <details><summary>Koľko miesta zaberá?</summary><p>Celá appka má približne 0,5 MB vrátane písma. Je to menej ako jedna fotka. Tvoj pokrok teraz zaberá ${storageKB()} kB.</p></details>
    <details><summary>Kde sa ukladá môj pokrok?</summary><p>Priamo v tomto zariadení. Nikam sa neposiela a nepotrebuješ žiadny účet. Appka na ploche iPhonu má vlastnú pamäť, oddelenú od Safari, preto sa uč vždy cez ikonu na ploche.</p></details>
    <details><summary>Funguje aj bez internetu?</summary><p>Áno. Pri prvom otvorení si appka uloží všetko potrebné. Lekcie, opakovanie, hry, príbehy aj hlasy (sú súčasťou iPhonu) potom fungujú offline, napríklad v lietadle alebo v metre. Internet je potrebný len na stiahnutie novej verzie. Tá sa nahrá sama, keď appku otvoríš s internetom.</p></details>
    <details><summary>Môžem o pokrok prísť?</summary><p>Áno, ak appku z plochy zmažeš alebo vymažeš údaje Safari. Preto si raz za pár týždňov ulož zálohu, napríklad do appky Súbory alebo na iCloud Drive. Appka ti to sama pripomenie.</p></details>
    <details><summary>Ako pridám vlastné slovíčka?</summary><p>V záložke Lekcie otvor Moje slovíčka a ťukni na Pridať slovíčko. Slová z príbehov pridáš ťuknutím na podčiarknuté slovo.</p></details>
  </div></section>
  <section class="sec"><h2 class="h2">Klávesnica</h2><div class="settings"><div class="set col"><p class="small muted">Nastavenia → Všeobecné → Klávesnica → Klávesnice → Pridať novú. S nemeckou máš ä, ö, ü a ß po ruke, s ruskou azbuku. Ruštinu ti appka uzná aj latinkou.</p></div></div></section>
  <p class="foot">Jazykový pas ${VERSION}</p>`;
}
function settingsSheet(){
  Sheet.show('Nastavenia');
  const ctrl = {
    isSettings:true,
    paint(keep){ Sheet.body(settingsHTML(), keep); },
    input(e){ const t = e.target; if (t.dataset && t.dataset.set === 'custom') { S.custom = Object.assign({}, CUSTOM_DEFAULT, S.custom || {}); S.custom[t.dataset.key] = t.value; applyTheme(S.active); } },
    refreshVoices(){ Speech.refresh(); ctrl.paint(true); toast(`Načítané hlasy: ${Speech.voices.length}`); },
    testSound(){
      const el = $('#sound-res'), c = S.active; if (!el) return;
      el.hidden = false; el.style.color = ''; el.textContent = 'Prehrávam ukážku…';
      Speech.say(SAMPLE[c], c, false, (ok, why) => {
        const r = $('#sound-res'); if (!r) return;
        if (ok) { r.style.color = 'var(--good)'; r.textContent = 'Hlas sa spustil. Ak ho napriek tomu nepočuješ, vypni tichý režim a zvýš hlasitosť.'; }
        else { r.style.color = 'var(--bad)'; r.textContent = why === 'nosynth' ? 'Toto zariadenie nepodporuje čítanie nahlas.' : 'Hlas sa nespustil. Pozri tipy nižšie.'; const h = $('#sound-help'); if (h) h.open = true; }
      });
    }
  };
  Sheet.ctrl = ctrl; ctrl.paint(false);
}
function applySetting(k, el){
  if (k === 'goal' || k === 'perLesson') S[k] = parseInt(el.value, 10);
  else if (k === 'rate') S.rate = parseFloat(el.value);
  else if (k === 'translit') S.translit = el.checked;
  else if (k === 'langAccent') S.langAccent = el.checked;
  else if (k === 'why') S.why = el.value || null;
  else if (k === 'level') { S.levels = S.levels || {}; if (el.value) S.levels[el.dataset.lang] = el.value; else delete S.levels[el.dataset.lang]; }
  else if (k === 'custom') { S.custom = Object.assign({}, CUSTOM_DEFAULT, S.custom || {}); S.custom[el.dataset.key] = el.value; }
  else if (k === 'voice') { S.voices = S.voices || {}; const x = el.dataset.lang; if (el.value) S.voices[x] = el.value; else delete S.voices[x]; save('settings'); Speech.say(SAMPLE[x], x); toast('Hlas zmenený.'); return; }
  else if (k === 'lang') {
    const x = el.value;
    if (el.checked) { if (!S.order.includes(x)) S.order.push(x); }
    else { if (S.order.length <= 1) { el.checked = true; toast('Aspoň jeden jazyk musí zostať.'); return; } S.order = S.order.filter(y => y !== x); if (S.active === x) S.active = S.order[0]; }
  }
  save('settings'); render();
  if (Sheet.open && Sheet.ctrl && Sheet.ctrl.isSettings) Sheet.ctrl.paint(true);
  if (k !== 'custom') toast('Uložené.');
}

/* ───────────── shell ───────────── */
function renderHeader(){
  const st = streak();
  $('#top').innerHTML = `<div class="wrap top-in"><div class="top-row"><span class="brand"><span class="brand-mark">${esc(S.active.toUpperCase())}</span>Jazykový pas</span><span class="top-actions"><span class="streak" title="Séria dní">${ic('flame',17)}${st}</span><button class="icon-btn sm" data-act="settings" aria-label="Nastavenia">${ic('gear',18)}</button></span></div>
    <div class="chips">${S.order.map(x => { return `<button class="chip lc ${x === S.active ? 'on' : ''}" style="--la:${LANGS[x].c[0]};--lad:${LANGS[x].c[1]}" data-act="lang" data-arg="${x}" aria-pressed="${x === S.active}" aria-label="${esc(LANGS[x].name)}"><i class="dot"></i>${x.toUpperCase()}${userLevel(x) ? `<small>${userLevel(x)}</small>` : ''}</button>`; }).join('')}</div></div>`;
}
const TABS = [['today','Dnes','today'],['course','Lekcie','course'],['games','Hry','games'],['read','Čítanie','read'],['progress','Pokrok','progress']];
function renderTabs(){ $('#tabs').innerHTML = `<div class="tabs-in wrap">${TABS.map(t => `<button class="tab ${tab === t[0] ? 'on' : ''}" data-act="tab" data-arg="${t[0]}" ${tab === t[0] ? 'aria-current="page"' : ''}>${ic(t[2],23)}<span>${t[1]}</span></button>`).join('')}</div>`; }
function render(){
  checkAch();
  applyTheme(S.active); renderHeader(); renderTabs();
  ({today:renderToday, course:renderCourse, games:renderGames, read:renderRead, progress:renderProgress}[tab] || renderToday)($('#view'));
}

/* ───────────── actions ───────────── */
const ACT = {
  tab(a){ tab = a; ls('tab', tab); render(); window.scrollTo(0, 0); },
  go(a){ if (Sheet.open) Sheet.close(); ACT.tab(a); },
  lang(a){ if (!LANGS[a]) return; S.active = a; save('settings'); render(); },
  'close-sheet'(){ Sheet.close(); },
  ctl(a, b){ const f = Sheet.ctrl && Sheet.ctrl[b.dataset.fn]; if (f) f(a, b); },
  review(){ startReview(S.active); },
  lesson(){ startLesson(S.active); },
  game(a){ openGame(a); },
  unit(a){ unitSheet(S.active, a); },
  'add-word'(){ addWordSheet(S.active); },
  gloss(a){ openGloss(+a); },
  'pop-close'(){ closePop(); },
  'pop-say'(a){ const s = curStory(S.active); if (s && s.glossary[+a]) Speech.say(s.glossary[+a].w, S.active); },
  'gloss-add'(a){
    const c = S.active, s = curStory(c), g = s && s.glossary[+a]; if (!g) return;
    P[c].custom.push({id:uid(), t:g.w, sk:g.sk, ex:sentenceWith(s.paragraphs.join(' '), g.w), exSk:''}); save(c);
    closePop(); render(); toast('Pridané do Mojich slovíčok. Naučíš sa ho v ďalšej lekcii.');
  },
  'read-mode'(a){ ls('readMode', a === 'dialogs' ? 'dialogs' : 'stories'); render(); },
  dialog(a){ dialogSheet(S.active, a); },
  placement(){ placementTest(S.active); },
  grammar(a){ grammarSheet(S.active, a); },
  'set-why'(a){ S.why = a; save('settings'); render(); if (Sheet.open && Sheet.ctrl && Sheet.ctrl.isSettings) Sheet.ctrl.paint(true); toast('Lekcie pre tvoj cieľ sú v Lekciách označené.'); },
  'why-skip'(){ S.whySkip = true; save('settings'); render(); },
  'story-pick'(a){ const m = ls('read') || {}; m[S.active] = a; ls('read', m); render(); window.scrollTo(0, 0); },
  'say-para'(a){ const s = curStory(S.active); if (s) Speech.say(s.paragraphs[+a], S.active); },
  'read-all'(){ const s = curStory(S.active); if (s) Speech.say(s.title + '. ' + s.paragraphs.join(' '), S.active); },
  'tr-para'(a){ const c = S.active, s = curStory(c); trOpen[c] = trOpen[c] || {}; const o = trOpen[c][s.title] = trOpen[c][s.title] || {}; o[+a] = !o[+a]; const y = window.scrollY; render(); window.scrollTo(0, y); },
  quiz(a){
    const c = S.active, [qi, oi] = a.split(':').map(Number), s = curStory(c), st = stState(c, s);
    st.answers = st.answers || {}; if (st.answers[qi] !== undefined) return; st.answers[qi] = oi;
    if (s.questions[qi] && s.questions[qi].answer === oi) { addXP(3); toast('Správne! +3 XP'); }
    save(c); const y = window.scrollY; render(); window.scrollTo(0, y);
  },
  'story-done'(){ const c = S.active, st = stState(c, curStory(c)); if (st.done) return; st.done = true; addXP(10); logDay(c, 'g'); save(c); const y = window.scrollY; render(); window.scrollTo(0, y); toast('+10 XP za čítanie'); },
  settings(){ settingsSheet(); },
  'level-sheet'(){ levelSheet(S.active); },
  'set-level'(a){ if (!LV[a]) return; S.levels = S.levels || {}; S.levels[S.active] = a; save('settings'); if (Sheet.open) Sheet.close(); render(); window.scrollTo(0, 0); toast(`Úroveň ${a}: lekcie a úlohy sú prispôsobené.`); },
  theme(a){ S.theme = a; if (a === 'custom' && !S.custom) S.custom = Object.assign({}, CUSTOM_DEFAULT); save('settings'); render(); if (Sheet.ctrl && Sheet.ctrl.isSettings) Sheet.ctrl.paint(true); },
  'backup-later'(){ S.backupSnooze = Date.now(); save('settings'); render(); },
  'voice-test'(a){ if (LANGS[a]) Speech.say(SAMPLE[a], a); },
  export(){ exportFile(); },
  'copy-backup'(){ copyBackup(); },
  'import-file'(){ const f = $('#imp-file'); if (f) f.click(); },
  'paste-backup'(){ pasteSheet(); },
  'hide-install'(){ S.installHidden = true; save('settings'); render(); },
  async install(){ if (!installEvt) return; installEvt.prompt(); try { await installEvt.userChoice; } catch(e) {} installEvt = null; render(); }
};

['pointerdown','touchend','keydown'].forEach(ev => document.addEventListener(ev, () => Speech.unlock(), {once:true, capture:true}));
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if (!b) { if (e.target.id === 'pop') closePop(); return; }
  if (b.disabled) return; const f = ACT[b.dataset.act]; if (f) { e.preventDefault(); f(b.dataset.arg, b, e); }
});
document.addEventListener('keydown', e => {
  if (!$('#pop').hidden && e.key === 'Escape') { e.preventDefault(); closePop(); return; }
  if (Sheet.open) { if (e.key === 'Escape') { e.preventDefault(); Sheet.close(); return; } if (Sheet.ctrl && Sheet.ctrl.key) Sheet.ctrl.key(e); }
});
document.addEventListener('submit', e => { e.preventDefault(); if (e.target.id === 'addform' && Sheet.ctrl && Sheet.ctrl.submit) Sheet.ctrl.submit(); });
document.addEventListener('change', e => {
  const t = e.target;
  if (t.id === 'imp-file' && t.files && t.files[0]) { const r = new FileReader(); r.onload = () => importText(r.result); r.readAsText(t.files[0]); t.value = ''; return; }
  if (t.dataset && t.dataset.set) applySetting(t.dataset.set, t);
});
document.addEventListener('visibilitychange', () => { if (document.hidden) flush(); else if (!Sheet.open) render(); });
window.addEventListener('pagehide', flush);
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; if (!Sheet.open && tab === 'today') render(); });
window.addEventListener('appinstalled', () => { installEvt = null; toast('Appka je nainštalovaná.'); });

/* ───────────── boot ───────────── */
load();
Speech.init();
render();
Speech.ready = true;
try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch(e) {}
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
