List
====

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/lists/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`List <ipyvuetify.List>` component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection.

.. api::

    :py:class:`ipyvuetify.List`

Usage
-----

Lists come in three main variations. single-line (default), two-line and three-line. The line declaration specifies the minimum height of the item and can also be controlled from ``v-list`` with the same prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.List(children=[
                v.ListItem(children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['Single-line item'])
                    ])
                ]),
                v.ListItem(two_line=True, children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['Two-line item']),
                        v.ListItemSubtitle(children=['Secondary text'])
                    ])
                ]),
                v.ListItem(three_line=True, children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['Three-line item']),
                        v.ListItemSubtitle(children=['Secondary line text']),
                        v.ListItemSubtitle(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.List(children=[
                v.ListItem(children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['Single-line item'])
                    ])
                ]),
                v.ListItem(two_line=True, children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['Two-line item']),
                        v.ListItemSubtitle(children=['Secondary text'])
                    ])
                ]),
                v.ListItem(three_line=True, children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['Three-line item']),
                        v.ListItemSubtitle(children=['Secondary line text']),
                        v.ListItemSubtitle(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Single-line item</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Two-line item</v-list-item-title>
                    <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title>Three-line item</v-list-item-title>
                    <v-list-item-subtitle>Secondary line text</v-list-item-subtitle>
                    <v-list-item-subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </template>

Dense
-----

``v-list`` can be lowered with dense property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                max_width='300',
                children=[
                    v.Toolbar(color='primary', dark=True, children=[
                        v.ToolbarTitle(children=['REPORTS'])
                    ]),
                    v.List(dense=True, children=[
                        v.Subheader(children=['REPORTS']),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Real-Time'])
                            ])
                        ]),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Audience'])
                            ])
                        ]),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Conversions'])
                            ])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                max_width='300',
                children=[
                    v.Toolbar(color='primary', dark=True, children=[
                        v.ToolbarTitle(children=['REPORTS'])
                    ]),
                    v.List(dense=True, children=[
                        v.Subheader(children=['REPORTS']),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Real-Time'])
                            ])
                        ]),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Audience'])
                            ])
                        ]),
                        v.ListItem(children=[
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Conversions'])
                            ])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-card max-width="300">
                <v-toolbar color="primary" dark>
                  <v-toolbar-title>REPORTS</v-toolbar-title>
                </v-toolbar>
                <v-list dense>
                  <v-subheader>REPORTS</v-subheader>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Real-Time</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Audience</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Conversions</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </template>

Avatar
------

A simple list utilizing ``v-list-item-icon``, ``v-list-item-title`` and ``v-list-item-avatar``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                max_width='300',
                children=[
                    v.Toolbar(color='blue', dark=True, children=[
                        v.ToolbarTitle(children=['Inbox'])
                    ]),
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemAvatar(children=[
                                v.Img(src='https://cdn.vuetifyjs.com/images/lists/1.jpg')
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Jason Oner'])
                            ])
                        ]),
                        v.Divider(inset=True),
                        v.ListItem(children=[
                            v.ListItemAvatar(children=[
                                v.Img(src='https://cdn.vuetifyjs.com/images/lists/2.jpg')
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Travis Howard'])
                            ])
                        ]),
                        v.Divider(inset=True),
                        v.ListItem(children=[
                            v.ListItemAvatar(children=[
                                v.Img(src='https://cdn.vuetifyjs.com/images/lists/3.jpg')
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Ali Connors'])
                            ])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                max_width='300',
                children=[
                    v.Toolbar(color='blue', dark=True, children=[
                        v.ToolbarTitle(children=['Inbox'])
                    ]),
                    v.List(children=[
                        v.ListItem(children=[
                            v.ListItemAvatar(children=[
                                v.Img(src='https://cdn.vuetifyjs.com/images/lists/1.jpg')
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Jason Oner'])
                            ])
                        ]),
                        v.Divider(inset=True),
                        v.ListItem(children=[
                            v.ListItemAvatar(children=[
                                v.Img(src='https://cdn.vuetifyjs.com/images/lists/2.jpg')
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Travis Howard'])
                            ])
                        ]),
                        v.Divider(inset=True),
                        v.ListItem(children=[
                            v.ListItemAvatar(children=[
                                v.Img(src='https://cdn.vuetifyjs.com/images/lists/3.jpg')
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Ali Connors'])
                            ])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-card max-width="300">
                <v-toolbar color="blue" dark>
                  <v-toolbar-title>Inbox</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Jason Oner</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Travis Howard</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Ali Connors</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </template>
