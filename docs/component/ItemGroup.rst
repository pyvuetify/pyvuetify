ItemGroup
=========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/item-groups/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.ItemGroup` provides the ability to create a group of selectable items out of any component. This is the baseline functionality for components such as :py:class:`pyvuetify.Tabs` and :py:class:`pyvuetify.Carousel`.

.. api::

    :py:class:`pyvuetify.ItemGroup`

Selected class
--------------

The **selected-class** prop allows you to designate a CSS class applied to *selected* items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ItemGroup/selected_class.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ItemGroup/selected_class.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ItemGroup/selected_class.vue


Mandatory
---------

**mandatory** item groups must have at least 1 item selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ItemGroup/mandatory.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ItemGroup/mandatory.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ItemGroup/mandatory.vue


Multiple
--------

Item groups can have **multiple** items selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ItemGroup/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ItemGroup/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ItemGroup/multiple.vue


Selection
---------

Icons can be used as toggle buttons when they allow selection, or deselection, of a single choice, such as marking an item as a favorite.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ItemGroup/selection.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ItemGroup/selection.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ItemGroup/selection.vue

