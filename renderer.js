// Pre-populated 2026 events
var PREPOPULATED_EVENTS = [
  { id: "sport-1", name: "Winter Olympics", date: "2026-02-06", category: "sports", description: "Milan and Cortina host the XXVI Olympic Winter Games" },
  { id: "sport-2", name: "FIFA World Cup Begins", date: "2026-06-11", category: "sports", description: "48 teams compete across USA, Canada and Mexico" },
  { id: "sport-3", name: "World Cup Final", date: "2026-07-19", category: "sports", description: "MetLife Stadium, New York hosts the championship" },
  { id: "sport-4", name: "Super Bowl LX", date: "2026-02-08", category: "sports", description: "NFL championship in Santa Clara" },
  { id: "sport-5", name: "The Masters", date: "2026-04-09", category: "sports", description: "Golf tournament at Augusta" },
  { id: "sport-6", name: "French Open", date: "2026-05-24", category: "sports", description: "Roland Garros Grand Slam in Paris" },
  { id: "sport-7", name: "Wimbledon", date: "2026-06-29", category: "sports", description: "The Championships return" },
  { id: "sport-8", name: "US Open Tennis", date: "2026-08-30", category: "sports", description: "Tennis season finale in New York" },
  { id: "sport-9", name: "NBA All-Star Weekend", date: "2026-02-13", category: "sports", description: "Basketball stars gather in Los Angeles" },
  { id: "sport-10", name: "UEFA Champions League Final", date: "2026-05-30", category: "sports", description: "European club football crown in Budapest" },
  { id: "tech-1", name: "CES 2026", date: "2026-01-07", category: "tech", description: "Consumer electronics showcase in Las Vegas" },
  { id: "tech-2", name: "Apple WWDC", date: "2026-06-08", category: "tech", description: "iOS 20, macOS 14 and new hardware expected" },
  { id: "tech-3", name: "iPhone 18 Launch", date: "2026-09-15", category: "tech", description: "Apple flagship smartphone" },
  { id: "tech-4", name: "Google I/O", date: "2026-05-12", category: "tech", description: "Android 17 and AI developments" },
  { id: "tech-5", name: "Meta Connect", date: "2026-09-24", category: "tech", description: "VR/AR and metaverse announcements" },
  { id: "tech-6", name: "Microsoft Build", date: "2026-05-19", category: "tech", description: "Developer conference for Azure and Windows" },
  { id: "tech-7", name: "Adobe Summit", date: "2026-04-20", category: "tech", description: "Digital marketing and creativity conference" },
  { id: "tech-8", name: "NAB Show", date: "2026-04-18", category: "tech", description: "Media and entertainment technology expo" },
  { id: "tech-9", name: "AWS re:Invent", date: "2026-11-30", category: "tech", description: "Cloud computing and AI innovations" },
  { id: "tech-10", name: "Tesla AI Day", date: "2026-08-19", category: "tech", description: "Robotics and autonomous vehicle updates" },
  { id: "fashion-1", name: "New York Fashion Week", date: "2026-02-11", category: "fashion", description: "Fall/Winter 2026-27 collections debut" },
  { id: "fashion-2", name: "London Fashion Week", date: "2026-02-19", category: "fashion", description: "British designers showcase new collections" },
  { id: "fashion-3", name: "Milan Fashion Week", date: "2026-02-24", category: "fashion", description: "Italian haute couture takes center stage" },
  { id: "fashion-4", name: "Paris Fashion Week", date: "2026-03-02", category: "fashion", description: "The pinnacle of fashion calendar" },
  { id: "fashion-5", name: "Met Gala", date: "2026-05-04", category: "fashion", description: "Fashion biggest night at the Met Museum" },
  { id: "fashion-6", name: "Paris Haute Couture", date: "2026-01-26", category: "fashion", description: "Spring/Summer haute couture collections" },
  { id: "fashion-7", name: "Milan Mens Fashion Week", date: "2026-01-16", category: "fashion", description: "Menswear collections for the season" },
  { id: "fashion-8", name: "Paris Mens Fashion Week", date: "2026-01-20", category: "fashion", description: "Mens style from top maisons" },
  { id: "fashion-9", name: "London Fashion Week Fall", date: "2026-09-17", category: "fashion", description: "Spring/Summer 2027 collections" },
  { id: "fashion-10", name: "Paris Fashion Week Fall", date: "2026-09-28", category: "fashion", description: "Spring season preview from Paris" },
  { id: "ent-1", name: "Grammy Awards", date: "2026-02-01", category: "entertainment", description: "Music biggest night in Los Angeles" },
  { id: "ent-2", name: "Oscars", date: "2026-03-29", category: "entertainment", description: "Academy Awards ceremony" },
  { id: "ent-3", name: "Cannes Film Festival", date: "2026-05-12", category: "entertainment", description: "Prestigious film festival on the French Riviera" },
  { id: "ent-4", name: "San Diego Comic-Con", date: "2026-07-23", category: "entertainment", description: "Pop culture ultimate gathering" },
  { id: "ent-5", name: "MTV VMAs", date: "2026-09-06", category: "entertainment", description: "Music video awards show" },
  { id: "ent-6", name: "Emmy Awards", date: "2026-09-14", category: "entertainment", description: "Television excellence honored" },
  { id: "ent-7", name: "Toronto Film Festival", date: "2026-09-10", category: "entertainment", description: "TIFF showcases Oscar contenders" },
  { id: "ent-8", name: "Coachella Weekend 1", date: "2026-04-10", category: "entertainment", description: "Iconic desert music festival" },
  { id: "ent-9", name: "Glastonbury Festival", date: "2026-06-24", category: "entertainment", description: "Legendary UK music festival" },
  { id: "ent-10", name: "Sundance Film Festival", date: "2026-01-22", category: "entertainment", description: "Independent film celebration" },
  { id: "space-1", name: "Artemis II Moon Flyby", date: "2026-02-06", category: "space", description: "First crewed lunar mission since Apollo" },
  { id: "space-2", name: "SpaceX Mars Window", date: "2026-10-01", category: "space", description: "Optimal launch period for Mars missions" },
  { id: "space-3", name: "Dream Chaser Demo Flight", date: "2026-11-15", category: "space", description: "Sierra Space cargo spacecraft debut" },
  { id: "space-4", name: "Europa Clipper Arrival Prep", date: "2026-06-01", category: "space", description: "Jupiter moon mission milestones" },
  { id: "space-5", name: "Starship Orbital Tests", date: "2026-03-15", category: "space", description: "SpaceX lunar lander development" },
  { id: "gaming-1", name: "GTA 6 Release", date: "2026-11-19", category: "gaming", description: "Grand Theft Auto VI launches on consoles" },
  { id: "gaming-2", name: "Summer Game Fest", date: "2026-06-05", category: "gaming", description: "Major game announcements and trailers" },
  { id: "gaming-3", name: "Gamescom", date: "2026-08-26", category: "gaming", description: "Europe largest gaming convention" },
  { id: "gaming-4", name: "The Game Awards", date: "2026-12-10", category: "gaming", description: "Gaming industry biggest celebration" },
  { id: "gaming-5", name: "GDC 2026", date: "2026-03-09", category: "gaming", description: "Game Developers Conference" },
  { id: "gaming-6", name: "Tokyo Game Show", date: "2026-09-24", category: "gaming", description: "Japan premier gaming expo" },
  { id: "gaming-7", name: "Nintendo Direct", date: "2026-02-15", category: "gaming", description: "Switch 2 announcements expected" },
  { id: "gaming-8", name: "PlayStation Showcase", date: "2026-05-28", category: "gaming", description: "PS5 games and hardware reveals" },
  { id: "culture-1", name: "Burning Man", date: "2026-08-30", category: "culture", description: "Art and community in Black Rock Desert" },
  { id: "culture-2", name: "Art Basel Miami", date: "2026-12-03", category: "culture", description: "Contemporary art fair" },
  { id: "culture-3", name: "Venice Biennale", date: "2026-05-09", category: "culture", description: "International art exhibition" },
  { id: "culture-4", name: "Frieze London", date: "2026-10-14", category: "culture", description: "Contemporary art fair" },
  { id: "culture-5", name: "SXSW", date: "2026-03-13", category: "culture", description: "South by Southwest festival in Austin" }
];

