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

// Volunteer opportunities data
const opportunitiesData = [
  {
    id: 1,
    title: "Community Health Educator",
    category: "Healthcare",
    type: "Regular",
    timeCommitment: "4-6 hours/week",
    location: "Various Villages",
    description: "Help educate communities about preventive healthcare, hygiene practices, and government health schemes.",
    requirements: [
      "Basic knowledge of health and hygiene",
      "Good communication skills",
      "Ability to work with diverse communities",
      "Willingness to travel to rural areas"
    ],
    benefits: [
      "Health education training provided",
      "Travel allowance",
      "Certificate of appreciation",
      "Networking opportunities"
    ],
    urgency: "high",
    positions: 15,
    filled: 8
  },
  {
    id: 2,
    title: "Digital Literacy Trainer",
    category: "Education",
    type: "Project-based",
    timeCommitment: "6-8 hours/week",
    location: "Community Centers",
    description: "Teach basic computer skills and digital literacy to adults and senior citizens in community centers.",
    requirements: [
      "Proficiency in computers and smartphones",
      "Patience and teaching ability",
      "Basic knowledge of government digital services",
      "Fluency in local language"
    ],
    benefits: [
      "Training materials provided",
      "Skill development certificate",
      "Flexible scheduling",
      "Recognition events"
    ],
    urgency: "medium",
    positions: 10,
    filled: 6
  },
  {
    id: 3,
    title: "Event Coordinator",
    category: "Events",
    type: "Occasional",
    timeCommitment: "Variable",
    location: "Multiple Venues",
    description: "Assist in organizing and managing community events, town halls, and public meetings.",
    requirements: [
      "Event management experience preferred",
      "Strong organizational skills",
      "Ability to work under pressure",
      "Good interpersonal skills"
    ],
    benefits: [
      "Event management training",
      "Leadership development",
      "Networking opportunities",
      "Reference letters"
    ],
    urgency: "medium",
    positions: 8,
    filled: 5
  },
  {
    id: 4,
    title: "Youth Mentor",
    category: "Youth Development",
    type: "Regular",
    timeCommitment: "3-5 hours/week",
    location: "Schools & Youth Centers",
    description: "Mentor young people in career guidance, skill development, and personal growth.",
    requirements: [
      "Experience working with youth",
      "Strong communication skills",
      "Positive role model",
      "Background verification required"
    ],
    benefits: [
      "Mentorship training program",
      "Personal development workshops",
      "Youth leadership certification",
      "Community recognition"
    ],
    urgency: "high",
    positions: 12,
    filled: 9
  },
  {
    id: 5,
    title: "Environmental Awareness Volunteer",
    category: "Environment",
    type: "Regular",
    timeCommitment: "2-4 hours/week",
    location: "Community Areas",
    description: "Promote environmental awareness, organize clean-up drives, and educate about sustainable practices.",
    requirements: [
      "Passion for environmental conservation",
      "Physical fitness for outdoor activities",
      "Basic knowledge of environmental issues",
      "Ability to motivate others"
    ],
    benefits: [
      "Environmental training workshops",
      "Green certification",
      "Outdoor activity participation",
      "Environmental impact reports"
    ],
    urgency: "medium",
    positions: 20,
    filled: 12
  },
  {
    id: 6,
    title: "Senior Citizen Support Volunteer",
    category: "Elderly Care",
    type: "Regular",
    timeCommitment: "3-4 hours/week",
    location: "Senior Centers & Homes",
    description: "Provide companionship and assistance to elderly citizens, help with technology, and organize activities.",
    requirements: [
      "Patience and empathy",
      "Good listening skills",
      "Respect for elderly individuals",
      "Basic first aid knowledge preferred"
    ],
    benefits: [
      "Elderly care training",
      "First aid certification",
      "Emotional fulfillment",
      "Intergenerational learning"
    ],
    urgency: "high",
    positions: 10,
    filled: 7
  }
];

