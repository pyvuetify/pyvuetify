"""Orchestration script: run all documentation refactoring steps in order.

Usage:
    python run_all.py              # Run all steps for all components
    python run_all.py Alert        # Run steps 2-5 for Alert only (skip step 1)
    python run_all.py Alert Btn    # Run steps 2-5 for Alert and Btn only
"""

import argparse
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent
ROOT = HERE.parent


def run_step(script_name: str, description: str) -> bool:
    """Run a step script and return True if successful."""
    script_path = HERE / script_name
    print(f"\n{'=' * 60}")
    print(f"STEP: {description}")
    print(f"Script: {script_name}")
    print(f"{'=' * 60}\n")

    result = subprocess.run(
        [sys.executable, str(script_path)],
        cwd=str(HERE),
    )
    if result.returncode != 0:
        print(f"\n❌ FAILED: {script_name} (exit code {result.returncode})")
        return False
    print(f"\n✅ DONE: {script_name}")
    return True


def run_step2_single(components: list[str]) -> bool:
    """Run step 2 logic for specific components only.

    Instead of scanning all components, just resolve the given ones
    by checking GitHub for their documentation markdown files.
    """
    from importlib.util import module_from_spec, spec_from_file_location

    print(f"\n{'=' * 60}")
    print(f"STEP: Find components (filtered: {', '.join(components)})")
    print(f"{'=' * 60}\n")

    # Load the step 2 module to reuse its helpers
    spec = spec_from_file_location("step2", HERE / "2_find_components_to_document.py")
    step2 = module_from_spec(spec)
    spec.loader.exec_module(step2)

    # For each requested component, find its doc slug on GitHub
    output_lines = []
    for comp_name in components:
        v_name = f"V{comp_name}"
        kebab = step2.camel_to_kebab(v_name)
        kebab_without_v = kebab.removeprefix("v-")

        print(f"  Looking up {comp_name} ({kebab})...", end=" ", flush=True)

        slug = step2.find_doc_slug(kebab_without_v)
        if slug is None:
            print("no doc page found")
            continue

        doc_url = f"{step2.COMPONENTS_BASE}{slug}/"
        output_lines.append(f"{kebab} {doc_url}")
        print(f"-> {slug}")

    if not output_lines:
        print("ERROR: No valid components found")
        return False

    step2.OUTPUT.write_text("\n".join(output_lines) + "\n", encoding="utf-8")
    print(f"\nWritten {len(output_lines)} components to {step2.OUTPUT}")
    return True


def run_step3_single() -> bool:
    """Run step 3 (scrape + generate RST). Already filters based on components_list.txt."""
    return run_step("3_scrape_vuetify_docs.py", "Scrape Vuetify docs + generate RST")


def run_step4_single(components: list[str]) -> bool:
    """Run step 4 (vue to python) for specific components only."""
    from importlib.util import module_from_spec, spec_from_file_location

    print(f"\n{'=' * 60}")
    print(f"STEP: Convert .vue to .py (filtered: {', '.join(components)})")
    print(f"{'=' * 60}\n")

    spec = spec_from_file_location("step4", HERE / "4_vue_to_python.py")
    step4 = module_from_spec(spec)
    spec4_loader = spec.loader
    # Don't exec the module (it would run main), just load the functions
    step4.__dict__["__name__"] = "step4"
    spec4_loader.exec_module(step4)

    docs_dir = ROOT / "docs" / "component"
    success = 0
    errors = 0

    for comp_name in components:
        comp_dir = docs_dir / comp_name
        if not comp_dir.exists():
            print(f"  {comp_name}/ not found, skipping")
            continue

        vue_files = sorted(comp_dir.glob("*.vue"))
        for vue_path in vue_files:
            rel = vue_path.relative_to(docs_dir)
            print(f"  {rel}", end=" ")
            ok = step4.process_file(vue_path)
            if ok:
                print("✓")
                success += 1
            else:
                print("⚠")
                errors += 1

    print(f"\nConverted: {success}, Errors: {errors}")
    return True


def run_step5_single() -> bool:
    """Run step 5 (generate index). Works on whatever RST files exist."""
    return run_step("5_generate_index.py", "Regenerate index.rst")


def main():
    parser = argparse.ArgumentParser(
        description="Run documentation refactoring pipeline.",
        epilog="Without arguments, runs all steps for all components.\n"
        "With component names, skips step 1 and processes only those components.",
    )
    parser.add_argument(
        "components",
        nargs="*",
        help="Optional: component names to process (e.g. Alert Btn Card). Skips step 1 (move legacy) when set.",
    )
    parser.add_argument(
        "--from-step",
        type=int,
        default=1,
        choices=[1, 2, 3, 4, 5],
        help="Start from this step number (default: 1).",
    )

    args = parser.parse_args()
    components = args.components
    start = args.from_step

    if components:
        # Single-component mode: skip step 1, filter all others
        print(f"Running pipeline for: {', '.join(components)}")
        print("(Step 1 skipped — legacy move not needed for single-component testing)")

        if start <= 2:
            if not run_step2_single(components):
                sys.exit(1)

        if start <= 3:
            if not run_step3_single():
                sys.exit(1)

        if start <= 4:
            if not run_step4_single(components):
                sys.exit(1)

        if start <= 5:
            if not run_step5_single():
                sys.exit(1)

    else:
        # Full mode: run all steps
        if start <= 1:
            if not run_step("1_move_existing_files.py", "Move existing docs to legacy"):
                sys.exit(1)

        if start <= 2:
            if not run_step("2_find_components_to_document.py", "Find components to document"):
                sys.exit(1)

        if start <= 3:
            if not run_step("3_scrape_vuetify_docs.py", "Scrape Vuetify docs + generate RST"):
                sys.exit(1)

        if start <= 4:
            if not run_step("4_vue_to_python.py", "Convert .vue to .py"):
                sys.exit(1)

        if start <= 5:
            if not run_step("5_generate_index.py", "Regenerate index.rst"):
                sys.exit(1)

    print(f"\n{'=' * 60}")
    print("🎉 Pipeline complete!")
    print(f"{'=' * 60}")


if __name__ == "__main__":
    main()
