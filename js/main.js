const themes = [
      {
        cls: 'theme-bordo',
        bg: 'var(--bordo-dark)',
        fg: '#F2F1D6',
        overlay: 'linear-gradient(160deg, rgba(68,12,28,0.88) 0%, rgba(68,12,28,0.72) 50%, rgba(10,55,45,0.62) 100%)'
      },
      {
        cls: 'theme-verde',
        bg: 'var(--verde)',
        fg: '#F2F1D6',
        overlay: 'linear-gradient(160deg, rgba(10,55,45,0.90) 0%, rgba(10,55,45,0.75) 50%, rgba(68,12,28,0.55) 100%)'
      },
      {
        cls: 'theme-crema',
        bg: '#F2F1D6',
        fg: '#440C1C',
        overlay: 'linear-gradient(160deg, rgba(242,241,214,0.92) 0%, rgba(242,241,214,0.82) 50%, rgba(242,241,214,0.88) 100%)'
      }
    ];

    function applyTheme(t) {
      document.body.className = t.cls;
      document.documentElement.style.setProperty('--bg', t.bg);
      document.documentElement.style.setProperty('--fg', t.fg);
      document.documentElement.style.setProperty('--overlay-gradient', t.overlay);
    }

    // Pick random theme on load
    applyTheme(themes[Math.floor(Math.random() * themes.length)]);

    // Illustration swap
    const variants = ['illus-cafe', 'illus-medialuna'];
    const solo = document.getElementById('illus-solo');

    function showRandom() {
      const next = variants[Math.floor(Math.random() * variants.length)];
      const nextEl = document.getElementById(next);
      solo.classList.add('hidden');
      nextEl.classList.remove('hidden');
      setTimeout(() => {
        nextEl.classList.add('hidden');
        solo.classList.remove('hidden');
      }, 2200);
    }

    setTimeout(() => {
      showRandom();
      setInterval(showRandom, 5000);
    }, 3500);


    // Remove entry veil after fade animation
    const veil = document.getElementById('entry-veil');
    veil.addEventListener('animationend', () => {
      veil.style.display = 'none';
    });
