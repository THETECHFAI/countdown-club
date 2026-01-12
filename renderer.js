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
var myVotes = {}; // Track which events THIS user has voted for
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
    loadData(); // This will call renderEvents() after loading Firebase votes
    setupEventListeners();
    startUpdateLoop();
    console.log("App initialized successfully");
  } catch (error) {
    console.error("Initialization error:", error);
    alert("Error initializing app: " + error.message);
  }
}

function loadData() {
  // Load user's personal votes from localStorage
  try {
    var savedMyVotes = localStorage.getItem("myVotes");
    if (savedMyVotes) {
      myVotes = JSON.parse(savedMyVotes);
    }
  } catch (e) {
    console.error("Error loading my votes:", e);
    myVotes = {};
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
      upvoteCount: 0 // Will be loaded from Firebase
    });
  }
  console.log("Loaded " + events.length + " events");

  // Load votes from Firebase
  loadVotesFromFirebase();
}

function loadVotesFromFirebase() {
  if (!window.db) {
    console.log("Firebase not ready yet, retrying...");
    setTimeout(loadVotesFromFirebase, 100);
    return;
  }

  console.log("Loading votes from Firebase...");
  var promises = [];

  for (var i = 0; i < events.length; i++) {
    (function(eventId) {
      var docRef = window.firestoreDoc(window.db, "votes", eventId);
      var promise = window.firestoreGetDoc(docRef).then(function(docSnap) {
        if (docSnap.exists()) {
          var count = docSnap.data().count || 0;
          upvotes[eventId] = count;

          // Update the event in the events array
          for (var j = 0; j < events.length; j++) {
            if (events[j].id === eventId) {
              events[j].upvoteCount = count;
              break;
            }
          }
        }
      }).catch(function(error) {
        console.error("Error loading votes for " + eventId + ":", error);
      });
      promises.push(promise);
    })(events[i].id);
  }

  Promise.all(promises).then(function() {
    console.log("All votes loaded from Firebase");
    renderEvents();
  });
}

// Removed - now using Firebase instead of localStorage

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
    var upvoteBtn = document.querySelector('[data-upvote-id="' + eventId + '"]');
    if (upvoteBtn) {
      upvoteBtn.onclick = createUpvoteHandler(eventId);
    }

    // Attach share button listener
    var shareBtn = document.querySelector('[data-share-id="' + eventId + '"]');
    if (shareBtn) {
      shareBtn.onclick = createShareHandler(eventId);
    }

    // Attach tweet button listener
    var tweetBtn = document.querySelector('[data-tweet-id="' + eventId + '"]');
    if (tweetBtn) {
      tweetBtn.onclick = createTweetHandler(eventId);
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
  var hasUpvoted = myVotes[event.id] === true; // Check if THIS user voted

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
    '<div class="share-buttons">' +
    '<button class="share-btn" data-share-id="' + event.id + '">📸 Share</button>' +
    '<button class="tweet-btn" data-tweet-id="' + event.id + '">🐦 Tweet</button>' +
    '</div>' +
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
  if (!window.db) {
    console.error("Firebase not ready");
    return;
  }

  var hasVoted = myVotes[eventId] === true;
  var incrementValue = hasVoted ? -1 : 1; // If already voted, decrement; else increment

  // Optimistic update - update UI immediately
  if (!upvotes[eventId]) {
    upvotes[eventId] = 0;
  }
  upvotes[eventId] += incrementValue;

  // Update local vote tracking
  if (hasVoted) {
    delete myVotes[eventId]; // Remove vote
  } else {
    myVotes[eventId] = true; // Add vote
  }

  // Save myVotes to localStorage
  try {
    localStorage.setItem("myVotes", JSON.stringify(myVotes));
  } catch (e) {
    console.error("Error saving my votes:", e);
  }

  // Update events array
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === eventId) {
      events[i].upvoteCount = upvotes[eventId];
      break;
    }
  }

  updateEventCard(eventId);

  // Save to Firebase
  var docRef = window.firestoreDoc(window.db, "votes", eventId);
  window.firestoreSetDoc(docRef, {
    count: window.firestoreIncrement(incrementValue)
  }, { merge: true }).then(function() {
    console.log("Vote " + (hasVoted ? "removed" : "added") + " for " + eventId);
    // Reload to get accurate count from server
    loadVotesFromFirebase();
  }).catch(function(error) {
    console.error("Error saving vote:", error);
    // Revert optimistic update on error
    upvotes[eventId] -= incrementValue;
    if (hasVoted) {
      myVotes[eventId] = true; // Restore vote
    } else {
      delete myVotes[eventId]; // Remove vote
    }
    localStorage.setItem("myVotes", JSON.stringify(myVotes));
    for (var i = 0; i < events.length; i++) {
      if (events[i].id === eventId) {
        events[i].upvoteCount = upvotes[eventId];
        break;
      }
    }
    updateEventCard(eventId);
  });

  // Don't re-sort immediately - let the card stay in place
  // Grid will re-sort on next filter change or page refresh
}

