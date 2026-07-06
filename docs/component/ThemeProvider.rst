ThemeProvider
=============

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/theme-providers/>`__.
    All examples have been converted to pyvuetify syntax.

The theme provider allows you to style a section of your application in a different theme from the default

.. api::

    :py:class:`pyvuetify.ThemeProvider`

Background
----------

By default, :py:class:`pyvuetify.ThemeProvider` is a renderless component that allows you to change the applied theme for all of its children. When using the **with-background** prop, the :py:class:`pyvuetify.ThemeProvider` wraps its children in an element and applies the selected theme's background color to it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ThemeProvider/with_background.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ThemeProvider/with_background.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ThemeProvider/with_background.vue

