// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      menuIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileMenu.querySelectorAll("a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });
  }
});

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Update active nav link
          document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('bg-primary', 'text-primary-foreground');
            navLink.classList.add('text-foreground', 'hover:text-primary', 'hover:bg-primary/10');
          });
          
          if (this.classList.contains('nav-link')) {
            this.classList.remove('text-foreground', 'hover:text-primary', 'hover:bg-primary/10');
            this.classList.add('bg-primary', 'text-primary-foreground');
          }

          // Smooth scroll to target
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});

// Timeline interactions
document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach((item) => {
    const card = item.querySelector('.bg-card');
    const year = item.getAttribute('data-year');
    
    if (card) {
      card.addEventListener('click', function() {
        // Create modal or expand functionality here
        alert(`Learn more about ${year} milestone - Feature coming soon!`);
      });
    }
  });
});

// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animations
  const animatedElements = document.querySelectorAll(
    ".timeline-item, .bg-card, section > div > div"
  );
  
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Active section highlighting in navigation
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    threshold: 0.3,
    rootMargin: "-100px 0px -100px 0px"
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');
        
        // Update active nav link
        navLinks.forEach(link => {
          link.classList.remove('bg-primary', 'text-primary-foreground');
          link.classList.add('text-foreground', 'hover:text-primary', 'hover:bg-primary/10');
          
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.remove('text-foreground', 'hover:text-primary', 'hover:bg-primary/10');
            link.classList.add('bg-primary', 'text-primary-foreground');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});

// Add scroll-to-top functionality
document.addEventListener("DOMContentLoaded", function () {
  // Create scroll to top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  `;
  scrollToTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-elegant hover:opacity-90 transition-all duration-300 z-50 hidden';
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
  
  document.body.appendChild(scrollToTopBtn);

  // Show/hide scroll to top button
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.remove('hidden');
    } else {
      scrollToTopBtn.classList.add('hidden');
    }
  });

  // Scroll to top functionality
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});