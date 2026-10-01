import re

path = r'g:\bens sir team\train-transit\src\components\InteractiveExplorer.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

products_match = re.search(r'export const EXPLORER_PRODUCTS: ProductItem\[\] = \[(.*?)\];', content, re.DOTALL)
if products_match:
    products_content = products_match.group(1)
    
    blocks = re.split(r'(?={\s*id:\s*[\'\"].*?[\'\"])', products_content)
    active_oem = 0
    active_loco = 0
    active_rail = 0
    
    for b in blocks:
        if not b.strip(): continue
        if b.strip().startswith('//'): continue
        cat_match = re.search(r'category:\s*[\'\"]([^\'\"]+)[\'\"]', b)
        if cat_match:
            cat = cat_match.group(1)
            if cat == 'oem': active_oem += 1
            if cat == 'loco': active_loco += 1
            if cat == 'rail': active_rail += 1
            
    print(f'Active items - OEM: {active_oem}, Loco: {active_loco}, Rail: {active_rail}')
