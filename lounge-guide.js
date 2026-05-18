// ============================================================
// LOUNGE GUIDE PAGE - CLEAN VERSION
// ============================================================

// Credit Cards Data
const creditCards = [
    { bank: "HDFC", name: "Infinia Metal", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "None", network: "Priority Pass", guest: "Yes", fee: "₹12,500", waiver: "₹10L/year", note: "Invite-only" },
    { bank: "HDFC", name: "Diners Club Black Metal", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "None", network: "Diners Club + PP", guest: "Yes", fee: "₹10,000", waiver: "₹8L/year", note: "Diners Club network" },
    { bank: "HDFC", name: "Regalia Gold", type: "cc", domestic: "3/quarter", intl: "6/year", spend: "₹60K/quarter", network: "Priority Pass", guest: "Intl only", fee: "₹2,500", waiver: "₹3L/year", note: "Domestic spend-gated" },
    { bank: "ICICI", name: "Emeralde Private Metal", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "None", network: "Priority Pass", guest: "Yes", fee: "₹12,000", waiver: "₹10L/year", note: "Lounge unconditional" },
    { bank: "ICICI", name: "Sapphiro", type: "cc", domestic: "16/year", intl: "4/year", spend: "Year 3 spend-based", network: "Priority Pass", guest: "No", fee: "₹3,500", waiver: "Annual spend", note: "First 2 years free" },
    { bank: "Axis", name: "Reserve", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "None", network: "Priority Pass", guest: "Yes", fee: "₹50,000", waiver: "₹35L/year", note: "Ultra-premium" },
    { bank: "Axis", name: "Magnus", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "₹50K/3m", network: "Priority Pass", guest: "4/year", fee: "₹12,500", waiver: "₹25L/year", note: "Intl unconditional" },
    { bank: "Axis", name: "Atlas", type: "cc", domestic: "8-18/year", intl: "4-12/year", spend: "Tier-based", network: "PP + DreamFolks", guest: "No", fee: "₹5,000", waiver: "Milestone", note: "Tier: Silver/Gold/Platinum" },
    { bank: "Axis", name: "Privilege", type: "cc", domestic: "8/year", intl: "None", spend: "None", network: "DreamFolks", guest: "No", fee: "₹1,500", waiver: "Standard", note: "Unconditional domestic" },
    { bank: "SBI", name: "Elite", type: "cc", domestic: "8/year", intl: "6/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹4,999", waiver: "₹10L/year", note: "Best no-condition card" },
    { bank: "SBI", name: "Prime", type: "cc", domestic: "8/year", intl: "4/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹2,999", waiver: "Annual spend", note: "Unconditional access" },
    { bank: "IndusInd", name: "Tiger", type: "cc", domestic: "8/year", intl: "2/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹0", waiver: "Lifetime Free", note: "Best LTF with international" },
    { bank: "IDFC FIRST", name: "Wealth", type: "cc", domestic: "2/quarter", intl: "2/quarter", spend: "₹20K/month", network: "Elite Assist + LoungeKey", guest: "No", fee: "₹0", waiver: "Lifetime Free", note: "Railway lounge included" },
    { bank: "YES Bank", name: "First Preferred", type: "cc", domestic: "8/year", intl: "4/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹999", waiver: "Annual spend", note: "Best value at ₹999" },
    { bank: "Federal", name: "Scapia", type: "cc", domestic: "Unlimited", intl: "None", spend: "₹10K/billing", network: "Bank Program", guest: "No", fee: "₹0", waiver: "Lifetime Free", note: "Lowest threshold" },
    { bank: "AU Bank", name: "Ixigo", type: "cc", domestic: "16/year", intl: "1/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹999", waiver: "Annual spend", note: "Zero forex markup" },
    { bank: "Standard Chartered", name: "Ultimate", type: "cc", domestic: "4/year", intl: "Unlimited", spend: "None", network: "Priority Pass", guest: "No", fee: "₹5,000", waiver: "Annual spend", note: "Great for intl travel" },
    { bank: "HSBC", name: "Live+", type: "cc", domestic: "4/year", intl: "None", spend: "None", network: "DreamFolks", guest: "No", fee: "₹999", waiver: "Annual spend", note: "5% cashback on Amazon" }
];

