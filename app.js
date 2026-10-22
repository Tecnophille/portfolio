const flows = {
  event: {title:'One event. A visible path.',summary:'A departmental request moves through the people responsible for reviewing and approving it.',steps:[['Submit request','The requester','Capture the event category, event name or quarter, and the items needed. A structured request gives reviewers the context to make a decision.'],['Manager review','The manager','Review the departmental need and request details. A clear approval stage gives the next person a defined handoff.'],['Admin approval','The admin team','Review the manager-approved request and coordinate the administrative next steps. Each stage has a clear owner.']]},
  budget: {title:'Give every cost a clear owner.',summary:'A budget request connects the operational need to departmental review, administration, and finance.',steps:[['Submit budget','The requester','Select the items, quantities, unit costs, and cost centre. Calculated totals give reviewers a consistent view of the request.'],['Manager review','The manager','Check the business need, quantities, and departmental context before the request proceeds.'],['Admin review','The admin team','Review the request and its supporting details before the finance stage.'],['Finance approval','The finance team','Review the financial allocation and request totals. Finance is the final approval level in this example.']]},
  beverages: {title:'A routine request, made repeatable.',summary:'A monthly staff provision workflow starts with the right requester and follows a consistent approval route.',steps:[['Submit request','Supervisor or manager','The proposed workflow limits submission to supervisors and managers, with quantities intended to use departmental headcount from HR.'],['Manager review','The manager','Review the monthly request against departmental requirements and the submitted quantities.'],['Admin approval','The admin team','Review the approved request for fulfilment. Monthly notifications and reporting form part of the planned workflow.']]}
};

const projects={
  ai:{kicker:'01 / PRODUCT & AI',title:'Turning automation ambition into a plan.',intro:'An enterprise AI and automation transformation programme needs a clear connection between operational priorities and technical execution.',sections:[{title:'The challenge',text:'Identify where automation can help, connect work across teams, and turn a broad ambition into a coordinated delivery programme.'},{title:'My contribution',items:['Assess existing workflows and identify automation opportunities.','Define the roadmap, workstreams, responsibilities, and milestones.','Coordinate implementation plans and systems integration planning.','Track dependencies, risks, and progress, with governance that makes ownership visible.']},{title:'The perspective',text:'My technical product management experience includes leading a 20-person technology team. I bring that combination of delivery coordination and technical understanding to complex programmes.'}],footer:'Interested in how I could help your team? ',link:'mailto:tecnophille@gmail.com',label:'Let’s talk ↗'},
  workflows:{kicker:'02 / ENTERPRISE SYSTEMS',title:'Less chasing. Clearer approvals.',intro:'Departmental automation work using Microsoft Power Apps, Power Automate, and SharePoint, shaped around the realities of operational requests.',sections:[{title:'The workflow areas',items:['Event management: categories, event details, item requests, and manager-to-admin approvals.','Budget cost control: quantities, unit costs, totals, cost centres, and a finance approval stage.','Monthly staff beverages: controlled submission, headcount-based quantity planning, and repeatable monthly requests.']},{title:'The approach',text:'Start with the request information, define the approval responsibilities, and make the handoff understandable for each person in the process. SharePoint provides the structured data behind the application.'},{title:'Project context',text:'These are development and planning initiatives from my departmental automation work. The interactive explorer on this site illustrates their approval routes; it is a demonstration of the workflow design.'}],footer:'See a request move through the stages. ',link:'#approach',label:'Explore the approval flows ↓'},
  cura:{kicker:'03 / VENTURE BUILDING',title:'A stronger foundation for healthcare trust.',intro:'Curably is the venture behind Cura ID, a health identity infrastructure initiative focused on identity and encounter verification at the point of care.',sections:[{title:'The problem I’m exploring',text:'Healthcare systems need confidence about who is receiving care and whether an encounter has taken place. That trust begins before a claim reaches a desk.'},{title:'My role',text:'As founder of Curably, I’m shaping the product direction and the connection between healthcare needs, identity infrastructure, and practical implementation.'},{title:'The product focus',text:'Cura ID centres on verifying patient identity and confirming encounters at the point of care. The aim is to close gaps that can allow fraud and administrative uncertainty to enter the care journey.'}],footer:'Learn more about the venture. ',link:'https://letscura.com',label:'Visit letscura.com ↗'}
};


