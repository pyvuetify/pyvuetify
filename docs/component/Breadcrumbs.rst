Breadcrumbs
===========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/breadcrumbs/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Breadcrumbs` component is used as a navigational helper and hierarchy for pages.

.. api::

    :py:class:`pyvuetify.Breadcrumbs`

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


Prepend
-------

Prepend content with the ``prepend`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Breadcrumbs/prepend.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Breadcrumbs/prepend.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Breadcrumbs/prepend.vue


Dividers
--------

To customize the divider, use the ``divider`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Breadcrumbs/icon_dividers.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Breadcrumbs/icon_dividers.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Breadcrumbs/icon_dividers.vue


Title
-----

You can use the ``title`` slot to customize each breadcrumb title.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Breadcrumbs/title.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Breadcrumbs/title.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Breadcrumbs/title.vue

