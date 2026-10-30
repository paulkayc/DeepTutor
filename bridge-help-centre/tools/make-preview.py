"""Turn the built site (dist/) into a flat, self-contained preview for a claude.ai artifact.

Usage:  npm run build && python3 tools/make-preview.py dist <output-folder>
Pages become about.html, programmes.html… with relative links; the page script is inlined;
fonts are copied to fonts/ (artifact paths may not start with "_").
"""
import os, re, shutil, sys
dist, out = sys.argv[1], sys.argv[2]
shutil.rmtree(out, ignore_errors=True); os.makedirs(out)
pages = {}  # route -> flat file name
for root, _, files in os.walk(dist):
    for f in files:
        if f != 'index.html': continue
        rel = os.path.relpath(root, dist).replace(os.sep, '/')
        route = '/' if rel == '.' else '/' + rel
        name = 'index.html' if route == '/' else ('article-' + rel.split('/')[-1] if rel.startswith('resources/articles/') else rel) + ('' if route == '/' else '.html')
        pages[route] = (os.path.join(root, f), name)
js_file = [f for f in os.listdir(os.path.join(dist, '_astro')) if f.endswith('.js')][0]
js = open(os.path.join(dist, '_astro', js_file)).read()
assets = set()
def fix_url(m):
    attr, url = m.group(1), m.group(2)
    path, _, frag = url.partition('#')
    path = path.rstrip('/') or '/'
    if path in pages: return f'{attr}="{pages[path][1]}' + (f'#{frag}' if frag else '') + '"'
    if path == '/privacy': return m.group(0)
    p2 = path.lstrip('/').replace('_astro/', 'fonts/'); assets.add(path.lstrip('/')); return f'{attr}="{p2}' + (f'#{frag}' if frag else '') + '"'
for route, (src, name) in pages.items():
    h = open(src).read()
    h = re.sub(r'<script type="module" src="[^"]+"></script>', lambda _: '<script type="module">' + js + '</script>', h)
    h = re.sub(r'<link rel="sitemap"[^>]*>', '', h)
    h = re.sub(r'\b(href|src)="(/(?!/)[^"]*)"', fix_url, h)
    h = re.sub(r'url\(/(_astro/[^)]+)\)', lambda m: (assets.add(m.group(1)), "url(" + m.group(1).replace("_astro/", "fonts/") + ")")[1], h)
    open(os.path.join(out, name), 'w').write(h)
for a in assets:
    s = os.path.join(dist, a)
    if os.path.isfile(s):
        d = os.path.join(out, a.replace('_astro/', 'fonts/')); os.makedirs(os.path.dirname(d), exist_ok=True); shutil.copy(s, d)
    else: print('missing asset', a)
print('pages', sorted(n for _, n in pages.values())); print('assets', sorted(assets))
