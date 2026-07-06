"""Step 1: Move existing documentation to a legacy folder."""

import shutil
from pathlib import Path

ROOT = Path(__file__).parent.parent

# Define the source and destination directory
src = ROOT / "docs" / "component"
dst = ROOT / "_legacy_component"

# check that the source exists and is a directory
if not src.exists() or not src.is_dir():
    raise FileNotFoundError(f"Source directory '{src}' does not exist or is not a directory.")

# check that the destination does not already exist
if dst.exists():
    print(f"Warning: Destination directory '{dst}' already exists. Please remove it first.")
else:
    # move the files
    shutil.move(str(src), str(dst))
    print(f"Moved '{src}' to '{dst}'")
