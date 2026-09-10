// ===== WHATSAPP NUMBER =====
const WHATSAPP = '5521970383997';

// ===== CATEGORY ICONS (used on the front face of each catalog card) =====
const CATEGORY_ICON = {
  'Plataformas': 'circle-dot',
  'Cabines': 'camera',
  'Arcos': 'circle-dashed',
  'Fotografia & Vídeo': 'video',
};

// ===== CATALOG (real inventory, migrated from the rental catalog) =====
const produtos = [
  {
    id: 1,
    nome: 'Pista de Dança em LED',
    categoria: 'Plataformas',
    desc: 'Pista de dança com LED RGB embutido, efeitos sincronizados com a música.',
    descLonga: 'Nossa pista de LED RGB transforma qualquer ambiente em uma experiência sensorial completa. Com efeitos sincronizados ao ritmo da música, ela se torna o centro das atenções em qualquer evento.',
    imagem: 'assets/fotos/pista-led.jpg',
    badge: 'Top',
    specs: ['Tamanho: 2x2m', 'LED RGB', 'Sincronização musical'],
    preco: 'sob consulta',
  },
  {
    id: 2,
    nome: 'Plataforma 360°',
    categoria: 'Plataformas',
    desc: 'Plataforma interativa para vídeos dinâmicos e compartilháveis, o nosso carro-chefe.',
    descLonga: 'A Plataforma 360° registra vídeos envolventes enquanto o convidado interage no centro do giro. Ideal para eventos modernos, com entrega rápida via QR Code e arquivo digital em alta qualidade.',
    imagem: 'assets/fotos/plataforma-360.jpeg',
    badge: 'Destaque',
    specs: ['Arquivo digital', 'QR Code', 'Bastões de LED inclusos'],
    preco: 'sob consulta',
  },
  {
    id: 3,
    nome: 'Cabine Infinity LED',
    categoria: 'Cabines',
    desc: 'Cabine iluminada com efeito infinito de LED para fotos e vídeos imersivos.',
    descLonga: 'Cabine de 1m² com espelhos e LEDs criando um efeito infinito. Ideal para fotos e vídeos impactantes, com controle via Bluetooth.',
    imagem: 'assets/fotos/tunel-infinity.jpg',
    badge: 'Top',
    specs: ['1m x 1m', 'QR Code', 'Bluetooth', 'Foto e vídeo'],
    preco: 'sob consulta',
  },
  {
    id: 4,
    nome: 'Cabine Vogue',
    categoria: 'Cabines',
    desc: 'Cabine acrílica estilizada para fotos modernas e personalizadas.',
    descLonga: 'Estrutura de 2m em acrílico transparente com adesivos personalizados para criar fotos únicas e editoriais no seu evento.',
    imagem: 'assets/fotos/caixa-vogue.jpeg',
    badge: null,
    specs: ['Estrutura de 2m', 'Acrílico', 'Personalização', 'Fotos'],
    preco: 'sob consulta',
  },
  {
    id: 5,
    nome: 'Arco de LED',
    categoria: 'Arcos',
    desc: 'Túnel de LED para uma entrada imersiva e marcante.',
    descLonga: 'Estrutura em formato de túnel com LEDs sincronizados à música e controle via Bluetooth, a entrada perfeita para cerimônias e recepções.',
    imagem: 'assets/fotos/arco-led.jpeg',
    badge: 'Premium',
    specs: ['Túnel de LED', 'Bluetooth', '100+ efeitos', 'Sincronização musical'],
    preco: 'sob consulta',
  },
  {
    id: 6,
    nome: 'Cabine Espelhada',
    categoria: 'Cabines',
    desc: 'Cabine espelhada com LED para fotos e vídeos criativos.',
    descLonga: 'Cabine com paredes espelhadas e iluminação LED, com possibilidade de cenários internos e acesso via QR Code.',
    imagem: 'assets/fotos/cabine-espelhada.jpg',
    badge: 'Viral',
    specs: ['Espelhada', 'LED lateral', 'QR Code', 'Foto e vídeo'],
    preco: 'sob consulta',
  },
  {
    id: 7,
    nome: 'Fotografia de Eventos',
    categoria: 'Fotografia & Vídeo',
    desc: 'Cobertura fotográfica profissional do seu evento.',
    descLonga: 'Registro completo do seu evento com edição cuidadosa e entrega digital em alta qualidade.',
    imagem: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&q=80',
    badge: 'Popular',
    specs: ['Full Frame', 'Edição', 'Entrega rápida'],
    preco: 'sob consulta',
  },
  {
    id: 8,
    nome: 'Vídeo & Reels',
    categoria: 'Fotografia & Vídeo',
    desc: 'Produção de um vídeo de 3 minutos + 1 vídeo para os stories do Instagram.',
    descLonga: 'Produção audiovisual completa: um vídeo principal de 3 minutos com edição profissional e um vídeo otimizado para os Stories/Reels do Instagram.',
    imagem: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=600&q=80',
    badge: 'Destaque',
    specs: ['4K', 'Drone', 'Edição profissional'],
    preco: 'sob consulta',
  },
  {
    id: 10,
    nome: 'Arco de Setas de LED',
    categoria: 'Arcos',
    desc: 'Arco de LED em formato de setas para entradas guiadas.',
    descLonga: 'Estrutura com LEDs direcionais em formato de setas, com efeitos dinâmicos e controle via Bluetooth, perfeita para corredores e entradas.',
    imagem: 'assets/fotos/arco-setas.jpg',
    badge: 'Premium',
    specs: ['Setas de LED', 'Bluetooth', 'Efeitos dinâmicos'],
    preco: 'sob consulta',
  },
  {
    id: 11,
    nome: 'Plataforma com Bastões de LED',
    categoria: 'Plataformas',
    desc: 'Plataforma com bastões de LED retos para um efeito visual moderno.',
    descLonga: 'Estrutura com bastões de LED de 2 metros posicionados ao redor da plataforma, criando vídeos e fotos com iluminação intensa e estilizada.',
    imagem: 'assets/fotos/plataforma-bastoes.jpeg',
    badge: 'Novo',
    specs: ['Bastões de 2m', 'LED', 'Foto e vídeo'],
    preco: 'sob consulta',
  },
  {
    id: 12,
    nome: 'Plataforma com Setas de LED',
    categoria: 'Plataformas',
    desc: 'Plataforma com iluminação em setas para um efeito direcionado.',
    descLonga: 'Combinação da plataforma com LEDs em formato de setas, criando dinâmica visual e movimento nas gravações.',
    imagem: 'assets/fotos/plataforma-setas.jpg',
    badge: 'Novo',
    specs: ['Setas de LED', 'Dinâmico', 'Vídeo'],
    preco: 'sob consulta',
  },
  {
    id: 14,
    nome: 'Plataforma com Iluminação Z',
    categoria: 'Plataformas',
    desc: 'Plataforma com iluminação em formato Z para um efeito diferenciado.',
    descLonga: 'Estrutura com bastões de LED em formato Z, criando um visual único e moderno para vídeos.',
    imagem: 'assets/fotos/plataforma-z.jpg',
    badge: 'Exclusivo',
    specs: ['Formato Z', 'LED', 'Visual moderno'],
    preco: 'sob consulta',
  },
  {
    id: 15,
    nome: 'Cabine Espelhada Premium',
    categoria: 'Cabines',
    desc: 'Versão ampliada da cabine espelhada, para experiências ainda mais imersivas.',
    descLonga: 'Cabine espelhada ampliada com mais espaço interno, ideal para grupos e fotos mais elaboradas, mantendo iluminação LED e acesso via QR Code.',
    imagem: 'assets/fotos/cabine-premium.jpeg',
    badge: 'Premium',
    specs: ['Maior espaço', 'Espelhada', 'LED', 'QR Code'],
    preco: 'sob consulta',
  },
];

