/* ═══ Hamburger Menu ═══ */
(function () {
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav-links');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }
})();

/* ═══ Project Filter ═══ */
(function () {
  var pills = document.querySelectorAll('.filter-pill');
  var items = document.querySelectorAll('.project-item');
  if (!pills.length || !items.length) return;

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      var filter = pill.getAttribute('data-filter');

      items.forEach(function (item) {
        if (filter === 'all') {
          item.style.display = '';
          return;
        }
        var tags = (item.getAttribute('data-tags') || '').split(/\s+/);
        item.style.display = tags.indexOf(filter) !== -1 ? '' : 'none';
      });

      document.querySelectorAll('.section-head-group').forEach(function (heading) {
        if (filter === 'all') { heading.style.display = ''; return; }
        var next = heading.nextElementSibling;
        if (!next) return;
        var visible = next.querySelectorAll('.project-item');
        var anyVisible = false;
        visible.forEach(function (v) { if (v.style.display !== 'none') anyVisible = true; });
        heading.style.display = anyVisible ? '' : 'none';
      });
    });
  });
})();

/* ═══ Lightbox — click any .photo-frame img to view full size ═══ */
(function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img class="lightbox-img"><span class="lightbox-close">&times;</span>';
  document.body.appendChild(overlay);

  var lbImg = overlay.querySelector('.lightbox-img');

  function open(src) {
    lbImg.src = src;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.photo-frame img, .slideshow-slide img, .ach-photo img').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () { open(this.src); });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target !== lbImg) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  /* ═══ Slideshow ═══ */
  document.querySelectorAll('.slideshow').forEach(function (ss) {
    var slides = ss.querySelectorAll('.slideshow-slide');
    var dots = ss.querySelectorAll('.slideshow-dot');
    var idx = 0;

    function show(n) {
      idx = ((n % slides.length) + slides.length) % slides.length;
      slides.forEach(function (s, i) {
        s.style.display = i === idx ? 'block' : 'none';
      });
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === idx);
      });
    }

    var prev = ss.querySelector('.ss-prev');
    var next = ss.querySelector('.ss-next');
    if (prev) prev.addEventListener('click', function () { show(idx - 1); });
    if (next) next.addEventListener('click', function () { show(idx + 1); });
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { show(i); });
    });

    show(0);
  });
})();
