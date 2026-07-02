/**
 * Sherit Website Main JavaScript
 */

function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const navbarRight = document.querySelector('.navbar-right');

  if (navLinks) {
    navLinks.classList.toggle('active');
  }

  if (navbarRight) {
    navbarRight.classList.toggle('active');
  }
}

function toggleFaq(element) {
  const faqItem = element.closest('.faq-item');
  if (!faqItem) return;

  const isActive = faqItem.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(function(item) {
    item.classList.remove('active');
  });

  if (!isActive) {
    faqItem.classList.add('active');
  }
}

function setupNavLinks() {
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      const navLinks = document.getElementById('navLinks');
      const navbarRight = document.querySelector('.navbar-right');

      if (navLinks) navLinks.classList.remove('active');
      if (navbarRight) navbarRight.classList.remove('active');
    });
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 64;
      const targetPosition = target.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

function handlePageScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  navbar.style.boxShadow = window.scrollY > 10 ? 'var(--shadow-sm)' : 'none';
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const scrollPosition = window.scrollY + 100;

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(function(link) {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#')) {
          link.classList.toggle('active', href === '#' + sectionId);
        }
      });
    }
  });
}

function setupFadeInAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(function(element) {
    if (element.closest('.hero')) return;
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
}

function markImageLoaded(img) {
  img.classList.add('screenshot-loaded');
  img.classList.add('logo-loaded');

  const parent = img.closest('.logo-mark');
  if (parent) {
    parent.classList.add('has-image');
  }
}

function setupImageFallbacks() {
  document.querySelectorAll('img[data-optional-image]').forEach(function(img) {
    if (img.complete && img.naturalWidth > 0) {
      markImageLoaded(img);
    }

    img.addEventListener('load', function() {
      markImageLoaded(img);
    });

    img.addEventListener('error', function() {
      img.classList.remove('screenshot-loaded', 'logo-loaded');
      const parent = img.closest('.logo-mark');
      if (parent) {
        parent.classList.remove('has-image');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setupNavLinks();
  setupSmoothScroll();
  setupFadeInAnimations();
  setupImageFallbacks();
  handlePageScroll();
  updateActiveNav();

  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      handlePageScroll();
      updateActiveNav();
    }, 50);
  }, { passive: true });
});