var events = [];
var upvotes = {};
var currentFilter = "all";
var currentSort = "popular";
var updateInterval = null;

// Category emoji mapping
var categoryEmojis = {
  "sports": "🏆",
  "tech": "💻",
  "fashion": "👗",
  "entertainment": "🎬",
  "space": "🚀",
  "gaming": "🎮",
  "culture": "🎨"
};

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  try {
    console.log("Initializing app...");
    loadData();
    setupEventListeners();
    renderEvents();
    startUpdateLoop();
    console.log("App initialized successfully");
  } catch (error) {
    console.error("Initialization error:", error);
    alert("Error initializing app: " + error.message);
  }
}

function loadData() {
  try {
    var savedUpvotes = localStorage.getItem("upvotes");
    if (savedUpvotes) {
      upvotes = JSON.parse(savedUpvotes);
    }
  } catch (e) {
    console.error("Error loading upvotes:", e);
    upvotes = {};
  }

  events = [];
  for (var i = 0; i < PREPOPULATED_EVENTS.length; i++) {
    var event = PREPOPULATED_EVENTS[i];
    events.push({
      id: event.id,
      name: event.name,
      date: event.date,
      category: event.category,
      description: event.description,
      timestamp: new Date(event.date).getTime(),
      upvoteCount: upvotes[event.id] || 0
    });
  }
  console.log("Loaded " + events.length + " events");
}

