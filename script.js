/* ══════════════════════════════════════
   LUCCA ROMANO — PORTFOLIO
   script.js
   Bilingual PT/EN, animations, menu, WhatsApp
══════════════════════════════════════ */

/* ── i18n Translations ── */
const translations = {
  pt: {
    nav_home:      'Início',
    nav_about:     'Sobre mim',
    nav_events:    'Eventos',
    nav_projects:  'Projetos',
    nav_contact:   'Contato',
    status_available: 'Disponível',
    home_greeting: 'Olá, eu sou',
    btn_see_content:   'Ver conteúdo',
    btn_download_cv:   'Baixar currículo',
    btn_view_cv:       'Visualizar currículo',
    scroll_down: 'scroll',
    about_label: '01 — Sobre mim',
    about_title: 'Quem sou eu',
    about_p1: 'Sou desenvolvedor Front-End com experiência em aplicações web modernas, responsivas e escaláveis, utilizando JavaScript, TypeScript, Angular, React, HTML e CSS.',
    about_p2: 'Sou estudante de Desenvolvimento de Sistemas no SENAI CIMATEC, participando de iniciativas voltadas à tecnologia e empreendedorismo. Também curso Engenharia de Software na UCSAL, aprofundando conhecimentos em boas práticas e arquitetura de sistemas.',
    about_p3: 'Participo de hackathons e desenvolvo projetos com foco em impacto social e tecnológico, incluindo soluções com inteligência artificial e plataformas digitais.',
    about_p4: 'Busco evoluir continuamente e usar a tecnologia para criar soluções inovadoras, acessíveis e eficientes.',
    about_skills_title: 'Tecnologias',
    stat_events:   'Eventos',
    stat_projects: 'Projetos',
    stat_awards:   'Premiado',
    events_label: '02 — Eventos e Competições',
    events_title: 'Onde estive',
    badge_participation: 'Participação',
    badge_top10:  'Top 10',
    badge_1st:    '🥇 1° Lugar',
    badge_3rd:    '🥉 3° Lugar',
    badge_3rd2:   '🥉 3° Lugar',
    badge_3rd3:   '🥉 3° Lugar',
    badge_silver: '🥈 2° Lugar',
    badge_2nd:    '🥈 2° Lugar',
    badge_ambassador: 'Embaixador',
    badge_1st_natl: '🥇 1° Lugar Nacional',
    badge_2nd2: '🥈 2° Lugar',
    badge_3rd4: '🥉 3° Lugar',
    badge_recognition: '🏅 Reconhecimento',
    ev9_highlight: '🏆 +27 mil participantes de todo o Brasil',
    ev9_title: 'GrandPrix Nacional',
    ev9_desc: 'Conquistamos o 1º lugar no GrandPrix Nacional, competição que reuniu mais de 27 mil participantes de todos os estados do Brasil. Uma das maiores conquistas da equipe CtrlSec até hoje, resultado de meses de dedicação em ideação, desenvolvimento e apresentação da solução.',
    ev10_title: 'Ideias Raras — São Paulo',
    ev10_desc: 'Conquistei o 2º lugar no Hackathon Ideias Raras, em São Paulo, um dos grandes hubs de inovação do país, com foco em soluções para encontrar o paciente raro no SUS. Um pódio que reforça nosso compromisso em usar tecnologia para acelerar o diagnóstico de doenças raras.',
    ev11_title: 'Hackathon + Mineração',
    ev11_desc: 'Conquistei o 3º lugar no Hackathon + Mineração, promovido pela CBPM e MinexHub, desenvolvendo uma solução voltada aos desafios do setor mineral. Mais uma competição que mostra a versatilidade da equipe em propor tecnologia para diferentes setores da economia.',
    ev12_title: 'Aluno Destaque CIMATEC — 2026',
    ev12_desc: 'Recebi o reconhecimento de Aluno Destaque CIMATEC 2026, concedido durante um evento institucional do SENAI CIMATEC pela participação ativa em iniciativas de inovação, tecnologia e empreendedorismo.',
    ev1_title: 'Hackathon Harvard HSIL',
    ev1_desc:  'Participei do Hackathon Harvard HSIL, em São Paulo, focado em inovação em saúde. Desenvolvemos o CapCure, uma solução que transforma o monitoramento neurológico infantil em um jogo interativo, utilizando IA e estímulos sensoriais do celular para analisar respostas da criança. A proposta é realizar esse acompanhamento de forma natural e não invasiva, sem necessidade de ambiente hospitalar.',
    ev2_title: 'NASA Space Apps',
    ev2_desc:  'Participei do NASA Space Apps Challenge de forma individual, alcançando o Top 10 regional. Desenvolvi o GreenOrbit, um jogo educacional que utiliza dados reais de satélites para simular cenários agrícolas. A proposta é transformar informações complexas em uma experiência acessível, ajudando agricultores a tomarem decisões mais sustentáveis.',
    ev3_title: 'GrandPrix Google',
    ev3_desc:  'Participei do Grand Prix do Google, conquistando o 1º lugar com o projeto ALLY, voltado para segurança e autonomia de pessoas em situação de vulnerabilidade. A solução permite acompanhamento em tempo real, com interface simples e acessível. O objetivo é oferecer uma tecnologia de baixo custo que reduza riscos e promova mais independência.',
    ev4_title: 'Hackathon e-agro',
    ev4_desc:  'Participei do Hackathon E-Agro, conquistando o 3º lugar com minha equipe ao desenvolver uma solução para desafios do agronegócio. Criamos o Alforje, uma plataforma que organiza compras coletivas entre produtores rurais, permitindo reduzir custos, melhorar negociações e otimizar a logística.',
    ev5_title: 'GrandPrix Index',
    ev5_desc:  'Participei do GranPrix Index, promovido pelo SENAI, conquistando o 3º lugar com uma solução voltada à sustentabilidade no setor alimentício. Desenvolvemos uma plataforma web que conecta clientes e restaurantes, coletando dados em tempo real sobre consumo e desperdício.',
    ev6_title: 'Hackathon MiningHub',
    ev6_desc:  'Participei do Hackathon da Exposibram, conquistando o 3º lugar com uma solução para o setor mineral. Criamos o GeoTrust Market, uma plataforma que integra dados geológicos e os transforma em informações confiáveis para investidores, pesquisadores e órgãos públicos.',
    ev7_title: 'Ideathon',
    ev7_desc:  'Participei do Ideathon, conquistando o 2º lugar com uma solução voltada à segurança da informação corporativa. O projeto utiliza criptografia e inteligência artificial para analisar, em tempo real, o uso de dados em chatbots, identificando riscos e prevenindo vazamentos.',
    ev8_title: 'Embaixador Júnior CIMATEC',
    ev8_desc:  'Atuo como Embaixador Júnior de Inovação no SENAI CIMATEC, incentivando a participação de estudantes em projetos e competições. Apoio equipes em ideação e desenvolvimento, compartilho experiências e contribuo na divulgação de oportunidades.',
    projects_label: '03 — Projetos',
    projects_title: 'O que construí',
    proj1_desc: 'Plataforma de compras coletivas para produtores rurais, reduzindo custos e otimizando logística. Funciona em regiões com baixa conectividade.',
    proj2_desc: 'Aplicativo de segurança e autonomia para pessoas em situação de vulnerabilidade, com acompanhamento em tempo real e interface acessível.',
    proj3_desc: 'Plataforma de segurança da informação com criptografia e IA para análise em tempo real do uso de dados em chatbots, prevenindo vazamentos.',
    proj4_desc: 'Jogo educacional que utiliza dados reais de satélites da NASA para simular cenários agrícolas e promover decisões sustentáveis.',
    proj5_desc: 'Dashboard de gestão de energia com IA preditiva, Digital Twin e monitoramento em tempo real para indústrias e empresas.',
    proj6_desc: 'Sistema de segurança com óculos inteligentes, autenticação Zero Trust e AES-256, com assistente IA integrado para acesso seguro.',
    proj7_desc: 'Solução que transforma o monitoramento neurológico infantil em um jogo interativo, com IA e estímulos sensoriais para análise não invasiva.',
    proj8_desc: 'Software integrado ao ambiente do SUS que organiza uma fila de alertas de suspeita, cruzando sintomas e histórico clínico para apontar possíveis doenças raras. Cada alerta traz relevância e compatibilidade, apoiando profissionais de saúde a investigar e encaminhar casos mais rápido — sem substituir o diagnóstico médico.',
    proj9_desc: 'Aplicativo mobile que traduz o Cadastro Ambiental Rural (CAR) e a legislação de licenciamento em linguagem simples para o produtor rural. Mostra a situação da propriedade, a área de Reserva Legal e dicas práticas para manter a regularização em dia, com apoio de um assistente virtual e integração com WhatsApp.',
    proj10_desc: 'Plataforma mobile de inteligência climática para agricultores do semiárido, reunindo previsão do tempo e dados da propriedade para apoiar decisões no dia a dia da roça. A proposta é ajudar o produtor a se antecipar a riscos climáticos e planejar o plantio com mais segurança.',
    contact_label: '04 — Contato',
    contact_title: 'Entre em contato',
    contact_intro: 'Tem um projeto em mente? Vamos conversar e transformar sua ideia em realidade.',
    form_name:    'Nome',
    form_name_ph: 'Seu nome',
    form_message: 'Mensagem',
    form_msg_ph:  'Sua mensagem...',
    form_send:    'Enviar pelo WhatsApp',
    footer_quote: '"A tecnologia move o mundo, mas a inovação transforma a vida."',
    footer_rights: 'Todos os direitos reservados.',
    typed_words: ['Software Engineer', 'Front-End Developer', 'Inovador', 'Hackathon Builder'],
  },
  en: {
    nav_home:      'Home',
    nav_about:     'About me',
    nav_events:    'Events',
    nav_projects:  'Projects',
    nav_contact:   'Contact',
    status_available: 'Available',
    home_greeting: 'Hello, I am',
    btn_see_content:   'See my work',
    btn_download_cv:   'Download resume',
    btn_view_cv:       'View resume',
    scroll_down: 'scroll',
    about_label: '01 — About me',
    about_title: 'Who I am',
    about_p1: 'I am a Front-End developer with experience building modern, responsive, and scalable web applications using JavaScript, TypeScript, Angular, React, HTML, and CSS.',
    about_p2: 'I study Systems Development at SENAI CIMATEC, participating in technology and entrepreneurship initiatives. I also study Software Engineering at UCSAL, deepening knowledge in best practices and system architecture.',
    about_p3: 'I take part in hackathons and build projects focused on social and technological impact, including AI-driven solutions and digital platforms.',
    about_p4: 'I am constantly evolving and using technology to create innovative, accessible, and efficient solutions.',
    about_skills_title: 'Technologies',
    stat_events:   'Events',
    stat_projects: 'Projects',
    stat_awards:   'Awarded',
    events_label: '02 — Events & Competitions',
    events_title: 'Where I\'ve been',
    badge_participation: 'Participant',
    badge_top10:  'Top 10',
    badge_1st:    '🥇 1st Place',
    badge_3rd:    '🥉 3rd Place',
    badge_3rd2:   '🥉 3rd Place',
    badge_3rd3:   '🥉 3rd Place',
    badge_silver: '🥈 2nd Place',
    badge_2nd:    '🥈 2nd Place',
    badge_ambassador: 'Ambassador',
    badge_1st_natl: '🥇 National 1st Place',
    badge_2nd2: '🥈 2nd Place',
    badge_3rd4: '🥉 3rd Place',
    badge_recognition: '🏅 Recognition',
    ev9_highlight: '🏆 27,000+ participants nationwide',
    ev9_title: 'GrandPrix Nacional',
    ev9_desc: 'We won 1st place at the GrandPrix Nacional, a competition with more than 27,000 participants from every state in Brazil. One of the biggest achievements of the CtrlSec team so far, the result of months of dedication in ideation, development, and pitching.',
    ev10_title: 'Ideias Raras — São Paulo',
    ev10_desc: 'I won 2nd place at the Ideias Raras Hackathon in São Paulo, one of Brazil\'s major innovation hubs, focused on solutions to find rare-disease patients within the public health system (SUS). A podium finish that reinforces our commitment to using technology to speed up rare-disease diagnosis.',
    ev11_title: 'Hackathon + Mineração',
    ev11_desc: 'I won 3rd place at the Hackathon + Mineração, promoted by CBPM and MinexHub, developing a solution for challenges in the mining sector. Another competition that shows the team\'s versatility in proposing technology for different sectors of the economy.',
    ev12_title: 'Aluno Destaque CIMATEC — 2026',
    ev12_desc: 'I received the Aluno Destaque CIMATEC 2026 recognition, awarded during a SENAI CIMATEC institutional event for active participation in innovation, technology, and entrepreneurship initiatives.',
    ev1_title: 'Harvard HSIL Hackathon',
    ev1_desc:  'I participated in the Harvard HSIL Hackathon in São Paulo, focused on health innovation. We developed CapCure, a solution that transforms neurological monitoring for children into an interactive game, using AI and phone sensory stimuli to analyze the child\'s responses — non-invasively, without a hospital setting.',
    ev2_title: 'NASA Space Apps',
    ev2_desc:  'I participated individually in the NASA Space Apps Challenge, reaching the regional Top 10. I built GreenOrbit, an educational game using real satellite data to simulate agricultural scenarios, making complex information accessible to help farmers make more sustainable decisions.',
    ev3_title: 'Google GrandPrix',
    ev3_desc:  'I took part in Google\'s Grand Prix, winning 1st place with ALLY, a project focused on safety and autonomy for people in vulnerable situations. The solution offers real-time monitoring with a simple, accessible interface and low-cost technology.',
    ev4_title: 'e-agro Hackathon',
    ev4_desc:  'I participated in the E-Agro Hackathon, winning 3rd place with my team. We developed Alforje, a platform that organizes collective purchasing among rural producers, reducing costs, improving negotiations and optimizing logistics.',
    ev5_title: 'GrandPrix Index',
    ev5_desc:  'I competed in the SENAI-promoted GrandPrix Index, winning 3rd place with a sustainability solution for the food sector — a web platform connecting clients and restaurants, collecting real-time data on consumption and waste.',
    ev6_title: 'MiningHub Hackathon',
    ev6_desc:  'I participated in the Exposibram Hackathon, winning 3rd place. We created GeoTrust Market, a platform integrating geological data and converting it into reliable information for investors, researchers, and public agencies.',
    ev7_title: 'Ideathon',
    ev7_desc:  'I competed in the Ideathon, winning 2nd place with a corporate information security solution. The project uses encryption and AI to analyze chatbot data usage in real time, identifying risks and preventing leaks.',
    ev8_title: 'CIMATEC Junior Ambassador',
    ev8_desc:  'I serve as a Junior Innovation Ambassador at SENAI CIMATEC, encouraging students to participate in projects and competitions. I support teams during ideation and development, share experiences, and promote opportunities.',
    projects_label: '03 — Projects',
    projects_title: 'What I\'ve built',
    proj1_desc: 'A collective purchasing platform for rural producers, reducing costs and optimizing logistics — designed to work even in low-connectivity regions.',
    proj2_desc: 'A safety and autonomy app for people in vulnerable situations, with real-time tracking and a simple, accessible interface.',
    proj3_desc: 'An information security platform using encryption and AI to analyze chatbot data usage in real time, preventing leaks.',
    proj4_desc: 'An educational game using real NASA satellite data to simulate agricultural scenarios and promote sustainable decision-making.',
    proj5_desc: 'An energy management dashboard with predictive AI, Digital Twin technology, and real-time monitoring for industries.',
    proj6_desc: 'A security system with smart glasses, Zero Trust authentication, and AES-256 encryption, with an integrated AI assistant.',
    proj7_desc: 'A solution that transforms neurological monitoring of children into an interactive game, using AI and sensory stimuli for non-invasive analysis.',
    proj8_desc: 'A tool integrated with Brazil\'s public health system (SUS) that organizes a queue of suspicion alerts, cross-referencing symptoms and clinical history to flag possible rare diseases. Each alert shows a relevance and compatibility score, helping health professionals investigate and route cases faster — without replacing a medical diagnosis.',
    proj9_desc: 'A mobile app that translates Brazil\'s Rural Environmental Registry (CAR) and licensing rules into plain language for landowners. It shows the property\'s regularization status, Legal Reserve area, and practical tips to stay compliant, supported by a virtual assistant and WhatsApp integration.',
    proj10_desc: 'A mobile climate-intelligence platform for farmers in Brazil\'s semi-arid region, combining weather forecasts and farm data to support everyday decisions. It aims to help producers anticipate climate risks and plan planting with more confidence.',
    contact_label: '04 — Contact',
    contact_title: 'Get in touch',
    contact_intro: 'Have a project in mind? Let\'s talk and turn your idea into reality.',
    form_name:    'Name',
    form_name_ph: 'Your name',
    form_message: 'Message',
    form_msg_ph:  'Your message...',
    form_send:    'Send via WhatsApp',
    footer_quote: '"Technology moves the world, but innovation transforms lives."',
    footer_rights: 'All rights reserved.',
    typed_words: ['Software Engineer', 'Front-End Developer', 'Innovator', 'Hackathon Builder'],
  }
};

