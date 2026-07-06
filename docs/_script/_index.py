"""Generate and manage docs/component/index.rst from available RST files."""

from pathlib import Path

ROOT = Path(__file__).parent.parent.parent
DOCS_COMPONENT_DIR = ROOT / "docs" / "component"
INDEX_PATH = DOCS_COMPONENT_DIR / "index.rst"

# --- Component categories (ordered) ---

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
    ("Layout", ["Grid", "Flex"]),
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
    ("Images & Icons", ["Avatar", "Icon", "Img", "Parallax"]),
    ("Pickers", ["ColorPicker", "DatePicker", "TimePicker"]),
    ("Other", ["Lazy"]),
]


# --- Public API ---


def get_available_components() -> set[str]:
    return {f.stem for f in DOCS_COMPONENT_DIR.glob("*.rst") if f.name != "index.rst"}


def generate_index(available: set[str]) -> str:
    """Generate index.rst content with categorized toctrees."""
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

    categorized: set[str] = set()

    for category_name, members in CATEGORIES:
        present = [m for m in members if m in available]
        if not present:
            continue
        categorized.update(present)

        lines.extend(
            [
                category_name,
                "-" * len(category_name),
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

    # Uncategorized components go to "Other"
    uncategorized = sorted(available - categorized)
    if uncategorized:
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
        for comp in uncategorized:
            lines.append(f"    {comp}")
        lines.append("")

    return "\n".join(lines) + "\n"


def write_index() -> None:
    available = get_available_components()
    content = generate_index(available)
    INDEX_PATH.write_text(content, encoding="utf-8")
    print(f"index.rst: {len(available)} components")
