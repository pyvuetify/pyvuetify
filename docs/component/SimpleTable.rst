SimpleTable
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Simple tables
    documentation <https://v2.vuetifyjs.com/en/components/simple-tables/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SimpleTable <ipyvuetify.SimpleTable>` component is a simple
wrapper component around the ``<table>`` element. Inside the component you can
use all the regular table elements such as ``<thead>``, ``<tbody>``, ``<tr>``,
etc.

.. api::

    - :py:class:`ipyvuetify.SimpleTable`

Usage
-----

The simple table is a wrapper component around the ``<table>`` element.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    desserts = [
        ('Frozen Yogurt', 159),
        ('Ice cream sandwich', 237),
        ('Eclair', 262),
        ('Cupcake', 305),
        ('Gingerbread', 356),
        ('Jelly bean', 375),
        ('Lollipop', 392),
        ('Honeycomb', 408),
        ('Donut', 452),
        ('KitKat', 518),
    ]

    v.SimpleTable(children=[
        v.Html(tag='thead', children=[
            v.Html(tag='tr', children=[
                v.Html(tag='th', class_='text-left', children=['Name']),
                v.Html(tag='th', class_='text-left', children=['Calories'])
            ])
        ]),
        v.Html(tag='tbody', children=[
            v.Html(tag='tr', children=[
                v.Html(tag='td', children=[name]),
                v.Html(tag='td', children=[str(calorie)])
            ]) for name, calorie in desserts
        ])
    ])

Examples
--------

Dark
^^^^

Use dark prop to switch table to the dark theme.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            desserts = [
                ('Frozen Yogurt', 159),
                ('Ice cream sandwich', 237),
                ('Eclair', 262),
                ('Cupcake', 305),
                ('Gingerbread', 356),
                ('Jelly bean', 375),
                ('Lollipop', 392),
                ('Honeycomb', 408),
                ('Donut', 452),
                ('KitKat', 518),
            ]

            v.SimpleTable(
                dark=True,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', class_='text-left', children=['Name']),
                            v.Html(tag='th', class_='text-left', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=[name]),
                            v.Html(tag='td', children=[str(calorie)])
                        ]) for name, calorie in desserts
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            desserts = [
                ('Frozen Yogurt', 159),
                ('Ice cream sandwich', 237),
                ('Eclair', 262),
                ('Cupcake', 305),
                ('Gingerbread', 356),
                ('Jelly bean', 375),
                ('Lollipop', 392),
                ('Honeycomb', 408),
                ('Donut', 452),
                ('KitKat', 518),
            ]

            v.SimpleTable(
                dark=True,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', class_='text-left', children=['Name']),
                            v.Html(tag='th', class_='text-left', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=[name]),
                            v.Html(tag='td', children=[str(calorie)])
                        ]) for name, calorie in desserts
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-simple-table dark>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Calories
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in desserts"
                    :key="item.name"
                    >
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            </template>

Dense
^^^^^

You can show a dense version of the table by using the dense prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            desserts = [
                ('Frozen Yogurt', 159),
                ('Ice cream sandwich', 237),
                ('Eclair', 262),
                ('Cupcake', 305),
                ('Gingerbread', 356),
                ('Jelly bean', 375),
                ('Lollipop', 392),
                ('Honeycomb', 408),
                ('Donut', 452),
                ('KitKat', 518),
            ]

            v.SimpleTable(
                dense=True,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', class_='text-left', children=['Name']),
                            v.Html(tag='th', class_='text-left', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=[name]),
                            v.Html(tag='td', children=[str(calorie)])
                        ]) for name, calorie in desserts
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            desserts = [
                ('Frozen Yogurt', 159),
                ('Ice cream sandwich', 237),
                ('Eclair', 262),
                ('Cupcake', 305),
                ('Gingerbread', 356),
                ('Jelly bean', 375),
                ('Lollipop', 392),
                ('Honeycomb', 408),
                ('Donut', 452),
                ('KitKat', 518),
            ]

            v.SimpleTable(
                dense=True,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', class_='text-left', children=['Name']),
                            v.Html(tag='th', class_='text-left', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=[name]),
                            v.Html(tag='td', children=[str(calorie)])
                        ]) for name, calorie in desserts
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-simple-table dense>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Calories
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in desserts"
                    :key="item.name"
                    >
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            </template>

Fixed header
^^^^^^^^^^^^

Use the fixed-header prop together with the height prop to fix the header to
the top of the table.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            desserts = [
                ('Frozen Yogurt', 159),
                ('Ice cream sandwich', 237),
                ('Eclair', 262),
                ('Cupcake', 305),
                ('Gingerbread', 356),
                ('Jelly bean', 375),
                ('Lollipop', 392),
                ('Honeycomb', 408),
                ('Donut', 452),
                ('KitKat', 518),
            ]

            v.SimpleTable(
                fixed_header=True,
                height=300,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', class_='text-left', children=['Name']),
                            v.Html(tag='th', class_='text-left', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=[name]),
                            v.Html(tag='td', children=[str(calorie)])
                        ]) for name, calorie in desserts
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            desserts = [
                ('Frozen Yogurt', 159),
                ('Ice cream sandwich', 237),
                ('Eclair', 262),
                ('Cupcake', 305),
                ('Gingerbread', 356),
                ('Jelly bean', 375),
                ('Lollipop', 392),
                ('Honeycomb', 408),
                ('Donut', 452),
                ('KitKat', 518),
            ]

            v.SimpleTable(
                fixed_header=True,
                height=300,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', class_='text-left', children=['Name']),
                            v.Html(tag='th', class_='text-left', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=[name]),
                            v.Html(tag='td', children=[str(calorie)])
                        ]) for name, calorie in desserts
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-simple-table
                fixed-header
                height="300px"
            >
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Calories
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in desserts"
                    :key="item.name"
                    >
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            </template>

Height
^^^^^^

Use the height prop to set the height of the table.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            desserts = [
                ('Frozen Yogurt', 159),
                ('Ice cream sandwich', 237),
                ('Eclair', 262),
                ('Cupcake', 305),
                ('Gingerbread', 356),
                ('Jelly bean', 375),
                ('Lollipop', 392),
                ('Honeycomb', 408),
                ('Donut', 452),
                ('KitKat', 518),
            ]

            v.SimpleTable(
                height=300,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', class_='text-left', children=['Name']),
                            v.Html(tag='th', class_='text-left', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=[name]),
                            v.Html(tag='td', children=[str(calorie)])
                        ]) for name, calorie in desserts
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            desserts = [
                ('Frozen Yogurt', 159),
                ('Ice cream sandwich', 237),
                ('Eclair', 262),
                ('Cupcake', 305),
                ('Gingerbread', 356),
                ('Jelly bean', 375),
                ('Lollipop', 392),
                ('Honeycomb', 408),
                ('Donut', 452),
                ('KitKat', 518),
            ]

            v.SimpleTable(
                height=300,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', class_='text-left', children=['Name']),
                            v.Html(tag='th', class_='text-left', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=[name]),
                            v.Html(tag='td', children=[str(calorie)])
                        ]) for name, calorie in desserts
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-simple-table height="300px">
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Calories
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in desserts"
                    :key="item.name"
                    >
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            </template>
