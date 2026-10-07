import urllib.request
import urllib.parse
import json
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'WestpointRailTransitAuditBot/1.0 (contact@westpoint-group.com)'}

# Target Image Requirements
TARGETS = [
    {
        'query': 'Wheelsets of rail vehicles with fitted journals',
        'fallback_query': 'freight train wheelset',
        'target_file': 'public/images/railway-wheelset-freight.jpg',
        'component': 'HeroSection.tsx (Slide 1: Rolling Stock)',
        'desc': 'Heavy Freight Train Wheelsets & Axles on Rail Track',
        'alt': 'Heavy freight train wheelsets and forged steel axles on railway track'
    },
    {
        'query': 'steel foundry induction furnace molten metal',
        'fallback_query': 'foundry molten metal pouring',
        'target_file': 'public/images/heavy-industrial-foundry-plant.jpg',
        'component': 'FactoryOverview.tsx (Manufacturing Complex)',
        'desc': 'Large-Scale Steel Foundry Melting & Pouring Facility',
        'alt': 'Industrial electric induction steel foundry furnace pouring molten metal'
    },
    {
        'query': 'forging hammer industrial drop press',
        'fallback_query': 'forging press steel',
        'target_file': 'public/images/drop-forge-industrial-press.jpg',
        'component': 'ManufacturingCapabilities.tsx (Forging)',
        'desc': 'Heavy Industrial Drop Forging Press Operation',
        'alt': 'Heavy industrial hydraulic drop forging press shaping red-hot railway steel'
    },
    {
        'query': 'ultrasonic testing non-destructive testing',
        'fallback_query': 'non destructive testing weld inspection',
        'target_file': 'public/images/ultrasonic-ndt-testing-lab.jpg',
        'component': 'ManufacturingCapabilities.tsx (Testing)',
        'desc': 'Non-Destructive Ultrasonic Quality Testing Laboratory',
        'alt': 'Technician conducting ultrasonic non-destructive testing on steel components'
    },
    {
        'query': 'subway train passenger metro station',
        'fallback_query': 'metro transit train',
        'target_file': 'public/images/urban-transit-metro-subway.jpg',
        'component': 'IndustriesWeServe.tsx (Urban Transit & Metro)',
        'desc': 'Modern Urban Passenger Transit Metro Subway Train',
        'alt': 'Modern urban transit metro passenger train on elevated rail line'
    },
    {
        'query': 'iron ore train heavy haul mining',
        'fallback_query': 'freight train coal mining',
        'target_file': 'public/images/mining-rail-heavy-haul.jpg',
        'component': 'IndustriesWeServe.tsx (Heavy Haul Mining Rail)',
        'desc': 'Heavy Haul Mining Freight Train with Heavy Axle Load',
        'alt': 'Heavy-haul mining freight train transporting raw minerals on heavy axle track'
    },
    {
        'query': 'railroad switch frog railway turnout track',
        'fallback_query': 'railway turnout frog',
        'target_file': 'public/images/rail-turnout-track-switch.jpg',
        'component': 'IndustriesWeServe.tsx (Railway Switch & Turnouts)',
        'desc': 'Manganese Steel Railway Turnout Frog and Switch Trackwork',
        'alt': 'Cast manganese steel turnout frog at a railway track crossover switch'
    },
    {
        'query': 'locomotive bogie truck frame',
        'fallback_query': 'railway bogie locomotive',
        'target_file': 'public/images/locomotive-bogie-assembly.jpg',
        'component': 'IndustriesWeServe.tsx (Locomotive Bogies & Axles)',
        'desc': 'Heavy-Duty Locomotive Bogie Undercarriage Assembly',
        'alt': 'Heavy locomotive bogie undercarriage frame with suspension and brake rigging'
    },
    {
        'query': 'intermodal freight train container corridor',
        'fallback_query': 'class 1 freight train',
        'target_file': 'public/images/heavy-freight-corridor-train.jpg',
        'component': 'IndustriesWeServe.tsx (Heavy Freight Corridors)',
        'desc': 'Class I Double-Stack Intermodal Freight Train in Rail Corridor',
        'alt': 'Long Class I intermodal container freight train traveling through a rail corridor'
    },
    {
        'query': 'cast iron brake drum heavy vehicle',
        'fallback_query': 'brake drum automotive casting',
        'target_file': 'public/images/cast-iron-brake-drum.jpg',
        'component': 'FeaturedComponents.tsx (Brake Drums)',
        'desc': 'Ductile Cast Iron Heavy Vehicle Brake Drum',
        'alt': 'Heavy-duty ductile iron brake drum casting for industrial machinery'
    },
    {
        'query': 'engine flywheel cast iron machined',
        'fallback_query': 'flywheel machinery casting',
        'target_file': 'public/images/industrial-heavy-flywheel.jpg',
        'component': 'FeaturedComponents.tsx (Flywheels)',
        'desc': 'Precision Balanced Heavy Industrial Flywheel Casting',
        'alt': 'Precision balanced cast iron flywheel for heavy-duty industrial machinery'
    },
    {
        'query': 'forged steel shaft axle machinery',
        'fallback_query': 'forged axle steel shaft',
        'target_file': 'public/images/forged-stub-axle-shaft.jpg',
        'component': 'FeaturedComponents.tsx (10 Ton Stub Axle)',
        'desc': 'High-Strength Forged Alloy Steel Stub Axle Shaft',
        'alt': 'Heavy-duty forged alloy steel 10-ton stub axle for industrial equipment'
    },
    {
        'query': 'heavy equipment crawler sprocket undercarriage',
        'fallback_query': 'drive sprocket gear machinery',
        'target_file': 'public/images/undercarriage-drive-sprocket.jpg',
        'component': 'FeaturedComponents.tsx (Sprockets for Undercarriage)',
        'desc': 'Heavy Cast Steel Track Drive Sprocket for Undercarriage Systems',
        'alt': 'Wear-resistant cast steel drive sprocket for heavy tracked undercarriage equipment'
    },
    {
        'query': 'machined industrial gears spur bevel gearbox',
        'fallback_query': 'steel gears transmission',
        'target_file': 'public/images/precision-industrial-gears.jpg',
        'component': 'StandardsGrid.tsx (Precision Gearing Divisions)',
        'desc': 'Precision Machined Industrial Gearbox & Transmission Assembly',
        'alt': 'Precision heat-treated steel gears and reduction gearbox assembly'
    }
]

