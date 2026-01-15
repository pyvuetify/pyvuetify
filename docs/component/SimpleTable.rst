SimpleTable
===========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/simple-tables/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SimpleTable <ipyvuetify.SimpleTable>` component is a simple wrapper component around the table element. Inside the component you can use all the regular table elements.

.. api::

    :py:class:`ipyvuetify.SimpleTable`

Usage
-----

The simple table is a wrapper component around the ``<table>`` element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.SimpleTable(children=[
                v.Html(tag='thead', children=[
                    v.Html(tag='tr', children=[
                        v.Html(tag='th', children=['Dessert']),
                        v.Html(tag='th', children=['Calories'])
                    ])
                ]),
                v.Html(tag='tbody', children=[
                    v.Html(tag='tr', children=[
                        v.Html(tag='td', children=['Frozen Yogurt']),
                        v.Html(tag='td', children=['159'])
                    ]),
                    v.Html(tag='tr', children=[
                        v.Html(tag='td', children=['Ice cream sandwich']),
                        v.Html(tag='td', children=['237'])
                    ]),
                    v.Html(tag='tr', children=[
                        v.Html(tag='td', children=['Eclair']),
                        v.Html(tag='td', children=['262'])
                    ])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.SimpleTable(children=[
                v.Html(tag='thead', children=[
                    v.Html(tag='tr', children=[
                        v.Html(tag='th', children=['Dessert']),
                        v.Html(tag='th', children=['Calories'])
                    ])
                ]),
                v.Html(tag='tbody', children=[
                    v.Html(tag='tr', children=[
                        v.Html(tag='td', children=['Frozen Yogurt']),
                        v.Html(tag='td', children=['159'])
                    ]),
                    v.Html(tag='tr', children=[
                        v.Html(tag='td', children=['Ice cream sandwich']),
                        v.Html(tag='td', children=['237'])
                    ])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-simple-table>
                <thead>
                  <tr>
                    <th>Dessert</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Frozen Yogurt</td>
                    <td>159</td>
                  </tr>
                  <tr>
                    <td>Ice cream sandwich</td>
                    <td>237</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </template>

Dense
-----

You can show a dense version of the table by using the dense prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.SimpleTable(
                dense=True,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', children=['Dessert']),
                            v.Html(tag='th', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=['Frozen Yogurt']),
                            v.Html(tag='td', children=['159'])
                        ]),
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=['Ice cream sandwich']),
                            v.Html(tag='td', children=['237'])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.SimpleTable(
                dense=True,
                children=[
                    v.Html(tag='thead', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='th', children=['Dessert']),
                            v.Html(tag='th', children=['Calories'])
                        ])
                    ]),
                    v.Html(tag='tbody', children=[
                        v.Html(tag='tr', children=[
                            v.Html(tag='td', children=['Frozen Yogurt']),
                            v.Html(tag='td', children=['159'])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th>Dessert</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Frozen Yogurt</td>
                    <td>159</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </template>
