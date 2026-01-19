NavigationDrawer
================

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Navigation
    drawers documentation
    <https://v2.vuetifyjs.com/en/components/navigation-drawers/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>` component is
what your users will utilize to navigate through the application. The
navigation-drawer is pre-configured to work with or without vue-router right
out the box. For the purpose of display, some examples are wrapped in a
:py:class:`Card <ipyvuetify.Card>` element. Within your application you will
generally place the :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>`
as a direct child of :py:class:`App <ipyvuetify.App>`.

.. api::

    :py:class:`ipyvuetify.NavigationDrawer`

Usage
-----

The navigation drawer is primarily used to house links to the pages in your
application. Using ``null`` as the starting value for its v-model will
initialize the drawer as closed on mobile and as open on desktop. It is common
to pair drawers with the :py:class:`List <ipyvuetify.List>` component using the
nav property.

.. jupyter-execute:: NavigationDrawer/usage.py
    :raises:

.. warning::

    If you are using :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>`
    with app property enabled, you don't need to use absolute prop as in examples.

.. note::

    The expand-on-hover prop does not alter the content area of
    :py:class:`Main <ipyvuetify.Main>`. To have content area respond to
    expand-on-hover, bind mini-variant.sync to a data prop.

Examples
--------

Bottom drawer
^^^^^^^^^^^^^

Using the bottom prop, we are able to relocate our drawer on mobile devices to
come from the bottom of the screen. This is an alternative style and only
activates once the mobile-breakpoint is met.

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
^^^^^^^^^^^^^^^

Places the component in mini-variant mode and expands once hovered. This does
not alter the content area of :py:class:`Main <ipyvuetify.Main>`. The width can
be controlled with the mini-variant-width property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/expand_on_hover.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/expand_on_hover.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/expand_on_hover.vue

Images
^^^^^^

Apply a custom background to your drawer via the src prop. If you need to
customize :py:class:`Img <ipyvuetify.Img>`'s properties you can use the ``img``
slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/images.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/images.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/images.vue

Mini variant
^^^^^^^^^^^^

When using the mini-variant prop, the drawer will shrink (default 56px) and
hide everything inside of :py:class:`List <ipyvuetify.List>` except the first
element. In this example we use the .sync modifier that allows us to tie the
expanding/contracting of the drawer programmatically.

.. todo::

    The .sync modifier is not yet implemented in ipyvuetify. This example cannot be
    represented in a static documenation.

Permanent and floating
^^^^^^^^^^^^^^^^^^^^^^

By default, a navigation drawer has a 1px right border that separates it from
content. In this example we want to detach the drawer from the left side and
let it float on its own. The floating property removes the right border (or
left if using right).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/permanent_and_floating.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/permanent_and_floating.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/permanent_and_floating.vue

Right
^^^^^

Navigation drawers can also be positioned on the right side of your application
(or an element). This is also useful for creating a side-sheet with auxiliary
information that may not have any navigation links. When using RTL you must
explicitly define right for your drawer.

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
^^^^^^^^^

A temporary drawer sits above its application and uses a scrim (overlay) to
darken the background. This drawer behavior is mimicked by default when on
mobile. Clicking outside of the drawer will cause it to close.

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
^^^^^^^^^^^^^^

Navigation drawers can be customized to fit any application's design. Here we
apply a custom background color and an appended content area using the append
slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/colored_drawer.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/colored_drawer.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/colored_drawer.vue

Combined drawer
^^^^^^^^^^^^^^^

In this example we define a custom width to accommodate our nested drawer.
Using :py:class:`Row <ipyvuetify.Row>` we ensure that the drawer and list stack
horizontally next to each other.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NavigationDrawer/combined_drawer.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NavigationDrawer/combined_drawer.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NavigationDrawer/combined_drawer.vue

