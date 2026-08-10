import re

def update_html():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Replace mobile drawer openFeesModal
    html = re.sub(
        r'<button class="btn btn-gold" style="width:100%" onclick="toggleMobileDrawer\(\); openFeesModal\(\)">.*?View Activation Fees\s*</button>',
        r'<a href="#activation-matrix" class="btn btn-gold" style="width:100%" onclick="toggleMobileDrawer()">\n        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10z"/></svg>\n        View Activation Fees\n      </a>',
        html, flags=re.DOTALL
    )

    # 2. Replace hero openFeesModal
    html = re.sub(
        r'<button class="btn btn-gold" onclick="openFeesModal\(\)" data-i18n="viewFeesBtn">.*?Activation Fees\s*</button>',
        r'<a href="#activation-matrix" class="btn btn-gold" data-i18n="viewFeesBtn">\n            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10z"/></svg>\n            Activation Fees\n          </a>',
        html, flags=re.DOTALL
    )

    # 3. Replace How it works openFeesModal
    html = re.sub(
        r'<button onclick="openFeesModal\(\)"[^>]*>View fees →</button>',
        r'<a href="#activation-matrix" style="color:var(--primary); font-weight:700;">View fees →</a>',
        html
    )

    # 4. Replace Footer openFeesModal
    html = re.sub(
        r'<button onclick="openFeesModal\(\)"[^>]*>\+ View All 18 →</button>',
        r'<a href="#activation-matrix" style="color:var(--primary); font-size:0.875rem; font-weight:700;">+ View All 18 →</a>',
        html
    )

    # 5. Extract and remove the modal from bottom
    modal_regex = re.compile(r'<!-- ===== ACTIVATION FEES MODAL ===== -->\s*<div class="modal-overlay" id="feesModal".*?</div>\s*</div>', re.DOTALL)
    
    matrix_section_html = """
  <!-- ===== ACTIVATION FEES MATRIX ===== -->
  <section class="matrix-section" id="activation-matrix" style="border-top:1px solid var(--bg-glass-border);">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-gold" style="margin-bottom:0.6rem; display:inline-flex; gap:0.4rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10A15.3 15.3 0 0112 22a15.3 15.3 0 01-4-10z"/></svg>
          18 Countries Supported
        </span>
        <h2 data-i18n="matrixTitle">Activation & Payout Matrix</h2>
        <p data-i18n="matrixSubtitle" style="color:var(--text-muted);">Select your country to see fees and detailed affiliate reward structures.</p>
      </div>
      <div class="country-filter-tabs" id="countryTabs"></div>
      <div class="fees-modal-grid" id="countryMatrixGrid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:1.5rem;"></div>
      <div style="margin-top:2rem; display:flex; gap:1rem; flex-wrap:wrap; justify-content:center;">
        <a href="https://mulaearn.com/register.php?ref=Rwandacurrency" target="_blank" class="btn btn-primary">Register & Activate Account</a>
        <a href="https://chat.whatsapp.com/Bz3qAOuhRY45GiW4M3swad" target="_blank" class="btn btn-gold">Join WhatsApp Group</a>
      </div>
    </div>
  </section>
"""
    html = modal_regex.sub('', html)

    # Insert matrix section before Calculator
    html = html.replace('  <!-- ===== EARNINGS CALCULATOR ===== -->', matrix_section_html + '\n  <!-- ===== EARNINGS CALCULATOR ===== -->')

    # 6. Add the new earning methods (Instagram Ads, Trivial Questions)
    new_methods = """
        <!-- 8. Instagram Ads -->
        <div class="method-card">
          <div class="method-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </div>
          <h3 data-i18n="method7Title">Instagram Ads</h3>
          <p data-i18n="method7Desc">Earn steady cash directly to your phone by liking, viewing, and interacting with promoted Instagram advertisements.</p>
          <span class="badge badge-primary">Paid Per Interaction</span>
        </div>

        <!-- 9. Trivial Questions -->
        <div class="method-card">
          <div class="method-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h3 data-i18n="method8Title">Trivial Questions</h3>
          <p data-i18n="method8Desc">Answer simple, everyday trivia questions on culture, math, and logic to earn cash rewards for daily correct streaks.</p>
          <span class="badge badge-primary">Skill & Knowledge</span>
        </div>
      </div>
    """
    html = html.replace('      </div>\n    </div>\n  </section>\n\n  <!-- ===== COUNTRY GUIDES', new_methods + '    </div>\n  </section>\n\n  <!-- ===== COUNTRY GUIDES')

    # Ensure to replace the old closure correctly if needed, but since it's hard matching `      </div>\n    </div>\n  </section>\n\n  <!-- ===== COUNTRY GUIDES`:
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

