// ============================================================
// LOUNGE GUIDE PAGE - COMPLETE VERSION (ALL 45 CARDS)
// ============================================================

// Credit Cards Data - FULL (30 Cards)
const creditCards = [
    // HDFC BANK (5 cards)
    { bank: "HDFC", name: "Infinia Metal", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "None", network: "Priority Pass", guest: "Yes", fee: "₹12,500", waiver: "₹10L/year", note: "Invite-only" },
    { bank: "HDFC", name: "Diners Club Black Metal", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "None", network: "Diners Club + PP", guest: "Yes", fee: "₹10,000", waiver: "₹8L/year", note: "Diners Club network" },
    { bank: "HDFC", name: "Regalia Gold", type: "cc", domestic: "3/quarter", intl: "6/year", spend: "₹60K/quarter", network: "Priority Pass", guest: "Intl only", fee: "₹2,500", waiver: "₹3L/year", note: "Domestic spend-gated" },
    { bank: "HDFC", name: "Diners Club Privilege", type: "cc", domestic: "2/quarter", intl: "1/quarter", spend: "₹60K/quarter", network: "Diners Club", guest: "No", fee: "₹1,000", waiver: "₹3L/year", note: "Total 3 visits/quarter if spend met" },
    { bank: "HDFC", name: "BizPower", type: "cc", domestic: "2/quarter", intl: "None", spend: "None", network: "Bank Program", guest: "No", fee: "₹1,999", waiver: "Business spend", note: "Business/SME card" },
    
    // ICICI BANK (4 cards)
    { bank: "ICICI", name: "Emeralde Private Metal", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "None", network: "Priority Pass", guest: "Yes", fee: "₹12,000", waiver: "₹10L/year", note: "Lounge unconditional" },
    { bank: "ICICI", name: "Sapphiro", type: "cc", domestic: "16/year", intl: "4/year", spend: "Year 3 spend-based", network: "Priority Pass", guest: "No", fee: "₹3,500", waiver: "Annual spend", note: "First 2 years free" },
    { bank: "ICICI", name: "Rubyx", type: "cc", domestic: "2/quarter", intl: "None", spend: "None", network: "DreamFolks", guest: "No", fee: "₹2,000", waiver: "Annual spend", note: "Mid-tier card" },
    { bank: "ICICI", name: "Coral RuPay", type: "cc", domestic: "1/quarter", intl: "None", spend: "₹35K/quarter", network: "RuPay", guest: "No", fee: "₹500", waiver: "Annual spend", note: "Entry-level, railway lounge too" },
    
    // AXIS BANK (6 cards)
    { bank: "Axis", name: "Reserve", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "None", network: "Priority Pass", guest: "Yes", fee: "₹50,000", waiver: "₹35L/year", note: "Ultra-premium" },
    { bank: "Axis", name: "Magnus", type: "cc", domestic: "Unlimited", intl: "Unlimited", spend: "₹50K/3m", network: "Priority Pass", guest: "4/year", fee: "₹12,500", waiver: "₹25L/year", note: "Intl unconditional" },
    { bank: "Axis", name: "Atlas", type: "cc", domestic: "8-18/year", intl: "4-12/year", spend: "Tier-based", network: "PP + DreamFolks", guest: "No", fee: "₹5,000", waiver: "Milestone", note: "Tier: Silver/Gold/Platinum" },
    { bank: "Axis", name: "Select", type: "cc", domestic: "6/year", intl: "6/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹3,000", waiver: "₹3L/year", note: "PP renewal requires ₹3L spend" },
    { bank: "Axis", name: "Privilege", type: "cc", domestic: "8/year", intl: "None", spend: "None", network: "DreamFolks", guest: "No", fee: "₹1,500", waiver: "Standard", note: "Unconditional domestic" },
    { bank: "Axis", name: "ACE / Flipkart", type: "cc", domestic: "2/quarter", intl: "None", spend: "₹50K/3m", network: "DreamFolks", guest: "No", fee: "₹500", waiver: "Annual spend", note: "High threshold for lounge" },
    
    // SBI CARD (3 cards)
    { bank: "SBI", name: "Elite", type: "cc", domestic: "8/year", intl: "6/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹4,999", waiver: "₹10L/year", note: "Best no-condition card" },
    { bank: "SBI", name: "Prime", type: "cc", domestic: "8/year", intl: "4/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹2,999", waiver: "Annual spend", note: "Unconditional access" },
    { bank: "SBI", name: "Aurum", type: "cc", domestic: "2/quarter", intl: "4/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹9,999", waiver: "₹15L/year", note: "Metal card, concierge services" },
    
    // KOTAK BANK (2 cards)
    { bank: "Kotak", name: "White Reserve", type: "cc", domestic: "8/year", intl: "4/year", spend: "None", network: "Priority Pass", guest: "$35", fee: "₹3,000", waiver: "₹5L/year", note: "Free Priority Pass" },
    { bank: "Kotak", name: "Royale Signature", type: "cc", domestic: "8/year", intl: "None", spend: "₹75K/quarter", network: "DreamFolks", guest: "No", fee: "₹999", waiver: "₹1L/year", note: "High spend threshold" },
    
    // INDUSIND BANK (1 card)
    { bank: "IndusInd", name: "Tiger", type: "cc", domestic: "8/year", intl: "2/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹0", waiver: "Lifetime Free", note: "Best LTF with international" },
    
    // IDFC FIRST BANK (2 cards)
    { bank: "IDFC FIRST", name: "Wealth", type: "cc", domestic: "2/quarter", intl: "2/quarter", spend: "₹20K/month", network: "Elite Assist + LoungeKey", guest: "No", fee: "₹0", waiver: "Lifetime Free", note: "Railway lounge included" },
    { bank: "IDFC FIRST", name: "Select", type: "cc", domestic: "2/quarter", intl: "None", spend: "₹20K/month", network: "Elite Assist", guest: "No", fee: "₹0", waiver: "Lifetime Free", note: "Railway lounge 4/quarter" },
    
    // YES BANK (2 cards)
    { bank: "YES Bank", name: "First Exclusive", type: "cc", domestic: "6/year", intl: "6/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹10,000", waiver: "₹6L/year", note: "Super-premium" },
    { bank: "YES Bank", name: "First Preferred", type: "cc", domestic: "8/year", intl: "4/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹999", waiver: "Annual spend", note: "Best value at ₹999" },
    
    // FEDERAL BANK (1 card)
    { bank: "Federal", name: "Scapia", type: "cc", domestic: "Unlimited", intl: "None", spend: "₹10K/billing", network: "Bank Program", guest: "No", fee: "₹0", waiver: "Lifetime Free", note: "Lowest threshold" },
    
    // AU BANK (2 cards)
    { bank: "AU Bank", name: "Ixigo", type: "cc", domestic: "16/year", intl: "1/year", spend: "None", network: "Priority Pass", guest: "No", fee: "₹999", waiver: "Annual spend", note: "Zero forex markup" },
    { bank: "AU Bank", name: "Zenith+", type: "cc", domestic: "4/quarter", intl: "2/quarter", spend: "None", network: "Priority Pass", guest: "No", fee: "₹4,999", waiver: "Annual spend", note: "Strong lounge benefit" },
    
    // STANDARD CHARTERED (1 card)
    { bank: "Standard Chartered", name: "Ultimate", type: "cc", domestic: "4/year", intl: "Unlimited", spend: "None", network: "Priority Pass", guest: "No", fee: "₹5,000", waiver: "Annual spend", note: "Great for intl travel" },
    
    // HSBC (1 card)
    { bank: "HSBC", name: "Live+", type: "cc", domestic: "4/year", intl: "None", spend: "None", network: "DreamFolks", guest: "No", fee: "₹999", waiver: "Annual spend", note: "5% cashback on Amazon" }
];

