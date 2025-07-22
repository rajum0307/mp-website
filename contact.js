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

// FAQ Data
const faqData = [
  {
    id: 1,
    category: "appointments",
    question: "How can I book an appointment with Sri Bharat?",
    answer: "You can book an appointment through our online booking system on this page, call our office directly, or visit in person during office hours. Online booking is the fastest method and provides instant confirmation."
  },
  {
    id: 2,
    category: "office-hours",
    question: "What are the office hours for the constituency office?",
    answer: "Our constituency office is open Monday-Saturday from 9:00 AM to 6:00 PM, and Sunday from 10:00 AM to 2:00 PM. For urgent matters, we have a 24/7 emergency contact line."
  },
  {
    id: 3,
    category: "services",
    question: "What types of assistance can I get from the office?",
    answer: "We provide assistance with government documentation, grievance resolution, development project inquiries, social welfare schemes, educational scholarships, healthcare support, and other constituency-related matters."
  },
  {
    id: 4,
    category: "emergency",
    question: "How do I contact the office in case of an emergency?",
    answer: "For emergencies requiring immediate attention, call our 24/7 emergency line at +91 9876543200 or email emergency@sribharat.gov.in. Emergency cases are prioritized and receive responses within 2 hours."
  },
  {
    id: 5,
    category: "documentation",
    question: "What documents do I need to bring for my appointment?",
    answer: "Please bring a valid government-issued photo ID (Aadhaar, Voter ID, Passport, or Driving License). Depending on your inquiry, you may also need relevant supporting documents. We'll inform you of specific requirements when confirming your appointment."
  },
  {
    id: 6,
    category: "grievances",
    question: "How are grievances and complaints handled?",
    answer: "All grievances are assigned a tracking ID and handled based on priority level. You'll receive acknowledgment within 24 hours and regular updates on progress. We follow up until resolution is achieved."
  },
  {
    id: 7,
    category: "parliament",
    question: "Can I visit the Parliament office in New Delhi?",
    answer: "Yes, but Parliament office visits require advance appointment booking and security clearance. The office operates only during Parliament sessions. Please book at least 3-5 days in advance."
  },
  {
    id: 8,
    category: "response-time",
    question: "How long does it take to get a response to my inquiry?",
    answer: "Response times vary by priority: Urgent (2 hours), High (8 hours), Medium (24 hours), Low (72 hours). Complex matters may take longer, but we provide regular status updates."
  },
  {
    id: 9,
    category: "schemes",
    question: "How can I get information about government schemes and benefits?",
    answer: "Our office provides comprehensive information about all applicable government schemes. You can visit during office hours, call our helpline, or request information through our contact form. We also conduct regular awareness programs."
  },
  {
    id: 10,
    category: "accessibility",
    question: "Is the office accessible for differently-abled individuals?",
    answer: "Yes, both our offices are fully accessible with ramps, elevators, accessible restrooms, and dedicated parking spaces. We also provide assistance and priority scheduling for differently-abled visitors."
  }
];

// Set minimum date for appointment booking (today)
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("apt-date");
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    // Set maximum date to 30 days from today
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    dateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
  }
});

// Appointment Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const appointmentForm = document.getElementById("appointment-form");
  const successMessage = document.getElementById("appointment-success");
  const appointmentIdSpan = document.getElementById("appointment-id");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Generate unique appointment ID
      const appointmentId = "APT" + Date.now().toString().slice(-8);
      
      // Get form data
      const formData = {
        firstName: document.getElementById("apt-first-name").value,
        lastName: document.getElementById("apt-last-name").value,
        email: document.getElementById("apt-email").value,
        phone: document.getElementById("apt-phone").value,
        office: document.getElementById("apt-office").value,
        type: document.getElementById("apt-type").value,
        date: document.getElementById("apt-date").value,
        time: document.getElementById("apt-time").value,
        priority: document.getElementById("apt-priority").value,
        subject: document.getElementById("apt-subject").value,
        description: document.getElementById("apt-description").value,
        timestamp: new Date().toISOString(),
        status: "Pending Confirmation"
      };

      // Store in localStorage
      const existingAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
      existingAppointments.push({ id: appointmentId, ...formData });
      localStorage.setItem("appointments", JSON.stringify(existingAppointments));

      // Show success message
      appointmentIdSpan.textContent = appointmentId;
      successMessage.classList.remove("hidden");
      appointmentForm.reset();

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Hide success message after 10 seconds
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 10000);
    });
  }
});

// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form-main");
  const contactSuccess = document.getElementById("contact-success");
  const contactIdSpan = document.getElementById("contact-id");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Generate unique contact ID
      const contactId = "MSG" + Date.now().toString().slice(-8);
      
      // Get form data
      const formData = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        phone: document.getElementById("contact-phone").value,
        priority: document.getElementById("contact-priority").value,
        category: document.getElementById("contact-category").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value,
        timestamp: new Date().toISOString(),
        status: "Received"
      };

      // Store in localStorage
      const existingMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      existingMessages.push({ id: contactId, ...formData });
      localStorage.setItem("contactMessages", JSON.stringify(existingMessages));

      // Show success message
      contactIdSpan.textContent = contactId;
      contactSuccess.classList.remove("hidden");
      contactForm.reset();

      // Scroll to success message
      contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Hide success message after 10 seconds
      setTimeout(() => {
        contactSuccess.classList.add("hidden");
      }, 10000);
    });
  }
});

