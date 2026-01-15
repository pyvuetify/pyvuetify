BtnToggle
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/button-groups/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`BtnToggle <ipyvuetify.BtnToggle>` component is a simple wrapper for :py:class:`ItemGroup <ipyvuetify.ItemGroup>` built specifically to work with :py:class:`Btn <ipyvuetify.Btn>`.

.. api::

    -   :py:class:`ipyvuetify.BtnToggle`
    -   :py:class:`ipyvuetify.Btn`

.. seealso::

    :doc:`Btn`

Usage
-----

Toggle buttons allow you to create a styled group of buttons that can be selected or toggled under a single ``v_model``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(cols=12, sm=6, class_="py-2", children=[
                        v.Html(tag="p", children=["Exclusive"]),
                        v.BtnToggle(children=[
                            v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])])
                        ])
                    ]),
                    v.Col(cols=12, sm=6, class_="py-2", children=[
                        v.Html(tag="p", children=["Multiple"]),
                        v.BtnToggle(dense=True, background_color="primary", dark=True, multiple=True, children=[
                            v.Btn(children=[v.Icon(children=["mdi-format-bold"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-italic"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-underline"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-color-fill"])])
                        ])
                    ]),
                    v.Col(cols=12, sm=6, class_="py-2", children=[
                        v.Html(tag="p", children=["No Options Selected"]),
                        v.BtnToggle(children=[
                            v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])])
                        ])
                    ]),
                    v.Col(cols=12, sm=6, class_="py-2", children=[
                        v.Html(tag="p", children=["Mandatory"]),
                        v.BtnToggle(shaped=True, mandatory=True, children=[
                            v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])])
                        ])
                    ]),
                    v.Col(cols=12, class_="py-2", children=[
                        v.Html(tag="p", children=["Text Options"]),
                        v.BtnToggle(tile=True, color="deep-purple accent-3", group=True, children=[
                            v.Btn(value="left", children=["Left"]),
                            v.Btn(value="center", children=["Center"]),
                            v.Btn(value="right", children=["Right"]),
                            v.Btn(value="justify", children=["Justify"])
                        ])
                    ]),
                    v.Col(cols=12, class_="py-2", children=[
                        v.Html(tag="p", children=["Text & Icon Options"]),
                        v.BtnToggle(borderless=True, children=[
                            v.Btn(value="left", children=[
                                v.Html(tag="span", class_="hidden-sm-and-down", children=["Left"]),
                                v.Icon(right=True, children=["mdi-format-align-left"])
                            ]),
                            v.Btn(value="center", children=[
                                v.Html(tag="span", class_="hidden-sm-and-down", children=["Center"]),
                                v.Icon(right=True, children=["mdi-format-align-center"])
                            ]),
                            v.Btn(value="right", children=[
                                v.Html(tag="span", class_="hidden-sm-and-down", children=["Right"]),
                                v.Icon(right=True, children=["mdi-format-align-right"])
                            ]),
                            v.Btn(value="justify", children=[
                                v.Html(tag="span", class_="hidden-sm-and-down", children=["Justify"]),
                                v.Icon(right=True, children=["mdi-format-align-justify"])
                            ])
                        ])
                    ])
                ]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(cols=12, sm=6, class_="py-2", children=[
                        v.Html(tag="p", children=["Exclusive"]),
                        v.BtnToggle(children=[
                            v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])])
                        ])
                    ]),
                    v.Col(cols=12, sm=6, class_="py-2", children=[
                        v.Html(tag="p", children=["Multiple"]),
                        v.BtnToggle(dense=True, background_color="primary", dark=True, multiple=True, children=[
                            v.Btn(children=[v.Icon(children=["mdi-format-bold"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-italic"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-underline"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-color-fill"])])
                        ])
                    ]),
                    v.Col(cols=12, sm=6, class_="py-2", children=[
                        v.Html(tag="p", children=["No Options Selected"]),
                        v.BtnToggle(children=[
                            v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])])
                        ])
                    ]),
                    v.Col(cols=12, sm=6, class_="py-2", children=[
                        v.Html(tag="p", children=["Mandatory"]),
                        v.BtnToggle(shaped=True, mandatory=True, children=[
                            v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
                            v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])])
                        ])
                    ]),
                    v.Col(cols=12, class_="py-2", children=[
                        v.Html(tag="p", children=["Text Options"]),
                        v.BtnToggle(tile=True, color="deep-purple accent-3", group=True, children=[
                            v.Btn(value="left", children=["Left"]),
                            v.Btn(value="center", children=["Center"]),
                            v.Btn(value="right", children=["Right"]),
                            v.Btn(value="justify", children=["Justify"])
                        ])
                    ]),
                    v.Col(cols=12, class_="py-2", children=[
                        v.Html(tag="p", children=["Text & Icon Options"]),
                        v.BtnToggle(borderless=True, children=[
                            v.Btn(value="left", children=[
                                v.Html(tag="span", class_="hidden-sm-and-down", children=["Left"]),
                                v.Icon(right=True, children=["mdi-format-align-left"])
                            ]),
                            v.Btn(value="center", children=[
                                v.Html(tag="span", class_="hidden-sm-and-down", children=["Center"]),
                                v.Icon(right=True, children=["mdi-format-align-center"])
                            ]),
                            v.Btn(value="right", children=[
                                v.Html(tag="span", class_="hidden-sm-and-down", children=["Right"]),
                                v.Icon(right=True, children=["mdi-format-align-right"])
                            ]),
                            v.Btn(value="justify", children=[
                                v.Html(tag="span", class_="hidden-sm-and-down", children=["Justify"]),
                                v.Icon(right=True, children=["mdi-format-align-justify"])
                            ])
                        ])
                    ])
                ]),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row>
                    <v-col cols="12" sm="6" class="py-2">
                        <p>Exclusive</p>
                        <v-btn-toggle v-model="toggle_exclusive">
                            <v-btn><v-icon>mdi-format-align-left</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-align-center</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-align-right</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-align-justify</v-icon></v-btn>
                        </v-btn-toggle>
                    </v-col>

                    <v-col cols="12" sm="6" class="py-2">
                        <p>Multiple</p>
                        <v-btn-toggle v-model="toggle_multiple" dense background-color="primary" dark multiple>
                            <v-btn><v-icon>mdi-format-bold</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-italic</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-underline</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-color-fill</v-icon></v-btn>
                        </v-btn-toggle>
                    </v-col>

                    <v-col cols="12" sm="6" class="py-2">
                        <p>No Options Selected</p>
                        <v-btn-toggle v-model="toggle_none">
                            <v-btn><v-icon>mdi-format-align-left</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-align-center</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-align-right</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-align-justify</v-icon></v-btn>
                        </v-btn-toggle>
                    </v-col>

                    <v-col cols="12" sm="6" class="py-2">
                        <p>Mandatory</p>
                        <v-btn-toggle v-model="toggle_one" shaped mandatory>
                            <v-btn><v-icon>mdi-format-align-left</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-align-center</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-align-right</v-icon></v-btn>
                            <v-btn><v-icon>mdi-format-align-justify</v-icon></v-btn>
                        </v-btn-toggle>
                    </v-col>

                    <v-col cols="12" class="py-2">
                        <p>Text Options</p>
                        <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
                            <v-btn value="left">Left</v-btn>
                            <v-btn value="center">Center</v-btn>
                            <v-btn value="right">Right</v-btn>
                            <v-btn value="justify">Justify</v-btn>
                        </v-btn-toggle>
                    </v-col>

                    <v-col cols="12" class="py-2">
                        <p>Text &amp; Icon Options</p>
                        <v-btn-toggle v-model="icon" borderless>
                            <v-btn value="left"><span class="hidden-sm-and-down">Left</span><v-icon right>mdi-format-align-left</v-icon></v-btn>
                            <v-btn value="center"><span class="hidden-sm-and-down">Center</span><v-icon right>mdi-format-align-center</v-icon></v-btn>
                            <v-btn value="right"><span class="hidden-sm-and-down">Right</span><v-icon right>mdi-format-align-right</v-icon></v-btn>
                            <v-btn value="justify"><span class="hidden-sm-and-down">Justify</span><v-icon right>mdi-format-align-justify</v-icon></v-btn>
                        </v-btn-toggle>
                    </v-col>
                </v-row>
            </template>

