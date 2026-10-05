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
        pinSpacing: false,
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
});
