"""Create a lighter 640px-wide copy (name-640.webp) of every large WebP image in
public/images, so phones download less. The website picks these up
automatically (see src/lib/images.js). Run after adding new photos:

    python3 tools/make-image-sizes.py
"""
import pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent / "public" / "images"
SMALL = 640
for path in sorted(ROOT.rglob("*.webp")):
    if path.stem.endswith(f"-{SMALL}") or path.stem.startswith("logo"):
        continue
    im = Image.open(path)
    if im.width <= SMALL + 80:
        continue
    out = path.with_name(f"{path.stem}-{SMALL}.webp")
    small = im.resize((SMALL, round(im.height * SMALL / im.width)), Image.LANCZOS)
    small.save(out, quality=78, method=6)
    print(f"{out.relative_to(ROOT.parent)}  {out.stat().st_size // 1024} KB (was {path.stat().st_size // 1024} KB)")
