// Cake Baker's demo — shared chrome, motion, bag, builder, booking
document.documentElement.classList.add('js');
const WA = '917265854495';
const U = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const inr = n => '₹' + n.toLocaleString('en-IN');
const wa = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const MENU = [
  { id: 'truffle', name: 'Belgian Truffle Royale', cat: 'signature', price: 1450, unit: '/kg', img: 'photo-1606890737304-57a1ca8a5b62', note: 'Callebaut 54.5%, ganache drip', tag: 'Bestseller' },
  { id: 'rosepista', name: 'Rose Pistachio Celebration', cat: 'signature', price: 1650, unit: '/kg', img: 'photo-1621303837174-89787a7d4729', note: 'Gulab sponge, Iranian pistachio' },
  { id: 'ivory', name: 'Ivory Gold Leaf', cat: 'signature', price: 2200, unit: '/kg', img: 'photo-1633062781822-e32867fe7d4a', note: 'Vanilla bean, 24k edible gold', tag: 'Luxe' },
  { id: 'rosegarden', name: 'Chocolate Rose Garden', cat: 'birthday', price: 1550, unit: '/kg', img: 'photo-1606983340126-99ab4feaa64a', note: 'Hand-piped buttercream roses' },
  { id: 'fondant', name: 'Couture Fondant Classic', cat: 'birthday', price: 1900, unit: '/kg', img: 'photo-1558301211-0d8c8ddee6ec', note: 'Any theme, sculpted by hand' },
  { id: 'pastel', name: 'Pastel Dream Layer', cat: 'birthday', price: 1350, unit: '/kg', img: 'photo-1761296152332-88ada22be48a', note: 'Six-layer rainbow vanilla' },
  { id: 'candle', name: 'Midnight Ganache', cat: 'birthday', price: 1250, unit: '/kg', img: 'photo-1610670444950-0b29430891b4', note: 'Our midnight-delivery favourite', tag: 'Midnight' },
  { id: 'straw', name: 'Fresh Strawberry Cream', cat: 'signature', price: 1250, unit: '/kg', img: 'photo-1622622008494-60c9e6b41996', note: 'Mahabaleshwar strawberries (seasonal)' },
  { id: 'blueberry', name: 'Blueberry Baked Cheesecake', cat: 'cheesecake', price: 1800, unit: '/kg', img: 'photo-1533134242443-d4fd215305ad', note: 'Eggless cream cheese, biscuit base' },
  { id: 'nyc', name: 'Burnt Basque Cheesecake', cat: 'cheesecake', price: 1700, unit: '/kg', img: 'photo-1524351199678-941a58a3df50', note: 'Caramelised top, molten middle' },
  { id: 'strawcheese', name: 'Strawberry Cheesecake', cat: 'cheesecake', price: 1750, unit: '/kg', img: 'photo-1578775887804-699de7086ff9', note: 'Berry compote glaze' },
  { id: 'bento', name: 'Gold Ribbon Bento', cat: 'bento', price: 650, unit: '/ 300g', img: 'photo-1762918988304-97d4a5840a4a', note: 'Mini cake + message, in a box', tag: 'Gift' },
  { id: 'cup6', name: 'Cupcake Box of 6', cat: 'bento', price: 690, unit: '/ box', img: 'photo-1519869325930-281384150729', note: 'Mix of 3 flavours' },
  { id: 'cupchoc', name: 'Double Choc Cupcakes', cat: 'bento', price: 750, unit: '/ box of 6', img: 'photo-1593187623747-7ea827ad1013', note: 'Fudge centre' },
  { id: 'wed3', name: 'Blush Three-Tier', cat: 'wedding', price: 9500, unit: ' onwards', img: 'photo-1761110657716-1eb3cb62de97', note: 'Serves 60–80 · tasting included', tag: 'Wedding' },
  { id: 'wed5', name: 'Grand Five-Tier', cat: 'wedding', price: 18000, unit: ' onwards', img: 'photo-1786125493139-be140fac0fe9', note: 'Serves 150+ · venue setup' },
  { id: 'wedred', name: 'Scarlet Floral Tier', cat: 'wedding', price: 12500, unit: ' onwards', img: 'photo-1761499102796-b5b36ee88d19', note: 'Fresh-flower styling' },
  { id: 'whitegold', name: 'Engagement Ring Cake', cat: 'wedding', price: 4200, unit: ' onwards', img: 'photo-1629196256546-ff4f3e27f623', note: '2 kg, gold-brushed' },
];

