/* ============================================================ */
/* FREE CARDS PAGE - COMPLETE JAVASCRIPT
/* ============================================================ */

// ============================================================
// CARD DATABASE - ADD YOUR CARDS HERE
// ============================================================
// HOW TO ADD A NEW CARD:
// Copy the template below and paste inside the array
//
// {
//     bank: "Bank Name",
//     name: "Card Name",
//     logo: "🚀",  // Use emoji or image path
//     domestic: "8",
//     international: "4",
//     fee: "₹0",
//     type: "ltf",        // "ltf" for lifetime free, "normal" for paid
//     unlimited: false,   // true/false
//     forex: false,       // true/false
//     internationalLounge: true,  // true/false
//     network: "Priority Pass",
//     affiliateLink: "https://your-affiliate-link.com",
//     note: "Optional note about the card"
// }

const cardsData = [
    // ========== LIFETIME FREE CARDS (LTF) ==========
    {
        bank: "IndusInd",
        name: "Tiger",
        logo: "🐅",
        domestic: "8",
        international: "2",
        fee: "₹0",
        type: "ltf",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.indusind.com/credit-cards/tiger?ref=fareflyers",
        note: "Best LTF with international access"
    },
    {
        bank: "Federal Bank",
        name: "Scapia",
        logo: "✈️",
        domestic: "Unlimited",
        international: "0",
        fee: "₹0",
        type: "ltf",
        unlimited: true,
        forex: true,
        internationalLounge: false,
        network: "Bank Program",
        affiliateLink: "https://www.scapia.com/?ref=fareflyers",
        note: "Zero forex markup, ₹10K spend for lounge"
    },
    {
        bank: "IDFC FIRST",
        name: "Wealth",
        logo: "🏦",
        domestic: "2/quarter",
        international: "2/quarter",
        fee: "₹0",
        type: "ltf",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Elite Assist + LoungeKey",
        affiliateLink: "https://www.idfcfirstbank.com/credit-cards/wealth?ref=fareflyers",
        note: "Railway lounge included"
    },
    {
        bank: "IDFC FIRST",
        name: "Select",
        logo: "🏦",
        domestic: "2/quarter",
        international: "0",
        fee: "₹0",
        type: "ltf",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "Elite Assist",
        affiliateLink: "https://www.idfcfirstbank.com/credit-cards/select?ref=fareflyers",
        note: "Railway lounge 4/quarter"
    },
    {
        bank: "IDFC FIRST",
        name: "Millennia",
        logo: "🏦",
        domestic: "Limited",
        international: "0",
        fee: "₹0",
        type: "ltf",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "Bank Program",
        affiliateLink: "https://www.idfcfirstbank.com/credit-cards/millennia?ref=fareflyers",
        note: "Entry-level LTF card"
    },
    {
        bank: "Axis",
        name: "Neo",
        logo: "🪙",
        domestic: "4",
        international: "0",
        fee: "₹0",
        type: "ltf",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "DreamFolks",
        affiliateLink: "https://application.axisbank.co.in/axisneocreditcard?ref=fareflyers",
        note: "Get ₹500 Amazon voucher"
    },
    {
        bank: "RBL",
        name: "World Safari",
        logo: "🌍",
        domestic: "6",
        international: "3",
        fee: "₹0",
        type: "ltf",
        unlimited: false,
        forex: true,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.rblbank.com/world-safari?ref=fareflyers",
        note: "Zero forex markup"
    },

    // ========== CARDS WITH ANNUAL FEE (GOOD VALUE) ==========
    {
        bank: "YES Bank",
        name: "First Preferred",
        logo: "✅",
        domestic: "8",
        international: "4",
        fee: "₹999",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.yesbank.in/credit-cards/first-preferred?ref=fareflyers",
        note: "Great value at ₹999"
    },
    {
        bank: "AU Bank",
        name: "Ixigo",
        logo: "✈️",
        domestic: "16",
        international: "1",
        fee: "₹999",
        type: "normal",
        unlimited: false,
        forex: true,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.aubank.in/credit-cards/ixigo?ref=fareflyers",
        note: "Zero forex markup"
    },
    {
        bank: "Axis",
        name: "Privilege",
        logo: "🪙",
        domestic: "8",
        international: "0",
        fee: "₹1,500",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "DreamFolks",
        affiliateLink: "https://application.axisbank.co.in/axisprivilege?ref=fareflyers",
        note: "Unconditional domestic access"
    },
    {
        bank: "HSBC",
        name: "Live+",
        logo: "🌍",
        domestic: "4",
        international: "0",
        fee: "₹999",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "DreamFolks",
        affiliateLink: "https://www.hsbc.co.in/credit-cards/live-plus/?ref=fareflyers",
        note: "5% cashback on Amazon"
    },
    {
        bank: "Kotak",
        name: "White Reserve",
        logo: "⚪",
        domestic: "8",
        international: "4",
        fee: "₹3,000",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.kotak.com/credit-cards/white-reserve?ref=fareflyers",
        note: "Free Priority Pass"
    },
    {
        bank: "SBI",
        name: "Prime",
        logo: "🏛️",
        domestic: "8",
        international: "4",
        fee: "₹2,999",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.sbicard.com/prime?ref=fareflyers",
        note: "Unconditional lounge access"
    },
    {
        bank: "ICICI",
        name: "Sapphiro",
        logo: "💎",
        domestic: "16",
        international: "4",
        fee: "₹3,500",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.icicibank.com/sapphiro?ref=fareflyers",
        note: "First 2 years free"
    },
    {
        bank: "HDFC",
        name: "Regalia Gold",
        logo: "👑",
        domestic: "3/quarter",
        international: "6",
        fee: "₹2,500",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://apply.hdfcbank.com/regalia-gold?ref=fareflyers",
        note: "Strong international access"
    },
    {
        bank: "HDFC",
        name: "Millennia",
        logo: "👑",
        domestic: "8",
        international: "0",
        fee: "₹1,000",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "DreamFolks",
        affiliateLink: "https://apply.hdfcbank.com/millennia?ref=fareflyers",
        note: "Cashback card"
    },
    {
        bank: "BOB",
        name: "Eterna",
        logo: "🔵",
        domestic: "4",
        international: "0",
        fee: "₹2,500",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "DreamFolks",
        affiliateLink: "https://www.bobcard.co.in/eterna?ref=fareflyers",
        note: "Good rewards rate"
    },
    {
        bank: "PNB",
        name: "Platinum",
        logo: "🔴",
        domestic: "2/quarter",
        international: "0",
        fee: "₹500",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "RuPay",
        affiliateLink: "https://www.pnbcards.com/platinum?ref=fareflyers",
        note: "Affordable PSU card"
    }
];

