Icon
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Icon documentation
    <https://v2.vuetifyjs.com/en/components/icons/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Icon <ipyvuetify.Icon>` component provides a large set of
glyphs to provide context to various aspects of your application. For a list of
all available icons, visit the official `Material Design Icons
<https://pictogrammers.com/library/mdi/>`__ page. To use any of these icons simply
use the ``mdi-`` prefix followed by the icon name.

.. api::

    - :py:class:`ipyvuetify.Icon`

Usage
-----

Icons come in two themes (light and dark), and five different sizes (x-small,
small, medium (default), large, and x-large).

.. jupyter-execute:: Icon/usage.py
    :raises:

Examples
--------

Color
^^^^^

Using color helpers you can change the color of an icon from the standard dark
and light themes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/color.vue

Click
^^^^^

Binding any click event to :py:class:`Icon <ipyvuetify.Icon>` will
automatically change the cursor to a pointer.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/click.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/click.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/click.vue

Buttons
^^^^^^^

Icons can be used inside of buttons to add emphasis to the action.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/buttons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/buttons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/buttons.vue

Font Awesome
^^^^^^^^^^^^

`Font Awesome <https://fontawesome.com/icons/>`__ is also supported. Simply use
the ``fa-`` prefixed icon name. Please note that you still need to include the
Font Awesome icons in your project. For more information on how to install it,
please navigate to the `installation page
<https://v2.vuetifyjs.com/en/features/icon-fonts/#install-font-awesome-5-icons>`__.

.. danger::

    change of icon font is not yet supported by ipyvuetify.

Material Design
^^^^^^^^^^^^^^^

`Material Design <https://material.io/tools/icons/?style=baseline>`__ is also
supported. For more information on how to install it please `navigate here
<https://v2.vuetifyjs.com/en/features/icon-fonts/#install-material-icons>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/material_design.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/material_design.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/material_design.vue

Accessibility
-------------

Icons can convey all sorts of meaningful information, so it's important that
they reach the largest amount of people possible. There are two use cases you'll
want to consider:

- **Decorative Icons** are only being used for visual or branding reinforcement.
  If they were removed from the page, users would still understand and be able
  to use your page.
- **Semantic Icons** are ones that you're using to convey meaning, rather than
  just pure decoration. This includes icons without text next to them used as
  interactive controls — buttons, form elements, toggles, etc.

.. danger::

    WAI-ARIA Authoring Practices 1.1 notes that ``aria-hidden="false"`` currently
    `behaves inconsistently across browsers <https://www.w3.org/TR/wai-aria-1.1/#aria-hidden>`__.

