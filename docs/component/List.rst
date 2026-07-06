List
====

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/lists/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.List` component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection. They provide a consistent styling for organizing groups of text and images.

.. api::

    :py:class:`pyvuetify.List`

Items
-----

Lists can either be created by markup using the many sub-components that are available, or by using the **items** prop.



To customize which properties will be used for the title and value of each item, use the **item-title** and **item-value** props.



If you need to render subheaders or dividers, add an item with a **type** property. Which property to use can be customized using the **item-type** prop.



To customize individual items, you can use the **item-props** prop. It defaults to looking for a **props** property on the items. The value should be an object, and if found it will be spread on the **``ListItem``** component.

If **item-props** is set to **true** then the whole item will be spread.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/items.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/items.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/items.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/items_custom.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/items_custom.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/items_custom.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/items_type.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/items_type.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/items_type.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/items_prop.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/items_prop.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/items_prop.vue


Density
-------

:py:class:`pyvuetify.List` supports the **density** property.





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/density.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/density.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/density.vue


Disabled
--------

You cannot interact with disabled :py:class:`pyvuetify.List`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/disabled.vue


Variant
-------

:py:class:`pyvuetify.List` supports the **variant** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/variant.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/variant.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/variant.vue


Nav
---

Lists can receive an alternative **nav** styling that reduces the width :py:class:`pyvuetify.ListItem` takes up as well as adding a border radius.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/nav.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/nav.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/nav.vue


Rounded
-------

You can make :py:class:`pyvuetify.List` items rounded.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/rounded.vue


Shaped
------

Shaped lists have rounded borders on one side of the :py:class:`pyvuetify.ListItem`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/shaped.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/shaped.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/shaped.vue


Sub group
---------

Using the :py:class:`pyvuetify.ListGroup` component you can create sub-groups of items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/sub_group.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/sub_group.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/sub_group.vue


Three line
----------

For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses `line-clamp <https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp>`__ and is not supported in all browsers.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/three_line.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/three_line.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/three_line.vue


Two lines and subheader
-----------------------

Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/two_line_and_subheader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/two_line_and_subheader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/two_line_and_subheader.vue


Action and item groups
----------------------

A **three-line** list with actions. Utilizing **select-strategy**, easily connect actions to your tiles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/actions.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/actions.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/actions.vue


Action with text
----------------

A list can contain additional meta information within an action.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/action_stack.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/action_stack.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/action_stack.vue


Card list
---------

A list can be combined with a card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/card_list.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/card_list.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/card_list.vue

