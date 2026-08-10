import re

def main():
    with open('style.css', 'r', encoding='utf-8') as f:
        css = f.read()

    # Base button fix
    pattern_btn = r'(\.btn\s*\{[^}]*?)white-space:\s*nowrap;([^}*]*\})'
    css = re.sub(pattern_btn, r'\1white-space: normal;\n  text-align: center;\n  line-height: 1.25;\2', css)

    # 1fr for matrix on mobile
    css = css.replace(
        '.fees-modal-grid {\n    grid-template-columns: 1fr;\n  }',
        '.fees-modal-grid,\n  #countryMatrixGrid {\n    grid-template-columns: 1fr;\n  }'
    )

    # Better padding for buttons on small mobile screens
    media_640_header = '@media (max-width: 640px) {'
    if media_640_header in css:
        parts = css.split(media_640_header)
        patch = '\n  .btn {\n    width: 100%;\n    padding: 0.85rem 1rem;\n    font-size: 0.95rem;\n    line-height: 1.35;\n  }'
        
        # Don't add twice
        if '.btn {' not in parts[1][:100]:
            css = parts[0] + media_640_header + patch + parts[1]

    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css)

if __name__ == '__main__':
    main()