Mandatory
---------

A :py:class:`BtnToggle <ipyvuetify.BtnToggle>` with the ``mandatory`` prop will always have a value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            toggle_mandatory = v.BtnToggle(
                v_model=0,
                mandatory=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_mandatory])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            toggle_mandatory = v.BtnToggle(
                v_model=0,
                mandatory=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_mandatory])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-btn-toggle v-model="toggle_mandatory" mandatory>
                    <v-btn><v-icon>mdi-format-align-left</v-icon></v-btn>
                    <v-btn><v-icon>mdi-format-align-center</v-icon></v-btn>
                    <v-btn><v-icon>mdi-format-align-right</v-icon></v-btn>
                    <v-btn><v-icon>mdi-format-align-justify</v-icon></v-btn>
                </v-btn-toggle>
            </template>

            <script>
                export default {
                    data: () => ({
                        toggle_mandatory: 0,
                    }),
                }
            </script>

Multiple
--------

A :py:class:`BtnToggle <ipyvuetify.BtnToggle>` with the ``multiple`` prop will allow a user to select
multiple return values as an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            toggle_multiple = v.BtnToggle(
                v_model=[0, 1, 2],
                multiple=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_multiple])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            toggle_multiple = v.BtnToggle(
                v_model=[0, 1, 2],
                multiple=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_multiple])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-btn-toggle v-model="toggle_multiple" multiple>
                    <v-btn><v-icon>mdi-format-align-left</v-icon></v-btn>
                    <v-btn><v-icon>mdi-format-align-center</v-icon></v-btn>
                    <v-btn><v-icon>mdi-format-align-right</v-icon></v-btn>
                    <v-btn><v-icon>mdi-format-align-justify</v-icon></v-btn>
                </v-btn-toggle>
            </template>

            <script>
                export default {
                    data: () => ({
                        toggle_multiple: [0, 1, 2],
                    }),
                }
            </script>

