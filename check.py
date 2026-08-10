with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

checks = {
  'feesModal': 'id="feesModal"' in html,
  'openFeesModal button (hero)': 'openFeesModal()' in html,
  'Instagram Ads card': 'Instagram Ads' in html,
  'Trivial Questions card': 'Trivial' in html,
  'Register & Earn button on cards': 'Register' in html,
  'Level rewards gone from HTML': 'level-rewards-list' not in html,
}
for k, v in checks.items():
    print(k, ':', 'OK' if v else 'MISSING')

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

js_checks = {
  'openFeesModal function': 'openFeesModal' in js,
  'level1Label removed from card render': 'level1Label' not in js.split('renderMatrixCards')[1][:2000],
  'Instagram Ads in translations': 'Instagram Ads' in js,
}
for k, v in js_checks.items():
    print(k, ':', 'OK' if v else 'MISSING')
