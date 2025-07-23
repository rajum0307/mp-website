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

// Interactive Map Implementation
let constituencyMap;
let markersLayer;

const mapLocations = [
  {
    id: 1,
    name: "District Collectorate",
    type: "government",
    lat: 17.3850,
    lng: 78.4867,
    description: "Main administrative office for the district",
    details: "Open: Mon-Fri 9:00 AM - 5:00 PM<br>Services: Administrative, Revenue, Development"
  },
  {
    id: 2,
    name: "Government Hospital",
    type: "healthcare",
    lat: 17.3900,
    lng: 78.4900,
    description: "Primary healthcare facility serving the region",
    details: "24/7 Emergency Services<br>Specialties: General Medicine, Surgery, Pediatrics"
  },
  {
    id: 3,
    name: "Central University",
    type: "education",
    lat: 17.3800,
    lng: 78.4800,
    description: "Leading educational institution in the constituency",
    details: "Established: 1985<br>Students: 15,000+<br>Courses: Engineering, Arts, Sciences"
  },
  {
    id: 4,
    name: "Railway Station",
    type: "transport",
    lat: 17.3750,
    lng: 78.4750,
    description: "Major transportation hub connecting to major cities",
    details: "Daily Trains: 45+<br>Passengers: 50,000+ daily<br>Facilities: Waiting rooms, Food court"
  },
  {
    id: 5,
    name: "Heritage Temple",
    type: "tourism",
    lat: 17.3950,
    lng: 78.4950,
    description: "Ancient temple complex dating back to 12th century",
    details: "Built: 12th Century<br>Architecture: Dravidian Style<br>Visitors: 1000+ daily"
  },
  {
    id: 6,
    name: "Water Treatment Plant",
    type: "projects",
    lat: 17.3700,
    lng: 78.4700,
    description: "New water treatment facility - Under Construction",
    details: "Capacity: 50 MLD<br>Status: 75% Complete<br>Beneficiaries: 200,000 people"
  },
  {
    id: 7,
    name: "Community Center",
    type: "community",
    lat: 17.3820,
    lng: 78.4820,
    description: "Multi-purpose community facility",
    details: "Facilities: Hall, Library, Sports<br>Capacity: 500 people<br>Events: Cultural programs, meetings"
  }
];

function initializeMap() {
  try {
    // Initialize the map
    constituencyMap = L.map('constituency-map').setView([17.3850, 78.4867], 12);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(constituencyMap);

    // Create markers layer
    markersLayer = L.layerGroup().addTo(constituencyMap);

    // Add all markers initially
    addMarkersToMap(mapLocations);
  } catch (error) {
    console.error('Error initializing map:', error);
    // Show fallback content if map fails to load
    const mapContainer = document.getElementById('constituency-map');
    if (mapContainer) {
      mapContainer.innerHTML = `
        <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div class="text-center">
            <p class="text-gray-600 mb-2">Map temporarily unavailable</p>
            <p class="text-sm text-gray-500">Please refresh the page to try again</p>
          </div>
        </div>
      `;
    }
  }
}

function addMarkersToMap(locations) {
  markersLayer.clearLayers();

  locations.forEach(location => {
    const markerColor = getMarkerColor(location.type);
    
    const marker = L.circleMarker([location.lat, location.lng], {
      radius: 8,
      fillColor: markerColor,
      color: '#fff',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.8
    });

    // Create popup content
    const popupContent = `
      <div class="p-3">
        <h3 class="font-semibold text-lg mb-2">${location.name}</h3>
        <p class="text-sm text-gray-600 mb-2">${location.description}</p>
        <div class="text-xs text-gray-500">${location.details}</div>
      </div>
    `;

    marker.bindPopup(popupContent);
    marker.addTo(markersLayer);
  });
}

function getMarkerColor(type) {
  const colors = {
    government: '#3b82f6',
    education: '#10b981',
    healthcare: '#ef4444',
    transport: '#8b5cf6',
    tourism: '#f59e0b',
    projects: '#f97316',
    community: '#ec4899'
  };
  return colors[type] || '#6b7280';
}