const $ = (id) => document.getElementById(id);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionEnabled = !reduceMotion.matches;
try { const saved = localStorage.getItem('samuel-motion'); if(saved !== null) motionEnabled = saved === 'on'; } catch {}
function setMotion(enabled, persist = false) {
  motionEnabled = enabled;
  document.documentElement.classList.toggle('motion-off', !enabled);
  document.documentElement.classList.toggle('motion-on', enabled);
  $('motion-toggle').setAttribute('aria-pressed', String(!enabled));
  $('motion-toggle').setAttribute('aria-label', enabled ? 'Pause decorative animations' : 'Enable decorative animations');
  document.querySelector('.motion-label').textContent = enabled ? 'Motion on' : 'Motion off';
  if(!enabled) document.getAnimations().filter(a => a.effect?.target?.classList?.contains('content-transition')).forEach(a => a.cancel());
  window.dispatchEvent(new CustomEvent('portfolio:motion'));
  if(persist) try { localStorage.setItem('samuel-motion', enabled ? 'on' : 'off'); } catch {}
}
setMotion(motionEnabled);
$('motion-toggle').addEventListener('click', () => setMotion(!motionEnabled, true));
reduceMotion.addEventListener('change', e => setMotion(!e.matches));
function animateContent(element) {
  if(!motionEnabled) return;
  element.classList.add('content-transition');
  element.getAnimations().forEach(a => a.cancel());
  element.animate([{opacity:.25, transform:'translateY(10px)'},{opacity:1, transform:'translateY(0)'}], {duration:340, easing:'cubic-bezier(.2,.7,.3,1)'});
}

// Three perspectives, three forms of the same interactive sculpture.
let fieldMode = 'product';
const fieldStories = {
  product: ['From problem to product.','Find the right problem. Give the team a clear direction.','#work'],
  automation: ['Make the handoffs flow.','Connect repetitive work, decisions, and the people responsible.','#approach'],
  operations: ['Keep the whole system moving.','Connect priorities, teams, and delivery around real business needs.','#about']
};
const fieldTabs = [...document.querySelectorAll('[data-field]')];
function selectField(mode) {
  fieldMode = mode;
  fieldTabs.forEach(b => {const active=b.dataset.field===mode;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
  const [title,description,href]=fieldStories[mode];
  $('field-title').textContent=title;
  $('field-description').textContent=description;
  $('field-link').href=href;
  $('field-link').setAttribute('aria-label',`Explore related ${mode} work`);
  $('field-story').setAttribute('aria-labelledby',`field-${mode}`);
  document.querySelector('.hero-art').dataset.mode=mode;
  animateContent($('field-story'));
  window.dispatchEvent(new CustomEvent('portfolio:field'));
}
fieldTabs.forEach((button,i)=>{
  button.addEventListener('click',()=>selectField(button.dataset.field));
  button.addEventListener('keydown',event=>{
    let next;
    if(event.key==='ArrowRight')next=(i+1)%fieldTabs.length;
    else if(event.key==='ArrowLeft')next=(i+fieldTabs.length-1)%fieldTabs.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=fieldTabs.length-1;
    else return;
    event.preventDefault();selectField(fieldTabs[next].dataset.field);fieldTabs[next].focus();
  });
});

// Filter project stories, without moving the visitor away from the collection.
const filters = [...document.querySelectorAll('[data-filter]')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  document.querySelector('.project-grid').dataset.filtered = String(button.dataset.filter !== 'all');
  let shown = 0;
  document.querySelectorAll('[data-category]').forEach(card => {
    const visible = button.dataset.filter === 'all' || button.dataset.filter === card.dataset.category;
    card.hidden = !visible;
    if(visible) { shown++; card.classList.add('in-view'); animateContent(card); }
  });
  $('work-count').textContent = `${shown} selected project${shown === 1 ? '' : 's'}`;
}));

