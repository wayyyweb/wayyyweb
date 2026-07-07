lucide.createIcons();
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Theme toggle ---------- */
function setTheme(dark){
  document.documentElement.classList.toggle('dark', dark);
  localStorage.setItem('wayyyweb-theme', dark ? 'dark' : 'light');
}
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(localStorage.getItem('wayyyweb-theme') ? localStorage.getItem('wayyyweb-theme')==='dark' : prefersDark);
document.getElementById('theme-toggle').onclick = () => setTheme(!document.documentElement.classList.contains('dark'));
document.getElementById('theme-toggle-m').onclick = () => setTheme(!document.documentElement.classList.contains('dark'));

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.onclick = () => mobileMenu.classList.toggle('hidden');
mobileMenu.querySelectorAll('a').forEach(a => a.onclick = () => mobileMenu.classList.add('hidden'));

/* ---------- Navbar bg on scroll + progress bar ---------- */
const navbar = document.getElementById('navbar');
const progress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  navbar.classList.toggle('glass', scrolled > 20);
  navbar.classList.toggle('shadow-sm', scrolled > 20);
  const h = document.documentElement;
  const pct = (h.scrollTop || document.body.scrollTop) / ((h.scrollHeight || document.body.scrollHeight) - h.clientHeight) * 100;
  progress.style.width = pct + '%';
}, {passive:true});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.15});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => io.observe(el));

/* ---------- Counters ---------- */
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.target;
    let cur = 0; const step = Math.max(1, target/50);
    const t = setInterval(() => { cur += step; if(cur>=target){cur=target; clearInterval(t);} el.textContent = Math.floor(cur); }, 25);
    counterIO.unobserve(el);
  });
}, {threshold:0.5});
document.querySelectorAll('.counter').forEach(el => counterIO.observe(el));

/* ---------- Magnetic buttons ---------- */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2, y = e.clientY - r.top - r.height/2;
    btn.style.transform = `translate(${x*0.18}px, ${y*0.35}px)`;
  });
  btn.addEventListener('mouseleave', () => btn.style.transform = '');
});

