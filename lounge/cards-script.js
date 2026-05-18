/* ============================================================ */
/* CARDS PAGE - DISPLAY ALL CARDS
/* ============================================================ */

let allCards = [];

// Load and display cards
async function initCardsPage() {
    const grid = document.getElementById('cardsGrid');
    if (!grid) return;
    
    // Show loading with spinner
    grid.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading 50+ cards...</p>
        </div>
    `;
    
    try {
        allCards = await loadAllCards();
        
        if (!allCards || allCards.length === 0) {
            // Show "no cards found" with emoji
            grid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-emoji">🔍</div>
                    <h3>No cards found</h3>
                    <p>We're adding more cards daily. Check back soon!</p>
                    <button class="refresh-btn" onclick="location.reload()">⟳ Refresh</button>
                </div>
            `;
        } else {
            displayCards(allCards);
        }
    } catch (error) {
        console.error(error);
        // Show error state
        grid.innerHTML = `
            <div class="error-state">
                <div class="error-emoji">⚠️</div>
                <h3>Something went wrong</h3>
                <p>Unable to load cards. Please try again later.</p>
                <a href="cards.html">⟳ Refresh Page</a>
            </div>
        `;
    }
}

// Display cards
function displayCards(cards) {
    const grid = document.getElementById('cardsGrid');
    
    if (!cards || cards.length === 0) {
        grid.innerHTML = '<div class="loading-spinner"><p>No cards found. Check back soon!</p></div>';
        return;
    }
    
    grid.innerHTML = cards.map(card => createCardHTML(card)).join('');
}

// Create HTML for a single card
function createCardHTML(card) {
    // Determine badges
    let badges = '';
    if (card.isPopular) badges += '<span class="badge-popular">🔥 MOST POPULAR</span>';
    if (card.isBestValue) badges += '<span class="badge-best-value">⭐ BEST VALUE</span>';
    if (card.isBestForTravel) badges += '<span class="badge-popular">✈️ BEST FOR TRAVEL</span>';
    if (card.isLifetimeFree) badges += '<span class="badge-ltf">✅ Lifetime Free (₹0 annual fee)</span>';
    if (card.isUnlimited) badges += '<span class="badge-unlimited">♾️ Unlimited Access</span>';
    
    // Domestic visits text
    let domesticText = card.domesticVisits === "Unlimited" 
        ? "Unlimited visits/year" 
        : `${card.domesticVisits} visits/year`;
    
    if (card.domesticPerQuarter && card.domesticVisits !== "Unlimited") {
        domesticText += ` (${card.domesticPerQuarter} per quarter)`;
    }
    
    // International visits text
    let internationalText = card.internationalVisits === "Unlimited" 
        ? "Unlimited visits/year" 
        : card.internationalVisits === "0" 
            ? "Not available" 
            : `${card.internationalVisits} visits/year`;
    
    // Spend requirement
    let spendHtml = '';
    if (card.domesticSpend) {
        spendHtml = `<div class="spend-req">💰 Requires: ${card.domesticSpend}</div>`;
    }
    if (card.internationalSpend && !card.domesticSpend) {
        spendHtml = `<div class="spend-req">💰 Requires: ${card.internationalSpend}</div>`;
    }
    
    // Affiliate link - This is the CLICKABLE BUTTON
    let affiliateHtml = '';
    if (card.affiliateLink) {
        affiliateHtml = `
            <a href="${card.affiliateLink}" class="apply-btn" target="_blank" rel="noopener noreferrer">
                Apply Now →
                <span class="affiliate-note">${card.affiliateNote || 'Apply through FareFlys'}</span>
            </a>
        `;
    } else {
        // Fallback if no affiliate link
        affiliateHtml = `
            <button class="apply-btn" onclick="alert('Apply link coming soon!')">
                Apply Now →
                <span class="affiliate-note">Check back soon</span>
            </button>
        `;
    }
    
    return `
        <div class="card-item">
            <div class="card-badges">
                ${badges}
            </div>
            <div class="card-bank">${card.bank} Bank</div>
            <h3>${card.name}</h3>
            <ul class="card-benefits">
                <li>✈️ ${domesticText}</li>
                <li>🌍 ${internationalText}</li>
            </ul>
            ${spendHtml}
            ${affiliateHtml}
        </div>
    `;
}

// Filter function
function filterCards(type) {
    // Update active button
    const activeBtn = event.currentTarget;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
    
    // Filter cards
    let filtered = [...allCards];
    
    if (type === 'lifetime-free') {
        filtered = allCards.filter(c => c.isLifetimeFree === true);
    } else if (type === 'unlimited') {
        filtered = allCards.filter(c => c.domesticVisits === "Unlimited" || c.isUnlimited === true);
    } else if (type === 'international') {
        filtered = allCards.filter(c => parseInt(c.internationalVisits) > 0 || c.internationalVisits === "Unlimited");
    }
    
    displayCards(filtered);
    
    // Show count
    const grid = document.getElementById('cardsGrid');
    const existingCount = document.querySelector('.filter-count');
    if (existingCount) existingCount.remove();
    
    if (filtered.length !== allCards.length) {
        const countMsg = document.createElement('div');
        countMsg.className = 'filter-count';
        countMsg.innerHTML = `<p>Showing ${filtered.length} of ${allCards.length} cards</p>`;
        grid.parentElement.insertBefore(countMsg, grid);
    }
}

// Load on page ready
document.addEventListener('DOMContentLoaded', initCardsPage);