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

// Suggestion Form Functionality
document.addEventListener("DOMContentLoaded", function () {
  const suggestionForm = document.getElementById("suggestion-form");
  const successMessage = document.getElementById("suggestion-success");
  const trackingIdSpan = document.getElementById("tracking-id");

  // Sample suggestions data for demonstration
  const suggestionsDatabase = {};

  if (suggestionForm) {
    suggestionForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Generate unique tracking ID
      const trackingId = "SG" + Date.now().toString().slice(-8);
      
      // Get form data
      const formData = {
        name: document.getElementById("suggester-name").value,
        email: document.getElementById("suggester-email").value,
        phone: document.getElementById("suggester-phone").value,
        category: document.getElementById("suggestion-category").value,
        subject: document.getElementById("suggestion-subject").value,
        details: document.getElementById("suggestion-details").value,
        priority: document.getElementById("suggestion-priority").value,
        date: new Date().toLocaleDateString(),
        status: "Under Review"
      };

      // Store in mock database
      suggestionsDatabase[trackingId] = formData;
      
      // Store in localStorage for persistence
      localStorage.setItem("suggestions", JSON.stringify(suggestionsDatabase));

      // Show success message with tracking ID
      trackingIdSpan.textContent = trackingId;
      successMessage.classList.remove("hidden");

      // Reset form
      suggestionForm.reset();

      // Hide success message after 10 seconds
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 10000);

      // Update recent suggestions display
      displayRecentSuggestions();
    });
  }

  // Tracking functionality
  const trackBtn = document.getElementById("track-btn");
  const trackingSearch = document.getElementById("tracking-search");
  const trackingResult = document.getElementById("tracking-result");
  const suggestionInfo = document.getElementById("suggestion-info");

  if (trackBtn) {
    trackBtn.addEventListener("click", function () {
      const trackingId = trackingSearch.value.trim();
      if (!trackingId) return;

      // Load suggestions from localStorage
      const stored = localStorage.getItem("suggestions");
      const suggestions = stored ? JSON.parse(stored) : {};

      if (suggestions[trackingId]) {
        const suggestion = suggestions[trackingId];
        suggestionInfo.innerHTML = `
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h5 class="font-semibold text-foreground">${suggestion.subject}</h5>
              <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">${suggestion.status}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p class="text-muted-foreground">Submitted by:</p>
                <p class="font-medium">${suggestion.name}</p>
              </div>
              <div>
                <p class="text-muted-foreground">Date:</p>
                <p class="font-medium">${suggestion.date}</p>
              </div>
              <div>
                <p class="text-muted-foreground">Category:</p>
                <p class="font-medium capitalize">${suggestion.category}</p>
              </div>
              <div>
                <p class="text-muted-foreground">Priority:</p>
                <p class="font-medium capitalize">${suggestion.priority}</p>
              </div>
            </div>
            <div>
              <p class="text-muted-foreground">Details:</p>
              <p class="text-sm mt-1">${suggestion.details}</p>
            </div>
            <div class="bg-blue-50 p-3 rounded-lg">
              <p class="text-blue-800 text-sm">
                <strong>Status Update:</strong> Your suggestion has been received and is currently under review by our team. We will update you within 7-10 business days.
              </p>
            </div>
          </div>
        `;
        trackingResult.classList.remove("hidden");
      } else {
        suggestionInfo.innerHTML = `
          <div class="text-center py-4">
            <p class="text-red-600">No suggestion found with tracking ID: ${trackingId}</p>
            <p class="text-muted-foreground text-sm mt-2">Please check the ID and try again.</p>
          </div>
        `;
        trackingResult.classList.remove("hidden");
      }
    });
  }

  // Display recent suggestions
  function displayRecentSuggestions() {
    const recentContainer = document.getElementById("recent-suggestions");
    if (!recentContainer) return;

    const stored = localStorage.getItem("suggestions");
    const suggestions = stored ? JSON.parse(stored) : {};
    
    const recentSuggestions = Object.entries(suggestions)
      .sort((a, b) => new Date(b[1].date) - new Date(a[1].date))
      .slice(0, 3);

    if (recentSuggestions.length === 0) {
      recentContainer.innerHTML = `
        <div class="text-center py-8">
          <p class="text-muted-foreground">No recent suggestions to display.</p>
        </div>
      `;
      return;
    }

    recentContainer.innerHTML = recentSuggestions.map(([id, suggestion]) => `
      <div class="border border-border rounded-lg p-4">
        <div class="flex items-start justify-between mb-2">
          <h4 class="font-medium text-foreground">${suggestion.subject}</h4>
          <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">${suggestion.status}</span>
        </div>
        <p class="text-sm text-muted-foreground mb-2">${suggestion.details.substring(0, 100)}${suggestion.details.length > 100 ? '...' : ''}</p>
        <div class="flex items-center justify-between text-xs text-muted-foreground">
          <span>Category: ${suggestion.category}</span>
          <span>${suggestion.date}</span>
        </div>
      </div>
    `).join('');
  }

  // Initialize recent suggestions display
  displayRecentSuggestions();
});

