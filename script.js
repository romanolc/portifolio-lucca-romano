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

/* ── Custom cursor ── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursorTrail');
  if (!cursor || !trail) return;

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  setInterval(() => {
    trail.style.left = mx + 'px';
    trail.style.top  = my + 'px';
  }, 60);

  document.querySelectorAll('a, button, .card, .skill-tag').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(2)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
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

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCursor();
  initScrollSpy();
  startTyping();
  // Apply initial language
  setLang('pt');
});
