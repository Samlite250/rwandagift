"""
Inserts a professional activation fee table section directly into index.html,
right before the Earnings Calculator section.
"""

TABLE_HTML = """
  <!-- ===== ACTIVATION FEE TABLE ===== -->
  <section id="activation-fees" style="border-top:1px solid var(--bg-glass-border); padding:5rem 0;">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-gold" style="display:inline-flex; align-items:center; gap:0.4rem;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10A15.3 15.3 0 0112 22a15.3 15.3 0 01-4-10z"/></svg>
          18 Countries Supported
        </span>
        <h2>Activation Fee &amp; Payment Table</h2>
        <p style="color:var(--text-muted);">One-time activation to unlock all earning methods. Choose your country below, pay via local Mobile Money, and start earning today.</p>
      </div>

      <!-- TABLE WRAPPER for mobile scroll -->
      <div style="overflow-x:auto; border-radius:var(--radius-lg); border:1px solid var(--bg-glass-border); background:var(--bg-card);">
        <table style="width:100%; border-collapse:collapse; font-size:0.925rem;">
          <thead>
            <tr style="background:linear-gradient(90deg,rgba(0,242,96,0.08),rgba(5,117,230,0.08)); border-bottom:2px solid var(--bg-glass-border);">
              <th style="padding:1rem 1.2rem; text-align:left; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); white-space:nowrap;">#</th>
              <th style="padding:1rem 1.2rem; text-align:left; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); white-space:nowrap;">Country</th>
              <th style="padding:1rem 1.2rem; text-align:left; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); white-space:nowrap;">Currency</th>
              <th style="padding:1rem 1.2rem; text-align:center; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent-gold); white-space:nowrap;">Activation Fee</th>
              <th style="padding:1rem 1.2rem; text-align:center; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--primary); white-space:nowrap;">Welcome Bonus</th>
              <th style="padding:1rem 1.2rem; text-align:left; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); white-space:nowrap;">Deposit Method</th>
              <th style="padding:1rem 1.2rem; text-align:center; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); white-space:nowrap;">Action</th>
            </tr>
          </thead>
          <tbody id="activationTableBody">
            <!-- Rows injected by JS -->
          </tbody>
        </table>
      </div>

      <div style="margin-top:2rem; text-align:center;">
        <a href="https://mulaearn.com/register.php?ref=Rwandacurrency" target="_blank" class="btn btn-primary" style="padding:1rem 2.5rem; font-size:1rem;">
          Register &amp; Activate Now →
        </a>
        <a href="https://chat.whatsapp.com/Bz3qAOuhRY45GiW4M3swad" target="_blank" class="btn btn-gold" style="padding:1rem 2rem; font-size:1rem; margin-left:0.8rem;">
          Join WhatsApp Community
        </a>
      </div>
    </div>
  </section>
"""

JS_RENDER = """
// ACTIVATION TABLE — renders directly from COUNTRIES_DATA
function renderActivationTable() {
  const body = document.getElementById('activationTableBody');
  if (!body) return;

  const rows = COUNTRIES_DATA.map((c, i) => `
    <tr style="border-bottom:1px solid var(--bg-glass-border); transition:var(--transition);"
      onmouseover="this.style.background='var(--bg-card-hover)'"
      onmouseout="this.style.background='transparent'">
      <td style="padding:0.9rem 1.2rem; color:var(--text-dim); font-size:0.8rem;">${String(i+1).padStart(2,'0')}</td>
      <td style="padding:0.9rem 1.2rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; font-weight:700; color:var(--text-main);">
          ${c.flag}
          ${c.country}
          ${c.featured ? '<span class="badge badge-gold" style="font-size:0.65rem; padding:0.15rem 0.5rem;">Hot</span>' : ''}
        </div>
      </td>
      <td style="padding:0.9rem 1.2rem; color:var(--text-muted); font-size:0.85rem;">${c.currency}</td>
      <td style="padding:0.9rem 1.2rem; text-align:center;">
        <span style="font-weight:800; font-size:1.05rem; color:var(--accent-gold);">${c.fee}</span>
      </td>
      <td style="padding:0.9rem 1.2rem; text-align:center;">
        <span style="font-weight:700; color:var(--primary);">+ ${c.welcomeBonus}</span>
      </td>
      <td style="padding:0.9rem 1.2rem; color:var(--text-muted); font-size:0.82rem;">${c.depositMethod}</td>
      <td style="padding:0.9rem 1.2rem; text-align:center;">
        <a href="${REGISTRATION_URL}" target="_blank"
          style="display:inline-block; padding:0.45rem 1rem; border-radius:var(--radius-full);
                 background:var(--primary-light); color:var(--primary); font-size:0.8rem;
                 font-weight:700; border:1px solid var(--primary); text-decoration:none;
                 transition:var(--transition); white-space:nowrap;"
          onmouseover="this.style.background='var(--primary)'; this.style.color='#000'"
          onmouseout="this.style.background='var(--primary-light)'; this.style.color='var(--primary)'">
          Activate →
        </a>
      </td>
    </tr>
  `).join('');
  body.innerHTML = rows;
}
"""

CSS_TABLE = """
/* ACTIVATION TABLE RESPONSIVE */
@media (max-width: 640px) {
  #activation-fees table th,
  #activation-fees table td {
    padding: 0.7rem 0.8rem;
  }
}
"""

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove any leftover empty activation-matrix section
html = html.replace('\n  \n\n\n  <!-- ===== EARNINGS CALCULATOR', '\n\n  <!-- ===== EARNINGS CALCULATOR')

# Inject table section before Earnings Calculator
html = html.replace(
    '  <!-- ===== EARNINGS CALCULATOR ===== -->',
    TABLE_HTML + '\n  <!-- ===== EARNINGS CALCULATOR ===== -->'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Add renderActivationTable to main.js right after initCountryMatrix func
with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Inject render function before the existing initCountryMatrix
if 'renderActivationTable' not in js:
    js = js.replace('// COUNTRY MATRIX RENDER', JS_RENDER + '\n// COUNTRY MATRIX RENDER')

# Also call renderActivationTable() in DOMContentLoaded
js = js.replace(
    'initCountryMatrix();\n  initPostsHub();',
    'initCountryMatrix();\n  renderActivationTable();\n  initPostsHub();'
)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)

# Append new CSS to style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

if '#activation-fees table' not in css:
    css += CSS_TABLE

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Done! Activation table injected.")