// A guided example, rather than a real approval request.
let currentFlow = 'event';
let currentStep = 0;
let playTimer = null;
const tabs = [...document.querySelectorAll('[data-flow]')];
const stages = $('flow-stages');
function updatePlayer() {
  const last = currentStep === flows[currentFlow].steps.length - 1;
  $('play-icon').textContent = playTimer ? 'Ⅱ' : last ? '↺' : '▶';
  $('play-label').textContent = playTimer ? 'Pause walkthrough' : last ? 'Replay walkthrough' : 'Play walkthrough';
  $('flow-play').setAttribute('aria-label', playTimer ? 'Pause workflow walkthrough' : last ? 'Replay workflow walkthrough' : 'Play workflow walkthrough');
  $('flow-play').classList.toggle('is-playing', Boolean(playTimer));
  $('flow-next').disabled = last;
}
function pauseFlow() {
  clearInterval(playTimer);
  playTimer = null;
  updatePlayer();
}
function selectStep(index, manual = false) {
  if(manual) pauseFlow();
  currentStep = index;
  const steps = flows[currentFlow].steps;
  const step = steps[index];
  $('flow-detail-number').textContent = String(index + 1).padStart(2, '0');
  $('flow-detail-title').textContent = step[1];
  $('flow-detail-text').textContent = step[2];
  stages.querySelectorAll('button').forEach((b,i) => {
    b.setAttribute('aria-pressed', String(i === index));
    b.classList.toggle('is-complete', i < index);
    b.querySelector('span').textContent = `${i < index ? '✓ ' : ''}STEP ${String(i + 1).padStart(2,'0')}`;
  });
  $('flow-position').textContent = `${String(index + 1).padStart(2,'0')} / ${String(steps.length).padStart(2,'0')}`;
  $('flow-progress-fill').style.width = `${(index + 1) / steps.length * 100}%`;
  updatePlayer();
  animateContent(document.querySelector('.flow-detail'));
}
function selectFlow(key) {
  clearInterval(playTimer); playTimer = null;
  currentFlow = key;
  const flow = flows[key];
  tabs.forEach(t => { const active = t.dataset.flow === key; t.setAttribute('aria-selected', String(active)); t.tabIndex = active ? 0 : -1; });
  $('flow-panel').setAttribute('aria-labelledby', `tab-${key}`);
  $('flow-title').textContent = flow.title;
  $('flow-summary').textContent = flow.summary;
  stages.dataset.steps = String(flow.steps.length);
  stages.replaceChildren();
  flow.steps.forEach((s,i) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    const num = document.createElement('span');
    const title = document.createElement('strong');
    title.textContent = s[0];
    button.append(num,title);
    button.addEventListener('click', () => selectStep(i,true));
    li.append(button); stages.append(li);
  });
  selectStep(0);
}
tabs.forEach((tab,i) => {
  tab.addEventListener('click', () => selectFlow(tab.dataset.flow));
  tab.addEventListener('keydown', event => {
    let next;
    if(event.key === 'ArrowRight') next = (i+1)%tabs.length;
    else if(event.key === 'ArrowLeft') next = (i+tabs.length-1)%tabs.length;
    else if(event.key === 'Home') next = 0;
    else if(event.key === 'End') next = tabs.length-1;
    else return;
    event.preventDefault(); selectFlow(tabs[next].dataset.flow); tabs[next].focus();
  });
});
$('flow-play').addEventListener('click', () => {
  if(playTimer) { pauseFlow(); return; }
  if(currentStep === flows[currentFlow].steps.length-1) selectStep(0);
  playTimer = setInterval(() => {
    if(currentStep < flows[currentFlow].steps.length-1) selectStep(currentStep+1);
    if(currentStep === flows[currentFlow].steps.length-1) pauseFlow();
  }, 2500);
  updatePlayer();
});
$('flow-next').addEventListener('click', () => selectStep(Math.min(currentStep+1, flows[currentFlow].steps.length-1),true));
$('flow-reset').addEventListener('click', () => selectStep(0,true));
document.addEventListener('visibilitychange', () => { if(document.hidden) pauseFlow(); });
if('IntersectionObserver' in window) new IntersectionObserver(entries => { if(!entries[0].isIntersecting) pauseFlow(); }).observe(document.querySelector('.workflow-demo'));
selectFlow('event');