// Training programs data
const trainingData = [
  {
    id: 1,
    title: "Volunteer Orientation Program",
    duration: "1 Day",
    type: "Mandatory",
    schedule: "Every 2nd Saturday",
    nextDate: "2024-04-13",
    description: "Comprehensive introduction to volunteer roles, responsibilities, and organizational values.",
    topics: [
      "Organization mission and values",
      "Volunteer code of conduct",
      "Communication protocols",
      "Safety guidelines",
      "Resource access and support"
    ],
    prerequisites: "None",
    certificate: true
  },
  {
    id: 2,
    title: "Community Engagement Skills",
    duration: "2 Days",
    type: "Recommended",
    schedule: "Monthly",
    nextDate: "2024-04-20",
    description: "Develop effective communication and engagement skills for working with diverse communities.",
    topics: [
      "Cultural sensitivity training",
      "Effective communication techniques",
      "Conflict resolution basics",
      "Community needs assessment",
      "Feedback collection methods"
    ],
    prerequisites: "Volunteer Orientation",
    certificate: true
  },
  {
    id: 3,
    title: "Digital Literacy Training",
    duration: "3 Days",
    type: "Specialized",
    schedule: "Quarterly",
    nextDate: "2024-05-15",
    description: "Learn to teach digital skills and help community members navigate technology.",
    topics: [
      "Basic computer operations",
      "Smartphone usage training",
      "Government digital services",
      "Online safety and security",
      "Teaching methodology for adults"
    ],
    prerequisites: "Basic computer knowledge",
    certificate: true
  },
  {
    id: 4,
    title: "Health & Wellness Education",
    duration: "2 Days",
    type: "Specialized",
    schedule: "Bi-monthly",
    nextDate: "2024-04-27",
    description: "Training to become a community health educator and wellness advocate.",
    topics: [
      "Basic health and hygiene",
      "Preventive healthcare measures",
      "Government health schemes",
      "First aid basics",
      "Health awareness campaign planning"
    ],
    prerequisites: "Volunteer Orientation",
    certificate: true
  }
];

// Recognition data
const recognitionData = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Community Health Educator",
    achievement: "Volunteer of the Month - March 2024",
    description: "Conducted health awareness sessions in 15 villages, reaching over 2,000 community members.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    hours: 120,
    impact: "2,000+ people educated"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Digital Literacy Trainer",
    achievement: "Outstanding Service Award 2024",
    description: "Trained 500+ senior citizens in digital literacy and government online services.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    hours: 200,
    impact: "500+ seniors trained"
  },
  {
    id: 3,
    name: "Meera Patel",
    role: "Youth Mentor",
    achievement: "Community Impact Champion",
    description: "Mentored 50+ youth in career development and helped 25 secure employment.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    hours: 180,
    impact: "25 youth employed"
  }
];

// Set date constraints for DOB
document.addEventListener("DOMContentLoaded", function () {
  const dobInput = document.getElementById("vol-dob");
  if (dobInput) {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate());
    
    dobInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
    dobInput.setAttribute('min', minDate.toISOString().split('T')[0]);
  }
});

// Volunteer form submission
document.addEventListener("DOMContentLoaded", function () {
  const volunteerForm = document.getElementById("volunteer-form");
  const successMessage = document.getElementById("volunteer-success");
  const volunteerIdSpan = document.getElementById("volunteer-id");

  if (volunteerForm) {
    volunteerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Generate unique volunteer ID
      const volunteerId = "VOL" + Date.now().toString().slice(-8);
      
      // Collect form data
      const formData = {
        id: volunteerId,
        firstName: document.getElementById("vol-first-name").value,
        lastName: document.getElementById("vol-last-name").value,
        email: document.getElementById("vol-email").value,
        phone: document.getElementById("vol-phone").value,
        dob: document.getElementById("vol-dob").value,
        gender: document.getElementById("vol-gender").value,
        address: document.getElementById("vol-address").value,
        city: document.getElementById("vol-city").value,
        pincode: document.getElementById("vol-pincode").value,
        occupation: document.getElementById("vol-occupation").value,
        education: document.getElementById("vol-education").value,
        skills: document.getElementById("vol-skills").value,
        interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value),
        availability: document.getElementById("vol-availability").value,
        commitment: document.getElementById("vol-commitment").value,
        days: Array.from(document.querySelectorAll('input[name="days"]:checked')).map(cb => cb.value),
        experience: document.getElementById("vol-experience").value,
        motivation: document.getElementById("vol-motivation").value,
        comments: document.getElementById("vol-comments").value,
        emergencyName: document.getElementById("vol-emergency-name").value,
        emergencyRelation: document.getElementById("vol-emergency-relation").value,
        emergencyPhone: document.getElementById("vol-emergency-phone").value,
        emergencyEmail: document.getElementById("vol-emergency-email").value,
        timestamp: new Date().toISOString(),
        status: "Application Submitted"
      };

      // Store in localStorage
      const existingVolunteers = JSON.parse(localStorage.getItem("volunteers") || "[]");
      existingVolunteers.push(formData);
      localStorage.setItem("volunteers", JSON.stringify(existingVolunteers));

      // Show success message
      volunteerIdSpan.textContent = volunteerId;
      successMessage.classList.remove("hidden");
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Reset form
      volunteerForm.reset();
    });
  }
});