function saveUpvotes() {
  try {
    localStorage.setItem("upvotes", JSON.stringify(upvotes));
  } catch (e) {
    console.error("Error saving upvotes:", e);
  }
}

function setupEventListeners() {
  var filterTabs = document.querySelectorAll(".filter-tab");
  for (var i = 0; i < filterTabs.length; i++) {
    filterTabs[i].addEventListener("click", handleFilterClick);
  }

  var sortPopular = document.getElementById("sort-popular");
  var sortChrono = document.getElementById("sort-chrono");

  if (sortPopular) {
    sortPopular.addEventListener("click", function() {
      var sortBtns = document.querySelectorAll(".sort-btn");
      for (var i = 0; i < sortBtns.length; i++) {
        sortBtns[i].classList.remove("active");
      }
      sortPopular.classList.add("active");
      currentSort = "popular";
      renderEvents();
    });
  }

  if (sortChrono) {
    sortChrono.addEventListener("click", function() {
      var sortBtns = document.querySelectorAll(".sort-btn");
      for (var i = 0; i < sortBtns.length; i++) {
        sortBtns[i].classList.remove("active");
      }
      sortChrono.classList.add("active");
      currentSort = "chrono";
      renderEvents();
    });
  }
}

function handleFilterClick(e) {
  var filterTabs = document.querySelectorAll(".filter-tab");
  for (var i = 0; i < filterTabs.length; i++) {
    filterTabs[i].classList.remove("active");
  }
  e.target.classList.add("active");
  currentFilter = e.target.getAttribute("data-category");
  renderEvents();
}

