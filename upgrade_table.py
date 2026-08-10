"""
1. Upgrade renderActivationTable() in main.js with rich visuals
2. Add a 3rd button variant .btn-sky in style.css
3. Fix badge colors to use new palette
4. Fix ticker background to use new palette
5. Fix pulse-dot to use new palette
"""

# ─── main.js — replace renderActivationTable ───────────────────────────────

NEW_TABLE_FUNC = '''
// ACTIVATION TABLE — renders directly from COUNTRIES_DATA
function renderActivationTable() {
  const body = document.getElementById('activationTableBody');
  if (!body) return;

  const rows = COUNTRIES_DATA.map((c, i) => {
    const isEven = i % 2 === 0;
    return `
    <tr class="act-row ${c.featured ? 'act-row--hot' : ''}"
      style="border-bottom:1px solid var(--bg-glass-border);
             background:${isEven ? 'rgba(66,133,244,0.03)' : 'transparent'};
             transition:background 0.2s;"
      onmouseover="this.style.background='rgba(22,198,83,0.06)'"
      onmouseout="this.style.background='${isEven ? 'rgba(66,133,244,0.03)' : 'transparent'}'">

      <!-- # -->
      <td style="padding:1rem 1.2rem; color:var(--text-dim); font-size:0.8rem; font-weight:600;">${String(i+1).padStart(2,'0')}</td>

      <!-- Country -->
      <td style="padding:1rem 1.2rem;">
        <div style="display:flex; align-items:center; gap:0.65rem;">
          <span style="width:36px; height:36px; border-radius:50%;
                       background:var(--bg-card-hover);
                       display:flex; align-items:center; justify-content:center;
                       border:1px solid var(--bg-glass-border); flex-shrink:0;">
            ${c.flag}
          </span>
          <div>
            <div style="font-weight:800; color:var(--text-main); font-size:0.95rem;">${c.country}</div>
            <div style="font-size:0.75rem; color:var(--text-dim);">${c.currency}</div>
          </div>
          ${c.featured ? '<span style="font-size:0.65rem; font-weight:800; padding:0.15rem 0.55rem; border-radius:9999px; background:rgba(22,198,83,0.12); color:var(--primary); border:1px solid rgba(22,198,83,0.3); white-space:nowrap;">★ Hot</span>' : ''}
        </div>
      </td>

      <!-- Activation Fee -->
      <td style="padding:1rem 1.2rem;">
        <div style="display:inline-flex; flex-direction:column; align-items:flex-start; gap:0.15rem;">
          <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-dim); font-weight:600;">One-Time Fee</span>
          <span style="font-weight:900; font-size:1.1rem; color:var(--accent-gold);">${c.fee}</span>
        </div>
      </td>

      <!-- Welcome Bonus -->
      <td style="padding:1rem 1.2rem;">
        <div style="display:inline-flex; align-items:center; gap:0.4rem;
                    padding:0.4rem 0.85rem; border-radius:9999px;
                    background:rgba(22,198,83,0.1); border:1px solid rgba(22,198,83,0.25);">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--primary)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
          <span style="font-weight:700; color:var(--primary); font-size:0.9rem;">+${c.welcomeBonus}</span>
        </div>
      </td>

      <!-- Deposit Method -->
      <td style="padding:1rem 1.2rem;">
        <div style="display:flex; flex-wrap:wrap; gap:0.3rem;">
          ${c.depositMethod.split(',').map(m => `
            <span style="font-size:0.72rem; font-weight:600; padding:0.2rem 0.6rem;
                         border-radius:6px; background:rgba(66,133,244,0.08);
                         color:var(--google-blue); border:1px solid rgba(66,133,244,0.2);
                         white-space:nowrap;">${m.trim()}</span>
          `).join('')}
        </div>
      </td>

      <!-- Activate Button -->
      <td style="padding:1rem 1.2rem;">
        <a href="${REGISTRATION_URL}" target="_blank"
           class="btn-activate"
           style="display:inline-flex; align-items:center; gap:0.4rem;
                  padding:0.55rem 1.1rem; border-radius:9999px;
                  background:var(--primary-gradient); color:#fff;
                  font-size:0.82rem; font-weight:700; text-decoration:none;
                  box-shadow:0 4px 14px rgba(22,198,83,0.35);
                  transition:all 0.25s; white-space:nowrap;"
           onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 6px 20px rgba(22,198,83,0.55)'"
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 14px rgba(22,198,83,0.35)'">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Activate
        </a>
      </td>
    </tr>`;
  }).join('');
  body.innerHTML = rows;
}
'''

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace old renderActivationTable
import re
js = re.sub(
    r'// ACTIVATION TABLE.*?renderActivationTable\(\)\s*\n\s*\}\s*\n',
    NEW_TABLE_FUNC + '\n',
    js,
    flags=re.DOTALL
)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)

# ─── style.css — Fix badges, pulse-dot, ticker, and add .btn-sky ────────────

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix badge-primary to use new primary green
css = css.replace(
    '.badge-primary {\n  border-color: rgba(0, 230, 118, 0.35);\n  color: var(--primary);\n  background: var(--primary-light);\n}',
    '.badge-primary {\n  border-color: rgba(22, 198, 83, 0.3);\n  color: var(--primary);\n  background: var(--primary-light);\n}'
)

# Fix badge-gold to use sky blue
css = css.replace(
    '.badge-gold {\n  border-color: rgba(255, 193, 7, 0.35);\n  color: var(--accent-gold);\n  background: var(--accent-gold-light);\n}',
    '.badge-gold {\n  border-color: rgba(56, 189, 248, 0.3);\n  color: var(--accent-gold);\n  background: var(--accent-gold-light);\n}'
)

# Fix pulse-dot to new green
css = css.replace(
    '.pulse-dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background-color: var(--primary);\n  box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.8);\n  animation: pulse 1.6s infinite;\n}',
    '.pulse-dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background-color: var(--primary);\n  box-shadow: 0 0 0 0 rgba(22, 198, 83, 0.8);\n  animation: pulse 1.6s infinite;\n}'
)

# Fix pulse keyframes to new green
css = css.replace(
    '@keyframes pulse {\n  0% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.8); }\n  70% { box-shadow: 0 0 0 12px rgba(0, 230, 118, 0); }\n  100% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0); }\n}',
    '@keyframes pulse {\n  0% { box-shadow: 0 0 0 0 rgba(22, 198, 83, 0.8); }\n  70% { box-shadow: 0 0 0 12px rgba(22, 198, 83, 0); }\n  100% { box-shadow: 0 0 0 0 rgba(22, 198, 83, 0); }\n}'
)

# Fix ticker background to use new palette
css = css.replace(
    'background: linear-gradient(90deg, #004d25 0%, #090d16 50%, #7c4a00 100%);',
    'background: linear-gradient(90deg, rgba(22,198,83,0.15) 0%, rgba(4,8,15,1) 50%, rgba(66,133,244,0.15) 100%);'
)

# Add .btn-sky after .btn-outline:hover block
btn_sky = '''
/* Sky Blue Button Variant */
.btn-sky {
  background: var(--accent-gold-gradient);
  color: #fff;
  box-shadow: 0 6px 25px rgba(56, 189, 248, 0.35);
}

.btn-sky:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 35px rgba(56, 189, 248, 0.55);
}

/* Small button */
'''

css = css.replace('.btn-sm {', btn_sky + '.btn-sm {')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Done - Table and button system upgraded.")