// ============================================================
// APPLICATION LOGIC (DO NOT CHANGE UNLESS YOU KNOW WHAT YOU'RE DOING)
// ============================================================

let currentFilter = "all";

function renderCards() {
    const grid = document.getElementById('cardsGrid');
    if (!grid) return;

    let filteredCards = cardsData;
    
    if (currentFilter === "ltf") {
        filteredCards = cardsData.filter(card => card.type === "ltf");
    } else if (currentFilter === "unlimited") {
        filteredCards = cardsData.filter(card => card.unlimited === true);
    } else if (currentFilter === "forex") {
        filteredCards = cardsData.filter(card => card.forex === true);
    } else if (currentFilter === "international") {
        filteredCards = cardsData.filter(card => card.internationalLounge === true);
    }

    if (filteredCards.length === 0) {
        grid.innerHTML = `<div class="empty-state">🔍 No cards found matching your filter.</div>`;
        return;
    }

    grid.innerHTML = filteredCards.map(card => `
        <div class="card-offer">
            <div class="card-header">
                <div class="card-bank-logo">${card.logo}</div>
                <div class="card-bank-info">
                    <div class="card-bank-name">${card.bank} Bank</div>
                    <div class="card-title">${card.name}</div>
                </div>
            </div>
            
            <div class="card-badges">
                ${card.fee === "₹0" ? '<span class="badge badge-ltf">✅ Lifetime Free</span>' : ''}
                ${card.unlimited ? '<span class="badge badge-unlimited">♾️ Unlimited Access</span>' : ''}
                ${card.forex ? '<span class="badge badge-forex">🌍 Zero Forex</span>' : ''}
                ${card.internationalLounge ? '<span class="badge badge-unlimited">✈️ Intl Lounge</span>' : ''}
            </div>
            
            <div class="card-benefits">
                <div class="benefit">
                    <div class="benefit-value">${card.domestic}</div>
                    <div class="benefit-label">Domestic Lounges</div>
                </div>
                <div class="benefit">
                    <div class="benefit-value">${card.international}</div>
                    <div class="benefit-label">International Lounges</div>
                </div>
                <div class="benefit">
                    <div class="benefit-value">${card.network}</div>
                    <div class="benefit-label">Access Network</div>
                </div>
            </div>
            
            <div class="card-footer">
                <div class="card-fee">💰 ${card.fee} Annual Fee</div>
                <a href="${card.affiliateLink}" class="apply-btn" target="_blank" rel="noopener noreferrer">
                    Apply Now →
                </a>
            </div>
        </div>
    `).join('');
}

function initFilters() {
    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderCards();
        });
    });
}

// ============================================================
// LOGO CLICK - SCROLL TO TOP
// ============================================================
const logoElement = document.getElementById('logoClick');
if (logoElement) {
    logoElement.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile hamburger menu
const hamburger = document.getElementById('ham');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        const nav = document.querySelector('.header-nav');
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

// Initialize
renderCards();
initFilters();