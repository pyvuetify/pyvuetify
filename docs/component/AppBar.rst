AppBar
======


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/app-bars/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.AppBar` component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation.

.. api::

    :py:class:`pyvuetify.AppBar`

Props
-----

The :py:class:`pyvuetify.AppBar` component has a variety of props that allow you to customize its look and feel, density, scroll behavior, and more.


Scroll behavior
---------------

Available values:

- **hide**: The default slot area will shift up and hide as the user scrolls down. The extension slot remains visible.
- **fully-hide**: The entire app bar will hide as the user scrolls down.
- **collapse**: Shrink horizontally to a small bar in one corner.
- **elevate**: Add a drop shadow to the app bar when scrolling. Ignores ``scroll-threshold``, will always be applied with any amount of scrolling.
- **fade-image**: Fade out the image as the user scrolls down.
- **inverted**: Has no effect on its own, but will reverse the behavior when combined with any other option.

The ``scroll-threshold`` prop is used to determine how far the user must scroll down (in pixels) before the behavior is applied.

A scroll listener is added to ``window`` by default, but can be changed to a custom element using the ``scroll-target`` prop.




Density
-------

You can make **app-bar** dense. A dense app bar has lower height than regular one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AppBar/density.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AppBar/density.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AppBar/density.vue


Images
------

:py:class:`pyvuetify.AppBar` can contain background images. You can set source via the ``image`` prop. If you need to customize the :py:class:`pyvuetify.Img` properties, the app-bar provides you with an **image** slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AppBar/image.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AppBar/image.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AppBar/image.vue


Prominent
---------

An :py:class:`pyvuetify.AppBar` with the ``density="prominent"`` prop can be used for longer titles, to house imagery, or to provide a stronger presence to the top app bar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AppBar/prominent.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AppBar/prominent.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AppBar/prominent.vue

