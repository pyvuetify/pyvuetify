Treeview
========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/treeview/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Treeview` component is useful for displaying large amounts of nested data.

.. api::

    :py:class:`pyvuetify.Treeview`

Props
-----

The :py:class:`pyvuetify.Treeview` component has several props that allow you to customize its appearance and behavior.


Activatable
-----------

Treeview nodes can be activated by clicking on them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/activatable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/activatable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/activatable.vue


Color
-----

You can control the text and background color of the active treeview node.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/color.vue


Density
-------

Dense mode provides more compact layout with decreased heights of the items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/dense.vue


Items registration
------------------

When working with large trees it is recommended to include ``items-registration="props"`` to ensure faster loading and interactions.





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/items_registration.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/items_registration.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/items_registration.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/hoverable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/hoverable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/hoverable.vue


Item props
----------

If **item-props** is set to ``true`` then the whole item will be spread. In the following example, the disabled prop defined in each item will disable the item accordingly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/item_props.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/item_props.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/item_props.vue


Open all
--------

Treeview nodes can be pre-opened on page load.





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/open_all.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/open_all.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/open_all.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/rounded.vue


Fluid
-----

The **fluid** prop removes the extra indentation used to line up children. This is useful when you want to reduce the horizontal space used by the treeview.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/fluid.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/fluid.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/fluid.vue


Selected color
--------------

You can control the color of the selected node checkbox.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/selected_color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/selected_color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/selected_color.vue


Selection type
--------------

Treeview supports several selection modes:

- **leaf** (default): Limits selection to items without children.
- **independent**: Lets you select any node, with no parent-child linkage at all.
- **classic**: Selecting a parent selects all descendants, and parent nodes show as selected only when all their descendants are selected. Only leaf nodes are added to the model.

Classic has two variants that are displayed the same way but with slightly different v-model behavior:

- **branch**: Any parent node with at least one selected descendant is also added to the model.
- **trunk**: If all children are selected only the parent node is added to the model.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/selection_type.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/selection_type.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/selection_type.vue


Load children
-------------

You can dynamically load child data by supplying a *Promise* callback to the **load-children** prop. This callback will be executed the first time a user tries to expand an item that has a children property that is an empty array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/load_children.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/load_children.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/load_children.vue


Slots
-----

The :py:class:`pyvuetify.Treeview` component has several slots that allow you to customize the appearance and behavior of its items.


Append and prepend
------------------

Using the the **prepend** slot we are able to create an intuitive file explorer.



Both **append**, and **prepend** slots get additional information about the item: ``depth``, ``path`` (from indexes), ``isFirst``, ``isLast`` and the ``index`` within the children list.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/append_and_label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/append_and_label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/append_and_label.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/append_and_prepend_item.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/append_and_prepend_item.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/append_and_prepend_item.vue


No data
-------

When searching within the treeview, you might want to show custom **no-data** slot to provide context or immediate action.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/no_data.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/no_data.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/no_data.vue


Title
-----

In this example we use a custom **title** slot to apply a line-through the treeview item's text when selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/title.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/title.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/title.vue


Toggle
------

Here, a custom **toggle** slot is utilized to assign a specific color and variant to the button depending on the state of the item.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/toggle.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/toggle.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/toggle.vue


Search and filter
-----------------

Easily filter your treeview by using the **search** prop. You can easily apply your custom filtering function if you need case-sensitive or fuzzy filtering by setting the **custom-filter** prop. This works similar to the :doc:`Autocomplete <Autocomplete>` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/search_and_filter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/search_and_filter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/search_and_filter.vue


Selectable icons
----------------

Customize the **on**, **off** and **indeterminate** icons for your selectable tree. Combine with other advanced functionality like API loaded items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/selectable_icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/selectable_icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/selectable_icons.vue


Indent lines
------------

The :py:class:`pyvuetify.Treeview` component can be configured to show indent lines. The ``indent-lines`` prop controls lines visibility and the variant.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/indent_lines.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/indent_lines.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/indent_lines.vue