/* ---------- Mouse parallax hero mockup ---------- */
const mockupWrap = document.getElementById('mockup-wrap');
document.getElementById('home').addEventListener('mousemove', (e) => {
  const r = window.innerWidth, h = window.innerHeight;
  const x = (e.clientX / r - 0.5) * 14, y = (e.clientY / h - 0.5) * 14;
  mockupWrap.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

/* ================= DATA ================= */
const services = [
  {icon:'building-2', name:'Website Company Profile', desc:'Tampilkan profil perusahaan Anda secara profesional dan meyakinkan.'},
  {icon:'user', name:'Website Pribadi', desc:'Personal branding yang membangun kredibilitas online Anda.'},
  {icon:'palmtree', name:'Website Villa', desc:'Booking villa lebih mudah dengan galeri dan fitur reservasi.'},
  {icon:'home', name:'Website Homestay', desc:'Tingkatkan okupansi homestay dengan tampilan yang menarik.'},
  {icon:'plane', name:'Website Travel', desc:'Paket wisata tersaji rapi dan mudah dipesan pelanggan.'},
  {icon:'utensils-crossed', name:'Website Restaurant', desc:'Menu, lokasi, dan reservasi restoran dalam satu halaman elegan.'},
  {icon:'coffee', name:'Website Cafe', desc:'Nuansa cafe yang hangat, cocok untuk menarik pelanggan baru.'},
  {icon:'bike', name:'Website Rental Motor', desc:'Sistem sewa motor online yang praktis dan terpercaya.'},
  {icon:'car', name:'Website Rental Mobil', desc:'Katalog armada dan booking mobil dalam genggaman.'},
  {icon:'heart', name:'Undangan Digital', desc:'Undangan pernikahan digital modern dan berkesan.'},
  {icon:'rocket', name:'Landing Page', desc:'Halaman promosi fokus konversi untuk campaign Anda.'},
  {icon:'sparkles', name:'Custom Website', desc:'Kebutuhan unik? Kami wujudkan sesuai visi bisnis Anda.'},
];
const svcGrid = document.getElementById('services-grid');
services.forEach((s,i) => {
  svcGrid.insertAdjacentHTML('beforeend', `
  <div class="reveal card rounded-2xl p-7" style="transition-delay:${(i%3)*0.08}s">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style="background:linear-gradient(135deg,var(--primary),var(--secondary))">
      <i data-lucide="${s.icon}" class="w-6 h-6 text-white"></i>
    </div>
    <h3 class="font-display font-bold text-lg mb-2">${s.name}</h3>
    <p class="text-sm" style="color:var(--muted)">${s.desc}</p>
  </div>`);
});
svcGrid.querySelectorAll('.reveal').forEach(el => io.observe(el));

const portfolioItems = [
  {cat:'Company Profile', name:'Cendana Group', color:'var(--primary)', img:'img/cendana.png', desc:'Company profile korporat untuk grup bisnis multi-unit, dengan tampilan tegas dan profesional.', demo:'portofolio/cendana-group/index.html'},
  {cat:'Travel', name:'Nusantara Trip', color:'var(--secondary)', img:'img/travel.png', desc:'Website travel agent dengan katalog paket wisata dan nuansa petualangan.', demo:'portofolio/travel/index.html'},
  {cat:'Restaurant', name:'Kedai Woeloeng', color:'var(--primary)', img:'img/restaurant.png', desc:'Website restaurant dengan sistem reservasi meja online dan tampilan elegan.', demo:'portofolio/restaurant/index.html'},
  {cat:'Cafe', name:'Kawungan Coffee', color:'var(--secondary)', img:'img/cafe.png', desc:'Website cafe dengan tampilan hangat, cocok untuk menarik pelanggan baru.', demo:'https://wayyyweb-cafe.vercel.app/'},
  {cat:'Rental Motor', name:'Velora Rent', color:'var(--accent)', img:'img/rental.png', desc:'Website sewa motor & mobil harian, mingguan, hingga bulanan yang praktis.', demo:'portofolio/rental/index.html'},
  {cat:'Website Pribadi', name:'Web Personal Rachel Vennya', color:'var(--primary)', img:'img/buna.png', desc:'Website portofolio pribadi untuk selebgram,fashion & Trip.', demo:'portofolio/rachel-vennya/index.html'},
  {cat:'Undangan Digital', name:'Nadia & Raka', color:'var(--secondary)', img:'img/undangan.png', desc:'Undangan pernikahan digital elegan dengan RSVP online.', demo:'portofolio/undangan/index.html'},
];
const categories = ['Semua', ...new Set(portfolioItems.map(p=>p.cat))];
const filterBar = document.getElementById('filter-bar');
categories.forEach(c => {
  filterBar.insertAdjacentHTML('beforeend', `<button data-cat="${c}" class="filter-btn px-4 py-2 rounded-full text-xs font-semibold border ${c==='Semua'?'active':''}" style="border-color:var(--line)">${c}</button>`);
});
const pfGrid = document.getElementById('portfolio-grid');
let currentFilteredItems = [];
function renderPortfolio(filter){
  pfGrid.innerHTML = '';
  currentFilteredItems = portfolioItems.filter(p => filter==='Semua' || p.cat===filter);
  currentFilteredItems.forEach((p,i) => {
    pfGrid.insertAdjacentHTML('beforeend', `
    <div class="reveal-scale group card rounded-2xl overflow-hidden cursor-pointer" data-index="${i}" style="transition-delay:${(i%3)*0.08}s">
      <div class="h-44 relative overflow-hidden">
        <img src="${p.img}" alt="${p.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold flex items-center gap-1">Lihat Detail <i data-lucide="arrow-up-right" class="w-4 h-4"></i></span>
        </div>
      </div>
      <div class="p-5">
        <span class="text-xs font-semibold" style="color:var(--secondary)">${p.cat}</span>
        <h3 class="font-display font-bold mt-1">${p.name}</h3>
      </div>
    </div>`);
  });
  lucide.createIcons();
  pfGrid.querySelectorAll('.reveal-scale').forEach(el => io.observe(el));
  pfGrid.querySelectorAll('[data-index]').forEach(card => {
    card.addEventListener('click', () => openPortfolioModal(currentFilteredItems[+card.dataset.index]));
  });
}
renderPortfolio('Semua');
filterBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn'); if(!btn) return;
  filterBar.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderPortfolio(btn.dataset.cat);
});

/* ---------- Portfolio detail modal ---------- */
const pfModal = document.getElementById('portfolio-modal');
const pfModalContent = document.getElementById('portfolio-modal-content');
function openPortfolioModal(p){
  const waText = encodeURIComponent(`Halo WayyyWeb, saya tertarik dengan project "${p.name}" (${p.cat}) di portfolio. Boleh minta info lebih lanjut?`);
  pfModalContent.innerHTML = `
    <div class="relative">
      <button id="pf-modal-close" aria-label="Tutup" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <img src="${p.img}" alt="${p.name}" class="w-full aspect-[3/2] object-cover">
    </div>
    <div class="p-7 sm:p-8">
      <span class="text-xs font-semibold" style="color:var(--secondary)">${p.cat}</span>
      <h3 class="font-display font-extrabold text-2xl mt-1 mb-3">${p.name}</h3>
      <p class="text-sm leading-relaxed mb-7" style="color:var(--muted)">${p.desc}</p>
      <div class="flex flex-col sm:flex-row gap-3">
        <a href="${p.demo}" target="_blank" rel="noopener" class="btn-ghost border w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold inline-flex items-center justify-center gap-2" style="border-color:var(--line)">
          <i data-lucide="external-link" class="w-4 h-4"></i> Lihat Demo
        </a>
        <a href="https://wa.me/628139369459?text=${waText}" target="_blank" rel="noopener" class="btn-primary w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold inline-flex items-center justify-center gap-2">
          <i data-lucide="message-circle" class="w-4 h-4"></i> Tanyakan Project Ini
        </a>
      </div>
    </div>`;
  lucide.createIcons();
  pfModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('pf-modal-close').addEventListener('click', closePortfolioModal);
}
function closePortfolioModal(){
  pfModal.classList.add('hidden');
  document.body.style.overflow = '';
}
pfModal.addEventListener('click', (e) => { if(e.target === pfModal) closePortfolioModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closePortfolioModal(); });

