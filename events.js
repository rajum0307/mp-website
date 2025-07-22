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

// Events data
const eventsData = [
  {
    id: 1,
    title: "Community Development Town Hall",
    type: "townhall",
    date: "2024-03-25",
    time: "18:00",
    endTime: "20:00",
    location: "Community Center, Main Road",
    description: "Join us for an open discussion on upcoming development projects, budget allocation, and community priorities for 2024-25.",
    capacity: 150,
    registered: 65,
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=300&fit=crop",
    tags: ["Development", "Community", "Budget"],
    agenda: [
      "Welcome & Introduction",
      "2024-25 Development Budget Overview",
      "Infrastructure Priority Discussion",
      "Q&A Session",
      "Community Feedback Collection"
    ],
    speakers: ["Sri Bharat", "District Collector", "Community Leaders"]
  },
  {
    id: 2,
    title: "Youth Employment Workshop",
    type: "workshop",
    date: "2024-04-08",
    time: "16:00",
    endTime: "18:30",
    location: "District Hall, Conference Room",
    description: "Skills training workshop focused on employment opportunities for youth in emerging sectors.",
    capacity: 80,
    registered: 42,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=300&fit=crop",
    tags: ["Youth", "Employment", "Skills"],
    agenda: [
      "Current Job Market Analysis",
      "Skill Development Programs",
      "Startup Support Schemes",
      "Career Guidance Session"
    ],
    speakers: ["Industry Experts", "Career Counselors", "Successful Entrepreneurs"]
  },
  {
    id: 3,
    title: "Healthcare Awareness Camp",
    type: "visit",
    date: "2024-04-12",
    time: "09:00",
    endTime: "16:00",
    location: "Primary Health Center, Village Cluster",
    description: "Free health checkups and awareness program about preventive healthcare measures.",
    capacity: 500,
    registered: 234,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    tags: ["Healthcare", "Awareness", "Free Checkup"],
    agenda: [
      "Registration & Basic Health Screening",
      "Doctor Consultations",
      "Health Awareness Sessions",
      "Medicine Distribution",
      "Follow-up Scheduling"
    ],
    speakers: ["Medical Team", "Health Workers", "Nutrition Experts"]
  },
  {
    id: 4,
    title: "Agricultural Innovation Fair",
    type: "inauguration",
    date: "2024-04-22",
    time: "10:00",
    endTime: "17:00",
    location: "Agricultural College Grounds",
    description: "Exhibition of modern farming techniques, equipment, and government support schemes for farmers.",
    capacity: 1000,
    registered: 456,
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=500&h=300&fit=crop",
    tags: ["Agriculture", "Innovation", "Technology"],
    agenda: [
      "Inauguration Ceremony",
      "Technology Demonstrations",
      "Farmer Success Stories",
      "Government Scheme Information",
      "Networking & Discussions"
    ],
    speakers: ["Agricultural Scientists", "Progressive Farmers", "Tech Companies"]
  },
  {
    id: 5,
    title: "Women Empowerment Meeting",
    type: "meeting",
    date: "2024-05-05",
    time: "14:00",
    endTime: "16:30",
    location: "Women's Development Center",
    description: "Discussion on women's empowerment initiatives, self-help groups, and skill development programs.",
    capacity: 120,
    registered: 78,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop",
    tags: ["Women", "Empowerment", "Self-Help Groups"],
    agenda: [
      "SHG Progress Review",
      "New Skill Development Programs",
      "Financial Literacy Training",
      "Micro-credit Scheme Information"
    ],
    speakers: ["Women Leaders", "SHG Coordinators", "Bank Officials"]
  },
  {
    id: 6,
    title: "Infrastructure Project Review",
    type: "meeting",
    date: "2024-05-15",
    time: "11:00",
    endTime: "14:00",
    location: "Municipal Corporation Office",
    description: "Review meeting for ongoing infrastructure projects and planning for new initiatives.",
    capacity: 50,
    registered: 35,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
    tags: ["Infrastructure", "Planning", "Review"],
    agenda: [
      "Current Project Status Updates",
      "Budget Utilization Review",
      "New Project Proposals",
      "Timeline Discussions"
    ],
    speakers: ["Engineers", "Contractors", "Officials"]
  }
];

