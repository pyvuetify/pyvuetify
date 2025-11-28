NavigationDrawer
================

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/navigation-drawers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>` component is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without vue-router right out the box.

.. api::

    :py:class:`ipyvuetify.NavigationDrawer`

Usage
-----

The navigation drawer is primarily used to house links to the pages in your application. It is common to pair drawers with the v-list component using the nav property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            drawer = v.NavigationDrawer(
                v_model=True,
                children=[
                    v.List(
                        dense=True,
                        nav=True,
                        children=[
                            v.ListItem(children=[
                                v.ListItemContent(children=[
                                    v.ListItemTitle(class_='text-h6', children=['Application']),
                                    v.ListItemSubtitle(children=['subtext'])
                                ])
                            ]),
                            v.Divider(),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-view-dashboard'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Dashboard'])
                                ])
                            ]),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-image'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Photos'])
                                ])
                            ]),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-help-box'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['About'])
                                ])
                            ])
                        ]
                    )
                ]
            )

            v.Card(height='300', children=[drawer])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            drawer = v.NavigationDrawer(
                v_model=True,
                children=[
                    v.List(
                        dense=True,
                        nav=True,
                        children=[
                            v.ListItem(children=[
                                v.ListItemContent(children=[
                                    v.ListItemTitle(class_='text-h6', children=['Application']),
                                    v.ListItemSubtitle(children=['subtext'])
                                ])
                            ]),
                            v.Divider(),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-view-dashboard'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Dashboard'])
                                ])
                            ]),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-image'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Photos'])
                                ])
                            ]),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-help-box'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['About'])
                                ])
                            ])
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-navigation-drawer v-model="drawer">
                <v-list dense nav>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6">
                        Application
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        subtext
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-image</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Photos</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-help-box</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>About</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </template>

Temporary
---------

A temporary drawer sits above its application and uses a scrim (overlay) to darken the background.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            drawer = v.NavigationDrawer(
                v_model=False,
                temporary=True,
                children=[
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Item 1'])
                            ])
                        ]),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Item 2'])
                            ])
                        ]),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Item 3'])
                            ])
                        ])
                    ])
                ]
            )

            btn = v.Btn(
                children=['Toggle'],
                on_event=('click', lambda *args: setattr(drawer, 'v_model', not drawer.v_model))
            )

            v.Card(height='300', children=[drawer, btn])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            drawer = v.NavigationDrawer(
                v_model=False,
                temporary=True,
                children=[
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Item 1'])
                            ])
                        ]),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Item 2'])
                            ])
                        ]),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Item 3'])
                            ])
                        ])
                    ])
                ]
            )

            btn = v.Btn(
                children=['Toggle'],
                on_event=('click', lambda *args: setattr(drawer, 'v_model', not drawer.v_model))
            )

            v.Card(height='300', children=[drawer, btn])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-card height="300">
                <v-navigation-drawer v-model="drawer" temporary>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Item 1</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Item 2</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Item 3</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-navigation-drawer>
                <v-btn @click="drawer = !drawer">Toggle</v-btn>
              </v-card>
            </template>

Right
-----

Navigation drawers can also be positioned on the right side of your application.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            drawer = v.NavigationDrawer(
                v_model=True,
                right=True,
                children=[
                    v.List(
                        dense=True,
                        nav=True,
                        children=[
                            v.ListItem(children=[
                                v.ListItemAvatar(children=[
                                    v.Img(src='https://randomuser.me/api/portraits/women/81.jpg')
                                ]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Jane Smith']),
                                    v.ListItemSubtitle(children=['Logged In'])
                                ])
                            ]),
                            v.Divider(),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-home'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Home'])
                                ])
                            ]),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-account'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['My Account'])
                                ])
                            ]),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-account-group'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Users'])
                                ])
                            ])
                        ]
                    )
                ]
            )

            v.Card(height='300', children=[drawer])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            drawer = v.NavigationDrawer(
                v_model=True,
                right=True,
                children=[
                    v.List(
                        dense=True,
                        nav=True,
                        children=[
                            v.ListItem(children=[
                                v.ListItemAvatar(children=[
                                    v.Img(src='https://randomuser.me/api/portraits/women/81.jpg')
                                ]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Jane Smith']),
                                    v.ListItemSubtitle(children=['Logged In'])
                                ])
                            ]),
                            v.Divider(),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-home'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Home'])
                                ])
                            ]),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-account'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['My Account'])
                                ])
                            ]),
                            v.ListItem(link=True, children=[
                                v.ListItemIcon(children=[v.Icon(children=['mdi-account-group'])]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Users'])
                                ])
                            ])
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-navigation-drawer v-model="drawer" right>
                <v-list dense nav>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img src="https://randomuser.me/api/portraits/women/81.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Jane Smith</v-list-item-title>
                      <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>My Account</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-account-group</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Users</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </template>
