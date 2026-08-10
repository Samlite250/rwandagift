import re

def update_html():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Move matrix section into a modal at the bottom
    # First, rip out the activation-matrix section completely
    matrix_pattern = r'<!-- ===== ACTIVATION FEES MATRIX ===== -->\s*<section class="matrix-section" id="activation-matrix"[^>]*>[\s\S]*?</section>'
    
    match = re.search(matrix_pattern, html)
    if match:
        html = html.replace(match.group(0), '')
        
        # Build the modal structure
        modal_html = """
  <!-- ===== ACTIVATION FEES MODAL ===== -->
  <div class="modal-overlay" id="feesModal" onclick="closeFeesModal(event)">
    <div class="modal-card fees-modal-card">
      <button class="modal-close" onclick="closeFeesModal()" aria-label="Close fees modal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div style="margin-bottom:1.2rem;">
        <span class="badge badge-gold" style="margin-bottom:0.6rem; display:inline-flex; gap:0.4rem;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10A15.3 15.3 0 0112 22a15.3 15.3 0 01-4-10z"/></svg>
          18 Countries
        </span>
        <h2 data-i18n="matrixTitle" style="font-size:clamp(1.3rem,3vw,1.8rem); margin-bottom:0.3rem;">Activation &amp; Payout Matrix</h2>
        <p data-i18n="matrixSubtitle" style="font-size:0.875rem; color:var(--text-muted);">Select your country to see fees and options.</p>
      </div>
      <div class="country-filter-tabs" id="countryTabs"></div>
      <div class="fees-modal-grid" id="countryMatrixGrid"></div>
    </div>
  </div>
"""
        # Inject right before the script tag
        html = html.replace('<script type="module" src="/main.js"></script>', modal_html + '\n  <script type="module" src="/main.js"></script>')

    # Convert refs back to modal clicks
    html = re.sub(
        r'<a href="#activation-matrix" class="btn btn-gold" style="width:100%" onclick="toggleMobileDrawer\(\)">',
        r'<button class="btn btn-gold" style="width:100%" onclick="toggleMobileDrawer(); openFeesModal();">',
        html
    )
    # The inner SVG and text remains, but closing tag needs fixing
    html = re.sub(r'View Activation Fees\s*</a>', r'View Activation Fees\n      </button>', html)

    html = re.sub(
        r'<a href="#activation-matrix" class="btn btn-gold" data-i18n="viewFeesBtn">',
        r'<button class="btn btn-gold" onclick="openFeesModal()" data-i18n="viewFeesBtn">',
        html
    )
    
    html = re.sub(r'Activation Fees\s*</a>', r'Activation Fees\n          </button>', html)

    html = html.replace('<a href="#activation-matrix" style="color:var(--primary); font-weight:700;">View fees →</a>', '<button onclick="openFeesModal()" style="color:var(--primary); font-weight:700; background:none; border:none; cursor:pointer; font-size:inherit;">View fees →</button>')
    html = html.replace('<a href="#activation-matrix" style="color:var(--primary); font-size:0.875rem; font-weight:700;">+ View All 18 →</a>', '<button onclick="openFeesModal()" style="color:var(--primary); font-size:0.875rem; font-weight:700; background:none; border:none; cursor:pointer;">+ View All 18 →</button>')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

def update_css():
    with open('style.css', 'r', encoding='utf-8') as f:
        css = f.read()

    # Revert all generic "white-space: normal; \n  text-align: center; \n  line-height: 1.25;" 
    # that shouldn't be there e.g., in `.ticker-content`, `.val`, `.country-tab` etc.
    # We will just replace it universally with white-space: nowrap, and then specifically set normal on .btn
    
    css = re.sub(r'white-space:\s*normal;\n\s*text-align:\s*center;\n\s*line-height:\s*1.25;', 'white-space: nowrap;', css)
    
    # Apply properly to .btn only
    css = re.sub(r'(\.btn\s*\{[^}]*?)white-space:\s*nowrap;', r'\1white-space: normal;\n  text-align: center;\n  line-height: 1.25;', css)

    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css)


def update_js():
    with open('main.js', 'r', encoding='utf-8') as f:
        js = f.read()
    
    # Remove Level 1, 2, 3 earnings from matrix cards per user request
    levels_pattern = r'<div class="reward-row">\s*<span>\$\{t\.level1Label\}</span>\s*<span class="val">\$\{c\.level1\}</span>\s*</div>\s*<div class="reward-row">\s*<span>\$\{t\.level2Label\}</span>\s*<span class="val">\$\{c\.level2\}</span>\s*</div>\s*<div class="reward-row">\s*<span>\$\{t\.level3Label\}</span>\s*<span class="val">\$\{c\.level3\}</span>\s*</div>'
    js = re.sub(levels_pattern, '', js)

    # Re-add modal logic
    modal_funcs = """

window.openFeesModal = function() {
  const modal = document.getElementById('feesModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderTabs();
  renderMatrixCards();
};

window.closeFeesModal = function(event) {
  if (event && event.target.id === 'feesModal') {
    document.getElementById('feesModal').classList.remove('active');
    document.body.style.overflow = '';
  } else if (!event) {
    document.getElementById('feesModal').classList.remove('active');
    document.body.style.overflow = '';
  }
};
"""
    if 'window.openFeesModal' not in js:
        js = js.replace('// ACTIVATION FEES MODAL', '// ACTIVATION FEES MODAL' + modal_funcs)
        
    js = js.replace("if (e.key === 'Escape') {\n    \n    \n    \n  }", "if (e.key === 'Escape') {\n    const feesModal = document.getElementById('feesModal');\n    if (feesModal) { feesModal.classList.remove('active'); document.body.style.overflow = ''; }\n  }")

    with open('main.js', 'w', encoding='utf-8') as f:
        f.write(js)

if __name__ == '__main__':
    update_html()
    update_css()
    update_js()

