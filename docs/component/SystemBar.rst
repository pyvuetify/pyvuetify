SystemBar
=========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/system-bars/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.SystemBar` component can be used for displaying statuses to the user. It looks like the Android system bar and can contain icons, spacers, and some text.

.. api::

    :py:class:`pyvuetify.SystemBar`

Color
-----

You can optionally change the color of the :py:class:`pyvuetify.SystemBar` by using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SystemBar/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SystemBar/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SystemBar/color.vue


Window
------

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