// Past events data
const pastEventsData = [
  {
    id: 101,
    title: "Education Infrastructure Review",
    type: "townhall",
    date: "2024-03-10",
    location: "Government School Auditorium",
    attendees: 156,
    description: "Comprehensive review of school infrastructure and digital learning initiatives across the constituency.",
    images: [
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=250&fit=crop"
    ],
    highlights: [
      "Approved funding for 25 school renovations",
      "Digital classroom initiative launched",
      "Teacher training program expanded",
      "Student scholarship program announced"
    ]
  },
  {
    id: 102,
    title: "Water Supply Solutions Forum",
    type: "meeting",
    date: "2024-02-28",
    location: "Water Treatment Plant",
    attendees: 203,
    description: "Community feedback session on water distribution improvements and quality enhancement measures.",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1518975080976-df54bb7bb15d?w=400&h=250&fit=crop"
    ],
    highlights: [
      "New water treatment plant approved",
      "24/7 supply commitment made",
      "Quality testing frequency increased",
      "Community monitoring system established"
    ]
  },
  {
    id: 103,
    title: "Agricultural Support Program Launch",
    type: "inauguration",
    date: "2024-02-15",
    location: "District Agricultural Office",
    attendees: 178,
    description: "Launch of comprehensive agricultural support program including subsidies and modern farming techniques.",
    images: [
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=250&fit=crop"
    ],
    highlights: [
      "₹50 crore farmer welfare fund established",
      "Crop insurance scheme launched",
      "Modern equipment subsidy program started",
      "Organic farming training initiated"
    ]
  }
];

let currentEventFilter = 'all';
let currentEventId = null;

// Format date and time functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const time = new Date();
  time.setHours(parseInt(hours), parseInt(minutes));
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function getEventTypeColor(type) {
  const colors = {
    meeting: 'bg-blue-100 text-blue-800',
    townhall: 'bg-green-100 text-green-800',
    visit: 'bg-orange-100 text-orange-800',
    inauguration: 'bg-purple-100 text-purple-800',
    workshop: 'bg-indigo-100 text-indigo-800'
  };
  return colors[type] || 'bg-gray-100 text-gray-800';
}

