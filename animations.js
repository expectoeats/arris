/**
 * ARRIS ARCHITECTS - ANIMATIONS RUNTIME
 * Exact animation implementation derived from Reference Website (HBA)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------------------------
  // 0. Lenis Smooth Scrolling (Matching Reference Website HBA)
  // ---------------------------------------------------------------------------
  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    window.lenis = lenis;

    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  } else if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // ---------------------------------------------------------------------------
  // 0B. Hero Scroll Parallax & Curtain Reveal (Matching HBA Reference)
  // ---------------------------------------------------------------------------
  const heroSection = document.querySelector('#hero-section');
  if (heroSection && window.gsap && window.ScrollTrigger) {
    const heroImg = heroSection.querySelector('.hero-media-wrapper img, .hero-bg-animate');
    const heroNav = heroSection.querySelector('nav');

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
      }
    });

    if (heroNav) {
      heroTl.to(heroNav, {
        opacity: 0,
        y: -30,
        ease: 'power1.out',
        duration: 0.35,
      }, 0);
    }

    if (heroImg) {
      heroTl.to(heroImg, {
        scale: 1.08,
        yPercent: 14,
        ease: 'none',
        duration: 1,
      }, 0);
    }
  }

  // Who We Are subtle floating parallax image
  const whoWeAreImg = document.querySelector('#who-we-are [data-reveal-animation] img');
  if (whoWeAreImg && window.gsap && window.ScrollTrigger) {
    gsap.fromTo(whoWeAreImg, 
      { y: 30 },
      {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '#who-we-are',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        }
      }
    );
  }

  // ---------------------------------------------------------------------------
  // 1. Signature Image / Media Scroll-Reveal (Clip-Path Unmasking)
  // ---------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('[data-reveal-animation]');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('is-revealed');
          
          const img = el.querySelector('img, video');
          if (window.gsap && img) {
            gsap.to(img, {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              ease: "power2.inOut",
              duration: 2.2,
              onComplete: () => {
                el.classList.add('animation-complete');
              }
            });
          } else {
            setTimeout(() => {
              el.classList.add('animation-complete');
            }, 1800);
          }
          
          observer.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // ---------------------------------------------------------------------------
  // 2. Text & Heading Scroll-Reveal
  // ---------------------------------------------------------------------------
  const textElements = document.querySelectorAll('[data-reveal-text]');

  if ('IntersectionObserver' in window) {
    const textObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15
    });

    textElements.forEach(el => textObserver.observe(el));
  } else {
    textElements.forEach(el => el.classList.add('is-revealed'));
  }

  // ---------------------------------------------------------------------------
  // 3. Button Wipe Hover Animation (Exact logic from reference scripts.min.js)
  // ---------------------------------------------------------------------------
  const wipeButtons = document.querySelectorAll('.btn-wipe, .btn');

  wipeButtons.forEach(btn => {
    if (!btn.querySelector('.btn__bg')) {
      const bg = document.createElement('span');
      bg.className = 'btn__bg';
      btn.prepend(bg);
    }

    let enterTimer, leaveTimer;

    btn.addEventListener('mouseenter', () => {
      clearTimeout(enterTimer);
      clearTimeout(leaveTimer);
      btn.classList.remove('wipe-out');
      enterTimer = setTimeout(() => {
        btn.classList.add('wipe-up');
      }, 10);
    });

    btn.addEventListener('mouseleave', () => {
      clearTimeout(enterTimer);
      clearTimeout(leaveTimer);
      btn.classList.remove('wipe-up');
      leaveTimer = setTimeout(() => {
        btn.classList.add('wipe-out');
        setTimeout(() => {
          btn.classList.remove('wipe-out');
        }, 350);
      }, 10);
    });
  });

  // ---------------------------------------------------------------------------
  // 4. Parallax Scroll Effect for Hero / Showcase Media
  // ---------------------------------------------------------------------------
  const parallaxMedia = document.querySelectorAll('[data-parallax-speed]');
  if (parallaxMedia.length > 0 && window.innerWidth >= 768) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset;
          parallaxMedia.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.1;
              const yOffset = (window.innerHeight - rect.top) * speed * 0.2;
              const img = el.querySelector('img, video');
              if (img) {
                img.style.transform = `translateY(${yOffset}px) scale(1.04)`;
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // 5. Sticky Gallery Showcase Animation (Exact logic from HBA reference)
  // ---------------------------------------------------------------------------
  if (window.gsap && window.ScrollTrigger) {
    const stickyGalleries = document.querySelectorAll('.sticky_gallery');

    // Trigger A: Section in-view class toggle
    stickyGalleries.forEach((gallery) => {
      ScrollTrigger.create({
        trigger: gallery,
        start: 'top 50%',
        end: 'bottom 50%',
        toggleClass: { targets: gallery, className: 'in-view' }
      });
    });

    // Trigger B & C: Main Media Pin/Fade + Content Overlay Pin
    stickyGalleries.forEach((gallery) => {
      const mainMedia = gallery.querySelector('.sticky_gallery--main-media');
      const contentWrapper = gallery.querySelector('.sticky_gallery--content-wrapper');
      const contentBg = gallery.querySelector('.sticky_gallery--content-bg');
      const mainImg = mainMedia ? mainMedia.querySelector('img') : null;

      if (mainMedia) {
        ScrollTrigger.create({
          trigger: mainMedia,
          start: 'top top',
          end: 'bottom 100%',
          endTrigger: gallery,
          pin: true,
          pinSpacing: false,
          markers: false,
          scrub: true,
          onUpdate: (self) => {
            // Main image fades out as user scrolls through gallery
            const e = 1.5 * self.progress;
            const r = Math.min(Math.max(e, 0), 1);
            if (mainImg) {
              mainImg.style.opacity = Math.min(Math.max(1 - r, 0), 1);
            }

            // Dark gradient overlay fades out in the final 10% of scroll
            const progress = self.progress;
            if (contentBg) {
              if (progress > 0.9) {
                const t = (progress - 0.9) / 0.1;
                const factor = Math.min(Math.max(t, 0), 1);
                contentBg.style.opacity = Math.min(Math.max(1 - factor, 0), 1);
              } else {
                contentBg.style.opacity = 1;
              }
            }
          }
        });
      }

      if (contentWrapper) {
        ScrollTrigger.create({
          trigger: contentWrapper,
          start: 'top top',
          end: 'bottom 100%',
          endTrigger: gallery,
          pin: true,
          pinSpacing: false
        });
      }
    });

    // -------------------------------------------------------------------------
    // 6. Horizontal Projects Showcase (X-Axis Scroll with Sticky Project Overlays)
    // -------------------------------------------------------------------------
    const horizontalSection = document.querySelector('#projects-horizontal');
    if (horizontalSection) {
      const track = horizontalSection.querySelector('.projects-horizontal-track');
      const progressBar = horizontalSection.querySelector('.horizontal-progress-bar');
      const projectGroups = horizontalSection.querySelectorAll('.horizontal-project-group');

      if (track) {
        const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

        function updateStickyOverlays() {
          const transform = window.getComputedStyle(track).transform;
          let currentTrackX = 0;
          if (transform && transform !== 'none') {
            try {
              const matrix = new DOMMatrixReadOnly(transform);
              currentTrackX = matrix.m41;
            } catch (e) {
              const match = transform.match(/matrix\([^,]+,[^,]+,[^,]+,[^,]+,\s*([^,]+)/);
              if (match) currentTrackX = parseFloat(match[1]);
            }
          }

          const viewportWidth = window.innerWidth;

          projectGroups.forEach((group) => {
            const overlay = group.querySelector('.horizontal-project-overlay');
            if (!overlay) return;

            const groupLeft = group.offsetLeft;
            const groupWidth = group.offsetWidth;
            const maxShift = Math.max(0, groupWidth - viewportWidth);

            // Shift keeps overlay sticky to viewport while this group is visible
            const shift = Math.min(Math.max(-currentTrackX - groupLeft, 0), maxShift);
            overlay.style.transform = `translate3d(${shift}px, 0, 0)`;
          });
        }

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalSection,
            start: 'top top',
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressBar) {
                progressBar.style.transform = `scaleX(${self.progress})`;
              }
              updateStickyOverlays();
            }
          }
        });

        // Sync continuously with ticker for smooth scrub easing
        gsap.ticker.add(updateStickyOverlays);
        updateStickyOverlays();
      }
    }

    ScrollTrigger.refresh();
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }

  // ---------------------------------------------------------------------------
  // 7. Navbar Mega Dropdowns (Expertise & Practice) - Ultra-Smooth Card Shuffle
  // ---------------------------------------------------------------------------
  function initMegaDropdownShuffle() {
    // 1. Preload all shuffle images into browser memory to eliminate decoding stutter
    const preloadList = [
      // Expertise images
      'images/dorpdow-shuffle/DPS.png',
      'images/dorpdow-shuffle/Rectangle 1.png',
      'images/dorpdow-shuffle/project 4.png',
      'images/dorpdow-shuffle/Rectangle 6 (2).png',
      'images/dorpdow-shuffle/project1.2.png',
      'images/dorpdow-shuffle/Rectangle 6 (3).png',
      'images/dorpdow-shuffle/Rectangle 6 (4).png',
      // Practice images
      'images/about/Rectangle 1.png',
      'images/about/Rectangle 3.png',
      'images/about/Rectangle 4.png',
      'images/about/Rectangle 29.png',
      'images/about/Rectangle 30.png',
      'images/about/Rectangle 31.png',
    ];
    preloadList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const dropdowns = document.querySelectorAll('.nav-dropdown-expertise, .nav-dropdown-practice, .nav-dropdown-mega');
    dropdowns.forEach((dropdown) => {
      const items = dropdown.querySelectorAll('.expertise-nav-item, .practice-nav-item, .mega-nav-item');
      const mainCard = dropdown.querySelector('#expertise-card-main, #practice-card-main, .expertise-card-main, .practice-card-main, .mega-card-main');
      const mainImg = dropdown.querySelector('#expertise-img-main, #practice-img-main, .expertise-img-main, .practice-img-main, .mega-img-main');
      const peekCard = dropdown.querySelector('#expertise-card-peek, #practice-card-peek, .expertise-card-peek, .practice-card-peek, .mega-card-peek');
      const peekImg = dropdown.querySelector('#expertise-img-peek, #practice-img-peek, .expertise-img-peek, .practice-img-peek, .mega-img-peek');

      if (!items.length || !mainImg || !mainCard) return;

      // 2. Ensure dual-layer crossfade image element exists inside front card
      let fadeImg = mainCard.querySelector('.expertise-img-fade, .practice-img-fade, .mega-img-fade');
      if (!fadeImg) {
        fadeImg = document.createElement('img');
        fadeImg.className = 'mega-img-fade expertise-img-fade practice-img-fade absolute inset-0 w-full h-full object-cover block opacity-0 pointer-events-none will-change-transform';
        fadeImg.alt = 'Crossfade Preview';
        mainCard.appendChild(fadeImg);
      }

      let currentSrc = mainImg.getAttribute('src');

      items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          // Update active menu link within this dropdown
          items.forEach((it) => it.classList.remove('active'));
          item.classList.add('active');

          const newSrc = item.getAttribute('data-img');
          const peekSrc = item.getAttribute('data-peek');

          if (!newSrc || currentSrc === newSrc) return;
          currentSrc = newSrc;

          if (window.gsap) {
            // Stop any ongoing tweens for buttery smooth transition without jumps
            gsap.killTweensOf([mainCard, peekCard, fadeImg]);

            // Set new image on crossfade layer
            fadeImg.src = newSrc;
            gsap.set(fadeImg, { opacity: 0 });

            // Create coordinated luxury deck shuffle timeline
            // — intentionally slowed to premium speed to match HBA reference calmness
            const tl = gsap.timeline();

            // A. Top card lifts with subtle tilt & glide
            tl.to(mainCard, {
              y: -18,
              x: 8,
              rotate: -1.3,
              scale: 1.03,
              duration: 0.52,
              ease: 'power2.out',
            }, 0)
            // B. Seamlessly crossfades to incoming image
            .to(fadeImg, {
              opacity: 1,
              duration: 0.68,
              ease: 'power1.inOut',
            }, 0.12)
            // C. Glides smoothly back into deck with luxury deceleration
            .to(mainCard, {
              y: 0,
              x: 0,
              rotate: 0,
              scale: 1,
              duration: 0.9,
              ease: 'power3.out',
              onComplete: () => {
                mainImg.src = newSrc;
                gsap.set(fadeImg, { opacity: 0 });
              }
            }, 0.5);

            // D. Peek card reacts underneath
            if (peekCard) {
              if (peekImg && peekSrc) {
                setTimeout(() => {
                  if (peekImg) peekImg.src = peekSrc;
                }, 100);
              }

              tl.to(peekCard, {
                y: 42,
                x: -7,
                rotate: 1.4,
                scale: 0.955,
                duration: 0.48,
                ease: 'power2.out',
              }, 0)
              .to(peekCard, {
                y: 24,
                x: 0,
                rotate: 0,
                scale: 0.98,
                duration: 0.9,
                ease: 'power3.out',
              }, 0.48);
            }
          } else {
            mainImg.src = newSrc;
            if (peekImg && peekSrc) peekImg.src = peekSrc;
          }
        });
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 8. Navbar Mega Dropdowns - Hover Intent Grace Period Manager
  // ---------------------------------------------------------------------------
  function initMegaDropdownHoverIntent() {
    const dropdownGroups = [
      {
        trigger: document.querySelector('.nav-dropdown-expertise'),
        menu: document.querySelector('.expertise-dropdown-menu'),
      },
      {
        trigger: document.querySelector('.nav-dropdown-practice'),
        menu: document.querySelector('.practice-dropdown-menu'),
      }
    ];

    let closeTimer = null;
    let activeMenu = null;
    let isTransitioning = false;
    // CSS transition duration is 0.78s — guard must outlast it to prevent double-animation
    const TRANSITION_MS = 820;

    function open(menu, trigger) {
      if (!menu) return;
      // Strict guard: if already open, bail — no style mutation, no re-trigger of CSS transition
      if (menu.classList.contains('is-active')) return;
      if (isTransitioning) return;
      clearTimeout(closeTimer);

      const rect = trigger ? trigger.getBoundingClientRect() : null;
      const newLeft = rect ? Math.max(0, rect.left - 40) : null;

      // If another menu is already open, slide left first then swap content
      if (activeMenu && activeMenu !== menu) {
        isTransitioning = true;
        if (newLeft !== null) activeMenu.style.left = newLeft + 'px';

        setTimeout(() => {
          activeMenu.classList.remove('is-active');
          if (newLeft !== null) {
            menu.style.left = newLeft + 'px';
            menu.style.paddingLeft = '52px';
          }
          menu.classList.add('is-active');
          activeMenu = menu;
          setTimeout(() => { isTransitioning = false; }, TRANSITION_MS);
        }, 550);

      } else {
        // No active menu — open normally, one animation pass only
        isTransitioning = true;
        dropdownGroups.forEach((g) => {
          if (g.menu && g.menu !== menu) g.menu.classList.remove('is-active');
        });
        if (newLeft !== null) {
          menu.style.left = newLeft + 'px';
          menu.style.paddingLeft = '52px';
        }
        menu.classList.add('is-active');
        activeMenu = menu;
        setTimeout(() => { isTransitioning = false; }, TRANSITION_MS);
      }
    }

    function isPointerOverMenu(menu, x, y) {
      // Check if coordinates are within the menu's bounding rect
      const rect = menu.getBoundingClientRect();
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    }

    function scheduleClose(menu, trigger) {
      if (!menu) return;
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        menu.classList.remove('is-active');
        if (activeMenu === menu) activeMenu = null;
      }, 150);

      // Bridge the gap: if cursor moves into menu area before timer fires, cancel close
      function onMove(e) {
        if (isPointerOverMenu(menu, e.clientX, e.clientY)) {
          clearTimeout(closeTimer);
          document.removeEventListener('mousemove', onMove);
        }
      }
      document.addEventListener('mousemove', onMove);
      // Clean up the mousemove listener once timer fires
      setTimeout(() => document.removeEventListener('mousemove', onMove), 200);
    }

    dropdownGroups.forEach(({ trigger, menu }) => {
      if (!trigger || !menu) return;

      trigger.addEventListener('mouseenter', () => open(menu, trigger));
      trigger.addEventListener('mouseleave', () => scheduleClose(menu, trigger));

      // Entering the menu cancels any pending close
      menu.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      menu.addEventListener('mouseleave', () => scheduleClose(menu, trigger));
    });

    // When hovering other non-dropdown items (PROJECTS, STUDIO, CONTACT), close cleanly
    const otherNavItems = document.querySelectorAll('nav ul > li:not(.nav-dropdown-expertise):not(.nav-dropdown-practice)');
    otherNavItems.forEach((li) => {
      li.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
        dropdownGroups.forEach((g) => {
          if (g.menu) g.menu.classList.remove('is-active');
        });
        activeMenu = null;
      });
    });
  }

  initMegaDropdownShuffle();
  initMegaDropdownHoverIntent();
});