// Debit Cards Data - FULL (15 cards)
const debitCards = [
    { bank: "HDFC", name: "Infiniti Debit", domestic: "16/year", intl: "4/year", spend: "₹10K/quarter", network: "Bank Program", fee: "₹2,500", note: "Voucher-based" },
    { bank: "HDFC", name: "EasyShop Platinum", domestic: "8/year", intl: "None", spend: "₹10K/quarter", network: "Bank Program", fee: "₹750", note: "Entry-level" },
    { bank: "HDFC", name: "Millennia Debit", domestic: "2/quarter", intl: "None", spend: "₹10K/quarter", network: "Bank Program", fee: "₹500", note: "Basic HDFC debit" },
    { bank: "ICICI", name: "Sapphiro Debit", domestic: "16/year", intl: "None", spend: "Year 3 spend-based", network: "Bank Program", fee: "₹1,999", note: "Best domestic debit" },
    { bank: "ICICI", name: "Coral Paywave Debit", domestic: "2/quarter", intl: "None", spend: "₹5K/3m", network: "Bank Program", fee: "₹699", note: "BOGO on BookMyShow" },
    { bank: "Axis", name: "Burgundy Debit", domestic: "3/quarter", intl: "None", spend: "None", network: "DreamFolks", fee: "₹0", note: "Burgundy members only" },
    { bank: "Axis", name: "Priority Debit", domestic: "3/quarter", intl: "None", spend: "₹3K/quarter", network: "DreamFolks", fee: "₹750", note: "Low spend threshold" },
    { bank: "SBI", name: "Platinum Intl Debit", domestic: "2/quarter", intl: "None", spend: "None", network: "RuPay/Visa", fee: "₹350", note: "Affordable" },
    { bank: "IDFC FIRST", name: "Wealth Debit", domestic: "4/quarter", intl: "Available", spend: "None", network: "LoungeKey", fee: "₹0", note: "LTF with intl access" },
    { bank: "YES Bank", name: "Prosperity Platinum", domestic: "2/quarter", intl: "None", spend: "None", network: "Bank Program", fee: "₹499", note: "Low fee" },
    { bank: "IndusInd", name: "Signature Debit", domestic: "2/quarter", intl: "None", spend: "None", network: "Bank Program", fee: "₹500", note: "Mid-tier" },
    { bank: "Kotak", name: "Privy League Debit", domestic: "2/quarter", intl: "None", spend: "None", network: "Visa Lounge", fee: "₹0", note: "HNI program only" },
    { bank: "HDFC", name: "EasyShop Imperia", domestic: "2/quarter", intl: "None", spend: "₹10K/quarter", network: "Bank Program", fee: "₹1,999", note: "Imperia banking customers" },
    { bank: "BOB", name: "Platinum Debit", domestic: "2/quarter", intl: "None", spend: "None", network: "Visa/RuPay", fee: "₹250", note: "PSU bank option" },
    { bank: "PNB", name: "Platinum Rupay Debit", domestic: "2/quarter", intl: "None", spend: "None", network: "RuPay", fee: "₹200", note: "Cheapest debit card" }
];

