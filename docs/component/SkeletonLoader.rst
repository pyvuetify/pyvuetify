SkeletonLoader
==============

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/skeleton-loaders/>`__.
    All examples have been converted to pyvuetify syntax.

Skeleton loaders provide a simple way to display loading placeholders in your application.

.. api::

    :py:class:`pyvuetify.SkeletonLoader`

Props
-----

The :py:class:`pyvuetify.SkeletonLoader` component has a small API mainly used to configure the root and item height.


Type
----

The **type** property is used to define the type of skeleton loader. Types can be combined to create more complex skeletons. For example, the **card** type is a combination of the **image** and **heading** types.



The following built-in types are available:

| Type | Composition |
| - | - |
| **actions** | button@2 |
| **article** | heading, paragraph |
| **avatar** | avatar |
| **button** | button |
| **card** | image, heading |
| **card-avatar** | image, list-item-avatar |
| **chip** | chip |
| **date-picker** | list-item, heading, divider, date-picker-options, date-picker-days, actions |
| **date-picker-options** | text, avatar@2 |
| **date-picker-days** | avatar@28 |
| **divider** | divider |
| **heading** | heading |
| **image** | image |
| **list-item** | text |
| **list-item-avatar** | avatar, text |
| **list-item-two-line** | sentences |
| **list-item-avatar-two-line** | avatar, sentences |
| **list-item-three-line** | paragraph |
| **list-item-avatar-three-line** | avatar, paragraph |
| **ossein** | ossein |
| **paragraph** | text@3 |
| **sentences** | text@2 |
| **subtitle** | text |
| **table** | table-heading, table-thead, table-tbody, table-tfoot |
| **table-heading** | heading, text |
| **table-thead** | heading@6 |
| **table-tbody** | table-row-divider@6 |
| **table-row-divider** | table-row, divider |
| **table-row** | text@6 |
| **table-tfoot** | text@2, avatar@2 |
| **text** | text |

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SkeletonLoader/type.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SkeletonLoader/type.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SkeletonLoader/type.vue


Loading
-------

A skeleton loader is considered to be in a loading state if one of the following conditions are met:

* The default slot is not used
* The **loading** property is set to **true**

If either condition is met, the skeleton loader returns the type structure in place of the default slot and applies dimensions values; e.g. **height**, **width**, **min-height**, etc. If the condition is not met, the default slot is returned.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SkeletonLoader/loading.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SkeletonLoader/loading.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SkeletonLoader/loading.vue


Elevation
---------

The **elevation** property makes it easy to match the elevation of the skeleton loader to the content it is replacing.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SkeletonLoader/elevation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SkeletonLoader/elevation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SkeletonLoader/elevation.vue


Boilerplate
-----------

The :py:class:`pyvuetify.SkeletonLoader` can be used as boilerplate designs when creating mockups. Mix and match various pre-defined options or create your own unique implementations. In this example, we use a custom **data** property to apply the same props to multiple :py:class:`pyvuetify.SkeletonLoader`'s at once.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SkeletonLoader/boilerplate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SkeletonLoader/boilerplate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SkeletonLoader/boilerplate.vue


Ice-cream suggestions
---------------------

The following example demonstrates how the :py:class:`pyvuetify.SkeletonLoader` component can be used to create a placeholder loading state for when content is being fetched from a server or loaded asynchronously.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SkeletonLoader/ice_cream.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SkeletonLoader/ice_cream.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SkeletonLoader/ice_cream.vue

