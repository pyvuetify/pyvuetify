Tab
===


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/tabs/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Tabs` component is used for hiding content behind a selectable item. This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content.

.. api::

    :py:class:`pyvuetify.Tab`

Align tabs
----------

The **align-tabs** prop will align tabs to the ``start``, ``center``, or ``end`` of its container.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/align_tabs_center.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/align_tabs_center.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/align_tabs_center.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/align_tabs_end.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/align_tabs_end.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/align_tabs_end.vue


Align tabs with title
---------------------

Make :py:class:`pyvuetify.Tabs` line up with the :py:class:`pyvuetify.ToolbarTitle` component by setting the **align-tabs** prop to ``title`` (:py:class:`pyvuetify.AppBarNavIcon` or :py:class:`pyvuetify.Btn` must be used in :py:class:`pyvuetify.Toolbar`).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/align_tabs_title.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/align_tabs_title.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/align_tabs_title.vue


Center active
-------------

The **center-active** prop will make the active tab always centered.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/center_active.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/center_active.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/center_active.vue


Custom icons
------------

**prev-icon** and **next-icon** can be used for applying custom pagination icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/icons.vue


Fixed tabs
----------

The **fixed-tabs** prop forces :py:class:`pyvuetify.Tab` items to take up all available space up to 300px width, and centers them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/fixed_tabs.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/fixed_tabs.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/fixed_tabs.vue


Grow
----

The **grow** prop will make the tab items take up all available space with no limit.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/grow.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/grow.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/grow.vue


Stacked
-------

Using **stacked** increases the :py:class:`pyvuetify.Tabs` height to 72px to allow for both icons and text to be displayed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/stacked.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/stacked.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/stacked.vue


Slider Transition
-----------------

With **slider-transition** you can change default animation of the slider so it better fits with the app design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/slider_transition.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/slider_transition.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/slider_transition.vue


Pagination
----------

If the tab items overflow their container, pagination controls will appear on desktop. For mobile devices, arrows will only display with the **show-arrows** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/pagination.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/pagination.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/pagination.vue


Vertical tabs
-------------

The **direction** prop allows for :py:class:`pyvuetify.Tab` components to stack vertically.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/direction.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/direction.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/direction.vue


Spaced
------

Vertical tabs can be customized with **spaced** prop to move the text away from the icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/spaced.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/spaced.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/spaced.vue


Content
-------

It is common to put :py:class:`pyvuetify.Tabs` inside the **extension** slot of :py:class:`pyvuetify.Toolbar`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/content.vue


Mobile tabs
-----------

On mobile you can use :py:class:`pyvuetify.Tab` items with just icons to conserve space.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/mobile.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/mobile.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/mobile.vue


Dynamic Tabs
------------

Tabs can be dynamically added and removed. In this example when we add a new tab, we automatically change our model to match. As we add more tabs and overflow the container, the selected item will be automatically scrolled into view. Remove all :py:class:`pyvuetify.Tab` items and the slider will disappear.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/dynamic.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/dynamic.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/dynamic.vue


Overflow to menu
----------------

You can use a menu to hold additional tabs, swapping them out on the fly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/overflow_to_menu.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/overflow_to_menu.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/overflow_to_menu.vue


Tab and window items
--------------------

Use the **tab** and **item** slots with the **items** prop to reduce the markup required to build tabs.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tab/tabs.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tab/tabs.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tab/tabs.vue