def update_js():
    with open('main.js', 'r', encoding='utf-8') as f:
        js = f.read()
    
    # Add Translations for en, rw, fr for method7Title, method7Desc, method8Title, method8Desc
    # I will just write a regex to replace the spinning wheel block and append the new ones.
    js = js.replace('method6Desc: "Spin the wheel every 24 hours to win free cash prizes, extra task multipliers, and welcome gifts.",\n    postsTitle', 
                    'method6Desc: "Spin the wheel every 24 hours to win free cash prizes, extra task multipliers, and welcome gifts.",\n    method7Title: "Instagram Ads",\n    method7Desc: "Earn steady cash directly to your phone by liking, viewing, and interacting with promoted Instagram advertisements.",\n    method8Title: "Trivial Questions",\n    method8Desc: "Answer simple, everyday trivia questions on culture, math, and logic to earn cash rewards for daily correct streaks.",\n    postsTitle')
    
    js = js.replace('method6Desc: "Zungurutsa ururo buri masaha 24 utangire ibihembo by\' amafaranga y\' ubuntu.",\n    postsTitle',
                    'method6Desc: "Zungurutsa ururo buri masaha 24 utangire ibihembo by\' amafaranga y\' ubuntu.",\n    method7Title: "Instagram Ads",\n    method7Desc: "Injiza amafaranga asanzwe kuri telefone yawe ukanze like, ureba amatangazo yatoranyijwe ya Instagram.",\n    method8Title: "Ibibazo Byubwenge (Trivia)",\n    method8Desc: "Subiza ibibazo byoroshye buri munsi byibaza ku buzima bwacu ndetse n\'ibindi ushobora guhemberwa amanota.",\n    postsTitle')

    js = js.replace('method6Desc: "Tournez la roue toutes les 24 heures pour gagner des prix en cash et des bonus.",\n    postsTitle',
                    'method6Desc: "Tournez la roue toutes les 24 heures pour gagner des prix en cash et des bonus.",\n    method7Title: "Publicités Instagram",\n    method7Desc: "Gagnez de l\'argent régulièrement sur votre téléphone en aimant, visionnant et interagissant avec des annonces Instagram.",\n    method8Title: "Questions de Culture Générale",\n    method8Desc: "Répondez à des questions de trivia simples et gagnez de l\'argent pour des séries continues de bonnes réponses.",\n    postsTitle')

    # Remove the `openFeesModal` and `closeFeesModal` from main.js as they are no longer needed
    js = re.sub(r'window\.openFeesModal\s*=\s*function\(\)\s*\{.*?\};', '', js, flags=re.DOTALL)
    js = re.sub(r'window\.closeFeesModal\s*=\s*function\(e\)\s*\{.*?\};', '', js, flags=re.DOTALL)
    js = re.sub(r'const feesModal = document\.getElementById\(\'feesModal\'\);', '', js)
    js = re.sub(r'if \(feesModal\) \{.*?\}', '', js, flags=re.DOTALL)

    with open('main.js', 'w', encoding='utf-8') as f:
        f.write(js)

update_html()
update_js()
