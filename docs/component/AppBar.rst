AppBar
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify App Bar documentation <https://v2.vuetifyjs.com/en/components/app-bars/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`AppBar <ipyvuetify.AppBar>` component is pivotal to any graphical user interface (GUI),
as it generally is the primary source of site navigation. The app-bar component works great in conjunction
with a :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>` for providing site navigation in
your application.

.. api::

    :py:class:`ipyvuetify.AppBar`
    :py:class:`ipyvuetify.AppBarNavIcon`

Usage
-----

The :py:class:`AppBar <ipyvuetify.AppBar>` component is used for application-wide actions and information.

.. jupyter-execute:: AppBar/usage.py
    :raises:

AppBarNavIcon
-------------

A styled icon button component created specifically for use with :py:class:`Toolbar <ipyvuetify.Toolbar>`
and :py:class:`AppBar <ipyvuetify.AppBar>`. Typically seen on the left side of a toolbar as a hamburger
menu, it is often used to control the state of a navigation drawer. The default slot can be used to
customize the icon and function of this component. This is a **functional** component.

Dense
-----

You can make app-bar dense. A dense app bar has lower height than regular one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AppBar/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AppBar/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AppBar/dense.vue

Elevate on Scroll
-----------------

When using the ``elevate_on_scroll`` prop, the :py:class:`AppBar <ipyvuetify.AppBar>` will rest at an
elevation of 0dp until the user begins to scroll down. Once scrolling, the bar raises to 4dp.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AppBar/elevate_on_scroll.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AppBar/elevate_on_scroll.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AppBar/elevate_on_scroll.vue

Prominent
---------

An :py:class:`AppBar <ipyvuetify.AppBar>` with the ``prominent`` prop can opt to have its height shrunk
as the user scrolls down. This provides a smooth transition to taking up less visual space when the
user is scrolling through content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: AppBar/prominent.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: AppBar/prominent.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: AppBar/prominent.vue

Collapse
--------

With the ``collapse`` and ``collapse_on_scroll`` props you can easily control the state of toolbar
that the user interacts with.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute:: AppBar/collapse.py
            :raises:
            :hide-code:

    .. tab-item:: Python

        .. literalinclude:: AppBar/collapse.py

    .. tab-item:: Vue template

        .. literalinclude:: AppBar/collapse.vue

Hiding on scroll
----------------

:py:class:`AppBar <ipyvuetify.AppBar>` can be hidden on scroll. Use the ``hide_on_scroll``
property for this.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute:: AppBar/hiding_on_scroll.py
            :raises:
            :hide-code:

    .. tab-item:: Python

        .. literalinclude:: AppBar/hiding_on_scroll.py

    .. tab-item:: Vue template

        .. literalinclude:: AppBar/hiding_on_scroll.vue

Images
------

:py:class:`AppBar <ipyvuetify.AppBar>` can contain background images. You can set source via the
``src`` prop. If you need to customize the :py:class:`Img <ipyvuetify.Img>` properties, the app-bar
provides you with an ``img`` slot.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute:: AppBar/images.py
            :raises:
            :hide-code:

    .. tab-item:: Python

        .. literalinclude:: AppBar/images.py

    .. tab-item:: Vue template

        .. literalinclude:: AppBar/images.vue

Fade image on scroll
--------------------

The background image of a :py:class:`AppBar <ipyvuetify.AppBar>` can fade on scroll. Use the
``fade_img_on_scroll`` property for this.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute:: AppBar/fade_image_on_scroll.py
            :raises:
            :hide-code:

    .. tab-item:: Python

        .. literalinclude:: AppBar/fade_image_on_scroll.py

    .. tab-item:: Vue template

        .. literalinclude:: AppBar/fade_image_on_scroll.vue

Inverted scrolling
------------------

When using the ``inverted_scroll`` property, the bar will hide until the user scrolls past the
designated threshold. Once past the threshold, the :py:class:`AppBar <ipyvuetify.AppBar>` will
continue to display until the users scrolls up past the threshold. If no ``scroll_threshold`` value
is supplied a default value of 0 will be used.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute:: AppBar/inverted_scrolling.py
            :raises:
            :hide-code:

    .. tab-item:: Python

        .. literalinclude:: AppBar/inverted_scrolling.py

    .. tab-item:: Vue template

        .. literalinclude:: AppBar/inverted_scrolling.vue

Scroll threshold
----------------

:py:class:`AppBar <ipyvuetify.AppBar>` can have scroll threshold. It will start reacting to scroll
only after defined via ``scroll_threshold`` property amount of pixels.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute:: AppBar/scroll_threshold.py
            :raises:
            :hide-code:

    .. tab-item:: Python

        .. literalinclude:: AppBar/scroll_threshold.py

    .. tab-item:: Vue template

        .. literalinclude:: AppBar/scroll_threshold.vue

Menu
----

You can easily extend the functionality of app bar by adding :py:class:`Menu <ipyvuetify.Menu>`
there. Click on last icon to see it in action.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute:: AppBar/menu.py
            :raises:
            :hide-code:

    .. tab-item:: Python

        .. literalinclude:: AppBar/menu.py

    .. tab-item:: Vue template

        .. literalinclude:: AppBar/menu.vue

Toggle navigation drawers
--------------------------

Using the functional component :py:class:`AppBarNavIcon <ipyvuetify.AppBarNavIcon>` you can toggle the
state of other components such as a :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>`.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute:: AppBar/toggle_navigation_drawers.py
            :raises:
            :hide-code:

    .. tab-item:: Python

        .. literalinclude:: AppBar/toggle_navigation_drawers.py

    .. tab-item:: Vue template

        .. literalinclude:: AppBar/toggle_navigation_drawers.vue

