const flows = {
  event: {title:'One event. A visible path.',summary:'A departmental request moves through the people responsible for reviewing and approving it.',steps:[['Submit request','The requester','Capture the event category, event name or quarter, and the items needed. A structured request gives reviewers the context to make a decision.'],['Manager review','The manager','Review the departmental need and request details. A clear approval stage gives the next person a defined handoff.'],['Admin approval','The admin team','Review the manager-approved request and coordinate the administrative next steps. Each stage has a clear owner.']]},
  budget: {title:'Give every cost a clear owner.',summary:'A budget request connects the operational need to departmental review, administration, and finance.',steps:[['Submit budget','The requester','Select the items, quantities, unit costs, and cost centre. Calculated totals give reviewers a consistent view of the request.'],['Manager review','The manager','Check the business need, quantities, and departmental context before the request proceeds.'],['Admin review','The admin team','Review the request and its supporting details before the finance stage.'],['Finance approval','The finance team','Review the financial allocation and request totals. Finance is the final approval level in this example.']]},
  beverages: {title:'A routine request, made repeatable.',summary:'A monthly staff provision workflow starts with the right requester and follows a consistent approval route.',steps:[['Submit request','Supervisor or manager','The proposed workflow limits submission to supervisors and managers, with quantities intended to use departmental headcount from HR.'],['Manager review','The manager','Review the monthly request against departmental requirements and the submitted quantities.'],['Admin approval','The admin team','Review the approved request for fulfilment. Monthly notifications and reporting form part of the planned workflow.']]}
};

