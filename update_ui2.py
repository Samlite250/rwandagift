import re

def update_html():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Replace all WhatsApp buttons to direct links
    # Hero:
    html = re.sub(
        r'<button class="btn btn-outline" onclick="openWhatsAppModal\(\)">\s*(<svg[\s\S]*?</svg>)\s*(<span data-i18n="whatsappSupportBtn">Support</span>)\s*</button>',
        r'<a href="https://wa.me/250735323980" target="_blank" class="btn btn-outline">\n            \1\n            \2\n          </a>',
        html
    )
    
    # Footer:
    html = re.sub(
        r'<button onclick="openWhatsAppModal\(\)" class="btn btn-outline btn-sm">Support Chat</button>',
        r'<a href="https://wa.me/250735323980" target="_blank" class="btn btn-outline btn-sm">Support Chat</a>',
        html
    )
    
    # Floating Icon:
    html = re.sub(
        r'<button class="floating-whatsapp" onclick="openWhatsAppModal\(\)" aria-label="WhatsApp Support">([\s\S]*?)</button>',
        r'<a href="https://wa.me/250735323980" target="_blank" class="floating-whatsapp" aria-label="WhatsApp Support">\1</a>',
        html
    )
    
    # Remove WhatsApp modal
    html = re.sub(r'<!-- ===== WHATSAPP SUPPORT MODAL ===== -->\s*<div class="modal-overlay" id="whatsappModal">.*?</form>\s*</div>\s*</div>', '', html, flags=re.DOTALL)
    
    # Clean up empty tags left loosely before script
    html = re.sub(r'</div>\s*<script type="module" src="/main.js"></script>', '<script type="module" src="/main.js"></script>', html)
    
    # Append CTA buttons to ways of earning inside index.html
    # We will search for all spans that mark the end of the method content and append the button right after
    cta = '</span>\n          <a href="https://mulaearn.com/register.php?ref=Rwandacurrency" target="_blank" class="btn btn-outline" style="width:100%; margin-top:1.5rem; font-size:0.875rem; border-color:var(--primary); color:var(--text-main);">Register & Earn →</a>'
    
    html = html.replace('<span class="badge badge-primary">Paid Per View</span>', '<span class="badge badge-primary">Paid Per View' + cta)
    html = html.replace('<span class="badge badge-primary">Instant Credit</span>', '<span class="badge badge-primary">Instant Credit' + cta)
    html = html.replace('<span class="badge badge-gold">Highest Payouts</span>', '<span class="badge badge-gold">Highest Payouts' + cta)
    html = html.replace('<span class="badge badge-primary">Skill Tournaments</span>', '<span class="badge badge-primary">Skill Tournaments' + cta)
    html = html.replace('<span class="badge badge-primary">Learn &amp; Earn</span>', '<span class="badge badge-primary">Learn &amp; Earn' + cta)
    html = html.replace('<span class="badge badge-gold">Free Daily</span>', '<span class="badge badge-gold">Free Daily' + cta)
    html = html.replace('<span class="badge badge-primary">Paid Per Interaction</span>', '<span class="badge badge-primary">Paid Per Interaction' + cta)
    html = html.replace('<span class="badge badge-primary">Skill &amp; Knowledge</span>', '<span class="badge badge-primary">Skill &amp; Knowledge' + cta)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

def update_css():
    with open('style.css', 'r', encoding='utf-8') as f:
        css = f.read()
    
    # Modern OLED neon update:
    css = re.sub(
        r':root\s*\{.*?\/\* LIGHT THEME SURFACES \*\/',
        '''
:root {
  /* Vibrant & Rich Color System */
  --primary: #00f260;
  --primary-gradient: linear-gradient(135deg, #00f260 0%, #0575e6 100%);
  --primary-hover: #00d956;
  --primary-light: rgba(0, 242, 96, 0.12);
  --primary-glow: rgba(0, 242, 96, 0.4);

  /* Gold & Warm Accent Palette */
  --accent-gold: #fbbf24;
  --accent-gold-gradient: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
  --accent-gold-hover: #f59e0b;
  --accent-gold-light: rgba(251, 191, 36, 0.12);
  --accent-cyan: #00e5ff;
  --accent-purple: #ab47bc;

  /* Surfaces & Glassmorphism - Premium OLED Look */
  --bg-dark: #050914;
  --bg-card: #0c1222;
  --bg-card-hover: #131b31;
  --bg-glass: rgba(12, 18, 34, 0.7);
  --bg-glass-border: rgba(255, 255, 255, 0.05);

  /* Typography Colors */
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --text-dim: #475569;

  /* Layout & System Values */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --shadow-sm: 0 4px 20px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 40px rgba(0, 242, 96, 0.15);
  --shadow-gold: 0 0 40px rgba(251, 191, 36, 0.15);
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* LIGHT THEME SURFACES */'''.strip(),
        css, flags=re.DOTALL
    )

    # Reintroduce subtle radial gradient nicely matching senior dev professional aesthetic
    css = re.sub(
        r'body\s*\{[^}]*background-color:\s*var\(--bg-dark\);\s*\}',
        '''body {\n  min-height: 100vh;\n  width: 100%;\n  overflow-x: hidden;\n  line-height: 1.6;\n  background: radial-gradient(circle at 15% 50%, rgba(0,242,96,0.06), transparent 25%),\n              radial-gradient(circle at 85% 30%, rgba(5,117,230,0.06), transparent 25%),\n              var(--bg-dark);\n  background-color: var(--bg-dark);\n}''',
        css
    )

    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css)

def update_js():
    with open('main.js', 'r', encoding='utf-8') as f:
        js = f.read()

    js = re.sub(r'window\.openWhatsAppModal\s*=\s*function\(\)\s*\{.*?\};', '', js, flags=re.DOTALL)
    js = re.sub(r'window\.closeWhatsAppModal\s*=\s*function\(\)\s*\{.*?\};', '', js, flags=re.DOTALL)
    js = re.sub(r'window\.handleWhatsAppSubmit\s*=\s*function\(e\)\s*\{.*?\};', '', js, flags=re.DOTALL)
    js = re.sub(r'const whatsappModal\s*=\s*document\.getElementById\(\'whatsappModal\'\);', '', js)
    js = re.sub(r'if \(whatsappModal\) \{.*?\}', '', js, flags=re.DOTALL)
    js = re.sub(r'window\.closeWhatsAppModal\(\);', '', js)
    
    with open('main.js', 'w', encoding='utf-8') as f:
        f.write(js)

if __name__ == "__main__":
    update_html()
    update_css()
    update_js()