// Debit Cards Data
const debitCards = [
    { bank: "HDFC", name: "Infiniti Debit", domestic: "16/year", intl: "4/year", spend: "₹10K/quarter", network: "Bank Program", fee: "₹2,500", note: "Voucher-based" },
    { bank: "HDFC", name: "EasyShop Platinum", domestic: "8/year", intl: "None", spend: "₹10K/quarter", network: "Bank Program", fee: "₹750", note: "Entry-level" },
    { bank: "ICICI", name: "Sapphiro Debit", domestic: "16/year", intl: "None", spend: "Year 3 spend-based", network: "Bank Program", fee: "₹1,999", note: "Best domestic debit" },
    { bank: "Axis", name: "Burgundy Debit", domestic: "3/quarter", intl: "None", spend: "None", network: "DreamFolks", fee: "₹0", note: "Burgundy members only" },
    { bank: "Axis", name: "Priority Debit", domestic: "3/quarter", intl: "None", spend: "₹3K/quarter", network: "DreamFolks", fee: "₹750", note: "Low spend threshold" },
    { bank: "SBI", name: "Platinum Intl Debit", domestic: "2/quarter", intl: "None", spend: "None", network: "RuPay/Visa", fee: "₹350", note: "Affordable" },
    { bank: "IDFC FIRST", name: "Wealth Debit", domestic: "4/quarter", intl: "Available", spend: "None", network: "LoungeKey", fee: "₹0", note: "LTF with intl access" },
    { bank: "YES Bank", name: "Prosperity Platinum", domestic: "2/quarter", intl: "None", spend: "None", network: "Bank Program", fee: "₹499", note: "Low fee" },
    { bank: "IndusInd", name: "Signature Debit", domestic: "2/quarter", intl: "None", spend: "None", network: "Bank Program", fee: "₹500", note: "Mid-tier" },
    { bank: "BOB", name: "Platinum Debit", domestic: "2/quarter", intl: "None", spend: "None", network: "Visa/RuPay", fee: "₹250", note: "PSU bank option" },
    { bank: "PNB", name: "Platinum Rupay Debit", domestic: "2/quarter", intl: "None", spend: "None", network: "RuPay", fee: "₹200", note: "Cheapest debit card" }
];

// Render Credit Cards
function renderCreditCards() {
    const container = document.getElementById('credit-table');
    if (!container) return;
    
    let html = `<table><thead><tr>`;
    html += `<th>Bank & Card</th><th>Domestic</th><th>Intl</th><th>Spend Req</th><th>Network</th><th>Guest</th><th>Annual Fee</th><th>Waiver</th>`;
    html += `</tr></thead><tbody>`;
    
    let currentBank = "";
    for (const card of creditCards) {
        if (currentBank !== card.bank) {
            currentBank = card.bank;
            html += `<tr class="group-row"><td colspan="8">${card.bank} BANK</td></tr>`;
        }
        
        html += `<tr>
            <td><strong>${card.name}</strong><br><span class="card-badge cc">CREDIT</span></td>
            <td>${card.domestic === "Unlimited" ? `<span class="unlimited">∞ Unlimited</span>` : card.domestic}</td>
            <td>${card.intl === "Unlimited" ? `<span class="unlimited">∞ Unlimited</span>` : card.intl === "None" ? "—" : card.intl}</td>
            <td>${card.spend === "None" ? `<span class="pill pill-green">No spend</span>` : card.spend}</td>
            <td>${card.network}</td>
            <td>${card.guest === "Yes" ? "✅" : card.guest === "No" ? "❌" : card.guest}</td>
            <td>${card.fee}</td>
            <td class="cond">${card.waiver}</td>
        </tr>`;
    }
    html += `</tbody></table>`;
    container.innerHTML = html;
}

// Render Debit Cards
function renderDebitCards() {
    const container = document.getElementById('debit-table');
    if (!container) return;
    
    let html = `<table><thead><tr>`;
    html += `<th>Bank & Card</th><th>Domestic</th><th>Intl</th><th>Spend Req</th><th>Network</th><th>Annual Fee</th><th>Notes</th>`;
    html += `</tr></thead><tbody>`;
    
    let currentBank = "";
    for (const card of debitCards) {
        if (currentBank !== card.bank) {
            currentBank = card.bank;
            html += `<tr class="group-row"><td colspan="7">${card.bank} BANK — DEBIT CARDS</td></tr>`;
        }
        
        html += `<tr>
            <td><strong>${card.name}</strong><br><span class="card-badge dc">DEBIT</span></td>
            <td>${card.domestic}</td>
            <td>${card.intl === "None" ? "—" : card.intl}</td>
            <td>${card.spend === "None" ? `<span class="pill pill-green">No spend</span>` : card.spend}</td>
            <td>${card.network}</td>
            <td>${card.fee === "₹0" ? `<span class="fee-free">${card.fee}</span>` : card.fee}</td>
            <td class="cond">${card.note}</td>
        </tr>`;
    }
    html += `</tbody></table>`;
    container.innerHTML = html;
}

