Hover
=====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Hover documentation
    <https://v2.vuetifyjs.com/en/components/hover/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Hover <ipyvuetify.Hover>` component provides a clean interface for
handling hover states for any component.

.. api::

    :py:class:`ipyvuetify.Hover`

Usage
-----

The :py:class:`Hover <ipyvuetify.Hover>` component is a wrapper that should contain
only one child element, and can trigger an event when hovered over. In order for
:py:class:`Hover <ipyvuetify.Hover>` to work properly, either the value prop should
be set to ``true`` or the wrapped element should contain ``v-slot="{ wrapper }"``.

.. todo::

    I don't understand how to use the slot syntax here. Please help me improve this section.

Examples
--------

Disabled
^^^^^^^^

The ``disabled`` prop disables the hover functionality.

.. todo::

    I don't understand how to use the slot syntax here. Please help me improve this section.

Open and close delay
^^^^^^^^^^^^^^^^^^^^

Delay :py:class:`Hover <ipyvuetify.Hover>` events by using ``open-delay`` and
``close-delay`` props in combination or separately.

.. todo::

    I don't understand how to use the slot syntax here. Please help me improve
    this section.

Hover list
^^^^^^^^^^

:py:class:`Hover <ipyvuetify.Hover>` can be used in combination with ``v-for``
to make a single item stand out when the user interacts with the list.

.. todo::

    I don't understand how to use the slot syntax here. Please help me improve
    this section.

Transition
^^^^^^^^^^

Create highly customized components that respond to user interaction.

.. todo::

    I don't understand how to use the slot syntax here. Please help me improve
    this section.