// Map filter functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize map after DOM is loaded with longer delay to ensure Leaflet is loaded
  setTimeout(() => {
    if (typeof L !== 'undefined') {
      initializeMap();
    } else {
      console.error('Leaflet library not loaded');
    }
  }, 500);

  const mapFilters = document.querySelectorAll('.map-filter');
  
  mapFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      // Remove active class from all filters
      mapFilters.forEach(f => f.classList.remove('active'));
      
      // Add active class to clicked filter
      this.classList.add('active');
      
      const filterType = this.getAttribute('data-filter');
      
      // Filter locations
      const filteredLocations = filterType === 'all' 
        ? mapLocations 
        : mapLocations.filter(location => location.type === filterType);
      
      // Update map markers
      addMarkersToMap(filteredLocations);
    });
  });
});

// Demographics Charts
function initializeCharts() {
  try {
    // Literacy Chart
    const literacyCtx = document.getElementById('literacyChart');
    if (!literacyCtx) return;
    
    new Chart(literacyCtx.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['15-25', '26-35', '36-45', '46-55', '56-65', '65+'],
      datasets: [{
        label: 'Male',
        data: [85, 82, 78, 72, 65, 58],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      }, {
        label: 'Female',
        data: [82, 79, 74, 68, 60, 52],
        backgroundColor: 'rgba(236, 72, 153, 0.8)',
        borderColor: 'rgba(236, 72, 153, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
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
          position: 'top',
        },
        title: {
          display: true,
          text: 'Literacy Rates by Age Group (%)'
        }
      }
    }
  });

    // Economic Chart
    const economicCtx = document.getElementById('economicChart');
    if (!economicCtx) return;
    
    new Chart(economicCtx.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Agriculture', 'Manufacturing', 'Services', 'Government', 'Others'],
      datasets: [{
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(156, 163, 175, 0.8)'
        ],
        borderColor: [
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
          display: true,
          text: 'Employment by Sector (%)'
        }
      }
    }
  });

    // Population Chart
    const populationCtx = document.getElementById('populationChart');
    if (!populationCtx) return;
    
    new Chart(populationCtx.getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['0-18', '19-35', '36-50', '51-65', '65+'],
      datasets: [{
        data: [28, 32, 22, 12, 6],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)'
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(236, 72, 153, 1)'
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
          display: true,
          text: 'Age Distribution (%)'
        }
      }
    }
  });

    // Growth Chart
    const growthCtx = document.getElementById('growthChart');
    if (!growthCtx) return;
    
    new Chart(growthCtx.getContext('2d'), {
    type: 'line',
    data: {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Population Growth',
        data: [1.85, 1.92, 2.05, 2.18, 2.25, 2.28, 2.32, 2.38, 2.42, 2.45],
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
          min: 1.8,
          max: 2.5,
          ticks: {
            callback: function(value) {
              return value + 'M';
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Population Growth (Millions)'
        }
      }
    }
  });
  } catch (error) {
    console.error('Error initializing charts:', error);
  }
}

// Progress Gallery Data and Functionality
const progressData = [
  {
    id: 1,
    title: "Highway Expansion Project",
    category: "infrastructure",
    beforeImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    completionDate: "March 2024",
    budget: "₹45 Crores",
    beneficiaries: "50,000+ daily commuters",
    impact: "Reduced travel time by 40% and improved connectivity between rural and urban areas"
  },
  {
    id: 2,
    title: "Modern School Complex",
    category: "education",
    beforeImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    completionDate: "August 2023",
    budget: "₹12 Crores",
    beneficiaries: "2,500 students",
    impact: "State-of-the-art facilities with digital classrooms and science laboratories"
  },
  {
    id: 3,
    title: "Community Health Center",
    category: "healthcare",
    beforeImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    completionDate: "December 2023",
    budget: "₹8 Crores",
    beneficiaries: "25,000 residents",
    impact: "24/7 emergency services and specialized medical care now available locally"
  },
  {
    id: 4,
    title: "Water Supply Network",
    category: "utilities",
    beforeImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    completionDate: "June 2024",
    budget: "₹25 Crores",
    beneficiaries: "75,000 residents",
    impact: "Clean drinking water access to 150 villages with 24/7 supply guarantee"
  },
  {
    id: 5,
    title: "Digital Library & Learning Center",
    category: "education",
    beforeImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    completionDate: "January 2024",
    budget: "₹3 Crores",
    beneficiaries: "10,000+ users",
    impact: "Free internet access and digital literacy programs for rural communities"
  },
  {
    id: 6,
    title: "Rural Road Connectivity",
    category: "infrastructure",
    beforeImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    completionDate: "September 2023",
    budget: "₹18 Crores",
    beneficiaries: "30,000 villagers",
    impact: "All-weather roads connecting 45 villages to main transportation network"
  }
];

