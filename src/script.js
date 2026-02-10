/* ========================================
   MAIKR Studio - Professional UX Enhancement
   Minimal, elegant interactions
   ======================================== */

(function() {
    'use strict';

    // ========================================
    // Configuration
    // ========================================
    const CONFIG = {
        scrollOffset: 80,
        observerThreshold: 0.15,
        debounceDelay: 10
    };

    // ========================================
    // Initialize on DOM ready
    // ========================================
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        initNavbar();
        initMobileMenu();
        initSmoothScroll();
        initActiveSection();
        initScrollReveal();
        initContactForm();
    }

    // ========================================
    // Navbar - Scroll effect
    // ========================================
    function initNavbar() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let ticking = false;

        function updateNavbar() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        updateNavbar();
    }

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    function initMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        if (!menuBtn || !navLinks) return;

        menuBtn.addEventListener('click', () => {
            const isOpen = menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;

                e.preventDefault();

                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without triggering scroll
                history.pushState(null, '', targetId);
            });
        });
    }

    // ========================================
    // Active Section Indicator
    // ========================================
    function initActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        
        if (!sections.length || !navLinks.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    updateActiveLink(id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        function updateActiveLink(activeId) {
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${activeId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }

    // ========================================
    // Scroll Reveal Animation
    // ========================================
    function initScrollReveal() {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const revealElements = document.querySelectorAll(
            '.why-card, .mission-item, .mission-statement, .phase-card, .phase-detail, .feature-card, .calendly-embed, .contact-secondary-header, .contact-form-wrapper'
        );

        if (!revealElements.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: CONFIG.observerThreshold
        };

        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        };

        const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

        revealElements.forEach((el, index) => {
            el.classList.add('fade-in');
            el.style.transitionDelay = `${index % 3 * 0.08}s`;
            el.style.transitionDuration = '0.5s';
            el.style.transitionProperty = 'opacity, transform';
            el.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            revealObserver.observe(el);
        });
    }

    // ========================================
    // Contact Form Handling (Web3Forms)
    // ========================================
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Disable and show sending state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            submitBtn.style.opacity = '0.7';

            try {
                const formData = new FormData(form);
                
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    // Success state
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                    submitBtn.style.borderColor = '#10b981';
                    submitBtn.style.color = '#fff';
                    submitBtn.style.opacity = '1';
                    form.reset();

                    // Reset after delay
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = '';
                        submitBtn.style.borderColor = '';
                        submitBtn.style.color = '';
                        submitBtn.disabled = false;
                    }, 4000);
                } else {
                    throw new Error(result.message || 'Something went wrong');
                }

            } catch (error) {
                // Error state
                submitBtn.textContent = 'Error - Try Again';
                submitBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
                submitBtn.style.borderColor = '#ef4444';
                submitBtn.style.color = '#fff';
                submitBtn.style.opacity = '1';

                console.error('Form submission error:', error);

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }

})();
