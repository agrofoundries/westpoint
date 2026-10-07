import re

target_file = r'g:\bens sir team\train-transit\src\components\InteractiveExplorer.tsx'

with open(target_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Simplify ProductItem interface
interface_old = '''export interface ProductItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  series: string;
  specs: string;
  compliance: string[];
  axleLoad: string;
  materialGrade: string;
  tensileStrength: string;
  yieldStrength: string;
  hardness: string;
  desc: string;
  img: string;
  drawingImg: string;
  sourceUrl?: string;
  researchUrl?: string;
  imageProvider?: string;
  imageSearchTerms?: string;
  licenseStatus?: string;
  stockPageUrl?: string;
  fallbackImg?: string;
  cadFile: string;
  keyFeatures: string[];
}'''

interface_new = '''export interface ProductItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  series: string;
  specs: string;
  compliance: string[];
  axleLoad: string;
  materialGrade: string;
  tensileStrength: string;
  yieldStrength: string;
  hardness: string;
  desc: string;
  img: string;
  keyFeatures: string[];
}'''

content = content.replace(interface_old, interface_new)

# 2. Remove trial stock comment block
comments_pattern = r'// STOCK TRIAL IMAGES:[\s\S]*?// UI intentionally shows no research/source badges\.\n+'
content = re.sub(comments_pattern, '', content)

# 3. Strip unwanted fields from each product item
skip_prefixes = (
    'drawingImg:',
    'sourceUrl:',
    'researchUrl:',
    'imageProvider:',
    'imageSearchTerms:',
    'licenseStatus:',
    'stockPageUrl:',
    'fallbackImg:',
    'cadFile:'
)

lines = content.split('\n')
new_lines = []

for line in lines:
    stripped = line.strip()
    if any(stripped.startswith(prefix) for prefix in skip_prefixes):
        continue
    new_lines.append(line)

content = '\n'.join(new_lines)

# 4. Remove onError referencing fallbackImg from <img>
old_img = '''                    <img
                      src={product.img}
                      alt={product.title}
                      onError={(event) => {
                        const target = event.currentTarget;
                        const fallback = product.fallbackImg;
                        if (fallback && target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#F8FAFC', opacity: 1, transition: 'transform 0.4s ease' }}
                    />'''

new_img = '''                    <img
                      src={product.img}
                      alt={product.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#F8FAFC', opacity: 1, transition: 'transform 0.4s ease' }}
                    />'''

content = content.replace(old_img, new_img)

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully stripped extra fields and simplified InteractiveExplorer.tsx!")
