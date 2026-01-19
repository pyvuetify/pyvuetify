ColorPicker
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation
    <https://v2.vuetifyjs.com/en/components/color-pickers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ColorPicker <ipyvuetify.ColorPicker>` allows you to select a color
using a variety of input methods.

Usage
-----

The :py:class:`ColorPicker <ipyvuetify.ColorPicker>` allows you to select a color
using a variety of input methods.

.. jupyter-execute:: ColorPicker/usage.py
    :raises:

.. api::

    - :py:class:`ipyvuetify.ColorPicker`
    - :py:class:`ipyvuetify.ColorPickerCanvas`
    - :py:class:`ipyvuetify.ColorPickerSwatches`

Canvas
------

The canvas can be hidden with the ``hide-canvas`` prop, and you can set its height
with the prop ``canvas-height``. The size of the selection dot can be controlled
with the ``dot-size`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorPicker/canvas.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorPicker/canvas.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorPicker/canvas.vue

Elevation
---------

Adjust the elevation of the :py:class:`ColorPicker <ipyvuetify.ColorPicker>`
component using the ``elevation`` or ``flat`` prop. The ``flat`` is equivalent
to setting ``elevation`` to 0.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorPicker/elevation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorPicker/elevation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorPicker/elevation.vue

Inputs
------

The number inputs can be hidden with the ``hide-inputs`` prop, and the sliders can
be hidden with the ``hide-sliders`` prop. You can also hide the mode switch icon
with the ``hide-mode-switch`` prop. The mode can also be controlled externally
through the ``mode`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorPicker/inputs.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorPicker/inputs.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorPicker/inputs.vue

Model
-----

The :py:class:`ColorPicker <ipyvuetify.ColorPicker>` uses the ``v-model`` prop to
control the color displayed. It supports hex strings such as #FF00FF and
#FF00FF00, and objects representing RGBA, HSLA and HSVA values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorPicker/model.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorPicker/model.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorPicker/model.vue

Swatches
--------

Using the ``show-swatches`` prop you can display an array of color swatches that
users can pick from. It is also possible to customize what colors are shown using
the ``swatches`` prop. This prop accepts a two-dimensional array, where the first
dimension defines a column, and second dimension defines the swatches from top to
bottom by providing rgba hex strings. You can also set the max height of the swatches
section with the ``swatches-max-height`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorPicker/swatches.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorPicker/swatches.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorPicker/swatches.vue

