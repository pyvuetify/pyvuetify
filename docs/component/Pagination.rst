Pagination
==========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Pagination
    documentation <https://v2.vuetifyjs.com/en/components/paginations/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Pagination <ipyvuetify.Pagination>` component is used to
separate long sets of data so that it is easier for a user to consume
information. Depending on the length provided, the pagination component will
automatically scale. To maintain the current page, simply supply a v-model
attribute.

.. api::

    :py:class:`ipyvuetify.Pagination`

Usage
-----

Pagination by default displays the number of pages based on the set length
prop, with prev and next buttons surrounding to help you navigate.

.. jupyter-execute:: Pagination/usage.py
    :raises:

Examples
--------

Circle
^^^^^^

The circle prop gives you an alternate style for pagination buttons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Pagination/circle.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Pagination/circle.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Pagination/circle.vue

Disabled
^^^^^^^^

Pagination items can be manually deactivated using the disabled prop.

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
^^^^^

Previous and next page icons can be customized with the prev-icon and next-icon
props.

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
^^^^^^

Using the length prop you can set the length of
:py:class:`Pagination <ipyvuetify.Pagination>`, if the number of page buttons
exceeds the parent container, it will truncate the list.

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
^^^^^^^^^^^^^

You can also manually set the maximum number of visible page buttons with the
total-visible prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Pagination/total_visible.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Pagination/total_visible.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Pagination/total_visible.vue