Rounded
-------

You can make :py:class:`BtnToggle <ipyvuetify.BtnToggle>` rounded using the ``rounded`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            toggle_rounded = v.BtnToggle(
                v_model=1,
                rounded=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_rounded])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            toggle_rounded = v.BtnToggle(
                v_model=1,
                rounded=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_rounded])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-btn-toggle v-model="toggle_rounded" rounded>
                    <v-btn><v-icon>mdi-format-align-left</v-icon></v-btn>
                    <v-btn><v-icon>mdi-format-align-center</v-icon></v-btn>
                    <v-btn><v-icon>mdi-format-align-right</v-icon></v-btn>
                    <v-btn><v-icon>mdi-format-align-justify</v-icon></v-btn>
                </v-btn-toggle>
            </template>

            <script>
                export default {
                    data: () => ({
                        toggle_rounded: 1,
                    }),
                }
            </script>

Toolbar
-------

Easily integrate customized button solutions with a v-toolbar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Toolbar(dense=True, children=[
                    v.OverflowBtn(
                        items=['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
                        editable=True,
                        label='Select size',
                        hide_details=True,
                        class_='pa-0',
                        overflow=True
                    ),
                    v.Divider(vertical=True),
                    v.Spacer(),
                    v.BtnToggle(
                        v_model=[1, 3],
                        color='primary',
                        dense=True,
                        group=True,
                        multiple=True,
                        children=[
                            v.Btn(value=1, text=True, children=[v.Icon(children=['mdi-format-bold'])]),
                            v.Btn(value=2, text=True, children=[v.Icon(children=['mdi-format-italic'])]),
                            v.Btn(value=3, text=True, children=[v.Icon(children=['mdi-format-underline'])]),
                            v.Btn(value=4, text=True, children=[v.Icon(children=['mdi-format-color-fill'])])
                        ]
                    ),
                    v.Html(tag='div', class_='mx-4'),
                    v.BtnToggle(
                        v_model=2,
                        color='primary',
                        dense=True,
                        group=True,
                        children=[
                            v.Btn(value=1, text=True, children=[v.Icon(children=['mdi-format-align-left'])]),
                            v.Btn(value=2, text=True, children=[v.Icon(children=['mdi-format-align-center'])]),
                            v.Btn(value=3, text=True, children=[v.Icon(children=['mdi-format-align-right'])]),
                            v.Btn(value=4, text=True, children=[v.Icon(children=['mdi-format-align-justify'])])
                        ]
                    )
                ])
            ])


    .. tab-item:: :fab:`python` Python

        .. code-block:: python


            import ipyvuetify as v

            v.Container(children=[
                v.Toolbar(dense=True, children=[
                    v.OverflowBtn(
                        items=['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
                        editable=True,
                        label='Select size',
                        hide_details=True,
                        class_='pa-0',
                        overflow=True
                    ),
                    v.Divider(vertical=True),
                    v.Spacer(),
                    v.BtnToggle(
                        v_model=[1, 3],
                        color='primary',
                        dense=True,
                        group=True,
                        multiple=True,
                        children=[
                            v.Btn(value=1, text=True, children=[v.Icon(children=['mdi-format-bold'])]),
                            v.Btn(value=2, text=True, children=[v.Icon(children=['mdi-format-italic'])]),
                            v.Btn(value=3, text=True, children=[v.Icon(children=['mdi-format-underline'])]),
                            v.Btn(value=4, text=True, children=[v.Icon(children=['mdi-format-color-fill'])])
                        ]
                    ),
                    v.Html(tag='div', class_='mx-4'),
                    v.BtnToggle(
                        v_model=2,
                        color='primary',
                        dense=True,
                        group=True,
                        children=[
                            v.Btn(value=1, text=True, children=[v.Icon(children=['mdi-format-align-left'])]),
                            v.Btn(value=2, text=True, children=[v.Icon(children=['mdi-format-align-center'])]),
                            v.Btn(value=3, text=True, children=[v.Icon(children=['mdi-format-align-right'])]),
                            v.Btn(value=4, text=True, children=[v.Icon(children=['mdi-format-align-justify'])])
                        ]
                    )
                ])
            ])


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-toolbar dense>
                    <v-overflow-btn
                        :items="dropdown_font"
                        label="Select font"
                        hide-details
                        class="pa-0"
                    ></v-overflow-btn>

                    <template v-if="$vuetify.breakpoint.mdAndUp">
                        <v-divider vertical></v-divider>

                        <v-overflow-btn
                            :items="dropdown_edit"
                            editable
                            label="Select size"
                            hide-details
                            class="pa-0"
                            overflow
                        ></v-overflow-btn>

                        <v-divider vertical></v-divider>

                        <v-spacer></v-spacer>

                        <v-btn-toggle
                            v-model="toggle_multiple"
                            color="primary"
                            dense
                            group
                            multiple
                        >
                            <v-btn :value="1" text><v-icon>mdi-format-bold</v-icon></v-btn>
                            <v-btn :value="2" text><v-icon>mdi-format-italic</v-icon></v-btn>
                            <v-btn :value="3" text><v-icon>mdi-format-underline</v-icon></v-btn>
                            <v-btn :value="4" text><v-icon>mdi-format-color-fill</v-icon></v-btn>
                        </v-btn-toggle>

                        <div class="mx-4"></div>

                        <v-btn-toggle
                            v-model="toggle_exclusive"
                            color="primary"
                            dense
                            group
                        >
                            <v-btn :value="1" text><v-icon>mdi-format-align-left</v-icon></v-btn>
                            <v-btn :value="2" text><v-icon>mdi-format-align-center</v-icon></v-btn>
                            <v-btn :value="3" text><v-icon>mdi-format-align-right</v-icon></v-btn>
                            <v-btn :value="4" text><v-icon>mdi-format-align-justify</v-icon></v-btn>
                        </v-btn-toggle>
                    </template>
                </v-toolbar>
            </template>
