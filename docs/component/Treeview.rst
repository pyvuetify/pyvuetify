Treeview
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Treeview
    documentation <https://v2.vuetifyjs.com/en/components/treeview/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Treeview <ipyvuetify.Treeview>` component is useful for displaying
large amounts of nested data.

.. api::

    - :py:class:`ipyvuetify.Treeview`
    - :py:class:`ipyvuetify.TreeviewNode`

Usage
-----

A basic example.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/usage.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/usage.py

Examples
--------

Activatable
^^^^^^^^^^^

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
^^^^^

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

Dense mode
^^^^^^^^^^

**Dense** mode provides more compact layout with decreased heights of the items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/dense_mode.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/dense_mode.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/dense_mode.vue

Hoverable
^^^^^^^^^

Treeview nodes can have a **hover** effect.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/hoverable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/hoverable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/hoverable.vue

Item disabled
^^^^^^^^^^^^^

Setting ``item_disabled`` prop allows to control which node's property disables the
node when set to **true**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/item_disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/item_disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/item_disabled.vue

Load children
^^^^^^^^^^^^^

You can dynamically load child data by supplying a Promise callback to the
``load_children`` prop. This callback will be executed the first time a user tries
to expand an item that has a children property that is an empty array.

.. todo::

    This example requires an actual asynchronous data source to demonstrate properly.
    and a talented contributor to set it up :fas:`heart`

Open all
^^^^^^^^

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

Rounded
^^^^^^^

You can make treeview nodes **rounded**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/rounded.vue

Selectable
^^^^^^^^^^

You can easily select treeview nodes and children.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/selectable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/selectable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/selectable.vue

Selected color
^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^

Treeview now supports two different selection types. The default type is **leaf**,
which will only include leaf nodes in the v-model array, but will render parent
nodes as either partially or fully selected. The alternative mode is
**independent**, which allows one to select parent nodes, but each node is
independent of its parent and children.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/selection_type.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/selection_type.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/selection_type.vue

Shaped
^^^^^^

**Shaped** treeview's have rounded borders on one side of the nodes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Treeview/shaped.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Treeview/shaped.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Treeview/shaped.vue

Append and label
^^^^^^^^^^^^^^^^

Using the ``label``, and an ``append`` slots we are able to create an intuitive
file explorer.

.. todo::

    This example requires custom slots to demonstrate properly, and a talented
    contributor to set it up :fas:`heart`

Search and filter
^^^^^^^^^^^^^^^^^

Easily filter your treeview by using the ``search`` prop. You can easily apply your
custom filtering function if you need case-sensitive or fuzzy filtering by setting
the ``filter`` prop. This works similar to the
:py:class:`Autocomplete <ipyvuetify.Autocomplete>`__.

.. __: https://v2.vuetifyjs.com/en/components/autocompletes/

.. todo::

    This example requires custom slots to demonstrate properly, and a talented
    contributor to set it up :fas:`heart`

Selectable icons
^^^^^^^^^^^^^^^^

Customize the **on**, **off** and **indeterminate** icons for your selectable tree.
Combine with other advanced functionality like API loaded items.

.. todo::

    This example requires custom slots to demonstrate properly, and a talented
    contributor to set it up :fas:`heart`
