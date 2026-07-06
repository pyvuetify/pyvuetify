Select
======


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/selects/>`__.
    All examples have been converted to pyvuetify syntax.

Select fields components are used for collecting user provided information from a list of options.

.. api::

    :py:class:`pyvuetify.Select`

Props
-----

All form inputs have a massive API that make it super easy to configure everything just the way you want it.


Density
-------

You can use **density** prop to adjust vertical spacing within the component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/dense.vue


Multiple
--------

The **multiple** prop allows for multiple selections.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/multiple.vue


Chips
-----

Display selected items as chips with the **chips** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/chips.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/chips.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/chips.vue


Readonly
--------

You can use the **readonly** prop on :py:class:`pyvuetify.Select` which will prevent a user from changing its value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/readonly.vue


Disabled
--------

Applying the **disabled** prop to a :py:class:`pyvuetify.Select` will prevent a user from interacting with the component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/disabled.vue


Custom title and value
----------------------

You can specify the specific properties within your items array that correspond to the title and value fields. By default, this is **title** and **value**. In this example we also use the **return-object** prop which will return the entire object of the selected item on selection.



When customizing items with the ``item`` slot, you should disable the default ``title`` prop rendering to avoid duplicate text.
You can do this by setting ``:title="null"`` on :py:class:`pyvuetify.ListItem`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/custom_title_and_value.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/custom_title_and_value.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/custom_title_and_value.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/avoid_duplicate_text.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/avoid_duplicate_text.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/avoid_duplicate_text.vue


Menu props
----------

Custom props can be passed directly to :py:class:`pyvuetify.Menu` using **menu-props** prop. In this example a scrim as added to the select and the menu closes when you scroll.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/menu_props.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/menu_props.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/menu_props.vue


List props
----------

Custom props can be passed directly to :py:class:`pyvuetify.List` using **list-props** prop. In this example a background color is added to the list.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/list_props.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/list_props.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/list_props.vue


Custom item props
-----------------

``item-title`` and ``item-value`` are provided for convenience, and additional props can be passed to list items either through the **item** slot (see below) or with the **itemProps** prop.
Similar to title and value, it has a default value of ``"props"``, which will pass everything in the ``props`` key of each item object to the list item.

```js
const items = [
  {
    title: 'John',
    props: { subtitle: 'Engineering' },
  },
]
```

``:item-props="true"`` will use the entire item object as props. This overrides ``item-title`` and ``item-value``.

```js
const items = [
  {
    title: 'John',
    subtitle: 'Engineering',
  },
]
```

Or a custom transform function can be passed to ``itemProps`` to generate the props for each item.



See the :py:class:`pyvuetify.ListItem` for a list of available props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/item_props.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/item_props.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/item_props.vue


Slots
-----

The :py:class:`pyvuetify.Select` component offers slots that make it easy to customize the output of certain parts of the component. This includes the **prepend** and **append** slots, the **selection** slot, and the **no-data** slot.


Item
----

The item slot is used to change how items are rendered in the list. It provides ``item``, an :py:class:`pyvuetify.Select` object containing the transformed item-title and item-value; and ``props``, an object containing the props and events that would normally be bound to the list item.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/item.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/item.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/item.vue


Append and prepend item
-----------------------

The :py:class:`pyvuetify.Select` component can be optionally expanded with prepended and appended items. This is perfect for customized **select-all** functionality.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/append_and_prepend_item.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/append_and_prepend_item.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/append_and_prepend_item.vue


Selection
---------

The **selection** slot can be used to customize the way selected values are shown in the input. This is great when you don't want the selection to occupy multiple lines.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/selection.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/selection.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/selection.vue


Menu header and footer
----------------------

The **menu-header** and **menu-footer** slots allow you to add custom content at the top and bottom of the dropdown menu. This is useful for adding search fields, action buttons, or any other controls.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/menu_header_and_footer.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/menu_header_and_footer.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/menu_header_and_footer.vue