const whyItems = [
  {icon:'gem', name:'Design Premium', desc:'Tampilan setara agency profesional kelas atas.'},
  {icon:'search-check', name:'SEO Expert', desc:'Struktur website dioptimasi agar mudah ditemukan di Google.'},
  {icon:'smartphone', name:'Mobile Responsive', desc:'Tampil sempurna di semua ukuran layar.'},
  {icon:'shield-check', name:'Keamanan Website', desc:'Proteksi menyeluruh untuk data dan pengunjung Anda.'},
  {icon:'headset', name:'Support Cepat', desc:'Tim kami siap membantu kapan pun dibutuhkan.'},
  {icon:'server', name:'Domain & Hosting Assistance', desc:'Kami bantu proses domain dan hosting Anda.'},
  {icon:'brush', name:'Custom Sesuai Brand', desc:'Warna dan gaya disesuaikan identitas bisnis Anda.'},
  {icon:'gauge', name:'Optimasi Performa', desc:'Loading cepat untuk pengalaman terbaik pengunjung.'},
  {icon:'badge-check', name:'Google Friendly', desc:'Dibangun mengikuti standar terbaru mesin pencari.'},
];
const whyGrid = document.getElementById('why-grid');
whyItems.forEach((w,i) => {
  whyGrid.insertAdjacentHTML('beforeend', `
  <div class="reveal text-center card rounded-2xl p-7" style="transition-delay:${(i%3)*0.08}s">
    <div class="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-5" style="background:var(--bg-alt)">
      <i data-lucide="${w.icon}" class="w-6 h-6" style="color:var(--secondary)"></i>
    </div>
    <h3 class="font-display font-bold mb-2">${w.name}</h3>
    <p class="text-sm" style="color:var(--muted)">${w.desc}</p>
  </div>`);
});
whyGrid.querySelectorAll('.reveal').forEach(el => io.observe(el));

const timelineSteps = [
  {name:'Konsultasi', desc:'Diskusi awal kebutuhan dan tujuan website Anda.', icon:'message-square'},
  {name:'Diskusi Konsep', desc:'Menentukan arah desain, konten, dan fitur.', icon:'lightbulb'},
  {name:'Design UI', desc:'Merancang tampilan visual sesuai identitas brand.', icon:'pen-tool'},
  {name:'Development', desc:'Membangun website dengan teknologi modern.', icon:'code-2'},
  {name:'Revisi', desc:'Penyempurnaan berdasarkan masukan Anda.', icon:'refresh-cw'},
  {name:'Launching Website', desc:'Website resmi online dan siap digunakan.', icon:'rocket'},
];
const tlWrap = document.getElementById('timeline');
tlWrap.innerHTML = `<div class="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2" style="background:var(--line)"></div>` +
  timelineSteps.map((s,i) => `
  <div class="reveal${i%2===0?'-left':'-right'} relative flex md:items-center gap-6 md:gap-0 mb-14 last:mb-0 ${i%2===0?'md:flex-row':'md:flex-row-reverse'}">
    <div class="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center z-10" style="background:linear-gradient(135deg,var(--primary),var(--secondary))">
      <i data-lucide="${s.icon}" class="w-6 h-6 text-white"></i>
    </div>
    <div class="card rounded-2xl p-6 md:w-[calc(50%-3rem)] ${i%2===0?'md:ml-8':'md:mr-8'}">
      <span class="text-xs font-bold" style="color:var(--secondary)">Langkah ${i+1}</span>
      <h3 class="font-display font-bold text-lg mt-1 mb-1">${s.name}</h3>
      <p class="text-sm" style="color:var(--muted)">${s.desc}</p>
    </div>
  </div>`).join('');
tlWrap.querySelectorAll('.reveal-left,.reveal-right').forEach(el => io.observe(el));