// ============================================================
// RENDER FUNCTIONS
// ============================================================

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
            <td class="bank-cell">
                <strong>${card.name}</strong><br>
                <span class="card-badge cc">CREDIT</span>
            </td>
            <td>${card.domestic === "Unlimited" ? `<span class="unlimited">∞ Unlimited</span>` : card.domestic}</td>
            <td>${card.intl === "Unlimited" ? `<span class="unlimited">∞ Unlimited</span>` : card.intl === "None" ? "—" : card.intl}</td>
            <td>${card.spend === "None" ? `<span class="pill pill-green">No spend</span>` : card.spend}</td>
            <td>${card.network}</td>
            <td>${card.guest === "Yes" ? "✅" : card.guest === "No" ? "❌" : card.guest}</td>
            <td class="fee">${card.fee}</td>
            <td class="cond">${card.waiver}</td>
        </tr>`;
    }
    html += `</tbody></table>`;
    container.innerHTML = html;
}

function renderDebitCards() {
    const container = document.getElementById('debit-table');
    if (!container) return;
    
    let html = `<table><thead><tr>`;
    html += `<th>Bank & Card</th><th>Domestic</th><th>Intl</th><th>Spend Req</th><th>Network</th><th>Annual Fee</th><th>Notes</th>`;
    html += `</thead><tbody>`;
    
    let currentBank = "";
    for (const card of debitCards) {
        if (currentBank !== card.bank) {
            currentBank = card.bank;
            html += `<tr class="group-row"><td colspan="7">${card.bank} BANK — DEBIT CARDS</td></tr>`;
        }
        
        html += `<tr>
            <td class="bank-cell">
                <strong>${card.name}</strong><br>
                <span class="card-badge dc">DEBIT</span>
            </td>
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

