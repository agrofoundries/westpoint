import os
import re

typos_to_check = [
    ('ndustries', 'industries'),
    ('FORGINOS', 'FORGINGS'),
    ('wateworks', 'waterworks'),
    ('greadient', 'gradient'),
    ('effact', 'effect'),
    ('metal', 'Metal'), # check context
    ('Metal', 'Metal'),
    ('Westpoint Group Companies', 'Westpoint Group Companies')
]

scan_files = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.css', '.html', '.json')):
            scan_files.append(os.path.join(root, f))
scan_files.append('index.html')

print("=== SPELLING & TEXT AUDIT ===")
for path in scan_files:
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        lines = content.split('\n')
        for i, line in enumerate(lines, 1):
            if 'westpointndustries' in line:
                print(f"TYPO found in {path}:{i} -> 'westpointndustries'")
            if 'FORGINOS' in line:
                print(f"TYPO found in {path}:{i} -> 'FORGINOS'")
            if 'wateworks' in line:
                print(f"TYPO found in {path}:{i} -> 'wateworks'")
            # check for weird casing like 'metal' in titles
            if re.search(r'\b(rail metal|Heavy rail & metal|metal Forgings)\b', line, re.IGNORECASE):
                print(f"TEXT ISSUE in {path}:{i} -> {line.strip()}")
