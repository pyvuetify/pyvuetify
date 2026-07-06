Carousel
========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/carousels/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Carousel` component is used to display large numbers of visual content on a rotating timer.

.. api::

    :py:class:`pyvuetify.Carousel`

Custom delimiters
-----------------

Use any available icon as your carousel's slide delimiter.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/custom_icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/custom_icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Carousel/custom_icons.vue


Custom transition
-----------------

The :py:class:`pyvuetify.CarouselItem` component can have its **transition/reverse-transition** changed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/custom_transition.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/custom_transition.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Carousel/custom_transition.vue


Cycle
-----

With the **cycle** prop you can have your slides automatically transition to the next available every 6s (default).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/cycle.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/cycle.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Carousel/cycle.vue


Hide controls
-------------

You can hide the carousel navigation controls with ``:show-arrows="false"``. Or you can make them only appear on hover with ``show-arrows="hover"``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/hide_controls.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/hide_controls.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Carousel/hide_controls.vue


Customized arrows
-----------------

Arrows can be customized by using **prev** and **next** slots.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/slots_next_prev.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/slots_next_prev.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Carousel/slots_next_prev.vue


Hide delimiters
---------------

You can hide the bottom controls with **hide-delimiters** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/hide_delimiters.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/hide_delimiters.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Carousel/hide_delimiters.vue


Progress
--------

You can show a linear progress bar with the **progress** prop. It will indicate how far into the cycle the carousel currently is.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/progress.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/progress.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Carousel/progress.vue


Model
-----

You can control carousel with **v-model**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/model.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/model.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Carousel/model.vue


Vertical with overlay content
-----------------------------

Carousel can be augmented with additional content simply by placing VOverlay next to it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/vertical.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/vertical.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Carousel/vertical.vue

