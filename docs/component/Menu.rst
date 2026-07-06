Menu
====


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/menus/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Menu` component shows a menu at the position of the element used to activate it.

.. api::

    :py:class:`pyvuetify.Menu`

Props
-----

<!-- #### Absolute

Menus can also be placed absolutely on top of the activator element using the **absolute** prop. Try clicking anywhere on the image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/absolute.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/absolute.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/absolute.vue


Absolute without activator
--------------------------

Menus can also be used without an activator by using **absolute** together with the props **position-x** and **position-y**. Try right-clicking anywhere on the image.

 -->

<!-- #### Close on click

Menu can be closed when lost focus.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/absolute_without_activator.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/absolute_without_activator.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/absolute_without_activator.vue

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
----------------------

You can configure whether :py:class:`pyvuetify.Menu` should be closed when its content is clicked.

 -->



.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/close_on_content_click.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/close_on_content_click.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/close_on_content_click.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/disabled.vue


Location
--------

Menu can be offset relative to the activator by using the **location** prop. Read more about **location** :doc:`Overlay <Overlay>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/location.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/location.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/location.vue


Open on hover
-------------

Menus can be accessed using hover instead of clicking with the **open-on-hover** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/open_on_hover.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/open_on_hover.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/open_on_hover.vue


Nested menus
------------

Menus with other menus inside them will not close until their children are closed. The **submenu** prop changes keyboard behaviour to open and close with left/right arrow keys instead of up/down.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/submenu.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/submenu.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/submenu.vue


Positioning Menus with Coordinates
----------------------------------

:py:class:`pyvuetify.Menu` can be positioned relative to a DOM element or explicit ``[x, y]`` coordinates.

* The most common use case is to pass an **event target element**. This allows the menu to anchor itself to the element that was clicked.
* You can also use ``[x, y]`` screen coordinates, though this is less common and typically used for context menus.
* ``:offset`` is used to shift the menu position relative to its anchor, not to define an absolute position.
* Any DOM event with ``clientX`` and ``clientY`` can be used (e.g. ``click``, ``contextmenu``).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/positioningmenu.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/positioningmenu.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/positioningmenu.vue


Activator and tooltip
---------------------

With the new :py:class:`pyvuetify.Slot` syntax, nested activators such as those seen with a :py:class:`pyvuetify.Menu` and :py:class:`pyvuetify.Tooltip` attached to the same activator button, need a particular setup in order to function correctly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/activator_and_tooltip.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/activator_and_tooltip.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/activator_and_tooltip.vue


Transitions
-----------

Vuetify comes with `several standard transitions <https://vuetifyjs.com/styles/transitions#api>`__ that you can use. You can also create your own and pass it as the transition argument. For an example of how the stock transitions are constructed, visit `here <https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/transition.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/transition.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/transition.vue


Popover menu
------------

A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/popover.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/popover.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/popover.vue


Gliding navigation
------------------

A single :py:class:`pyvuetify.Menu` can be reused across multiple activators to create a gliding navigation bar. As the user hovers between buttons, the menu smoothly transitions to the new activator using a CSS transition on its position.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Menu/gliding_nav.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Menu/gliding_nav.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Menu/gliding_nav.vue


Use In components
-----------------

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