// ===== COMBOS =====
const combos = [
  {
    nome: 'Combo Infinity Experience',
    icon: 'sparkles',
    itens: ['Cabine Infinity LED', 'Impressão de fotos (tirinha ou polaroid)', 'Arquivo digital incluso'],
    preco: 'Sob consulta',
    destaque: true,
  },
  {
    nome: 'Combo Imersão Total',
    icon: 'flame',
    itens: ['Plataforma 360°', 'Cabine Infinity LED', 'Arquivo digital incluso'],
    preco: 'Sob consulta',
    destaque: true,
  },
  {
    nome: 'Combo Entrada Marcante',
    icon: 'rocket',
    itens: ['Plataforma 360°', 'Arco de LED', 'Arquivo digital incluso'],
    preco: 'Sob consulta',
    destaque: false,
  },
  {
    nome: 'Combo Vogue',
    icon: 'camera',
    itens: ['Cabine Vogue', 'Impressão de fotos (tirinha ou polaroid)', 'Arquivo digital incluso'],
    preco: 'Sob consulta',
    destaque: true,
  },
  {
    nome: 'Combo Espelhado Premium',
    icon: 'gem',
    itens: ['Cabine Espelhada', 'Impressão de fotos (tirinha ou polaroid)', 'Arquivo digital incluso'],
    preco: 'Sob consulta',
    destaque: false,
  },
];

