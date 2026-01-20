RangeSlider
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Range Sliders
    documentation <https://v2.vuetifyjs.com/en/components/range-sliders/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`RangeSlider <ipyvuetify.RangeSlider>` component complements
the :py:class:`Slider <ipyvuetify.Slider>` component by allowing the
selection of a range of values. It is ideal for adjusting settings such as
volume, brightness, or applying image filters.

.. api::

    - :py:class:`ipyvuetify.RangeSlider`
    - :py:class:`ipyvuetify.Slider`

Usage
-----

Sliders reflect a range of values along a bar, from which users may select a
single value. They are ideal for adjusting settings such as volume,
brightness, or applying image filters.

.. jupyter-execute:: RangeSlider/usage.py
    :raises:

Examples
--------

Disabled
^^^^^^^^

You cannot interact with disabled sliders.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: RangeSlider/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: RangeSlider/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: RangeSlider/disabled.vue

Min and max
^^^^^^^^^^^

You can set min and max values of sliders.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: RangeSlider/min_and_max.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: RangeSlider/min_and_max.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: RangeSlider/min_and_max.vue

Step
^^^^

:py:class:`RangeSlider <ipyvuetify.RangeSlider>` can have steps other than
1. This can be helpful for some applications where you need to adjust values
with more or less accuracy.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: RangeSlider/step.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: RangeSlider/step.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: RangeSlider/step.vue

Vertical sliders
^^^^^^^^^^^^^^^^

You can use the vertical prop to switch sliders to a vertical orientation. If
you need to change the height of the slider, use css.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: RangeSlider/vertical_sliders.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: RangeSlider/vertical_sliders.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: RangeSlider/vertical_sliders.vue

Thumb label
^^^^^^^^^^^

Using the tick-labels prop along with the ``thumb-label`` slot, you can
create a very customized solution.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: RangeSlider/thumb_label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: RangeSlider/thumb_label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: RangeSlider/thumb_label.vue

