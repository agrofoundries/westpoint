import re

target_file = r'g:\bens sir team\train-transit\src\components\InteractiveExplorer.tsx'

with open(target_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Clean ProductItem interface
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
  drawingImg: string;
  cadFile: string;
  keyFeatures: string[];
}'''

content = content.replace(interface_old, interface_new)

# 2. Remove stock trial comment block
comments_pattern = r'// STOCK TRIAL IMAGES:[\s\S]*?// UI intentionally shows no research/source badges\.\n+'
content = re.sub(comments_pattern, '', content)

# 3. Local image mapping for products
LOCAL_MAP = {
    'rail-0': '/images/amsted_bogie_axlebox.jpg',
    'rail-1': '/images/trackside_turnout_castings.jpg',
    'rail-2': '/images/amsted_centering_disc.jpg',
    'rail-3': '/images/amsted_brake_head.jpg',
    'rail-4': '/images/prod_pin_bracket.jpg',
    'rail-5': '/images/prod_pin_bracket.jpg',
    'rail-6': '/images/gettyimages-1412298980-1024x1024.jpg',
    'rail-7': '/images/trackside_turnout_castings_2.jpg',
    'rail-8': '/images/amsted_bogie_axlebox.jpg',
    'rail-9': '/images/turnout_frog_manganese_stock.jpg',
    'rail-10': '/images/prod_railway_track_plates.jpg',
    'rail-11': '/images/railway-wheelset-freight.jpg',
    'rail-12': '/images/smart_freight_bogie.png',
    
    'agri-13': '/images/prod_rotavator_gearbox_13x23.jpg',
    'agri-14': '/images/prod_sonalika_rotavator_13x25.jpg',
    'agri-15': '/images/real_metal_casting_stock.jpg',
    'agri-16': '/images/amsted_rotavator_gearbox.jpg',
    'agri-17': '/images/real_cnc_machining_stock.jpg',
    'agri-18': '/images/prod_pin_bracket.jpg',
    'agri-19': '/images/gettyimages-144461984-1024x1024.jpg',
    'agri-20': '/images/real_metal_casting_stock.jpg',
    'agri-21': '/images/prod_rotavator_gearbox_13x23.jpg',
    'agri-22': '/images/real_cnc_machining_stock.jpg',
    
    'loco-23': '/images/amsted_jacking_pad.jpg',
    'loco-24': '/images/prod_pin_bracket.jpg',
    'loco-25': '/images/real_train_wheelset_stock.jpg',
    'loco-26': '/images/prod_brake_head.jpg',
    'loco-27': '/images/real_metal_casting_stock.jpg',
    'loco-28': '/images/prod_overspeed_trip_casting.jpg',
    
    'oem-29': '/images/locomotive_wheelset_stock.jpg',
    'oem-30': '/images/real_metal_casting_stock.jpg',
    'oem-31': '/images/prod_rotavator_gearbox_13x23.jpg',
    'oem-32': '/images/prod_pin_bracket.jpg',
    'oem-33': '/images/prod_sprockets.jpg',
    'oem-34': '/images/istockphoto-1967717882-1024x1024.jpg',
    
    'mining-35': '/images/istockphoto-1030443074-1024x1024.jpg',
    'mining-36': '/images/real_steel_gears_stock.jpg',
    'mining-37': '/images/istockphoto-1030443074-1024x1024.jpg',
    'mining-38': '/images/real_cnc_machining_stock.jpg',
    'mining-39': '/images/real_train_wheelset_stock.jpg',
    'mining-40': '/images/real_steel_gears_stock.jpg',
    'mining-41': '/images/istockphoto-1030443074-1024x1024.jpg',
    
    'other-42': '/images/trackside_turnout_castings.jpg',
    'other-43': '/images/trackside_turnout_castings_2.jpg',
    'other-44': '/images/amsted_track_plate.jpg',
    'other-45': '/images/turnout_frog_manganese_stock.jpg',
    'other-46': '/images/real_metal_casting_stock.jpg',
    'other-47': '/images/real_cnc_machining_stock.jpg',
    'other-48': '/images/gettyimages-169263915-1024x1024.jpg',
    'other-49': '/images/gettyimages-157479520-1024x1024.jpg',
    'other-50': '/images/prod_sprockets.jpg',
    'other-51': '/images/real_metal_casting_stock.jpg',
    'other-52': '/images/real_metal_casting_stock.jpg'
}

# 4. Remove extra properties inside each object block
lines = content.split('\n')
new_lines = []
skip_keys = ('sourceUrl:', 'researchUrl:', 'imageProvider:', 'imageSearchTerms:', 'licenseStatus:', 'stockPageUrl:', 'fallbackImg:')

current_id = None

for line in lines:
    id_match = re.search(r"id:\s*'([^']+)'", line)
    if id_match:
        current_id = id_match.group(1)
        new_lines.append(line)
        continue

    # Check if this line defines img or drawingImg
    if current_id and current_id in LOCAL_MAP:
        local_img = LOCAL_MAP[current_id]
        if line.strip().startswith('img:'):
            indent = line[:line.find('img:')]
            new_lines.append(f"{indent}img: '{local_img}',")
            continue
        if line.strip().startswith('drawingImg:'):
            indent = line[:line.find('drawingImg:')]
            new_lines.append(f"{indent}drawingImg: '{local_img}',")
            continue

    # Strip out the unwanted metadata fields
    if any(line.strip().startswith(k) for k in skip_keys):
        continue

    new_lines.append(line)

cleaned_content = '\n'.join(new_lines)

# 5. Clean up the img tag in JSX (remove the onError fallback using fallbackImg)
old_img_jsx = '''                    <img
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

new_img_jsx = '''                    <img
                      src={product.img}
                      alt={product.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#F8FAFC', opacity: 1, transition: 'transform 0.4s ease' }}
                    />'''

cleaned_content = cleaned_content.replace(old_img_jsx, new_img_jsx)

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(cleaned_content)

print("Successfully cleaned up InteractiveExplorer.tsx and connected local images!")