// Render Summary
function renderSummary() {
    const container = document.getElementById('summary-grid');
    if (!container) return;
    
    container.innerHTML = `
        <div class="summary-card">
            <div class="summary-card-header"><span class="icon">🏆</span><h3>Top Cards — Highest Lounge Benefits</h3></div>
            <div class="summary-card-body">
                <div class="summary-item"><div class="summary-rank">1</div><div class="summary-content"><div class="summary-title">HDFC Infinia Metal</div><div class="summary-detail">Unlimited domestic + international. No spend criteria.</div><div class="summary-highlight">₹12,500/yr · Invite-only</div></div></div>
                <div class="summary-item"><div class="summary-rank">2</div><div class="summary-content"><div class="summary-title">Axis Reserve</div><div class="summary-detail">Unlimited domestic + international. Zero restrictions.</div><div class="summary-highlight">₹50,000/yr · Super-premium</div></div></div>
                <div class="summary-item"><div class="summary-rank">3</div><div class="summary-content"><div class="summary-title">SBI Card Elite</div><div class="summary-detail">8 domestic + 6 international. Fully unconditional.</div><div class="summary-highlight">₹4,999/yr · Best mid-range</div></div></div>
            </div>
        </div>
        <div class="summary-card">
            <div class="summary-card-header"><span class="icon">🆓</span><h3>Zero Annual Fee Cards (LTF)</h3></div>
            <div class="summary-card-body">
                <div class="summary-item"><div class="summary-rank">★</div><div class="summary-content"><div class="summary-title">IndusInd Tiger</div><div class="summary-detail">8 domestic + 2 international. Priority Pass. No spend.</div><div class="summary-highlight">₹0 LTF</div></div></div>
                <div class="summary-item"><div class="summary-rank">★</div><div class="summary-content"><div class="summary-title">Scapia Federal Bank</div><div class="summary-detail">Unlimited domestic (₹10K/billing). Zero forex.</div><div class="summary-highlight">₹0 LTF</div></div></div>
                <div class="summary-item"><div class="summary-rank">★</div><div class="summary-content"><div class="summary-title">IDFC FIRST Wealth</div><div class="summary-detail">2 domestic + 2 intl/quarter (₹20K/month spend).</div><div class="summary-highlight">₹0 LTF</div></div></div>
            </div>
        </div>
        <div class="summary-card">
            <div class="summary-card-header"><span class="icon">∞</span><h3>Unlimited Lounge Access</h3></div>
            <div class="summary-card-body">
                <div class="summary-item"><div class="summary-rank">✓</div><div class="summary-content"><div class="summary-title">HDFC Infinia Metal</div><div class="summary-detail">Domestic + International. No conditions.</div></div></div>
                <div class="summary-item"><div class="summary-rank">✓</div><div class="summary-content"><div class="summary-title">Axis Reserve</div><div class="summary-detail">Domestic + International. Zero conditions.</div></div></div>
                <div class="summary-item"><div class="summary-rank">✓</div><div class="summary-content"><div class="summary-title">Scapia Federal Bank</div><div class="summary-detail">Unlimited domestic with ₹10K/billing cycle spend.</div></div></div>
            </div>
        </div>
    `;
}

// Tab Switching
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            contents.forEach(c => c.classList.remove('active'));
            const target = document.getElementById(targetId);
            if (target) target.classList.add('active');
        });
    });
}

// Header Navigation
function initHeaderNav() {
    const headerLinks = document.querySelectorAll('.header-nav .nav-link');
    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab-btn');
    
    headerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const targetId = href.replace('#', '');
            
            tabs.forEach(tab => {
                if (tab.getAttribute('data-tab') === targetId) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            contents.forEach(c => c.classList.remove('active'));
            const target = document.getElementById(targetId);
            if (target) target.classList.add('active');
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.getElementById('ham');
    if (!hamburger) return;
    
    hamburger.addEventListener('click', function() {
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

// Logo Click
function initLogoClick() {
    const logo = document.getElementById('logoClick');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCreditCards();
    renderDebitCards();
    renderSummary();
    initTabs();
    initHeaderNav();
    initMobileMenu();
    initLogoClick();
});