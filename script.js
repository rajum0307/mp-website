// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

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
});

// News section data and functionality
const newsData = [
  {
    id: 1,
    category: "Healthcare",
    title: "ICU Care Healthcare Unit Equipped Approved",
    description:
      "State-of-the-art ICU facilities have been approved for the district hospital, enhancing emergency medical care.",
    date: "2024-01-15",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    badge: "HEALTHCARE",
  },
  {
    id: 2,
    category: "Education",
    title: "Digital Education Initiative Launch Event",
    description:
      "Revolutionary digital learning program launched in 50+ schools across the constituency.",
    date: "2024-01-12",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
    badge: "EDUCATION",
  },
  {
    id: 3,
    category: "Infrastructure",
    title: "Railway Connectivity Project Line Under Space",
    description:
      "New railway line project approved to connect remote villages with urban centers.",
    date: "2024-01-10",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
    badge: "INFRASTRUCTURE",
  },
  {
    id: 4,
    category: "Development",
    title: "Women Empowerment Scheme Reaches Rural Areas",
    description:
      "Comprehensive skill development program for women launched in 25 villages.",
    date: "2024-01-08",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    badge: "DEVELOPMENT",
  },
];

// Function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Function to render news items
function renderNews(newsItems) {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  newsItems.forEach((item) => {
    const newsCard = document.createElement("article");
    newsCard.className =
      "news-item bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1";

    newsCard.innerHTML = `
            <div class="relative">
                <img src="${item.image}" alt="${
      item.title
    }" class="w-full h-48 object-cover">
                <div class="absolute top-4 left-4">
                    <span class="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        ${item.badge}
                    </span>
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center text-muted-foreground text-sm mb-3">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${formatDate(item.date)}
                </div>
                <h3 class="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                    ${item.title}
                </h3>
                <p class="text-muted-foreground text-sm mb-4 line-clamp-3">
                    ${item.description}
                </p>
                <a href="#" class="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm">
                    Read More
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        `;

    newsContainer.appendChild(newsCard);
  });
}

// News category filtering
document.addEventListener("DOMContentLoaded", function () {
  const categoryFilters = document.querySelectorAll(".category-filter");
  let selectedCategory = "All";

  // Initial render
  renderNews(newsData);

  categoryFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Remove active class from all filters
      categoryFilters.forEach((f) => f.classList.remove("active"));

      // Add active class to clicked filter
      this.classList.add("active");

      selectedCategory = this.getAttribute("data-category");

      // Filter news items
      const filteredNews =
        selectedCategory === "All"
          ? newsData
          : newsData.filter((item) => item.category === selectedCategory);

      renderNews(filteredNews);
    });
  });
});

// Projects section data and functionality
const projectsData = [
  {
    id: 1,
    title: "Rural Water Supply Project",
    description:
      "Comprehensive water infrastructure development for remote villages ensuring clean drinking water access.",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    location: "East Gujarat",
    timeline: "Last 5 Villages",
    statusColor: "bg-green-100 text-green-800",
    progress: "85%",
  },
  {
    id: 2,
    title: "Smart Highway Development",
    description:
      "Advanced highway infrastructure with smart traffic management and modern facilities.",
    status: "In Planning",
    image:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
    location: "East Central",
    timeline: "240+ Villages",
    statusColor: "bg-blue-100 text-blue-800",
    progress: "45%",
  },
  {
    id: 3,
    title: "Agricultural Processing Centers",
    description:
      "Modern food processing and storage facilities to support local farmers and reduce post-harvest losses.",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
    location: "Rural Districts",
    timeline: "12,000+ Farmers",
    statusColor: "bg-green-100 text-green-800",
    progress: "100%",
  },
];

