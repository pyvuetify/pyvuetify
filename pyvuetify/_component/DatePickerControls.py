import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DatePickerControls(anywidget.AnyWidget):
    """The DatePickerControls component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        text: Specify content text for the component.
        disabled: Removes the ability to click or target the component.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        control_height: Sets the height of the controls.
        control_variant: - **docked:** Separate control groups for month and year.
- **modal:** Month and year are displayed together, clicking the text opens a month picker, clicking the dropdown arrow opens a year picker. There are also arrow buttons to scroll between months.
        no_month_picker: Only applies to `controlVariant="modal"`, the month and year picker buttons are combined into one that only opens the year picker.
        next_icon: Icon used for the next button.
        prev_icon: Icon used for the previous button.
        mode_icon: Icon used for the mode button.
        month_text: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDatePickerControls.json))
        year_text: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDatePickerControls.json))
        view_mode: Sets the view mode of the date picker.

    Returns:
        A VDatePickerControls widget.

    seealso:
        `https://vuetifyjs.com/api/v-date-picker-controls`__
    """

    _esm = bundled_path / "VDatePickerControls.js"
    _css = bundled_path / "VDatePickerControls-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    disabled = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    active = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    control_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height of the controls."""

    control_variant = traitlets.Any(allow_none=True).tag(sync=True)
    """- **docked:** Separate control groups for month and year.
- **modal:** Month and year are displayed together, clicking the text opens a month picker, clicking the dropdown arrow opens a year picker. There are also arrow buttons to scroll between months."""

    no_month_picker = traitlets.Bool(allow_none=True).tag(sync=True)
    """Only applies to `controlVariant="modal"`, the month and year picker buttons are combined into one that only opens the year picker."""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used for the next button."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used for the previous button."""

    mode_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used for the mode button."""

    month_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDatePickerControls.json))"""

    year_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDatePickerControls.json))"""

    view_mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the view mode of the date picker."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        text=None,
        disabled=None,
        active=None,
        control_height=None,
        control_variant="docked",
        no_month_picker=False,
        next_icon="$next",
        prev_icon="$prev",
        mode_icon="$subgroup",
        month_text=None,
        year_text=None,
        view_mode="month",
        **kwargs
    ):
        """Initialize a DatePickerControls widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.text = text
        self.disabled = disabled
        self.active = active
        self.control_height = control_height
        self.control_variant = control_variant
        self.no_month_picker = no_month_picker
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.mode_icon = mode_icon
        self.month_text = month_text
        self.year_text = year_text
        self.view_mode = view_mode

        super().__init__(**kwargs)