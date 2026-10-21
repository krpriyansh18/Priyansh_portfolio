import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Layers3, Database, Sparkles, Play, ExternalLink, MapPin, Download, Terminal, Video, Users, GraduationCap } from 'lucide-react';
import './styles.css';

const skills = [
  { title: 'Frontend', icon: Code2, items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'] },
  { title: 'Programming', icon: Terminal, items: ['Python', 'C', 'Java', 'Problem Solving', 'DSA'] },
  { title: 'Data & Tools', icon: Database, items: ['SQL', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'] },
  { title: 'Beyond code', icon: Layers3, items: ['Video Editing', 'Teamwork', 'Leadership', 'Communication'] },
];
const projects = [
  { n:'01', name:'Personal Portfolio', type:'FRONTEND DEVELOPMENT', desc:'A responsive personal portfolio built to showcase projects, technical skills, and a developer journey with clean navigation across devices.', stack:['React','JavaScript','CSS'], icon:Code2, color:'lime', url:'https://github.com/' },
  { n:'02', name:'School Website', type:'WEB DESIGN · RESPONSIVE UI', desc:'A responsive school website featuring Home, About, Contact, and Admissions pages, designed for a consistent experience across screen sizes.', stack:['HTML','CSS','Bootstrap'], icon:GraduationCap, color:'violet', url:'https://github.com/' },
];
const reveal = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}} };
function App(){
  const [menuOpen,setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const go = (id) => { setMenuOpen(false); document.querySelector(id)?.scrollIntoView({behavior: reduceMotion ? 'auto':'smooth'}); };
  return <div className="site-shell">
    <div className="grain" aria-hidden="true"/>
    <header className="topbar">
      <a href="#home" className="brand" onClick={e=>{e.preventDefault();go('#home')}}><span className="brand-mark">KP<span>.</span></span><span className="brand-label">KUMAR PRIYANSH</span></a>
      <nav className={menuOpen?'nav nav-open':'nav'}>
        {['About','Skills','Projects','Journey'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={e=>{e.preventDefault();go('#'+x.toLowerCase())}}>{x}</a>)}
        <a className="nav-contact" href="#contact" onClick={e=>{e.preventDefault();go('#contact')}}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} transition={{duration:.6}}><span className="status-dot"/> OPEN TO OPPORTUNITIES <span className="eyebrow-line"/></motion.div>
          <motion.h1 initial="hidden" animate="show" variants={{hidden:{},show:{transition:{staggerChildren:.11}}}}>
            <motion.span variants={reveal}>Building</motion.span><motion.span className="headline-second" variants={reveal}>digital <em>things.</em></motion.span>
          </motion.h1>
          <motion.p className="hero-description" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.5,duration:.65}}>I’m <strong>Kumar Priyansh</strong> — a Computer Science Engineering student who enjoys turning ideas into thoughtful, responsive web experiences.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.7}}><a className="button button-primary" href="#projects" onClick={e=>{e.preventDefault();go('#projects')}}>Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="#contact" onClick={e=>{e.preventDefault();go('#contact')}}>Get in touch <ArrowUpRight size={15}/></a></motion.div>
          <motion.div className="hero-meta" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.95}}><span><MapPin size={14}/> Bhagalpur, India</span><span className="meta-divider"/><span>CS UNDERGRADUATE</span></motion.div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.92,rotate:2}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1,ease:[.22,1,.36,1],delay:.2}}>
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="art-glow"/>
          <div className="code-card">
            <div className="code-card-top"><div className="window-dots"><i/><i/><i/></div><span>developer.js</span><span className="code-live">● LIVE</span></div>
            <div className="code-content"><div><span className="ln">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div><div><span className="ln">02</span> &nbsp; name: <span className="code-green">'Priyansh'</span>,</div><div><span className="ln">03</span> &nbsp; focus: <span className="code-green">'Frontend'</span>,</div><div><span className="ln">04</span> &nbsp; curious: <span className="code-orange">true</span>,</div><div><span className="ln">05</span> &nbsp; learning: <span className="code-green">'always'</span></div><div><span className="ln">06</span> {'}'}</div><div className="code-bottom"><span className="code-purple">return</span> <span className="code-blue">buildSomethingGood</span>();<span className="cursor">▍</span></div></div>
          </div>
          <div className="floating-tag tag-react"><span className="react-symbol">✳</span> React</div><div className="floating-tag tag-js"><span>JS</span> JavaScript</div>
          <div className="art-caption"><Sparkles size={14}/> CURIOSITY → CREATION</div>
        </motion.div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"><i/></div><span className="hero-index">01 / 04</span></div>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.3}}><span className="section-kicker">01 — A LITTLE ABOUT ME</span><h2>Curious mind.<br/><em>Builder’s mindset.</em></h2></motion.div>
        <motion.div className="about-body" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}}>
          <p className="about-lead">I like making the web feel <span>clear, useful, and human.</span></p>
          <p>As a B.Tech Computer Science Engineering student at Haldia Institute of Technology, I’m building a strong foundation in frontend development, programming, databases, and data structures. I enjoy learning by building — from responsive websites to sharpening my problem-solving skills.</p>
          <div className="about-facts"><div><span className="fact-number">8.1<span>/10</span></span><span className="fact-label">CURRENT CGPA</span></div><div><span className="fact-number">02<span>+</span></span><span className="fact-label">WEB PROJECTS</span></div><div><span className="fact-number">∞</span><span className="fact-label">THINGS TO LEARN</span></div></div>
        </motion.div>
      </section>

      <section className="skills section-wrap section-pad" id="skills">
        <div className="section-heading"><span className="section-kicker">02 — MY TOOLKIT</span><h2>Tools I use to<br/><em>bring ideas to life.</em></h2><p className="section-sub">A growing toolkit, built through practice and curiosity.</p></div>
        <div className="skill-grid">{skills.map((s,i)=><motion.article className="skill-card" key={s.title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} transition={{delay:i*.08}}><div className="skill-card-head"><span className="skill-icon"><s.icon size={19}/></span><span className="skill-num">0{i+1}</span></div><h3>{s.title}</h3><div className="skill-tags">{s.items.map(item=><span key={item}>{item}</span>)}</div></motion.article>)}</div>
      </section>

      <section className="projects section-wrap section-pad" id="projects">
        <div className="projects-title"><div className="section-heading"><span className="section-kicker">03 — SELECTED WORK</span><h2>Made with intent.<br/><em>Built to work.</em></h2></div><span className="project-count">[ 02 PROJECTS ]</span></div>
        <div className="project-list">{projects.map((p,i)=><motion.article className={'project-card '+p.color} key={p.n} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}}>
          <div className="project-info"><div className="project-topline"><span>{p.n} / CASE STUDY</span><span>{p.type}</span></div><h3>{p.name}</h3><p>{p.desc}</p><div className="project-stack">{p.stack.map(t=><span key={t}>{t}</span>)}</div><a href={p.url} target="_blank" rel="noreferrer" className="project-link">Explore project <ArrowUpRight size={16}/></a></div>
          <div className="project-visual"><div className="visual-backdrop"/><div className="browser-mock"><div className="browser-bar"><i/><i/><i/><span>preview / {i===0?'portfolio':'school-site'}</span></div><div className="browser-screen">{i===0?<><div className="mock-nav"><b>KP<span>.</span></b><div/><div/><div/></div><div className="mock-hero"><small>HELLO, I'M PRIYANSH</small><strong>Designing<br/>with purpose<span>.</span></strong><div className="mock-button"/></div><div className="mock-orb"/></>:<><div className="school-top">H<span>✦</span> HORIZON SCHOOL</div><div className="school-hero"><small>LEARN · GROW · LEAD</small><b>Where bright<br/>futures begin.</b><span/></div><div className="school-cards"><i/><i/><i/></div></>}</div></div><div className="visual-index">{p.n}<span>—</span>0{i+1}</div></div>
        </motion.article>)}</div>
      </section>

      <section className="journey section-wrap section-pad" id="journey">
        <div className="section-heading"><span className="section-kicker">04 — THE JOURNEY SO FAR</span><h2>Learning, leading,<br/><em>moving forward.</em></h2></div>
        <div className="timeline">
          <motion.div className="timeline-item" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><div className="timeline-marker"/><div className="timeline-date">EDUCATION</div><div className="timeline-content"><h3>B.Tech — Computer Science Engineering</h3><span>Haldia Institute of Technology</span><p>Building a foundation in computer science, programming, and web development.</p><div className="timeline-badge">CGPA · 8.1 / 10</div></div></motion.div>
          <motion.div className="timeline-item" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><div className="timeline-marker"/><div className="timeline-date">COMMUNITY & LEADERSHIP</div><div className="timeline-content"><h3>ISTE & Team NEEDS</h3><span>Organizational experience</span><p>Contributed to events, volunteer coordination, public engagement, and community initiatives; also supported organizational content as a video editor.</p></div></motion.div>
          <motion.div className="timeline-item" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><div className="timeline-marker"/><div className="timeline-date">CERTIFICATION</div><div className="timeline-content"><h3>Python Certification</h3><span>Udemy</span><p>Continuing to grow practical programming skills through structured learning and hands-on practice.</p></div></motion.div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-glow"/>
        <div className="contact-inner"><span className="section-kicker">HAVE A PROJECT IN MIND?</span><h2>Let’s make<br/><em>something matter.</em></h2><p>Open to opportunities, collaborations, and conversations about building good things.</p><a className="button button-primary contact-button" href="mailto:kumarpriyansh1807@gmail.com">Say hello <ArrowUpRight size={17}/></a><div className="contact-email"><Mail size={15}/> kumarpriyansh1807@gmail.com</div></div>
      </section>
    </main>
    <footer className="footer section-wrap"><a href="#home" className="brand" onClick={e=>{e.preventDefault();go('#home')}}><span className="brand-mark">KP<span>.</span></span></a><span>DESIGNED & BUILT BY KUMAR PRIYANSH</span><div className="socials"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="mailto:kumarpriyansh1807@gmail.com" aria-label="Email"><Mail size={17}/></a></div><span className="copyright">© 2026</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);