/* ── Current language ── */
let currentLang = 'pt';

function setLang(lang) {
  currentLang = lang;
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Update all text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });
  // Restart typing animation with new words
  startTyping();
}

/* ── Typing animation ── */
let typingInterval = null;
let charIndex = 0;
let wordIndex = 0;
let isDeleting = false;

function startTyping() {
  const el = document.getElementById('typedText');
  if (!el) return;
  clearInterval(typingInterval);
  charIndex = 0; wordIndex = 0; isDeleting = false;
  el.textContent = '';

  function type() {
    const words = translations[currentLang].typed_words;
    const word = words[wordIndex % words.length];
    if (!isDeleting) {
      el.textContent = word.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === word.length) {
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = word.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex++;
      }
    }
    setTimeout(type, isDeleting ? 50 : 90);
  }
  type();
}

/* ── Hamburger menu ── */
function toggleMenu() {
  const nav     = document.getElementById('sidenav');
  const ham     = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  nav.classList.toggle('open');
  ham.classList.toggle('open');
  overlay.classList.toggle('show');
}

function navTo(id) {
  toggleMenu();
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

function smoothScroll(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ── Scroll reveal ── */
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children of same parent
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((sib, idx) => {
          if (sib === entry.target) delay = idx * 80;
        });
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ── Reduced motion helper ── */
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Subtle scroll parallax for background grid ── */
function initParallax() {
  if (prefersReducedMotion) return;
  const grid = document.querySelector('.home-bg-grid');
  if (!grid) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      grid.style.transform = `translateY(${y * 0.08}px)`;
      ticking = false;
    });
  }, { passive: true });
}