function renderEvents() {
  var grid = document.getElementById("events-grid");
  var emptyState = document.getElementById("empty-state");

  if (!grid) {
    console.error("Grid element not found!");
    return;
  }

  var filtered = [];
  if (currentFilter === "all") {
    filtered = events.slice();
  } else {
    for (var i = 0; i < events.length; i++) {
      if (events[i].category === currentFilter) {
        filtered.push(events[i]);
      }
    }
  }

  if (currentSort === "popular") {
    filtered.sort(function(a, b) {
      return (upvotes[b.id] || 0) - (upvotes[a.id] || 0);
    });
  } else {
    filtered.sort(function(a, b) {
      return a.timestamp - b.timestamp;
    });
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  var html = "";
  for (var i = 0; i < filtered.length; i++) {
    html += renderEventCard(filtered[i]);
  }
  grid.innerHTML = html;

  // Attach upvote listeners
  for (var i = 0; i < filtered.length; i++) {
    var eventId = filtered[i].id;
    var btn = document.querySelector('[data-upvote-id="' + eventId + '"]');
    if (btn) {
      btn.onclick = createUpvoteHandler(eventId);
    }
  }
}

function createUpvoteHandler(eventId) {
  return function() {
    toggleUpvote(eventId);
  };
}

function renderEventCard(event) {
  var now = Date.now();
  var timeData = calculateTimeRemaining(event.timestamp, now);
  var isCompleted = timeData.total <= 0;
  var upvoteCount = upvotes[event.id] || 0;
  var hasUpvoted = upvoteCount > 0;

  var completedClass = isCompleted ? "completed" : "";
  var upvotedClass = hasUpvoted ? "upvoted" : "";
  var catUpper = event.category.toUpperCase();
  var emoji = categoryEmojis[event.category] || "📅";

  // Calculate progress and urgency
  var progressPercent = calculateProgress(event.timestamp, now);
  var urgencyClass = getUrgencyClass(timeData.total);

  return '<div class="event-card ' + completedClass + ' ' + urgencyClass + '" data-category="' + event.category + '" data-event-id="' + event.id + '">' +
    '<div class="event-header">' +
    '<span class="event-category">' + catUpper + '</span>' +
    '<button class="upvote-btn ' + upvotedClass + '" data-upvote-id="' + event.id + '">↑ ' + upvoteCount + '</button>' +
    '</div>' +
    '<div class="event-content">' +
    '<div class="event-icon">' + emoji + '</div>' +
    '<h2 class="event-name">' + event.name + '</h2>' +
    '<div class="event-date">' + formatDate(event.date) + '</div>' +
    '<div class="countdown-display">' + renderCountdown(timeData, isCompleted) + '</div>' +
    '<div class="progress-bar-container">' +
    '<div class="progress-bar" style="width: ' + progressPercent + '%"></div>' +
    '</div>' +
    '<p class="event-description">' + event.description + '</p>' +
    '</div>' +
    '</div>';
}

function renderCountdown(timeData, isCompleted) {
  if (isCompleted) {
    return '<div class="countdown-unit"><div class="countdown-value">✓</div><div class="countdown-label">DONE</div></div>';
  }

  var units = [];

  // Always show seconds for maximum live countdown feel
  if (timeData.years > 0) {
    units.push({ value: timeData.years, label: "YR", flip: false });
    units.push({ value: timeData.months, label: "MO", flip: false });
    units.push({ value: timeData.days, label: "D", flip: false });
    units.push({ value: timeData.hours, label: "H", flip: false });
  } else if (timeData.months > 0) {
    units.push({ value: timeData.months, label: "MO", flip: false });
    units.push({ value: timeData.days, label: "D", flip: false });
    units.push({ value: timeData.hours, label: "H", flip: false });
    units.push({ value: timeData.minutes, label: "M", flip: true });
  } else if (timeData.days > 0) {
    units.push({ value: timeData.days, label: "D", flip: false });
    units.push({ value: timeData.hours, label: "H", flip: false });
    units.push({ value: timeData.minutes, label: "M", flip: true });
    units.push({ value: timeData.seconds, label: "S", flip: true });
  } else {
    units.push({ value: timeData.hours, label: "H", flip: false });
    units.push({ value: timeData.minutes, label: "M", flip: true });
    units.push({ value: timeData.seconds, label: "S", flip: true });
  }

  // Always add minutes and seconds to the display for live feel
  var hasMinutes = false;
  var hasSeconds = false;
  for (var i = 0; i < units.length; i++) {
    if (units[i].label === "M") hasMinutes = true;
    if (units[i].label === "S") hasSeconds = true;
  }

  if (!hasMinutes) {
    units.push({ value: timeData.minutes, label: "M", flip: true });
  }
  if (!hasSeconds) {
    units.push({ value: timeData.seconds, label: "S", flip: true });
  }

  var html = "";
  var displayCount = Math.min(units.length, 6);
  for (var i = 0; i < displayCount; i++) {
    var flipClass = units[i].flip ? "flip-number" : "";
    html += '<div class="countdown-unit">' +
      '<div class="countdown-value ' + flipClass + '">' + units[i].value + '</div>' +
      '<div class="countdown-label">' + units[i].label + '</div>' +
      '</div>';
  }

  return html;
}

function calculateTimeRemaining(targetDate, now) {
  var total = targetDate - now;

  if (total <= 0) {
    return { total: 0, years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  var seconds = Math.floor((total / 1000) % 60);
  var minutes = Math.floor((total / 1000 / 60) % 60);
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  var totalDays = Math.floor(total / (1000 * 60 * 60 * 24));
  var years = Math.floor(totalDays / 365);
  var months = Math.floor((totalDays % 365) / 30);
  var days = Math.floor((totalDays % 365) % 30);

  return {
    total: total,
    years: years,
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function formatDate(dateStr) {
  var date = new Date(dateStr);
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

function calculateProgress(targetTimestamp, now) {
  // Calculate progress from Jan 1, 2026 to the event
  var yearStart = new Date("2026-01-01").getTime();
  var total = targetTimestamp - yearStart;
  var elapsed = now - yearStart;

  if (elapsed < 0) return 0;
  if (elapsed > total) return 100;

  var percent = (elapsed / total) * 100;
  return Math.max(0, Math.min(100, percent));
}

function getUrgencyClass(timeRemaining) {
  var days = timeRemaining / (1000 * 60 * 60 * 24);

  if (days <= 1) return "urgency-critical";  // Red - 24 hours
  if (days <= 7) return "urgency-high";      // Orange - 7 days
  if (days <= 30) return "urgency-medium";   // Yellow - 30 days
  return "urgency-low";                       // Green/default
}

function toggleUpvote(eventId) {
  if (!upvotes[eventId]) {
    upvotes[eventId] = 0;
  }
  upvotes[eventId] += 1;

  for (var i = 0; i < events.length; i++) {
    if (events[i].id === eventId) {
      events[i].upvoteCount = upvotes[eventId];
      break;
    }
  }

  saveUpvotes();
  updateEventCard(eventId);

  if (currentSort === "popular") {
    renderEvents();
  }
}

function updateEventCard(eventId) {
  var card = document.querySelector('[data-event-id="' + eventId + '"]');
  if (!card) return;

  var btn = card.querySelector('[data-upvote-id="' + eventId + '"]');
  if (btn) {
    btn.textContent = '↑ ' + (upvotes[eventId] || 0);
    btn.classList.add("upvoted");
  }
}

function updateCountdowns() {
  var now = Date.now();

  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    var card = document.querySelector('[data-event-id="' + event.id + '"]');
    if (!card) continue;

    var timeData = calculateTimeRemaining(event.timestamp, now);
    var isCompleted = timeData.total <= 0;

    if (isCompleted) {
      card.classList.add("completed");
    }

    // Update countdown display
    var countdownDisplay = card.querySelector(".countdown-display");
    if (countdownDisplay) {
      countdownDisplay.innerHTML = renderCountdown(timeData, isCompleted);
    }

    // Update progress bar
    var progressPercent = calculateProgress(event.timestamp, now);
    var progressBar = card.querySelector(".progress-bar");
    if (progressBar) {
      progressBar.style.width = progressPercent + "%";
    }

    // Update urgency class
    var urgencyClass = getUrgencyClass(timeData.total);
    card.classList.remove("urgency-low", "urgency-medium", "urgency-high", "urgency-critical");
    card.classList.add(urgencyClass);
  }
}

function startUpdateLoop() {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  updateInterval = setInterval(function() {
    updateCountdowns();
  }, 1000);
}
