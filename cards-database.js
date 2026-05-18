/* ============================================================ */
/* LOUNGE CARD DATABASE - 50+ CARDS WITH LOUNGE ACCESS
/* ============================================================ */
// 📌 HOW TO ADD A NEW CARD:
// Copy the template below, fill your data, and paste inside the array
//
// Template:
// {
//     name: "Card Name",
//     bank: "Bank Name",
//     variant: "Credit Card",
//     domesticVisits: "12",        // Number or "Unlimited"
//     domesticPerQuarter: "3",     // Number or null
//     domesticSpend: "₹5000 in previous quarter",  // Text or null
//     internationalVisits: "6",    // Number or "Unlimited"
//     internationalSpend: null,    // Text or null
//     network: "Dreamfolks/Priority Pass"
// }

/* ============================================================ */
/* LOUNGE CARD DATABASE - FOR ELIGIBILITY CHECK
/* Data source: India Airport Lounge Access Cards 2026 Guide
/* Last Updated: May 2026
/* ============================================================ */

const LOUNGE_CARDS_DATABASE = [

    // ========== HDFC BANK ==========
    {
        name: "Infinia Metal",
        bank: "HDFC",
        variant: "Credit Card",
        domesticVisits: "Unlimited",
        domesticPerQuarter: null,
        domesticSpend: null,
        internationalVisits: "Unlimited",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "Diners Club Black Metal",
        bank: "HDFC",
        variant: "Credit Card",
        domesticVisits: "Unlimited",
        domesticPerQuarter: null,
        domesticSpend: null,
        internationalVisits: "Unlimited",
        internationalSpend: null,
        network: "Diners Club + Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "Regalia Gold",
        bank: "HDFC",
        variant: "Credit Card",
        domesticVisits: "3",
        domesticPerQuarter: "3",
        domesticSpend: "₹60,000 in previous quarter",
        internationalVisits: "6",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "mid-range"
    },
    {
        name: "Diners Club Privilege",
        bank: "HDFC",
        variant: "Credit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: "₹60,000 in previous quarter",
        internationalVisits: "1",
        internationalPerQuarter: "1",
        internationalSpend: "₹60,000 in previous quarter",
        network: "Diners Club",
        loungeAccess: true,
        cardType: "mid-range"
    },
    {
        name: "BizPower",
        bank: "HDFC",
        variant: "Credit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "Bank Program",
        loungeAccess: true,
        cardType: "business"
    },

    // ========== ICICI BANK ==========
    {
        name: "Emeralde Private Metal",
        bank: "ICICI",
        variant: "Credit Card",
        domesticVisits: "Unlimited",
        domesticPerQuarter: null,
        domesticSpend: null,
        internationalVisits: "Unlimited",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "Sapphiro",
        bank: "ICICI",
        variant: "Credit Card",
        domesticVisits: "16",
        domesticPerQuarter: "4",
        domesticSpend: "Spend-based from Year 3",
        internationalVisits: "4",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "Rubyx",
        bank: "ICICI",
        variant: "Credit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "DreamFolks",
        loungeAccess: true,
        cardType: "mid-range"
    },
    {
        name: "Coral RuPay",
        bank: "ICICI",
        variant: "Credit Card",
        domesticVisits: "1",
        domesticPerQuarter: "1",
        domesticSpend: "₹35,000 in that quarter",
        internationalVisits: "0",
        internationalSpend: null,
        network: "Visa/RuPay",
        loungeAccess: true,
        cardType: "entry"
    },

    // ========== AXIS BANK ==========
    {
        name: "Reserve",
        bank: "Axis",
        variant: "Credit Card",
        domesticVisits: "Unlimited",
        domesticPerQuarter: null,
        domesticSpend: null,
        internationalVisits: "Unlimited",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "Magnus",
        bank: "Axis",
        variant: "Credit Card",
        domesticVisits: "Unlimited",
        domesticPerQuarter: null,
        domesticSpend: "₹50,000 in previous 3 months",
        internationalVisits: "Unlimited",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "Atlas",
        bank: "Axis",
        variant: "Credit Card",
        domesticVisits: "8-18",
        domesticPerQuarter: null,
        domesticSpend: "Tier-based (Silver/Gold/Platinum)",
        internationalVisits: "4-12",
        internationalSpend: "Tier-based",
        network: "Priority Pass + DreamFolks",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "Select",
        bank: "Axis",
        variant: "Credit Card",
        domesticVisits: "6",
        domesticPerQuarter: null,
        domesticSpend: null,
        internationalVisits: "6",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "mid-range"
    },
    {
        name: "Privilege",
        bank: "Axis",
        variant: "Credit Card",
        domesticVisits: "8",
        domesticPerQuarter: null,
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "DreamFolks",
        loungeAccess: true,
        cardType: "mid-range"
    },
    {
        name: "ACE",
        bank: "Axis",
        variant: "Credit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: "₹50,000 in preceding 3 months",
        internationalVisits: "0",
        internationalSpend: null,
        network: "DreamFolks",
        loungeAccess: true,
        cardType: "entry"
    },
    {
        name: "Flipkart Axis",
        bank: "Axis",
        variant: "Credit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: "₹50,000 in preceding 3 months",
        internationalVisits: "0",
        internationalSpend: null,
        network: "DreamFolks",
        loungeAccess: true,
        cardType: "entry"
    },

    // ========== SBI CARD ==========
    {
        name: "Elite",
        bank: "SBI",
        variant: "Credit Card",
        domesticVisits: "8",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "6",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "Prime",
        bank: "SBI",
        variant: "Credit Card",
        domesticVisits: "8",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "4",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "mid-range"
    },
    {
        name: "Aurum",
        bank: "SBI",
        variant: "Credit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "4",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },

    // ========== KOTAK BANK ==========
    {
        name: "White Reserve",
        bank: "Kotak",
        variant: "Credit Card",
        domesticVisits: "8",
        domesticPerQuarter: null,
        domesticSpend: null,
        internationalVisits: "4",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "Royale Signature",
        bank: "Kotak",
        variant: "Credit Card",
        domesticVisits: "8",
        domesticPerQuarter: "2",
        domesticSpend: "₹75,000 per quarter",
        internationalVisits: "0",
        internationalSpend: null,
        network: "DreamFolks",
        loungeAccess: true,
        cardType: "mid-range"
    },

    // ========== INDUSIND BANK ==========
    {
        name: "Tiger",
        bank: "IndusInd",
        variant: "Credit Card",
        domesticVisits: "8",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "2",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "lifetime-free",
        isLifetimeFree: true
    },

    // ========== IDFC FIRST BANK ==========
    {
        name: "Wealth",
        bank: "IDFC FIRST",
        variant: "Credit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: "₹20,000 in preceding month",
        internationalVisits: "2",
        internationalPerQuarter: "2",
        internationalSpend: "₹20,000 in preceding month",
        network: "Elite Assist + LoungeKey",
        loungeAccess: true,
        cardType: "lifetime-free",
        isLifetimeFree: true
    },
    {
        name: "Select",
        bank: "IDFC FIRST",
        variant: "Credit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: "₹20,000 in preceding month",
        internationalVisits: "0",
        internationalSpend: null,
        network: "Elite Assist",
        loungeAccess: true,
        cardType: "lifetime-free",
        isLifetimeFree: true
    },

    // ========== YES BANK ==========
    {
        name: "First Exclusive",
        bank: "YES Bank",
        variant: "Credit Card",
        domesticVisits: "6",
        domesticPerQuarter: null,
        domesticSpend: null,
        internationalVisits: "6",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },
    {
        name: "First Preferred",
        bank: "YES Bank",
        variant: "Credit Card",
        domesticVisits: "8",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "4",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "budget"
    },

    // ========== FEDERAL BANK (SCAPIA) ==========
    {
        name: "Scapia",
        bank: "Federal Bank",
        variant: "Credit Card",
        domesticVisits: "Unlimited",
        domesticPerQuarter: null,
        domesticSpend: "₹10,000 per billing cycle",
        internationalVisits: "0",
        internationalSpend: null,
        network: "Bank Program",
        loungeAccess: true,
        cardType: "lifetime-free",
        isLifetimeFree: true
    },

    // ========== AU SMALL FINANCE BANK ==========
    {
        name: "Ixigo",
        bank: "AU Bank",
        variant: "Credit Card",
        domesticVisits: "16",
        domesticPerQuarter: "4",
        domesticSpend: null,
        internationalVisits: "1",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "budget"
    },
    {
        name: "Zenith+",
        bank: "AU Bank",
        variant: "Credit Card",
        domesticVisits: "4",
        domesticPerQuarter: "4",
        domesticSpend: null,
        internationalVisits: "2",
        internationalPerQuarter: "2",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },

    // ========== STANDARD CHARTERED ==========
    {
        name: "Ultimate",
        bank: "Standard Chartered",
        variant: "Credit Card",
        domesticVisits: "4",
        domesticPerQuarter: "1",
        domesticSpend: null,
        internationalVisits: "Unlimited",
        internationalSpend: null,
        network: "Priority Pass",
        loungeAccess: true,
        cardType: "premium"
    },

    // ========== HSBC ==========
    {
        name: "Live+",
        bank: "HSBC",
        variant: "Credit Card",
        domesticVisits: "4",
        domesticPerQuarter: "1",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "DreamFolks",
        loungeAccess: true,
        cardType: "budget"
    },

    // ========== DEBIT CARDS WITH LOUNGE ACCESS ==========
    {
        name: "Infiniti Debit",
        bank: "HDFC",
        variant: "Debit Card",
        domesticVisits: "16",
        domesticPerQuarter: "4",
        domesticSpend: "₹10,000 per quarter",
        internationalVisits: "4",
        internationalPerQuarter: "1",
        internationalSpend: "₹10,000 per quarter",
        network: "Bank Program",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "EasyShop Platinum Debit",
        bank: "HDFC",
        variant: "Debit Card",
        domesticVisits: "8",
        domesticPerQuarter: "2",
        domesticSpend: "₹10,000 per quarter",
        internationalVisits: "0",
        internationalSpend: null,
        network: "Bank Program",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Millennia Debit",
        bank: "HDFC",
        variant: "Debit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: "₹10,000 per quarter",
        internationalVisits: "0",
        internationalSpend: null,
        network: "Bank Program",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Sapphiro Debit",
        bank: "ICICI",
        variant: "Debit Card",
        domesticVisits: "16",
        domesticPerQuarter: "4",
        domesticSpend: "Free Year 1-2, spend-based Year 3",
        internationalVisits: "0",
        internationalSpend: null,
        network: "Bank Program",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Coral Paywave Debit",
        bank: "ICICI",
        variant: "Debit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: "Spend ₹5,000 in previous 3 months (Year 3+)",
        internationalVisits: "0",
        internationalSpend: null,
        network: "Bank Program",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Burgundy Debit",
        bank: "Axis",
        variant: "Debit Card",
        domesticVisits: "3",
        domesticPerQuarter: "3",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "DreamFolks",
        loungeAccess: true,
        cardType: "debit",
        isLifetimeFree: true
    },
    {
        name: "Priority Debit",
        bank: "Axis",
        variant: "Debit Card",
        domesticVisits: "3",
        domesticPerQuarter: "3",
        domesticSpend: "₹3,000 per quarter (after initial period)",
        internationalVisits: "0",
        internationalSpend: null,
        network: "DreamFolks",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Platinum Intl Debit",
        bank: "SBI",
        variant: "Debit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "RuPay/Visa",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Wealth Debit",
        bank: "IDFC FIRST",
        variant: "Debit Card",
        domesticVisits: "4",
        domesticPerQuarter: "4",
        domesticSpend: null,
        internationalVisits: "Available",
        internationalSpend: null,
        network: "LoungeKey + Visa Signature",
        loungeAccess: true,
        cardType: "debit",
        isLifetimeFree: true
    },
    {
        name: "Prosperity Platinum Debit",
        bank: "YES Bank",
        variant: "Debit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "Bank Program",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Signature Debit",
        bank: "IndusInd",
        variant: "Debit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "Bank Program",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Privy League Debit",
        bank: "Kotak",
        variant: "Debit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "Visa Lounge Program",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "EasyShop Imperia Debit",
        bank: "HDFC",
        variant: "Debit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: "₹10,000 per quarter",
        internationalVisits: "0",
        internationalSpend: null,
        network: "Bank Program",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Platinum Debit",
        bank: "Bank of Baroda",
        variant: "Debit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "Visa/RuPay",
        loungeAccess: true,
        cardType: "debit"
    },
    {
        name: "Platinum Rupay Debit",
        bank: "PNB",
        variant: "Debit Card",
        domesticVisits: "2",
        domesticPerQuarter: "2",
        domesticSpend: null,
        internationalVisits: "0",
        internationalSpend: null,
        network: "RuPay",
        loungeAccess: true,
        cardType: "debit"
    }
];

// ========== SEARCH FUNCTIONS ==========

function searchCards(searchTerm) {
    if (!searchTerm || searchTerm.length < 2) return [];
    const term = searchTerm.toLowerCase();
    return LOUNGE_CARDS_DATABASE.filter(card => 
        card.name.toLowerCase().includes(term) || 
        card.bank.toLowerCase().includes(term)
    ).slice(0, 8);
}

function getCardDetails(cardName) {
    const term = cardName.toLowerCase();
    return LOUNGE_CARDS_DATABASE.find(card => 
        card.name.toLowerCase() === term || 
        card.name.toLowerCase().includes(term)
    );
}

console.log('✅ Lounge card database loaded: ' + LOUNGE_CARDS_DATABASE.length + ' cards');