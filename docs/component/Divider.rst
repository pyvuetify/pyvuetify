Divider
=======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/dividers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Divider <ipyvuetify.Divider>` component is used to separate sections of lists or layouts.

.. api::

    :py:class:`ipyvuetify.Divider`

Usage
-----

Dividers in their simplest form display a horizontal line.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Html(tag='div', children=['Section 1']),
                v.Divider(),
                v.Html(tag='div', children=['Section 2']),
                v.Divider(),
                v.Html(tag='div', children=['Section 3'])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Html(tag='div', children=['Section 1']),
                v.Divider(),
                v.Html(tag='div', children=['Section 2']),
                v.Divider(),
                v.Html(tag='div', children=['Section 3'])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <div>Section 1</div>
                <v-divider></v-divider>
                <div>Section 2</div>
                <v-divider></v-divider>
                <div>Section 3</div>
              </v-container>
            </template>

Inset
-----

Inset dividers are moved 72px to the right. This will cause them to line up with list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.List(
                three_line=True,
                children=[
                    v.Subheader(children=['Today']),
                    v.ListItem(children=[
                        v.ListItemAvatar(children=[
                            v.Img(src='https://cdn.vuetifyjs.com/images/lists/1.jpg')
                        ]),
                        v.ListItemContent(children=[
                            v.ListItemTitle(children=['Brunch this weekend?']),
                            v.ListItemSubtitle(children=['Ali Connors — I\'ll be in your neighborhood'])
                        ])
                    ]),
                    v.Divider(inset=True),
                    v.ListItem(children=[
                        v.ListItemAvatar(children=[
                            v.Img(src='https://cdn.vuetifyjs.com/images/lists/2.jpg')
                        ]),
                        v.ListItemContent(children=[
                            v.ListItemTitle(children=['Summer BBQ']),
                            v.ListItemSubtitle(children=['to Alex, Scott, Jennifer'])
                        ])
                    ]),
                    v.Divider(inset=True),
                    v.ListItem(children=[
                        v.ListItemAvatar(children=[
                            v.Img(src='https://cdn.vuetifyjs.com/images/lists/3.jpg')
                        ]),
                        v.ListItemContent(children=[
                            v.ListItemTitle(children=['Oui oui']),
                            v.ListItemSubtitle(children=['Sandra Adams — Do you have Paris recommendations?'])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.List(
                three_line=True,
                children=[
                    v.Subheader(children=['Today']),
                    v.ListItem(children=[
                        v.ListItemAvatar(children=[
                            v.Img(src='https://cdn.vuetifyjs.com/images/lists/1.jpg')
                        ]),
                        v.ListItemContent(children=[
                            v.ListItemTitle(children=['Brunch this weekend?']),
                            v.ListItemSubtitle(children=['Ali Connors'])
                        ])
                    ]),
                    v.Divider(inset=True),
                    v.ListItem(children=[
                        v.ListItemAvatar(children=[
                            v.Img(src='https://cdn.vuetifyjs.com/images/lists/2.jpg')
                        ]),
                        v.ListItemContent(children=[
                            v.ListItemTitle(children=['Summer BBQ']),
                            v.ListItemSubtitle(children=['to Alex, Scott, Jennifer'])
                        ])
                    ]),
                    v.Divider(inset=True)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-list three-line>
                <v-subheader>Today</v-subheader>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Brunch this weekend?</v-list-item-title>
                    <v-list-item-subtitle>Ali Connors</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Summer BBQ</v-list-item-title>
                    <v-list-item-subtitle>to Alex, Scott, Jennifer</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
              </v-list>
            </template>

Vertical
--------

Vertical dividers give you more tools for unique layouts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                children=[
                    v.Toolbar(
                        flat=True,
                        children=[
                            v.ToolbarTitle(children=['Title']),
                            v.Divider(class_='mx-4', inset=True, vertical=True),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-home'])]),
                        ]
                    ),
                    v.CardText(children=['My Home'])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                children=[
                    v.Toolbar(
                        flat=True,
                        children=[
                            v.ToolbarTitle(children=['Title']),
                            v.Divider(class_='mx-4', inset=True, vertical=True),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-home'])]),
                        ]
                    ),
                    v.CardText(children=['My Home'])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-card>
                <v-toolbar flat>
                  <v-toolbar-title>Title</v-toolbar-title>
                  <v-divider
                    class="mx-4"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-home</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>My Home</v-card-text>
              </v-card>
            </template>

Subheaders
----------

Dividers and subheaders can help break up content and can optionally line up with one another by using the same ``inset`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                max_width='500',
                children=[
                    v.Toolbar(
                        color='cyan',
                        dark=True,
                        children=[
                            v.ToolbarTitle(children=['Message Board'])
                        ]
                    ),
                    v.List(
                        three_line=True,
                        children=[
                            v.Subheader(inset=True, children=['Today']),
                            v.ListItem(children=[
                                v.ListItemAvatar(children=[
                                    v.Img(src='https://picsum.photos/250/300?image=660')
                                ]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Meeting @ Noon']),
                                    v.ListItemSubtitle(children=['Spike Lee'])
                                ])
                            ]),
                            v.Divider(inset=True),
                            v.ListItem(children=[
                                v.ListItemAvatar(children=[
                                    v.Img(src='https://picsum.photos/250/300?image=821')
                                ]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Summer BBQ']),
                                    v.ListItemSubtitle(children=['to Operations support'])
                                ])
                            ]),
                            v.Divider(inset=True),
                            v.Subheader(inset=True, children=['Yesterday']),
                            v.ListItem(children=[
                                v.ListItemAvatar(children=[
                                    v.Img(src='https://picsum.photos/250/300?image=1006')
                                ]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Dinner tonight?']),
                                    v.ListItemSubtitle(children=['LaToya'])
                                ])
                            ])
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                max_width='500',
                children=[
                    v.Toolbar(
                        color='cyan',
                        dark=True,
                        children=[v.ToolbarTitle(children=['Message Board'])]
                    ),
                    v.List(
                        three_line=True,
                        children=[
                            v.Subheader(inset=True, children=['Today']),
                            v.ListItem(children=[
                                v.ListItemAvatar(children=[
                                    v.Img(src='https://picsum.photos/250/300?image=660')
                                ]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Meeting @ Noon']),
                                    v.ListItemSubtitle(children=['Spike Lee'])
                                ])
                            ]),
                            v.Divider(inset=True),
                            v.Subheader(inset=True, children=['Yesterday']),
                            v.ListItem(children=[
                                v.ListItemAvatar(children=[
                                    v.Img(src='https://picsum.photos/250/300?image=1006')
                                ]),
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=['Dinner tonight?']),
                                    v.ListItemSubtitle(children=['LaToya'])
                                ])
                            ])
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-card max-width="500">
                <v-toolbar color="cyan" dark>
                  <v-toolbar-title>Message Board</v-toolbar-title>
                </v-toolbar>
                <v-list three-line>
                  <v-subheader inset>Today</v-subheader>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img src="https://picsum.photos/250/300?image=660"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Meeting @ Noon</v-list-item-title>
                      <v-list-item-subtitle>Spike Lee</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-subheader inset>Yesterday</v-subheader>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img src="https://picsum.photos/250/300?image=1006"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>Dinner tonight?</v-list-item-title>
                      <v-list-item-subtitle>LaToya</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </template>