function renderProgressProjects(projects) {
  const container = document.getElementById('progress-container');
  container.innerHTML = '';

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'progress-project bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300';
    projectCard.setAttribute('data-category', project.category);

    projectCard.innerHTML = `
      <div class="relative">
        <div class="before-after-slider relative h-64 overflow-hidden">
          <img src="${project.beforeImage}" alt="Before - ${project.title}" class="absolute inset-0 w-full h-full object-cover before-image">
          <img src="${project.afterImage}" alt="After - ${project.title}" class="absolute inset-0 w-full h-full object-cover after-image" style="clip-path: inset(0 50% 0 0);">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="slider-handle w-8 h-8 bg-primary rounded-full cursor-pointer shadow-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
              </svg>
            </div>
          </div>
          <div class="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs">Before</div>
          <div class="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">After</div>
        </div>
        <div class="absolute bottom-4 left-4 right-4">
          <span class="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium capitalize">
            ${project.category}
          </span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-foreground mb-3">${project.title}</h3>
        <p class="text-muted-foreground text-sm mb-4">${project.impact}</p>
        
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p class="text-xs text-muted-foreground">Completed</p>
            <p class="text-sm font-medium text-foreground">${project.completionDate}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground">Budget</p>
            <p class="text-sm font-medium text-foreground">${project.budget}</p>
          </div>
        </div>
        
        <div class="mb-4">
          <p class="text-xs text-muted-foreground">Beneficiaries</p>
          <p class="text-sm font-medium text-foreground">${project.beneficiaries}</p>
        </div>
        
        <button class="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-4 py-2 rounded-lg font-medium transition-all">
          View Project Details
        </button>
      </div>
    `;

    container.appendChild(projectCard);
  });

  // Initialize before/after sliders
  initializeBeforeAfterSliders();
}

function initializeBeforeAfterSliders() {
  const sliders = document.querySelectorAll('.before-after-slider');
  
  sliders.forEach(slider => {
    const handle = slider.querySelector('.slider-handle');
    const afterImage = slider.querySelector('.after-image');
    let isDragging = false;

    function updateSlider(x) {
      const rect = slider.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
      afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      handle.style.left = `${percentage}%`;
    }

    handle.addEventListener('mousedown', (e) => {
      isDragging = true;
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        updateSlider(e.clientX);
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch events for mobile
    handle.addEventListener('touchstart', (e) => {
      isDragging = true;
      e.preventDefault();
    });

    document.addEventListener('touchmove', (e) => {
      if (isDragging) {
        updateSlider(e.touches[0].clientX);
      }
    });

    document.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
}

// Progress filter functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize charts with error handling
  setTimeout(() => {
    if (typeof Chart !== 'undefined') {
      initializeCharts();
    } else {
      console.error('Chart.js library not loaded');
    }
  }, 500);
  
  // Initialize progress projects
  renderProgressProjects(progressData);

  const progressFilters = document.querySelectorAll('.progress-filter');
  
  progressFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      // Remove active class from all filters
      progressFilters.forEach(f => f.classList.remove('active'));
      
      // Add active class to clicked filter
      this.classList.add('active');
      
      const category = this.getAttribute('data-category');
      
      // Filter projects
      const filteredProjects = category === 'all' 
        ? progressData 
        : progressData.filter(project => project.category === category);
      
      // Re-render projects
      renderProgressProjects(filteredProjects);
    });
  });
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
    ".progress-project, .bg-card, section > div > div"
  );
  
  animatedElements.forEach((el) => {
    // Only apply animation styles if element is not already visible
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