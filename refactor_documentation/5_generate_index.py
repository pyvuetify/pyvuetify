"""Step 5: Regenerate docs/component/index.rst from the available RST files.

Scans docs/component/ for .rst files (excluding index.rst itself), then
generates a categorized toctree matching the existing category structure.

Components not found in any category are placed under "Other".
"""

from pathlib import Path

ROOT = Path(__file__).parent.parent
DOCS_COMPONENT_DIR = ROOT / "docs" / "component"
INDEX_PATH = DOCS_COMPONENT_DIR / "index.rst"

# Category definitions: ordered list of (category_name, [component_names])
# Based on the existing index.rst structure
CATEGORIES = [
    (
        "Containment",
        [
            "App",
            "BottomSheet",
            "Btn",
            "Card",
            "Chip",
            "Dialog",
            "Divider",
            "ExpansionPanels",
            "List",
            "ListItemGroup",
            "Menu",
            "Overlay",
            "Sheet",
            "Toolbar",
            "Tooltip",
            "OverflowBtn",
            "Subheader",
        ],
    ),
    (
        "Navigation",
        [
            "AppBar",
            "BottomNavigation",
            "Breadcrumbs",
            "Footer",
            "NavigationDrawer",
            "Pagination",
            "SpeedDial",
            "SystemBar",
            "Tabs",
        ],
    ),
    (
        "Form Inputs & Controls",
        [
            "Autocomplete",
            "Checkbox",
            "Combobox",
            "FileInput",
            "Form",
            "Radio",
            "RangeSlider",
            "Select",
            "Slider",
            "Switch",
            "TextField",
            "Textarea",
            "Input",
        ],
    ),
    (
        "Data Display",
        [
            "Calendar",
            "DataTable",
            "Sparkline",
            "SimpleTable",
            "Treeview",
        ],
    ),
    (
        "Layout",
        [
            "Grid",
            "Flex",
        ],
    ),
    (
        "Selection",
        [
            "BtnToggle",
            "Carousel",
            "ChipGroup",
            "ItemGroup",
            "SlideGroup",
            "Stepper",
            "Window",
        ],
    ),
    (
        "Feedback",
        [
            "Alert",
            "Badge",
            "Banner",
            "Hover",
            "ProgressCircular",
            "ProgressLinear",
            "Rating",
            "SkeletonLoader",
            "Snackbar",
            "Timeline",
        ],
    ),
    (
        "Images & Icons",
        [
            "Avatar",
            "Icon",
            "Img",
            "Parallax",
        ],
    ),
    (
        "Pickers",
        [
            "ColorPicker",
            "DatePicker",
            "TimePicker",
        ],
    ),
    (
        "Other",
        [
            "Lazy",
        ],
    ),
]


def get_available_components() -> set[str]:
    """Find all .rst files in docs/component/ (excluding index.rst)."""
    rst_files = DOCS_COMPONENT_DIR.glob("*.rst")
    return {f.stem for f in rst_files if f.name != "index.rst"}


def generate_index(available: set[str]) -> str:
    """Generate the index.rst content."""
    lines = [
        "Component",
        "=========",
        "",
        "About Vuetify Components",
        "-------------------------",
        "",
        (
            "`Vuetify <https://vuetifyjs.com/>`__ is a comprehensive Material Design component "
            "framework for Vue.js applications."
        ),
        ("The pyvuetify library provides Python wrappers for all Vuetify components, allowing you to build rich,"),
        "interactive user interfaces directly in Jupyter notebooks and other IPython environments.",
        "",
        "Component Categories",
        "--------------------",
        "",
        "The components are organized into the following categories for easy navigation:",
        "",
    ]

    categorized = set()

    for category_name, members in CATEGORIES:
        # Only include members that have an RST file
        present = [m for m in members if m in available]
        if not present:
            continue

        categorized.update(present)

        # Section heading
        underline = "-" * len(category_name)
        lines.extend(
            [
                category_name,
                underline,
                "",
                ".. toctree::",
                f"    :caption: {category_name}",
                "    :maxdepth: 1",
                "",
            ]
        )
        for comp in present:
            lines.append(f"    {comp}")
        lines.append("")

    # Add uncategorized components to "Other"
    uncategorized = sorted(available - categorized)
    if uncategorized:
        # Check if Other section was already added
        other_present = [m for m in CATEGORIES[-1][1] if m in available]
        if not other_present:
            # Need to create the Other section
            lines.extend(
                [
                    "Other",
                    "-----",
                    "",
                    ".. toctree::",
                    "    :caption: Other",
                    "    :maxdepth: 1",
                    "",
                ]
            )
        # Append uncategorized to the end (before the trailing newline)
        for comp in uncategorized:
            lines.append(f"    {comp}")
        lines.append("")

    return "\n".join(lines) + "\n"


def main():
    if not DOCS_COMPONENT_DIR.exists():
        raise FileNotFoundError(f"Component docs directory not found at {DOCS_COMPONENT_DIR}. Run step 3 first.")

    available = get_available_components()
    print(f"Found {len(available)} component RST files")

    if not available:
        print("No component RST files found. Run step 3 first.")
        return

    # Generate and write index
    content = generate_index(available)
    INDEX_PATH.write_text(content, encoding="utf-8")
    print(f"Written {INDEX_PATH}")

    # Report categorization
    all_categorized = set()
    for _, members in CATEGORIES:
        all_categorized.update(members)

    uncategorized = sorted(available - all_categorized)
    if uncategorized:
        print("\nUncategorized components (added to Other):")
        for comp in uncategorized:
            print(f"  {comp}")


if __name__ == "__main__":
    main()