const projects = {
  "ai": {
    "kicker": "01 / WAYA LINKS · PRODUCT & AI",
    "title": "An AI mandate. A delivery system.",
    "intro": "Technical Product Manager for AI Innovation at Waya Links from July to August 2026, working across WayaBank, WayaPos, WayaQuick, and WayaGram.",
    "sections": [
      {
        "title": "The mandate",
        "text": "Led systematic AI-driven automation of core business processes across the group’s products, reporting to the managing director."
      },
      {
        "title": "My contribution",
        "items": [
          "Owned and coordinated the AI Automation Backlog across a six-engineer AI pod.",
          "Documented the AI orchestrator, n8n, and Metabase stack in an AI-Driven Automation Overview.",
          "Developed the AI Innovation Charter and the Microsoft 365/Zoho utilisation business case with an opportunity register.",
          "Connected engineering sprint documentation, leadership tracking, and clear ownership.",
          "Supported WayaBank regulatory submissions, regulator interaction, governance requirements, and compliance controls."
        ]
      },
      {
        "title": "What this shows",
        "text": "The connection between technical delivery, product strategy, and an operating model that people can follow."
      }
    ],
    "footer": "Discuss an AI or automation programme. ",
    "link": "mailto:oliversamuel146@gmail.com?subject=AI%20automation%20programme",
    "label": "Start a conversation ↗"
  },
  "workflows": {
    "kicker": "02 / APM TERMINALS · ENTERPRISE DELIVERY",
    "title": "Less chasing. Clearer approvals.",
    "intro": "IT Support at APM Terminals from January 2025 to January 2026, followed by Application Support Specialist from February to August 2026, within the A.P. Moller–Maersk Group.",
    "sections": [
      {
        "title": "The delivery context",
        "text": "Power Apps workflow solutions across the Apapa, Onne, and Liberia terminals, connecting operational needs across three sites."
      },
      {
        "title": "The workflow areas",
        "items": [
          "Departmental events: request categories, event details, item needs, and manager-to-admin approvals.",
          "Budget cost control: quantities, unit costs, calculated totals, cost centres, and finance review.",
          "Staff provisions and voucher spot awards: structured departmental request requirements and approval ownership."
        ]
      },
      {
        "title": "The technical approach",
        "text": "Microsoft Power Apps and Power Automate with SharePoint as the structured data source. This work connected application support, business requirements, and practical workflow delivery."
      },
      {
        "title": "About the playground",
        "text": "The approval explorer demonstrates these workflow patterns. It is an illustrative example, not a live terminal system or a statement that every planned workflow has been completed."
      }
    ],
    "footer": "Explore the example approval routes. ",
    "link": "#approach",
    "label": "Open the playground ↓"
  },
  "mailcredo": {
    "kicker": "03 / MAILCREDO · ENGINEERING LEADERSHIP",
    "title": "Leadership across a distributed team.",
    "intro": "Chief Technology Officer at Mailcredo from February 2022 to December 2023, leading a 15-person distributed engineering team building email infrastructure SaaS.",
    "sections": [
      {
        "title": "The role",
        "text": "Technical leadership and product delivery across a distributed engineering organisation."
      },
      {
        "title": "The perspective",
        "text": "A product direction only becomes useful when engineering teams can turn it into coordinated work. This role brought team leadership and hands-on technical judgement into the same conversation."
      }
    ],
    "footer": "Discuss technical product leadership. ",
    "link": "mailto:oliversamuel146@gmail.com?subject=Technical%20product%20leadership",
    "label": "Let’s talk ↗"
  },
  "cura": {
    "kicker": "V01 / CURABLY · VENTURE BUILDING",
    "title": "Health intelligence, built for Africa.",
    "intro": "Curably Nigeria Ltd is my B2B health-intelligence infrastructure company for Africa, combining a core platform with a wider product portfolio.",
    "sections": [
      {
        "title": "The product direction",
        "text": "A core platform alongside CuraLyfe, CuraRx, and CuraMama, with a live HMO/NHIA-style integration layer."
      },
      {
        "title": "My role",
        "text": "Founder, connecting product strategy, healthcare infrastructure needs, technical direction, and venture development."
      },
      {
        "title": "Venture development",
        "text": "The fundraising target is a $1 million seed round at a $4 million post-money valuation. I have also engaged with the CoElevate funding process."
      }
    ],
    "footer": "Explore the company. ",
    "link": "https://letscura.com",
    "label": "Visit letscura.com ↗"
  },
  "andora": {
    "kicker": "V02 / ANDORA · AI FINANCIAL CONTROLS",
    "title": "Give agent spending a boundary.",
    "intro": "Andora is an AI agent financial firewall built around spend-capped proxy keys.",
    "sections": [
      {
        "title": "The product idea",
        "text": "Give AI agents access to tools and services with an explicit spending boundary, using proxy keys with configured financial limits."
      },
      {
        "title": "The venture",
        "text": "My work spans product direction, technical thinking, fundraising preparation, and accelerator applications."
      },
      {
        "title": "Fundraising goals",
        "text": "The target is a $500,000 pre-seed round at a $4.5 million pre-money valuation."
      },
      {
        "title": "Applications",
        "text": "Accelerator and funding applications have included Techstars, Alchemist, a16z Speedrun, Google AI Futures Fund, and AI House."
      }
    ],
    "footer": "Discuss Andora or a potential collaboration. ",
    "link": "mailto:oliversamuel146@gmail.com?subject=Andora%20conversation",
    "label": "Start a conversation ↗"
  }
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
  product: ['Find the signal. Shape the product.','A clear problem, a strong direction, and a team ready to build.','#work'],
  automation: ['Make the handoffs flow.','Connect repetitive work, decisions, and the people responsible.','#approach'],
  operations: ['Think in systems. Build in code.','PHP, MySQL, TypeScript, React, Vue, and Docker—from the API to the interface.','#engineering']
};
const fieldTabs = [...document.querySelectorAll('[data-field]')];
function selectField(mode) {
  fieldMode = mode;
  fieldTabs.forEach(b => {const active=b.dataset.field===mode;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
  const [title,description,href]=fieldStories[mode];
  $('field-title').textContent=title;
  $('field-description').textContent=description;
  $('field-link').href=href;
  $('field-link').setAttribute('aria-label',`Explore related ${mode === "operations" ? "engineering" : mode} work`);
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
  $('project-position').textContent = `${String(activeProject+1).padStart(2,'0')} / ${String(projectKeys.length).padStart(2,'0')}`;
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
  engineering: {subject:'Backend engineering project', body:'Hi Samuel,\n\nI would like to discuss an engineering project.\n\nProduct or system:\nAPI, database, or integration needs:\nStack and timeline:\n\nBest,', hint:'Let’s talk APIs, databases, integrations, and the product around them.'},
  product: {subject:'Product leadership conversation', body:'Hi Samuel,\n\nI would like to discuss a product leadership opportunity.\n\nOrganisation:\nRole or challenge:\n\nBest,', hint:'Let’s talk product direction, teams, and delivery.'},
  automation: {subject:'Let’s discuss an automation project', body:'Hi Samuel,\n\nI would like to discuss an automation project.\n\nThe process today:\nWhat we would like to improve:\n\nBest,', hint:'Tell me where work gets stuck. We can start there.'},
  cura: {subject:'Venture collaboration conversation', body:'Hi Samuel,\n\nI would like to discuss a venture or collaboration.\n\nVenture of interest:\nWhat I would like to explore:\n\nBest,', hint:'Let’s discuss Curably, Andora, or a thoughtful collaboration.'}
};
document.querySelectorAll('[data-intent]').forEach(button => button.addEventListener('click', () => {
  const selected = button.getAttribute('aria-pressed') !== 'true';
  document.querySelectorAll('[data-intent]').forEach(b => b.setAttribute('aria-pressed', String(selected && b === button)));
  const intent = intents[button.dataset.intent];
  $('contact-email').href = selected ? `mailto:oliversamuel146@gmail.com?subject=${encodeURIComponent(intent.subject)}&body=${encodeURIComponent(intent.body)}` : 'mailto:oliversamuel146@gmail.com';
  $('contact-hint').textContent = selected ? intent.hint : 'Choose a topic to start a more useful conversation.';
}));
let copyTimeout;
$('copy-email').addEventListener('click', async () => {
  clearTimeout(copyTimeout);
  try {
    if(navigator.clipboard?.writeText) await navigator.clipboard.writeText('oliversamuel146@gmail.com');
    else {
      const input = document.createElement('textarea'); input.value = 'oliversamuel146@gmail.com'; input.setAttribute('readonly',''); input.style.position = 'fixed'; input.style.opacity = '0'; document.body.append(input); input.select();
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
  document.querySelectorAll('.section-heading,.project,.workflow-demo,.principles>div,.about-aside,.about-copy,.contact,.venture-feature,.venture-notes,.career-timeline,.learning-tabs,.code-studio').forEach(el => {el.classList.add('reveal');observer.observe(el);});
}
let scrollFrame = 0;
const sectionIds = ['work','engineering','experience','approach','ventures','about','education','contact'];
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
  let scattered=false,scatterMix=0,boostUntil=0;
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
    const boosting=motionEnabled && time<boostUntil;
    if(motionEnabled&&!dragging)rotation+=dt*(boosting?1.8:.32);
    const scatterGoal=scattered?1:0;
    scatterMix=motionEnabled?scatterMix+(scatterGoal-scatterMix)*.055:scatterGoal;
    const target=keys.indexOf(fieldMode);
    let morphing=Math.abs(scatterMix-scatterGoal)>.002;
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
    glow.addColorStop(0,`rgba(${rgb},${boosting?.22:.12})`);glow.addColorStop(.55,`rgba(${rgb},.02)`);glow.addColorStop(1,`rgba(${rgb},0)`);
    ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    const sx=Math.sin(tilt),cx=Math.cos(tilt),sy=Math.sin(rotation),cy=Math.cos(rotation);
    const scale=Math.min(w,h)*(.166-.027*scatterMix);
    const projected=points.map(point=>{
      const p=[0,1,2].map(axis=>point.shapes.reduce((sum,shape,k)=>sum+shape[axis]*weights[k],0)+Math.sin(point.i*1.71+axis*2.3)*scatterMix*1.65);
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
    ctx.strokeStyle=`rgba(${rgb},${boosting?.34:.2})`;ctx.lineWidth=.55;ctx.stroke();
    projected.sort((a,b)=>b.z-a.z).forEach(p=>{
      const depth=Math.max(.12,Math.min(1,1-(p.z+2.6)/5.2));
      const radius=.7+depth*(boosting?1.7:1.25);
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
  $('field-scatter').addEventListener('click',()=>{
    scattered=!scattered;
    $('field-scatter').setAttribute('aria-pressed',String(scattered));
    $('field-scatter').innerHTML=scattered?'<span aria-hidden="true">⤡</span> Reassemble':'<span aria-hidden="true">⤢</span> Scatter particles';
    document.querySelector('.hero-art').classList.toggle('is-scattered',scattered);requestDraw();
  });
  $('field-boost').addEventListener('click',()=>{
    boostUntil=performance.now()+1800;
    if(motionEnabled){
      const art=document.querySelector('.hero-art');
      art.classList.remove('is-boosting');void art.offsetWidth;art.classList.add('is-boosting');
    }
    requestDraw();
  });
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

// Career filters keep the full timeline available without forcing every visitor through every role.
const roleFilters=[...document.querySelectorAll('[data-role-filter]')];
roleFilters.forEach(button=>button.addEventListener('click',()=>{
  roleFilters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  let count=0;
  document.querySelectorAll('[data-role]').forEach(role=>{
    const visible=button.dataset.roleFilter==='all'||role.dataset.role===button.dataset.roleFilter;
    role.hidden=!visible;if(visible)count++;
  });
  $('career-count').textContent=`${count} role${count===1?'':'s'}`;
}));
const learningTabs=[...document.querySelectorAll('[data-learning]')];
function selectLearning(key){
 learningTabs.forEach(tab=>{const active=tab.dataset.learning===key;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
 document.querySelectorAll('.learning-panel').forEach(panel=>{panel.hidden=panel.id!==`panel-${key}`;});
 animateContent($(`panel-${key}`));
}
learningTabs.forEach((tab,i)=>{
 tab.addEventListener('click',()=>selectLearning(tab.dataset.learning));
 tab.addEventListener('keydown',e=>{
  let next;if(e.key==='ArrowRight')next=(i+1)%learningTabs.length;else if(e.key==='ArrowLeft')next=(i+learningTabs.length-1)%learningTabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=learningTabs.length-1;else return;
  e.preventDefault();selectLearning(learningTabs[next].dataset.learning);learningTabs[next].focus();
 });
});

const mobileNavigation=$('mobile-navigation');
mobileNavigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNavigation.open=false;}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileNavigation.open){mobileNavigation.open=false;mobileNavigation.querySelector('summary').focus();}});
document.addEventListener('click',event=>{if(mobileNavigation.open&&!mobileNavigation.contains(event.target))mobileNavigation.open=false;});

// Code studio: illustrative source, animated line reveals, and a local API demonstration.
(function engineeringStudio(){
  const examples = {
    php: {
      file: 'api/projects.php',
      caption: 'A PHP endpoint with a prepared query, a category filter, and a JSON response.',
      code: `<?php
// $db is a configured PDO connection.
$category = filter_input(INPUT_GET, 'category') ?? 'all';
$sql = 'SELECT id, title, category FROM projects';
$filter = $category === 'all' ? [] : [$category];

$query = $db->prepare(
    $sql . ($filter ? ' WHERE category = ?' : '')
);
$query->execute($filter);

header('Content-Type: application/json');
echo json_encode([
    'data' => $query->fetchAll(PDO::FETCH_ASSOC)
]);`
    },
    react: {
      file: 'components/Projects.tsx',
      caption: 'React with TypeScript: typed data, a category prop, and request cleanup.',
      code: `import { useEffect, useState } from 'react';
type Project = { id: number; title: string; category: string };

export function Projects({ category }: { category: string }) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/projects?category=' + encodeURIComponent(category), {
      signal: controller.signal
    })
      .then(response => response.json())
      .then(({ data }) => setProjects(data))
      .catch(error => {
        if (error.name !== 'AbortError') console.error(error);
      });
    return () => controller.abort();
  }, [category]);

  return <ul>{projects.map(project => (
    <li key={project.id}>{project.title}</li>
  ))}</ul>;
}`
    },
    vue: {
      file: 'components/Projects.vue',
      caption: 'Vue and TypeScript: reactive props, a request, and a small template.',
      code: `<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const props = defineProps<{ category: string }>();
const projects = ref<{ id: number; title: string }[]>([]);

watchEffect(async (onCleanup) => {
  const category = props.category;
  const controller = new AbortController();
  onCleanup(() => controller.abort());
  try {
    const response = await fetch(
      '/api/projects?category=' + encodeURIComponent(category),
      { signal: controller.signal }
    );
    projects.value = (await response.json()).data;
  } catch (error) {
    if (!controller.signal.aborted) console.error(error);
  }
});
</script>
<template>
  <li v-for="project in projects" :key="project.id">
    {{ project.title }}
  </li>
</template>`
    },
    mysql: {
      file: 'database/projects.sql',
      caption: 'A small relational schema with a category index and a focused query.',
      code: `CREATE TABLE projects (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(160) NOT NULL,
  category VARCHAR(32) NOT NULL,
  INDEX idx_category (category)
);

INSERT INTO projects (title, category) VALUES
  ('Waya AI automation', 'ai'),
  ('APM terminal workflows', 'enterprise'),
  ('Mailcredo email infrastructure', 'saas');

SELECT id, title, category
FROM projects
WHERE category = 'ai';`
    },
    docker: {
      file: 'Dockerfile',
      caption: 'A PHP container with the MySQL driver. Database settings are supplied at runtime.',
      code: `FROM php:8.3-apache

# Install the PDO driver used by the API.
RUN docker-php-ext-install pdo_mysql

WORKDIR /var/www/html
COPY ./api ./api
EXPOSE 80

# Build the API image.
# docker build -t portfolio-api .

# Supply database settings at runtime.
# docker run --rm -p 8080:80 \\
#   --env-file .env portfolio-api`
    }
  };
  const codeTabs = [...document.querySelectorAll('[data-code]')];
  const lines = $('code-lines');
  const editor = $('code-panel');
  let currentCode = 'php';
  function highlight(source) {
    const fragment = document.createDocumentFragment();
    const pattern = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/[^\n]*|#[^\n]*|<\?php|\$[A-Za-z_]\w*|\b(?:const|let|function|return|import|from|export|type|useEffect|useState|watchEffect|ref|async|await|try|catch|if|echo|header|CREATE|TABLE|SELECT|FROM|WHERE|INSERT|INTO|VALUES|INDEX|PRIMARY|KEY|NOT|NULL|AUTO_INCREMENT|BIGINT|UNSIGNED|VARCHAR|RUN|WORKDIR|COPY|EXPOSE)\b|\b\d+\b)/g;
    let cursor = 0;
    for(const match of source.matchAll(pattern)) {
      fragment.append(document.createTextNode(source.slice(cursor, match.index)));
      const token = document.createElement('span');
      const value = match[0];
      token.className = value.startsWith('//') || value.startsWith('#') ? 'code-comment' : /^['"]/.test(value) ? 'code-string' : value.startsWith('$') ? 'code-variable' : /^\d/.test(value) ? 'code-number' : 'code-keyword';
      token.textContent = value; fragment.append(token); cursor = match.index + value.length;
    }
    fragment.append(document.createTextNode(source.slice(cursor)));
    return fragment;
  }
  function replayCode() {
    editor.classList.remove('is-replaying');
    editor.getAnimations({subtree:true}).forEach(animation => animation.cancel());
    if(!motionEnabled) return;
    // Restart only the finite line reveal; there is no continuously running typing loop.
    void editor.offsetWidth;
    editor.classList.add('is-replaying');
  }
  function selectCode(key, animate = true) {
    currentCode = key;
    const example = examples[key];
    codeTabs.forEach(tab => {const active = tab.dataset.code === key;tab.setAttribute('aria-selected', String(active));tab.tabIndex=active?0:-1;});
    editor.setAttribute('aria-labelledby', `code-${key}`);
    $('code-filename').textContent = example.file;
    $('code-caption').textContent = example.caption;
    lines.replaceChildren();
    example.code.split('\n').forEach((source,i) => {
      const row = document.createElement('li');
      row.style.setProperty('--line-index', i);
      const code = document.createElement('code');
      code.append(highlight(source || ' ')); row.append(code);lines.append(row);
    });
    document.querySelector('.code-scroll').scrollTop = 0;
    document.querySelector('.code-scroll').scrollLeft = 0;
    if(animate) replayCode();
  }
  codeTabs.forEach((tab,i) => {
    tab.addEventListener('click', () => selectCode(tab.dataset.code));
    tab.addEventListener('keydown', event => {
      let next;
      if(event.key==='ArrowRight')next=(i+1)%codeTabs.length;
      else if(event.key==='ArrowLeft')next=(i+codeTabs.length-1)%codeTabs.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=codeTabs.length-1;
      else return;
      event.preventDefault();selectCode(codeTabs[next].dataset.code);codeTabs[next].focus();
    });
  });
  $('code-replay').addEventListener('click',replayCode);
  selectCode(currentCode,false);
  if('IntersectionObserver' in window) {
    const codeObserver = new IntersectionObserver(entries => {
      if(entries.some(entry=>entry.isIntersecting)) {replayCode();codeObserver.disconnect();}
    },{threshold:.15});
    codeObserver.observe(editor);
  }

  const sampleProjects = [
    {id:1,title:'Waya AI automation',category:'ai'},
    {id:2,title:'APM terminal workflows',category:'enterprise'},
    {id:3,title:'Mailcredo email infrastructure',category:'saas'}
  ];
  const category = $('api-category');
  const run = $('api-run');
  const pipeline = [...document.querySelectorAll('[data-pipeline]')];
  let requestTimers = [];
  let running = false;
  function clearRequestTimers(){requestTimers.forEach(clearTimeout);requestTimers=[];}
  function setPipeline(stage,complete=false) {
    pipeline.forEach((node,i)=>{
      node.classList.toggle('is-active',!complete && i===stage);
      node.classList.toggle('is-complete',complete || i<stage);
      if(!complete && i===stage) node.setAttribute('aria-current','step');else node.removeAttribute('aria-current');
    });
  }
  function finishRequest() {
    clearRequestTimers();running=false;run.disabled=false;
    const records = sampleProjects.filter(project=>category.value==='all'||project.category===category.value);
    $('api-response').textContent = JSON.stringify({data:records},null,2);
    $('api-response-meta').textContent = `${records.length} record${records.length===1?'':'s'}`;
    $('api-state').textContent = '200 OK';
    $('api-state').classList.add('is-success');
    $('api-response').setAttribute('aria-busy','false');
    setPipeline(3,true);run.innerHTML='Run again <span aria-hidden="true">↻</span>';
    animateContent($('api-response'));
  }
  function resetRequest() {
    clearRequestTimers();running=false;run.disabled=false;setPipeline(-1);
    $('api-route').textContent='/api/projects'+(category.value==='all'?'':`?category=${category.value}`);
    $('api-state').textContent='Ready to run';$('api-state').classList.remove('is-success');
    $('api-response-meta').textContent='Awaiting request';
    $('api-response').textContent=JSON.stringify({message:'Run the request to explore this category.'},null,2);
    $('api-response').setAttribute('aria-busy','false');run.innerHTML='Run request <span aria-hidden="true">↗</span>';
  }
  category.addEventListener('change',resetRequest);
  run.addEventListener('click',()=>{
    clearRequestTimers();running=true;run.disabled=true;
    $('api-state').classList.remove('is-success');
    $('api-response').setAttribute('aria-busy','true');
    run.innerHTML='Following request <span aria-hidden="true">↗</span>';
    const states=['Client request','API reads filter','Querying sample data','Serialising JSON'];
    if(!motionEnabled){finishRequest();return;}
    states.forEach((state,i)=>{
      const step=()=>{setPipeline(i);$('api-state').textContent=state;};
      if(i===0)step();else requestTimers.push(setTimeout(step,i*380));
    });
    requestTimers.push(setTimeout(finishRequest,1520));
  });
  window.addEventListener('portfolio:motion',()=>{if(!motionEnabled){editor.classList.remove('is-replaying');if(running)finishRequest();}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&running)finishRequest();});
})();

// An expressive motion layer. Ambient effects stop outside the viewport.
(function portfolioMotion(){
  const ambient = [...document.querySelectorAll('.hero,.expertise-band,.stack-band,.project,.venture-feature,.profile-tile,.code-studio,.workflow-demo,.contact')];
  if('IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('has-ambient',entry.isIntersecting)),{rootMargin:'80px',threshold:0});
    ambient.forEach(element=>observer.observe(element));
  } else ambient.forEach(element=>element.classList.add('has-ambient'));

  // Preserve normal heading text and reading order while animating each word.
  document.querySelectorAll('.section-heading h2').forEach(heading=>{
    let index=0;
    function wrapWords(parent){
      [...parent.childNodes].forEach(node=>{
        if(node.nodeType===Node.TEXT_NODE){
          const fragment=document.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach(word=>{
            if(!word.trim()){fragment.append(document.createTextNode(word));return;}
            const span=document.createElement('span');span.className='heading-word';span.style.setProperty('--word-index',index++);span.textContent=word;fragment.append(span);
          });
          node.replaceWith(fragment);
        } else if(node.nodeType===Node.ELEMENT_NODE && node.tagName!=='BR')wrapWords(node);
      });
    }
    wrapWords(heading);
  });

  const countJobs=new Map();
  function finishCount(element){
    cancelAnimationFrame(countJobs.get(element));countJobs.delete(element);
    element.textContent=element.dataset.count+(element.dataset.suffix||'');
  }
  function countUp(element){
    if(!motionEnabled){finishCount(element);return;}
    const target=Number(element.dataset.count),started=performance.now();
    const step=now=>{
      if(!motionEnabled){finishCount(element);return;}
      const progress=Math.min((now-started)/1150,1),eased=1-Math.pow(1-progress,3);
      element.textContent=Math.round(target*eased)+(element.dataset.suffix||'');
      if(progress<1)countJobs.set(element,requestAnimationFrame(step));else finishCount(element);
    };
    countJobs.set(element,requestAnimationFrame(step));
  }
  if('IntersectionObserver' in window){
    const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){counterObserver.unobserve(entry.target);countUp(entry.target);}}),{threshold:.8});
    document.querySelectorAll('[data-count]').forEach(element=>counterObserver.observe(element));
  }
  window.addEventListener('portfolio:motion',()=>{if(!motionEnabled)[...countJobs.keys()].forEach(finishCount);});

  document.querySelectorAll('[data-jump-code]').forEach(link=>link.addEventListener('click',()=>{
    document.querySelector(`[data-code="${link.dataset.jumpCode}"]`)?.click();
  }));

  const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
  if(!finePointer.matches)return;
  const surfaces=[...document.querySelectorAll('.project,.venture-feature,.education-card,.certification-grid>article,.profile-tile')];
  surfaces.forEach(surface=>{
    surface.classList.add('interactive-surface');
    let frame=0;
    surface.addEventListener('pointermove',event=>{
      if(!motionEnabled)return;
      const bounds=surface.getBoundingClientRect();
      const x=(event.clientX-bounds.left)/bounds.width,y=(event.clientY-bounds.top)/bounds.height;
      cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{
        surface.classList.add('is-pointer');surface.style.setProperty('--tilt-x',`${(y-.5)*-4}deg`);surface.style.setProperty('--tilt-y',`${(x-.5)*5}deg`);
        surface.style.setProperty('--pointer-x',`${x*100}%`);surface.style.setProperty('--pointer-y',`${y*100}%`);
      });
    });
    surface.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);surface.classList.remove('is-pointer');surface.style.setProperty('--tilt-x','0deg');surface.style.setProperty('--tilt-y','0deg');});
  });
  document.querySelectorAll('.magnetic').forEach(button=>{
    let frame=0;
    button.addEventListener('pointermove',event=>{
      if(!motionEnabled)return;const box=button.getBoundingClientRect();
      const x=(event.clientX-box.left-box.width/2)*.11,y=(event.clientY-box.top-box.height/2)*.16;
      cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{button.style.setProperty('--magnet-x',`${x}px`);button.style.setProperty('--magnet-y',`${y}px`);});
    });
    button.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);button.style.setProperty('--magnet-x','0px');button.style.setProperty('--magnet-y','0px');});
  });
  const aura=document.querySelector('.cursor-aura');
  let auraFrame=0;
  document.addEventListener('pointermove',event=>{
    if(!motionEnabled)return;
    const interactive=Boolean(event.target.closest('a,button,summary,select,canvas'));
    cancelAnimationFrame(auraFrame);
    auraFrame=requestAnimationFrame(()=>{
      const size=interactive?55:34;
      aura.classList.add('is-visible');aura.classList.toggle('is-hovering',interactive);
      aura.style.transform=`translate(${event.clientX-size/2}px,${event.clientY-size/2}px)`;
    });
  },{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>aura.classList.remove('is-visible'));
  window.addEventListener('portfolio:motion',()=>{if(!motionEnabled){cancelAnimationFrame(auraFrame);aura.classList.remove('is-visible');surfaces.forEach(surface=>surface.classList.remove('is-pointer'));}});
})();
