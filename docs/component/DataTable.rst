DataTable
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/data-tables/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`DataTable <ipyvuetify.DataTable>` component is used for displaying tabular data. Features include sorting, searching, pagination, content-editing, and row selection.

.. api::

    :py:class:`ipyvuetify.DataTable`

Usage
-----

The standard data table will by default render your data as simple rows.

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
        class_='elevation-1'
    )

Dense
-----

Using the ``dense`` prop you are able to give your data tables an alternate style.

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
        dense=True,
        headers=headers,
        items=desserts,
        items_per_page=10,
        class_='elevation-1'
    )

Item key
--------

Row items require a unique key property for features like expansion and selection to work. By default the key is ``id``, but you can use the ``item_key`` prop to specify a different item property.

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
    ]

    v.DataTable(
        headers=headers,
        items=desserts,
        item_key='name',
        show_select=True,
        class_='elevation-1'
    )

Multi sort
----------

Using the ``multi_sort`` prop will enable you to sort on multiple columns at the same time. When enabled, you can pass arrays to both ``sort_by`` and ``sort_desc`` to programmatically control the sorting.

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
        {'name': 'Frozen Yogurt', 'calories': 200, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'iron': 1},
        {'name': 'Ice cream sandwich', 'calories': 200, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'iron': 1},
        {'name': 'Eclair', 'calories': 300, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'iron': 7},
        {'name': 'Cupcake', 'calories': 300, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'iron': 8},
        {'name': 'Gingerbread', 'calories': 400, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'iron': 16},
        {'name': 'Jelly bean', 'calories': 400, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'iron': 0},
        {'name': 'Lollipop', 'calories': 400, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'iron': 2},
        {'name': 'Honeycomb', 'calories': 400, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'iron': 45},
        {'name': 'Donut', 'calories': 500, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'iron': 22},
        {'name': 'KitKat', 'calories': 500, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'iron': 6},
    ]

    v.DataTable(
        headers=headers,
        items=desserts,
        multi_sort=True,
        class_='elevation-1'
    )

Filterable
----------

You can easily disable specific columns from being included when searching through table rows by setting the property ``filterable`` to False on the header item(s). In the example below the dessert name column is no longer searchable.

.. jupyter-execute::

    import ipyvuetify as v

    search = v.TextField(
        v_model='',
        append_icon='mdi-magnify',
        label='Search',
        single_line=True,
        hide_details=True
    )

    headers = [
        {'text': 'Dessert (100g serving)', 'value': 'name', 'filterable': False},
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

    data_table = v.DataTable(
        search='',
        headers=headers,
        items=desserts,
        class_='elevation-1'
    )

    from ipywidgets import link
    link((search, 'v_model'), (data_table, 'search'))

    v.Card(
        flat=True,
        children=[
            v.CardTitle(children=[search]),
            data_table
        ]
    )

Row selection
-------------

The ``show_select`` prop will render a checkbox in the default header to toggle all rows, and a checkbox for each default row. You can also switch between allowing multiple selected rows at the same time or just one with the ``single_select`` prop.

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

    checkbox = v.Checkbox(v_model=False, label='Single select', class_='pa-3')

    data_table = v.DataTable(
        v_model=[],
        show_select=True,
        single_select=False,
        headers=headers,
        items=desserts,
        item_key='name',
        class_='elevation-1'
    )

    from ipywidgets import link
    link((checkbox, 'v_model'), (data_table, 'single_select'))

    v.Container(children=[checkbox, data_table])

Expandable rows
---------------

The ``show_expand`` prop will render an expand icon on each default row. You can also switch between allowing multiple expanded rows at the same time or just one with the ``single_expand`` prop.

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

    checkbox = v.Checkbox(v_model=False, label='Single expand', class_='pa-3')

    data_table = v.DataTable(
        show_expand=True,
        single_expand=False,
        expanded=[],
        headers=headers,
        items=desserts,
        item_key='name',
        class_='elevation-1',
        v_slots=[{
            'name': 'expanded-item',
            'variable': 'props',
            'children': v.Html(
                tag='td',
                attributes={'colspan': str(len(headers))},
                children=[
                    f"More info about {{{{ props.item.name }}}}"
                ]
            )
        }]
    )

    from ipywidgets import link
    link((checkbox, 'v_model'), (data_table, 'single_expand'))

    v.Container(children=[checkbox, data_table])
