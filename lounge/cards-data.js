/* ============================================================ */
/* CARDS DATABASE - FOR CARDS PAGE (50+ CARDS)
/* ============================================================ */

async function loadAllCards() {
    // Return static cards (or load from Google Sheets)
    return getStaticCards();
}

function getStaticCards() {
    return [
        // ========== LIFETIME FREE CARDS (No spend required) ==========
        {
            bank: "IDFC FIRST",
            name: "Millennia",
            variant: "Credit Card",
            domesticVisits: "4",
            domesticPerQuarter: "1",
            domesticSpend: null,
            internationalVisits: "0",
            internationalSpend: null,
            isLifetimeFree: true,
            isPopular: true,
            cardType: "lifetime-free",
            affiliateLink: "https://www.idfcfirstbank.com/credit-cards/millennia?ref=fareflyers",
            affiliateNote: "Free application, no income proof required"
        },
        {
            bank: "Axis",
            name: "Neo",
            variant: "Credit Card",
            domesticVisits: "4",
            domesticPerQuarter: "1",
            domesticSpend: null,
            internationalVisits: "0",
            internationalSpend: null,
            isLifetimeFree: true,
            isBestValue: true,
            cardType: "lifetime-free",
            affiliateLink: "https://application.axisbank.co.in/axisneocreditcard?ref=fareflyers",
            affiliateNote: "Get ₹500 Amazon voucher on approval"
        },
        {
            bank: "IndusInd",
            name: "Legend",
            variant: "Credit Card",
            domesticVisits: "8",
            domesticPerQuarter: "2",
            domesticSpend: null,
            internationalVisits: "2",
            internationalSpend: null,
            isLifetimeFree: true,
            isBestForTravel: true,
            cardType: "lifetime-free",
            affiliateLink: "https://www.indusind.com/credit-cards/legend?ref=fareflyers",
            affiliateNote: "Free Priority Pass worth ₹2,500"
        },
        
        // ========== PREMIUM CARDS (Spend required or paid) ==========
        {
            bank: "HDFC",
            name: "Infinia",
            variant: "Credit Card",
            domesticVisits: "Unlimited",
            domesticPerQuarter: null,
            domesticSpend: null,
            internationalVisits: "Unlimited",
            internationalSpend: null,
            isLifetimeFree: false,
            isUnlimited: true,
            cardType: "premium",
            affiliateLink: "https://apply.hdfcbank.com/infinia?ref=fareflyers",
            affiliateNote: "Premium metal card"
        },
        {
            bank: "Axis",
            name: "Magnus",
            variant: "Credit Card",
            domesticVisits: "Unlimited",
            domesticPerQuarter: null,
            domesticSpend: null,
            internationalVisits: "Unlimited",
            internationalSpend: "₹50000 in previous month",
            isLifetimeFree: false,
            isUnlimited: true,
            cardType: "premium",
            affiliateLink: "https://application.axisbank.co.in/magnus?ref=fareflyers",
            affiliateNote: "Best for travel rewards"
        },
        {
            bank: "HDFC",
            name: "Tata Neu Infinity",
            variant: "Credit Card",
            domesticVisits: "12",
            domesticPerQuarter: "3",
            domesticSpend: "₹5000 in previous quarter",
            internationalVisits: "6",
            internationalSpend: null,
            isLifetimeFree: false,
            cardType: "premium",
            affiliateLink: "https://apply.hdfcbank.com/cards/tata-neu?ref=fareflyers",
            affiliateNote: "Best for UPI payments"
        },
        
        // Add 40+ more cards here following the same pattern
    ];
}