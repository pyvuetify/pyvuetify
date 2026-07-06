AvatarGroup
===========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/avatar-groups/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.AvatarGroup` component is used to display a collection of avatars in a stacked or grouped layout, commonly used for showing collaborators, team members, or user lists.

.. api::

    :py:class:`pyvuetify.AvatarGroup`

Items
-----

Use the **items** prop to render avatars from an array. Strings are treated as image URLs, objects are passed as props to :py:class:`pyvuetify.Avatar`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AvatarGroup/items.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AvatarGroup/items.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AvatarGroup/items.vue


Size and Gap
------------

Use the **size** prop to control avatar dimensions and the **gap** prop to adjust the overlap between avatars.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AvatarGroup/size.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AvatarGroup/size.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AvatarGroup/size.vue


Reverse
-------

The **reverse** prop displays avatars in reverse stacking order. When rendering individual avatars (instead of passing ``items``), use ``toReversed`` to counter flexbox visual order.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AvatarGroup/reverse.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AvatarGroup/reverse.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AvatarGroup/reverse.vue


Vertical
--------

Use the **vertical** prop to stack avatars vertically instead of horizontally.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AvatarGroup/vertical.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AvatarGroup/vertical.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AvatarGroup/vertical.vue


Overflow
--------

Use the **overflow** slot to customize or replace the last item when using the **limit** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AvatarGroup/overflow.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AvatarGroup/overflow.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AvatarGroup/overflow.vue


Hoverable
---------

Groups of avatars can be customized further with slots and **hoverable** prop for subtle interactions.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AvatarGroup/hoverable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AvatarGroup/hoverable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AvatarGroup/hoverable.vue