// Polling Functionality
document.addEventListener("DOMContentLoaded", function () {
  const pollOptions = document.querySelectorAll('.poll-option');
  const voteBtn = document.getElementById('vote-btn');
  const totalVotesSpan = document.getElementById('total-votes');
  
  let selectedOption = null;
  let hasVoted = localStorage.getItem('hasVoted') === 'true';

  // Poll data
  const pollData = {
    roads: { votes: 562, percentage: 45 },
    water: { votes: 400, percentage: 32 },
    electricity: { votes: 285, percentage: 23 }
  };

  // Check if user has already voted
  if (hasVoted) {
    voteBtn.textContent = 'Already Voted';
    voteBtn.disabled = true;
    voteBtn.classList.add('opacity-50', 'cursor-not-allowed');
  }

  // Handle option selection
  pollOptions.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');
    
    option.addEventListener('click', function() {
      if (hasVoted) return;
      
      radio.checked = true;
      selectedOption = radio.value;
      
      // Update visual selection
      pollOptions.forEach(opt => {
        opt.classList.remove('bg-primary/10', 'border-primary');
      });
      this.classList.add('bg-primary/10', 'border-primary');
    });
  });

  // Handle voting
  if (voteBtn && !hasVoted) {
    voteBtn.addEventListener('click', function() {
      if (!selectedOption) {
        alert('Please select an option before voting.');
        return;
      }

      // Update vote count
      pollData[selectedOption].votes += 1;
      
      // Recalculate percentages
      const totalVotes = Object.values(pollData).reduce((sum, option) => sum + option.votes, 0);
      
      Object.keys(pollData).forEach(key => {
        pollData[key].percentage = Math.round((pollData[key].votes / totalVotes) * 100);
      });

      // Update UI
      updatePollResults();
      
      // Mark as voted
      hasVoted = true;
      localStorage.setItem('hasVoted', 'true');
      
      // Update button
      voteBtn.textContent = 'Vote Submitted!';
      voteBtn.disabled = true;
      voteBtn.classList.add('opacity-50', 'cursor-not-allowed');

      // Show thank you message
      setTimeout(() => {
        voteBtn.textContent = 'Thank You!';
      }, 2000);
    });
  }

  function updatePollResults() {
    const totalVotes = Object.values(pollData).reduce((sum, option) => sum + option.votes, 0);
    totalVotesSpan.textContent = totalVotes.toLocaleString();

    pollOptions.forEach(option => {
      const optionKey = option.getAttribute('data-option');
      const percentage = pollData[optionKey].percentage;
      
      const percentageSpan = option.querySelector('.poll-percentage');
      const progressBar = option.querySelector('.poll-progress');
      
      percentageSpan.textContent = percentage + '%';
      progressBar.style.width = percentage + '%';
    });
  }

  // Initialize poll results
  updatePollResults();
});