function getEventTypeIcon(type) {
  const icons = {
    meeting: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>`,
    townhall: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    </svg>`,
    visit: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>`,
    inauguration: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
    </svg>`,
    workshop: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
    </svg>`
  };
  return icons[type] || '';
}

// Render upcoming events
function renderUpcomingEvents() {
  const container = document.getElementById('upcoming-events');
  if (!container) return;

  const filteredEvents = currentEventFilter === 'all' 
    ? eventsData 
    : eventsData.filter(event => event.type === currentEventFilter);

  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (upcomingEvents.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <p class="text-muted-foreground text-lg">No upcoming events found for the selected filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = upcomingEvents.map(event => {
    const availableSpots = event.capacity - event.registered;
    const isFullyBooked = availableSpots <= 0;
    
    return `
      <div class="event-card bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1" data-type="${event.type}">
        <div class="relative">
          <img src="${event.image}" alt="${event.title}" class="w-full h-48 object-cover">
          <div class="absolute top-4 left-4">
            <span class="capitalize ${getEventTypeColor(event.type)} px-3 py-1 rounded-full text-sm font-medium">
              ${event.type}
            </span>
          </div>
          <div class="absolute top-4 right-4">
            <div class="bg-black/80 text-white px-3 py-2 rounded-lg text-center">
              <div class="text-lg font-bold">${new Date(event.date).getDate()}</div>
              <div class="text-xs">${new Date(event.date).toLocaleDateString("en-US", { month: "short" })}</div>
            </div>
          </div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-semibold text-foreground mb-3 hover:text-primary cursor-pointer" onclick="openEventDetails(${event.id})">
            ${event.title}
          </h3>
          
          <div class="space-y-3 mb-6">
            <div class="flex items-center text-muted-foreground text-sm">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              ${formatDate(event.date)}
            </div>
            
            <div class="flex items-center text-muted-foreground text-sm">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
              ${formatTime(event.time)} - ${formatTime(event.endTime)}
            </div>
            
            <div class="flex items-center text-muted-foreground text-sm">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              ${event.location}
            </div>
          </div>
          
          <p class="text-muted-foreground text-sm mb-4 line-clamp-3">
            ${event.description}
          </p>
          
          <div class="mb-4">
            <div class="flex justify-between text-sm mb-2">
              <span class="text-muted-foreground">Registration Progress</span>
              <span class="text-foreground font-medium">${event.registered}/${event.capacity}</span>
            </div>
            <div class="w-full bg-border rounded-full h-2">
              <div class="bg-primary h-2 rounded-full transition-all duration-500" style="width: ${(event.registered / event.capacity) * 100}%"></div>
            </div>
            <p class="text-xs text-muted-foreground mt-1">
              ${isFullyBooked ? 'Fully booked' : `${availableSpots} spots available`}
            </p>
          </div>
          
          <div class="flex flex-wrap gap-2 mb-4">
            ${event.tags.map(tag => `<span class="bg-secondary text-muted-foreground px-2 py-1 rounded-full text-xs">${tag}</span>`).join('')}
          </div>
          
          <div class="flex space-x-3">
            <button 
              onclick="openRSVPModal(${event.id})" 
              class="flex-1 ${isFullyBooked ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'} text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors"
              ${isFullyBooked ? 'disabled' : ''}
            >
              ${isFullyBooked ? 'Fully Booked' : 'RSVP Now'}
            </button>
            <button onclick="shareEvent(${event.id})" class="border border-border text-foreground hover:bg-secondary px-4 py-2 rounded-lg font-medium transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render past events
function renderPastEvents() {
  const container = document.getElementById('past-events-gallery');
  if (!container) return;

  container.innerHTML = pastEventsData.map(event => `
    <div class="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
      <div class="relative">
        <div class="grid grid-cols-3 h-48">
          ${event.images.slice(0, 3).map((img, index) => `
            <div class="relative overflow-hidden ${index === 2 && event.images.length > 3 ? 'relative' : ''}">
              <img src="${img}" alt="${event.title} photo ${index + 1}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" onclick="openImageGallery(${event.id}, ${index})">
              ${index === 2 && event.images.length > 3 ? `
                <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span class="text-white font-semibold">+${event.images.length - 3} more</span>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
        <div class="absolute top-4 left-4">
          <span class="capitalize ${getEventTypeColor(event.type)} px-3 py-1 rounded-full text-sm font-medium">
            ${event.type}
          </span>
        </div>
      </div>
      
      <div class="p-6">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-xl font-semibold text-foreground">${event.title}</h3>
          <div class="text-sm text-muted-foreground">${event.attendees} attendees</div>
        </div>
        
        <div class="flex items-center text-muted-foreground text-sm mb-3">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          ${formatDate(event.date)} • ${event.location}
        </div>
        
        <p class="text-muted-foreground text-sm mb-4">
          ${event.description}
        </p>
        
        <div class="mb-4">
          <h4 class="font-medium text-foreground mb-2">Key Highlights:</h4>
          <ul class="space-y-1">
            ${event.highlights.slice(0, 3).map(highlight => `
              <li class="text-sm text-muted-foreground flex items-start">
                <svg class="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                ${highlight}
              </li>
            `).join('')}
          </ul>
        </div>
        
        <button onclick="viewEventReport(${event.id})" class="w-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors">
          View Full Report
        </button>
      </div>
    </div>
  `).join('');
}

// Generate calendar
function generateCalendar() {
  const calendarGrid = document.getElementById('calendar-grid');
  if (!calendarGrid) return;

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const calendar = [];
  const currentDate = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    calendar.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  calendarGrid.innerHTML = calendar.map(date => {
    const dateStr = date.toISOString().split('T')[0];
    const dayEvents = eventsData.filter(event => event.date === dateStr);
    const isCurrentMonth = date.getMonth() === currentMonth;
    const isToday = date.toDateString() === today.toDateString();
    
    return `
      <div class="calendar-day p-2 min-h-[80px] border border-border ${isCurrentMonth ? 'bg-background' : 'bg-muted/30'} ${isToday ? 'ring-2 ring-primary' : ''} hover:bg-secondary/50 transition-colors cursor-pointer">
        <div class="font-medium text-sm mb-1 ${isCurrentMonth ? 'text-foreground' : 'text-muted-foreground'}">${date.getDate()}</div>
        <div class="space-y-1">
          ${dayEvents.slice(0, 2).map(event => {
            const color = event.type === 'meeting' ? 'bg-blue-500' : 
                         event.type === 'townhall' ? 'bg-green-500' :
                         event.type === 'visit' ? 'bg-orange-500' : 'bg-purple-500';
            return `
              <div class="text-xs p-1 rounded ${color} text-white truncate" title="${event.title}">
                ${event.title}
              </div>
            `;
          }).join('')}
          ${dayEvents.length > 2 ? `<div class="text-xs text-muted-foreground">+${dayEvents.length - 2} more</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Event filtering
document.addEventListener("DOMContentLoaded", function () {
  const eventFilters = document.querySelectorAll('.event-filter');
  
  eventFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      // Remove active class from all filters
      eventFilters.forEach(f => f.classList.remove('active'));
      
      // Add active class to clicked filter
      this.classList.add('active');
      
      currentEventFilter = this.getAttribute('data-filter');
      renderUpcomingEvents();
    });
  });

  // Initial render
  renderUpcomingEvents();
  renderPastEvents();
  generateCalendar();
});

// RSVP Modal functionality
function openRSVPModal(eventId) {
  const event = eventsData.find(e => e.id === eventId);
  if (!event) return;

  const modal = document.getElementById('rsvp-modal');
  const modalEventInfo = document.getElementById('modal-event-info');
  
  modalEventInfo.innerHTML = `
    <div class="bg-secondary/30 rounded-lg p-4">
      <h4 class="font-semibold text-foreground mb-2">${event.title}</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
        <div>
          <span class="font-medium">Date:</span> ${formatDate(event.date)}
        </div>
        <div>
          <span class="font-medium">Time:</span> ${formatTime(event.time)} - ${formatTime(event.endTime)}
        </div>
        <div class="sm:col-span-2">
          <span class="font-medium">Location:</span> ${event.location}
        </div>
      </div>
    </div>
  `;
  
  currentEventId = eventId;
  modal.classList.remove('hidden');
}

// Close RSVP modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById('rsvp-modal');
  const closeButton = document.getElementById('close-modal');
  const cancelButton = document.getElementById('cancel-rsvp');
  
  [closeButton, cancelButton].forEach(button => {
    if (button) {
      button.addEventListener('click', () => {
        modal.classList.add('hidden');
        currentEventId = null;
      });
    }
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      currentEventId = null;
    }
  });
});

