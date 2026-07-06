SlideGroup
==========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/slide-groups/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.SlideGroup` component is used to display pseudo paginated information. It uses :doc:`ItemGroup <ItemGroup>` at its core and provides a baseline for components such as :doc:`Tab <Tab>` and :doc:`ChipGroup <ChipGroup>`.

.. api::

    :py:class:`pyvuetify.SlideGroup`

Selected class
--------------

**selected-class** prop allows you to pass a class to customize the active items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SlideGroup/active_class.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SlideGroup/active_class.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SlideGroup/active_class.vue


Center active
-------------

Using the **center-active** prop will make the active item always centered.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SlideGroup/center_active.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SlideGroup/center_active.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SlideGroup/center_active.vue


Custom icons
------------

You can add your custom pagination icons instead of arrows using the **next-icon** and **prev-icon** props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SlideGroup/custom_icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SlideGroup/custom_icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SlideGroup/custom_icons.vue


Mandatory
---------

the **mandatory** prop will make the slide group require at least 1 item must be selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SlideGroup/mandatory.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SlideGroup/mandatory.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SlideGroup/mandatory.vue


Multiple
--------

You can select multiple items by setting the **multiple** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SlideGroup/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SlideGroup/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SlideGroup/multiple.vue


Pseudo Carousel
---------------

Customize the slide group to creatively display information on sheets. Using the selection, we can display auxiliary information easily for the user.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SlideGroup/pseudo_carousel.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SlideGroup/pseudo_carousel.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SlideGroup/pseudo_carousel.vue

