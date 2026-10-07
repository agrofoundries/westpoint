import re

path = r'g:\bens sir team\train-transit\src\components\InteractiveExplorer.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

products_match = re.search(r'export const EXPLORER_PRODUCTS: ProductItem\[\] = \[(.*?)\];', content, re.DOTALL)
if products_match:
    products_content = products_match.group(1)
    
    # Split by { id: '...' } blocks
    blocks = re.split(r'(?={\s*id:\s*[\'\"].*?[\'\"])', products_content)
    new_blocks = []
    for b in blocks:
        if not b.strip(): 
            new_blocks.append(b)
            continue
        # Check if category is agri, mining, or other
        if re.search(r'category:\s*[\'\"](agri|mining|other)[\'\"]', b):
            continue
        # Also remove if it's commented out completely
        if b.strip().startswith('//'):
            continue
        new_blocks.append(b)
    
    new_products_content = ''.join(new_blocks)
    # Reassemble content
    new_content = content[:products_match.start(1)] + new_products_content + content[products_match.end(1):]
    
    # Clean up categories in the filter definition
    new_content = re.sub(r'\{\s*id:\s*\'agri\',\s*label:\s*\'[^\']+\'\s*\},\s*', '', new_content)
    new_content = re.sub(r'\{\s*id:\s*\'mining\',\s*label:\s*\'[^\']+\'\s*\},\s*', '', new_content)
    new_content = re.sub(r'\{\s*id:\s*\'other\',\s*label:\s*\'[^\']+\'\s*\},\s*', '', new_content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Updated InteractiveExplorer.tsx')