// Function to render projects
function renderProjects() {
  const projectsContainer = document.getElementById("projects-container");
  projectsContainer.innerHTML = "";

  projectsData.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className =
      "project-card flex-none w-96 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1";

    projectCard.innerHTML = `
            <div class="relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex items-center justify-between">
                        <span class="px-3 py-1 rounded-full text-sm font-medium ${project.statusColor}">
                            ${project.status}
                        </span>
                        <div class="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
                            ${project.progress}
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-foreground mb-3">
                        ${project.title}
                    </h3>
                    <p class="text-muted-foreground text-sm leading-relaxed">
                        ${project.description}
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-6">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs text-muted-foreground">Location</p>
                            <p class="text-sm font-medium text-foreground">${project.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs text-muted-foreground">Impact</p>
                            <p class="text-sm font-medium text-foreground">${project.timeline}</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-3">
                    <button class="bg-gradient-primary hover:opacity-90 text-primary-foreground w-full px-6 py-2 rounded-lg font-medium transition-all">
                        View Project Details
                    </button>
                    <button class="border border-border text-foreground hover:bg-primary hover:text-primary-foreground w-full px-6 py-2 rounded-lg font-medium transition-all">
                        Track Progress
                    </button>
                </div>
            </div>
        `;

    projectsContainer.appendChild(projectCard);
  });
}

// Projects horizontal scrolling
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();

  const scrollLeftBtn = document.getElementById("scroll-left");
  const scrollRightBtn = document.getElementById("scroll-right");
  const projectsContainer = document.getElementById("projects-container");

  scrollLeftBtn.addEventListener("click", function () {
    projectsContainer.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  });

  scrollRightBtn.addEventListener("click", function () {
    projectsContainer.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  });
});

// Events section data and functionality
const eventsData = [
  {
    id: 1,
    title: "Public Grievance Day",
    description: "Open forum for citizens to voice concerns and seek solutions",
    date: "2024-02-15",
    time: "10:00 AM",
    location: "Community Center, District HQ",
    category: "PUBLIC",
    categoryColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    title: "Rural Development Review",
    description: "Assessment meeting for ongoing rural infrastructure projects",
    date: "2024-02-18",
    time: "2:00 PM",
    location: "Village Panchayat Office",
    category: "DEVELOPMENT",
    categoryColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    title: "Farmer's Self-Help Group Meet",
    description: "Discussion on agricultural schemes and support programs",
    date: "2024-02-22",
    time: "11:00 AM",
    location: "Agricultural Training Center",
    category: "AGRICULTURE",
    categoryColor: "bg-orange-100 text-orange-800",
  },
];

// Function to render events
function renderEvents() {
  const eventsContainer = document.getElementById("events-container");
  eventsContainer.innerHTML = "";

  eventsData.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.className =
      "event-card bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border border-border";

    const eventDate = new Date(event.date);
    const dayMonth = eventDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const fullDate = eventDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    eventCard.innerHTML = `
            <div class="flex items-start justify-between mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium ${event.categoryColor}">
                    ${event.category}
                </span>
                <div class="text-right">
                    <div class="text-sm text-muted-foreground">${dayMonth}</div>
                    <div class="text-xs text-muted-foreground">${event.time}</div>
                </div>
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-3">
                ${event.title}
            </h3>
            <p class="text-muted-foreground mb-4 line-clamp-2">
                ${event.description}
            </p>
            <div class="space-y-2">
                <div class="flex items-center text-sm text-muted-foreground">
                    <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${fullDate}
                </div>
                <div class="flex items-center text-sm text-muted-foreground">
                    <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    ${event.time}
                </div>
                <div class="flex items-center text-sm text-muted-foreground">
                    <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    ${event.location}
                </div>
            </div>
            <button class="border border-border text-foreground hover:bg-primary hover:text-primary-foreground w-full mt-6 px-6 py-2 rounded-lg font-medium transition-all">
                Learn More
            </button>
        `;

    eventsContainer.appendChild(eventCard);
  });
}

// Newsletter subscription functionality
document.addEventListener("DOMContentLoaded", function () {
  renderEvents();

  const newsletterForm = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("newsletter-email");
  const subscribeText = document.getElementById("subscribe-text");
  const subscriptionMessage = document.getElementById("subscription-message");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) return;

    // Show loading state
    subscribeText.textContent = "Subscribing...";
    newsletterForm.classList.add("loading");

    // Simulate API call
    setTimeout(() => {
      // Reset form
      emailInput.value = "";
      subscribeText.textContent = "Subscribe";
      newsletterForm.classList.remove("loading");

      // Show success message
      subscriptionMessage.classList.remove("hidden");

      // Hide success message after 3 seconds
      setTimeout(() => {
        subscriptionMessage.classList.add("hidden");
      }, 3000);
    }, 1500);
  });
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Add intersection observer for animations
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
    ".news-item, .project-card, .event-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});
