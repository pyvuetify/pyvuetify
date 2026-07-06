ListItemGroup
=============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify List item groups
    documentation <https://v2.vuetifyjs.com/en/components/list-item-groups/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`ListItemGroup <pyvuetify.ListItemGroup>` provides the ability to
create a group of selectable :py:class:`ListItem <pyvuetify.ListItem>`s. The
:py:class:`ListItemGroup <pyvuetify.ListItemGroup>` component utilizes
:py:class:`ItemGroup <pyvuetify.ItemGroup>` at its core to provide a clean
interface for interactive lists.

.. api::

    - :py:class:`pyvuetify.ListGroup`
    - :py:class:`pyvuetify.ListItem`
    - :py:class:`pyvuetify.ListItemAction`
    - :py:class:`pyvuetify.ListItemActionText`
    - :py:class:`pyvuetify.ListItemAvatar`
    - :py:class:`pyvuetify.ListItemContent`
    - :py:class:`pyvuetify.ListItemGroup`
    - :py:class:`pyvuetify.ListItemSubtitle`
    - :py:class:`pyvuetify.ListItemTitle`

Usage
-----

By default, the :py:class:`ListItemGroup <pyvuetify.ListItemGroup>` operates
similarly to :py:class:`ItemGroup <pyvuetify.ItemGroup>`. If a value is not
provided, the group will provide a default based upon its index.

.. jupyter-execute:: ListItemGroup/usage.py
    :raises:

Examples
--------

Active class
^^^^^^^^^^^^

You can set a class which will be added when an item is selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ListItemGroup/active_class.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ListItemGroup/active_class.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ListItemGroup/active_class.vue

Mandatory
^^^^^^^^^

At least one item must be selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ListItemGroup/mandatory.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ListItemGroup/mandatory.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ListItemGroup/mandatory.vue

Multiple
^^^^^^^^

You can select multiple items at one time.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ListItemGroup/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ListItemGroup/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ListItemGroup/multiple.vue

Flat list
^^^^^^^^^

You can easily disable the default highlighting of selected
:py:class:`ListItem <pyvuetify.ListItem>`s. This creates a lower profile for a
user's choices.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ListItemGroup/flat_list.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ListItemGroup/flat_list.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ListItemGroup/flat_list.vue

Selection controls
^^^^^^^^^^^^^^^^^^

Using the default slot, you can access an items internal state and toggle it.
Since the active property is a boolean, we use the ``true-value`` prop on the
checkbox to link its state to the :py:class:`ListItem <pyvuetify.ListItem>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ListItemGroup/selection_controls.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ListItemGroup/selection_controls.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ListItemGroup/selection_controls.vue

