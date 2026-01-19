Tabs
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Tabs
    documentation <https://v2.vuetifyjs.com/en/components/tabs/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Tabs <ipyvuetify.Tabs>` component is used for hiding content
behind a selectable item. This can also be used as a pseudo-navigation for a
page, where the tabs are links and the tab-items are the content.

.. api::

    - :py:class:`ipyvuetify.Tabs`
    - :py:class:`ipyvuetify.Tab`
    - :py:class:`ipyvuetify.TabItem`
    - :py:class:`ipyvuetify.TabsItems`
    - :py:class:`ipyvuetify.TabsSlider`

.. warning::

    When using the ``dark`` prop and NOT providing a custom color, the
    :py:class:`Tabs <ipyvuetify.Tabs>` component will default its color to white.

.. warning::

    When using :py:class:`TabItem <ipyvuetify.TabItem>` that contain required
    input fields you must use the ``eager`` prop in order to validate the required
    fields that are not yet visible.

Usage
-----

The :py:class:`Tabs <ipyvuetify.Tabs>` component is a styled extension of
:py:class:`ItemGroup <ipyvuetify.ItemGroup>`. It provides an easy to use
interface for organizing groups of content.

.. jupyter-execute:: Tabs/usage.py
    :raises:

Examples
--------

Align with title
^^^^^^^^^^^^^^^^

Make :py:class:`Tabs <ipyvuetify.Tabs>` lined up with the
:py:class:`ToolbarTitle <ipyvuetify.ToolbarTitle>` component using the
``align_with_title`` prop (:py:class:`AppBarNavIcon <ipyvuetify.AppBarNavIcon>`
or :py:class:`Btn <ipyvuetify.Btn>` must be used in
:py:class:`Toolbar <ipyvuetify.Toolbar>`).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/align_with_title.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/align_with_title.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/align_with_title.vue

Center active
^^^^^^^^^^^^^

The ``center_active`` prop will make the active tab always centered.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/center_active.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/center_active.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/center_active.vue

Custom icons
^^^^^^^^^^^^

``prev_icon`` and ``next_icon`` can be used for applying custom pagination
icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/custom_icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/custom_icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/custom_icons.vue

Fixed tabs
^^^^^^^^^^

The ``fixed_tabs`` prop forces :py:class:`Tab <ipyvuetify.Tab>` to take up
all available space up to the maximum width (300px).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/fixed_tabs.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/fixed_tabs.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/fixed_tabs.vue

Grow
^^^^

The ``grow`` prop will make the tab items take up all available space up to a
maximum width of 300px.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/grow.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/grow.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/grow.vue

Icons and text
^^^^^^^^^^^^^^

Using ``icons_and_text`` prop increases the :py:class:`Tabs <ipyvuetify.Tabs>`
height to 72px to allow for both icons as well as text to be used.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/icons_and_text.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/icons_and_text.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/icons_and_text.vue

Pagination
^^^^^^^^^^

If the tab items overflow their container, pagination controls will appear on
desktop. For mobile devices, arrows will only display with the ``show_arrows``
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/pagination.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/pagination.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/pagination.vue

Right
^^^^^

The ``right`` prop aligns the tabs to the right.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/right.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/right.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/right.vue

Vertical Tabs
^^^^^^^^^^^^^

The ``vertical`` prop allows for :py:class:`Tab <ipyvuetify.Tab>` components
to stack vertically.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/vertical_tabs.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/vertical_tabs.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/vertical_tabs.vue

Misc
----

Content
^^^^^^^

It is common to put :py:class:`Tabs <ipyvuetify.Tabs>` inside the extension
slot of :py:class:`Toolbar <ipyvuetify.Toolbar>`. Using
:py:class:`Toolbar <ipyvuetify.Toolbar>`'s ``tabs`` prop auto adjusts its
height to 48px to match :py:class:`Tabs <ipyvuetify.Tabs>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/content.vue

Desktop tabs
^^^^^^^^^^^^

You can represent :py:class:`Tab <ipyvuetify.Tab>` actions by using single
icons. This is useful when it is easy to correlate content to each tab.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/desktop_tabs.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/desktop_tabs.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/desktop_tabs.vue

Dynamic height
^^^^^^^^^^^^^^

When changing your :py:class:`TabItem <ipyvuetify.TabItem>`, the content area
will smoothly scale to the new size.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/dynamic_height.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/dynamic_height.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/dynamic_height.vue

Dynamic Tabs
^^^^^^^^^^^^

Tabs can be dynamically added and removed. This allows you to update to any
number and the :py:class:`Tabs <ipyvuetify.Tabs>` component will react. In
this example when we add a new tab, we automatically change our model to
match. As we add more tabs and overflow the container, the selected item will
be automatically scrolled into view. Remove all :py:class:`Tab <ipyvuetify.Tab>`
and the slider will disappear.

.. todo::

    Require an active kernel to be documented properly.


Overflow to menu
^^^^^^^^^^^^^^^^

You can use a menu to hold additional tabs, swapping them out on the fly.

.. todo::

    Require an active kernel to be documented properly.

Tab Items
^^^^^^^^^

The :py:class:`TabsItems <ipyvuetify.TabsItems>` component allows for you to
customize the content per tab. Using a shared ``v_model``, the
:py:class:`TabsItems <ipyvuetify.TabsItems>` will sync with the currently
selected :py:class:`Tab <ipyvuetify.Tab>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tabs/tab_items.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tabs/tab_items.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tabs/tab_items.vue