function updateEventCard(eventId) {
  var card = document.querySelector('[data-event-id="' + eventId + '"]');
  if (!card) return;

  var btn = card.querySelector('[data-upvote-id="' + eventId + '"]');
  if (btn) {
    btn.textContent = '↑ ' + (upvotes[eventId] || 0);

    // Update button style based on whether THIS user voted
    if (myVotes[eventId] === true) {
      btn.classList.add("upvoted");
    } else {
      btn.classList.remove("upvoted");
    }
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

// Share functionality
function createShareHandler(eventId) {
  return function() {
    generateShareImage(eventId);
  };
}

function createTweetHandler(eventId) {
  return function() {
    tweetEvent(eventId);
  };
}

function generateShareImage(eventId) {
  var event = null;
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === eventId) {
      event = events[i];
      break;
    }
  }
  if (!event) return;

  // Create canvas
  var canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 675;
  var ctx = canvas.getContext('2d');

  // Get countdown data
  var timeData = calculateTimeRemaining(event.timestamp, Date.now());
  var emoji = categoryEmojis[event.category] || "📅";

  // Get category color
  var categoryColors = {
    "sports": "#FF0000",
    "tech": "#0066FF",
    "fashion": "#FF006E",
    "entertainment": "#8B00FF",
    "space": "#00D9FF",
    "gaming": "#00FF85",
    "culture": "#FFB800"
  };
  var categoryColor = categoryColors[event.category] || "#000000";

  // Draw image
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 1200, 675);

  // Category color bar
  ctx.fillStyle = categoryColor;
  ctx.fillRect(0, 0, 1200, 20);

  // Emoji
  ctx.font = '140px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(emoji, 600, 200);

  // Event name
  ctx.fillStyle = '#000000';
  ctx.font = 'bold 72px serif';
  ctx.textAlign = 'center';
  ctx.fillText(event.name, 600, 310);

  // Countdown
  var units = [];
  if (timeData.years > 0) units.push({ value: timeData.years, label: 'YR' });
  if (timeData.months > 0) units.push({ value: timeData.months, label: 'MO' });
  if (timeData.days > 0) units.push({ value: timeData.days, label: 'D' });
  if (timeData.hours > 0 && units.length < 4) units.push({ value: timeData.hours, label: 'H' });
  if (timeData.minutes > 0 && units.length < 4) units.push({ value: timeData.minutes, label: 'M' });

  var startX = 250;
  ctx.textAlign = 'center';

  for (var i = 0; i < Math.min(units.length, 4); i++) {
    var x = startX + (i * 230);

    // Number
    ctx.font = 'bold 90px serif';
    ctx.fillStyle = '#000000';
    ctx.fillText(units[i].value, x, 460);

    // Label
    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = '#757575';
    ctx.fillText(units[i].label, x, 500);
  }

  // Bottom branding
  ctx.font = 'bold 32px sans-serif';
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.fillText('COUNTDOWN CLUB', 600, 590);

  ctx.font = '22px sans-serif';
  ctx.fillStyle = '#757575';
  ctx.fillText('countdown-club.vercel.app', 600, 625);

  // Border
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 8;
  ctx.strokeRect(0, 0, 1200, 675);

  // Download
  var link = document.createElement('a');
  link.download = 'countdown-club-' + event.id + '.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function tweetEvent(eventId) {
  var event = null;
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === eventId) {
      event = events[i];
      break;
    }
  }
  if (!event) return;

  var timeData = calculateTimeRemaining(event.timestamp, Date.now());
  var emoji = categoryEmojis[event.category] || "📅";

  // Build countdown text
  var countdownText = "";
  if (timeData.years > 0) countdownText += timeData.years + " years ";
  if (timeData.months > 0) countdownText += timeData.months + " months ";
  if (timeData.days > 0) countdownText += timeData.days + " days ";

  var tweetText = event.name + " in " + countdownText.trim() + "! " + emoji + "\n\nTrack it at https://countdown-club.vercel.app/";

  var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText);
  window.open(tweetUrl, '_blank');
}
