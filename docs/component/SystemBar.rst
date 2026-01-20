SystemBar
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify System Bar
    documentation <https://v2.vuetifyjs.com/en/components/system-bars/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`SystemBar <ipyvuetify.SystemBar>` component can be used for
displaying statuses to the user. It looks like the Android system bar and can
contain icons, spacers, and some text.

.. api::

    - :py:class:`ipyvuetify.SystemBar`

Usage
-----

:py:class:`SystemBar <ipyvuetify.SystemBar>` in its simplest form displays a
small container with default theme.

.. jupyter-execute:: SystemBar/usage.py
    :raises:

Examples
--------

Color
^^^^^

You can optionally change the color of the
:py:class:`SystemBar <ipyvuetify.SystemBar>` by using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SystemBar/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SystemBar/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SystemBar/color.vue

Lights out
^^^^^^^^^^

You can reduce :py:class:`SystemBar <ipyvuetify.SystemBar>`'s opacity using
``lights_out`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SystemBar/lights_out.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SystemBar/lights_out.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SystemBar/lights_out.vue

Themes
^^^^^^

Dark or light theme variants can be applied to
:py:class:`SystemBar <ipyvuetify.SystemBar>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SystemBar/themes.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SystemBar/themes.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SystemBar/themes.vue

Window
^^^^^^

A window bar with window controls and status info.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SystemBar/window.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SystemBar/window.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SystemBar/window.vue

