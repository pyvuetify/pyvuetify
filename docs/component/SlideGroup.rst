SlideGroup
==========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Slide groups
    documentation <https://v2.vuetifyjs.com/en/components/slide-groups/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SlideGroup <ipyvuetify.SlideGroup>` component is used to display
pseudo paginated information. It uses :py:class:`ItemGroup
<ipyvuetify.ItemGroup>` at its core and provides a baseline for components such
as :py:class:`Tabs <ipyvuetify.Tabs>` and :py:class:`ChipGroup
<ipyvuetify.ChipGroup>`.

.. api::

    - :py:class:`ipyvuetify.SlideGroup`
    - :py:class:`ipyvuetify.SlideItem`

Usage
-----

Similar to the :py:class:`Window <ipyvuetify.Window>` component,
:py:class:`SlideGroup <ipyvuetify.SlideGroup>` lets items to take up as much
space as needed, allowing the user to move horizontally through the provided
information.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Sheet(
        class_="mx-auto my-2",
        max_width=700,
        children=[
            v.SlideGroup(
                multiple=True,
                show_arrows=True,
                children=[
                    v.SlideItem(
                        key=n,
                        v_slots=[{
                        "name": "default",
                        "variable": "props",
                        "children": v.Btn(
                                class_="mx-2",
                                #input_value="props.active",
                                active_class="purple white--text",
                                depressed=True,
                                rounded=True,
                                children=[f'Options {n}']
                            )
                        }]
                    ) for n in range(1, 26)
                ]
            )
        ]
    )

Examples
--------

Active class
^^^^^^^^^^^^

active-class prop allows you to pass a class to customize the active items.

.. todo::

    The slots cannot be activated from the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`cofee`

Center active
^^^^^^^^^^^^^

Using the center-active prop will make the active item always centered.

.. todo::

    The slots cannot be activated from the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`cofee`

Custom icons
^^^^^^^^^^^^

You can add your custom pagination icons instead of arrows using the next-icon
and prev-icon props.

.. todo::

    The slots cannot be activated from the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`cofee`

Mandatory
^^^^^^^^^

the mandatory prop will make the slide group require at least 1 item must be
selected.

.. todo::

    The slots cannot be activated from the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`cofee`

Multiple
^^^^^^^^

You can select multiple items by setting the multiple prop.

.. todo::

    The slots cannot be activated from the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`cofee`

Pseudo Carousel
^^^^^^^^^^^^^^^

Customize the slide group to creatively display information on sheets. Using
the selection, we can display auxillary information easily for the user.

.. todo::

    The slots cannot be activated from the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`cofee`