// RSVP Functionality
document.addEventListener("DOMContentLoaded", function () {
  const rsvpForm = document.getElementById("rsvp-form");

  if (rsvpForm) {
    rsvpForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById("rsvp-name").value,
        email: document.getElementById("rsvp-email").value,
        phone: document.getElementById("rsvp-phone").value,
        attendees: document.getElementById("rsvp-attendees").value,
        topics: document.getElementById("rsvp-topics").value,
        eventId: "town-hall-march-25-2024",
        confirmationId: "TH" + Date.now().toString().slice(-8)
      };

      // Store RSVP in localStorage
      const existingRSVPs = JSON.parse(localStorage.getItem("rsvps") || "[]");
      existingRSVPs.push(formData);
      localStorage.setItem("rsvps", JSON.stringify(existingRSVPs));

      // Show success message
      const successHtml = `
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
          <div class="flex">
            <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
            <div>
              <h4 class="font-semibold">RSVP Confirmed!</h4>
              <p class="text-sm">Confirmation ID: ${formData.confirmationId}</p>
              <p class="text-sm">You will receive an email confirmation shortly.</p>
            </div>
          </div>
        </div>
      `;
      
      rsvpForm.outerHTML = successHtml;
    });
  }
});

// Community Group Join Functionality
document.addEventListener("DOMContentLoaded", function () {
  const joinButtons = document.querySelectorAll('button:contains("Join")');
  
  joinButtons.forEach(button => {
    if (button.textContent.includes('Join')) {
      button.addEventListener('click', function() {
        const groupName = this.closest('.border').querySelector('h4').textContent;
        
        // Simulate joining group
        this.textContent = 'Joining...';
        this.disabled = true;
        
        setTimeout(() => {
          this.textContent = 'Joined ✓';
          this.classList.remove('hover:bg-green-700', 'hover:bg-blue-700', 'hover:bg-blue-800');
          this.classList.add('bg-green-600', 'cursor-not-allowed');
          
          // Show success message
          const successMessage = document.createElement('div');
          successMessage.className = 'mt-2 p-2 bg-green-100 text-green-800 rounded text-sm';
          successMessage.textContent = `Successfully joined ${groupName}!`;
          this.parentNode.appendChild(successMessage);
          
          // Remove success message after 3 seconds
          setTimeout(() => {
            successMessage.remove();
          }, 3000);
        }, 1500);
      });
    }
  });
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
    "section > div > div, .bg-card"
  );
  
  animatedElements.forEach((el) => {
    if (!el.classList.contains('no-animate')) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    }
  });
});

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

// Real-time poll updates simulation
document.addEventListener("DOMContentLoaded", function () {
  // Simulate real-time updates every 30 seconds
  setInterval(() => {
    const pollOptions = document.querySelectorAll('.poll-option');
    const hasVoted = localStorage.getItem('hasVoted') === 'true';
    
    if (!hasVoted) {
      // Simulate small vote increases
      pollOptions.forEach(option => {
        const percentageSpan = option.querySelector('.poll-percentage');
        const progressBar = option.querySelector('.poll-progress');
        
        if (Math.random() > 0.7) { // 30% chance of update
          const currentPercentage = parseInt(percentageSpan.textContent);
          const newPercentage = Math.min(currentPercentage + Math.floor(Math.random() * 3), 100);
          
          percentageSpan.textContent = newPercentage + '%';
          progressBar.style.width = newPercentage + '%';
        }
      });
      
      // Update total votes
      const totalVotesSpan = document.getElementById('total-votes');
      if (totalVotesSpan && Math.random() > 0.8) {
        const current = parseInt(totalVotesSpan.textContent.replace(',', ''));
        const increase = Math.floor(Math.random() * 10) + 1;
        totalVotesSpan.textContent = (current + increase).toLocaleString();
      }
    }
  }, 30000);
});