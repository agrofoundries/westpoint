import re

path = r'g:\bens sir team\train-transit\src\components\InteractiveExplorer.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

products_match = re.search(r'export const EXPLORER_PRODUCTS: ProductItem\[\] = \[(.*?)\];', content, re.DOTALL)
if products_match:
    products_content = products_match.group(1)
    
    blocks = re.split(r'(?={\s*id:\s*[\'\"].*?[\'\"])', products_content)
    categories = {}
    for b in blocks:
        if not b.strip(): continue
        cat_match = re.search(r'category:\s*[\'\"]([^\'\"]+)[\'\"]', b)
        if cat_match:
            cat = cat_match.group(1)
            categories[cat] = categories.get(cat, 0) + 1
    print('Remaining categories and counts:', categories)
