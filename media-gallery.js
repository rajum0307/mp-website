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

// Media data
const photosData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=300&h=200&fit=crop",
    title: "Community Development Town Hall",
    description: "Interactive session with community members discussing development priorities and budget allocation for 2024-25.",
    date: "2024-03-15",
    category: "events",
    location: "Community Center, Main Road"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
    title: "Healthcare Awareness Camp",
    description: "Free health checkups and awareness program about preventive healthcare measures in rural areas.",
    date: "2024-03-12",
    category: "visits",
    location: "Primary Health Center"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=300&h=200&fit=crop",
    title: "School Infrastructure Review",
    description: "Inspection of newly constructed classrooms and digital learning facilities in government schools.",
    date: "2024-03-10",
    category: "projects",
    location: "Government High School"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
    title: "Parliament Session Address",
    description: "Addressing the Parliament on rural development initiatives and infrastructure funding allocation.",
    date: "2024-03-08",
    category: "meetings",
    location: "Parliament House, New Delhi"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=300&h=200&fit=crop",
    title: "Agricultural Innovation Fair",
    description: "Inauguration of agricultural technology exhibition showcasing modern farming techniques and equipment.",
    date: "2024-03-05",
    category: "ceremonies",
    location: "Agricultural College Grounds"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
    title: "Women Empowerment Meeting",
    description: "Discussion with women's self-help groups about skill development programs and micro-credit schemes.",
    date: "2024-03-03",
    category: "meetings",
    location: "Women's Development Center"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    title: "Water Treatment Plant Inauguration",
    description: "Official opening of the new water treatment facility providing clean drinking water to 50,000+ residents.",
    date: "2024-03-01",
    category: "ceremonies",
    location: "Water Treatment Plant"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop",
    title: "Youth Employment Workshop",
    description: "Skills training workshop focused on employment opportunities for youth in emerging sectors.",
    date: "2024-02-28",
    category: "events",
    location: "District Hall"
  }
];

const videosData = [
  {
    id: 1,
    title: "Parliamentary Address on Rural Development",
    description: "Comprehensive speech on strengthening rural infrastructure and empowering village communities through targeted government programs.",
    thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=225&fit=crop",
    duration: "12:34",
    date: "2024-03-15",
    category: "speeches",
    views: "15.2K",
    videoId: "dQw4w9WgXcQ" // YouTube video ID placeholder
  },
  {
    id: 2,
    title: "Healthcare Policy Reform Discussion",
    description: "In-depth discussion on universal healthcare access and medical infrastructure development initiatives.",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop",
    duration: "18:45",
    date: "2024-03-12",
    category: "interviews",
    views: "8.7K",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Community Development Project Launch",
    description: "Live coverage of the community development project launch ceremony with local officials and residents.",
    thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=225&fit=crop",
    duration: "25:18",
    date: "2024-03-10",
    category: "events",
    views: "12.1K",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Weekly Community Update Vlog",
    description: "Weekly update covering recent developments, upcoming projects, and community announcements.",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
    duration: "8:22",
    date: "2024-03-08",
    category: "vlogs",
    views: "6.3K",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Education Technology Initiative Presentation",
    description: "Detailed presentation on digital learning platforms and teacher training programs for rural schools.",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=225&fit=crop",
    duration: "16:55",
    date: "2024-03-05",
    category: "speeches",
    views: "9.8K",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Agricultural Support Program Interview",
    description: "Television interview discussing new agricultural support programs and farmer welfare initiatives.",
    thumbnail: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=225&fit=crop",
    duration: "22:10",
    date: "2024-03-03",
    category: "interviews",
    views: "11.5K",
    videoId: "dQw4w9WgXcQ"
  }
];

const audioData = [
  {
    id: 1,
    title: "Weekly Community Update - March 2024",
    description: "Weekly update covering recent developments, upcoming projects, and community announcements.",
    duration: "15:32",
    date: "2024-03-15",
    category: "updates",
    plays: "2.1K"
  },
  {
    id: 2,
    title: "Radio Interview on Healthcare Reforms",
    description: "Detailed discussion about healthcare policy changes and their impact on rural communities.",
    duration: "28:45",
    date: "2024-03-12",
    category: "interviews",
    plays: "1.8K"
  },
  {
    id: 3,
    title: "Education Policy Podcast",
    description: "In-depth conversation about education reforms and digital learning initiatives.",
    duration: "35:20",
    date: "2024-03-10",
    category: "podcasts",
    plays: "1.5K"
  },
  {
    id: 4,
    title: "Community Message on Water Conservation",
    description: "Special message to the community about water conservation efforts and sustainable practices.",
    duration: "8:15",
    date: "2024-03-08",
    category: "messages",
    plays: "3.2K"
  },
  {
    id: 5,
    title: "Agricultural Development Discussion",
    description: "Radio discussion about modern farming techniques and government support for farmers.",
    duration: "42:18",
    date: "2024-03-05",
    category: "interviews",
    plays: "1.9K"
  }
];

