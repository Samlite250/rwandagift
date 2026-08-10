flags = {
    'rwanda':      '🇷🇼',
    'kenya':       '🇰🇪',
    'tanzania':    '🇹🇿',
    'uganda':      '🇺🇬',
    'nigeria':     '🇳🇬',
    'burundi':     '🇧🇮',
    'zambia':      '🇿🇲',
    'malawi':      '🇲🇼',
    'ivorycoast':  '🇨🇮',
    'senegal':     '🇸🇳',
    'botswana':    '🇧🇼',
    'southafrica': '🇿🇦',
    'ghana':       '🇬🇭',
    'cameroon':    '🇨🇲',
    'westafrica':  '🌍',
    'southsudan':  '🇸🇸',
    'others':      '🌐',
}

import re

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace each country's flag field (the SVG pin) with the emoji
for country_id, emoji in flags.items():
    # Match: id: 'country_id', followed by country/flag lines
    # The flag field looks like: flag: '<svg ...>...</svg>',
    # We replace it with: flag: '🇷🇼',
    pattern = r"(id:\s*'" + re.escape(country_id) + r"'[\s\S]*?flag:\s*')([\s\S]*?)(',)"
    replacement = r"\g<1>" + emoji + r"\g<3>"
    js = re.sub(pattern, replacement, js, count=1)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Flags updated!")

# Verify
with open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()
for country_id, emoji in flags.items():
    if emoji in content:
        print(f"  ✓ {country_id}: {emoji}")
    else:
        print(f"  ✗ {country_id}: MISSING")
