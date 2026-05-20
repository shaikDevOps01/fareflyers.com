/*
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              FAREFLYERS - COMPLETE JAVASCRIPT                  ║
 * ║              Cleaned - No Duplicates                         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ============================================================
// SITE CONFIGURATION
// ============================================================
const SITE_CONFIG = {
    supportEmail: "support@fareflyers.com",
    copyrightYear: "2025",
    toastInvalidRoute: "⚠️ Please enter both origin and destination.",
    toastInvalidEmail: "⚠️ Please enter a valid email address.",
    toastWaitlistOk: "✅ You're on the waitlist!",
    waitlistSuccess: "✅ You're on the list! We'll reach out when FareFlyers goes live. Thank you for your support.",
    destinations: [
        { from: "Hyderabad", to: "Delhi" },
        { from: "Mumbai", to: "Goa" },
        { from: "Bangalore", to: "Chennai" },
        { from: "Delhi", to: "Dubai" },
        { from: "Kolkata", to: "Bangalore" },
        { from: "Pune", to: "Hyderabad" },
        { from: "Chennai", to: "Singapore" },
        { from: "Ahmedabad", to: "Mumbai" },
        { from: "Kochi", to: "Delhi" },
        { from: "Jaipur", to: "Goa" }
    ]
};

// ============================================================
// LOGO CLICK - SCROLL TO SEARCH
// ============================================================
const logoClick = document.getElementById('logoClick');
if (logoClick) {
    logoClick.addEventListener('click', function() {
        const searchSection = document.getElementById('search');
        if (searchSection) {
            searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// ============================================================
// RENDER DESTINATIONS (Main)
// ============================================================
(function renderDestinations() {
    const grid = document.getElementById('destGrid');
    if (!grid) return;
    grid.innerHTML = SITE_CONFIG.destinations.map(d => `
        <div class="dest-card" onclick="fillRoute('${d.from}','${d.to}')">
            <div class="dest-from">${d.from}</div>
            <div class="dest-arrow">→</div>
            <div class="dest-to">${d.to}</div>
        </div>
    `).join('');
})();

// ============================================================
// RENDER DESTINATIONS IN SEARCH BOX
// ============================================================
(function renderDestinationsInSearch() {
    const grid = document.getElementById('destGridSearch');
    if (!grid) return;
    
    const destinations = [
        { from: "Mumbai", to: "Delhi" },
        { from: "Bangalore", to: "Mumbai" },
        { from: "Chennai", to: "Mumbai" },
        { from: "Kolkata", to: "Hyderabad" },
        { from: "Kochi", to: "Delhi" },
        { from: "Pune", to: "Bangalore" },
        { from: "Delhi", to: "Mumbai" },
        { from: "Noida", to: "Mumbai" },
        { from: "Ahmedabad", to: "Mumbai" }
    ];
    
    grid.innerHTML = destinations.map(d => `
        <div class="dest-card" onclick="fillRoute('${d.from}','${d.to}')">
            <span class="dest-from">${d.from}</span>
            <span class="dest-arrow">→</span>
            <span class="dest-to">${d.to}</span>
        </div>
    `).join('');
})();

// ============================================================
// SCROLL FADE IN ANIMATION
// ============================================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============================================================
// SEARCH SCROLL FUNCTION
// ============================================================
function scrollToSearch() {
    const searchSection = document.getElementById('search');
    if (searchSection) searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// FILL ROUTE FROM DESTINATION CARDS
// ============================================================
function fillRoute(from, to) {
    const fromInput = document.getElementById('s-from');
    const toInput = document.getElementById('s-to');
    if (fromInput) fromInput.value = from;
    if (toInput) toInput.value = to;
    scrollToSearch();
    showToast(`Route set: ${from} → ${to}`);
}

// ============================================================
// MAIN ANALYSIS FLOW
// ============================================================
function startAnalysis() {
    const from = document.getElementById('s-from').value.trim();
    const to = document.getElementById('s-to').value.trim();
    
    if (!from || !to) {
        showToast(SITE_CONFIG.toastInvalidRoute);
        return;
    }
    
    const overlay = document.getElementById('analyzeOverlay');
    if (overlay) overlay.classList.add('active');
    
    const routeBadge = document.getElementById('routeBadge');
    if (routeBadge) routeBadge.textContent = `✈ ${from.toUpperCase()} → ${to.toUpperCase()}`;
    
    const steps = ['step1', 'step2', 'step3', 'step4', 'step5'];
    const delays = [0, 2500, 5000, 8500, 11500];
    
    steps.forEach((id, i) => {
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.classList.add('active');
            if (i > 0) {
                const prevEl = document.getElementById(steps[i - 1]);
                if (prevEl) {
                    prevEl.classList.remove('active');
                    prevEl.classList.add('done');
                }
            }
        }, delays[i]);
    });
    
    setTimeout(() => {
        if (overlay) overlay.classList.remove('active');
        steps.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('active', 'done');
        });
        const resultSection = document.getElementById('resultSection');
        if (resultSection) {
            resultSection.classList.add('active');
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 14000);
}

// ============================================================
// CLEAR RESULTS
// ============================================================
function clearResults() {
    const resultSection = document.getElementById('resultSection');
    if (resultSection) resultSection.classList.remove('active');
    scrollToSearch();
}

// ============================================================
// WAITLIST SIGNUP
// ============================================================
const waitlistForm = document.getElementById('waitlistForm');
const waitlistEmail = document.getElementById('waitlistEmail');
const signupSuccess = document.getElementById('signupSuccess');

if (waitlistForm) {
    waitlistForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = waitlistEmail.value.trim();
        if (!email || !email.includes('@')) {
            showToast('⚠️ Please enter a valid email address');
            return;
        }
        
        const FORM_ID = '1FAIpQLSeDzQ-IvRsJs2LRJA6PGkKkjRfCDMlZnFQdKlnJtZ4WC5pRWw';
        const ENTRY_NUMBER = '647961689';
        
        const iframe = document.createElement('iframe');
        iframe.name = 'hiddenFrame';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
        form.target = 'hiddenFrame';
        
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = `entry.${ENTRY_NUMBER}`;
        input.value = email;
        form.appendChild(input);
        
        document.body.appendChild(form);
        form.submit();
        
        setTimeout(() => {
            document.body.removeChild(form);
            document.body.removeChild(iframe);
        }, 1000);
        
        waitlistForm.style.display = 'none';
        signupSuccess.style.display = 'block';
        showToast('✅ You\'re on the waitlist!');
        waitlistEmail.value = '';
    });
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
}

// ============================================================
// SET DEFAULT DATE
// ============================================================
(function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('s-date');
    if (dateInput) {
        dateInput.value = today;
        dateInput.setAttribute('min', today);
    }
})();
// ============================================================
// HERO SLIDESHOW
// ============================================================
let currentSlideIndex = 0;
const totalSlides = 5;  // Changed from 10 to 5
let slideInterval;

function rotateToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    
    if (!slides.length) return;
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    
    // Reset progress bar animation
    const progressBar = document.getElementById(`pb${index}`);
    if (progressBar) {
        progressBar.style.animation = 'none';
        setTimeout(() => {
            progressBar.style.animation = 'progressFill 8s linear infinite';
        }, 10);
    }
    
    // Update counter
    const counter = document.getElementById('slideCounter');
    if (counter) {
        counter.textContent = `${String(index + 1).padStart(2, '0')} / ${totalSlides}`;
    }
}

function nextSlideAuto() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    rotateToSlide(currentSlideIndex);
}

function nextSlide() {
    // Reset interval when manually clicked
    clearInterval(slideInterval);
    nextSlideAuto();
    // Restart interval
    slideInterval = setInterval(nextSlideAuto, 8000);
}

function prevSlide() {
    clearInterval(slideInterval);
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    rotateToSlide(currentSlideIndex);
    slideInterval = setInterval(nextSlideAuto, 8000);
}

function goSlide(index) {
    clearInterval(slideInterval);
    currentSlideIndex = index;
    rotateToSlide(currentSlideIndex);
    slideInterval = setInterval(nextSlideAuto, 8000);
}

// Initialize slideshow
if (document.querySelectorAll('.slide').length > 0) {
    // Create dots dynamically if they don't exist
    const dotsContainer = document.getElementById('slideDots');
    if (dotsContainer && dotsContainer.children.length === 0) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
            dot.onclick = (function(idx) { return function() { goSlide(idx); }; })(i);
            dotsContainer.appendChild(dot);
        }
    }
    
    rotateToSlide(0);
    slideInterval = setInterval(nextSlideAuto, 8000);
}

// ============================================================
// MOBILE HAMBURGER MENU
// ============================================================
const hamburger = document.getElementById('ham');
if (hamburger) {
    hamburger.addEventListener('click', function() {
        const nav = document.querySelector('.nav-desktop');
        if (nav) {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '70px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'rgba(7,13,26,0.95)';
                nav.style.backdropFilter = 'blur(18px)';
                nav.style.padding = '20px';
                nav.style.gap = '16px';
                nav.style.zIndex = '999';
            }
        }
    });
}

// ============================================================
// LOUNGE SEARCH FUNCTIONALITY
// ============================================================
const loungeSearchInput = document.getElementById('loungeSearchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const clearSearchBtn = document.getElementById('clearSearch');
const loungeResultArea = document.getElementById('loungeResultArea');

if (loungeSearchInput) {
    loungeSearchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.trim();
        if (searchTerm.length > 0) {
            if (clearSearchBtn) clearSearchBtn.style.display = 'block';
            const suggestions = searchCards(searchTerm);
            displaySuggestions(suggestions);
        } else {
            if (clearSearchBtn) clearSearchBtn.style.display = 'none';
            if (searchSuggestions) searchSuggestions.classList.remove('show');
        }
    });
    
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
            loungeSearchInput.value = '';
            clearSearchBtn.style.display = 'none';
            if (searchSuggestions) searchSuggestions.classList.remove('show');
            if (loungeResultArea) loungeResultArea.innerHTML = '';
            loungeSearchInput.focus();
        });
    }
    
    document.addEventListener('click', function(e) {
        if (!loungeSearchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            if (searchSuggestions) searchSuggestions.classList.remove('show');
        }
    });
}

function displaySuggestions(suggestions) {
    if (!searchSuggestions) return;
    if (suggestions.length === 0) {
        searchSuggestions.classList.remove('show');
        return;
    }
    
    searchSuggestions.innerHTML = suggestions.map(card => `
        <div class="suggestion-item" onclick="selectSuggestion('${card.name.replace(/'/g, "\\'")}', '${card.bank}')">
            <div>
                <span class="suggestion-name">${card.name}</span>
                <span class="suggestion-bank">${card.bank}</span>
            </div>
            ${card.loungeAccess ? '<span class="suggestion-badge">✅ Lounge Access</span>' : '<span class="suggestion-badge" style="background:#ff6b6b20; color:#ff6b6b;">❌ No Access</span>'}
        </div>
    `).join('');
    
    searchSuggestions.classList.add('show');
}

function selectSuggestion(cardName, bank) {
    loungeSearchInput.value = cardName;
    if (searchSuggestions) searchSuggestions.classList.remove('show');
    if (clearSearchBtn) clearSearchBtn.style.display = 'block';
    searchLoungeCard();
}

function quickSearchCard(cardName) {
    loungeSearchInput.value = cardName;
    if (clearSearchBtn) clearSearchBtn.style.display = 'block';
    if (searchSuggestions) searchSuggestions.classList.remove('show');
    searchLoungeCard();
}

function searchLoungeCard() {
    const searchTerm = loungeSearchInput.value.trim();
    if (!searchTerm) {
        showToast('🔍 Please enter a card name to search');
        return;
    }
    
    const card = getCardDetails(searchTerm);
    if (!card) {
        displayNoAccessResult(searchTerm);
        return;
    }
    
    if (card.loungeAccess) {
        displayAccessResult(card);
    } else {
        displayNoAccessResult(card.name);
    }
}

function displayAccessResult(card) {
    if (!loungeResultArea) return;
    
    const domesticText = card.domesticVisits === "Unlimited" ? "Unlimited visits/year" : `${card.domesticVisits} visits/year`;
    const domesticQuarter = card.domesticPerQuarter ? `(${card.domesticPerQuarter} per quarter)` : '';
    const domesticSpend = card.domesticSpend ? `<div class="spend-note">💰 ${card.domesticSpend}</div>` : '';
    const internationalText = card.internationalVisits === "Unlimited" ? "Unlimited visits/year" : card.internationalVisits === "0" ? "Not available" : `${card.internationalVisits} visits/year`;
    const internationalSpend = card.internationalSpend ? `<div class="spend-note">💰 ${card.internationalSpend}</div>` : '';
    
    loungeResultArea.innerHTML = `
        <div class="access-result-card">
            <div class="access-result-header">
                <div class="card-title-section">
                    <div class="card-bank">${card.bank} Bank</div>
                    <h3>${card.name} ${card.variant || ''}</h3>
                </div>
                <div class="access-status-badge">✅ Lounge Access Available</div>
            </div>
            <div class="access-details-grid">
                <div class="access-detail-item">
                    <span class="detail-label">✈ Domestic Lounges</span>
                    <span class="detail-value">${domesticText}</span>
                    <span class="detail-sub">${domesticQuarter}</span>
                    ${domesticSpend}
                </div>
                <div class="access-detail-item">
                    <span class="detail-label">🌍 International Lounges</span>
                    <span class="detail-value">${internationalText}</span>
                    ${card.network ? `<span class="detail-sub">Network: ${card.network}</span>` : ''}
                    ${internationalSpend}
                </div>
            </div>
        </div>
    `;
    loungeResultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function displayNoAccessResult(cardName) {
    if (!loungeResultArea) return;
    loungeResultArea.innerHTML = `
        <div class="no-access-card">
            <div class="sad-emoji">😢</div>
            <h4>Sorry, "${cardName}" doesn't have lounge access</h4>
            <p>Don't worry! Many cards offer FREE lounge access with zero annual fees.</p>
            <a href="lounge/cards.html" class="how-about-btn" style="display: inline-block; text-decoration: none;">
                🔥 How about these 50+ cards with lounge access?
            </a>
        </div>
    `;
    loungeResultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Helper function to escape HTML
function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

console.log('✅ FareFlyers script loaded successfully');

// ============================================================
// AIRPORT DATA FOR SEARCH SUGGESTIONS
// ============================================================
const airportsData = [
    ["DEL", "Indira Gandhi International Airport", "New Delhi", "Delhi"],
    ["BOM", "Chhatrapati Shivaji Maharaj International Airport", "Mumbai", "Maharashtra"],
    ["MAA", "Chennai International Airport", "Chennai", "Tamil Nadu"],
    ["CCU", "Netaji Subhas Chandra Bose International Airport", "Kolkata", "West Bengal"],
    ["BLR", "Kempegowda International Airport", "Bengaluru", "Karnataka"],
    ["HYD", "Rajiv Gandhi International Airport", "Hyderabad", "Telangana"],
    ["COK", "Cochin International Airport", "Kochi", "Kerala"],
    ["AMD", "Sardar Vallabhbhai Patel International Airport", "Ahmedabad", "Gujarat"],
    ["PNQ", "Pune Airport", "Pune", "Maharashtra"],
    ["GOI", "Goa International Airport", "Goa", "Goa"],
    ["GAU", "Lokpriya Gopinath Bordoloi International Airport", "Guwahati", "Assam"],
    ["JAI", "Jaipur International Airport", "Jaipur", "Rajasthan"],
    ["LKO", "Chaudhary Charan Singh International Airport", "Lucknow", "Uttar Pradesh"],
    ["PAT", "Lok Nayak Jayaprakash Airport", "Patna", "Bihar"],
    ["IXC", "Shaheed Bhagat Singh International Airport", "Chandigarh", "Punjab"],
    ["VNS", "Lal Bahadur Shastri International Airport", "Varanasi", "Uttar Pradesh"],
    ["NAG", "Dr. Babasaheb Ambedkar International Airport", "Nagpur", "Maharashtra"],
    ["TRV", "Trivandrum International Airport", "Thiruvananthapuram", "Kerala"],
    ["CJB", "Coimbatore International Airport", "Coimbatore", "Tamil Nadu"],
    ["SXR", "Sheikh ul-Alam International Airport", "Srinagar", "Jammu & Kashmir"],
    ["IXE", "Mangaluru International Airport", "Mangaluru", "Karnataka"],
    ["BBI", "Biju Patnaik International Airport", "Bhubaneswar", "Odisha"],
    ["VTZ", "Visakhapatnam Airport", "Visakhapatnam", "Andhra Pradesh"],
    ["CCJ", "Calicut International Airport", "Kozhikode", "Kerala"],
    ["IXM", "Madurai Airport", "Madurai", "Tamil Nadu"],
    ["TRZ", "Tiruchirappalli International Airport", "Tiruchirappalli", "Tamil Nadu"],
    ["IDR", "Devi Ahilya Bai Holkar Airport", "Indore", "Madhya Pradesh"],
    ["ATQ", "Sri Guru Ram Dass Jee International Airport", "Amritsar", "Punjab"],
    ["UDR", "Maharana Pratap Airport", "Udaipur", "Rajasthan"],
    ["JDH", "Jodhpur Airport", "Jodhpur", "Rajasthan"],
    ["RAJ", "Rajkot Airport", "Rajkot", "Gujarat"],
    ["STV", "Surat Airport", "Surat", "Gujarat"],
    ["BDQ", "Vadodara Airport", "Vadodara", "Gujarat"]
];

// Search airports function
function searchAirports(searchTerm, maxResults = 8) {
    if (!searchTerm || searchTerm.length < 2) return [];
    const term = searchTerm.toLowerCase();
    return airportsData.filter(airport => 
        airport[0].toLowerCase().includes(term) ||      // IATA code
        airport[1].toLowerCase().includes(term) ||      // Airport name
        airport[2].toLowerCase().includes(term)         // City name
    ).slice(0, maxResults);
}
// ============================================================
// AIRPORT SEARCH AUTO-SUGGEST
// ============================================================
const fromInput = document.getElementById('s-from');
const toInput = document.getElementById('s-to');
const fromSuggestions = document.getElementById('fromSuggestions');
const toSuggestions = document.getElementById('toSuggestions');

function setupAirportSearch(inputElement, suggestionsDiv) {
    if (!inputElement || !suggestionsDiv) return;
    
    inputElement.addEventListener('input', function(e) {
        const searchTerm = e.target.value.trim();
        
        if (searchTerm.length >= 2) {
            const results = searchAirports(searchTerm);
            displaySuggestions(results, suggestionsDiv, inputElement);
        } else {
            suggestionsDiv.classList.remove('show');
        }
    });
    // ============================================================
// AIRPORT DATA FOR SEARCH SUGGESTIONS
// ============================================================
const airportsData = [
    ["DEL", "Indira Gandhi International Airport", "New Delhi", "Delhi"],
    ["BOM", "Chhatrapati Shivaji Maharaj International Airport", "Mumbai", "Maharashtra"],
    ["MAA", "Chennai International Airport", "Chennai", "Tamil Nadu"],
    ["CCU", "Netaji Subhas Chandra Bose International Airport", "Kolkata", "West Bengal"],
    ["BLR", "Kempegowda International Airport", "Bengaluru", "Karnataka"],
    ["HYD", "Rajiv Gandhi International Airport", "Hyderabad", "Telangana"],
    ["COK", "Cochin International Airport", "Kochi", "Kerala"],
    ["AMD", "Sardar Vallabhbhai Patel International Airport", "Ahmedabad", "Gujarat"],
    ["PNQ", "Pune Airport", "Pune", "Maharashtra"],
    ["GOI", "Goa International Airport", "Goa", "Goa"],
    ["GAU", "Lokpriya Gopinath Bordoloi International Airport", "Guwahati", "Assam"],
    ["JAI", "Jaipur International Airport", "Jaipur", "Rajasthan"],
    ["LKO", "Chaudhary Charan Singh International Airport", "Lucknow", "Uttar Pradesh"],
    ["PAT", "Lok Nayak Jayaprakash Airport", "Patna", "Bihar"],
    ["IXC", "Shaheed Bhagat Singh International Airport", "Chandigarh", "Punjab"],
    ["VNS", "Lal Bahadur Shastri International Airport", "Varanasi", "Uttar Pradesh"],
    ["NAG", "Dr. Babasaheb Ambedkar International Airport", "Nagpur", "Maharashtra"],
    ["TRV", "Trivandrum International Airport", "Thiruvananthapuram", "Kerala"],
    ["CJB", "Coimbatore International Airport", "Coimbatore", "Tamil Nadu"],
    ["SXR", "Sheikh ul-Alam International Airport", "Srinagar", "Jammu & Kashmir"],
    ["IXE", "Mangaluru International Airport", "Mangaluru", "Karnataka"],
    ["BBI", "Biju Patnaik International Airport", "Bhubaneswar", "Odisha"],
    ["VTZ", "Visakhapatnam Airport", "Visakhapatnam", "Andhra Pradesh"],
    ["CCJ", "Calicut International Airport", "Kozhikode", "Kerala"],
    ["IXM", "Madurai Airport", "Madurai", "Tamil Nadu"],
    ["TRZ", "Tiruchirappalli International Airport", "Tiruchirappalli", "Tamil Nadu"],
    ["IDR", "Devi Ahilya Bai Holkar Airport", "Indore", "Madhya Pradesh"],
    ["ATQ", "Sri Guru Ram Dass Jee International Airport", "Amritsar", "Punjab"],
    ["UDR", "Maharana Pratap Airport", "Udaipur", "Rajasthan"],
    ["JDH", "Jodhpur Airport", "Jodhpur", "Rajasthan"],
    ["RAJ", "Rajkot Airport", "Rajkot", "Gujarat"],
    ["STV", "Surat Airport", "Surat", "Gujarat"],
    ["BDQ", "Vadodara Airport", "Vadodara", "Gujarat"]
];

function searchAirports(searchTerm, maxResults = 8) {
    if (!searchTerm || searchTerm.length < 2) return [];
    const term = searchTerm.toLowerCase();
    return airportsData.filter(airport => 
        airport[0].toLowerCase().includes(term) ||
        airport[1].toLowerCase().includes(term) ||
        airport[2].toLowerCase().includes(term)
    ).slice(0, maxResults);
}

// ============================================================
// AIRPORT SEARCH AUTO-SUGGEST
// ============================================================
const fromInput = document.getElementById('s-from');
const toInput = document.getElementById('s-to');
const fromSuggestions = document.getElementById('fromSuggestions');
const toSuggestions = document.getElementById('toSuggestions');

function setupAirportSearch(inputElement, suggestionsDiv) {
    if (!inputElement || !suggestionsDiv) return;
    
    inputElement.addEventListener('input', function(e) {
        const searchTerm = e.target.value.trim();
        
        if (searchTerm.length >= 2) {
            const results = searchAirports(searchTerm);
            displaySuggestions(results, suggestionsDiv, inputElement);
        } else {
            suggestionsDiv.classList.remove('show');
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!inputElement.contains(e.target) && !suggestionsDiv.contains(e.target)) {
            suggestionsDiv.classList.remove('show');
        }
    });
}

function displaySuggestions(airports, suggestionsDiv, inputElement) {
    if (airports.length === 0) {
        suggestionsDiv.classList.remove('show');
        return;
    }
    
    suggestionsDiv.innerHTML = airports.map(airport => `
        <div class="suggestion-item" onclick="selectAirport('${airport[0]}', '${airport[2]}', '${inputElement.id}')">
            <div>
                <span class="suggestion-code">${airport[0]}</span>
                <span class="suggestion-name">${airport[1]}</span>
                <span class="suggestion-city">${airport[2]}, ${airport[3]}</span>
            </div>
        </div>
    `).join('');
    
    suggestionsDiv.classList.add('show');
}

function selectAirport(code, city, inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = city;
    }
    
    const suggestionsDiv = inputId === 's-from' ? fromSuggestions : toSuggestions;
    if (suggestionsDiv) {
        suggestionsDiv.classList.remove('show');
    }
}

// Initialize if elements exist
if (fromInput && toInput && fromSuggestions && toSuggestions) {
    setupAirportSearch(fromInput, fromSuggestions);
    setupAirportSearch(toInput, toSuggestions);
}
    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!inputElement.contains(e.target) && !suggestionsDiv.contains(e.target)) {
            suggestionsDiv.classList.remove('show');
        }
    });
}

function displaySuggestions(airports, suggestionsDiv, inputElement) {
    if (airports.length === 0) {
        suggestionsDiv.classList.remove('show');
        return;
    }
    
    suggestionsDiv.innerHTML = airports.map(airport => `
        <div class="suggestion-item" onclick="selectAirport('${airport[0]}', '${airport[2]}', '${inputElement.id}')">
            <div>
                <span class="suggestion-code">${airport[0]}</span>
                <span class="suggestion-name">${airport[1]}</span>
                <span class="suggestion-city">${airport[2]}, ${airport[3]}</span>
            </div>
        </div>
    `).join('');
    
    suggestionsDiv.classList.add('show');
}

function selectAirport(code, city, inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = city;
    }
    
    // Close suggestions
    const suggestionsDiv = inputId === 's-from' ? fromSuggestions : toSuggestions;
    if (suggestionsDiv) {
        suggestionsDiv.classList.remove('show');
    }
}

// Initialize
setupAirportSearch(fromInput, fromSuggestions);
setupAirportSearch(toInput, toSuggestions);