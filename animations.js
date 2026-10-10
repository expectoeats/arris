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
            const tl = gsap.timeline();

            // A. Top card lifts with subtle tilt & glide
            tl.to(mainCard, {
              y: -14,
              x: 6,
              rotate: -1,
              scale: 1.025,
              duration: 0.22,
              ease: 'power2.out',
            }, 0)
            // B. Seamlessly crossfades to incoming image
            .to(fadeImg, {
              opacity: 1,
              duration: 0.28,
              ease: 'power1.inOut',
            }, 0.04)
            // C. Glides smoothly back into deck with luxury deceleration
            .to(mainCard, {
              y: 0,
              x: 0,
              rotate: 0,
              scale: 1,
              duration: 0.44,
              ease: 'power3.out',
              onComplete: () => {
                mainImg.src = newSrc;
                gsap.set(fadeImg, { opacity: 0 });
              }
            }, 0.22);

            // D. Peek card reacts underneath
            if (peekCard) {
              if (peekImg && peekSrc) {
                setTimeout(() => {
                  if (peekImg) peekImg.src = peekSrc;
                }, 100);
              }

              tl.to(peekCard, {
                y: 34,
                x: -5,
                rotate: 1.2,
                scale: 0.96,
                duration: 0.2,
                ease: 'power2.out',
              }, 0)
              .to(peekCard, {
                y: 22,
                x: 0,
                rotate: 0,
                scale: 0.98,
                duration: 0.44,
                ease: 'power3.out',
              }, 0.2);
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
  // 8. Navbar Mega Dropdowns - Luxury Curtain Slide & Hover Manager (Reference HBA-style)
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

    // 1. Create or attach the background dim overlay
    let overlay = document.querySelector('.mega-dropdown-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'mega-dropdown-overlay';
      document.body.appendChild(overlay);
    }

    // 2. Add circular Close button with 90deg hover spin to each dropdown panel
    dropdownGroups.forEach(({ menu }) => {
      if (!menu) return;
      if (!menu.querySelector('.mega-dropdown-close')) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'mega-dropdown-close';
        closeBtn.setAttribute('aria-label', 'Close Menu');
        closeBtn.innerHTML = `
          <svg width="44" height="44" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3118 15L29.8775 15.5657L23.0044 22.4388L29.8492 29.2836L29.2836 29.8492L22.4388 23.0044L15.5657 29.8775L15 29.3118L21.8731 22.4388L15.0283 15.594L15.594 15.0283L22.4388 21.8731L29.3118 15Z" fill="#FBFBF9"></path>
            <circle cx="22.5" cy="22.5" r="22" stroke="rgba(255,255,255,0.35)"></circle>
          </svg>
        `;
        menu.appendChild(closeBtn);
        closeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          closeAll();
        });
      }
    });

    // Helper: checks whether cursor is currently hovering any trigger or dropdown menu
    function isAnyDropdownHovered() {
      for (const g of dropdownGroups) {
        if (!g.trigger || !g.menu) continue;
        if (g.trigger.matches(':hover') || g.menu.matches(':hover')) {
          return true;
        }
      }
      return false;
    }

    function open(menu, trigger) {
      if (!menu) return;
      clearTimeout(closeTimer);

      const rect = trigger ? trigger.getBoundingClientRect() : null;
      const targetLeft = rect ? Math.max(0, rect.left - 40) : null;

      // Activate dim overlay
      if (overlay) overlay.classList.add('is-active');

      // Case A: Switching from an already open menu to a different menu
      if (activeMenu && activeMenu !== menu && targetLeft !== null) {
        const oldLeft = activeMenu.style.left || (activeMenu.getBoundingClientRect().left + 'px');

        // Instantly align new menu curtain with old menu position without animation
        menu.style.transition = 'none';
        menu.style.left = oldLeft;
        menu.classList.add('is-active');
        // Force reflow so browser registers the starting position
        menu.offsetHeight;

        // Restore standard 0.75s slide transition and glide across to new position
        menu.style.transition = '';
        menu.style.left = targetLeft + 'px';
        menu.style.paddingLeft = '52px';

        // Clean up outgoing menu
        activeMenu.classList.remove('is-active');
        activeMenu.style.left = '100vw';
        activeMenu = menu;

      } else {
        // Case B: Opening fresh from closed state
        dropdownGroups.forEach((g) => {
          if (g.menu && g.menu !== menu) {
            g.menu.classList.remove('is-active');
            g.menu.style.left = '100vw';
          }
        });

        // Ensure starts from right off-screen
        if (!menu.classList.contains('is-active')) {
          menu.style.transition = 'none';
          menu.style.left = '100vw';
          menu.offsetHeight; // force reflow
          menu.style.transition = '';
        }

        if (targetLeft !== null) {
          menu.style.left = targetLeft + 'px';
          menu.style.paddingLeft = '52px';
        }
        menu.classList.add('is-active');
        activeMenu = menu;
      }
    }

    function closeAll() {
      clearTimeout(closeTimer);
      if (overlay) overlay.classList.remove('is-active');

      dropdownGroups.forEach((g) => {
        if (g.menu) {
          g.menu.style.left = '100vw'; // Slide curtain back offscreen to the right
          g.menu.classList.remove('is-active');
        }
      });
      activeMenu = null;
    }

    function scheduleClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        // Only close if neither trigger nor dropdown menu is hovered
        if (isAnyDropdownHovered()) return;
        closeAll();
      }, 320); // 320ms generous buffer gives user plenty of time to glide cursor down
    }

    dropdownGroups.forEach(({ trigger, menu }) => {
      if (!trigger || !menu) return;

      // 1. Top nav item hover & click:
      trigger.addEventListener('mouseenter', () => open(menu, trigger));
      trigger.addEventListener('mouseleave', () => scheduleClose());

      // Only the top-level anchor (EXPERTISE / PRACTICE) toggles menu on click
      const triggerLink = trigger.querySelector(':scope > a');
      if (triggerLink) {
        triggerLink.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (menu.classList.contains('is-active')) {
            closeAll();
          } else {
            open(menu, trigger);
          }
        });
      }

      // 2. Dropdown panel hover keeps it open and cancels any pending close
      menu.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      menu.addEventListener('mousemove', () => clearTimeout(closeTimer));
      menu.addEventListener('mouseleave', () => scheduleClose());

      // 3. Dropdown navigation links: allow natural browser navigation without interference
      const menuLinks = menu.querySelectorAll('a');
      menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          // Do NOT preventDefault - let the browser navigate to the target page!
          e.stopPropagation();
          closeAll();
        });
      });
    });

    // 3. When hovering other TOP-LEVEL navbar items (PROJECTS, STUDIO, CONTACT), close cleanly.
    const otherTopNavItems = document.querySelectorAll(
      'header nav > ul > li:not(.nav-dropdown-expertise):not(.nav-dropdown-practice), ' +
      'nav > ul > li:not(.nav-dropdown-expertise):not(.nav-dropdown-practice)'
    );

    otherTopNavItems.forEach((li) => {
      li.addEventListener('mouseenter', () => {
        if (li.closest('.expertise-dropdown-menu, .practice-dropdown-menu, .mega-dropdown-menu')) return;
        closeAll();
      });
    });

    // 4. Close if user clicks on the dim overlay
    if (overlay) {
      overlay.addEventListener('click', () => closeAll());
    }

    // 5. Close if user clicks outside of navbar and dropdowns
    document.addEventListener('click', (e) => {
      const isInside = e.target.closest(
        '.nav-dropdown-expertise, .nav-dropdown-practice, .expertise-dropdown-menu, .practice-dropdown-menu, .mega-dropdown-menu'
      );
      if (!isInside) {
        closeAll();
      }
    });
  }

  initMegaDropdownShuffle();
  initMegaDropdownHoverIntent();
});
