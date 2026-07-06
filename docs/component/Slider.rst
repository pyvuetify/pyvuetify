Slider
======

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/sliders/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Slider` component can be used as an alternative visualization instead of a number input.

.. api::

    :py:class:`pyvuetify.Slider`

Colors
------

You can set the colors of the slider using the props **color**, **track-color** and **thumb-color**.

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
--------

You cannot interact with **disabled** sliders.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/disabled.vue


Step
----

Using the **step** prop you can control the precision of the slider, and how much it should move each step.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/step.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/step.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/step.vue


Icons
-----

You can add icons to the slider with the **append-icon** and **prepend-icon** props. With ``@click:append`` and ``@click:prepend`` you can trigger a callback function when click the icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/icons.vue


Min and max
-----------

You can set **min** and **max** values of sliders.

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
--------

You cannot interact with **readonly** sliders, but they look as ordinary ones.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/readonly.vue


Thumb
-----

You can display a thumb label while sliding or always with the **thumb-label** prop . It can have a custom color by setting **thumb-color** prop and a custom size with the **thumb-size** prop.

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
-----

Tick marks represent predetermined values to which the user can move the slider.





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/ticks.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/ticks.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/ticks.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/validation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/validation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/validation.vue


Vertical sliders
----------------

You can use the **direction** prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/vertical.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/vertical.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/vertical.vue


Append and prepend
------------------

Use slots such as ``append`` and ``prepend`` to easily customize the :py:class:`pyvuetify.Slider` to fit any situation.

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
-----------------

Sliders can be combined with other components in its ``append`` slot, such as :py:class:`pyvuetify.TextField`, to add additional functionality to the component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Slider/append_text_field.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Slider/append_text_field.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Slider/append_text_field.vue

