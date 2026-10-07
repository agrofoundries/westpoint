import re

path = r'g:\bens sir team\train-transit\src\components\InteractiveExplorer.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

products_match = re.search(r'export const EXPLORER_PRODUCTS: ProductItem\[\] = \[(.*?)\];', content, re.DOTALL)
if products_match:
    products_content = products_match.group(1)
    
    blocks = re.split(r'(?={\s*id:\s*[\'\"].*?[\'\"])', products_content)
    oem_blocks = []
    
    for b in blocks:
        if not b.strip(): continue
        if b.strip().startswith('//'): continue
        if re.search(r'category:\s*[\'\"]oem[\'\"]', b):
            oem_blocks.append(b)
            
    print(f"Found {len(oem_blocks)} OEM blocks.")
    for b in oem_blocks:
        title = re.search(r'title:\s*[\'\"]([^\'\"]+)[\'\"]', b)
        print('OEM Item:', title.group(1) if title else 'Unknown')
        
    # Duplicate if there is only 1
    if len(oem_blocks) == 1:
        new_blocks = [oem_blocks[0]]
        for i in range(1, 4):
            new_block = oem_blocks[0].replace(r"id: 'oem-55'", f"id: 'oem-55-{i}'")
            new_block = new_block.replace(r"id: \"oem-55\"", f"id: \"oem-55-{i}\"")
            new_blocks.append(new_block)
            
        print("Duplicating to fill grid...")
        # Since I can't easily replace just the OEM blocks here without full string manipulation, 
        # I'll just write it back using a simple replace.
        # Let's find the original block in the content and replace it with the duplicated versions.
        original_block = oem_blocks[0]
        replacement = ''.join(new_blocks)
        new_content = content.replace(original_block, replacement)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Updated InteractiveExplorer.tsx to duplicate OEM items.')
