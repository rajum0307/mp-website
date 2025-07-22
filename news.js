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

// News data
const newsData = [
  {
    id: 1,
    title: "ICU Care Healthcare Unit Equipped Approved",
    excerpt: "State-of-the-art ICU facilities have been approved for the district hospital, enhancing emergency medical care capabilities across the region.",
    category: "healthcare",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    date: "2024-03-15",
    author: "Press Office",
    readTime: "3 min read",
    tags: ["Healthcare", "Infrastructure", "Emergency Care"]
  },
  {
    id: 2,
    title: "Digital Education Initiative Launch Event",
    excerpt: "Revolutionary digital learning program launched in 50+ schools across the constituency, providing students with modern technology access.",
    category: "education",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
    date: "2024-03-12",
    author: "Education Dept",
    readTime: "4 min read",
    tags: ["Education", "Technology", "Digital Literacy"]
  },
  {
    id: 3,
    title: "Railway Connectivity Project Line Under Development",
    excerpt: "New railway line project approved to connect remote villages with urban centers, improving transportation and economic opportunities.",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop",
    date: "2024-03-10",
    author: "Transport Ministry",
    readTime: "5 min read",
    tags: ["Infrastructure", "Transportation", "Rural Development"]
  },
  {
    id: 4,
    title: "Sustainable Agriculture Program Expansion",
    excerpt: "Comprehensive agricultural support program expanded to include 1000+ farmers with modern farming techniques and subsidies.",
    category: "agriculture",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    date: "2024-03-08",
    author: "Agriculture Dept",
    readTime: "6 min read",
    tags: ["Agriculture", "Sustainability", "Farmer Welfare"]
  },
  {
    id: 5,
    title: "Women Empowerment Scheme Reaches Rural Areas",
    excerpt: "Comprehensive skill development program for women launched in 25 villages, focusing on entrepreneurship and financial independence.",
    category: "social",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop",
    date: "2024-03-05",
    author: "Social Welfare",
    readTime: "4 min read",
    tags: ["Social Welfare", "Women Empowerment", "Skill Development"]
  },
  {
    id: 6,
    title: "Water Supply Infrastructure Upgrade Complete",
    excerpt: "Major water supply network upgrade completed, providing clean drinking water access to 50,000+ residents in remote areas.",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    date: "2024-03-03",
    author: "Water Resources",
    readTime: "3 min read",
    tags: ["Infrastructure", "Water Supply", "Public Health"]
  }
];

let currentPage = 1;
const itemsPerPage = 6;
let filteredNews = [...newsData];

// Format date function
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Create news card HTML
function createNewsCard(item) {
  return `
    <article class="news-card bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1" data-category="${item.category}">
      <div class="relative">
        <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
        <div class="absolute top-4 left-4">
          <span class="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium uppercase">
            ${item.category}
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
          <span class="mx-2">•</span>
          <span>${item.readTime}</span>
        </div>
        <h3 class="text-lg font-semibold text-foreground mb-3 line-clamp-2 hover:text-primary cursor-pointer transition-colors">
          ${item.title}
        </h3>
        <p class="text-muted-foreground text-sm mb-4 line-clamp-3">
          ${item.excerpt}
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span class="text-primary-foreground text-xs font-bold">${item.author.charAt(0)}</span>
            </div>
            <span class="text-muted-foreground text-sm">${item.author}</span>
          </div>
          <button class="text-primary hover:text-primary/80 font-medium text-sm flex items-center space-x-1">
            <span>Read More</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div class="flex flex-wrap gap-2 mt-4">
          ${item.tags.map(tag => `<span class="bg-secondary text-muted-foreground px-2 py-1 rounded-full text-xs">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

// Render news function
function renderNews(page = 1) {
  const newsContainer = document.getElementById("news-container");
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const newsToShow = filteredNews.slice(0, endIndex);
  
  if (page === 1) {
    newsContainer.innerHTML = "";
  }
  
  const newItems = filteredNews.slice(startIndex, endIndex);
  newItems.forEach((item) => {
    newsContainer.innerHTML += createNewsCard(item);
  });

  // Update load more button
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (endIndex >= filteredNews.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

// Category filtering
document.addEventListener("DOMContentLoaded", function () {
  const categoryFilters = document.querySelectorAll(".category-filter");
  
  // Initial render
  renderNews();

  categoryFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Remove active class from all filters
      categoryFilters.forEach((f) => f.classList.remove("active"));

      // Add active class to clicked filter
      this.classList.add("active");

      const selectedCategory = this.getAttribute("data-category");

      // Filter news items
      if (selectedCategory === "all") {
        filteredNews = [...newsData];
      } else {
        filteredNews = newsData.filter((item) => item.category === selectedCategory);
      }

      // Reset pagination and render
      currentPage = 1;
      renderNews(1);
    });
  });

  // Load more functionality
  const loadMoreBtn = document.getElementById("load-more-btn");
  loadMoreBtn.addEventListener("click", function () {
    currentPage++;
    renderNews(currentPage);
  });
});

// Search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInputs = [
    document.getElementById("search-input"),
    document.getElementById("mobile-search-input")
  ];

  function performSearch(query) {
    if (!query.trim()) {
      filteredNews = [...newsData];
    } else {
      const searchTerm = query.toLowerCase();
      filteredNews = newsData.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.excerpt.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }
    
    // Reset category filters
    document.querySelectorAll(".category-filter").forEach(filter => {
      filter.classList.remove("active");
    });
    document.querySelector('.category-filter[data-category="all"]').classList.add("active");
    
    // Reset pagination and render
    currentPage = 1;
    renderNews(1);
  }

  searchInputs.forEach(input => {
    if (input) {
      // Real-time search as user types
      input.addEventListener("input", function () {
        const query = this.value;
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
          performSearch(query);
        }, 300);
      });

      // Search on Enter key
      input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          clearTimeout(this.searchTimeout);
          performSearch(this.value);
        }
      });
    }
  });
});

// Newsletter subscription
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("newsletter-email");
  const subscribeText = document.getElementById("subscribe-text");
  const subscriptionMessage = document.getElementById("subscription-message");

  if (newsletterForm) {
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
  }
});

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
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
    ".news-card, section > div > div"
  );
  
  animatedElements.forEach((el) => {
    if (!el.classList.contains('no-animate')) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
      
      // Fallback
      setTimeout(() => {
        if (el.style.opacity === "0") {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      }, 2000);
    }
  });
});

// RSS Feed functionality (placeholder)
function generateRSSFeed() {
  const rssItems = newsData.map(item => `
    <item>
      <title>${item.title}</title>
      <description>${item.excerpt}</description>
      <link>https://sribharat.gov.in/news/${item.id}</link>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <category>${item.category}</category>
    </item>
  `).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Sri Bharat - News & Updates</title>
    <description>Latest news and updates from Sri Bharat's office</description>
    <link>https://sribharat.gov.in</link>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`;

  return rssFeed;
}

// Social media sharing functionality
function shareArticle(title, url) {
  const shareText = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    whatsapp: `https://wa.me/?text=${shareText}%20${shareUrl}`
  };
}

// Add scroll-to-top functionality
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  `;
  scrollToTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-elegant hover:opacity-90 transition-all duration-300 z-50 hidden';
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
  
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.remove('hidden');
    } else {
      scrollToTopBtn.classList.add('hidden');
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});