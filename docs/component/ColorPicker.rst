ColorPicker
===========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/color-pickers/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.ColorPicker` allows you to select a color using a variety of input methods.

.. api::

    :py:class:`pyvuetify.ColorPicker`

Customizing the look of the picker
----------------------------------

There are a number of props available to help you customize the component by hiding or showing the various parts of the picker. You can independently hide the canvas, the sliders, and the inputs. You can also show a collection of swatches.

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

Adjust the elevation of the :py:class:`pyvuetify.ColorPicker` component using the **elevation** or **flat** prop. The **flat** is equivalent to setting **elevation** to 0.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorPicker/elevation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorPicker/elevation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorPicker/elevation.vue


Mode
----

You can specify which input modes are available to your users with the ``modes`` prop. If you only set a single mode, then the mode toggle will automatically be hidden. You can also control the current mode with the ``mode`` v-model.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorPicker/mode.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorPicker/mode.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorPicker/mode.vue


Model
-----

The :py:class:`pyvuetify.ColorPicker` uses the :py:class:`pyvuetify.Model` prop to control the color displayed. It supports hex strings such as **#FF00FF** and **#FF00FF00**, and objects representing **RGBA**, **HSLA** and **HSVA** values. The component will try to emit the color in the same format that was provided. If the value is null or an unsupported format, then the :py:class:`pyvuetify.ColorPicker` will default to emitting hex colors.

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

Using the ``show-swatches`` prop you can display an array of color swatches that users can pick from. It is also possible to customize what colors are shown using the ``swatches`` prop. This prop accepts a two-dimensional array, where the first dimension defines a column, and second dimension defines the swatches from top to bottom by providing rgba hex strings. You can also set the max height of the swatches section with the ``swatches-max-height`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorPicker/swatches.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorPicker/swatches.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorPicker/swatches.vue