const dialog = $('project-dialog');
let projectTrigger = null;
let activeProject = 0;
const projectKeys = Object.keys(projects);
function openProject(key) {
  activeProject = projectKeys.indexOf(key);
  const p = projects[key];
  $('dialog-kicker').textContent = p.kicker;
  $('dialog-title').textContent = p.title;
  $('dialog-intro').textContent = p.intro;
  const sections = $('dialog-sections'); sections.replaceChildren();
  p.sections.forEach(s => {
    const section = document.createElement('section');
    const heading = document.createElement('h3'); heading.textContent = s.title; section.append(heading);
    if(s.items) {
      const list = document.createElement('ul');
      s.items.forEach(item => {const li = document.createElement('li'); li.textContent = item; list.append(li);});
      section.append(list);
    } else { const text = document.createElement('p'); text.textContent = s.text; section.append(text); }
    sections.append(section);
  });
  const footer = $('dialog-footer'); footer.replaceChildren(document.createTextNode(p.footer));
  const a = document.createElement('a'); a.href = p.link; a.textContent = p.label;
  if(p.link.startsWith('https:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
  if(p.link.startsWith('#')) a.addEventListener('click', () => dialog.close());
  footer.append(a);
  $('project-position').textContent = `${String(activeProject+1).padStart(2,'0')} / 03`;
  if(!dialog.open) dialog.showModal();
  document.body.classList.add('dialog-open'); dialog.scrollTop = 0;
  animateContent($('dialog-story'));
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => { projectTrigger = button; pauseFlow(); openProject(button.dataset.project); }));
$('project-next').addEventListener('click', () => openProject(projectKeys[(activeProject+1)%projectKeys.length]));
$('project-prev').addEventListener('click', () => openProject(projectKeys[(activeProject+projectKeys.length-1)%projectKeys.length]));
$('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if(event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); }
});
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); projectTrigger?.focus({preventScroll:true}); });

const intents = {
  product: {subject:'Product leadership conversation', body:'Hi Samuel,\n\nI would like to discuss a product leadership opportunity.\n\nOrganisation:\nRole or challenge:\n\nBest,', hint:'Let’s talk product direction, teams, and delivery.'},
  automation: {subject:'Let’s discuss an automation project', body:'Hi Samuel,\n\nI would like to discuss an automation project.\n\nThe process today:\nWhat we would like to improve:\n\nBest,', hint:'Tell me where work gets stuck. We can start there.'},
  cura: {subject:'Curably / Cura ID conversation', body:'Hi Samuel,\n\nI would like to learn more about Curably and Cura ID.\n\nOrganisation:\nWhat I would like to explore:\n\nBest,', hint:'Let’s explore health identity and trust at the point of care.'}
};
document.querySelectorAll('[data-intent]').forEach(button => button.addEventListener('click', () => {
  const selected = button.getAttribute('aria-pressed') !== 'true';
  document.querySelectorAll('[data-intent]').forEach(b => b.setAttribute('aria-pressed', String(selected && b === button)));
  const intent = intents[button.dataset.intent];
  $('contact-email').href = selected ? `mailto:tecnophille@gmail.com?subject=${encodeURIComponent(intent.subject)}&body=${encodeURIComponent(intent.body)}` : 'mailto:tecnophille@gmail.com';
  $('contact-hint').textContent = selected ? intent.hint : 'Choose a topic to start a more useful conversation.';
}));
let copyTimeout;
$('copy-email').addEventListener('click', async () => {
  clearTimeout(copyTimeout);
  try {
    if(navigator.clipboard?.writeText) await navigator.clipboard.writeText('tecnophille@gmail.com');
    else {
      const input = document.createElement('textarea'); input.value = 'tecnophille@gmail.com'; input.setAttribute('readonly',''); input.style.position = 'fixed'; input.style.opacity = '0'; document.body.append(input); input.select();
      const copied = document.execCommand('copy'); input.remove(); if(!copied) throw new Error('Copy unavailable'); $('copy-email').focus({preventScroll:true});
    }
    $('copy-status').textContent = 'Email copied ✓';
  } catch { $('copy-status').textContent = 'Select the email address to copy it.'; }
  copyTimeout = setTimeout(() => { $('copy-status').textContent = ''; }, 4500);
});
$('year').textContent = new Date().getFullYear();

