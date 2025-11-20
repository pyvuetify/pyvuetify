#!/usr/bin/env python3
"""
Script to add documentation from Vuetify GitHub to vuetify_api.json
"""
import json
from typing import Any, Dict

import requests


def fetch_github_docs(component_name: str) -> Dict[str, Any]:
    """Fetch documentation from GitHub for a component."""
    url = f"https://raw.githubusercontent.com/vuetifyjs/vuetify/v2.7.2/packages/api-generator/src/locale/en/{component_name}.json"
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"  ⚠ No GitHub docs found for {component_name} (status {response.status_code})")
            return {}
    except Exception as e:
        print(f"  ✗ Error fetching {component_name}: {e}")
        return {}


def add_docs_to_component(
    component_data: Dict[str, Any], github_docs: Dict[str, Any]
) -> tuple[int, int]:
    """Add documentation to component props and slots. Returns (props_updated, slots_updated)."""
    props_updated = 0
    slots_updated = 0

    # Add documentation to props
    if "props" in component_data and "props" in github_docs:
        for prop in component_data["props"]:
            prop_name = prop.get("name")
            if prop_name in github_docs["props"]:
                if "doc" not in prop:  # Only add if not already present
                    prop["doc"] = github_docs["props"][prop_name]
                    props_updated += 1

    # Add documentation to slots
    if "slots" in component_data and "slots" in github_docs:
        for slot in component_data["slots"]:
            slot_name = slot.get("name")
            if slot_name in github_docs["slots"]:
                if "doc" not in slot:  # Only add if not already present
                    slot["doc"] = github_docs["slots"][slot_name]
                    slots_updated += 1

    return props_updated, slots_updated


def main():
    # Load vuetify_api.json
    api_file = "/home/rambap/github/ipyvuetify/generate_source/vuetify_api.json"
    print(f"Loading {api_file}...")

    with open(api_file, "r") as f:
        api_data = json.load(f)

    total_components = len(api_data)
    processed = 0
    skipped = 0
    total_props = 0
    total_slots = 0

    print(f"Found {total_components} components\n")

    # Process each component
    for component_name, component_data in api_data.items():
        processed += 1
        print(f"[{processed}/{total_components}] Processing {component_name}...")

        # Fetch GitHub documentation
        github_docs = fetch_github_docs(component_name)

        if not github_docs:
            skipped += 1
            continue

        # Add documentation
        props_updated, slots_updated = add_docs_to_component(component_data, github_docs)
        total_props += props_updated
        total_slots += slots_updated

        if props_updated > 0 or slots_updated > 0:
            print(f"  ✓ Updated {props_updated} props, {slots_updated} slots")
        else:
            print("  - No new docs to add")

    # Save updated data
    print("\nSaving updated data...")
    with open(api_file, "w") as f:
        json.dump(api_data, f, indent=2)

    print(f"\n{'='*60}")
    print("Summary:")
    print(f"  Total components: {total_components}")
    print(f"  Processed: {processed}")
    print(f"  Skipped (no GitHub docs): {skipped}")
    print(f"  Props documented: {total_props}")
    print(f"  Slots documented: {total_slots}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
