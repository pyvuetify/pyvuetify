#!/usr/bin/env python3
"""
Script to add component-level documentation to vuetify_api.json
"""
import json

COMPONENT_DOCS = {
    "v-app": "The v-app component is REQUIRED for all Vuetify applications. This is the mount point for many of Vuetify's components and functionality and ensures proper cross-browser support for custom properties.",
    "v-app-bar": "The v-app-bar component is a top navigation component that provides a flexible toolbar for app layouts. It is typically used to provide navigation controls and page title information.",
    "v-app-bar-nav-icon": "A stylized icon button component used in app-bars to toggle navigation drawers. It displays the standard hamburger menu icon.",
    "v-alert": "The v-alert component is used to convey important information to the user through contextual types, icons, and colors. These alerts are positioned to draw user attention.",
    "v-autocomplete": "The v-autocomplete component offers simple and flexible type-ahead functionality with filtering of available options. This is useful when you have a ton of data that requires filtering.",
    "v-avatar": "The v-avatar component is used to display circular user profile pictures. When used with the v-list component, avatars minimum width will be respected even if they contain smaller images.",
    "v-badge": "The v-badge component is a small status descriptor for UI elements. It provides a visual indicator of notifications, counts, or other status information.",
    "v-banner": "The v-banner component is used to display important information to the user in a prominent way. They are typically placed at the top of screens below the app bar.",
    "v-bottom-navigation": "The v-bottom-navigation component is a bottom navigation bar used for mobile applications. It displays 3-5 destinations at the bottom of a screen.",
    "v-bottom-sheet": "The v-bottom-sheet component is used to display supplemental content anchored to the bottom of the screen. It's a variation of the v-dialog component.",
    "v-breadcrumbs": "The v-breadcrumbs component is a navigational helper for pages that shows hierarchical navigation structure. It allows users to understand their location within a site.",
    "v-breadcrumbs-item": "A single item in the breadcrumbs navigation trail. Typically used within v-breadcrumbs component.",
    "v-breadcrumbs-divider": "A divider element between breadcrumb items, typically showing '/' or '>' character.",
    "v-btn": "The v-btn component replaces the standard html button with a material design theme and multiple options. Buttons communicate actions that users can take.",
    "v-btn-toggle": "The v-btn-toggle component is a group of buttons that act as a toggle or radio selection. It's useful for creating grouped action buttons.",
    "v-calendar": "The v-calendar component is used to display information in a calendar format. It supports month, week, and day views.",
    "v-calendar-daily": "A calendar component that displays events in a daily view with time slots.",
    "v-calendar-weekly": "A calendar component that displays events in a weekly view.",
    "v-calendar-monthly": "A calendar component that displays events in a monthly view.",
    "v-card": "The v-card component is a versatile content container with multiple variants and options. Cards are used to display related information in an organized manner.",
    "v-card-actions": "The v-card-actions component is used to contain action buttons within a v-card. It's typically placed at the bottom of the card.",
    "v-card-subtitle": "A subtitle element within a v-card, typically displayed below the card title.",
    "v-card-text": "The main content area of a v-card component.",
    "v-card-title": "The title element of a v-card component, typically displayed at the top.",
    "v-carousel": "The v-carousel component is used to display large numbers of visual content on a rotating timer or with manual navigation.",
    "v-carousel-item": "A single item/slide within a v-carousel component.",
    "v-checkbox": "The v-checkbox component provides users the ability to choose between two distinct values. These are often used in forms and filters.",
    "v-simple-checkbox": "A simplified version of v-checkbox with minimal styling, often used in data tables.",
    "v-chip": "The v-chip component is used to convey small pieces of information. It can be interactive and used in various contexts like tags or selections.",
    "v-chip-group": "The v-chip-group component is used to group and manage multiple v-chip components with selection capabilities.",
    "v-color-picker": "The v-color-picker component allows users to select colors using various input methods including swatches, sliders, and text input.",
    "v-color-picker-swatches": "A component displaying color swatches for quick color selection within a color picker.",
    "v-color-picker-canvas": "The canvas area of a color picker for detailed color selection.",
    "v-content": "A deprecated component that was used as the main content wrapper. Use v-main instead.",
    "v-combobox": "The v-combobox component is a combination of v-autocomplete and v-select that allows users to select from a list or create new entries.",
    "v-counter": "A counter component typically used with text inputs to show character count.",
    "v-data": "A base component for data display functionality.",
    "v-data-iterator": "The v-data-iterator component is used for displaying data with sorting, filtering, and pagination without the table markup.",
    "v-data-footer": "The footer component for data tables, typically containing pagination controls.",
    "v-data-table": "The v-data-table component is used for displaying tabular data with sorting, searching, pagination, and selection capabilities.",
    "v-edit-dialog": "A dialog component specifically designed for inline editing within data tables.",
    "v-table-overflow": "A component that handles overflow behavior in tables.",
    "v-data-table-header": "The header component for data tables containing column headers.",
    "v-simple-table": "A simplified table component with basic styling without advanced features like sorting or pagination.",
    "v-virtual-table": "A table component that uses virtual scrolling for performance with large datasets.",
    "v-date-picker": "The v-date-picker component is a fully featured date selection component that allows users to select dates from a calendar interface.",
    "v-date-picker-title": "The title/display area of the date picker showing the selected date.",
    "v-date-picker-header": "The header of the date picker containing month/year navigation.",
    "v-date-picker-date-table": "The calendar grid displaying days of the month in the date picker.",
    "v-date-picker-month-table": "The grid displaying months for month selection in the date picker.",
    "v-date-picker-years": "The list of years for year selection in the date picker.",
    "v-dialog": "The v-dialog component informs users about a task and can contain critical information, require decisions, or involve multiple tasks.",
    "v-divider": "The v-divider component is used to separate sections of lists or layouts with a thin line.",
    "v-expansion-panels": "The v-expansion-panels component contains v-expansion-panel components and provides an accordion-style interface.",
    "v-expansion-panel": "A single expandable panel within v-expansion-panels that can show or hide content.",
    "v-expansion-panel-header": "The clickable header of an expansion panel that triggers expansion/collapse.",
    "v-expansion-panel-content": "The content area of an expansion panel that is shown when expanded.",
    "v-file-input": "The v-file-input component is a specialized input for selecting files from the user's device.",
    "v-footer": "The v-footer component is used for displaying general information that a user might want to access from any page.",
    "v-form": "The v-form component is used to wrap input components and provide validation capabilities for the entire form.",
    "v-container": "The v-container component is the base grid container, typically used with v-row and v-col for responsive layouts.",
    "v-col": "A column component used within v-row for creating responsive grid layouts based on a 12-point system.",
    "v-row": "A row component that contains v-col components for creating responsive grid layouts.",
    "v-spacer": "A flex spacer component that fills available space between other elements.",
    "v-layout": "A deprecated layout component from Vuetify 1.x. Use v-row instead.",
    "v-flex": "A deprecated flex component from Vuetify 1.x. Use v-col instead.",
    "v-hover": "The v-hover component provides a wrapper that detects when a user hovers over an element and provides scoped slot properties.",
    "v-icon": "The v-icon component provides a large set of icons to use in your application. It supports Material Design Icons, Font Awesome, and other icon libraries.",
    "v-img": "The v-img component is a responsive image component with lazy-loading, placeholders, and aspect ratio capabilities.",
    "v-input": "The v-input component is the base for all input components, providing common functionality like labels, hints, and validation.",
    "v-item": "A component used within v-item-group for creating selectable items in a group.",
    "v-item-group": "The v-item-group component provides an interface for groups of selectable items with v-model support.",
    "v-label": "A label component typically used internally by form inputs.",
    "v-lazy": "The v-lazy component is used to dynamically load components based on visibility. It's useful for performance optimization.",
    "v-list-item-action-text": "Text content for list item actions.",
    "v-list-item-content": "The main content area of a list item.",
    "v-list-item-title": "The title element within a list item.",
    "v-list-item-subtitle": "The subtitle element within a list item.",
    "v-list": "The v-list component is used to display information in a organized way. It can contain avatars, content, actions, and more.",
    "v-list-group": "A list component that can be expanded to show nested list items.",
    "v-list-item": "A single item within a v-list component.",
    "v-list-item-action": "The action area of a list item, typically containing buttons or checkboxes.",
    "v-list-item-avatar": "An avatar element within a list item.",
    "v-list-item-icon": "An icon element within a list item.",
    "v-list-item-group": "A group of selectable list items with v-model support.",
    "v-menu": "The v-menu component displays a menu at the position of the element used to activate it. Menus can be activated with hover, click, or focus.",
    "v-messages": "A component for displaying multiple messages, typically used for validation feedback.",
    "v-navigation-drawer": "The v-navigation-drawer component is used to display application navigation. It can be permanently visible or temporarily shown.",
    "v-overflow-btn": "A styled select component that displays the selected value as a button with overflow menu behavior.",
    "v-overlay": "The v-overlay component provides an overlay effect and is used as a base for other components like dialogs and menus.",
    "v-pagination": "The v-pagination component is used to separate long sets of data into multiple pages.",
    "v-sheet": "The v-sheet component is a piece of paper on which content is displayed. It's a base for many other components.",
    "v-parallax": "The v-parallax component creates a 3D effect that makes an image appear to scroll slower than the window.",
    "v-picker": "A base picker component that provides common functionality for date and time pickers.",
    "v-progress-circular": "The v-progress-circular component displays a circular progress indicator, used to show loading states or progress.",
    "v-progress-linear": "The v-progress-linear component displays a horizontal progress bar, used to show loading states or progress.",
    "v-radio-group": "The v-radio-group component is a wrapper for v-radio components that provides v-model support for radio button groups.",
    "v-radio": "The v-radio component is a simple radio button that allows users to select a single option from a group.",
    "v-range-slider": "The v-range-slider component allows users to select a range of values on a continuous or discrete scale.",
    "v-rating": "The v-rating component provides a simple interface for gathering user feedback via ratings.",
    "v-responsive": "The v-responsive component is used to create components with specific aspect ratios or max-height/width.",
    "v-select": "The v-select component provides a dropdown selection interface with autocomplete, filtering, and multi-select capabilities.",
    "v-skeleton-loader": "The v-skeleton-loader component provides a placeholder preview while content is loading, improving perceived performance.",
    "v-slider": "The v-slider component allows users to select a single value from a range of values using a draggable slider.",
    "v-slide-group": "The v-slide-group component is used to display content in a horizontal scrollable container with pagination.",
    "v-slide-item": "A single item within a v-slide-group component.",
    "v-snackbar": "The v-snackbar component displays brief messages at the bottom of the screen, typically for user notifications.",
    "v-sparkline": "The v-sparkline component creates a simple chart for visualizing trends in data with minimal visual elements.",
    "v-speed-dial": "The v-speed-dial component displays a floating action button that reveals related actions when activated.",
    "v-stepper": "The v-stepper component displays progress through numbered steps, commonly used for multi-step processes.",
    "v-stepper-content": "The content area of a stepper step, shown when the step is active.",
    "v-stepper-step": "A single step within a v-stepper component.",
    "v-stepper-header": "The header area of a stepper containing all step indicators.",
    "v-stepper-items": "A container for stepper content areas.",
    "v-subheader": "The v-subheader component is used to separate sections of lists or content with text headings.",
    "v-switch": "The v-switch component provides a toggle switch for boolean input with on/off states.",
    "v-system-bar": "The v-system-bar component displays system-level information at the very top of an application.",
    "v-tabs": "The v-tabs component is used for organizing content into different views where only one is visible at a time.",
    "v-tab": "A single tab within a v-tabs component that users click to switch views.",
    "v-tab-item": "The content panel associated with a tab, shown when the tab is active.",
    "v-tabs-items": "A container for v-tab-item components.",
    "v-tabs-slider": "A sliding indicator that shows which tab is currently active.",
    "v-textarea": "The v-textarea component is a multi-line text input for collecting larger amounts of text from users.",
    "v-text-field": "The v-text-field component is a single-line text input used in forms and dialogs.",
    "v-theme-provider": "The v-theme-provider component allows you to dynamically change theme (light/dark) for its children.",
    "v-timeline": "The v-timeline component displays a list of events in chronological order along a vertical line.",
    "v-timeline-item": "A single event item within a v-timeline component.",
    "v-time-picker": "The v-time-picker component allows users to select a time from a clock interface.",
    "v-time-picker-clock": "The clock face interface of the time picker.",
    "v-time-picker-title": "The title/display area of the time picker showing the selected time.",
    "v-toolbar": "The v-toolbar component provides a flexible container for grouping actions, navigation, and content.",
    "v-toolbar-items": "A container for toolbar items that provides proper spacing.",
    "v-toolbar-title": "The title element of a toolbar.",
    "v-tooltip": "The v-tooltip component displays contextual information when users hover over, focus on, or tap an element.",
    "v-treeview": "The v-treeview component displays hierarchical data in a tree structure with expand/collapse functionality.",
    "v-treeview-node": "A single node within a v-treeview component.",
    "v-window": "The v-window component provides a base for creating sliding window presentations like carousels and steppers.",
    "v-window-item": "A single panel/slide within a v-window component.",
    "v-carousel-transition": "A transition component that provides carousel-style animation effects.",
    "v-carousel-reverse-transition": "A transition component that provides reverse carousel-style animation effects.",
    "v-tab-transition": "A transition component that provides tab-style animation effects.",
    "v-tab-reverse-transition": "A transition component that provides reverse tab-style animation effects.",
    "v-menu-transition": "A transition component that provides menu-style animation effects.",
    "v-fab-transition": "A transition component that provides floating action button animation effects.",
    "v-dialog-transition": "A transition component that provides dialog animation effects.",
    "v-dialog-bottom-transition": "A transition component for dialogs that slide from the bottom.",
    "v-fade-transition": "A transition component that provides fade in/out animation effects.",
    "v-scale-transition": "A transition component that provides scale animation effects.",
    "v-scroll-x-transition": "A transition component that provides horizontal scroll animation effects.",
    "v-scroll-x-reverse-transition": "A transition component that provides reverse horizontal scroll animation effects.",
    "v-scroll-y-transition": "A transition component that provides vertical scroll animation effects.",
    "v-scroll-y-reverse-transition": "A transition component that provides reverse vertical scroll animation effects.",
    "v-slide-x-transition": "A transition component that provides horizontal slide animation effects.",
    "v-slide-x-reverse-transition": "A transition component that provides reverse horizontal slide animation effects.",
    "v-slide-y-transition": "A transition component that provides vertical slide animation effects.",
    "v-slide-y-reverse-transition": "A transition component that provides reverse vertical slide animation effects.",
    "v-expand-transition": "A transition component that provides expand/collapse animation effects.",
    "v-expand-x-transition": "A transition component that provides horizontal expand/collapse animation effects.",
    "$vuetify": "The Vuetify service object that provides access to theme, breakpoint, and other Vuetify configuration.",
    "internationalization": "Vuetify's internationalization service for managing translations and locale-specific content.",
    "v-mutate": "A directive that observes DOM mutations on an element.",
    "v-intersect": "A directive that detects when an element enters or leaves the viewport.",
    "v-ripple": "A directive that adds material design ripple effect to elements when clicked.",
    "v-resize": "A directive that triggers a callback when the window is resized.",
    "v-scroll": "A directive that triggers a callback when scrolling occurs.",
    "v-touch": "A directive that provides touch gesture detection for mobile interactions.",
}


def main():
    api_file = "/home/rambap/github/ipyvuetify/generate_source/vuetify_api.json"
    print(f"Loading {api_file}...")

    with open(api_file, "r") as f:
        api_data = json.load(f)

    components_updated = 0
    components_no_doc = []

    # Add component documentation
    for component_name in api_data.keys():
        if component_name in COMPONENT_DOCS:
            if "doc" not in api_data[component_name]:
                api_data[component_name]["doc"] = COMPONENT_DOCS[component_name]
                components_updated += 1
                print(f"  ✓ {component_name}")
            else:
                print(f"  - {component_name} (already has doc)")
        else:
            components_no_doc.append(component_name)
            print(f"  ⚠ {component_name} (no doc available)")

    # Save updated data
    print("\nSaving updated data...")
    with open(api_file, "w") as f:
        json.dump(api_data, f, indent=2)

    print(f"\n{'='*60}")
    print("Summary:")
    print(f"  Total components: {len(api_data)}")
    print(f"  Components documented: {components_updated}")
    print(f"  Components without docs: {len(components_no_doc)}")
    if components_no_doc:
        print(f"  Missing: {', '.join(components_no_doc)}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
