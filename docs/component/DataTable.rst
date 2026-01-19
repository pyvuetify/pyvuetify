DataTable
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation
    <https://v2.vuetifyjs.com/en/components/data-tables/>`_. All examples have
    been converted to ipyvuetify syntax.

The :py:class:`DataTable <ipyvuetify.DataTable>` component is used for displaying
tabular data. Features include sorting, searching, pagination, content-editing,
and row selection.

.. api::

    - :py:class:`ipyvuetify.DataTable`
    - :py:class:`ipyvuetify.DataTableHeader`
    - :py:class:`ipyvuetify.DataFooter`
    - :py:class:`ipyvuetify.Data`
    - :py:class:`ipyvuetify.EditDialog`

.. seealso::

    - :py:class:`ipyvuetify.DataIterator`

Usage
-----

The standard :py:class:`DataTable <ipyvuetify.DataTable>` will by default render
your data as simple rows.

.. jupyter-execute:: DataTable/usage.py
    :raises:

Custom filter
-------------

You can override the default filtering used with ``search`` prop by supplying a
function to the ``custom-filter`` prop. If you need to customize the filtering of
a specific column, you can supply a function to the ``filter`` property on header
items. The signature is ``(value: any, search: string | null, item: any) => boolean``.
This function will always be run even if ``search`` prop has not been provided.
Thus you need to make sure to exit early with a value of ``true`` if filter should
not be applied.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/custom_filter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/custom_filter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/custom_filter.vue

Dense
-----

Using the ``dense`` prop you are able to give your data tables an alternate style.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/dense.vue

Filterable
----------

You can easily disable specific columns from being included when searching through
table rows by setting the property ``filterable`` to false on the header item(s).
In the example below the dessert name column is no longer searchable.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/filterable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/filterable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/filterable.vue

Footer props
------------

The :py:class:`DataTable <ipyvuetify.DataTable>` renders a default footer using
the :py:class:`DataFooter <ipyvuetify.DataFooter>` component. You can pass props
to this component using ``footer-props``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/footer_props.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/footer_props.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/footer_props.vue

Grouping
--------

Using the ``group-by`` and ``group-desc`` props you can group rows on an item property.
The ``show-group-by`` prop will show a group button in the default header. You can
use the ``groupable`` property on header items to disable the group button.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/grouping.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/grouping.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/grouping.vue

Hide default header and footer
-------------------------------

You can apply the ``hide-default-header`` and ``hide-default-footer`` props to
remove the default header and footer respectively.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/hide_default_header_and_footer.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/hide_default_header_and_footer.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/hide_default_header_and_footer.vue

Loading
-------

You can use the ``loading`` prop to indicate that data in the table is currently
loading. If there is no data in the table, a loading message will also be displayed.
This message can be customized using the ``loading-text`` prop or the
``loading`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/loading.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/loading.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/loading.vue

Multi sort
----------

Using the ``multi-sort`` prop will enable you to sort on multiple columns at the
same time. When enabled, you can pass arrays to both ``sort-by`` and ``sort-desc``
to programmatically control the sorting, instead of single values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/multi_sort.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/multi_sort.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/multi_sort.vue

Row selection
-------------

The ``show-select`` prop will render a checkbox in the default header to toggle
all rows, and a checkbox for each default row. You can customize these with the
slots ``header.data-table-select`` and ``item.data-table-select`` respectively.
You can also switch between allowing multiple selected rows at the same time or
just one with the ``single-select`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/row_selection.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/row_selection.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/row_selection.vue

Search
------

The :py:class:`DataTable <ipyvuetify.DataTable>` exposes a ``search`` prop that allows you to filter your data.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/search.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/search.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/search.vue

Slots
-----

The :py:class:`DataTable <ipyvuetify.DataTable>` provides a large number of slots
for customizing the table. This example showcases some of these slots and what you
can do with each. It is important to note some slots (e.g., ``item``/``body``/``header``)
will completely take over the internal rendering of the component which will require
you to re-implement functionalities such as selection and expansion. Some slots
will override each other such as: ``body`` > ``item`` > ``item.<name>`` and
``header``/``header.<name>``.

Header
^^^^^^

You can use the dynamic slots ``header.<name>`` to customize only certain columns.
``<name>`` is the name of the ``value`` property in the corresponding header item
sent to headers.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/header.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/header.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/header.vue

Item
^^^^

You can use the dynamic slots ``item.<name>`` to customize only certain columns.
``<name>`` is the name of the ``value`` property in the corresponding header item
sent to headers. So to customize the calories column we're using the
``item.calories`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/item.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/item.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/item.vue

Simple checkbox
---------------

When wanting to use a checkbox component inside of a slot template in your data
tables, use the :py:class:`SimpleCheckbox <ipyvuetify.SimpleCheckbox>` component
rather than the :py:class:`Checkbox <ipyvuetify.Checkbox>` component. The
:py:class:`SimpleCheckbox <ipyvuetify.SimpleCheckbox>` component is used internally
and will respect header alignment.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DataTable/simple_checkbox.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DataTable/simple_checkbox.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DataTable/simple_checkbox.vue

Miscellaneous examples
----------------------

CRUD Actions
^^^^^^^^^^^^

:py:class:`DataTable <ipyvuetify.DataTable>` with CRUD actions using a
:py:class:`Dialog <ipyvuetify.Dialog>` component for editing each row.

.. todo::

    The example below is incomplete. Please help us finish it!

Edit dialog
^^^^^^^^^^^

The :py:class:`EditDialog <ipyvuetify.EditDialog>` component can be used for
editing data directly within a :py:class:`DataTable <ipyvuetify.DataTable>`. You
can block the closing of the :py:class:`EditDialog <ipyvuetify.EditDialog>` when
clicked outside by adding the ``persistent`` prop.

.. todo::

    The example below is incomplete. Please help us finish it!

Expandable rows
---------------

The ``show-expand`` prop will render an expand icon on each default row. You can
customize this with the ``item.data-table-expand`` slot. The position of this slot
can be customized by adding a column with ``value: 'data-table-expand'`` to the
headers array. You can also switch between allowing multiple expanded rows at the
same time or just one with the ``single-expand`` prop. The expanded rows are
available on the synced prop ``expanded.sync``. Row items require a unique key
property for expansion to work. The default is ``id``, but you can use the
``item-key`` prop to specify a different item property.

.. todo::

    The example below is incomplete. Please help us finish it!

External pagination
-------------------

Pagination can be controlled externally by using the individual props, or by using
the ``options`` prop. Remember that you must apply the ``.sync`` modifier.

.. todo::

    The example below is incomplete. Please help us finish it!

External sorting
----------------

Sorting can also be controlled externally by using the individual props, or by using
the ``options`` prop. Remember that you must apply the ``.sync`` modifier.

.. todo::

    The example below is incomplete. Please help us finish it!

Server-side paginate and sort
------------------------------

If you're loading data already paginated and sorted from a backend, you can use
the ``server-items-length`` prop. Defining this prop will disable the built-in
sorting and pagination, and you will instead need to use the available events
(``update:page``, ``update:sortBy``, ``update:options``, etc) to know when to
request new pages from your backend. Use the ``loading`` prop to display a
progress bar while fetching data.

.. todo::

    The example below is incomplete. Please help us finish it!
