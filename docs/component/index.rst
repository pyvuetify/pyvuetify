Component
=========

About Vuetify Components
-------------------------

`Vuetify <https://vuetifyjs.com/>`_ is a comprehensive Material Design component framework for Vue.js applications.
The ipyvuetify library provides Python wrappers for all Vuetify components, allowing you to build rich,
interactive user interfaces directly in Jupyter notebooks and other IPython environments.

**Key Features:**

- **Standalone Components**: All components are self-contained and work out of the box without requiring
  additional JavaScript or CSS imports. The Vuetify framework is automatically loaded when you import ipyvuetify.

- **Dual Representation**: Each example in this documentation provides two equivalent implementations:

  - **Vue SFC (Single File Component)**: The standard Vue.js template syntax that you would use in a
    traditional Vue.js application
  - **Pure Python**: The ipyvuetify Python equivalent using the same component hierarchy and properties

- **Python-First API**: All Vuetify properties, methods, and slots are accessible through Python, following
  Pythonic naming conventions (e.g., ``colored-border`` becomes ``colored_border``).

.. important::

    **Static Documentation Notice**

    This documentation is generated as a static document and does not have access to a live IPython kernel.
    As a result:

    - Event handlers (like ``@click``, ``on_event``) are not captured in the rendered examples
    - Interactive behaviors shown are primarily achieved through traitlets' ``jslink`` for simple state
      synchronization
    - Real-world applications can be much more sophisticated using actual Python event handlers and callbacks

    For complete, deployable examples demonstrating full event handling and interactivity, please refer to
    the **Gallery** section.

Component Categories
--------------------

The components are organized into the following categories for easy navigation:

Containment
-----------

.. toctree::
    :caption: Containment
    :maxdepth: 1

    App
    BottomSheet
    Btn
    Card
    Chip
    Dialog
    Divider
    ExpansionPanels
    List
    ListItemGroup
    Menu
    Overlay
    Sheet
    Toolbar
    Tooltip
    OverflowBtn
    Subheader

Navigation
----------

.. toctree::
    :caption: Navigation
    :maxdepth: 1

    AppBar
    BottomNavigation
    Breadcrumbs
    Footer
    NavigationDrawer
    Pagination
    SpeedDial
    SystemBar
    Tabs

Form Inputs & Controls
----------------------

.. toctree::
    :caption: Form Inputs & Controls
    :maxdepth: 1

    Autocomplete
    Checkbox
    Combobox
    FileInput
    Form
    Radio
    RangeSlider
    Select
    Slider
    Switch
    TextField
    Textarea
    Input

Data Display
------------

.. toctree::
    :caption: Data Display
    :maxdepth: 1

    Calendar
    DataTable
    Sparkline
    SimpleTable
    Treeview

Layout
------

.. toctree::
    :caption: Layout
    :maxdepth: 1

    Grid
    Flex

Selection
---------

.. toctree::
    :caption: Selection
    :maxdepth: 1

    BtnToggle
    Carousel
    ChipGroup
    ItemGroup
    SlideGroup
    Stepper
    Window

Feedback
--------

.. toctree::
    :caption: Feedback
    :maxdepth: 1

    Alert
    Badge
    Banner
    Hover
    ProgressCircular
    ProgressLinear
    Rating
    SkeletonLoader
    Snackbar
    Timeline

Image & Icons
-------------

.. toctree::
    :caption: Images & Icons
    :maxdepth: 1

    Avatar
    Icon
    Img
    Parallax

Pickers
-------

.. toctree::
    :caption: Pickers
    :maxdepth: 1

    ColorPicker
    DatePicker
    TimePicker

Other
-----

.. toctree::
    :caption: Other
    :maxdepth: 1

    Lazy