/* ── Custom cursor (with magnetic + trail) ── */
function initCursor() {
  if (prefersReducedMotion) return;
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  const trail  = document.getElementById('cursorTrail');
  if (!cursor || !ring || !trail) return;

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    ring.style.left = mx + 'px';
    ring.style.top  = my + 'px';
  });

  setInterval(() => {
    trail.style.left = mx + 'px';
    trail.style.top  = my + 'px';
  }, 90);

  document.querySelectorAll('a, button, .card, .skill-tag, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('magnetic'));
    el.addEventListener('mouseleave', () => ring.classList.remove('magnetic'));
  });

  document.addEventListener('mouseleave', () => {
    cursor.classList.add('hidden'); ring.classList.add('hidden'); trail.classList.add('hidden');
  });
  document.addEventListener('mouseenter', () => {
    cursor.classList.remove('hidden'); ring.classList.remove('hidden'); trail.classList.remove('hidden');
  });
}

/* ── Animated stat counters ── */
function initStatCounters() {
  const stats = document.querySelectorAll('.stat-num[data-target]');
  if (!stats.length) return;
  const suffix = el => (el.textContent.match(/[^\d]+$/) || [''])[0];

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const suf = suffix(el);
    if (prefersReducedMotion) { el.textContent = target + suf; return; }
    const duration = 1100;
    const start = performance.now();
    function step(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  stats.forEach(s => observer.observe(s));
}

/* ── Neural network canvas background ── */
function initNeuralCanvas() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;
  if (prefersReducedMotion) { canvas.remove(); return; }

  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  let nodes = [];
  let mouse = { x: null, y: null, active: false };
  let rafId = null;

  const isMobile = window.matchMedia('(max-width: 700px)').matches;
  const DENSITY = isMobile ? 22000 : 11000; // px² per node
  const LINK_DIST = isMobile ? 110 : 150;
  const MOUSE_RADIUS = 160;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(24, Math.min(90, Math.round((w * h) / DENSITY)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.4 + 0.6,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    // update + draw nodes
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;

      if (mouse.active) {
        const dx = n.x - mouse.x, dy = n.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_RADIUS) {
          const force = (1 - dist / MOUSE_RADIUS) * 0.045;
          n.x += (dx / (dist || 1)) * force * 12;
          n.y += (dy / (dist || 1)) * force * 12;
        }
      }
    });

    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.35;
          ctx.strokeStyle = `rgba(96,165,250,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      if (mouse.active) {
        const dx = nodes[i].x - mouse.x, dy = nodes[i].y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_RADIUS) {
          const alpha = (1 - dist / MOUSE_RADIUS) * 0.5;
          ctx.strokeStyle = `rgba(96,165,250,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    // nodes on top
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(147,197,253,0.55)';
      ctx.fill();
    });

    rafId = requestAnimationFrame(step);
  }

  resize();
  step();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true;
  }, { passive: true });
  window.addEventListener('mouseleave', () => { mouse.active = false; });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(rafId); }
    else { rafId = requestAnimationFrame(step); }
  });
}