// RSVP form submission
document.addEventListener("DOMContentLoaded", function () {
  const rsvpForm = document.getElementById('rsvp-form');
  
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (!currentEventId) return;

      const formData = {
        eventId: currentEventId,
        firstName: document.getElementById('rsvp-first-name').value,
        lastName: document.getElementById('rsvp-last-name').value,
        email: document.getElementById('rsvp-email').value,
        phone: document.getElementById('rsvp-phone').value,
        attendees: document.getElementById('rsvp-attendees').value,
        dietary: document.getElementById('rsvp-dietary').value,
        comments: document.getElementById('rsvp-comments').value,
        confirmationId: 'EV' + Date.now().toString().slice(-8),
        timestamp: new Date().toISOString()
      };

      // Store RSVP in localStorage
      const existingRSVPs = JSON.parse(localStorage.getItem('eventRSVPs') || '[]');
      existingRSVPs.push(formData);
      localStorage.setItem('eventRSVPs', JSON.stringify(existingRSVPs));

      // Update event registration count
      const event = eventsData.find(e => e.id === currentEventId);
      if (event) {
        event.registered += parseInt(formData.attendees);
      }

      // Show success message
      const modal = document.getElementById('rsvp-modal');
      modal.innerHTML = `
        <div class="bg-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-4">RSVP Confirmed!</h3>
            <div class="bg-secondary/30 rounded-lg p-4 mb-6">
              <p class="text-sm text-muted-foreground mb-2">Confirmation ID:</p>
              <p class="font-mono font-bold text-foreground text-lg">${formData.confirmationId}</p>
            </div>
            <p class="text-muted-foreground mb-6">
              You will receive a confirmation email shortly with event details and directions.
            </p>
            <button onclick="location.reload()" class="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Close
            </button>
          </div>
        </div>
      `;

      // Refresh the events display
      setTimeout(() => {
        renderUpcomingEvents();
      }, 3000);
    });
  }
});

