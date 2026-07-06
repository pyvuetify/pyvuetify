#!/usr/bin/env python3
"""Fix E501 (line too long) errors by splitting long string literals."""

import re
import subprocess
from pathlib import Path

MAX_LEN = 100
EXTRA_INDENT = "    "  # 4 spaces for continuation lines


def get_e501_errors(project_dir: Path) -> dict[str, list[int]]:
    """Get all E501 errors from ruff as {relative_path: [line_numbers]}."""
    result = subprocess.run(
        ["ruff", "check", "--select", "E501", "--output-format=concise", "."],
        capture_output=True,
        text=True,
        cwd=project_dir,
    )
    errors: dict[str, list[int]] = {}
    for line in (result.stdout + result.stderr).splitlines():
        m = re.match(r"^(.+\.py):(\d+):\d+: E501", line)
        if m:
            fpath, lineno = m.group(1), int(m.group(2))
            errors.setdefault(fpath, []).append(lineno)
    return errors


def find_string_literal(content: str) -> tuple[int, int, str, str] | None:
    """
    Find the first non-triple-quoted string literal in content.
    Returns (str_start, str_end, fstr_prefix, quote_char) or None.
    str_start includes the optional 'f' prefix.
    """
    i = 0
    while i < len(content):
        c = content[i]

        # Check for f/F prefix
        fstr = ""
        if c in ("f", "F") and i + 1 < len(content) and content[i + 1] in ('"', "'"):
            fstr = c
            i += 1
            c = content[i]

        if c in ('"', "'"):
            # Skip triple-quoted strings
            if content[i : i + 3] in ('"""', "'''"):
                end = content.find(content[i : i + 3], i + 3)
                if end == -1:
                    return None
                i = end + 3
                fstr = ""
                continue

            # Single/double quoted string — find closing quote
            quote = c
            str_start = i - len(fstr)
            j = i + 1
            while j < len(content):
                if content[j] == "\\":
                    j += 2
                    continue
                if content[j] == quote:
                    str_end = j + 1
                    return str_start, str_end, fstr, quote
                j += 1
            return None  # Unclosed string

        i += 1

    return None


def split_string_content(content: str, avail: int) -> list[str]:
    """
    Split string content at word boundaries so each chunk fits in avail chars.
    Trailing space is added to chunks (except last) to preserve spacing when
    Python implicitly concatenates adjacent string literals.
    """
    if len(content) <= avail:
        return [content]

    words = content.split(" ")
    chunks: list[str] = []
    current = ""

    for word in words:
        if not current:
            current = word
        elif len(current) + 1 + len(word) <= avail:
            current += " " + word
        else:
            chunks.append(current + " ")  # trailing space preserves word boundary
            current = word

    if current:
        chunks.append(current)

    return chunks


def fix_line(line: str, max_len: int = MAX_LEN) -> list[str] | None:
    """
    Try to fix a long line by splitting string literals.
    Returns list of replacement lines (with newlines) or None if unfixable.
    """
    stripped = line.rstrip("\n").rstrip("\r")
    if len(stripped) <= max_len:
        return None  # Nothing to do

    # Get indentation
    indent_len = len(stripped) - len(stripped.lstrip())
    indent_str = stripped[:indent_len]
    content = stripped[indent_len:]

    # Find a string literal in the line
    result = find_string_literal(content)
    if result is None:
        return None

    str_start, str_end, fstr, quote = result

    # Skip f-strings: cannot safely split their content
    if fstr:
        return None

    before = content[:str_start]  # code before the string
    str_content = content[str_start + 1 : str_end - 1]  # content between quotes
    after = content[str_end:]  # code after the string (comma, paren, etc.)

    # Available width for each chunk's text (inside the quotes)
    # Line will be: indent_str + EXTRA_INDENT + quote + chunk + quote
    avail = max_len - len(indent_str) - len(EXTRA_INDENT) - 2  # 2 for quotes
    if avail <= 10:
        return None

    chunks = split_string_content(str_content, avail)
    if len(chunks) <= 1:
        return None  # Cannot split (single word or URL with no spaces)

    # Build replacement lines
    new_lines: list[str] = []
    eol = "\n"

    # Opening line: indent + before + (
    new_lines.append(f"{indent_str}{before}({eol}")
    # One line per chunk
    for chunk in chunks:
        new_lines.append(f"{indent_str}{EXTRA_INDENT}{quote}{chunk}{quote}{eol}")
    # Closing: indent + ) + after
    new_lines.append(f"{indent_str}){after}{eol}")

    # Validate: every new line must be ≤ max_len
    for new_line in new_lines:
        if len(new_line.rstrip()) > max_len:
            return None  # Chunk itself is too long (e.g. URL), give up

    return new_lines


def fix_file(filepath: Path, error_lines: list[int]) -> tuple[int, list[int]]:
    """
    Fix E501 errors in a file.
    Returns (fixes_applied, unfixed_line_numbers).
    """
    text = filepath.read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)

    fixed = 0
    unfixed: list[int] = []

    # Process in reverse order so that inserting new lines doesn't shift indices
    for lineno in sorted(error_lines, reverse=True):
        idx = lineno - 1
        if idx >= len(lines):
            continue

        result = fix_line(lines[idx])
        if result is not None:
            lines[idx : idx + 1] = result
            fixed += 1
        else:
            unfixed.append(lineno)

    if fixed > 0:
        filepath.write_text("".join(lines), encoding="utf-8")

    return fixed, unfixed


def main() -> None:
    project_dir = Path("/home/rambap/github/pyvuetify")

    print("Scanning for E501 errors with ruff...")
    errors = get_e501_errors(project_dir)

    total = sum(len(v) for v in errors.values())
    print(f"Found {total} E501 errors in {len(errors)} files\n")

    total_fixed = 0
    all_unfixed: dict[str, list[int]] = {}

    for relpath, lines in errors.items():
        filepath = project_dir / relpath
        if not filepath.exists():
            print(f"  SKIP (not found): {relpath}")
            continue

        fixed, unfixed = fix_file(filepath, lines)
        total_fixed += fixed
        if unfixed:
            all_unfixed[relpath] = unfixed

        if fixed:
            status = f"fixed {fixed}/{len(lines)}"
        else:
            status = f"no fix possible for {len(lines)} error(s)"
        print(f"  {relpath}: {status}")

    print(f"\n{'=' * 60}")
    print(f"Total fixed: {total_fixed} / {total}")

    if all_unfixed:
        remaining = sum(len(v) for v in all_unfixed.values())
        print(f"Remaining unfixed: {remaining} errors in {len(all_unfixed)} files")
        for f, ls in all_unfixed.items():
            print(f"  {f}: lines {ls}")


if __name__ == "__main__":
    main()
