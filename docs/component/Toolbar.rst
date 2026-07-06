Toolbar
=======

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/toolbars/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Toolbar` component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation.

.. api::

    :py:class:`pyvuetify.Toolbar`

Props
-----

The toolbar has a number of props that can be used to modify its appearance and behavior.


Dense toolbars
--------------

Dense toolbars reduce their height to *48px*.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/dense.vue


Collapse
--------

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


Background
----------

Toolbars can display a background as opposed to a solid color using the **src** prop. This can be modified further by using the **img** slot and providing your own :doc:`Image <Image>` component. Backgrounds can be faded using a :doc:`AppBar <AppBar>`

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/background.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/background.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/background.vue


Location
--------

You can use **location** prop to control how the toolbar is positioned within a relative container. It can also be used with **position-fixed** class instead of **absolute** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/location.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/location.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/location.vue


Extended
--------

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
----------------

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


Slots
-----

The toolbar has a number of slots that can be used to customize its content.


Extension
---------

The ``extension`` slot can be used to add additional content to the toolbar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/extension.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/extension.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/extension.vue


Contextual action bar
---------------------

It is possible to update the appearance of a toolbar in response to changes in app state. In this example, the color and content of the toolbar changes in response to user selections in the :py:class:`pyvuetify.Select`.

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
-------------------------

In this example we offset our card onto the extended content area of a toolbar using the **extended** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/flexible_and_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/flexible_and_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/flexible_and_card.vue


Floating with search
--------------------

A floating toolbar is turned into an inline element that only takes up as much space as needed. This is particularly useful when placing toolbars over content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/floating_with_search.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/floating_with_search.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/floating_with_search.vue


Tooltips and Speed Dial
-----------------------

Toolbar elements can include menus (like Speed Dial) and tooltips to help users understand the action intent when buttons show only icons to keep interface minimalistic.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Toolbar/tooltips_and_speed_dial.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Toolbar/tooltips_and_speed_dial.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Toolbar/tooltips_and_speed_dial.vue

