Carousel
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/carousels/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Carousel <ipyvuetify.Carousel>` component is used to display large numbers of visual content on a rotating timer. It expands upon v-window by providing additional features targeted at displaying images.

.. api::

    - :py:class:`ipyvuetify.Carousel`
    - :py:class:`ipyvuetify.CarouselItem`
    - :py:class:`ipyvuetify.CarouselReverseTransition`
    - :py:class:`ipyvuetify.CarouselTransition`

Usage
-----

The Carousel component expands upon the window component by providing additional features targeted at displaying images.

.. jupyter-execute:: Carousel/usage.py
    :raises:

Custom delimiters
-----------------

Use any available icon as your carousel's slide delimiter.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/custom_delimiters.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/custom_delimiters.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: Carousel/custom_delimiters.vue

Custom transition
-----------------

The :py:class:`CarouselItem <ipyvuetify.CarouselItem>` component can have its
transition/reverse-transition changed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/custom_transition.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/custom_transition.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: Carousel/custom_transition.vue

Cycle
-----

With the ``cycle`` prop you can have your slides automatically transition to the next available every 6 seconds (default).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/cycle.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/cycle.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: Carousel/cycle.vue

Hide controls
-------------

You can hide the carousel navigation controls with ``show_arrows=False``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/hide_controls.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/hide_controls.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: Carousel/hide_controls.vue

Customized arrows
-----------------

Arrows can be customized by using the ``prev`` and ``next`` slots to replace the
default navigation controls.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/customized_arrows.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/customized_arrows.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: Carousel/customized_arrows.vue

Hide delimiters
---------------

You can hide the bottom controls with ``hide-delimiters`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/hide_delimiters.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/hide_delimiters.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: Carousel/hide_delimiters.vue

Progress
--------

You can show a linear progress bar with the ``progress`` prop. It will indicate
how far into the cycle the carousel currently is.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/progress.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/progress.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: Carousel/progress.vue

Model
-----

You can control the carousel with ``v_model``. This example demonstrates manual
control with buttons. This example will start the carousel on the 3rd slide.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Carousel/model.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Carousel/model.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: Carousel/model.vue

