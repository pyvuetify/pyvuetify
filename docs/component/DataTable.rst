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

.. seealso::

    - :py:class:`ipyvuetify.DataIterator`

Usage
-----

The standard :py:class:`DataTable <ipyvuetify.DataTable>` will by default render
your data as simple rows.

.. jupyter-execute::

    import ipyvuetify as v

    headers = [
        {'text': 'Dessert (100g serving)', 'value': 'name'},
        {'text': 'Calories', 'value': 'calories'},
        {'text': 'Fat (g)', 'value': 'fat'},
        {'text': 'Carbs (g)', 'value': 'carbs'},
        {'text': 'Protein (g)', 'value': 'protein'},
        {'text': 'Iron (%)', 'value': 'iron'},
    ]

    desserts = [
        {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
        {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
        {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
        {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
        {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
        {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
        {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
        {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
        {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
        {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
    ]

    v.DataTable(
        headers=headers,
        items=desserts,
        items_per_page=5,
    )

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

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            search = v.TextField(
                v_model=None,
                label="Search",
                class_="mx-4",
            )

            data_table = v.DataTable(
                headers=headers,
                items=desserts,
                item_key="name",
                search=None,
                v_slots=[
                    {"name": "top", "children": search}
                ],
            )

            jslink((search, 'v_model'), (data_table, 'search'))

            data_table

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            search = v.TextField(
                v_model=None,
                label="Search",
                class_="mx-4",
            )

            data_table = v.DataTable(
                headers=headers,
                items=desserts,
                item_key="name",
                search=None,
                v_slots=[
                    {"name": "top", "children": search}
                ],
            )

            jslink((search, 'v_model'), (data_table, 'search'))

            data_table

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="name"
                class="elevation-1"
                :search="search"
                :custom-filter="filterOnlyCapsText"
                >
                <template v-slot:top>
                    <v-text-field
                    v-model="search"
                    label="Search (UPPER CASE ONLY)"
                    class="mx-4"
                    ></v-text-field>
                </template>
                <template v-slot:body.append>
                    <tr>
                    <td></td>
                    <td>
                        <v-text-field
                        v-model="calories"
                        type="number"
                        label="Less than"
                        ></v-text-field>
                    </td>
                    <td colspan="4"></td>
                    </tr>
                </template>
                </v-data-table>
            </div>
            </template>

Dense
-----

Using the ``dense`` prop you are able to give your data tables an alternate style.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                dense=True,
                headers=headers,
                items=desserts,
                items_per_page=5,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                dense=True,
                headers=headers,
                items=desserts,
                items_per_page=5,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-data-table
                dense
                :headers="headers"
                :items="desserts"
                item-key="name"
                class="elevation-1"
            ></v-data-table>
            </template>

Filterable
----------

You can easily disable specific columns from being included when searching through
table rows by setting the property ``filterable`` to false on the header item(s).
In the example below the dessert name column is no longer searchable.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            search = v.TextField(
                v_model=None,
                label="Search",
                class_="mx-4",
            )

            data_table = v.DataTable(
                headers=headers,
                items=desserts,
                item_key="name",
                search=None,
                v_slots=[
                    {"name": "top", "children": search}
                ],
            )

            jslink((search, 'v_model'), (data_table, 'search'))

            data_table

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            search = v.TextField(
                v_model=None,
                label="Search",
                class_="mx-4",
            )

            data_table = v.DataTable(
                headers=headers,
                items=desserts,
                item_key="name",
                search=None,
                v_slots=[
                    {"name": "top", "children": search}
                ],
            )

            jslink((search, 'v_model'), (data_table, 'search'))

            data_table

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                ></v-data-table>
            </v-card>
            </template>

Footer props
------------

The :py:class:`DataTable <ipyvuetify.DataTable>` renders a default footer using
the :py:class:`DataFooter <ipyvuetify.DataFooter>` component. You can pass props
to this component using ``footer-props``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                items_per_page=3,
                item_keys="name",
                footer_props={
                    "showFirstLastPage": True,
                    "firstIcon": "mdi-arrow-collapse-left",
                    "lastIcon": "mdi-arrow-collapse-right",
                    "prevIcon": "mdi-minus",
                    "nextIcon": "mdi-plus",
                },
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                items_per_page=3,
                item_keys="name",
                footer_props={
                    "showFirstLastPage": True,
                    "firstIcon": "mdi-arrow-collapse-left",
                    "lastIcon": "mdi-arrow-collapse-right",
                    "prevIcon": "mdi-minus",
                    "nextIcon": "mdi-plus",
                },
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                item-key="name"
                class="elevation-1"
                :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus'
                }"
            ></v-data-table>
            </template>

Grouping
--------

Using the ``group-by`` and ``group-desc`` props you can group rows on an item property.
The ``show-group-by`` prop will show a group button in the default header. You can
use the ``groupable`` property on header items to disable the group button.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            headers = [
                {"text": 'Dessert (100g serving)', "align": 'start', "value": 'name', "groupable": False},
                {"text": 'Category', "value": 'category', "align": 'right' },
                {"text": 'Dairy', "value": 'dairy', "align": 'right' },
            ]

            desserts = [
                {"name": 'Frozen Yogurt', "category": 'Ice cream', "dairy": 'Yes'},
                {"name": 'Ice cream sandwich', "category": 'Ice cream', "dairy": 'Yes'},
                {"name": 'Eclair', "category": 'Cookie', "dairy": 'Yes'},
                {"name": 'Cupcake', "category": 'Pastry', "dairy": 'Yes'},
                {"name": 'Gingerbread', "category": 'Cookie', "dairy": 'No'},
                {"name": 'Jelly bean', "category": 'Candy', "dairy": 'No'},
                {"name": 'Lollipop', "category": 'Candy', "dairy": 'No'},
                {"name": 'Honeycomb', "category": 'Toffee', "dairy": 'No'},
                {"name": 'Donut', "category": 'Pastry', "dairy": 'Yes'},
                {"name": 'KitKat', "category": 'Candy', "dairy": 'Yes'},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                item_key="name",
                sort_by="name",
                group_by="category",
                show_group_by=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            headers = [
                {"text": 'Dessert (100g serving)', "align": 'start', "value": 'name', "groupable": False},
                {"text": 'Category', "value": 'category', "align": 'right' },
                {"text": 'Dairy', "value": 'dairy', "align": 'right' },
            ]

            desserts = [
                {"name": 'Frozen Yogurt', "category": 'Ice cream', "dairy": 'Yes'},
                {"name": 'Ice cream sandwich', "category": 'Ice cream', "dairy": 'Yes'},
                {"name": 'Eclair', "category": 'Cookie', "dairy": 'Yes'},
                {"name": 'Cupcake', "category": 'Pastry', "dairy": 'Yes'},
                {"name": 'Gingerbread', "category": 'Cookie', "dairy": 'No'},
                {"name": 'Jelly bean', "category": 'Candy', "dairy": 'No'},
                {"name": 'Lollipop', "category": 'Candy', "dairy": 'No'},
                {"name": 'Honeycomb', "category": 'Toffee', "dairy": 'No'},
                {"name": 'Donut', "category": 'Pastry', "dairy": 'Yes'},
                {"name": 'KitKat', "category": 'Candy', "dairy": 'Yes'},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                item_key="name",
                sort_by="name",
                group_by="category",
                show_group_by=True,
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="name"
                sort-by="name"
                group-by="category"
                class="elevation-1"
                show-group-by
            ></v-data-table>
            </template>

Hide default header and footer
-------------------------------

You can apply the ``hide-default-header`` and ``hide-default-footer`` props to
remove the default header and footer respectively.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                hide_default_header=True,
                hide_default_footer=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                hide_default_header=True,
                hide_default_footer=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-data-table
                :headers="headers"
                :items="desserts"
                hide-default-header
                hide-default-footer
                class="elevation-1"
            ></v-data-table>
            </template>

Loading
-------

You can use the ``loading`` prop to indicate that data in the table is currently
loading. If there is no data in the table, a loading message will also be displayed.
This message can be customized using the ``loading-text`` prop or the
``loading`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.DataTable(
                item_key="name",
                class_="elevation-1",
                loading=True,
                loading_text="Loading... Please wait",
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.DataTable(
                item_key="name",
                class_="elevation_1",
                loading=True,
                loading_text="Loading... Please wait",
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-data-table
                item-key="name"
                class="elevation-1"
                loading
                loading-text="Loading... Please wait"
            ></v-data-table>
            </template>

Multi sort
----------

Using the ``multi-sort`` prop will enable you to sort on multiple columns at the
same time. When enabled, you can pass arrays to both ``sort-by`` and ``sort-desc``
to programmatically control the sorting, instead of single values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                sort_by=['calories', 'fat'],
                sort_desc=[False, True],
                multi_sort=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                sort_by=['calories', 'fat'],
                sort_desc=[False, True],
                multi_sort=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-data-table
                :headers="headers"
                :items="desserts"
                :sort-by="['calories', 'fat']"
                :sort-desc="[false, true]"
                multi-sort
                class="elevation-1"
            ></v-data-table>
            </template>

Row selection
-------------

The ``show-select`` prop will render a checkbox in the default header to toggle
all rows, and a checkbox for each default row. You can customize these with the
slots ``header.data-table-select`` and ``item.data-table-select`` respectively.
You can also switch between allowing multiple selected rows at the same time or
just one with the ``single-select`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            single_select = v.Switch(
                label="Single select",
                class_="pa-3",
                v_model=False,
            )

            data_table = v.DataTable(
                v_model=[],
                headers=headers,
                items=desserts,
                show_select=True,
                single_select=False,
            )

            jslink((single_select, 'v_model'), (data_table, 'single_select'))

            v.Container(children=[single_select, data_table])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            single_select = v.Switch(
                label="Single select",
                class_="pa-3",
                v_model=False,
            )

            data_table = v.DataTable(
                v_model=[],
                headers=headers,
                items=desserts,
                show_select=True,
                single_select=False,
            )

            jslink((single_select, 'v_model'), (data_table, 'single_select'))

            v.Container(children=[single_select, data_table])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="desserts"
                :single-select="singleSelect"
                item-key="name"
                show-select
                class="elevation-1"
            >
                <template v-slot:top>
                <v-switch
                    v-model="singleSelect"
                    label="Single select"
                    class="pa-3"
                ></v-switch>
                </template>
            </v-data-table>
            </template>

Search
------

The :py:class:`DataTable <ipyvuetify.DataTable>` exposes a ``search`` prop that allows you to filter your data.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            search = v.TextField(
                append_icon="mdi-magnify",
                label="Search",
                single_line=True,
                hide_details=True,
                v_model=None,
            )

            data_table = v.DataTable(
                v_model=[],
                headers=headers,
                items=desserts,
                search=None,
            )

            jslink((search, 'v_model'), (data_table, 'search'))

            v.Card(children=[
                v.CardTitle(children=[
                    "Nutrition",
                    v.Spacer(),
                    search,
                ]),
                data_table,
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            search = v.TextField(
                append_icon="mdi-magnify",
                label="Search",
                single_line=True,
                hide_details=True,
                v_model=None,
            )

            data_table = v.DataTable(
                v_model=[],
                headers=headers,
                items=desserts,
                search=None,
            )

            jslink((search, 'v_model'), (data_table, 'search'))

            v.Card(children=[
                v.CardTitle(children=[
                    "Nutrition",
                    v.Spacer(),
                    search,
                ]),
                data_table,
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-card-title>
                Nutrition
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                ></v-data-table>
            </v-card>
            </template>

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

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                v_slots=[{
                    "name": "header.name",
                    "variable": "name",
                    "children": "{{ name.header.text.toUpperCase() }}"
                }],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                v_slots=[{
                    "name": "header.name",
                    "variable": "name",
                    "children": "{{ name.header.text.toUpperCase() }}"
                }],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
            >
                <template v-slot:header.name="{ header }">
                {{ header.text.toUpperCase() }}
                </template>
            </v-data-table>
            </template>

Item
^^^^

You can use the dynamic slots ``item.<name>`` to customize only certain columns.
``<name>`` is the name of the ``value`` property in the corresponding header item
sent to headers. So to customize the calories column we're using the
``item.calories`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                v_slots=[{
                    "name": "item.calories",
                    "variable": "item",
                    "children": v.Chip(
                        children=["item.item.calories"],
                        #color="getColor(item.calories)",
                        dark=True,
                    )
                }],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                v_slots=[{
                    "name": "item.calories",
                    "variable": "item",
                    "children": v.Chip(
                        children=["item.item.calories"],
                        #color="getColor(item.calories)",
                        dark=True,
                    )
                }],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
            >
                <template v-slot:item.calories="{ item }">
                <v-chip
                    :color="getColor(item.calories)"
                    dark
                >
                    {{ item.calories }}
                </v-chip>
                </template>
            </v-data-table>
            </template>

Simple checkbox
---------------

When wanting to use a checkbox component inside of a slot template in your data
tables, use the :py:class:`SimpleCheckbox <ipyvuetify.SimpleCheckbox>` component
rather than the :py:class:`Checkbox <ipyvuetify.Checkbox>` component. The
:py:class:`SimpleCheckbox <ipyvuetify.SimpleCheckbox>` component is used internally
and will respect header alignment.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1, "glutenfree": True},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1, "glutenfree": False},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7, "glutenfree": False},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8, "glutenfree": False},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16, "glutenfree": True},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0, "glutenfree": True},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2, "glutenfree": True},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45, "glutenfree": True},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22, "glutenfree": False},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6, "glutenfree": False},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                v_slots=[{
                    "name": "item.glutenfree",
                    "variable": "item",
                    "children": v.SimpleCheckbox(
                        v_model="item.item.glutenfree",
                        disabled=True,
                    )
                }],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            headers = [
                {'text': 'Dessert (100g serving)', 'value': 'name'},
                {'text': 'Calories', 'value': 'calories'},
                {'text': 'Fat (g)', 'value': 'fat'},
                {'text': 'Carbs (g)', 'value': 'carbs'},
                {'text': 'Protein (g)', 'value': 'protein'},
                {'text': 'Iron (%)', 'value': 'iron'},
            ]

            desserts = [
                {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1, "glutenfree": True},
                {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1, "glutenfree": False},
                {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7, "glutenfree": False},
                {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8, "glutenfree": False},
                {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16, "glutenfree": True},
                {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0, "glutenfree": True},
                {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2, "glutenfree": True},
                {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45, "glutenfree": True},
                {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22, "glutenfree": False},
                {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6, "glutenfree": False},
            ]

            v.DataTable(
                headers=headers,
                items=desserts,
                v_slots=[{
                    "name": "item.glutenfree",
                    "variable": "item",
                    "children": v.SimpleCheckbox(
                        v_model="item.item.glutenfree",
                        disabled=True,
                    )
                }],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
                >
                <template v-slot:item.glutenfree="{ item }">
                    <v-simple-checkbox
                    v-model="item.glutenfree"
                    disabled
                    ></v-simple-checkbox>
                </template>
                </v-data-table>
            </div>
            </template>

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
