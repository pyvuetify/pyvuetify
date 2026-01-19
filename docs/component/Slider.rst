Slider
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Slider
    documentation <https://v2.vuetifyjs.com/en/components/sliders/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Slider <ipyvuetify.Slider>` component is a better visualization
of the number input. It is used for gathering numerical user data.

.. api::

    - :py:class:`ipyvuetify.Slider`
    - :py:class:`ipyvuetify.RangeSlider`

Usage
-----

Sliders reflect a range of values along a bar, from which users may select a
single value. They are ideal for adjusting settings such as volume,
brightness, or applying image filters.

.. jupyter-execute:: Slider/usage.py
    :raises:
    :hide-code:

Examples
--------

Colors
^^^^^^

You can set the colors of the slider using the props ``color``,
``track_color`` and ``thumb_color``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/colors.vue

Disabled
^^^^^^^^

You cannot interact with disabled sliders.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/disabled.vue

Discrete
^^^^^^^^

Discrete sliders offer a thumb label that displays the exact current amount.
Using the ``step`` prop you can disallow selecting values outside of steps.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/discrete.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/discrete.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/discrete.vue

Icons
^^^^^

You can add icons to the slider with the ``append_icon`` and ``prepend_icon``
props. With ``@click:append`` and ``@click:prepend`` you can trigger a
callback function when click the icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/icons.vue

Inverse label
^^^^^^^^^^^^^

:py:class:`Slider <ipyvuetify.Slider>` with ``inverse_label`` property
displays label at the end of it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/inverse_label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/inverse_label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/inverse_label.vue

Min and max
^^^^^^^^^^^

You can set ``min`` and ``max`` values of sliders.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/min_and_max.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/min_and_max.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/min_and_max.vue

Readonly
^^^^^^^^

You cannot interact with ``readonly`` sliders, but they look as ordinary ones.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/readonly.vue

Step
^^^^

:py:class:`Slider <ipyvuetify.Slider>` can have steps other than 1. This can
be helpful for some applications where you need to adjust values with more or
less accuracy.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/step.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/step.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/step.vue

Thumb
^^^^^

You can display a thumb label while sliding or always with the ``thumb_label``
prop. It can have a custom color by setting ``thumb_color`` prop and a custom
size with the ``thumb_size`` prop. With the ``always_dirty`` prop its color
will never change, even when on the ``min`` value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/thumb.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/thumb.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/thumb.vue

Ticks
^^^^^

Tick marks represent predetermined values to which the user can move the
slider.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/ticks.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/ticks.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/ticks.vue

Validation
^^^^^^^^^^

Vuetify includes simple validation through the ``rules`` prop. The prop
accepts a mixed array of types ``function``, ``boolean`` and ``string``. When
the input value changes, each element in the array will be validated.
Functions pass the current ``v_model`` as an argument and must return either
``true`` / ``false`` or a ``string`` containing an error message.

.. todo::

    rule props is not usable in the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

Vertical sliders
^^^^^^^^^^^^^^^^

You can use the ``vertical`` prop to switch sliders to a vertical orientation.
If you need to change the height of the slider, use css.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/vertical_sliders.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/vertical_sliders.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/vertical_sliders.vue

Slots
-----

Append and prepend
^^^^^^^^^^^^^^^^^^

Use slots such as ``append`` and ``prepend`` to easily customize the
:py:class:`Slider <ipyvuetify.Slider>` to fit any situation.

.. todo::

    The animation does not work in the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/append_and_prepend.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/append_and_prepend.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/append_and_prepend.vue

Append text field
^^^^^^^^^^^^^^^^^

Sliders can be combined with other components in its ``append`` slot, such as
:py:class:`TextField <ipyvuetify.TextField>`, to add additional functionality
to the component.

.. todo::

    The two-way binding does not work in the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/append_text_field.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/append_text_field.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/append_text_field.vue