const documentsData = [
  {
    id: 1,
    title: "Rural Healthcare Access Bill 2024",
    description: "Complete text of the landmark healthcare legislation for rural communities.",
    type: "PDF",
    size: "2.3 MB",
    date: "2024-03-15",
    category: "policies",
    downloads: "1.2K",
    pages: 45
  },
  {
    id: 2,
    title: "Community Development Budget 2024-25",
    description: "Detailed budget allocation for community development projects and infrastructure improvements.",
    type: "PDF",
    size: "1.8 MB",
    date: "2024-03-12",
    category: "reports",
    downloads: "856",
    pages: 32
  },
  {
    id: 3,
    title: "Digital Education Initiative Guidelines",
    description: "Implementation guidelines for digital learning programs in rural schools.",
    type: "PDF",
    size: "1.5 MB",
    date: "2024-03-10",
    category: "announcements",
    downloads: "642",
    pages: 28
  },
  {
    id: 4,
    title: "Water Supply Project Progress Report",
    description: "Quarterly progress report on water supply infrastructure development across the constituency.",
    type: "PDF",
    size: "3.1 MB",
    date: "2024-03-08",
    category: "reports",
    downloads: "734",
    pages: 58
  },
  {
    id: 5,
    title: "Agricultural Support Scheme Details",
    description: "Comprehensive information about new agricultural support programs and application procedures.",
    type: "PDF",
    size: "2.7 MB",
    date: "2024-03-05",
    category: "schemes",
    downloads: "1.5K",
    pages: 41
  },
  {
    id: 6,
    title: "Women Empowerment Program Announcement",
    description: "Official announcement of new women empowerment initiatives and skill development programs.",
    type: "PDF",
    size: "1.2 MB",
    date: "2024-03-03",
    category: "announcements",
    downloads: "923",
    pages: 18
  }
];

let currentPhotoFilter = 'all';
let currentVideoFilter = 'all';
let currentDocFilter = 'all';
let currentPhotoIndex = 0;
let photosPerPage = 8;
let currentLightboxIndex = 0;
let filteredPhotos = [];

