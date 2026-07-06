#!/usr/bin/env python3
"""Move inline '# JS expression, needs manual conversion' comments to the preceding line."""

import re
from pathlib import Path

COMMENT = "# JS expression, needs manual conversion"
# Matches a line that has code AND the comment inline (not just the comment alone)
INLINE_PATTERN = re.compile(r"^(\s*)(.+?)\s{1,}(# JS expression, needs manual conversion)\s*$")


def fix_file(path: Path) -> int:
    original = path.read_text(encoding="utf-8")
    lines = original.splitlines(keepends=True)
    new_lines = []
    count = 0

    for line in lines:
        # Strip the trailing newline for analysis
        stripped = line.rstrip("\n")
        m = INLINE_PATTERN.match(stripped)
        if m:
            indent = m.group(1)
            code_part = m.group(2).rstrip()
            # Only act if this line is not ONLY the comment (has actual code before it)
            if code_part.strip() != COMMENT:
                ending = "\n" if line.endswith("\n") else ""
                new_lines.append(f"{indent}{COMMENT}\n")
                new_lines.append(f"{indent}{code_part}{ending}")
                count += 1
                continue
        new_lines.append(line)

    if count:
        path.write_text("".join(new_lines), encoding="utf-8")

    return count


def main():
    root = Path(__file__).parent
    targets = list(root.glob("docs/component/**/*.py"))

    total_files = 0
    total_fixes = 0
    for path in sorted(targets):
        n = fix_file(path)
        if n:
            total_files += 1
            total_fixes += n
            print(f"  {path.relative_to(root)}: {n} fix(es)")

    print(f"\nTotal: {total_fixes} comments moved in {total_files} files.")


if __name__ == "__main__":
    main()
