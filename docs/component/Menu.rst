Menu
====

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/menus/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Menu <ipyvuetify.Menu>` component shows a menu at the position of the element used to activate it.

.. api::

    :py:class:`ipyvuetify.Menu`

Usage
-----

Remember to put the element that activates the menu in the ``activator`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            menu = v.Menu(
                v_slots=[{
                    'name': 'activator',
                    'variable': 'menuData',
                    'children': v.Btn(
                        v_on='menuData.on',
                        color='primary',
                        dark=True,
                        children=['Dropdown']
                    )
                }],
                children=[
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 1'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 2'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 3'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 4'])
                        ])
                    ])
                ]
            )

            menu

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            menu = v.Menu(
                v_slots=[{
                    'name': 'activator',
                    'variable': 'menuData',
                    'children': v.Btn(
                        v_on='menuData.on',
                        color='primary',
                        dark=True,
                        children=['Dropdown']
                    )
                }],
                children=[
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 1'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 2'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 3'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 4'])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-menu>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">
                    Dropdown
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Option 1</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Option 2</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Option 3</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Option 4</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>

Offset X
--------

Menu can be offset by the X axis to make the activator visible.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            menu = v.Menu(
                offset_x=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'menuData',
                    'children': v.Btn(
                        v_on='menuData.on',
                        color='primary',
                        dark=True,
                        children=['Dropdown']
                    )
                }],
                children=[
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 1'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 2'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 3'])
                        ])
                    ])
                ]
            )

            menu

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            menu = v.Menu(
                offset_x=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'menuData',
                    'children': v.Btn(
                        v_on='menuData.on',
                        color='primary',
                        dark=True,
                        children=['Dropdown']
                    )
                }],
                children=[
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 1'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 2'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 3'])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-menu offset-x>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">
                    Dropdown
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Option 1</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Option 2</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Option 3</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>

Open On Hover
-------------

Menus can be accessed using hover instead of clicking with the ``open_on_hover`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            menu = v.Menu(
                open_on_hover=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'menuData',
                    'children': v.Btn(
                        v_on='menuData.on',
                        color='primary',
                        dark=True,
                        children=['Dropdown']
                    )
                }],
                children=[
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 1'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 2'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 3'])
                        ])
                    ])
                ]
            )

            menu

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            menu = v.Menu(
                open_on_hover=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'menuData',
                    'children': v.Btn(
                        v_on='menuData.on',
                        color='primary',
                        dark=True,
                        children=['Dropdown']
                    )
                }],
                children=[
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 1'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 2'])
                        ]),
                        v.ListItem(children=[
                            v.ListItemTitle(children=['Option 3'])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-menu open-on-hover>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">
                    Dropdown
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Option 1</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Option 2</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Option 3</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
