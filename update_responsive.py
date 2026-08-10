import re

def main():
    with open('style.css', 'r', encoding='utf-8') as f:
        css = f.read()

    # 1. Base button fix: remove whitespace nowrap and add align center for nice wrap
    if 'white-space: nowrap;' in css:
        css = re.sub(
            r'white-space:\s*nowrap;',
            r'white-space: normal;\n  text-align: center;\n  line-height: 1.25;',
            css
        )

    # 2. In 768px media query, ensure the matrix drops to 1fr
    css = css.replace(
        '.fees-modal-grid {\n    grid-template-columns: 1fr;\n  }',
        '.fees-modal-grid, #countryMatrixGrid {\n    grid-template-columns: 1fr;\n  }'
    )

    # 3. In 640px media query, enforce nicely fitting buttons
    media_640_header = '@media (max-width: 640px) {'
    if media_640_header in css:
        parts = css.split(media_640_header)
        patch = '\n  .btn {\n    width: 100%;\n    padding: 0.85rem 1rem;\n    font-size: 0.95rem;\n    line-height: 1.35;\n  }'
        css = parts[0] + media_640_header + patch + parts[1]

    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css)

    # 4. Clean up very long button labels in index.html to be snappy
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = html.replace('Register & Activate Account', 'Activate Now')
    html = html.replace('Start Chatting &amp; Earning Now', 'Start Chatting & Earn')
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    main()
