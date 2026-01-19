BottomNavigation
================

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/bottom-navigation/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` component is an alternative to the sidebar.
It is primarily used for mobile applications and comes in three variants, icons and text, and shift.

.. api::

    :py:class:`ipyvuetify.BottomNavigation`

Usage
-----

While :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` is meant to be used with vue-router,
you can also programmatically control the active state of the buttons by using the ``v_model`` property.
A button is given a default value of its index with ``v-bottom-navigation``.

.. jupyter-execute:: BottomNavigation/usage.py
    :raises:

Color
-----

The ``color`` prop applies a color to the background of the bottom navigation. We recommend using the
``light`` and ``dark`` props to properly contrast text color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomNavigation/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomNavigation/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomNavigation/color.vue

Grow
----

Using the ``grow`` property forces :py:class:`Btn <ipyvuetify.Btn>` components to fill all available
space. Buttons have a maximum width of 168px per the Bottom Navigation Material Design specification.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomNavigation/grow.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomNavigation/grow.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomNavigation/grow.vue

Hide on scroll
--------------

The :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` component hides when scrolling up when
using the ``hide_on_scroll`` property. This is similar to the scrolling techniques that are supported
in :py:class:`AppBar <ipyvuetify.AppBar>`. In the following example, scroll up and down to see this
behavior.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomNavigation/hide_on_scroll.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomNavigation/hide_on_scroll.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomNavigation/hide_on_scroll.vue

Horizontal
----------

Adjust the style of buttons and icons by using the ``horizontal`` prop. This positions button text
inline with the provided :py:class:`Icon <ipyvuetify.Icon>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomNavigation/horizontal.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomNavigation/horizontal.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomNavigation/horizontal.vue

Scroll threshold
----------------

Modify the ``scroll_threshold`` property to increase the distance a user must scroll before the
:py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` is hidden.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomNavigation/scroll_threshold.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomNavigation/scroll_threshold.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomNavigation/scroll_threshold.vue

Shift
-----

The ``shift`` prop hides button text when not active. This provides an alternative visual style to
the :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` component.

.. note::
    For this to work, :py:class:`Btn <ipyvuetify.Btn>` text is required to be wrapped in a
    :py:class:`Html <ipyvuetify.Html>` `span` tag.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomNavigation/shift.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomNavigation/shift.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomNavigation/shift.vue

Toggle
------

The display state of :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` can be toggled using
the ``input_value`` prop. You can also control the currently active button using ``v_model``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomNavigation/toggle.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomNavigation/toggle.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomNavigation/toggle.vue

