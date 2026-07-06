Overlay
=======


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/overlays/>`__.
    All examples have been converted to pyvuetify syntax.

:py:class:`pyvuetify.Overlay` is the base for components that float over the rest of the page, such as :py:class:`pyvuetify.Menu` and :py:class:`pyvuetify.Dialog`. It can also be used on its own and comes with everything you need to create a custom popover component.

.. api::

    :py:class:`pyvuetify.Overlay`

Activator prop
--------------

The simplest way of providing an activator. Can be a CSS selector to pass to ``document.querySelector()``, a component instance, or a HTMLElement. The string ``"parent"`` is also accepted to automatically bind to the parent element.

```html




  

```


Activator slot
--------------

For more manual control, the slot can be used instead. ``props`` is an object containing all the relevant ARIA attributes and event handlers, and must be applied to the target element with :py:class:`pyvuetify.Bind` for the component to work correctly.

```html

  
    Overlay is {{ isActive ? 'open' : 'closed' }}
  

```


Static (default)
----------------

``location-strategy="static"``

Overlay content is positioned relative to the browser viewport. ``location`` selects a side and alignment
while ``origin`` helps control transition - e.g. you may want the dialog to appear from the left when snapped
to the left edge.


Connected
---------

``location-strategy="connected"``

The connected strategy is used by :doc:`Menu <Menu>` and :doc:`Tooltip <Tooltip>` to attach the overlay content to an activator element.

``location`` selects a point on the activator, and ``origin`` a point on the overlay content. The content element will be positioned so the two points overlap.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/connected_playground.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/connected_playground.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/connected_playground.vue


Block (default)
---------------

``scroll-strategy="block"``

Scrolling is blocked while the overlay is active, and the scrollbar is hidden. If ``contained`` is also set, scrolling will only be blocked up to the overlay's ``offsetParent` <https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/scroll_block.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/scroll_block.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/scroll_block.vue


Close
-----

``scroll-strategy="close"``

Scrolling when the overlay is active will de-activate it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/scroll_close.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/scroll_close.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/scroll_close.vue


Reposition
----------

``scroll-strategy="reposition"``

When using the ``connected`` location strategy, this scroll strategy will reposition the overlay element to always respect the activator location.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/scroll_reposition.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/scroll_reposition.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/scroll_reposition.vue


None
----

``scroll-strategy="none"``

No scroll strategy is used.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/scroll_none.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/scroll_none.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/scroll_none.vue


Contained
---------

A **contained** overlay is positioned absolutely and contained inside its parent element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/contained.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/contained.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/contained.vue


Advanced
--------

Using the :doc:`Hover <Hover>`, we are able to add a nice scrim over the information card with additional actions the user can take.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/advanced.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/advanced.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/advanced.vue


Loader
------

Using the :py:class:`pyvuetify.Overlay` as a background, add a progress component to easily create a custom loader.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/loader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/loader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/loader.vue

