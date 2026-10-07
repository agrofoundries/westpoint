import urllib.request
import urllib.parse
import json
import ssl
import sys
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'WestpointRailTransitAuditBot/1.0 (educational/commercial web project; contact@westpoint-group.com)'}

def search_wikimedia(query, limit=5):
    search_url = (
        f"https://commons.wikimedia.org/w/api.php?action=query&list=search"
        f"&srnamespace=6&srsearch={urllib.parse.quote(query)}&srlimit={limit}&format=json"
    )
    req = urllib.request.Request(search_url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx) as response:
        search_data = json.loads(response.read().decode('utf-8'))
        search_items = search_data.get('query', {}).get('search', [])
        
    titles = [item['title'] for item in search_items]
    if not titles:
        return []
        
    info_url = (
        f"https://commons.wikimedia.org/w/api.php?action=query&titles={'|'.join([urllib.parse.quote(t) for t in titles])}"
        f"&prop=imageinfo&iiprop=url|size|extmetadata&format=json"
    )
    req_info = urllib.request.Request(info_url, headers=HEADERS)
    with urllib.request.urlopen(req_info, context=ctx) as response:
        info_data = json.loads(response.read().decode('utf-8'))
        pages = info_data.get('query', {}).get('pages', {})
        
    results = []
    for page_id, page in pages.items():
        title = page.get('title', '')
        info_list = page.get('imageinfo', [])
        if not info_list:
            continue
        info = info_list[0]
        url = info.get('url', '')
        width = info.get('width', 0)
        height = info.get('height', 0)
        meta = info.get('extmetadata', {})
        license_name = meta.get('LicenseShortName', {}).get('value', 'CC BY-SA / Public Domain')
        artist = meta.get('Artist', {}).get('value', 'Wikimedia Contributor')
        description = meta.get('ImageDescription', {}).get('value', '')
        
        # Only clean JPG/PNG image files
        if url.lower().endswith(('.jpg', '.jpeg', '.png')) and width >= 800:
            results.append({
                'title': title,
                'url': url,
                'width': width,
                'height': height,
                'license': license_name,
                'artist': artist,
                'desc': description
            })
    return results

def download_file(url, target_path):
    os.makedirs(os.path.dirname(os.path.abspath(target_path)), exist_ok=True)
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx) as response, open(target_path, 'wb') as f:
        f.write(response.read())
    size = os.path.getsize(target_path)
    print(f"Downloaded {size} bytes -> {target_path}")
    return size

if __name__ == '__main__':
    q = sys.argv[1] if len(sys.argv) > 1 else 'freight railway wheelset'
    print(f"Searching: {q}")
    res = search_wikimedia(q, 6)
    for idx, r in enumerate(res):
        print(f"[{idx+1}] {r['title']} ({r['width']}x{r['height']}) - {r['license']}")
        print(f"    URL: {r['url']}")
