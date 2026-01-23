import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Hotkey(anywidget.AnyWidget):
    """The Hotkey component.

    

    Args:
        children: The child nodes of the DOM element.
        keys: String representing keyboard shortcuts to display. Supports multiple formats:
- **Single keys:** `"k"`, `"enter"`, `"escape"`
- **Key combinations:** `"ctrl+k"`, `"meta+shift+p"`, `"alt+arrowup"`
- **Sequential actions:** `"ctrl+k-then-p"` (use dash for 'then' relationships)
- **Multiple shortcuts:** `"ctrl+k meta+p"` (space-separated for alternative shortcuts)

Supports platform-aware key names like `meta` (becomes Cmd on Mac, Ctrl on PC) and `alt` (becomes Option on Mac).
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Controls the visual style and presentation of the hotkey component. Supports standard Vuetify variants plus a special contained variant:

**Standard Variants** (apply styling to individual key elements):
- **elevated (default):** Raised appearance with shadow, good for standalone hotkey displays
- **flat:** Solid background without shadow, clean and minimal
- **tonal:** Subtle tinted background without border, balances visibility with restraint
- **outlined:** Border-only styling without elevation, lightweight and unobtrusive
- **text:** Minimal styling with text color emphasis only, blends with content
- **plain:** No background or border, most subtle option

**Special Variant** (different visual structure):
- **contained:** Follows MDN's nested `<kbd>` pattern - wraps all keys in a single styled container with unstyled nested elements. Creates a cohesive visual unit that clearly groups related keys together. Cannot be combined with standard variants. Ideal for complex key combinations where you want to show the entire sequence as one unit.
        disabled: Applies a disabled visual state to the component.
        prefix: Text to display before the hotkey.
        suffix: Text to display after the hotkey.
        display_mode: Controls how keyboard keys are visually represented. Affects the entire component's appearance:
- **icon:** Uses SVG icons for keys when appropriate (default)
- **symbol:** Uses Unicode symbols (⌘, ⌃, ⇧, ⌥) - Allows you to manage presentation of modifier keys with fonts
- **text:** Uses full text labels (Command, Control, Shift, Alt) - most accessible and descriptive
        key_map: Custom key mapping object that defines how individual keys should be displayed. Users can import and modify the exported `hotkeyMap` to create custom configurations. Each key maps to a `PlatformKeyConfig` object with:

```typescript
{
  mac?: { symbol?: string, icon?: string, text: string },
  default: { symbol?: string, icon?: string, text: string }
}
```

**Usage Example:**
```typescript
import { hotkeyMap } from 'vuetify/labs/VHotkey'

const customKeyMap = {
  ...hotkeyMap,
  'custom-key': {
    default: { text: 'Custom', icon: 'custom-icon' },
    mac: { text: 'Custom', symbol: '⚡' }
  }
}
```

This enables:
- **Custom key definitions:** Add support for application-specific keys
- **Localization:** Override text representations for different languages
- **Brand customization:** Change how modifier keys appear
- **Platform-specific styling:** Different representations for Mac vs other platforms

Recommended to set at the application level via component defaults rather than per-instance for consistency.
        platform: Controls platform-specific rendering behavior for keyboard shortcuts. Accepts three values:
- **`'auto'` (default):** Automatically detects the user's platform based on user agent and renders appropriately
- **`'mac'`:** Forces Mac-style rendering (Command symbols, icons, Option key, etc.)
- **`'pc'`:** Forces PC-style rendering (Ctrl text, Alt key, etc.)

This is particularly useful for:
- **Cross-platform testing:** Verify how shortcuts appear on different platforms
- **Design consistency:** Ensure specific platform rendering in demos and prototypes
- **Development workflow:** Test platform-specific behaviors without switching devices
- **Documentation:** Show platform-specific examples in help content
        inline: Optimizes the component for seamless integration within text content and documentation. Applies compact styling with baseline alignment, constrained height (1lh), and responsive typography that inherits from parent text. Ideal for help documentation, tooltips, and instructional content. When using multiple inline hotkeys in the same paragraph, increase line-height to prevent visual overlap on text wrapping.

    Returns:
        A VHotkey widget.

    seealso:
        `https://vuetifyjs.com/api/v-hotkey`__
    """

    _esm = bundled_path / "VHotkey.js"
    _css = bundled_path / "VHotkey-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    keys = traitlets.Unicode(allow_none=True).tag(sync=True)
    """String representing keyboard shortcuts to display. Supports multiple formats:
- **Single keys:** `"k"`, `"enter"`, `"escape"`
- **Key combinations:** `"ctrl+k"`, `"meta+shift+p"`, `"alt+arrowup"`
- **Sequential actions:** `"ctrl+k-then-p"` (use dash for 'then' relationships)
- **Multiple shortcuts:** `"ctrl+k meta+p"` (space-separated for alternative shortcuts)

Supports platform-aware key names like `meta` (becomes Cmd on Mac, Ctrl on PC) and `alt` (becomes Option on Mac)."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls the visual style and presentation of the hotkey component. Supports standard Vuetify variants plus a special contained variant:

**Standard Variants** (apply styling to individual key elements):
- **elevated (default):** Raised appearance with shadow, good for standalone hotkey displays
- **flat:** Solid background without shadow, clean and minimal
- **tonal:** Subtle tinted background without border, balances visibility with restraint
- **outlined:** Border-only styling without elevation, lightweight and unobtrusive
- **text:** Minimal styling with text color emphasis only, blends with content
- **plain:** No background or border, most subtle option

**Special Variant** (different visual structure):
- **contained:** Follows MDN's nested `<kbd>` pattern - wraps all keys in a single styled container with unstyled nested elements. Creates a cohesive visual unit that clearly groups related keys together. Cannot be combined with standard variants. Ideal for complex key combinations where you want to show the entire sequence as one unit."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies a disabled visual state to the component."""

    prefix = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text to display before the hotkey."""

    suffix = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text to display after the hotkey."""

    display_mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls how keyboard keys are visually represented. Affects the entire component's appearance:
- **icon:** Uses SVG icons for keys when appropriate (default)
- **symbol:** Uses Unicode symbols (⌘, ⌃, ⇧, ⌥) - Allows you to manage presentation of modifier keys with fonts
- **text:** Uses full text labels (Command, Control, Shift, Alt) - most accessible and descriptive"""

    key_map = traitlets.Any(allow_none=True).tag(sync=True)
    """Custom key mapping object that defines how individual keys should be displayed. Users can import and modify the exported `hotkeyMap` to create custom configurations. Each key maps to a `PlatformKeyConfig` object with:

```typescript
{
  mac?: { symbol?: string, icon?: string, text: string },
  default: { symbol?: string, icon?: string, text: string }
}
```

**Usage Example:**
```typescript
import { hotkeyMap } from 'vuetify/labs/VHotkey'

const customKeyMap = {
  ...hotkeyMap,
  'custom-key': {
    default: { text: 'Custom', icon: 'custom-icon' },
    mac: { text: 'Custom', symbol: '⚡' }
  }
}
```

This enables:
- **Custom key definitions:** Add support for application-specific keys
- **Localization:** Override text representations for different languages
- **Brand customization:** Change how modifier keys appear
- **Platform-specific styling:** Different representations for Mac vs other platforms

Recommended to set at the application level via component defaults rather than per-instance for consistency."""

    platform = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls platform-specific rendering behavior for keyboard shortcuts. Accepts three values:
- **`'auto'` (default):** Automatically detects the user's platform based on user agent and renders appropriately
- **`'mac'`:** Forces Mac-style rendering (Command symbols, icons, Option key, etc.)
- **`'pc'`:** Forces PC-style rendering (Ctrl text, Alt key, etc.)

This is particularly useful for:
- **Cross-platform testing:** Verify how shortcuts appear on different platforms
- **Design consistency:** Ensure specific platform rendering in demos and prototypes
- **Development workflow:** Test platform-specific behaviors without switching devices
- **Documentation:** Show platform-specific examples in help content"""

    inline = traitlets.Bool(allow_none=True).tag(sync=True)
    """Optimizes the component for seamless integration within text content and documentation. Applies compact styling with baseline alignment, constrained height (1lh), and responsive typography that inherits from parent text. Ideal for help documentation, tooltips, and instructional content. When using multiple inline hotkeys in the same paragraph, increase line-height to prevent visual overlap on text wrapping."""

    def __init__(
        self,
        children=None,
        keys=None,
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        color=None,
        variant="elevated",
        disabled=False,
        prefix=None,
        suffix=None,
        display_mode="icon",
        key_map="{  ctrl: {    mac: {symbol: '⌃', icon: '$ctrl', text: '$vuetify.hotkey.ctrl'},    default: {text: 'Ctrl'}  },  meta: {    mac: {      symbol: '⌘',      icon: '$command',      text: '$vuetify.hotkey.command'    },    default: {text: 'Ctrl'}  },  cmd: {    mac: {      symbol: '⌘',      icon: '$command',      text: '$vuetify.hotkey.command'    },    default: {text: 'Ctrl'}  },  shift: {    mac: {symbol: '⇧', icon: '$shift', text: '$vuetify.hotkey.shift'},    default: {text: 'Shift'}  },  alt: {    mac: {symbol: '⌥', icon: '$alt', text: '$vuetify.hotkey.option'},    default: {text: 'Alt'}  },  enter: {    default: {symbol: '↵', icon: '$enter', text: '$vuetify.hotkey.enter'}  },  arrowup: {    default: {      symbol: '↑',      icon: '$arrowup',      text: '$vuetify.hotkey.upArrow'    }  },  arrowdown: {    default: {      symbol: '↓',      icon: '$arrowdown',      text: '$vuetify.hotkey.downArrow'    }  },  arrowleft: {    default: {      symbol: '←',      icon: '$arrowleft',      text: '$vuetify.hotkey.leftArrow'    }  },  arrowright: {    default: {      symbol: '→',      icon: '$arrowright',      text: '$vuetify.hotkey.rightArrow'    }  },  backspace: {    default: {      symbol: '⌫',      icon: '$backspace',      text: '$vuetify.hotkey.backspace'    }  },  escape: {default: {text: '$vuetify.hotkey.escape'}},  ' ': {    mac: {symbol: '␣', icon: '$space', text: '$vuetify.hotkey.space'},    default: {text: '$vuetify.hotkey.space'}  },  '-': {default: {text: '-'}}}",
        platform="auto",
        inline=False,
        **kwargs
    ):
        """Initialize a Hotkey widget."""
        self.children = children
        self.keys = keys
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.color = color
        self.variant = variant
        self.disabled = disabled
        self.prefix = prefix
        self.suffix = suffix
        self.display_mode = display_mode
        self.key_map = key_map
        self.platform = platform
        self.inline = inline

        super().__init__(**kwargs)