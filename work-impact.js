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

// Chart initialization
function initializeCharts() {
  try {
    // Attendance Chart
    const attendanceCtx = document.getElementById('attendanceChart');
    if (attendanceCtx) {
      new Chart(attendanceCtx.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Attendance %',
            data: [95, 98, 97, 96, 99, 94, 97, 98, 95, 96, 98, 97],
            borderColor: 'rgba(59, 130, 246, 1)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: 90,
              max: 100,
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false
            }
          }
        }
      });
    }

    // Bills Chart
    const billsCtx = document.getElementById('billsChart');
    if (billsCtx) {
      new Chart(billsCtx.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: ['Healthcare', 'Education', 'Infrastructure', 'Agriculture', 'Social Welfare', 'Others'],
          datasets: [{
            data: [28, 22, 18, 15, 12, 5],
            backgroundColor: [
              'rgba(239, 68, 68, 0.8)',
              'rgba(34, 197, 94, 0.8)',
              'rgba(59, 130, 246, 0.8)',
              'rgba(249, 115, 22, 0.8)',
              'rgba(139, 92, 246, 0.8)',
              'rgba(156, 163, 175, 0.8)'
            ],
            borderColor: [
              'rgba(239, 68, 68, 1)',
              'rgba(34, 197, 94, 1)',
              'rgba(59, 130, 246, 1)',
              'rgba(249, 115, 22, 1)',
              'rgba(139, 92, 246, 1)',
              'rgba(156, 163, 175, 1)'
            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: false
            }
          }
        }
      });
    }
  } catch (error) {
    console.error('Error initializing charts:', error);
  }
}

// Initialize charts when DOM loads
document.addEventListener("DOMContentLoaded", function () {
  // Wait for Chart.js to load
  setTimeout(() => {
    if (typeof Chart !== 'undefined') {
      initializeCharts();
    } else {
      console.error('Chart.js library not loaded');
    }
  }, 1000);
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
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements for animations
  const animatedElements = document.querySelectorAll(
    ".bg-card, section > div > div"
  );
  
  animatedElements.forEach((el) => {
    if (!el.classList.contains('no-animate')) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
      
      // Fallback: make visible after 2 seconds if observer doesn't trigger
      setTimeout(() => {
        if (el.style.opacity === "0") {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      }, 2000);
    }
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

// Project progress animations
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll('[style*="width:"]');
  
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.transition = 'width 2s ease-in-out';
        bar.style.width = width;
      }, 100);
    });
  };

  // Trigger animation when section comes into view
  const projectSection = document.getElementById('projects');
  if (projectSection) {
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(animateProgressBars, 500);
        }
      });
    }, { threshold: 0.3 });

    projectObserver.observe(projectSection);
  }
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