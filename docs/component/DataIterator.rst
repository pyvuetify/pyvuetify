DataIterator
============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/data-iterators/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`DataIterator <ipyvuetify.DataIterator>` component is used for displaying data, and shares a majority of its functionality with the :py:class:`DataTable <ipyvuetify.DataTable>` component. Features include sorting, searching, pagination, and selection. The main difference is that it allows you to fully customize how the data is displayed using slots.

.. api::

    :py:class:`ipyvuetify.DataIterator`

Usage
-----

The :py:class:`DataIterator <ipyvuetify.DataIterator>` allows you to customize exactly how to display your data. In this example we are using a grid with cards.

.. jupyter-execute::

    import ipyvuetify as v

    desserts = [
        {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'sodium': 87, 'calcium': '14%', 'iron': '1%'},
        {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'sodium': 129, 'calcium': '8%', 'iron': '1%'},
        {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'sodium': 337, 'calcium': '6%', 'iron': '7%'},
        {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'sodium': 413, 'calcium': '3%', 'iron': '8%'},
        {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'sodium': 327, 'calcium': '7%', 'iron': '16%'},
        {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'sodium': 50, 'calcium': '0%', 'iron': '0%'},
        {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'sodium': 38, 'calcium': '0%', 'iron': '2%'},
        {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'sodium': 562, 'calcium': '0%', 'iron': '45%'},
        {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'sodium': 326, 'calcium': '2%', 'iron': '22%'},
        {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'sodium': 54, 'calcium': '12%', 'iron': '6%'},
    ]

    search = v.TextField(
        v_model='',
        clearable=True,
        flat=True,
        solo_inverted=True,
        hide_details=True,
        prepend_inner_icon='mdi-magnify',
        label='Search'
    )

    data_iterator = v.DataIterator(
        items=desserts,
        items_per_page=4,
        search='',
        v_slots=[{
            'name': 'default',
            'variable': 'props',
            'children': v.Row(children=[
                v.Col(
                    cols=12,
                    sm=6,
                    md=4,
                    lg=3,
                    style_='v-for="item in props.items"',
                    children=[
                        v.Card(children=[
                            v.CardTitle(
                                class_='subheading font-weight-bold',
                                children=['{{ item.name }}']
                            ),
                            v.Divider(),
                            v.List(dense=True, children=[
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Calories:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.calories }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Fat:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.fat }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Carbs:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.carbs }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Protein:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.protein }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Sodium:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.sodium }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Calcium:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.calcium }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Iron:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.iron }}'])
                                ]),
                            ])
                        ])
                    ]
                )
            ])
        }]
    )

    from ipywidgets import link
    link((search, 'v_model'), (data_iterator, 'search'))

    v.Container(
        class_='pa-0',
        children=[
            v.Toolbar(
                color='primary',
                dark=True,
                flat=True,
                children=[search]
            ),
            data_iterator
        ]
    )

Slots
-----

The :py:class:`DataIterator <ipyvuetify.DataIterator>` has internal state for both selection and expansion. In this example we use the ``default`` slot to customize how items are displayed.

.. jupyter-execute::

    import ipyvuetify as v

    desserts = [
        {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'sodium': 87, 'calcium': '14%', 'iron': '1%'},
        {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'sodium': 129, 'calcium': '8%', 'iron': '1%'},
        {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'sodium': 337, 'calcium': '6%', 'iron': '7%'},
        {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'sodium': 413, 'calcium': '3%', 'iron': '8%'},
    ]

    checkbox = v.Checkbox(v_model=False, label='Expand Single Item', class_='mt-0')

    data_iterator = v.DataIterator(
        items=desserts,
        single_expand=False,
        expanded=[],
        hide_default_footer=True,
        v_slots=[{
            'name': 'default',
            'variable': 'props',
            'children': v.Container(children=[
                v.Row(
                    style_='v-for="(item, index) in props.items"',
                    class_='mb-3',
                    align='center',
                    children=[
                        v.Col(cols=4, children=[
                            v.Html(tag='h4', children=['{{ item.name }}'])
                        ]),
                        v.Col(cols=8, class_='text-right', children=[
                            v.Btn(
                                small=True,
                                icon=True,
                                children=[
                                    v.Icon(children=[
                                        "{{ props.isExpanded(item) ? 'mdi-chevron-up' : 'mdi-chevron-down' }}"
                                    ])
                                ]
                            )
                        ]),
                        v.Col(
                            cols=12,
                            style_='v-if="props.isExpanded(item)"',
                            children=[
                                v.Divider(),
                                v.Html(tag='p', class_='mt-2', children=[
                                    'Calories: {{ item.calories }} | Fat: {{ item.fat }} | Carbs: {{ item.carbs }}'
                                ])
                            ]
                        )
                    ]
                )
            ])
        }]
    )

    from ipywidgets import link
    link((checkbox, 'v_model'), (data_iterator, 'single_expand'))

    v.Container(children=[checkbox, data_iterator])

