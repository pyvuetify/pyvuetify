Menu
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Menus documentation
    <https://v2.vuetifyjs.com/en/components/menus/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Menu <ipyvuetify.Menu>` component shows a menu at the position
of the element used to activate it.

.. api::

    :py:class:`ipyvuetify.Menu`

Usage
-----

Remember to put the element that activates the menu in the ``activator`` slot.

.. jupyter-execute:: Menu/usage.py
    :raises:

Examples
--------

Absolute
^^^^^^^^

Menus can also be placed absolutely on top of the activator element using the
``absolute`` prop. Try clicking anywhere on the image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/absolute.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/absolute.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/absolute.vue

Close on click
^^^^^^^^^^^^^^

Menu can be closed when lost focus.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/close_on_click.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/close_on_click.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/close_on_click.vue

Close on content click
^^^^^^^^^^^^^^^^^^^^^^

You can configure whether :py:class:`Menu <ipyvuetify.Menu>` should be closed
when its content is clicked.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/close_on_content_click.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/close_on_content_click.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/close_on_content_click.vue

Disabled
^^^^^^^^

You can disable the menu. Disabled menus can't be opened.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/disabled.vue

Offset x
^^^^^^^^

Menu can be offset by the X axis to make the activator visible.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/offset_x.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/offset_x.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/offset_x.vue

Offset y
^^^^^^^^

Menu can be offset by the Y axis to make the activator visible.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/offset_y.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/offset_y.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/offset_y.vue

Open on hover
^^^^^^^^^^^^^

Menus can be accessed using hover instead of clicking with the ``open-on-hover``
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/open_on_hover.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/open_on_hover.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/open_on_hover.vue

Rounded
^^^^^^^

Menus can have their border-radius set by the ``rounded`` prop. Additional
information about rounded classes is on the `Border Radius page
<https://v2.vuetifyjs.com/en/styles/border-radius/>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/rounded.vue

Activator and tooltip
^^^^^^^^^^^^^^^^^^^^^

With the new ``v-slot`` syntax, nested activators such as those seen with a
:py:class:`Menu <ipyvuetify.Menu>` and :py:class:`Tooltip <ipyvuetify.Tooltip>`
attached to the same activator button, need a particular setup in order to
function correctly. Note: this same syntax is used for other nested activators
such as :py:class:`Dialog <ipyvuetify.Dialog>` w/ :py:class:`Tooltip
<ipyvuetify.Tooltip>`.

.. todo::

    Need experimenting on the double activator setup to provide a proper example
    here. Please help me improve this section :fas:`coffee`

Custom transitions
^^^^^^^^^^^^^^^^^^

Vuetify comes with 3 standard transitions, scale, slide-x and slide-y. You can
also create your own and pass it as the transition argument. For an example of
how the stock transitions are constructed, visit `here
<https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/custom_transitions.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/custom_transitions.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/custom_transitions.vue

Popover menu
^^^^^^^^^^^^

A menu can be configured to be static when opened, allowing it to function as a
popover. This can be useful when there are multiple interactive items within the
menu contents.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/popover_menu.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/popover_menu.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/popover_menu.vue

Use In components
^^^^^^^^^^^^^^^^^

Menus can be placed within almost any component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/use_in_components.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/use_in_components.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/use_in_components.vue

Accessibility
-------------

By default, :py:class:`Menu <ipyvuetify.Menu>` components are detached and
moved to the root of your application. In order to properly support `inserting
dynamic content into the DOM
<https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR26>`__, you
must use the ``attach`` prop. This will ensure that focus transfers from the
activator to the content when pressing the tab key.
