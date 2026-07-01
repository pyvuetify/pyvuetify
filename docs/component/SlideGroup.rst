SlideGroup
==========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Slide groups
    documentation <https://v2.vuetifyjs.com/en/components/slide-groups/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`SlideGroup <pyvuetify.SlideGroup>` component is used to display
pseudo paginated information. It uses :py:class:`ItemGroup
<pyvuetify.ItemGroup>` at its core and provides a baseline for components such
as :py:class:`Tabs <pyvuetify.Tabs>` and :py:class:`ChipGroup
<pyvuetify.ChipGroup>`.

.. api::

    - :py:class:`pyvuetify.SlideGroup`
    - :py:class:`pyvuetify.SlideItem`

Usage
-----

Similar to the :py:class:`Window <pyvuetify.Window>` component,
:py:class:`SlideGroup <pyvuetify.SlideGroup>` lets items to take up as much
space as needed, allowing the user to move horizontally through the provided
information.

.. jupyter-execute:: SlideGroup/usage.py
    :raises:

Examples
--------

Active class
^^^^^^^^^^^^

active-class prop allows you to pass a class to customize the active items.

.. todo::

    The slots cannot be activated from the current pyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

Center active
^^^^^^^^^^^^^

Using the center-active prop will make the active item always centered.

.. todo::

    The slots cannot be activated from the current pyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

Custom icons
^^^^^^^^^^^^

You can add your custom pagination icons instead of arrows using the next-icon
and prev-icon props.

.. todo::

    The slots cannot be activated from the current pyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

Mandatory
^^^^^^^^^

the mandatory prop will make the slide group require at least 1 item must be
selected.

.. todo::

    The slots cannot be activated from the current pyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

Multiple
^^^^^^^^

You can select multiple items by setting the multiple prop.

.. todo::

    The slots cannot be activated from the current pyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

Pseudo Carousel
^^^^^^^^^^^^^^^

Customize the slide group to creatively display information on sheets. Using
the selection, we can display auxillary information easily for the user.

.. todo::

    The slots cannot be activated from the current pyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`