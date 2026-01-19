Sheet
=====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Sheets
    documentation <https://v2.vuetifyjs.com/en/components/sheets/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Sheet <ipyvuetify.Sheet>` component is the baseline for
numerous components such as :py:class:`Card <ipyvuetify.Card>`,
:py:class:`Toolbar <ipyvuetify.Toolbar>`, and more. The available properties
form the foundation of Material Design — the concept of paper and elevation
(shadows).

.. api::

    - :py:class:`ipyvuetify.Sheet`

Usage
-----

The :py:class:`Sheet <ipyvuetify.Sheet>` component is a transformable piece of
paper that provides a basic foundation for Vuetify features. For example,
properties such as rounded and shaped modify the ``border-radius`` property
while elevation increases/decreases ``box-shadow``.

.. jupyter-execute:: Sheet/usage.py
    :raises:

Examples
--------

Elevation
^^^^^^^^^

The :py:class:`Sheet <ipyvuetify.Sheet>` component accepts a custom elevation
between 0 and 24 (0 is default). The elevation property modifies the
``box-shadow`` property. More information is located in the `MD Elevation
Design Specification
<https://material.io/design/environment/elevation.html>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sheet/elevation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sheet/elevation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sheet/elevation.vue

Color
^^^^^

Sheets and components based on them can have different sizes and colors.

The :py:class:`Sheet <ipyvuetify.Sheet>` component accepts custom `Material
Design Color <https://v2.vuetifyjs.com/en/styles/colors/>`__ values such as
``warning``, ``amber darken-3``, and ``deep-purple accent`` — as well as rgb,
rgba, and hexadecimal values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sheet/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sheet/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sheet/color.vue