// Progressive enhancement: content stays visible if JavaScript is unavailable.
if('IntersectionObserver' in window) {
  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }), {threshold:.07,rootMargin:'0px 0px -16px 0px'});
  document.querySelectorAll('.section-heading,.project,.workflow-demo,.principles>div,.about-aside,.about-copy,.contact').forEach(el => {el.classList.add('reveal');observer.observe(el);});
}
let scrollFrame = 0;
const sectionIds = ['work','approach','about','contact'];
function updateScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  document.documentElement.style.setProperty('--read-progress', max > 0 ? scrollY/max : 0);
  document.querySelector('.site-header').classList.toggle('is-scrolled', scrollY > 25);
  let active = '';
  sectionIds.forEach(id => { if($(id).getBoundingClientRect().top < 210) active = id; });
  document.querySelectorAll('[data-nav]').forEach(a => { if(a.dataset.nav === active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
  scrollFrame = 0;
}
window.addEventListener('scroll', () => {if(!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);}, {passive:true});
window.addEventListener('resize', updateScroll, {passive:true});
updateScroll();

// A lightweight canvas sculpture: no video, 3D library, or external assets.
(function buildSystemField(){
  const canvas=$('system-canvas');
  const ctx=canvas.getContext('2d');
  if(!ctx) return;
  const count=64*12;
  const points=[];
  const colors={product:[216,255,98],automation:[135,192,255],operations:[189,156,255]};
  const keys=Object.keys(colors);
  let weights=[1,0,0];
  let rotation=-.6,tilt=.68,dragging=false,lastX=0,lastY=0;
  let w=0,h=0,frame=0,lastTime=0,visible=true;
  for(let u=0;u<64;u++)for(let v=0;v<12;v++){
    const i=u*12+v,t=u/64*Math.PI*2,p=v/12*Math.PI*2;
    const z=1-2*(i+.5)/count,r=Math.sqrt(1-z*z),a=i*2.399963229728653;
    const helix=u/63*Math.PI*4;
    points.push({
      shapes:[[(1.7+.58*Math.cos(p))*Math.cos(t),(1.7+.58*Math.cos(p))*Math.sin(t),.58*Math.sin(p)],
        [r*Math.cos(a)*1.95,r*Math.sin(a)*1.95,z*1.95],
        [Math.cos(helix)*1.05+Math.cos(p)*.3,(u/63-.5)*3.65,Math.sin(helix)*1.05+Math.sin(p)*.3]],
      u,v,i
    });
  }
  function requestDraw(){if(!frame&&visible&&!document.hidden)frame=requestAnimationFrame(draw);}
  function size(){
    const r=canvas.getBoundingClientRect();w=r.width;h=r.height;
    const dpr=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);requestDraw();
  }
  function draw(time){
    frame=0;if(!visible||document.hidden||!w||!h)return;
    const dt=Math.min((time-lastTime)/1000||.016,.04);lastTime=time;
    if(motionEnabled&&!dragging)rotation+=dt*.19;
    const target=keys.indexOf(fieldMode);
    let morphing=false;
    weights=weights.map((value,i)=>{
      const goal=i===target?1:0;
      const next=motionEnabled?value+(goal-value)*.065:goal;
      if(Math.abs(next-goal)>.002)morphing=true;
      return next;
    });
    const color=[0,1,2].map(i=>Math.round(keys.reduce((sum,key,k)=>sum+colors[key][i]*weights[k],0)));
    const rgb=color.join(',');
    ctx.clearRect(0,0,w,h);
    const glow=ctx.createRadialGradient(w*.51,h*.45,0,w*.51,h*.45,Math.min(w,h)*.5);
    glow.addColorStop(0,`rgba(${rgb},.065)`);glow.addColorStop(.55,`rgba(${rgb},.02)`);glow.addColorStop(1,`rgba(${rgb},0)`);
    ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    const sx=Math.sin(tilt),cx=Math.cos(tilt),sy=Math.sin(rotation),cy=Math.cos(rotation);
    const scale=Math.min(w,h)*.166;
    const projected=points.map(point=>{
      const p=[0,1,2].map(axis=>point.shapes.reduce((sum,shape,k)=>sum+shape[axis]*weights[k],0));
      const y=p[1]*cx-p[2]*sx,z=p[1]*sx+p[2]*cx;
      const rx=p[0]*cy+z*sy,rz=-p[0]*sy+z*cy;
      const perspective=7.5/(7.5+rz);
      return {x:w*.51+rx*scale*perspective,y:h*.45+y*scale*perspective,z:rz,px:p[0],py:p[1],pz:p[2],i:point.i,v:point.v};
    });
    ctx.beginPath();
    projected.forEach((p,i)=>{
      if(i+12>=count)return;
      const q=projected[i+12];
      const distance=(p.px-q.px)**2+(p.py-q.py)**2+(p.pz-q.pz)**2;
      if(distance<.8){ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);}
    });
    ctx.strokeStyle=`rgba(${rgb},.14)`;ctx.lineWidth=.55;ctx.stroke();
    projected.sort((a,b)=>b.z-a.z).forEach(p=>{
      const depth=Math.max(.12,Math.min(1,1-(p.z+2.6)/5.2));
      const radius=.65+depth*1.15;
      ctx.beginPath();ctx.arc(p.x,p.y,radius,0,Math.PI*2);
      ctx.fillStyle=`rgba(${rgb},${.18+depth*.74})`;ctx.fill();
    });
    if(motionEnabled||morphing||dragging)requestDraw();
  }
  canvas.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId);requestDraw();});
  canvas.addEventListener('pointermove',e=>{if(!dragging)return;rotation+=(e.clientX-lastX)*.008;tilt=Math.max(-.9,Math.min(1.3,tilt+(e.clientY-lastY)*.005));lastX=e.clientX;lastY=e.clientY;requestDraw();});
  function endDrag(){dragging=false;requestDraw();}
  canvas.addEventListener('pointerup',endDrag);canvas.addEventListener('pointercancel',endDrag);
  $('rotate-left').addEventListener('click',()=>{rotation-=.3;requestDraw();});
  $('rotate-right').addEventListener('click',()=>{rotation+=.3;requestDraw();});
  window.addEventListener('portfolio:field',requestDraw);
  window.addEventListener('portfolio:motion',requestDraw);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else{lastTime=0;requestDraw();}});
  if('ResizeObserver'in window)new ResizeObserver(size).observe(canvas);else window.addEventListener('resize',size);
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){lastTime=0;requestDraw();}else{cancelAnimationFrame(frame);frame=0;}}).observe(canvas);
  size();
})();

if(window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.project-visual').forEach(visual=>{
    let raf=0;
    visual.addEventListener('pointermove',e=>{if(!motionEnabled)return;const r=visual.getBoundingClientRect();const y=(e.clientY-r.top)/r.height-.5;cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>visual.style.setProperty('--visual-drift',`${y*-12}px`));});
    visual.addEventListener('pointerleave',()=>{cancelAnimationFrame(raf);visual.style.setProperty('--visual-drift','0px');});
  });
}
