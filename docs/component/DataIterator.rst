DataIterator
============

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/data-iterators/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.DataIterator` component is used for displaying arbitrary data, and shares a majority of its functionality with the :py:class:`pyvuetify.DataTable` component. Features include sorting, searching, pagination, and selection.

.. api::

    :py:class:`pyvuetify.DataIterator`

Grouping
--------

Use the **group-by** prop to group items, and **v-model:opened** to control which groups are open. The **group-key** prop allows customizing group IDs, and **open-all** opens all groups by default.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataIterator/grouping.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataIterator/grouping.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataIterator/grouping.vue


Slots
-----

The :py:class:`pyvuetify.DataIterator` component has 4 main slots


Default
-------

The :py:class:`pyvuetify.DataIterator` has internal state for both selection and expansion, just like :py:class:`pyvuetify.DataTable`. In this example we use the methods ``isExpanded`` and ``toggleExpand`` available on the default slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataIterator/default.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataIterator/default.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataIterator/default.vue


Header and footer
-----------------

The :py:class:`pyvuetify.DataIterator` has both a **header** and **footer** slot for adding extra content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataIterator/header_and_footer.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataIterator/header_and_footer.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataIterator/header_and_footer.vue


Controllable props
------------------

Sorting, filters and pagination can be controlled externally by using the individual props

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataIterator/filter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataIterator/filter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataIterator/filter.vue


Loader props
------------

Loader can be used to change loader on "loading" prop

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataIterator/loader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataIterator/loader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataIterator/loader.vue

