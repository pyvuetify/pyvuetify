Pagination
==========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/paginations/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Pagination` component is used to separate long sets of data so that it is easier for a user to consume information.

.. api::

    :py:class:`pyvuetify.Pagination`

Rounded
-------

The **rounded** prop allows you to render pagination buttons with alternative styles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Pagination/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Pagination/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Pagination/rounded.vue


Disabled
--------

Pagination items can be manually deactivated using the **disabled** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Pagination/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Pagination/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Pagination/disabled.vue


Icons
-----

Previous and next page icons can be customized with the **prev-icon** and **next-icon** props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Pagination/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Pagination/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Pagination/icons.vue


Length
------

Using the **length** prop you can set the length of :py:class:`pyvuetify.Pagination`, if the number of page buttons exceeds the parent container, it will truncate the list.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Pagination/length.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Pagination/length.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Pagination/length.vue


Total visible
-------------

You can also manually set the maximum number of visible page buttons with the **total-visible** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Pagination/total_visible.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Pagination/total_visible.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Pagination/total_visible.vue

