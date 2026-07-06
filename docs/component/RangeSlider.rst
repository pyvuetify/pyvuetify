RangeSlider
===========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/range-sliders/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.RangeSlider` component complements the :py:class:`pyvuetify.Slider` component nicely when you are in need of representing a range of values.

.. api::

    :py:class:`pyvuetify.RangeSlider`

Strict
------

With the **strict** prop applied, the thumbs of the range slider are not allowed to cross over each other.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: RangeSlider/strict.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: RangeSlider/strict.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: RangeSlider/strict.vue


Disabled
--------

You cannot interact with **disabled** sliders.

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
-----------

You can set **min** and **max** values of sliders.

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
----

:py:class:`pyvuetify.RangeSlider` can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.

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
----------------

You can use the **vertical** prop to switch sliders to a vertical orientation.
If you need to change the height of a vertical slider, be aware that :py:class:`pyvuetify.RangeSlider` is not a simple HTML element. This means plain CSS on the component will not affect the correct internal element. Instead, you must use a **deep selector**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: RangeSlider/vertical.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: RangeSlider/vertical.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: RangeSlider/vertical.vue


Thumb label
-----------

Using the **tick-labels** prop along with the ``thumb-label`` slot, you can create a very customized solution.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: RangeSlider/thumb_label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: RangeSlider/thumb_label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: RangeSlider/thumb_label.vue