Filter
------

Order, filters and pagination can be controlled externally by using the individual props.

.. jupyter-execute::

    import ipyvuetify as v

    desserts = [
        {'name': 'Frozen Yogurt', 'calories': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0, 'sodium': 87, 'calcium': '14%', 'iron': '1%'},
        {'name': 'Ice cream sandwich', 'calories': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3, 'sodium': 129, 'calcium': '8%', 'iron': '1%'},
        {'name': 'Eclair', 'calories': 262, 'fat': 16.0, 'carbs': 23, 'protein': 6.0, 'sodium': 337, 'calcium': '6%', 'iron': '7%'},
        {'name': 'Cupcake', 'calories': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3, 'sodium': 413, 'calcium': '3%', 'iron': '8%'},
        {'name': 'Gingerbread', 'calories': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9, 'sodium': 327, 'calcium': '7%', 'iron': '16%'},
        {'name': 'Jelly bean', 'calories': 375, 'fat': 0.0, 'carbs': 94, 'protein': 0.0, 'sodium': 50, 'calcium': '0%', 'iron': '0%'},
        {'name': 'Lollipop', 'calories': 392, 'fat': 0.2, 'carbs': 98, 'protein': 0.0, 'sodium': 38, 'calcium': '0%', 'iron': '2%'},
        {'name': 'Honeycomb', 'calories': 408, 'fat': 3.2, 'carbs': 87, 'protein': 6.5, 'sodium': 562, 'calcium': '0%', 'iron': '45%'},
        {'name': 'Donut', 'calories': 452, 'fat': 25.0, 'carbs': 51, 'protein': 4.9, 'sodium': 326, 'calcium': '2%', 'iron': '22%'},
        {'name': 'KitKat', 'calories': 518, 'fat': 26.0, 'carbs': 65, 'protein': 7.0, 'sodium': 54, 'calcium': '12%', 'iron': '6%'},
    ]

    search = v.TextField(
        v_model='',
        label='Search',
        class_='mx-4'
    )

    data_iterator = v.DataIterator(
        items=desserts,
        items_per_page=4,
        search='',
        sort_by='name',
        v_slots=[{
            'name': 'default',
            'variable': 'props',
            'children': v.Row(children=[
                v.Col(
                    cols=12,
                    sm=6,
                    md=4,
                    style_='v-for="item in props.items"',
                    children=[
                        v.Card(children=[
                            v.CardTitle(
                                class_='subheading font-weight-bold',
                                children=['{{ item.name }}']
                            ),
                            v.Divider(),
                            v.List(dense=True, children=[
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Calories:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.calories }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Fat:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.fat }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Carbs:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.carbs }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Protein:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.protein }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Sodium:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.sodium }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Calcium:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.calcium }}'])
                                ]),
                                v.ListItem(children=[
                                    v.ListItemContent(children=['Iron:']),
                                    v.ListItemContent(class_='align-end', children=['{{ item.iron }}'])
                                ]),
                            ])
                        ])
                    ]
                )
            ])
        }]
    )

    from ipywidgets import link
    link((search, 'v_model'), (data_iterator, 'search'))

    v.Container(children=[search, data_iterator])
