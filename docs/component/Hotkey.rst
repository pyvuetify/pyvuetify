Hotkey
======

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/hotkeys/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Hotkey` component renders keyboard shortcuts in a visually consistent and accessible way. It handles complex key combination parsing, platform-specific differences (Mac vs PC), and provides multiple display modes for different design needs.

.. api::

    :py:class:`pyvuetify.Hotkey`

Props
-----

The component provides several props to customize how keyboard shortcuts are displayed and parsed. This component is designed to work seamlessly across different platforms, automatically adjusting key representations based on the user's operating system.


Keys
----

The **keys** prop accepts a string representing keyboard shortcuts in various formats. See `Hotkeys <https://vuetifyjs.com/features/hotkey/#key-combination-syntax>`__ for detailed parsing rules.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Hotkey/keys.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Hotkey/keys.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Hotkey/keys.vue


Display modes
-------------

The **display-mode** prop controls how keys are visually represented. Choose from **icon** (default), **symbol**, or **text** modes:

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Hotkey/display_mode.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Hotkey/display_mode.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Hotkey/display_mode.vue


Platform awareness
------------------

The component automatically detects the user's platform and adjusts key representations accordingly:

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Hotkey/platform_aware.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Hotkey/platform_aware.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Hotkey/platform_aware.vue


Custom key mapping
------------------

Use the **key-map** prop to customize how specific keys are displayed. You can import and modify the exported ``hotkeyMap`` to create custom configurations:

```typescript
import { hotkeyMap } from 'vuetify/labs/VHotkey'

const customKeyMap = {
  ...hotkeyMap,
  ctrl: {
    default: { text: 'Control', icon: '$ctrl' },
    mac: { symbol: '⌃', icon: '$ctrl', text: 'Control' }
  }
}
```

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Hotkey/key_map.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Hotkey/key_map.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Hotkey/key_map.vue


Inline display
--------------

The **inline** prop optimizes the component for integration within text content, documentation, and flowing paragraphs. This mode applies specialized styling for seamless text flow and improved readability:



**Layout considerations:** When using multiple inline hotkeys within the same paragraph, consider increasing the ``line-height`` of the containing text to provide adequate vertical spacing. This prevents visual overlap when hotkey components wrap to new lines, ensuring clean separation and improved readability.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Hotkey/inline.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Hotkey/inline.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Hotkey/inline.vue