// FAQ Functionality
document.addEventListener("DOMContentLoaded", function () {
  const faqContainer = document.getElementById("faq-container");
  const faqSearch = document.getElementById("faq-search");
  
  let currentSearchTerm = "";

  function renderFAQ(faqs = faqData) {
    if (!faqContainer) return;

    if (faqs.length === 0) {
      faqContainer.innerHTML = `
        <div class="text-center py-8">
          <p class="text-muted-foreground">No FAQs found matching your search.</p>
        </div>
      `;
      return;
    }

    faqContainer.innerHTML = faqs.map((faq, index) => `
      <div class="faq-item border border-border rounded-lg">
        <button class="faq-question w-full text-left p-4 hover:bg-secondary/50 transition-colors flex items-center justify-between" data-faq="${faq.id}">
          <span class="font-medium text-foreground pr-4">${faq.question}</span>
          <svg class="w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div class="faq-answer hidden p-4 pt-0 text-muted-foreground leading-relaxed">
          ${faq.answer}
        </div>
      </div>
    `).join('');

    // Add click handlers for FAQ items
    const faqQuestions = faqContainer.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('svg');
        const isOpen = !answer.classList.contains('hidden');

        // Close all other FAQ items
        faqContainer.querySelectorAll('.faq-answer').forEach(otherAnswer => {
          otherAnswer.classList.add('hidden');
        });
        faqContainer.querySelectorAll('.faq-question svg').forEach(otherIcon => {
          otherIcon.style.transform = 'rotate(0deg)';
        });

        // Toggle current item
        if (isOpen) {
          answer.classList.add('hidden');
          icon.style.transform = 'rotate(0deg)';
        } else {
          answer.classList.remove('hidden');
          icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  // Search functionality
  if (faqSearch) {
    faqSearch.addEventListener('input', function() {
      currentSearchTerm = this.value.toLowerCase().trim();
      
      if (currentSearchTerm === '') {
        renderFAQ();
        return;
      }

      const filteredFAQs = faqData.filter(faq => 
        faq.question.toLowerCase().includes(currentSearchTerm) ||
        faq.answer.toLowerCase().includes(currentSearchTerm) ||
        faq.category.toLowerCase().includes(currentSearchTerm)
      );

      renderFAQ(filteredFAQs);
    });
  }

  // Initial render
  renderFAQ();
});

// Quick Contact Button Functionality
document.addEventListener("DOMContentLoaded", function () {
  const quickContactButtons = document.querySelectorAll('button:contains("WhatsApp"), button:contains("Call"), button:contains("Email")');
  
  quickContactButtons.forEach(button => {
    if (button.textContent.includes('WhatsApp')) {
      button.addEventListener('click', function() {
        const message = encodeURIComponent("Hello, I would like to schedule an appointment or get assistance. Please guide me through the process.");
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
      });
    } else if (button.textContent.includes('Call')) {
      button.addEventListener('click', function() {
        window.location.href = 'tel:+919876543210';
      });
    } else if (button.textContent.includes('Email')) {
      button.addEventListener('click', function() {
        const subject = encodeURIComponent("Inquiry/Assistance Request");
        const body = encodeURIComponent("Dear Sir/Madam,\n\nI would like to request assistance/information regarding:\n\n[Please describe your inquiry]\n\nThank you for your time and consideration.\n\nBest regards,");
        window.location.href = `mailto:office@sribharat.gov.in?subject=${subject}&body=${body}`;
      });
    }
  });
});

// Form Validation Enhancement
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });
      
      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateField(this);
        }
      });
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error', 'border-red-500');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    }
    // Email validation
    else if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }
    // Phone validation
    else if (type === 'tel' && value) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }
    // Date validation (not in the past for appointments)
    else if (type === 'date' && value && field.id === 'apt-date') {
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        isValid = false;
        errorMessage = 'Please select a future date';
      }
    }

    if (!isValid) {
      field.classList.add('error', 'border-red-500');
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message text-red-600 text-sm mt-1';
      errorDiv.textContent = errorMessage;
      field.parentNode.appendChild(errorDiv);
    }

    return isValid;
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
    ".bg-card, section > div > div"
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

// Auto-fill form based on localStorage (for returning users)
document.addEventListener("DOMContentLoaded", function () {
  const savedUserData = localStorage.getItem("userData");
  if (savedUserData) {
    const userData = JSON.parse(savedUserData);
    
    // Auto-fill appointment form
    const appointmentInputs = {
      "apt-first-name": userData.firstName,
      "apt-last-name": userData.lastName,
      "apt-email": userData.email,
      "apt-phone": userData.phone
    };

    // Auto-fill contact form
    const contactInputs = {
      "contact-name": `${userData.firstName} ${userData.lastName}`,
      "contact-email": userData.email,
      "contact-phone": userData.phone
    };

    Object.entries(appointmentInputs).forEach(([id, value]) => {
      const input = document.getElementById(id);
      if (input && value) {
        input.value = value;
      }
    });

    Object.entries(contactInputs).forEach(([id, value]) => {
      const input = document.getElementById(id);
      if (input && value) {
        input.value = value;
      }
    });
  }

  // Save user data when forms are submitted
  const forms = document.querySelectorAll('#appointment-form, #contact-form-main');
  forms.forEach(form => {
    form.addEventListener('submit', function() {
      const formData = new FormData(this);
      const userData = {
        firstName: formData.get('apt-first-name') || formData.get('contact-name')?.split(' ')[0],
        lastName: formData.get('apt-last-name') || formData.get('contact-name')?.split(' ').slice(1).join(' '),
        email: formData.get('apt-email') || formData.get('contact-email'),
        phone: formData.get('apt-phone') || formData.get('contact-phone')
      };

      if (userData.email) {
        localStorage.setItem("userData", JSON.stringify(userData));
      }
    });
  });
});