const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.card, .gal figure, .price div, .facts div').forEach(el => { el.classList.add('rv'); io.observe(el); });
const lb = document.createElement('div'); lb.className = 'lb'; lb.innerHTML = '<img alt="">';
document.body.appendChild(lb);
lb.addEventListener('click', () => lb.classList.remove('open'));
document.querySelectorAll('.gal figure').forEach(f => f.addEventListener('click', () => { lb.firstChild.src = f.dataset.full; lb.classList.add('open'); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
