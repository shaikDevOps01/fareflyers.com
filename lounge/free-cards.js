/* ============================================================ */
/* FREE CARDS PAGE - COMPLETE JAVASCRIPT (WITH IMAGES)
/* ============================================================ */

// ============================================================
// CARD DATABASE - ADD YOUR CARDS HERE
// ============================================================
// 💰 To add your affiliate link: Replace the URL in "affiliateLink"
// 📸 To add card image: Add "cardImage": "images/your-card-name.png"
// ============================================================

const cardsData = [
    // ========== LIFETIME FREE CARDS (LTF) ==========
    {
        bank: "IndusInd",
        name: "Tiger",
        logo: "🐅",
        cardImage: "images/Tiger.png",
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
        cardImage: "images/Scapia.png",
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
        cardImage: "images/Wealth.png",
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
        cardImage: "images/idfc-select.png",
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
        cardImage: "images/idfc-millennia.png",
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
        cardImage: "images/axis-neo.png",
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
        cardImage: "images/safari.png",
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

    // ========== PREMIUM CARDS ==========
    {
        bank: "HDFC",
        name: "Infinia Metal",
        logo: "👑",
        cardImage: "images/hdfc-infinia.png",
        domestic: "Unlimited",
        international: "Unlimited",
        fee: "₹12,500",
        type: "premium",
        unlimited: true,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://apply.hdfcbank.com/infinia?ref=fareflyers",
        note: "Invite-only, unlimited lounge access"
    },
    {
        bank: "HDFC",
        name: "Diners Club Black Metal",
        logo: "💳",
        cardImage: "images/hdfc-diners-black.png",
        domestic: "Unlimited",
        international: "Unlimited",
        fee: "₹10,000",
        type: "premium",
        unlimited: true,
        forex: false,
        internationalLounge: true,
        network: "Diners Club + Priority Pass",
        affiliateLink: "https://apply.hdfcbank.com/diners-black?ref=fareflyers",
        note: "Diners Club network worldwide"
    },
    {
        bank: "ICICI",
        name: "Emeralde Private Metal",
        logo: "💎",
        cardImage: "images/icici-emeralde.png",
        domestic: "Unlimited",
        international: "Unlimited",
        fee: "₹12,000",
        type: "premium",
        unlimited: true,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.icicibank.com/emeralde?ref=fareflyers",
        note: "Lounge unconditional"
    },
    {
        bank: "Axis",
        name: "Reserve",
        logo: "💎",
        cardImage: "images/axis-reserve.png",
        domestic: "Unlimited",
        international: "Unlimited",
        fee: "₹50,000",
        type: "premium",
        unlimited: true,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://application.axisbank.co.in/reserve?ref=fareflyers",
        note: "Ultra-premium, no restrictions"
    },
    {
        bank: "Axis",
        name: "Magnus",
        logo: "⭐",
        cardImage: "images/axis-magnus.png",
        domestic: "Unlimited",
        international: "Unlimited",
        fee: "₹12,500",
        type: "premium",
        unlimited: true,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://application.axisbank.co.in/magnus?ref=fareflyers",
        note: "Intl unconditional, 4 guest visits/year"
    },
    {
        bank: "Axis",
        name: "Atlas",
        logo: "🌍",
        cardImage: "images/axis-atlas.png",
        domestic: "8-18/year",
        international: "4-12/year",
        fee: "₹5,000",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass + DreamFolks",
        affiliateLink: "https://application.axisbank.co.in/atlas?ref=fareflyers",
        note: "Tier-based (Silver/Gold/Platinum)"
    },
    {
        bank: "SBI",
        name: "Elite",
        logo: "⭐",
        cardImage: "images/sbi-elite.png",
        domestic: "8/year",
        international: "6/year",
        fee: "₹4,999",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.sbicard.com/elite?ref=fareflyers",
        note: "Best no-condition mid-range card"
    },
    {
        bank: "SBI",
        name: "Aurum",
        logo: "👑",
        cardImage: "images/sbi-aurum.png",
        domestic: "2/quarter",
        international: "4/year",
        fee: "₹9,999",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.sbicard.com/aurum?ref=fareflyers",
        note: "Metal card, concierge services"
    },
    {
        bank: "YES Bank",
        name: "First Exclusive",
        logo: "✨",
        cardImage: "images/yes-first-exclusive.png",
        domestic: "6/year",
        international: "6/year",
        fee: "₹10,000",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.yesbank.in/first-exclusive?ref=fareflyers",
        note: "Super-premium, 40,000 welcome points"
    },
    {
        bank: "Standard Chartered",
        name: "Ultimate",
        logo: "🏦",
        cardImage: "images/sc-ultimate.png",
        domestic: "4/year",
        international: "Unlimited",
        fee: "₹5,000",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.sc.com/ultimate?ref=fareflyers",
        note: "Great for international travel"
    },
    {
        bank: "AU Bank",
        name: "Zenith+",
        logo: "⭐",
        cardImage: "images/au-zenith.png",
        domestic: "4/quarter",
        international: "2/quarter",
        fee: "₹4,999",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.aubank.in/zenith?ref=fareflyers",
        note: "Strong lounge benefit from AU Bank"
    },

    // ========== BEST VALUE CARDS ==========
    {
        bank: "HDFC",
        name: "Regalia Gold",
        logo: "👑",
        cardImage: "images/hdfc-regalia-gold.png",
        domestic: "3/quarter",
        international: "6/year",
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
        cardImage: "images/hdfc-millennia.png",
        domestic: "8/year",
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
        bank: "ICICI",
        name: "Sapphiro",
        logo: "💎",
        cardImage: "images/icici-sapphiro.png",
        domestic: "16/year",
        international: "4/year",
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
        bank: "ICICI",
        name: "Rubyx",
        logo: "💎",
        cardImage: "images/icici-rubyx.png",
        domestic: "2/quarter",
        international: "0",
        fee: "₹2,000",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "DreamFolks",
        affiliateLink: "https://www.icicibank.com/rubyx?ref=fareflyers",
        note: "Mid-tier card"
    },
    {
        bank: "Axis",
        name: "Privilege",
        logo: "🪙",
        cardImage: "images/axis-privilege.png",
        domestic: "8/year",
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
        bank: "Axis",
        name: "Select",
        logo: "🪙",
        cardImage: "images/axis-select.png",
        domestic: "6/year",
        international: "6/year",
        fee: "₹3,000",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://application.axisbank.co.in/select?ref=fareflyers",
        note: "PP renewal requires ₹3L spend"
    },
    {
        bank: "SBI",
        name: "Prime",
        logo: "🏛️",
        cardImage: "images/sbi-prime.png",
        domestic: "8/year",
        international: "4/year",
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
        bank: "YES Bank",
        name: "First Preferred",
        logo: "✅",
        cardImage: "images/yes-first-preferred.png",
        domestic: "8/year",
        international: "4/year",
        fee: "₹999",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.yesbank.in/first-preferred?ref=fareflyers",
        note: "Great value at ₹999"
    },
    {
        bank: "Kotak",
        name: "White Reserve",
        logo: "⚪",
        cardImage: "images/kotak-white-reserve.png",
        domestic: "8/year",
        international: "4/year",
        fee: "₹3,000",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.kotak.com/white-reserve?ref=fareflyers",
        note: "Free Priority Pass"
    },
    {
        bank: "AU Bank",
        name: "Ixigo",
        logo: "✈️",
        cardImage: "images/au-ixigo.png",
        domestic: "16/year",
        international: "1/year",
        fee: "₹999",
        type: "normal",
        unlimited: false,
        forex: true,
        internationalLounge: true,
        network: "Priority Pass",
        affiliateLink: "https://www.aubank.in/ixigo?ref=fareflyers",
        note: "Zero forex markup"
    },
    {
        bank: "HSBC",
        name: "Live+",
        logo: "🌍",
        cardImage: "images/hsbc-live.png",
        domestic: "4/year",
        international: "0",
        fee: "₹999",
        type: "normal",
        unlimited: false,
        forex: false,
        internationalLounge: false,
        network: "DreamFolks",
        affiliateLink: "https://www.hsbc.co.in/live-plus/?ref=fareflyers",
        note: "5% cashback on Amazon"
    },
    {
        bank: "BOB",
        name: "Eterna",
        logo: "🔵",
        cardImage: "images/bob-eterna.png",
        domestic: "4/year",
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
        cardImage: "images/pnb-platinum.png",
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
// APPLICATION LOGIC (DO NOT CHANGE)
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
    } else if (currentFilter === "premium") {
        filteredCards = cardsData.filter(card => card.type === "premium");
    }

    if (filteredCards.length === 0) {
        grid.innerHTML = `<div class="empty-state">🔍 No cards found matching your filter.</div>`;
        return;
    }

    grid.innerHTML = filteredCards.map(card => `
        <div class="card-offer">
            <div class="card-header">
                <div class="card-bank-logo">
                    <span class="bank-logo-emoji">${card.logo}</span>
                </div>
                <div class="card-bank-info">
                    <div class="card-bank-name">${card.bank} Bank</div>
                    <div class="card-title">${card.name}</div>
                </div>
            </div>
            
            ${card.cardImage ? `
            <div class="card-image-section">
                <img src="${card.cardImage}" alt="${card.name}" class="card-img">
            </div>  
            ` : ''}
            
            <div class="card-badges">
                ${card.fee === "₹0" ? '<span class="badge badge-ltf">✅ Lifetime Free</span>' : ''}
                ${card.unlimited ? '<span class="badge badge-unlimited">♾️ Unlimited Access</span>' : ''}
                ${card.forex ? '<span class="badge badge-forex">🌍 Zero Forex</span>' : ''}
                ${card.internationalLounge ? '<span class="badge badge-unlimited">✈️ Intl Lounge</span>' : ''}
                ${card.type === "premium" ? '<span class="badge badge-unlimited">👑 Premium</span>' : ''}
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
            ${card.note ? `<div class="card-note">📌 ${card.note}</div>` : ''}
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

// Mobile hamburger menu - IMPROVED
const hamburger = document.getElementById('ham');
const mobileNav = document.querySelector('.header-nav');

if (hamburger && mobileNav) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileNav.classList.toggle('active');
        hamburger.innerHTML = mobileNav.classList.contains('active') ? '✕' : '☰';
    });
    
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            hamburger.innerHTML = '☰';
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
            mobileNav.classList.remove('active');
            hamburger.innerHTML = '☰';
        }
    });
}

// Initialize
renderCards();
initFilters();

console.log('✅ Free cards page loaded with ' + cardsData.length + ' cards');