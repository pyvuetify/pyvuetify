Avatar
======

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/avatars/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Avatar` component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text.  When **rounded** prop set to ``0`` will display an avatar without border radius.

.. api::

    :py:class:`pyvuetify.Avatar`

Size
----

The ``size`` prop allows you to change the height and width of the avatar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/size.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/size.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/size.vue


Badge
-----

The ``badge`` prop wraps the avatar in a :doc:`Badge <Badge>` to display a status indicator. Set it to ``true`` for a default dot badge, a color string, or an object of VBadge props for full customization. Use the **badge** slot to render custom content inside the badge.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/badge.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/badge.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/badge.vue


Tile
----

The ``rounded`` prop can be used to remove the border radius from ``Avatar`` leaving you with a simple square avatar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/tile.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/tile.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/tile.vue


Default
-------

The :py:class:`pyvuetify.Avatar` default slot allows you to render content such as :py:class:`pyvuetify.Icon` components, images, or text. Mix and match these with other props to create something unique.





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/default.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/default.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/default.vue


Advanced usage
--------------

Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.



Another example combining avatar with menu.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/advanced.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/advanced.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/advanced.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/avatar_menu.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/avatar_menu.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/avatar_menu.vue


Profile Card
------------

Using the **rounded** prop value ``0``, we can create a sleek hard-lined profile card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Avatar/profile_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Avatar/profile_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Avatar/profile_card.vue