// Event details modal
function openEventDetails(eventId) {
  const event = eventsData.find(e => e.id === eventId);
  if (!event) return;

  const modal = document.getElementById('event-modal');
  const modalContent = document.getElementById('event-modal-content');
  
  modalContent.innerHTML = `
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-2xl font-semibold text-foreground">${event.title}</h3>
      <button onclick="closeEventModal()" class="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <img src="${event.image}" alt="${event.title}" class="w-full h-64 object-cover rounded-lg mb-6">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="space-y-4">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div>
            <p class="text-sm text-muted-foreground">Date</p>
            <p class="font-medium text-foreground">${formatDate(event.date)}</p>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
          </div>
          <div>
            <p class="text-sm text-muted-foreground">Time</p>
            <p class="font-medium text-foreground">${formatTime(event.time)} - ${formatTime(event.endTime)}</p>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm text-muted-foreground">Location</p>
            <p class="font-medium text-foreground">${event.location}</p>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm text-muted-foreground">Capacity</p>
            <p class="font-medium text-foreground">${event.registered}/${event.capacity} registered</p>
          </div>
        </div>
      </div>

      <div>
        <h4 class="font-semibold text-foreground mb-3">Description</h4>
        <p class="text-muted-foreground mb-4">${event.description}</p>

        <h4 class="font-semibold text-foreground mb-3">Tags</h4>
        <div class="flex flex-wrap gap-2">
          ${event.tags.map(tag => `<span class="bg-secondary text-muted-foreground px-2 py-1 rounded-full text-xs">${tag}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h4 class="font-semibold text-foreground mb-3">Event Agenda</h4>
      <ul class="space-y-2">
        ${event.agenda.map(item => `
          <li class="flex items-start space-x-2">
            <svg class="w-4 h-4 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="2"/>
            </svg>
            <span class="text-muted-foreground">${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="mb-6">
      <h4 class="font-semibold text-foreground mb-3">Speakers/Organizers</h4>
      <div class="flex flex-wrap gap-2">
        ${event.speakers.map(speaker => `
          <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">${speaker}</span>
        `).join('')}
      </div>
    </div>

    <div class="flex space-x-4">
      <button onclick="openRSVPModal(${event.id}); closeEventModal();" class="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
        RSVP Now
      </button>
      <button onclick="shareEvent(${event.id})" class="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
        Share Event
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeEventModal() {
  const modal = document.getElementById('event-modal');
  modal.classList.add('hidden');
}

// Share event functionality
function shareEvent(eventId) {
  const event = eventsData.find(e => e.id === eventId);
  if (!event) return;

  const shareText = `Join me at "${event.title}" on ${formatDate(event.date)} at ${event.location}. RSVP: ${window.location.href}`;
  
  if (navigator.share) {
    navigator.share({
      title: event.title,
      text: shareText,
      url: window.location.href
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Event details copied to clipboard!');
    });
  }
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  // Add scroll-to-top functionality
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
    ".event-card, section > div > div, .bg-card"
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