/* ---------- shared chrome ---------- */
const PAGES = [['index.html', 'Home'], ['cakes.html', 'Cakes'], ['design.html', 'Design Your Cake'], ['book.html', 'Book a Tasting'], ['about.html', 'Our Story']];
const here = location.pathname.split('/').pop() || 'index.html';
document.body.insertAdjacentHTML('afterbegin', `
<div class="cursor"></div>
<nav class="top"><div class="wrap">
  <a class="logo" href="index.html">Cake <b>baker's</b></a>
  <div class="links">${PAGES.map(([h, t]) => `<a href="${h}" class="${h === here ? 'on' : ''}">${t}</a>`).join('')}</div>
  <a class="btn nav-cta mag" href="book.html">Book a Tasting →</a>
  <button class="burger" aria-label="Menu">☰</button>
</div></nav>`);
document.body.insertAdjacentHTML('beforeend', `
<footer><div class="wrap">
  <div class="cols">
    <div><div class="logo">Cake <b>baker's</b></div><p style="margin-top:14px;max-width:320px">Handcrafted celebration cakes, baked fresh to order in Ahmedabad. 100% eggless on request.</p>
    <a class="btn" style="margin-top:20px;background:var(--rose)" href="${wa('Hi Cake baker\'s! I want to order a cake.')}" target="_blank" rel="noopener">WhatsApp us</a></div>
    <div><h4>Explore</h4>${PAGES.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}</div>
    <div><h4>Visit</h4><p>Ahmedabad, Gujarat</p><p>Open daily 10am – 10pm</p><p>Midnight delivery till 12:30am</p></div>
    <div><h4>Talk</h4><a href="tel:+917265854495">+91 72658 54495</a><a href="${wa('Hi!')}" target="_blank" rel="noopener">WhatsApp</a><a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a></div>
  </div>
  <div class="big">Baked with love</div>
  <div class="legal"><span>© 2026 Cake baker's, Ahmedabad</span><span>Rated 5.0 ★ on Google</span></div>
</div></footer>
<button class="bag-btn" id="bagBtn">Your order · <span id="bagN">0</span></button>
<aside class="drawer" id="drawer" aria-label="Your order"><button class="x" id="bagX" aria-label="Close">×</button>
  <h3>Your order</h3><div class="items" id="bagItems"></div>
  <div class="field"><label for="bagDate">Delivery date</label><input type="date" id="bagDate"></div>
  <div class="field"><label for="bagMsg">Message on cake</label><input id="bagMsg" maxlength="40" placeholder="Happy Birthday Riya"></div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><span>Estimated total</span><b class="serif" style="font-size:2rem" id="bagTotal">₹0</b></div>
  <a class="btn" id="bagSend" target="_blank" rel="noopener" style="justify-content:center">Confirm on WhatsApp →</a>
</aside>
<div class="toast" id="toast"></div>`);

const toast = t => { const e = $('#toast'); e.textContent = t; e.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('show'), 2200); };
$('.burger').onclick = () => $('.links').classList.toggle('open');
const minDate = new Date(Date.now() + 864e5).toISOString().slice(0, 10);
$$('input[type=date]').forEach(i => i.min = minDate);

