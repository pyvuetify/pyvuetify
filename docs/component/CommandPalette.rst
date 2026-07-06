CommandPalette
==============


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/command-palettes/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.CommandPalette` component provides a keyboard-driven command interface that allows users to quickly search and execute commands. It's commonly used for quick navigation, command execution, and power-user workflows.



::: success
This feature was introduced in v4.0, is a labs component and is available for testing and feedback.
:::

.. api::

    :py:class:`pyvuetify.CommandPalette`

Items
-----

The **items** prop accepts an array of command palette items. Items support action items (interactive commands), subheaders (section labels), and dividers (visual separators).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: CommandPalette/items.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: CommandPalette/items.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: CommandPalette/items.vue


Hotkey
------

Use the **hotkey** prop to register a global keyboard shortcut that toggles the command palette. Individual items can also have their own **hotkey** property for quick access.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: CommandPalette/hotkey.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: CommandPalette/hotkey.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: CommandPalette/hotkey.vue


Controlled close behavior
-------------------------

By default, selecting an actionable item closes the palette. Use **close-on-select** to disable that behavior, or handle **@before-select** and call **preventDefault()** to keep the palette open for external drill-in flows.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: CommandPalette/close_on_select.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: CommandPalette/close_on_select.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: CommandPalette/close_on_select.vue


Slots
-----

The command palette provides several slots for customizing the display of items and other elements.


Item prepend
------------

Use the **#item.prepend** slot to customize the prepend area of each item. This slot receives the current **item** and **index** as slot props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: CommandPalette/item_prepend.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: CommandPalette/item_prepend.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: CommandPalette/item_prepend.vue


Item append
-----------

Similarly **#item.append** slot and allows you to include supplemental information (replaces hotkey).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: CommandPalette/item_append.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: CommandPalette/item_append.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: CommandPalette/item_append.vue


Filtering
---------

The search input automatically filters items based on their **title** and **subtitle** properties. Use **v-model:search** to control or monitor the search query. The **filter-keys** prop can customize which item properties are searched.

The **placeholder** prop customizes the search input's placeholder text, while **no-data-text** customizes the message shown when no items match the search query.


Keyboard navigation
-------------------

The command palette supports full keyboard navigation:

- **Arrow Up/Down**: Navigate through commands
- **Enter**: Execute the selected command
- **Escape**: Close the palette
- **Typing**: Filters commands by title and subtitle
- **Per-item hotkeys**: Execute specific commands directly (when palette is open)

