NavigationDrawer
================

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/navigation-drawers/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.NavigationDrawer` component is what your users will utilize to navigate through the application.

.. api::

    :py:class:`pyvuetify.NavigationDrawer`

Bottom drawer
-------------

Using the **bottom** prop, we are able to relocate our drawer on mobile devices to come from the bottom of the screen. This is an alternative style and only activates once the **mobile-breakpoint** is met.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/bottom_drawer.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/bottom_drawer.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/bottom_drawer.vue


Expand on hover
---------------

Places the component in **rail** mode and expands once hovered. This **does not** alter the content area of **``Main``**. The width can be controlled with the **rail-width** property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/expand_on_hover.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/expand_on_hover.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/expand_on_hover.vue


Background images
-----------------

Apply a custom background to your drawer via the **image** prop. If you need to customize it further, you can use the ``image`` slot and render your own :py:class:`pyvuetify.Img`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/images.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/images.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/images.vue


Rail variant
------------

When using the **rail** prop, the drawer will shrink (default 56px) and hide everything inside of :py:class:`pyvuetify.List` except the first element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/rail_variant.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/rail_variant.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/rail_variant.vue


Floating
--------

By default, a navigation drawer has a 1px right border that separates it from content. In this example we want to detach the drawer from the left side and let it float on its own. The **floating** property removes the right border (or left if using **position** prop).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/permanent_and_floating.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/permanent_and_floating.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/permanent_and_floating.vue


Location
--------

Navigation drawers can also be positioned on the opposite side of your application (or an element) using the **location** prop. This is useful for creating a side-sheet with auxiliary information that may not have any navigation links.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/right.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/right.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/right.vue


Temporary
---------

A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. This drawer behavior is mimicked by default when on mobile. Clicking outside of the drawer will cause it to close.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/temporary.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/temporary.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/temporary.vue


Colored drawer
--------------

Navigation drawers can be customized to fit any application's design. Here we apply a custom background color and an appended content area using the **append** slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/colored.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/colored.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/colored.vue


Multiple drawers
----------------

In this example we define two navigation-drawers, one using **rail** and one without.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/combined.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/combined.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/combined.vue

