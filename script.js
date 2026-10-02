
(function () {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tabs a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();


(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
})();

(function () {
  const el = document.getElementById('last-updated');
  if (el) {
    const now = new Date();
    el.textContent = now.toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' });
  }
})();