const testimonials = [
  {name:'Dewi Anjani', role:'Owner Travel Nusantara Trip', text:'Website travel kami jadi jauh lebih menarik dan booking meningkat drastis sejak pakai WayyyWeb.', rating:5},
  {name:'Rian Pratama', role:'Founder Velora Rent', text:'Proses cepat, hasilnya rapi, dan tim WayyyWeb sangat responsif membantu revisi.', rating:5},
  {name:'Siti Nurhaliza', role:'Owner Kawungan Coffee', text:'Desainnya modern banget, pelanggan jadi lebih percaya sama brand cafe kami.', rating:4},
  {name:'Budi Santoso', role:'CEO Cendana Group', text:'Company profile kami terlihat jauh lebih profesional, cocok untuk presentasi klien.', rating:5},
  {name:'Nadia Putri', role:'Pengantin, Undangan Digital', text:'Undangan digitalnya elegan dan mudah dibagikan ke tamu, banyak yang memuji.', rating:5},
  {name:'Totok', role:'Owner Kedai Woeloeng', text:'Sistem pesan online dan reservasi di website memudahkan pelanggan, omzet ikut naik.', rating:5},
];
const testiTrack = document.getElementById('testi-track');
const testiDots = document.getElementById('testi-dots');
let testiIndex = 0, testiTimer;
function renderTesti(i){
  const t = testimonials[i];
  testiTrack.innerHTML = `
    <div class="flex gap-1 mb-5">${Array(5).fill(0).map((_,s)=>`<i data-lucide="star" class="w-5 h-5" style="color:${s<t.rating?'#F59E0B':'var(--line)'}; fill:${s<t.rating?'#F59E0B':'none'}"></i>`).join('')}</div>
    <p class="text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-xl text-balance">&ldquo;${t.text}&rdquo;</p>
    <div class="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-white mb-3" style="background:linear-gradient(135deg,var(--primary),var(--secondary))">${t.name.charAt(0)}</div>
    <div class="font-semibold">${t.name}</div>
    <div class="text-sm" style="color:var(--muted)">${t.role}</div>
  `;
  lucide.createIcons();
  testiDots.querySelectorAll('button').forEach((b,idx) => b.style.background = idx===i ? 'linear-gradient(90deg,var(--primary),var(--secondary))' : 'var(--line)');
}
testimonials.forEach((_,i) => {
  testiDots.insertAdjacentHTML('beforeend', `<button aria-label="Testimoni ${i+1}" class="w-2.5 h-2.5 rounded-full transition-all" style="background:var(--line)"></button>`);
});
testiDots.querySelectorAll('button').forEach((b,i) => b.onclick = () => { testiIndex=i; renderTesti(i); resetTestiTimer(); });
function resetTestiTimer(){ clearInterval(testiTimer); testiTimer = setInterval(() => { testiIndex=(testiIndex+1)%testimonials.length; renderTesti(testiIndex); }, 5000); }
renderTesti(0); resetTestiTimer();

const faqs = [
  {q:'Berapa lama pengerjaan website?', a:'Estimasi pengerjaan sekitar 3-14 hari kerja tergantung kompleksitas dan kelengkapan materi yang diberikan.'},
  {q:'Apakah website dijamin responsive?', a:'Ya, seluruh website yang kami buat 100% responsive di mobile, tablet, laptop, hingga layar ultra wide.'},
  {q:'Apakah bisa request revisi?', a:'Bisa, setiap paket sudah termasuk sesi revisi agar hasil akhir sesuai dengan kebutuhan Anda.'},
  {q:'Apakah website sudah SEO Friendly?', a:'Sudah, kami menerapkan optimasi SEO lengkap mulai dari metadata, structured data, hingga sitemap.'},
  {q:'Apakah bisa custom sesuai kebutuhan?', a:'Tentu, kami dapat menyesuaikan desain, fitur, dan struktur website sesuai kebutuhan bisnis Anda.'},
];
const faqList = document.getElementById('faq-list');
faqs.forEach((f,i) => {
  faqList.insertAdjacentHTML('beforeend', `
  <div class="reveal card rounded-2xl overflow-hidden" style="transition-delay:${i*0.05}s">
    <button class="faq-btn w-full flex items-center justify-between gap-4 p-6 text-left font-semibold">
      <span>${f.q}</span>
      <i data-lucide="chevron-down" class="w-5 h-5 shrink-0 transition-transform"></i>
    </button>
    <div class="acc-content px-6"><p class="pb-6 text-sm" style="color:var(--muted)">${f.a}</p></div>
  </div>`);
});
faqList.querySelectorAll('.reveal').forEach(el => io.observe(el));
lucide.createIcons();
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('i');
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
    document.querySelectorAll('.acc-content').forEach(c => c.style.maxHeight = '0px');
    document.querySelectorAll('.faq-btn i').forEach(ic => ic.style.transform = 'rotate(0deg)');
    if(!isOpen){ content.style.maxHeight = content.scrollHeight + 'px'; icon.style.transform = 'rotate(180deg)'; }
  });
});