SpeedDial
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Floating Action
    Button documentation
    <https://v2.vuetifyjs.com/en/components/floating-action-buttons/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`SpeedDial <ipyvuetify.SpeedDial>` component has a very robust
API for customizing the floating action button experience. Combined with
:py:class:`Btn <ipyvuetify.Btn>` component, you can create a diverse set of
functions available for your users.

.. api::

    - :py:class:`ipyvuetify.SpeedDial`
    - :py:class:`ipyvuetify.Btn`

Usage
-----

The speed-dial component lets you display a set of actions that appear on
hover or click.

.. jupyter-execute:: SpeedDial/usage.py
    :raises:
    :hide-code:

Examples
--------

Speed dial
^^^^^^^^^^

The :py:class:`SpeedDial <ipyvuetify.SpeedDial>` component has a very robust
API for customizing your FAB experience exactly how you want.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SpeedDial/speed_dial.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SpeedDial/speed_dial.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SpeedDial/speed_dial.vue

