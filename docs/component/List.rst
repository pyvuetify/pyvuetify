List
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Lists documentation
    <https://v2.vuetifyjs.com/en/components/lists/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`List <ipyvuetify.List>` component is used to display information.
It can contain an avatar, content, actions, subheaders and much more. Lists
present content in a way that makes it easy to identify a specific item in a
collection. They provide a consistent styling for organizing groups of text and
images.

.. api::

    - :py:class:`ipyvuetify.List`
    - :py:class:`ipyvuetify.ListGroup`
    - :py:class:`ipyvuetify.ListItem`
    - :py:class:`ipyvuetify.ListItemAction`
    - :py:class:`ipyvuetify.ListItemActionText`
    - :py:class:`ipyvuetify.ListItemAvatar`
    - :py:class:`ipyvuetify.ListItemContent`
    - :py:class:`ipyvuetify.ListItemGroup`
    - :py:class:`ipyvuetify.ListItemIcon`
    - :py:class:`ipyvuetify.ListItemSubtitle`
    - :py:class:`ipyvuetify.ListItemTitle`

Usage
-----

Lists come in three main variations. single-line (default), two-line and
three-line. The line declaration specifies the minimum height of the item and
can also be controlled from :py:class:`List <ipyvuetify.List>` with the same
prop.

.. jupyter-execute:: List/usage.py
    :raises:

.. note::

    If you are looking for stateful list items, please check out
    :py:class:`ListItemGroup <ipyvuetify.ListItemGroup>`.

Examples
--------

Dense
^^^^^

:py:class:`List <ipyvuetify.List>` can be lowered with ``dense`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/dense.vue

Disabled
^^^^^^^^

You cannot interact with disabled :py:class:`List <ipyvuetify.List>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/disabled.vue

Flat
^^^^

Items don't change when selected in :py:class:`List <ipyvuetify.List>` with
``flat`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/flat.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/flat.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/flat.vue

Nav
^^^

Lists can receive an alternative ``nav`` styling that reduces the width
:py:class:`ListItem <ipyvuetify.ListItem>` takes up as well as adding a border
radius.

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
^^^^^^^

You can make :py:class:`List <ipyvuetify.List>` items rounded.

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
^^^^^^

Shaped lists have rounded borders on one side of the
:py:class:`ListItem <ipyvuetify.ListItem>`.

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
^^^^^^^^^

Using the :py:class:`ListGroup <ipyvuetify.ListGroup>` component you can create
up to 2 levels in depth using the ``sub-group`` prop.

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
^^^^^^^^^^

For three line lists, the subtitle will clamp vertically at 2 lines and then
ellipsis. This feature uses `line-clamp
<https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp>`__ and is
not supported in all browsers.

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
^^^^^^^^^^^^^^^^^^^^^^^

Lists can contain subheaders, dividers, and can contain 1 or more lines. The
subtitle will overflow with ellipsis if it extends past one line.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/two_lines_and_subheader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/two_lines_and_subheader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/two_lines_and_subheader.vue

Expansion Lists
^^^^^^^^^^^^^^^

A list can contain a group of items which will display on click utilizing
:py:class:`ListGroup <ipyvuetify.ListGroup>`'s ``activator`` slot. Expansion
lists are also used within the :py:class:`NavigationDrawer
<ipyvuetify.NavigationDrawer>` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/expansion_lists.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/expansion_lists.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/expansion_lists.vue

Action and item groups
^^^^^^^^^^^^^^^^^^^^^^

A three-line list with actions. Utilizing :py:class:`ListItemGroup
<ipyvuetify.ListItemGroup>`, easily connect actions to your tiles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/action_and_item_groups.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/action_and_item_groups.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/action_and_item_groups.vue

Action stack
^^^^^^^^^^^^

A list can contain a stack within an action. This is useful when you need to
display meta text next to your action item.

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
^^^^^^^^^

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

Simple avatar list
^^^^^^^^^^^^^^^^^^

A simple list utilizing :py:class:`ListItemIcon <ipyvuetify.ListItemIcon>`,
:py:class:`ListItemTitle <ipyvuetify.ListItemTitle>` and
:py:class:`ListItemAvatar <ipyvuetify.ListItemAvatar>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/simple_avatar_list.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/simple_avatar_list.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/simple_avatar_list.vue

Single line list
^^^^^^^^^^^^^^^^

Here we combine :py:class:`ListItemAvatar <ipyvuetify.ListItemAvatar>` and
:py:class:`ListItemIcon <ipyvuetify.ListItemIcon>` in a single-line list.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/single_line_list.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/single_line_list.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/single_line_list.vue

Subheadings and dividers
^^^^^^^^^^^^^^^^^^^^^^^^

Lists can contain multiple subheaders and dividers.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: List/subheadings_and_dividers.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: List/subheadings_and_dividers.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: List/subheadings_and_dividers.vue

