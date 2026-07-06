BottomNavigation
================


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/bottom-navigation/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.BottomNavigation` component is an alternative to the sidebar. It is primarily used for mobile applications and comes in three variants, **icons** and **text**, and **shift**.

.. api::

    :py:class:`pyvuetify.BottomNavigation`

Color
-----

The **color** prop applies a color to the background of the bottom navigation. We recommend using the **light** and **dark** props to properly contrast text color.

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

Using the **grow** property forces :doc:`Button <Button>` components to *fill* all available space. Buttons have a maximum width of **168px** per the :doc:`BottomNavigation <BottomNavigation>`.



<!-- TODO: Fix this example when scrolling techniques is implemented

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

The :py:class:`pyvuetify.BottomNavigation` component hides when *scrolling up* when using the **hide-on-scroll** property. This is similar to the `scrolling techniques <https://material.io/archive/guidelines/patterns/scrolling-techniques.html>`__ that are supported in :doc:`AppBar <AppBar>`. In the following example, scroll *up and down* to see this behavior.


-->

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

Adjust the style of buttons and icons by using the **horizontal** prop. This positions button text *inline* with the provided :doc:`Icon <Icon>`.



<!-- TODO: Fix this example when scrolling techniques is implemented

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

Modify the **scroll-threshold** property to increase the distance a user must scroll before the :py:class:`pyvuetify.BottomNavigation` is hidden.


-->

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

The **shift** prop hides button text when not active. This provides an alternative visual style to the :py:class:`pyvuetify.BottomNavigation` component.

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

Since :py:class:`pyvuetify.BottomNavigation` supports v-model, use the **active** prop to control the display state.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomNavigation/toggle.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomNavigation/toggle.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomNavigation/toggle.vue