/* ---------- bag (localStorage, per viewer) ---------- */
let bag = []; try { bag = JSON.parse(localStorage.getItem('cb-bag')) || []; } catch { }
const saveBag = () => { try { localStorage.setItem('cb-bag', JSON.stringify(bag)); } catch { } renderBag(); };
function addToBag(item) { const f = bag.find(b => b.id === item.id); f ? f.q++ : bag.push({ ...item, q: 1 }); saveBag(); toast(item.name + ' added'); }
function renderBag() {
  const n = bag.reduce((a, b) => a + b.q, 0), total = bag.reduce((a, b) => a + b.q * b.price, 0);
  $('#bagN').textContent = n; $('#bagBtn').classList.toggle('show', n > 0); $('#bagTotal').textContent = inr(total);
  $('#bagItems').innerHTML = bag.length ? bag.map((b, i) => `<div class="it"><div><b>${b.name}</b><br><small>${inr(b.price)}${b.unit || ''}</small></div><div class="qty"><button data-i="${i}" data-d="-1">−</button> ${b.q} <button data-i="${i}" data-d="1">+</button></div></div>`).join('') : '<p style="color:var(--muted)">Nothing here yet.</p>';
  const msg = `Hi Cake baker's! I'd like to order:\n${bag.map(b => `• ${b.name} × ${b.q}${b.unit?.includes('kg') ? ' kg' : ''}`).join('\n')}\nDelivery: ${$('#bagDate').value || 'TBD'}\nMessage on cake: ${$('#bagMsg').value || '-'}\nEst. total: ${inr(total)}`;
  $('#bagSend').href = wa(msg);
}
$('#bagItems').onclick = e => { const b = e.target.closest('button'); if (!b) return; const it = bag[b.dataset.i]; it.q += +b.dataset.d; if (it.q < 1) bag.splice(b.dataset.i, 1); saveBag(); };
$('#bagBtn').onclick = () => $('#drawer').classList.add('open');
$('#bagX').onclick = () => $('#drawer').classList.remove('open');
['#bagDate', '#bagMsg'].forEach(s => $(s).oninput = renderBag);
renderBag();