// Format date function
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Render photos
function renderPhotos() {
  const container = document.getElementById('photo-grid');
  if (!container) return;

  filteredPhotos = currentPhotoFilter === 'all' 
    ? photosData 
    : photosData.filter(photo => photo.category === currentPhotoFilter);

  const photosToShow = filteredPhotos.slice(0, currentPhotoIndex + photosPerPage);

  container.innerHTML = photosToShow.map((photo, index) => `
    <div class="photo-item bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer" onclick="openLightbox(${index})">
      <div class="relative group">
        <img src="${photo.thumbnail}" alt="${photo.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </div>
        <div class="absolute top-2 left-2">
          <span class="bg-black/70 text-white px-2 py-1 rounded text-xs capitalize">${photo.category}</span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-foreground mb-1 line-clamp-1">${photo.title}</h3>
        <p class="text-muted-foreground text-sm mb-2 line-clamp-2">${photo.description}</p>
        <div class="flex items-center justify-between text-xs text-muted-foreground">
          <span>${formatDate(photo.date)}</span>
          <span>${photo.location}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Update load more button
  const loadMoreBtn = document.getElementById('load-more-photos');
  if (photosToShow.length >= filteredPhotos.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

// Render videos
function renderVideos() {
  const container = document.getElementById('video-grid');
  if (!container) return;

  const filteredVideos = currentVideoFilter === 'all' 
    ? videosData 
    : videosData.filter(video => video.category === currentVideoFilter);

  container.innerHTML = filteredVideos.map(video => `
    <div class="video-item bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
      <div class="relative cursor-pointer" onclick="playVideo('${video.videoId}', '${video.title}')">
        <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover">
        <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
            <svg class="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
          ${video.duration}
        </div>
        <div class="absolute top-2 left-2">
          <span class="bg-primary text-primary-foreground px-2 py-1 rounded text-xs capitalize">${video.category}</span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-foreground mb-2 line-clamp-2">${video.title}</h3>
        <p class="text-muted-foreground text-sm mb-3 line-clamp-3">${video.description}</p>
        <div class="flex items-center justify-between text-xs text-muted-foreground">
          <span>${formatDate(video.date)}</span>
          <span>${video.views} views</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render audio playlist
function renderAudio() {
  const container = document.getElementById('audio-playlist');
  if (!container) return;

  container.innerHTML = audioData.map((audio, index) => `
    <div class="audio-item bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300">
      <div class="flex items-center space-x-4">
        <button class="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-full flex items-center justify-center transition-colors" onclick="playAudio(${index})">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
        <div class="flex-1">
          <h3 class="font-semibold text-foreground mb-1">${audio.title}</h3>
          <p class="text-muted-foreground text-sm mb-2">${audio.description}</p>
          <div class="flex items-center space-x-4 text-xs text-muted-foreground">
            <span>${formatDate(audio.date)}</span>
            <span>${audio.duration}</span>
            <span>${audio.plays} plays</span>
            <span class="capitalize bg-secondary px-2 py-1 rounded">${audio.category}</span>
          </div>
        </div>
        <button class="w-8 h-8 bg-muted hover:bg-border rounded-full flex items-center justify-center transition-colors">
          <svg class="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Render documents
function renderDocuments() {
  const container = document.getElementById('document-grid');
  if (!container) return;

  const filteredDocs = currentDocFilter === 'all' 
    ? documentsData 
    : documentsData.filter(doc => doc.category === currentDocFilter);

  container.innerHTML = filteredDocs.map(doc => `
    <div class="document-item bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300">
      <div class="flex items-start space-x-4">
        <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <div class="flex-1">
          <div class="flex items-start justify-between mb-2">
            <h3 class="font-semibold text-foreground line-clamp-2">${doc.title}</h3>
            <span class="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium capitalize">${doc.category}</span>
          </div>
          <p class="text-muted-foreground text-sm mb-3 line-clamp-2">${doc.description}</p>
          <div class="grid grid-cols-2 gap-4 text-xs text-muted-foreground mb-4">
            <div>
              <span class="font-medium">Type:</span> ${doc.type}
            </div>
            <div>
              <span class="font-medium">Size:</span> ${doc.size}
            </div>
            <div>
              <span class="font-medium">Pages:</span> ${doc.pages}
            </div>
            <div>
              <span class="font-medium">Downloads:</span> ${doc.downloads}
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs text-muted-foreground">${formatDate(doc.date)}</span>
            <div class="flex space-x-2">
              <button onclick="viewDocument(${doc.id})" class="bg-primary/10 text-primary px-3 py-1 rounded text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                View
              </button>
              <button onclick="downloadDocument(${doc.id})" class="bg-secondary text-foreground px-3 py-1 rounded text-sm hover:bg-border transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Lightbox functionality
function openLightbox(index) {
  currentLightboxIndex = index;
  const photo = filteredPhotos[index];
  
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightbox-content');
  const title = document.getElementById('image-title');
  const description = document.getElementById('image-description');
  const date = document.getElementById('image-date');

  content.innerHTML = `<img src="${photo.src}" alt="${photo.title}" class="max-w-full max-h-full object-contain">`;
  title.textContent = photo.title;
  description.textContent = photo.description;
  date.textContent = `${formatDate(photo.date)} • ${photo.location}`;

  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
  if (direction === 'next') {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredPhotos.length;
  } else {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
  }
  openLightbox(currentLightboxIndex);
}

// Video player functionality
function playVideo(videoId, title) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50';
  modal.innerHTML = `
    <div class="relative max-w-4xl w-full">
      <button onclick="this.closest('.fixed').remove(); document.body.style.overflow = 'auto';" class="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div class="bg-black rounded-lg overflow-hidden">
        <div class="aspect-video bg-gray-900 flex items-center justify-center">
          <div class="text-center text-white">
            <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <p class="text-lg font-semibold mb-2">${title}</p>
            <p class="text-sm opacity-75">Video player would be embedded here</p>
            <p class="text-xs opacity-50 mt-2">YouTube Video ID: ${videoId}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

// Audio player functionality
let currentAudioIndex = 0;
let isPlaying = false;

function playAudio(index) {
  currentAudioIndex = index;
  const audio = audioData[index];
  
  // Update featured audio display
  const playPauseBtn = document.getElementById('play-pause-btn');
  const currentTime = document.getElementById('current-time');
  const totalTime = document.getElementById('total-time');
  
  // Simulate audio playback
  if (!isPlaying) {
    playPauseBtn.innerHTML = `
      <svg class="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
      </svg>
    `;
    isPlaying = true;
    
    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      const minutes = Math.floor(progress / 60);
      const seconds = progress % 60;
      currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      
      const progressBar = document.getElementById('progress');
      const percentage = (progress / (15 * 60)) * 100; // Assuming 15 minutes total
      progressBar.style.width = `${Math.min(percentage, 100)}%`;
      
      if (progress >= 15 * 60) {
        clearInterval(interval);
        playPauseBtn.innerHTML = `
          <svg class="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        `;
        isPlaying = false;
      }
    }, 1000);
  } else {
    playPauseBtn.innerHTML = `
      <svg class="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
    `;
    isPlaying = false;
  }
}

