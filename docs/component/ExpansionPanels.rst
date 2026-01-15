ExpansionPanels
===============

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/expansion-panels/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ExpansionPanels <ipyvuetify.ExpansionPanels>` component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time; however, with the ``multiple`` property, the expansion-panel can remain open until explicitly closed.

.. api::

    :py:class:`ipyvuetify.ExpansionPanels`

Usage
-----

Expansion panels in their simplest form display a list of expandable items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.ExpansionPanels(children=[
                v.ExpansionPanel(children=[
                    v.ExpansionPanelHeader(children=['Item']),
                    v.ExpansionPanelContent(children=[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ])
                ]),
                v.ExpansionPanel(children=[
                    v.ExpansionPanelHeader(children=['Item']),
                    v.ExpansionPanelContent(children=[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ])
                ]),
                v.ExpansionPanel(children=[
                    v.ExpansionPanelHeader(children=['Item']),
                    v.ExpansionPanelContent(children=[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.ExpansionPanels(children=[
                v.ExpansionPanel(children=[
                    v.ExpansionPanelHeader(children=['Item']),
                    v.ExpansionPanelContent(children=[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ])
                ]),
                v.ExpansionPanel(children=[
                    v.ExpansionPanelHeader(children=['Item']),
                    v.ExpansionPanelContent(children=[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ])
                ]),
                v.ExpansionPanel(children=[
                    v.ExpansionPanelHeader(children=['Item']),
                    v.ExpansionPanelContent(children=[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    ])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>

Accordion
---------

Accordion expansion-panel hasn't got margins around active panel.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.ExpansionPanels(
                accordion=True,
                children=[
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.ExpansionPanels(
                accordion=True,
                children=[
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>

Model
-----

Expansion panels can be controlled externally by modifying the ``v_model``. Its value corresponds to a zero-based index of the currently opened expansion panel content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            panels = v.ExpansionPanels(
                v_model=0,
                children=[
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Header 1']),
                        v.ExpansionPanelContent(children=['Content 1'])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Header 2']),
                        v.ExpansionPanelContent(children=['Content 2'])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Header 3']),
                        v.ExpansionPanelContent(children=['Content 3'])
                    ])
                ]
            )

            btn_all = v.Btn(
                children=['All'],
                class_='mr-2',
                on_event=('click', lambda *args: setattr(panels, 'v_model', [0, 1, 2]))
            )
            btn_none = v.Btn(
                children=['None'],
                on_event=('click', lambda *args: setattr(panels, 'v_model', None))
            )

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[btn_all, btn_none])
                ]),
                v.Row(children=[
                    v.Col(children=[panels])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            panels = v.ExpansionPanels(
                v_model=0,
                children=[
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Header 1']),
                        v.ExpansionPanelContent(children=['Content 1'])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Header 2']),
                        v.ExpansionPanelContent(children=['Content 2'])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Header 3']),
                        v.ExpansionPanelContent(children=['Content 3'])
                    ])
                ]
            )

            btn_all = v.Btn(
                children=['All'],
                on_event=('click', lambda *args: setattr(panels, 'v_model', [0, 1, 2]))
            )
            btn_none = v.Btn(
                children=['None'],
                on_event=('click', lambda *args: setattr(panels, 'v_model', None))
            )

            v.Container(children=[btn_all, btn_none, panels])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-btn @click="panel = [0, 1, 2]">All</v-btn>
                <v-btn @click="panel = null">None</v-btn>
                <v-expansion-panels v-model="panel">
                  <v-expansion-panel>
                    <v-expansion-panel-header>Header 1</v-expansion-panel-header>
                    <v-expansion-panel-content>Content 1</v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>Header 2</v-expansion-panel-header>
                    <v-expansion-panel-content>Content 2</v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>Header 3</v-expansion-panel-header>
                    <v-expansion-panel-content>Content 3</v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-container>
            </template>

Popout
------

The expansion-panel also has popout design. With it, expansion-panel is enlarged when activated.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.ExpansionPanels(
                popout=True,
                children=[
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.ExpansionPanels(
                popout=True,
                children=[
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ]),
                    v.ExpansionPanel(children=[
                        v.ExpansionPanelHeader(children=['Item']),
                        v.ExpansionPanelContent(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-expansion-panels popout>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Item
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>