// Render opportunities
function renderOpportunities() {
  const container = document.getElementById('opportunities-container');
  if (!container) return;

  container.innerHTML = opportunitiesData.map(opportunity => {
    const urgencyColor = opportunity.urgency === 'high' ? 'bg-red-100 text-red-800' :
                        opportunity.urgency === 'medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-green-100 text-green-800';
    
    const availablePositions = opportunity.positions - opportunity.filled;
    const fillPercentage = (opportunity.filled / opportunity.positions) * 100;

    return `
      <div class="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h3 class="text-xl font-semibold text-foreground mb-2">${opportunity.title}</h3>
            <div class="flex items-center space-x-2 mb-2">
              <span class="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">${opportunity.category}</span>
              <span class="${urgencyColor} px-2 py-1 rounded-full text-xs font-medium">${opportunity.urgency} priority</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <p class="text-muted-foreground">Type:</p>
            <p class="font-medium text-foreground">${opportunity.type}</p>
          </div>
          <div>
            <p class="text-muted-foreground">Time Commitment:</p>
            <p class="font-medium text-foreground">${opportunity.timeCommitment}</p>
          </div>
          <div class="col-span-2">
            <p class="text-muted-foreground">Location:</p>
            <p class="font-medium text-foreground">${opportunity.location}</p>
          </div>
        </div>

        <p class="text-muted-foreground mb-4">${opportunity.description}</p>

        <div class="mb-4">
          <div class="flex justify-between text-sm mb-2">
            <span class="text-muted-foreground">Positions Filled</span>
            <span class="text-foreground font-medium">${opportunity.filled}/${opportunity.positions}</span>
          </div>
          <div class="w-full bg-border rounded-full h-2">
            <div class="bg-primary h-2 rounded-full transition-all duration-500" style="width: ${fillPercentage}%"></div>
          </div>
          <p class="text-xs text-muted-foreground mt-1">${availablePositions} positions available</p>
        </div>

        <div class="space-y-3">
          <button onclick="viewOpportunityDetails(${opportunity.id})" class="w-full bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            View Details
          </button>
          <button onclick="applyForOpportunity(${opportunity.id})" class="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Render training programs
function renderTrainingPrograms() {
  const container = document.getElementById('training-container');
  if (!container) return;

  container.innerHTML = trainingData.map(training => {
    const typeColor = training.type === 'Mandatory' ? 'bg-red-100 text-red-800' :
                     training.type === 'Recommended' ? 'bg-orange-100 text-orange-800' :
                     'bg-blue-100 text-blue-800';

    return `
      <div class="bg-card rounded-2xl p-6 shadow-card">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h3 class="text-xl font-semibold text-foreground mb-2">${training.title}</h3>
            <div class="flex items-center space-x-2">
              <span class="${typeColor} px-2 py-1 rounded-full text-xs font-medium">${training.type}</span>
              <span class="bg-secondary text-muted-foreground px-2 py-1 rounded-full text-xs">${training.duration}</span>
            </div>
          </div>
        </div>

        <p class="text-muted-foreground mb-4">${training.description}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <p class="text-muted-foreground">Schedule:</p>
            <p class="font-medium text-foreground">${training.schedule}</p>
          </div>
          <div>
            <p class="text-muted-foreground">Next Session:</p>
            <p class="font-medium text-foreground">${new Date(training.nextDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p class="text-muted-foreground">Prerequisites:</p>
            <p class="font-medium text-foreground">${training.prerequisites}</p>
          </div>
          <div>
            <p class="text-muted-foreground">Certificate:</p>
            <p class="font-medium text-foreground">${training.certificate ? 'Yes' : 'No'}</p>
          </div>
        </div>

        <div class="mb-4">
          <h4 class="font-medium text-foreground mb-2">Topics Covered:</h4>
          <ul class="space-y-1">
            ${training.topics.slice(0, 3).map(topic => `
              <li class="text-sm text-muted-foreground flex items-start">
                <svg class="w-3 h-3 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                ${topic}
              </li>
            `).join('')}
            ${training.topics.length > 3 ? `<li class="text-sm text-muted-foreground">+ ${training.topics.length - 3} more topics</li>` : ''}
          </ul>
        </div>

        <button onclick="registerForTraining(${training.id})" class="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          Register for Training
        </button>
      </div>
    `;
  }).join('');
}

// Render recognition section
function renderRecognition() {
  const container = document.getElementById('recognition-container');
  if (!container) return;

  container.innerHTML = recognitionData.map(volunteer => `
    <div class="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
      <img src="${volunteer.image}" alt="${volunteer.name}" class="w-full h-48 object-cover">
      <div class="p-6">
        <div class="text-center mb-4">
          <h3 class="text-xl font-semibold text-foreground mb-1">${volunteer.name}</h3>
          <p class="text-muted-foreground text-sm mb-2">${volunteer.role}</p>
          <span class="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            ${volunteer.achievement}
          </span>
        </div>
        
        <p class="text-muted-foreground text-sm mb-4 text-center">${volunteer.description}</p>
        
        <div class="grid grid-cols-2 gap-4 text-center">
          <div class="bg-secondary/30 rounded-lg p-3">
            <p class="text-lg font-bold text-foreground">${volunteer.hours}</p>
            <p class="text-xs text-muted-foreground">Hours Volunteered</p>
          </div>
          <div class="bg-secondary/30 rounded-lg p-3">
            <p class="text-sm font-bold text-foreground">${volunteer.impact}</p>
            <p class="text-xs text-muted-foreground">Community Impact</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Opportunity details modal functions
function viewOpportunityDetails(opportunityId) {
  const opportunity = opportunitiesData.find(opp => opp.id === opportunityId);
  if (!opportunity) return;

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50';
  modal.innerHTML = `
    <div class="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-semibold text-foreground">${opportunity.title}</h3>
          <button onclick="this.closest('.fixed').remove()" class="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 class="font-semibold text-foreground mb-3">Requirements</h4>
            <ul class="space-y-2">
              ${opportunity.requirements.map(req => `
                <li class="text-sm text-muted-foreground flex items-start">
                  <svg class="w-3 h-3 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  ${req}
                </li>
              `).join('')}
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-foreground mb-3">Benefits</h4>
            <ul class="space-y-2">
              ${opportunity.benefits.map(benefit => `
                <li class="text-sm text-muted-foreground flex items-start">
                  <svg class="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  ${benefit}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <div class="flex space-x-4">
          <button onclick="applyForOpportunity(${opportunity.id}); this.closest('.fixed').remove();" class="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Apply Now
          </button>
          <button onclick="this.closest('.fixed').remove()" class="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function applyForOpportunity(opportunityId) {
  const opportunity = opportunitiesData.find(opp => opp.id === opportunityId);
  if (!opportunity) return;

  // Check if user is already registered
  const existingVolunteers = JSON.parse(localStorage.getItem("volunteers") || "[]");
  if (existingVolunteers.length === 0) {
    alert("Please complete the volunteer registration form first before applying for specific opportunities.");
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Store application
  const applications = JSON.parse(localStorage.getItem("volunteerApplications") || "[]");
  const applicationId = "APP" + Date.now().toString().slice(-8);
  
  applications.push({
    id: applicationId,
    opportunityId: opportunityId,
    opportunityTitle: opportunity.title,
    volunteerId: existingVolunteers[existingVolunteers.length - 1].id,
    timestamp: new Date().toISOString(),
    status: "Applied"
  });
  
  localStorage.setItem("volunteerApplications", JSON.stringify(applications));

  alert(`Application submitted successfully!\nApplication ID: ${applicationId}\n\nYou will be contacted within 3-5 business days regarding next steps.`);
}

function registerForTraining(trainingId) {
  const training = trainingData.find(t => t.id === trainingId);
  if (!training) return;

  // Check if user is registered as volunteer
  const existingVolunteers = JSON.parse(localStorage.getItem("volunteers") || "[]");
  if (existingVolunteers.length === 0) {
    alert("Please complete the volunteer registration form first before registering for training programs.");
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Store training registration
  const registrations = JSON.parse(localStorage.getItem("trainingRegistrations") || "[]");
  const registrationId = "TRN" + Date.now().toString().slice(-8);
  
  registrations.push({
    id: registrationId,
    trainingId: trainingId,
    trainingTitle: training.title,
    volunteerId: existingVolunteers[existingVolunteers.length - 1].id,
    timestamp: new Date().toISOString(),
    status: "Registered"
  });
  
  localStorage.setItem("trainingRegistrations", JSON.stringify(registrations));

  alert(`Training registration successful!\nRegistration ID: ${registrationId}\n\nYou will receive confirmation and details via email before the training date.`);
}

// Initialize page content
document.addEventListener("DOMContentLoaded", function () {
  renderOpportunities();
  renderTrainingPrograms();
  renderRecognition();
});

// Form validation for volunteer registration
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('volunteer-form');
  if (!form) return;

  // Add real-time validation
  const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
  
  requiredFields.forEach(field => {
    field.addEventListener('blur', function() {
      validateField(this);
    });
  });

  // Validate interests selection
  const interestCheckboxes = document.querySelectorAll('input[name="interests"]');
  interestCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const checkedInterests = document.querySelectorAll('input[name="interests"]:checked');
      if (checkedInterests.length === 0) {
        showFieldError(this.closest('div'), 'Please select at least one area of interest');
      } else {
        clearFieldError(this.closest('div'));
      }
    });
  });

  // Validate days selection
  const dayCheckboxes = document.querySelectorAll('input[name="days"]');
  dayCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const checkedDays = document.querySelectorAll('input[name="days"]:checked');
      if (checkedDays.length === 0) {
        showFieldError(this.closest('div'), 'Please select at least one preferred day');
      } else {
        clearFieldError(this.closest('div'));
      }
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    clearFieldError(field.parentNode);

    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    } else if (field.type === 'tel' && value) {
      const phoneRegex = /^[\+]?[1-9][\d]{9,14}$/;
      if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    } else if (field.id === 'vol-pincode' && value) {
      const pincodeRegex = /^[0-9]{6}$/;
      if (!pincodeRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid 6-digit PIN code';
      }
    } else if (field.type === 'date' && field.id === 'vol-dob' && value) {
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      
      if (age < 16 || age > 80) {
        isValid = false;
        errorMessage = 'Age must be between 16 and 80 years';
      }
    }

    if (!isValid) {
      showFieldError(field.parentNode, errorMessage);
    }

    return isValid;
  }

  function showFieldError(container, message) {
    clearFieldError(container);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-600 text-sm mt-1';
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
    
    const input = container.querySelector('input, select, textarea');
    if (input) {
      input.classList.add('border-red-500');
    }
  }

  function clearFieldError(container) {
    const existingError = container.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    const input = container.querySelector('input, select, textarea');
    if (input) {
      input.classList.remove('border-red-500');
    }
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

// Auto-save form progress
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('volunteer-form');
  if (!form) return;

  const formInputs = form.querySelectorAll('input, select, textarea');
  
  // Load saved data
  const savedData = localStorage.getItem('volunteerFormDraft');
  if (savedData) {
    const data = JSON.parse(savedData);
    Object.entries(data).forEach(([key, value]) => {
      const field = document.getElementById(key);
      if (field) {
        if (field.type === 'checkbox') {
          field.checked = value;
        } else {
          field.value = value;
        }
      }
    });
  }

  // Save data on input
  formInputs.forEach(input => {
    input.addEventListener('input', function() {
      const formData = {};
      formInputs.forEach(field => {
        if (field.type === 'checkbox') {
          formData[field.id] = field.checked;
        } else {
          formData[field.id] = field.value;
        }
      });
      localStorage.setItem('volunteerFormDraft', JSON.stringify(formData));
    });
  });

  // Clear draft on successful submission
  form.addEventListener('submit', function() {
    localStorage.removeItem('volunteerFormDraft');
  });
});