// Document functionality
function viewDocument(docId) {
  const doc = documentsData.find(d => d.id === docId);
  if (!doc) return;

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50';
  modal.innerHTML = `
    <div class="relative max-w-4xl w-full max-h-full bg-white rounded-lg overflow-hidden">
      <div class="flex items-center justify-between p-4 border-b border-border">
        <h3 class="text-lg font-semibold text-foreground">${doc.title}</h3>
        <button onclick="this.closest('.fixed').remove(); document.body.style.overflow = 'auto';" class="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-8 text-center">
        <svg class="w-24 h-24 mx-auto mb-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        <h4 class="text-xl font-semibold text-foreground mb-2">${doc.title}</h4>
        <p class="text-muted-foreground mb-4">${doc.description}</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
          <div class="text-center">
            <p class="font-medium text-foreground">${doc.type}</p>
            <p class="text-muted-foreground">Format</p>
          </div>
          <div class="text-center">
            <p class="font-medium text-foreground">${doc.size}</p>
            <p class="text-muted-foreground">Size</p>
          </div>
          <div class="text-center">
            <p class="font-medium text-foreground">${doc.pages}</p>
            <p class="text-muted-foreground">Pages</p>
          </div>
          <div class="text-center">
            <p class="font-medium text-foreground">${doc.downloads}</p>
            <p class="text-muted-foreground">Downloads</p>
          </div>
        </div>
        <p class="text-muted-foreground mb-6">PDF viewer would be embedded here for document preview</p>
        <button onclick="downloadDocument(${doc.id})" class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          Download Document
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function downloadDocument(docId) {
  const doc = documentsData.find(d => d.id === docId);
  if (!doc) return;

  // Simulate download
  alert(`Downloading: ${doc.title}\nSize: ${doc.size}\nFormat: ${doc.type}`);
  
  // In a real implementation, this would trigger an actual download
  // window.open(`/documents/${doc.id}.pdf`, '_blank');
}

// Filter functionality
document.addEventListener("DOMContentLoaded", function () {
  // Photo filters
  const photoFilters = document.querySelectorAll('.photo-filter');
  photoFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      photoFilters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      currentPhotoFilter = this.getAttribute('data-category');
      currentPhotoIndex = 0;
      renderPhotos();
    });
  });

  // Video filters
  const videoFilters = document.querySelectorAll('.video-filter');
  videoFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      videoFilters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      currentVideoFilter = this.getAttribute('data-category');
      renderVideos();
    });
  });

  // Document filters
  const docFilters = document.querySelectorAll('.doc-filter');
  docFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      docFilters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      currentDocFilter = this.getAttribute('data-category');
      renderDocuments();
    });
  });

  // Media navigation
  const mediaNavButtons = document.querySelectorAll('.media-nav');
  mediaNavButtons.forEach(button => {
    button.addEventListener('click', function() {
      mediaNavButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const section = this.getAttribute('data-section');
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Load more photos
  const loadMoreBtn = document.getElementById('load-more-photos');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      currentPhotoIndex += photosPerPage;
      renderPhotos();
    });
  }

  // Lightbox controls
  const closeLightboxBtn = document.getElementById('close-lightbox');
  const prevBtn = document.getElementById('prev-image');
  const nextBtn = document.getElementById('next-image');
  const lightbox = document.getElementById('lightbox');

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateLightbox('prev'));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateLightbox('next'));
  }

  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === this) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      }
    }
  });

  // Initial render
  renderPhotos();
  renderVideos();
  renderAudio();
  renderDocuments();
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
    ".photo-item, .video-item, .audio-item, .document-item, section > div > div"
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

// Social sharing functionality
function shareMedia(type, id, title) {
  const url = `${window.location.origin}/${type}/${id}`;
  const text = `Check out: ${title}`;
  
  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: url
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(`${text} - ${url}`).then(() => {
      alert('Link copied to clipboard!');
    });
  }
}

// Search functionality for media
function searchMedia(query) {
  const searchTerm = query.toLowerCase();
  
  // Filter photos
  const filteredPhotos = photosData.filter(photo => 
    photo.title.toLowerCase().includes(searchTerm) ||
    photo.description.toLowerCase().includes(searchTerm) ||
    photo.category.toLowerCase().includes(searchTerm)
  );
  
  // Filter videos
  const filteredVideos = videosData.filter(video => 
    video.title.toLowerCase().includes(searchTerm) ||
    video.description.toLowerCase().includes(searchTerm) ||
    video.category.toLowerCase().includes(searchTerm)
  );
  
  // Update displays with filtered results
  // This would be implemented based on search UI requirements
}