function cardHTML(m) {
  return `<article class="card" data-cat="${m.cat}">${m.tag ? `<span class="tag">${m.tag}</span>` : ''}
  <div class="ph"><img src="${U(m.img, 700)}" alt="${m.name}" loading="lazy"></div>
  <div class="meta"><div><small><i class="veg"></i>Eggless available</small><h3 style="font-size:1.45rem">${m.name}</h3><small>${m.note}</small><div class="price">${inr(m.price)}<small style="display:inline">${m.unit}</small></div></div>
  <button class="add" data-id="${m.id}" aria-label="Add ${m.name}">+</button></div></article>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('.add'); if (b) return addToBag(MENU.find(m => m.id === b.dataset.id));
  const ph = e.target.closest('.card .ph'); if (ph) quickView(MENU.find(m => m.id === $('.add', ph.parentElement).dataset.id));
});
// v3 — quick view with size + egg choice
document.body.insertAdjacentHTML('beforeend', '<dialog class="qv" id="qv"></dialog>');
function quickView(m) {
  const qv = $('#qv'), perKg = m.unit.includes('kg'), sizes = perKg ? [0.5, 1, 1.5, 2, 3] : [1, 2, 3];
  qv.innerHTML = `<div class="g"><img src="${U(m.img, 1000)}" alt="${m.name}"><div class="bd"><button class="x" style="position:absolute;right:20px;top:14px" aria-label="Close">×</button>
  <p class="eyebrow">${m.cat}</p><h2 style="font-size:2.6rem;margin:10px 0">${m.name}</h2><p style="color:var(--muted)">${m.note}</p>
  <div class="field" style="margin-top:22px"><label>${perKg ? 'Weight' : 'Quantity'}</label><div class="opts">${sizes.map((s, i) => `<input type="radio" name="qs" id="qs${i}" value="${s}" ${i === (perKg ? 1 : 0) ? 'checked' : ''}><label for="qs${i}">${perKg ? s + ' kg' : '× ' + s}</label>`).join('')}</div></div>
  <div class="field"><label>Preference</label><div class="opts"><input type="radio" name="qe" id="qe0" value="Eggless" checked><label for="qe0">Eggless</label><input type="radio" name="qe" id="qe1" value="With egg"><label for="qe1">With egg</label><input type="radio" name="qe" id="qe2" value="Jain"><label for="qe2">Jain-friendly</label></div></div>
  <div style="display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:10px"><b class="total" id="qvP"></b><button class="btn" id="qvAdd">Add to order</button></div>
  <p style="margin-top:14px;font-size:.82rem;color:var(--muted)">${perKg ? 'Serves ~8 per kg · ' : ''}Order 24 hrs ahead · 50% advance via UPI</p></div></div>`;
  const val = () => +$('input[name=qs]:checked', qv).value, egg = () => $('input[name=qe]:checked', qv).value;
  const upd = () => $('#qvP').textContent = inr(Math.round(m.price * val()));
  qv.oninput = upd; upd();
  $('.x', qv).onclick = () => qv.close();
  qv.onclick = e => { if (e.target === qv) qv.close(); };
  $('#qvAdd').onclick = () => { const v = val(); addToBag({ id: `${m.id}-${v}-${egg()}`, name: `${m.name} · ${perKg ? v + ' kg' : '×' + v} · ${egg()}`, price: Math.round(m.price * v), unit: '' }); qv.close(); };
  qv.showModal();
}
// v3 — flavour explorer
const fl = $('#flavList');
if (fl) {
  const pick = i => { $$('button', fl).forEach((b, k) => b.classList.toggle('on', k === i)); const imgs = $$('#flavStage img'); imgs.forEach((im, k) => im.classList.toggle('on', k === i)); $('#flavN').textContent = imgs[i].dataset.n; $('#flavP').textContent = imgs[i].dataset.p; };
  $$('button', fl).forEach((b, i) => { b.onmouseenter = b.onclick = () => pick(i); });
}

/* ---------- page features ---------- */
const hrow = $('#hrow'); if (hrow) hrow.insertAdjacentHTML('beforeend', MENU.filter(m => m.tag).map(cardHTML).join(''));

const mgrid = $('#mgrid');
if (mgrid) {
  mgrid.innerHTML = MENU.map(cardHTML).join('');
  const pick = c => { $$('.chip').forEach(x => x.classList.toggle('on', x.dataset.f === c)); $$('.card', mgrid).forEach(k => k.style.display = c === 'all' || k.dataset.cat === c ? '' : 'none'); window.ScrollTrigger?.refresh(); };
  $$('.chip').forEach(ch => ch.onclick = () => pick(ch.dataset.f));
  const q = new URLSearchParams(location.search).get('c'); if (q) pick(q);
}

// cake builder
const bf = $('#builder');
if (bf) {
  const FL = { 'Belgian Chocolate': ['#4a2a20', 0], 'Vanilla Bean': ['#f3e3c3', 0], 'Red Velvet': ['#9b2c2c', 100], 'Rose Pistachio': ['#e9b8b0', 200], 'Rasmalai': ['#f2dca6', 200], 'Biscoff': ['#b67a45', 150] };
  const FIN = { 'Buttercream': ['#fbf3ea', 0], 'Fondant': ['#ffffff', 300], 'Ganache drip': ['#3a1f17', 150], 'Floral blush': ['#f1d0c8', 250] };
  const draw = () => {
    const d = new FormData(bf), kg = +d.get('kg'), tiers = +d.get('tiers'), fl = d.get('flav'), fin = d.get('fin');
    const extras = d.getAll('x'); const base = 1200 + FL[fl][1];
    let total = base * kg + FIN[fin][1] * kg + (tiers - 1) * 900 + extras.length * 250 + (d.get('egg') === 'Eggless' ? 50 * kg : 0);
    $('#total').textContent = inr(Math.round(total));
    $('#serves').textContent = `Serves ~${Math.round(kg * 8)} guests · ${tiers} tier${tiers > 1 ? 's' : ''}`;
    let svg = '', y = 380, w = 300;
    for (let t = 0; t < tiers; t++) {
      const h = 70 + (t === 0 ? kg * 4 : 0), x = 200 - w / 2; y -= h;
      svg += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${FIN[fin][0]}" stroke="#2a1712" stroke-opacity=".12"/>
      <rect x="${x}" y="${y + h * .45}" width="${w}" height="${h * .18}" fill="${FL[fl][0]}" opacity=".85"/>`;
      if (fin === 'Ganache drip') svg += `<path d="M${x} ${y + 6} h${w} v14 ${Array.from({ length: 8 }, (_, i) => `q-${w / 16} ${18 + (i % 3) * 10} -${w / 8} 0`).join(' ')} z" fill="#3a1f17"/>`;
      if (fin === 'Floral blush') svg += [0.2, 0.5, 0.8].map(p => `<circle cx="${x + w * p}" cy="${y + 10}" r="12" fill="#c9817a"/><circle cx="${x + w * p}" cy="${y + 10}" r="5" fill="#f8f1e9"/>`).join('');
      w *= .74;
    }
    if (extras.includes('Gold leaf')) svg += `<circle cx="215" cy="${y + 30}" r="6" fill="#b8894a"/><circle cx="180" cy="${y + 50}" r="4" fill="#b8894a"/>`;
    if (extras.includes('Fresh berries')) svg += [-30, 0, 30].map(o => `<circle cx="${200 + o}" cy="${y - 8}" r="10" fill="#b0243a"/>`).join('');
    if (extras.includes('Topper')) svg += `<text x="200" y="${y - 24}" text-anchor="middle" font-family="Cormorant Garamond,serif" font-style="italic" font-size="28" fill="#b8894a">${(d.get('msg') || 'Celebrate').slice(0, 18)}</text>`;
    $('#cakeSvg').innerHTML = `<ellipse cx="200" cy="388" rx="190" ry="14" fill="#2a1712" opacity=".15"/>${svg}<rect x="40" y="380" width="320" height="10" rx="5" fill="#b8894a"/>`;
    $('#kgOut').textContent = kg + ' kg';
    $('#sendDesign').href = wa(`Hi Cake baker's! Custom cake request:\n• ${kg} kg, ${tiers} tier(s)\n• Flavour: ${fl}\n• Finish: ${fin}\n• ${d.get('egg')}\n• Extras: ${extras.join(', ') || 'none'}\n• Message: ${d.get('msg') || '-'}\n• Date: ${d.get('date') || 'TBD'}\nEstimate shown: ${inr(Math.round(total))}`);
  };
  bf.oninput = draw; draw();
}

