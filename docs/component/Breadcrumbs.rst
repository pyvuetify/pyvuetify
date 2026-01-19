Breadcrumbs
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/breadcrumbs/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Breadcrumbs <ipyvuetify.Breadcrumbs>` component is a navigational helper for pages.
It can accept a Material Icons icon or text characters as a divider. An array of objects can be passed
to the ``items`` property of the component. Additionally, slots exists for more control of the breadcrumbs,
either utilizing :py:class:`BreadcrumbsItem <ipyvuetify.BreadcrumbsItem>` or other custom markup.

.. api::

    - :py:class:`ipyvuetify.Breadcrumbs`
    - :py:class:`ipyvuetify.BreadcrumbsItem`
    - :py:class:`ipyvuetify.BreadcrumbsDivider`

.. note:: Caveat

    By default v-breadcrumbs will disable all crumbs up to the current page in a nested paths.
    You can prevent this behavior by using exact: true on each applicable breadcrumb in the
    items array.

Usage
-----

By default, breadcrumbs use a text divider. This can be any string.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Breadcrumbs/usage.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Breadcrumbs/usage.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Breadcrumbs/usage.vue

Divider
-------

Breadcrumbs separator can be set using ``divider`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Breadcrumbs/divider.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Breadcrumbs/divider.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Breadcrumbs/divider.vue

Large
-----

Large breadcrumbs have larger font size.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Breadcrumbs/large.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Breadcrumbs/large.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Breadcrumbs/large.vue

Icon Dividers
-------------

For the icon variant, breadcrumbs can use any icon in Material Design Icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Breadcrumbs/icon_dividers.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Breadcrumbs/icon_dividers.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Breadcrumbs/icon_dividers.vue

Item
----

You can use the ``item`` slot to customize each breadcrumb.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Breadcrumbs/item.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Breadcrumbs/item.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Breadcrumbs/item.vue