function renderSummary() {
    const container = document.getElementById('summary-grid');
    if (!container) return;
    
    container.innerHTML = `
        <!-- ============================================================ -->
        <!-- TOP 10 CARDS — HIGHEST LOUNGE BENEFITS -->
        <!-- ============================================================ -->
        <div class="summary-card">
            <div class="summary-card-header">
                <span class="icon">🏆</span>
                <h3>Top 10 Cards — Highest Lounge Benefits</h3>
                <div class="sub">Ranked by total access, network quality &amp; conditions</div>
            </div>
            <div class="summary-card-body">
                <div class="summary-item">
                    <div class="summary-rank">1</div>
                    <div class="summary-content">
                        <div class="summary-title">HDFC Infinia Metal (CC)</div>
                        <div class="summary-detail">Unlimited domestic + international via Priority Pass. No spend criteria. Add-on cards included.</div>
                        <div class="summary-highlight">₹12,500/yr · Invite-only</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">2</div>
                    <div class="summary-content">
                        <div class="summary-title">Axis Reserve (CC)</div>
                        <div class="summary-detail">Unlimited domestic + international. Zero spend criteria. No restrictions whatsoever.</div>
                        <div class="summary-highlight">₹50,000/yr · Super-premium</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">3</div>
                    <div class="summary-content">
                        <div class="summary-title">ICICI Emeralde Private Metal (CC)</div>
                        <div class="summary-detail">Unlimited domestic + international Priority Pass. Add-ons included. No lounge spend criteria.</div>
                        <div class="summary-highlight">₹12,000/yr · Waived at ₹10L</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">4</div>
                    <div class="summary-content">
                        <div class="summary-title">HDFC Diners Club Black Metal (CC)</div>
                        <div class="summary-detail">Unlimited domestic + international via Diners + PP. Add-ons included.</div>
                        <div class="summary-highlight">₹10,000/yr · Waived at ₹8L</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">5</div>
                    <div class="summary-content">
                        <div class="summary-title">Axis Magnus (CC)</div>
                        <div class="summary-detail">Unlimited domestic (₹50K/3m spend) + unlimited intl Priority Pass. 4 guest visits/year.</div>
                        <div class="summary-highlight">₹12,500/yr · Waived at ₹25L</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">6</div>
                    <div class="summary-content">
                        <div class="summary-title">Scapia Federal Bank (CC)</div>
                        <div class="summary-detail">Unlimited domestic (₹10K/billing cycle). Lifetime free. Zero forex markup.</div>
                        <div class="summary-highlight">₹0 Lifetime Free · Best LTF unlimited</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">7</div>
                    <div class="summary-content">
                        <div class="summary-title">SBI Card Elite (CC)</div>
                        <div class="summary-detail">8 domestic + 6 international (Priority Pass). Fully unconditional. Best no-condition mid-range.</div>
                        <div class="summary-highlight">₹4,999/yr · Waived at ₹10L</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">8</div>
                    <div class="summary-content">
                        <div class="summary-title">Axis Atlas (CC)</div>
                        <div class="summary-detail">Up to 18 domestic + 12 international (Platinum tier). Tier-based on annual spend.</div>
                        <div class="summary-highlight">₹5,000/yr · Miles + Lounge value</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">9</div>
                    <div class="summary-content">
                        <div class="summary-title">HDFC Regalia Gold (CC)</div>
                        <div class="summary-detail">3D/quarter (₹60K spend gate) + 6 intl PP unconditional. Strong intl access.</div>
                        <div class="summary-highlight">₹2,500/yr · Good mid-range</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">10</div>
                    <div class="summary-content">
                        <div class="summary-title">AU Zenith+ (CC)</div>
                        <div class="summary-detail">4 domestic/quarter + 2 intl/quarter via Priority Pass. No spend criteria.</div>
                        <div class="summary-highlight">₹4,999/yr · Strong from a small finance bank</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- CARDS WITH UNLIMITED LOUNGE ACCESS -->
        <!-- ============================================================ -->
        <div class="summary-card">
            <div class="summary-card-header">
                <span class="icon">∞</span>
                <h3>Cards with Unlimited Lounge Access</h3>
                <div class="sub">Domestic and/or international — no visit cap</div>
            </div>
            <div class="summary-card-body">
                <div class="summary-item">
                    <div class="summary-rank">✓</div>
                    <div class="summary-content">
                        <div class="summary-title">HDFC Infinia Metal</div>
                        <div class="summary-detail">Domestic + International. No conditions. Priority Pass.</div>
                        <div class="summary-highlight">₹12,500/yr — Invite-only</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">✓</div>
                    <div class="summary-content">
                        <div class="summary-title">Axis Reserve</div>
                        <div class="summary-detail">Domestic + International. Zero conditions. Priority Pass.</div>
                        <div class="summary-highlight">₹50,000/yr — Super-premium</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">✓</div>
                    <div class="summary-content">
                        <div class="summary-title">ICICI Emeralde Private Metal</div>
                        <div class="summary-detail">Domestic + International. No lounge spend criteria.</div>
                        <div class="summary-highlight">₹12,000/yr — Waived at ₹10L</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">✓</div>
                    <div class="summary-content">
                        <div class="summary-title">HDFC Diners Club Black Metal</div>
                        <div class="summary-detail">Domestic + International via Diners + PP. No conditions.</div>
                        <div class="summary-highlight">₹10,000/yr — Waived at ₹8L</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">✓</div>
                    <div class="summary-content">
                        <div class="summary-title">Axis Magnus</div>
                        <div class="summary-detail">Unlimited domestic (conditional: ₹50K/3m) + unlimited intl PP (unconditional).</div>
                        <div class="summary-highlight">₹12,500/yr — Partially conditional</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">✓</div>
                    <div class="summary-content">
                        <div class="summary-title">Scapia Federal Bank (LTF)</div>
                        <div class="summary-detail">Unlimited domestic with ₹10K/billing cycle spend. Lifetime Free!</div>
                        <div class="summary-highlight">₹0 — Lowest threshold for unlimited</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">✓</div>
                    <div class="summary-content">
                        <div class="summary-title">SC Ultimate (International only)</div>
                        <div class="summary-detail">Unlimited international via Priority Pass (no conditions). Domestic limited to 4/year.</div>
                        <div class="summary-highlight">₹5,000/yr — Great for intl travel</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- ZERO ANNUAL FEE CARDS WITH LOUNGE ACCESS (LTF) -->
        <!-- ============================================================ -->
        <div class="summary-card">
            <div class="summary-card-header">
                <span class="icon">🆓</span>
                <h3>Zero Annual Fee Cards with Lounge Access</h3>
                <div class="sub">Lifetime Free (LTF) cards — no fee ever</div>
            </div>
            <div class="summary-card-body">
                <div class="summary-item">
                    <div class="summary-rank">★</div>
                    <div class="summary-content">
                        <div class="summary-title">IndusInd Tiger Credit Card</div>
                        <div class="summary-detail">2 domestic/quarter + 2 intl/year (Priority Pass). Zero spend criteria. Golf included.</div>
                        <div class="summary-highlight">₹0 LTF — Best overall LTF lounge card</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">★</div>
                    <div class="summary-content">
                        <div class="summary-title">Scapia Federal Bank Credit Card</div>
                        <div class="summary-detail">Unlimited domestic (₹10K/billing). Zero forex markup. Popular with frequent flyers.</div>
                        <div class="summary-highlight">₹0 LTF — Best unlimited LTF</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">★</div>
                    <div class="summary-content">
                        <div class="summary-title">IDFC FIRST Wealth Credit Card</div>
                        <div class="summary-detail">2 domestic + 2 intl/quarter (₹20K/month spend). Railway lounge too.</div>
                        <div class="summary-highlight">₹0 LTF — Intl access with no fee</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">★</div>
                    <div class="summary-content">
                        <div class="summary-title">IDFC FIRST Select Credit Card</div>
                        <div class="summary-detail">2 domestic/quarter (₹20K/month). Railway lounge (4/quarter). Simple rewards.</div>
                        <div class="summary-highlight">₹0 LTF — Entry-level domestic access</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">★</div>
                    <div class="summary-content">
                        <div class="summary-title">IDFC FIRST Millennia Credit Card</div>
                        <div class="summary-detail">Limited lounge access on spend criteria. Very basic but free forever.</div>
                        <div class="summary-highlight">₹0 LTF — Very limited access</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">★</div>
                    <div class="summary-content">
                        <div class="summary-title">Axis Burgundy Debit Card</div>
                        <div class="summary-detail">3 domestic visits/quarter. No annual fee for Burgundy account holders.</div>
                        <div class="summary-highlight">₹0 — Requires Axis Burgundy relationship</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- BEST BUDGET CARDS (₹500–₹3,000 Annual Fee) -->
        <!-- ============================================================ -->
        <div class="summary-card">
            <div class="summary-card-header">
                <span class="icon">💰</span>
                <h3>Best Budget Cards (₹500–₹3,000 Annual Fee)</h3>
                <div class="sub">Maximum lounge value per rupee of annual fee</div>
            </div>
            <div class="summary-card-body">
                <div class="summary-item">
                    <div class="summary-rank">1</div>
                    <div class="summary-content">
                        <div class="summary-title">YES First Preferred (CC)</div>
                        <div class="summary-detail">8 domestic + 4 international/year. Priority Pass. Unconditional access. Incredible value.</div>
                        <div class="summary-highlight">₹999/yr — 12 visits incl. intl PP</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">2</div>
                    <div class="summary-content">
                        <div class="summary-title">Axis Privilege (CC)</div>
                        <div class="summary-detail">8 domestic/year. Fully unconditional. No spend gates. Clean, reliable access.</div>
                        <div class="summary-highlight">₹1,500/yr — 8 guaranteed visits</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">3</div>
                    <div class="summary-content">
                        <div class="summary-title">HSBC Live+ (CC)</div>
                        <div class="summary-detail">4 domestic/year. Unconditional. Plus 5% cashback on Amazon and 20% on Swiggy.</div>
                        <div class="summary-highlight">₹999/yr — Low fee, clean access</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">4</div>
                    <div class="summary-content">
                        <div class="summary-title">SBI Card Prime (CC)</div>
                        <div class="summary-detail">8 domestic + 4 international (PP). Unconditional. Strong rewards on dining &amp; movies.</div>
                        <div class="summary-highlight">₹2,999/yr — Reliable unconditional access</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">5</div>
                    <div class="summary-content">
                        <div class="summary-title">AU Ixigo (CC)</div>
                        <div class="summary-detail">16 domestic + railway + 1 intl PP. Zero forex. ₹1,000 Ixigo credit on joining.</div>
                        <div class="summary-highlight">₹999/yr — Casual traveller favourite</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank">6</div>
                    <div class="summary-content">
                        <div class="summary-title">HDFC Regalia Gold (CC)</div>
                        <div class="summary-detail">3D/qtr (spend-gated) + 6 intl PP (unconditional). Versatile mid-premium card.</div>
                        <div class="summary-highlight">₹2,500/yr — Waived at ₹3L spend</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- LOUNGE ACCESS NETWORKS IN INDIA (2026) -->
        <!-- ============================================================ -->
        <div class="summary-card">
            <div class="summary-card-header">
                <span class="icon">🌐</span>
                <h3>Lounge Access Networks in India (2026)</h3>
                <div class="sub">Which network your card uses matters</div>
            </div>
            <div class="summary-card-body">
                <div class="summary-item">
                    <div class="summary-rank" style="background:#92400e;">PP</div>
                    <div class="summary-content">
                        <div class="summary-title">Priority Pass</div>
                        <div class="summary-detail">Gold standard. 1,700+ lounges in 140+ countries. ~25-30 Indian airports. Used by HDFC, Axis, SBI, ICICI, IndusInd, YES, AU, SC. Unaffected by DreamFolks disruption.</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="background:#3730a3;font-size:8px;">DF</div>
                    <div class="summary-content">
                        <div class="summary-title">DreamFolks</div>
                        <div class="summary-detail">Largest domestic network. Some operators ended partnerships mid-2025. ICICI phased out. IDFC First moved to Elite Assist. Axis, Kotak, HSBC, RBL still using.</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="background:#9d174d;font-size:7px;">EA</div>
                    <div class="summary-content">
                        <div class="summary-title">Elite Assist (TFS subsidiary)</div>
                        <div class="summary-detail">New entrant. IDFC FIRST Bank migrated to this. Travel Food Services subsidiary managing domestic lounges at many airports.</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="background:#065f46;">LK</div>
                    <div class="summary-content">
                        <div class="summary-title">LoungeKey</div>
                        <div class="summary-detail">Used for IDFC FIRST Wealth &amp; Private debit cards for international access. Requires app registration at loungekey.com before first visit.</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="background:#1d4ed8;font-size:8px;">AL</div>
                    <div class="summary-content">
                        <div class="summary-title">Adani LoungeOne</div>
                        <div class="summary-detail">New 2025-26 entrant. Covers Adani-operated airports: Ahmedabad, Jaipur, Lucknow, Mangalore, Guwahati, Trivandrum. Direct online booking available.</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="background:#374151;font-size:8px;">DC</div>
                    <div class="summary-content">
                        <div class="summary-title">Diners Club</div>
                        <div class="summary-detail">HDFC Diners Club cards access Diners Club network globally — covers slightly different set of lounges than Priority Pass. Strong international coverage.</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- BEST CARD BY TRAVELLER PROFILE -->
        <!-- ============================================================ -->
        <div class="summary-card">
            <div class="summary-card-header">
                <span class="icon">🎯</span>
                <h3>Best Card by Traveller Profile</h3>
                <div class="sub">Personalised recommendations</div>
            </div>
            <div class="summary-card-body">
                <div class="summary-item">
                    <div class="summary-rank" style="font-size:9px;">✈✈✈</div>
                    <div class="summary-content">
                        <div class="summary-title">Heavy Domestic Flyer (10+ trips/year)</div>
                        <div class="summary-detail">Scapia (₹0, unlimited) or HDFC Infinia/Axis Magnus (₹12.5K, unlimited). Scapia if budget-conscious, Magnus if you also want intl PP.</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="font-size:9px;">✈🌍</div>
                    <div class="summary-content">
                        <div class="summary-title">Frequent International Traveller</div>
                        <div class="summary-detail">HDFC Infinia / Axis Reserve / ICICI Emeralde for unlimited. SBI Elite (₹4,999) for no-condition Priority Pass at lower fee.</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="font-size:9px;">✈</div>
                    <div class="summary-content">
                        <div class="summary-title">Occasional Flyer (4–6 trips/year)</div>
                        <div class="summary-detail">SBI Elite (no conditions, 8D+6I) or IndusInd Tiger (LTF, 8D+2I) or YES First Preferred (₹999, 8D+4I).</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="font-size:9px;">₹0</div>
                    <div class="summary-content">
                        <div class="summary-title">Zero Fee Priority (LTF)</div>
                        <div class="summary-detail">IndusInd Tiger (best — intl PP too), Scapia (unlimited domestic), IDFC FIRST Wealth (intl LoungeKey + domestic).</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="font-size:9px;">👨‍👩‍👧</div>
                    <div class="summary-content">
                        <div class="summary-title">Family / Guest Access Needed</div>
                        <div class="summary-detail">HDFC Infinia (add-on cards included), Axis Magnus (4 guest visits/year), ICICI Emeralde (add-on included).</div>
                    </div>
                </div>
                <div class="summary-item">
                    <div class="summary-rank" style="font-size:9px;">🏦</div>
                    <div class="summary-content">
                        <div class="summary-title">Debit Card User (no credit card)</div>
                        <div class="summary-detail">ICICI Sapphiro Debit (16/yr, ₹1,999), HDFC Infiniti Debit (16/yr, ₹2,500), IDFC FIRST Wealth Debit (LTF + intl LoungeKey).</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// ============================================================
// INITIALIZATION FUNCTIONS
// ============================================================

function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    if (tabs.length === 0) return;
    
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

function initHeaderNav() {
    const headerLinks = document.querySelectorAll('.header-nav .nav-link');
    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab-btn');
    
    if (headerLinks.length === 0) return;
    
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

function initMobileMenu() {
    const hamburger = document.getElementById('ham');
    const mobileNav = document.querySelector('.header-nav');
    
    if (!hamburger || !mobileNav) return;
    
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileNav.classList.toggle('active');
        hamburger.innerHTML = mobileNav.classList.contains('active') ? '✕' : '☰';
    });
    
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            hamburger.innerHTML = '☰';
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
            mobileNav.classList.remove('active');
            hamburger.innerHTML = '☰';
        }
    });
}

function initLogoClick() {
    const logoElement = document.getElementById('logoClick');
    if (logoElement) {
        logoElement.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    renderCreditCards();
    renderDebitCards();
    renderSummary();
    initTabs();
    initHeaderNav();
    initMobileMenu();
    initLogoClick();
});

console.log('✅ Lounge Guide page loaded with all 45 cards');