// ===== GALLERY (real event photography) =====
const galeria = [
  { src: 'assets/fotos/espelhada-debutante.jpg', alt: 'Debutante fotografada dentro da cabine espelhada com balões', caption: 'Cabine Espelhada · Debutante' },
  { src: 'assets/fotos/IMG_2391.jpg', alt: 'Arco de LED dourado com plataforma 360° em casamento', caption: 'Arco de LED · Casamento' },
  { src: 'assets/fotos/pista-starburst.jpg', alt: 'Pista de LED azul vista de cima em formato de estrela', caption: 'Pista de LED' },
  { src: 'assets/fotos/IMG_2393.jpg', alt: 'Arco de LED azul e verde com plataforma 360° em casamento', caption: 'Arco de LED · Casamento' },
  { src: 'assets/fotos/tunel-arco-iris.jpg', alt: 'Túnel de LED colorido montado em festa à beira-mar', caption: 'Arco de LED · Festa ao ar livre' },
  { src: 'assets/fotos/IMG_2395.jpg', alt: 'Arco de LED rosa e roxo com plataforma 360° em casamento', caption: 'Arco de LED · Casamento' },
  { src: 'assets/fotos/plataforma-vermelha.jpg', alt: 'Plataforma 360° vista de cima com iluminação vermelha', caption: 'Plataforma 360°' },
  { src: 'assets/fotos/arco-led.jpeg', alt: 'Arco de LED montado em evento', caption: 'Arco de LED' },
  { src: 'assets/fotos/IMG_3446.jpg', alt: 'Bastões de LED vermelhos ao redor da plataforma 360°', caption: 'Plataforma + Bastões de LED' },
  { src: 'assets/fotos/IMG_3718.jpg', alt: 'Bastões de LED azul e verde em corredor decorado', caption: 'Plataforma + Bastões de LED' },
];