// booking
const bk = $('#booking');
if (bk) {
  const SL = ['11:00', '12:00', '13:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
  let slot = '';
  const paint = () => {
    const date = bk.date.value; slot = '';
    // ponytail: fake "booked" slots seeded from the date so the demo looks real; swap for a real calendar when live
    const seed = date ? date.split('-').reduce((a, b) => a + +b, 0) : 0;
    $('#slots').innerHTML = SL.map((s, i) => `<button type="button" ${date && (seed + i) % 4 === 0 ? 'disabled' : ''}>${s}</button>`).join('');
  };
  $('#slots').onclick = e => { const b = e.target.closest('button'); if (!b || b.disabled) return; $$('#slots button').forEach(x => x.classList.remove('on')); b.classList.add('on'); slot = b.textContent; };
  bk.date.oninput = paint; paint();
  bk.onsubmit = e => {
    e.preventDefault();
    if (!bk.date.value || !slot) return toast('Pick a date and a time slot');
    const d = new FormData(bk);
    const msg = `Hi Cake baker's! I'd like to book a ${d.get('type')}.\nName: ${d.get('name')}\nDate: ${d.get('date')} at ${slot}\nOccasion: ${d.get('occ')}\nGuests: ${d.get('guests') || '-'}\nNotes: ${d.get('notes') || '-'}`;
    const [Y, M, D] = d.get('date').split('-'), [h, m] = slot.split(':');
    const st = `${Y}${M}${D}T${h}${m}00`, en = `${Y}${M}${D}T${String(+h + 1).padStart(2, '0')}${m}00`;
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${st}\nDTEND:${en}\nSUMMARY:${d.get('type')} at Cake baker's\nLOCATION:Cake baker's, Ahmedabad\nEND:VEVENT\nEND:VCALENDAR`;
    $('#icsLink').href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);
    $('#waLink').href = wa(msg);
    $('#okWhen').textContent = `${d.get('type')} · ${new Date(d.get('date')).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} at ${slot}`;
    bk.style.display = 'none'; $('#ok').classList.add('show');
    window.open(wa(msg), '_blank', 'noopener');
  };
}

// delivery area checker
const ac = $('#areaCheck');
if (ac) {
  const AREAS = { 'satellite': 'Same-day ✓ · free over ₹1,500', 'bodakdev': 'Same-day ✓ · free over ₹1,500', 'prahlad nagar': 'Same-day ✓ · free over ₹1,500', 'vastrapur': 'Same-day ✓ · free over ₹1,500', 'sg highway': 'Same-day ✓ · free over ₹1,500', 'thaltej': 'Same-day ✓', 'navrangpura': 'Same-day ✓', 'bopal': 'Same-day ✓ · ₹99', 'maninagar': 'Same-day ✓ · ₹99', 'chandkheda': 'Next-day ✓ · ₹149', 'gota': 'Same-day ✓ · ₹99', 'gandhinagar': 'Next-day ✓ · ₹199' };
  ac.oninput = () => { const v = ac.value.trim().toLowerCase(); const k = Object.keys(AREAS).find(a => v && a.startsWith(v)); $('#areaOut').textContent = !v ? '' : k ? `${k.replace(/\b\w/g, c => c.toUpperCase())}: ${AREAS[k]}` : 'We still deliver — WhatsApp us for a quote.'; };
}

// reviews slider
const rq = $('#rq');
if (rq) {
  const R = [['“Ordered the Rose Pistachio for my mom’s 60th — every single relative asked where it was from. Fully eggless and it tasted better than any egg cake I’ve had.”', 'Hetal S., Satellite'], ['“They redesigned our wedding cake three times in the tasting without blinking. On the day, it was exactly the sketch.”', 'Raj & Mansi, Bodakdev'], ['“Midnight delivery at 11:58pm, candles lit, perfect. My wife cried. 10/10.”', 'Karan P., Prahlad Nagar']];
  let i = 0; const dots = $('#rdots');
  dots.innerHTML = R.map((_, k) => `<button aria-label="Review ${k + 1}"></button>`).join('');
  const show = k => { i = k; rq.style.opacity = 0; setTimeout(() => { rq.textContent = R[k][0]; $('#rwho').textContent = R[k][1]; rq.style.opacity = 1; }, 300); $$('button', dots).forEach((b, j) => b.classList.toggle('on', j === k)); };
  rq.style.transition = 'opacity .3s'; $$('button', dots).forEach((b, k) => b.onclick = () => show(k));
  show(0); setInterval(() => show((i + 1) % R.length), 6000);
}

/* ---------- motion ---------- */
const cur = $('.cursor');
addEventListener('pointermove', e => cur.style.transform = `translate(${e.clientX - 7}px,${e.clientY - 7}px)`);
document.addEventListener('pointerover', e => cur.classList.toggle('big', !!e.target.closest('a,button,.card,label')));
addEventListener('scroll', () => $('nav.top').classList.toggle('solid', scrollY > 40), { passive: true });

function motion() {
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);
  if (window.Lenis && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
    const lenis = new Lenis({ lerp: .09 }); lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
  }
  $$('.split-lines').forEach(h => { h.innerHTML = h.innerHTML.split('<br>').map(l => `<span class="line"><span>${l}</span></span>`).join(''); });
  gsap.from('.split-lines .line>span', { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: .1, delay: .2 });
  $$('.rv').forEach(el => gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }));
  $$('[data-par]').forEach(el => gsap.fromTo(el, { yPercent: -+el.dataset.par }, { yPercent: +el.dataset.par, ease: 'none', scrollTrigger: { trigger: el.parentElement, scrub: true } }));
  gsap.to('.hero .f1 img', { scale: 1, duration: 2, ease: 'expo.out' });
  // pinned horizontal collection (desktop only)
  const hs = $('.hscroll');
  if (hs && innerWidth > 860) {
    const row = $('.row', hs);
    gsap.to(row, { x: () => -(row.scrollWidth - innerWidth + 40), ease: 'none', scrollTrigger: { trigger: hs, pin: '.pin', scrub: 1, end: () => '+=' + row.scrollWidth, invalidateOnRefresh: true } });
  }
  $$('.count').forEach(c => { const o = { v: 0 }; gsap.to(o, { v: +c.dataset.to, duration: 2, ease: 'power2.out', scrollTrigger: { trigger: c, start: 'top 90%' }, onUpdate: () => c.textContent = Math.round(o.v).toLocaleString('en-IN') + (c.dataset.s || '') }); });
  // magnetic buttons
  $$('.btn').forEach(b => { b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .25, y: (e.clientY - r.top - r.height / 2) * .35, duration: .4 }); }); b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: .6, ease: 'elastic.out(1,.4)' })); });

  // v2 — manifesto words fill on scroll (Theobroma-style statement)
  $$('.fill').forEach(p => {
    [...p.childNodes].forEach(n => { if (n.nodeType === 3) { const f = document.createDocumentFragment(); n.textContent.split(/(\s+)/).forEach(w => { if (!w.trim()) return f.append(w); const s = document.createElement('span'); s.className = 'w'; s.textContent = w; f.append(s); }); n.replaceWith(f); } else n.classList.add('w'); });
    gsap.to($$('.w', p), { opacity: 1, stagger: .1, ease: 'none', scrollTrigger: { trigger: p, start: 'top 80%', end: 'bottom 45%', scrub: true } });
  });
  // stacked occasion cards shrink as the next one slides over
  const occ = $$('.occ');
  occ.forEach((c, i) => { if (occ[i + 1]) gsap.to(c, { scale: .92, opacity: .55, ease: 'none', scrollTrigger: { trigger: occ[i + 1], start: 'top bottom', end: 'top 110px', scrub: true } }); });
  // clip-path image reveal
  $$('.clip-rv').forEach(el => gsap.to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'expo.inOut', scrollTrigger: { trigger: el, start: 'top 85%' } }));
  // section colour shift
  $$('[data-bg]').forEach(sec => ScrollTrigger.create({ trigger: sec, start: 'top 55%', end: 'bottom 45%', onToggle: e => document.body.style.backgroundColor = e.isActive ? sec.dataset.bg : '' }));
  // v3 — expanding full-bleed image
  if ($('.expand')) gsap.timeline({ scrollTrigger: { trigger: '.expand', start: 'top top', end: '+=120%', pin: true, scrub: 1, refreshPriority: 1 } })
    .to('.ex-img', { clipPath: 'inset(0% 0% round 0px)', ease: 'none' })
    .to('.ex-img img', { scale: 1, ease: 'none' }, 0)
    .to('.ex-txt h2', { opacity: 1, y: -20, ease: 'none' }, .5);
  // v3 — marquee skews with scroll velocity
  const mq = $('.marquee .track');
  if (mq) { const sk = gsap.quickTo(mq, 'skewX', { duration: .5, ease: 'power3' }); ScrollTrigger.create({ onUpdate: s => sk(gsap.utils.clamp(-12, 12, s.getVelocity() / -250)) }); }
  // v3 — 3D tilt on cards
  if (matchMedia('(hover:hover)').matches) document.addEventListener('pointermove', e => {
    const c = e.target.closest('.card');
    $$('.card.tilt').forEach(k => { if (k !== c) { k.classList.remove('tilt'); k.style.transform = ''; } });
    if (!c) return; const r = c.getBoundingClientRect(); c.classList.add('tilt');
    c.style.transform = `perspective(900px) rotateY(${((e.clientX - r.left) / r.width - .5) * 10}deg) rotateX(${((e.clientY - r.top) / r.height - .5) * -10}deg)`;
  });
  // scroll progress
  gsap.to('#prog', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
  ScrollTrigger.sort(); ScrollTrigger.refresh();
  addEventListener('load', () => ScrollTrigger.refresh());
}

// preloader: once per session, never blocks content if JS libs fail
const ld = $('#loader');
let seen = false; try { seen = sessionStorage.getItem('cb-seen'); sessionStorage.setItem('cb-seen', 1); } catch { }
if (ld && !seen) {
  let n = 0; const num = $('.num', ld);
  const t = setInterval(() => { n = Math.min(100, n + 4); num.textContent = n; if (n === 100) { clearInterval(t); ld.classList.add('done'); motion(); } }, 28);
} else { ld?.remove(); motion(); }
setTimeout(() => $$('.rv').forEach(e => { if (!window.gsap) { e.style.opacity = 1; e.style.transform = 'none'; } }), 1500);

// v2 — image trail on CTA (desktop pointer only)
const tz = $('.trail-zone');
if (tz && matchMedia('(hover:hover)').matches) {
  const T = ['photo-1606983340126-99ab4feaa64a', 'photo-1599785209707-a456fc1337bb', 'photo-1622622008494-60c9e6b41996', 'photo-1558301211-0d8c8ddee6ec', 'photo-1533134242443-d4fd215305ad', 'photo-1761296152332-88ada22be48a'].map(i => U(i, 300));
  T.forEach(src => new Image().src = src);
  let k = 0, lx = 0, ly = 0;
  tz.addEventListener('pointermove', e => {
    const r = tz.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    if (Math.hypot(x - lx, y - ly) < 90 || !window.gsap) return; lx = x; ly = y;
    const im = document.createElement('img'); im.className = 'trail-img'; im.src = T[k++ % T.length]; im.alt = ''; im.style.left = x + 'px'; im.style.top = y + 'px'; tz.append(im);
    gsap.fromTo(im, { scale: .4, rotate: (k % 2 ? -8 : 8) }, { scale: 1, duration: .5, ease: 'back.out(2)' });
    gsap.to(im, { opacity: 0, scale: .7, y: 40, delay: .7, duration: .6, onComplete: () => im.remove() });
  });
}
// v2 — page transition curtain + scroll progress bar
document.body.insertAdjacentHTML('beforeend', '<div id="curtain">Cake baker\'s</div><div id="prog"></div>');
document.addEventListener('click', e => {
  const a = e.target.closest('a[href$=".html"],a[href*=".html?"]');
  if (!a || a.target || e.metaKey || e.ctrlKey || !window.gsap) return;
  e.preventDefault();
  gsap.to('#curtain', { y: 0, duration: .55, ease: 'expo.in', onComplete: () => location.href = a.href });
});
if (window.gsap) gsap.fromTo('#curtain', { y: 0 }, { y: '-100%', duration: .8, ease: 'expo.out', delay: .05 });
addEventListener('pageshow', e => { if (e.persisted && window.gsap) gsap.set('#curtain', { y: '100%' }); });
