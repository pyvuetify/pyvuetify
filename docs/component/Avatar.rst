Avatar
======

.. aknowledgement::
    This documentation has been adapted from the official Vuetify 2 documentation available at
    https://v2.vuetifyjs.com/en/components/avatars/.

The :py:class:`Avatar <ipyvuetify.Avatar>` component is typically used to display circular user
profile pictures. This component will allow you to dynamically size and add a border radius of
responsive images, icons, and text. A ``tile`` variation is available for displaying an avatar
without border radius.

.. api::

    :py:class:`ipyvuetify.Avatar`

Usage
-----

Avatars in their simplest form display content within a circular container.

.. jupyter-execute:: Avatar/usage.py
    :raises:
    :hide-code:

Size
----

The ``size`` prop allows you to define the height and width of :py:class:`Avatar <ipyvuetify.Avatar>`.
This prop scales both evenly with an aspect ratio of 1. ``height`` and ``width`` props will override
this prop.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute:: Avatar/size.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/size.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/size.vue

Tile
----

The ``tile`` prop removes the border radius from :py:class:`Avatar <ipyvuetify.Avatar>` leaving you
with a simple square avatar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/tile.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/tile.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/tile.vue

Using images
------------

The :py:class:`Avatar <ipyvuetify.Avatar>` default chikdren will accept the :py:class:`Icon <ipyvuetify.Icon>`
component, an image, or text. Mix and match these with other props to create something unique.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/using_images.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/using_images.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/using_images.vue

Advanced usage
--------------

Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/advanced_usage.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/advanced_usage.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/advanced_usage.vue

Profile Card
------------

Using the ``tile`` prop, we can create a sleek hard-lined profile card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/profile_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/profile_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/profile_card.vue