/* ── WhatsApp contact ── */
function sendWhatsapp() {
  const name = document.getElementById('nameInput').value.trim();
  const msg  = document.getElementById('msgInput').value.trim();
  if (!name || !msg) {
    alert(currentLang === 'pt' ? 'Por favor, preencha seu nome e mensagem.' : 'Please fill in your name and message.');
    return;
  }
  const text = encodeURIComponent(`Olá Lucca! Me chamo ${name}.\n\n${msg}`);
  window.open(`https://wa.me/5571997223192?text=${text}`, '_blank');
}

/* ── Active nav highlight on scroll ── */
function initScrollSpy() {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.sidenav ul li a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--blue-l)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ── System boot screen ── */
function initBootScreen() {
  const boot = document.getElementById('bootScreen');
  if (!boot) return;
  if (prefersReducedMotion) { boot.remove(); return; }

  document.body.classList.add('boot-lock');
  const logEl    = document.getElementById('bootLog');
  const statusText = document.getElementById('bootStatusText');
  const pctEl    = document.getElementById('bootPct');
  const barFill  = document.getElementById('bootBarFill');
  const isMobile = window.matchMedia('(max-width: 700px)').matches;
  const fillTime = isMobile ? 650 : 1100;
  const lines = isMobile
    ? ['booting kernel...', 'compiling interface...']
    : ['booting kernel...', 'loading assets...', 'linking modules...', 'compiling interface...'];

  const hardTimeout = setTimeout(() => {
    document.body.classList.remove('boot-lock');
    if (boot && boot.parentNode) boot.remove();
  }, 4500);

  try {
    lines.forEach((l, i) => {
      setTimeout(() => {
        if (!logEl) return;
        const d = document.createElement('div');
        d.innerHTML = `<span>&gt;</span> ${l}`;
        logEl.appendChild(d);
      }, i * (isMobile ? 140 : 190));
    });

    const lineTime = lines.length * (isMobile ? 140 : 190) + 100;

    setTimeout(() => {
      requestAnimationFrame(() => {
        barFill.style.transition = `width ${fillTime}ms ease`;
        barFill.style.width = '100%';
      });
      const start = performance.now();
      (function tick(now) {
        const p = Math.min(1, (now - start) / fillTime);
        if (pctEl) pctEl.textContent = Math.round(p * 100) + '%';
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    }, lineTime);

    setTimeout(() => {
      if (statusText) statusText.textContent = 'SYSTEM READY';
      if (pctEl) pctEl.textContent = '100%';
      setTimeout(() => {
        boot.classList.add('boot-open');
        document.body.classList.remove('boot-lock');
        setTimeout(() => {
          clearTimeout(hardTimeout);
          if (boot.parentNode) boot.remove();
        }, 750);
      }, isMobile ? 220 : 380);
    }, lineTime + fillTime + 150);
  } catch (e) {
    document.body.classList.remove('boot-lock');
    if (boot.parentNode) boot.remove();
  }
}

/* ── Tech background decoration (per-section, discrete) ── */
function initTechDecor() {
  const isMobile = window.matchMedia('(max-width: 700px)').matches;

  const configs = {
    about: {
      frags: [
        { t: 'const{}', top: '10%', left: '4%' },
        { t: '=>', top: '22%', right: '6%' },
        { t: '01', bottom: '30%', left: '2%', muted: true },
        { t: '<dev/>', bottom: '12%', right: '8%' },
        { t: '0101', top: '48%', right: '2%', muted: true },
        { t: 'npm install', top: '32%', left: '1%', muted: true },
        { t: 'return true;', bottom: '42%', right: '1%' },
      ],
      tags: [
        { t: '[ SYS_01 ]', top: '6%', right: '3%' },
        { t: 'STATUS: ACTIVE', bottom: '8%', left: '3%', online: true },
      ],
      icons: [
        { t: '{ }', top: '15%', right: '1%', size: '2.4rem' },
        { t: '</>', bottom: '20%', left: '0%', size: '2rem' },
      ],
      nodes: [{ top: '65%', left: '6%' }],
      code: [{
        top: '78%', left: '2%',
        lines: [
          [['const ', 'kw'], ['dev', ''], [' = {', 'pun']],
          [['  stack', ''], [': ', 'pun'], ['["JS","TS"]', 'str']],
          [['}', 'pun']],
        ],
      }],
    },
    events: {
      frags: [
        { t: 'npm run build', top: '8%', right: '4%' },
        { t: '01', top: '35%', left: '2%', muted: true },
        { t: 'git commit', bottom: '20%', right: '3%' },
        { t: '0101', bottom: '6%', left: '4%', muted: true },
        { t: 'git push origin', top: '55%', right: '1%', muted: true },
        { t: '10', top: '15%', left: '1%' },
      ],
      tags: [
        { t: '01 / 12', top: '5%', left: '3%' },
        { t: '● ONLINE', bottom: '10%', right: '4%', online: true },
      ],
      icons: [
        { t: 'git', top: '42%', left: '0%', size: '1.6rem' },
        { t: '=>', bottom: '30%', right: '0%', size: '2.2rem' },
      ],
      nodes: [{ top: '50%', right: '3%' }, { top: '80%', left: '2%' }],
    },
    projects: {
      frags: [
        { t: 'function()', top: '9%', left: '3%' },
        { t: 'import', top: '40%', right: '2%', muted: true },
        { t: 'return', bottom: '22%', left: '5%' },
        { t: 'TS', bottom: '8%', right: '6%', muted: true },
        { t: 'export default', top: '60%', left: '1%', muted: true },
        { t: '0101', top: '20%', right: '1%' },
      ],
      tags: [
        { t: '[ SYS_03 ]', top: '6%', right: '3%' },
        { t: 'COORD: 12.94° S', bottom: '6%', left: '3%' },
      ],
      icons: [
        { t: 'JS', top: '28%', left: '0%', size: '1.6rem' },
        { t: '{ }', bottom: '35%', right: '0%', size: '2.4rem' },
      ],
      nodes: [{ top: '58%', left: '4%' }, { top: '15%', right: '2%' }],
      code: [{
        top: '75%', right: '2%',
        lines: [
          [['function ', 'kw'], ['build', ''], ['() {', 'pun']],
          [['  return ', 'kw'], ['"ready"', 'str']],
          [['}', 'pun']],
        ],
      }],
    },
    contact: {
      frags: [
        { t: '> send(message)', top: '10%', right: '4%' },
        { t: '01', top: '38%', left: '3%', muted: true },
        { t: '10', bottom: '28%', right: '3%', muted: true },
        { t: 'await response', top: '58%', left: '1%', muted: true },
      ],
      tags: [
        { t: 'STATUS: ONLINE', top: '6%', left: '3%', online: true },
        { t: 'CONNECTION_ESTABLISHED', bottom: '8%', right: '3%' },
      ],
      icons: [
        { t: '=>', top: '25%', right: '0%', size: '2.2rem' },
        { t: '</>', bottom: '18%', left: '0%', size: '2rem' },
      ],
      nodes: [{ top: '55%', right: '4%' }],
    },
  };

  const nodesSVG = (id) => `
    <svg class="tech-nodes" width="70" height="46" viewBox="0 0 70 46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" id="${id}">
      <line x1="8" y1="10" x2="30" y2="6" stroke="rgba(96,165,250,.35)" stroke-width="1"/>
      <line x1="30" y1="6" x2="52" y2="16" stroke="rgba(96,165,250,.35)" stroke-width="1"/>
      <line x1="30" y1="6" x2="20" y2="34" stroke="rgba(96,165,250,.25)" stroke-width="1"/>
      <line x1="52" y1="16" x2="60" y2="38" stroke="rgba(96,165,250,.25)" stroke-width="1"/>
      <circle cx="8" cy="10" r="2" fill="#93c5fd"/>
      <circle cx="30" cy="6" r="2.2" fill="#93c5fd"/>
      <circle cx="52" cy="16" r="2" fill="#93c5fd"/>
      <circle cx="20" cy="34" r="1.8" fill="#93c5fd"/>
      <circle cx="60" cy="38" r="1.8" fill="#93c5fd"/>
    </svg>`;

  const posStr = (o) => ['top', 'right', 'bottom', 'left'].map(k => o[k] ? `${k}:${o[k]};` : '').join('');

  Object.keys(configs).forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const cfg = configs[id];
    const layer = document.createElement('div');
    layer.className = 'tech-decor';
    layer.setAttribute('aria-hidden', 'true');

    let html = '';
    html += `<div class="tech-corner tl"></div><div class="tech-corner tr"></div><div class="tech-corner bl"></div><div class="tech-corner br"></div>`;
    html += `<div class="tech-scan"></div>`;

    cfg.frags.forEach((f, i) => {
      html += `<span class="tech-frag${f.muted ? ' muted' : ''}" style="${posStr(f)}animation-delay:${(i * 1.3).toFixed(1)}s;">${f.t}</span>`;
    });
    cfg.tags.forEach((tg, i) => {
      html += `<span class="tech-tag${tg.online ? ' online' : ''}" style="${posStr(tg)}animation-delay:${(i * 1.8).toFixed(1)}s;">${tg.t}</span>`;
    });
    (cfg.icons || []).forEach((ic, i) => {
      html += `<span class="tech-icon" style="${posStr(ic)}font-size:${ic.size || '2rem'};animation-delay:${(i * 2.1).toFixed(1)}s;">${ic.t}</span>`;
    });

    layer.innerHTML = html;

    if (!isMobile) {
      cfg.nodes.forEach((n) => {
        const holder = document.createElement('span');
        holder.style.cssText = posStr(n);
        holder.innerHTML = nodesSVG('');
        layer.appendChild(holder);
      });
      (cfg.code || []).forEach((block) => {
        const holder = document.createElement('div');
        holder.className = 'tech-code';
        holder.style.cssText = posStr(block);
        holder.innerHTML = block.lines.map(line =>
          line.map(([txt, cls]) => cls ? `<span class="${cls}">${txt}</span>` : txt).join('')
        ).join('\n');
        layer.appendChild(holder);
      });
    }

    section.insertBefore(layer, section.firstChild);
  });
}

/* ── Subtle mouse parallax on tech-decor layers (desktop only) ── */
function initTechParallax() {
  if (prefersReducedMotion) return;
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

  let mx = 0, my = 0, raf = null;
  const apply = () => {
    document.querySelectorAll('.tech-decor').forEach(layer => {
      layer.style.transform = `translate(${mx}px, ${my}px)`;
    });
    raf = null;
  };
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 10;
    my = (e.clientY / window.innerHeight - 0.5) * 6;
    if (!raf) raf = requestAnimationFrame(apply);
  }, { passive: true });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initBootScreen();
  initReveal();
  initCursor();
  initScrollSpy();
  initParallax();
  initStatCounters();
  initNeuralCanvas();
  initTechDecor();
  initTechParallax();
  startTyping();
  // Apply initial language
  setLang('pt');
});