def search_and_download(item):
    queries = [item['query'], item.get('fallback_query', '')]
    for q in queries:
        if not q:
            continue
        search_url = (
            f"https://commons.wikimedia.org/w/api.php?action=query&list=search"
            f"&srnamespace=6&srsearch={urllib.parse.quote(q)}&srlimit=5&format=json"
        )
        try:
            req = urllib.request.Request(search_url, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx) as resp:
                res = json.loads(resp.read().decode('utf-8'))
                search_res = res.get('query', {}).get('search', [])
                titles = [x['title'] for x in search_res if any(x['title'].lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png'])]
                if not titles:
                    continue
                
                info_url = (
                    f"https://commons.wikimedia.org/w/api.php?action=query&titles={'|'.join([urllib.parse.quote(t) for t in titles[:3]])}"
                    f"&prop=imageinfo&iiprop=url|size|extmetadata&format=json"
                )
                req_info = urllib.request.Request(info_url, headers=HEADERS)
                with urllib.request.urlopen(req_info, context=ctx) as info_resp:
                    info_data = json.loads(info_resp.read().decode('utf-8'))
                    pages = info_data.get('query', {}).get('pages', {})
                    for pid, p in pages.items():
                        imageinfo = p.get('imageinfo', [])
                        if not imageinfo:
                            continue
                        info = imageinfo[0]
                        img_url = info.get('url', '')
                        width = info.get('width', 0)
                        if width >= 600 and img_url.lower().endswith(('.jpg', '.jpeg', '.png')):
                            target_file = item['target_file']
                            os.makedirs(os.path.dirname(target_file), exist_ok=True)
                            dl_req = urllib.request.Request(img_url, headers=HEADERS)
                            with urllib.request.urlopen(dl_req, context=ctx) as dl_resp, open(target_file, 'wb') as out_f:
                                out_f.write(dl_resp.read())
                            size = os.path.getsize(target_file)
                            meta = info.get('extmetadata', {})
                            license_str = meta.get('LicenseShortName', {}).get('value', 'CC BY-SA / Public Domain')
                            author = meta.get('Artist', {}).get('value', 'Wikimedia Commons Contributor')
                            print(f"[SUCCESS] Downloaded {item['target_file']} ({size} bytes) from {img_url} [License: {license_str}]")
                            return {
                                'file': os.path.basename(target_file),
                                'target': target_file,
                                'url': img_url,
                                'license': license_str,
                                'author': author,
                                'component': item['component'],
                                'alt': item['alt']
                            }
        except Exception as e:
            print(f"Error searching '{q}': {e}")
            continue
    print(f"[FAILED] Could not download image for: {item['target_file']}")
    return None

if __name__ == '__main__':
    downloaded = []
    for item in TARGETS:
        res = search_and_download(item)
        if res:
            downloaded.append(res)
    print(f"\nCompleted: {len(downloaded)}/{len(TARGETS)} images downloaded successfully.")
