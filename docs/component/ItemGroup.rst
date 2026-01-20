ItemGroup
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Item groups
    documentation <https://v2.vuetifyjs.com/en/components/item-groups/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ItemGroup <ipyvuetify.ItemGroup>` provides the ability to create
a group of selectable items out of any component. This is the baseline
functionality for components such as :py:class:`Tabs <ipyvuetify.Tabs>` and
:py:class:`Carousel <ipyvuetify.Carousel>`.

.. api::

    - :py:class:`ipyvuetify.ItemGroup`
    - :py:class:`ipyvuetify.Item`

Usage
-----

The core usage of the :py:class:`ItemGroup <ipyvuetify.ItemGroup>` is to create
groups of anything that should be controlled by a model.

.. todo::

    The itemGroup object rely on the use of the @click event and trigger it with a slo variable
    called item. It's not possible with the current implementation of ipyvuetify.

Examples
--------

Active class
^^^^^^^^^^^^

The ``active-class`` property allows you to set custom CSS class on active
items.

.. todo::

    The itemGroup object rely on the use of the @click event and trigger it with a slo variable
    called item. It's not possible with the current implementation of ipyvuetify.

Mandatory
^^^^^^^^^

``mandatory`` item groups must have at least 1 item selected.

.. todo::

    The itemGroup object rely on the use of the @click event and trigger it with a slo variable
    called item. It's not possible with the current implementation of ipyvuetify.

Multiple
^^^^^^^^

Item groups can have multiple items selected.

.. todo::

    The itemGroup object rely on the use of the @click event and trigger it with a slo variable
    called item. It's not possible with the current implementation of ipyvuetify.
Chips
^^^^^

Easily hook up a custom chip group.

.. todo::

    The itemGroup object rely on the use of the @click event and trigger it with a slo variable
    called item. It's not possible with the current implementation of ipyvuetify.

Selection
^^^^^^^^^

Icons can be used as toggle buttons when they allow selection, or deselection,
of a single choice, such as marking an item as a favorite.

.. todo::

    The itemGroup object rely on the use of the @click event and trigger it with a slo variable
    called item. It's not possible with the current implementation of ipyvuetify.