// ===== FAQ =====
const faqs = [
  { q: 'Quantas horas de evento?', a: 'Nossos pacotes cobrem de 2 a 5 horas de evento, com flexibilidade para a sua festa ou gravação.' },
  { q: 'Como recebo os vídeos e/ou fotos?', a: 'Você recebe um link na nuvem com todas as mídias (vídeos e fotos) em alta qualidade.' },
  { q: 'Qual região vocês atendem?', a: 'Atendemos a cidade do Rio de Janeiro, Baixada Fluminense, Niterói, entre outras regiões próximas.' },
  { q: 'Tem frete / taxa de deslocamento?', a: 'Sim, o valor do frete varia de acordo com o local e a distância do evento, e é calculado à parte.' },
  { q: 'Possui acessórios divertidos?', a: 'Sim! Levamos diversos acessórios para usar durante os vídeos e fotos, deixando tudo mais animado e descontraído.' },
  { q: 'O que está incluso no serviço?', a: 'Nos serviços audiovisuais, incluímos vídeos e fotos com o uso de uma máscara profissional, personalizada e selecionada ou criada de acordo com o gosto do cliente.' },
  { q: 'Em quanto tempo recebo meu vídeo para os stories?', a: 'Seu vídeo editado, otimizado para postar nos Stories ou no Reels, é entregue em no máximo 3 dias (72 horas).' },
  { q: 'Posso escolher a música da edição?', a: 'Com certeza. Você pode escolher a música que mais gosta e nos enviar para usarmos na sua edição exclusiva.' },
  { q: 'Como reservo a data com vocês?', a: 'Pedimos um sinal para confirmar a data na agenda e garantir sua reserva. O valor restante é pago no dia do evento.' },
];

// ===== RENDER: CATALOG (flip cards) =====
const allCategories = () => ['Todos', ...new Set(produtos.map(p => p.categoria))];
let activeFilter = 'Todos';

function renderFilters() {
  document.getElementById('filterBar').innerHTML = allCategories().map(c =>
    `<button class="filter-btn${c === activeFilter ? ' active' : ''}" onclick="setFilter('${c}')">${c}</button>`
  ).join('');
}

function setFilter(cat) {
  activeFilter = cat;
  renderFilters();
  renderProducts();
}

function toggleFlip(el, event) {
  event.stopPropagation();
  el.classList.toggle('flipped');
}

