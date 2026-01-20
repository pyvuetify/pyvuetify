Toolbar
=======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Toolbars
    documentation <https://v2.vuetifyjs.com/en/components/toolbars/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Toolbar <ipyvuetify.Toolbar>` component is pivotal to any graphical
user interface (GUI), as it generally is the primary source of site navigation. The
toolbar component works great in conjunction with
:py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>` and
:py:class:`Card <ipyvuetify.Card>`.

.. api::

    - :py:class:`ipyvuetify.Toolbar`
    - :py:class:`ipyvuetify.ToolbarItems`
    - :py:class:`ipyvuetify.ToolbarTitle`

.. warning::

    When :py:class:`Btn <ipyvuetify.Btn>`s with the ``icon`` prop are used inside
    of :py:class:`Toolbar <ipyvuetify.Toolbar>` and
    :py:class:`AppBar <ipyvuetify.AppBar>` they will automatically have their size
    increased and negative margin applied to ensure proper spacing according to the
    Material Design Specification. If you choose to wrap your buttons in any
    container, such as a ``div``, you will need to apply negative margin to that
    container in order to properly align them.

Usage
-----

A toolbar is a flexible container that can be used in a number of ways. By default,
the toolbar is **64px** high on desktop and **56px** high on mobile. There are a
number of helper components available to use with the toolbar. The
:py:class:`ToolbarTitle <ipyvuetify.ToolbarTitle>` is used for displaying a title
and :py:class:`ToolbarItems <ipyvuetify.ToolbarItems>` allow
:py:class:`Btn <ipyvuetify.Btn>` to extend full height.

.. jupyter-execute:: Toolbar/usage.py
    :raises:

Examples
--------

Background
^^^^^^^^^^

Toolbars can display a background as opposed to a solid color using the ``src``
prop. This can be modified further by using the ``img`` slot and providing your own
:py:class:`Img <ipyvuetify.Img>` component. Backgrounds can be faded using a
:py:class:`AppBar <ipyvuetify.AppBar>`__.

.. __: https://v2.vuetifyjs.com/en/components/app-bars/#prominent-w-scroll-shrink-and-image

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/background.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/background.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/background.vue

Collapse
^^^^^^^^

Toolbars can be collapsed to save screen space.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/collapse.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/collapse.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/collapse.vue

Dense toolbars
^^^^^^^^^^^^^^

**Dense** toolbars reduce their height to **48px**. When using in conjunction with
the ``prominent`` prop, will reduce height to **96px**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/dense_toolbars.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/dense_toolbars.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/dense_toolbars.vue

Extended
^^^^^^^^

Toolbars can be extended without using the ``extension`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/extended.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/extended.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/extended.vue

Extension height
^^^^^^^^^^^^^^^^

The extension's height can be customized.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/extension_height.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/extension_height.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/extension_height.vue

Floating with search
^^^^^^^^^^^^^^^^^^^^

A **floating** toolbar is turned into an inline element that only takes up as much
space as needed. This is particularly useful when placing toolbars over content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/floating_with_search.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/floating_with_search.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/floating_with_search.vue

Light and Dark
^^^^^^^^^^^^^^

Toolbars come in **2 variants**, **light** and **dark**. Light toolbars have dark
tinted buttons and dark text whereas dark toolbars have white tinted buttons and
white text.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/light_and_dark.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/light_and_dark.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/light_and_dark.vue

Prominent toolbars
^^^^^^^^^^^^^^^^^^

**Prominent** toolbars increase the :py:class:`Toolbar <ipyvuetify.Toolbar>`'s
height to **128px** and positions the
:py:class:`ToolbarTitle <ipyvuetify.ToolbarTitle>` towards the bottom of the
container. This is expanded upon in :py:class:`AppBar <ipyvuetify.AppBar>`__ with
the ability to shrink a prominent toolbar to a dense or short one.

.. __: https://v2.vuetifyjs.com/en/components/app-bars/#prominent-w-scroll-shrink

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/prominent_toolbars.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/prominent_toolbars.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/prominent_toolbars.vue

Contextual action bar
^^^^^^^^^^^^^^^^^^^^^

It is possible to update the appearance of a toolbar in response to changes in app
state. In this example, the color and content of the toolbar changes in response to
user selections in the :py:class:`Select <ipyvuetify.Select>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/contextual_action_bar.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/contextual_action_bar.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/contextual_action_bar.vue

Flexible and card toolbar
^^^^^^^^^^^^^^^^^^^^^^^^^^

In this example we offset our card onto the extended content area of a toolbar
using the ``extended`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/flexible_and_card_toolbar.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/flexible_and_card_toolbar.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/flexible_and_card_toolbar.vue