function renderProducts() {
  const filtered = activeFilter === 'Todos' ? produtos : produtos.filter(p => p.categoria === activeFilter);
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = filtered.map(p => `
    <div class="product-flip reveal visible" onclick="toggleFlip(this, event)">
      <div class="flip-inner">
        <div class="flip-front${p.badge === 'Destaque' ? ' featured' : ''}">
          <div class="flip-icon"><i data-lucide="${CATEGORY_ICON[p.categoria] || 'sparkles'}"></i></div>
          <span class="tag">${p.categoria}</span>
          <div class="product-name">${p.nome}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="flip-hint"><i data-lucide="image"></i> Toque para ver a foto</div>
        </div>
        <div class="flip-back" style="background-image:url('${p.imagem}')">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <div class="flip-back-content">
            <div class="product-category">${p.categoria}</div>
            <div class="product-name">${p.nome}</div>
            <div class="product-footer">
              <div class="product-price">Preço: <strong>${p.preco}</strong></div>
              <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); openModal(${p.id})">Ver detalhes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  if (window.lucide) window.lucide.createIcons();
}

// ===== RENDER: COMBOS =====
function renderCombos() {
  document.getElementById('combosGrid').innerHTML = combos.map(c => `
    <div class="combo-card${c.destaque ? ' destaque' : ''} reveal visible">
      <div class="combo-icon"><i data-lucide="${c.icon}"></i></div>
      <div class="tag" style="margin-bottom:14px">Pacote especial</div>
      <div class="combo-name">${c.nome}</div>
      <div class="combo-divider"></div>
      <div class="combo-items">
        ${c.itens.map(item => `<div class="combo-item"><i data-lucide="check"></i>${item}</div>`).join('')}
      </div>
      <div class="combo-price">Valor <strong>${c.preco}</strong></div>
      <a class="btn btn-primary btn-sm" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Tenho interesse no ' + c.nome + '.')}" target="_blank" rel="noopener">
        <i data-lucide="message-circle"></i> Solicitar combo
      </a>
    </div>
  `).join('');
  if (window.lucide) window.lucide.createIcons();
}

// ===== RENDER: GALLERY (carousel) =====
function renderGallery() {
  const track = document.getElementById('galleryGrid');
  track.innerHTML = galeria.map((g) => `
    <div class="gallery-tile reveal visible" onclick="openLightbox('${g.src}', '${g.alt.replace(/'/g, "\\'")}')">
      <img src="${g.src}" alt="${g.alt}" loading="lazy">
      ${g.caption ? `<span class="gallery-caption">${g.caption}</span>` : ''}
    </div>
  `).join('');

  const dotsEl = document.getElementById('galleryDots');
  dotsEl.innerHTML = galeria.map((_, i) => `<span data-i="${i}"></span>`).join('');
  const dots = Array.from(dotsEl.children);
  dots.forEach(dot => dot.addEventListener('click', () => {
    const tile = track.children[dot.dataset.i];
    track.scrollTo({ left: tile.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }));

  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const scrollAmount = () => track.children[0].getBoundingClientRect().width + 20;
  prevBtn.addEventListener('click', () => track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => track.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));

  function updateActiveDot() {
    const tiles = Array.from(track.children);
    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let minDist = Infinity;
    tiles.forEach((tile, i) => {
      const dist = Math.abs(tile.getBoundingClientRect().left - trackLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === closest));
    prevBtn.disabled = track.scrollLeft < 8;
    nextBtn.disabled = track.scrollLeft > track.scrollWidth - track.clientWidth - 8;
  }
  track.addEventListener('scroll', () => {
    clearTimeout(track._scrollTimer);
    track._scrollTimer = setTimeout(updateActiveDot, 80);
  });
  updateActiveDot();
}

// ===== RENDER: FAQ =====
function renderFaq() {
  document.getElementById('faqList').innerHTML = faqs.map(f => `
    <details class="faq-item">
      <summary class="faq-question">${f.q} <i data-lucide="plus" class="faq-icon"></i></summary>
      <div class="faq-answer">${f.a}</div>
    </details>
  `).join('');
  if (window.lucide) window.lucide.createIcons();
}

// ===== PRODUCT MODAL =====
function openModal(id) {
  const p = produtos.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalImg').src = p.imagem;
  document.getElementById('modalImg').alt = p.nome;
  document.getElementById('modalCategory').textContent = p.categoria;
  document.getElementById('modalName').textContent = p.nome;
  document.getElementById('modalDesc').textContent = p.descLonga;
  document.getElementById('modalSpecs').innerHTML = p.specs.map(s =>
    `<div class="spec-item"><i data-lucide="check"></i>${s}</div>`
  ).join('');
  const msg = encodeURIComponent(`Olá! Tenho interesse em: ${p.nome}`);
  document.getElementById('modalWA').href = `https://wa.me/${WHATSAPP}?text=${msg}`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

// ===== LIGHTBOX =====
function openLightbox(src, alt) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxImg').alt = alt;
  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeLightboxOutside(e) {
  if (e.target === document.getElementById('lightboxOverlay')) closeLightbox();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLightbox(); }
});

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('site-header').classList.toggle('scrolled', window.scrollY > 30);
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('nav').classList.toggle('open');
}
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('nav').classList.remove('open');
}));

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

// ===== STATS COUNTER =====
function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  let current = 0;
  const step = Math.ceil(target / 60);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + (el.dataset.target === '98' ? '%' : '+');
    if (current >= target) clearInterval(interval);
  }, 25);
}
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(animateCount);
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

// ===== CONTACT FORM =====
function sendMessage() {
  const name = document.getElementById('formName').value.trim();
  const eventType = document.getElementById('formEventType').value;
  const msg = document.getElementById('formMessage').value.trim();
  if (!name || !msg) {
    showToast('Preencha seu nome e mensagem para continuar.');
    return;
  }
  const parts = [`Olá! Sou ${name}.`];
  if (eventType) parts.push(`Tipo de evento: ${eventType}.`);
  parts.push(msg);
  const text = encodeURIComponent(parts.join('\n\n'));
  window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank');
  showToast('Abrindo o WhatsApp para você concluir o envio...');
}

// ===== TOAST =====
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ===== INIT =====
renderFilters();
renderProducts();
renderCombos();
renderGallery();
renderFaq();

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
statObserver.observe(document.getElementById('stats'));

if (window.lucide) window.lucide.createIcons();
