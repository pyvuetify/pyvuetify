Btn
===

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Btn documentation
    <https://v2.vuetifyjs.com/en/components/buttons/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Btn <ipyvuetify.Btn>` component replaces the standard html button with a material
design theme and many configurable options. Any color helper class can be used to alter background
or text color.

.. api::

    -   :py:class:`ipyvuetify.Btn`
    -   :py:class:`ipyvuetify.BtnToggle`

.. seealso::

    :doc:`BtnToggle`

Usage
-----

Buttons in their simplest form contain uppercase text, a slight elevation, hover effect, and a
ripple effect on click.

.. jupyter-execute::

    import ipyvuetify as v

    v.Container(children=[
        v.Btn(children=['Click Me'])
    ])

Block
-----

``block`` buttons extend the full available width.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(block=True, class_='mb-2', children=['Block Button']),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(block=True, class_='mb-2', children=['Block Button']),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-btn block class="mb-2">Block Button</v-btn>
            </template>

Depressed
---------

``depressed`` buttons maintain their background color but have no box shadow.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(depressed=True, children=['Normal'], class_="mx-2"),
                v.Btn(depressed=True, color='primary', children=['Primary'], class_="mx-2"),
                v.Btn(depressed=True, color='error', children=['Error'], class_="mx-2"),
                v.Btn(depressed=True, disabled=True, children=['Disabled'], class_="mx-2"),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(depressed=True, children=['Normal'], class_="mx-2"),
                v.Btn(depressed=True, color='primary', children=['Primary'], class_="mx-2"),
                v.Btn(depressed=True, color='error', children=['Error'], class_="mx-2"),
                v.Btn(depressed=True, disabled=True, children=['Disabled'], class_="mx-2"),
            ])

    .. tab-item:: :fab:`vuejs` Vue templates

        .. code-block:: vue

            <template>
                <v-row align="center" justify="space-around">
                    <v-btn depressed class="mx-2">Normal</v-btn>
                    <v-btn depressed color="primary" class="mx-2">Primary</v-btn>
                    <v-btn depressed color="error" class="mx-2">Error</v-btn>
                    <v-btn depressed disabled class="mx-2">Disabled</v-btn>
                </v-row>
            </template>

Floating / FAB
--------------

Floating action buttons (FAB) are circular and typically contain an icon. Use ``fab`` and size props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(fab=True, dark=True, small=True, color='primary', children=[v.Icon(dark=True, children=['mdi-minus'])], class_="mx-2"),
                v.Btn(fab=True, dark=True, small=True, color='pink', children=[v.Icon(dark=True, children=['mdi-heart'])], class_="mx-2"),
                v.Btn(fab=True, dark=True, color='indigo', children=[v.Icon(dark=True, children=['mdi-plus'])], class_="mx-2"),
                v.Btn(fab=True, dark=True, large=True, color='cyan', children=[v.Icon(dark=True, children=['mdi-pencil'])], class_="mx-2"),
                v.Btn(fab=True, dark=True, large=True, color='purple', children=[v.Icon(dark=True, children=['mdi-android'])], class_="mx-2"),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(fab=True, dark=True, small=True, color='primary', children=[v.Icon(dark=True, children=['mdi-minus'])], class_="mx-2"),
                v.Btn(fab=True, dark=True, small=True, color='pink', children=[v.Icon(dark=True, children=['mdi-heart'])], class_="mx-2"),
                v.Btn(fab=True, dark=True, color='indigo', children=[v.Icon(dark=True, children=['mdi-plus'])], class_="mx-2"),
                v.Btn(fab=True, dark=True, large=True, color='cyan', children=[v.Icon(dark=True, children=['mdi-pencil'])], class_="mx-2"),
                v.Btn(fab=True, dark=True, large=True, color='purple', children=[v.Icon(dark=True, children=['mdi-android'])], class_="mx-2"),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-btn fab dark small color="primary" class="mx-2"><v-icon dark>mdi-minus</v-icon></v-btn>
                <v-btn fab dark small color="pink" class="mx-2"><v-icon dark>mdi-heart</v-icon></v-btn>
                <v-btn fab dark color="indigo" class="mx-2"><v-icon dark>mdi-plus</v-icon></v-btn>
                <v-btn fab dark large color="cyan" class="mx-2"><v-icon dark>mdi-pencil</v-icon></v-btn>
                <v-btn fab dark large color="purple" class="mx-2"><v-icon dark>mdi-android</v-icon></v-btn>
            </template>

Icon
----

Buttons can be used as icon-only controls. This makes the button rounded and applies text styles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                flat=True,
                children=[
                    v.CardText(children=[
                        v.Container(fluid=True, class_="pa-0", children=[
                            v.Row(children=[
                                v.Col(cols=12, children=[v.Html(tag='p', children=['Normal'])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, color='pink', children=[v.Icon(children=['mdi-heart'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, color='indigo', children=[v.Icon(children=['mdi-star'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, color='green', children=[v.Icon(children=['mdi-cached'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, color='deep-orange', children=[v.Icon(children=['mdi-thumb-up'])])]),
                            ]),

                            v.Row(class_="mt-12", children=[
                                v.Col(cols=12, children=[v.Html(tag='p', children=['Disabled'])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, disabled=True, children=[v.Icon(children=['mdi-heart'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, disabled=True, children=[v.Icon(children=['mdi-star'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, disabled=True, children=[v.Icon(children=['mdi-cached'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, disabled=True, children=[v.Icon(children=['mdi-thumb-up'])])]),
                            ]),
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                flat=True,
                children=[
                    v.CardText(children=[
                        v.Container(fluid=True, class_="pa-0", children=[
                            v.Row(children=[
                                v.Col(cols=12, children=[v.Html(tag='p', children=['Normal'])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, color='pink', children=[v.Icon(children=['mdi-heart'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, color='indigo', children=[v.Icon(children=['mdi-star'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, color='green', children=[v.Icon(children=['mdi-cached'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, color='deep-orange', children=[v.Icon(children=['mdi-thumb-up'])])]),
                            ]),

                            v.Row(class_="mt-12", children=[
                                v.Col(cols=12, children=[v.Html(tag='p', children=['Disabled'])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, disabled=True, children=[v.Icon(children=['mdi-heart'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, disabled=True, children=[v.Icon(children=['mdi-star'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, disabled=True, children=[v.Icon(children=['mdi-cached'])])]),
                                v.Col(cols=12, sm=3, children=[v.Btn(icon=True, disabled=True, children=[v.Icon(children=['mdi-thumb-up'])])]),
                            ]),
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card flat>
                    <v-card-text>
                        <v-container fluid class="pa-0">
                            <v-row>
                                <v-col cols="12">
                                    <p>Normal</p>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-btn icon color="pink"><v-icon>mdi-heart</v-icon></v-btn>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-btn icon color="indigo"><v-icon>mdi-star</v-icon></v-btn>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-btn icon color="green"><v-icon>mdi-cached</v-icon></v-btn>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-btn icon color="deep-orange"><v-icon>mdi-thumb-up</v-icon></v-btn>
                                </v-col>
                            </v-row>

                            <v-row class="mt-12">
                                <v-col cols="12">
                                    <p>Disabled</p>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-btn icon disabled><v-icon>mdi-heart</v-icon></v-btn>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-btn icon disabled><v-icon>mdi-star</v-icon></v-btn>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-btn icon disabled><v-icon>mdi-cached</v-icon></v-btn>
                                </v-col>
                                <v-col cols="12" sm="3">
                                    <v-btn icon disabled><v-icon>mdi-thumb-up</v-icon></v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </template>

Loaders
-------

Using the loading prop, you can notify a user that there is processing taking place. The default
behavior is to use a :py:class:`ProgressBar <ipyvuetify.ProgressBar>` component but this can be
customized.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(children=["Loading"], loading=True, color='primary', disabled=True, class_="mx-2"),
                v.Btn(children=["Loading..."], loading=True, color='success', disabled=True, class_="mx-2", v_slots=[{
                    "name": "loader",
                    "children": [v.Html(tag="span", children=["Uploading..."])]
                }]),
                v.Btn(children=["Loading Icon"], loading=True, color='info', disabled=True, class_="mx-2", v_slots=[{
                    "name": "loader",
                    "children": [v.Html(tag="span", children=[v.Icon(light=True, class_="custom-loader", children=["mdi-cached"])])]
                }]),
                v.Btn(fab=True, loading=True, disabled=True, class_="mx-2"),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(children=["Loading"], loading=True, color='primary', disabled=True, class_="mx-2"),
                v.Btn(children=["Loading..."], loading=True, color='success', disabled=True, class_="mx-2", v_slots=[{
                    "name": "loader",
                    "children": [v.Html(tag="span", children=["Uploading..."])]
                }]),
                v.Btn(children=["Loading Icon"], loading=True, color='info', disabled=True, class_="mx-2", v_slots=[{
                    "name": "loader",
                    "children": [v.Html(tag="span", children=[v.Icon(light=True, class_="custom-loader", children=["mdi-cached"])])]
                }]),
                v.Btn(fab=True, loading=True, disabled=True, class_="mx-2"),
            ])

    .. tab-item:: :fab:`css3` css

        .. code-block:: css

            @keyframes spin {
                to { transform: rotate(360deg); }
            }

            .custom-loader {
                display: flex;
                animation: spin 1s linear infinite;
            }

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-btn
                    class="ma-2"
                    :loading="loading"
                    :disabled="loading"
                    color="secondary"
                    @click="loader = 'loading'"
                >
                    Accept Terms
                </v-btn>

                <v-btn
                    :loading="loading3"
                    :disabled="loading3"
                    color="blue-grey"
                    class="ma-2 white--text"
                    @click="loader = 'loading3'"
                >
                    Upload
                    <v-icon
                        right
                        dark
                    >
                        mdi-cloud-upload
                    </v-icon>
                </v-btn>

                <v-btn
                    class="ma-2"
                    :loading="loading2"
                    :disabled="loading2"
                    color="success"
                    @click="loader = 'loading2'"
                >
                    Custom Loader
                    <template v-slot:loader>
                        <span>Loading...</span>
                    </template>
                </v-btn>

                <v-btn
                    class="ma-2"
                    :loading="loading4"
                    :disabled="loading4"
                    color="info"
                    @click="loader = 'loading4'"
                >
                    Icon Loader
                    <template v-slot:loader>
                        <span class="custom-loader">
                            <v-icon light>mdi-cached</v-icon>
                        </span>
                    </template>
                </v-btn>

                <v-btn
                    :loading="loading5"
                    :disabled="loading5"
                    color="blue-grey"
                    class="ma-2 white--text"
                    fab
                    @click="loader = 'loading5'"
                >
                    <v-icon dark>
                        mdi-cloud-upload
                    </v-icon>
                </v-btn>
            </div>
            </template>

Outlined
--------

``outlined`` buttons inherit their borders from the current color applied.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(class_="ma-2", outlined=True, color="indigo", children=["Outlined Button"]),
                v.Btn(class_="ma-2", outlined=True, fab=True, color="teal", children=[
                    v.Icon(children="mdi-format-list-bulleted-square")
                ]),
                v.Btn(class_="ma-2", outlined=True, large=True, fab=True, color="indigo", children=[
                    v.Icon(children=["mdi-pencil"])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(class_="ma-2", outlined=True, color="indigo", children=["Outlined Button"]),
                v.Btn(class_="ma-2", outlined=True, fab=True, color="teal", children=[
                    v.Icon(children="mdi-format-list-bulleted-square")
                ]),
                v.Btn(class_="ma-2", outlined=True, large=True, fab=True, color="indigo", children=[
                    v.Icon(children=["mdi-pencil"])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-btn class="ma-2" outlined color="indigo">
                        Outlined Button
                    </v-btn>
                    <v-btn class="ma-2" outlined fab color="teal">
                        <v-icon>mdi-format-list-bulleted-square</v-icon>
                    </v-btn>
                    <v-btn class="ma-2" outlined large fab color="indigo">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </div>
            </template>

Plain
-----

**plain** buttons have a lower baseline opacity that reacts to **hover** and **focus**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Sheet(
                class_="px-7 pt-7 pb-4 mx-auto text-center d-inline-block",
                color="blue-grey darken-3",
                dark=True,
                children=[
                    v.Html(
                        tag='div',
                        class_="grey--text text--lighten-1 text-body-2 mb-4",
                        children=["Are you sure you want to delete this album?"]
                    ),
                    v.Btn(
                        class_="ma-1",
                        color="grey",
                        plain=True,
                        children=["Cancel"]
                    ),
                    v.Btn(
                        class_="ma-1",
                        color="error",
                        plain=True,
                        children=["Delete"]
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Sheet(
                class_="px-7 pt-7 pb-4 mx-auto text-center d-inline-block",
                color="blue-grey darken-3",
                dark=True,
                children=[
                    v.Html(
                        tag='div',
                        class_="grey--text text--lighten-1 text-body-2 mb-4",
                        children=["Are you sure you want to delete this album?"]
                    ),
                    v.Btn(
                        class_="ma-1",
                        color="grey",
                        plain=True,
                        children=["Cancel"]
                    ),
                    v.Btn(
                        class_="ma-1",
                        color="error",
                        plain=True,
                        children=["Delete"]
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-sheet
                        class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
                        color="blue-grey darken-3"
                        dark
                    >
                        <div class="grey--text text--lighten-1 text-body-2 mb-4">
                            Are you sure you want to delete this album?
                        </div>

                        <v-btn
                            :disabled="loading"
                            class="ma-1"
                            color="grey"
                            plain
                        >
                            Cancel
                        </v-btn>

                        <v-btn
                            :loading="loading"
                            class="ma-1"
                            color="error"
                            plain
                            @click="remove"
                        >
                            Delete
                        </v-btn>
                    </v-sheet>
                </div>
            </template>

Rounded
-------

``rounded`` buttons behave the same as regular buttons but have rounded edges.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Btn(rounded=True, color='primary', dark=True, children=['Rounded Button'])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Btn(rounded=True, color='primary', dark=True, children=['Rounded Button'])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-btn rounded color="primary" dark>Rounded Button</v-btn>
            </template>

sizing
------

Buttons can be given different sizing options to fit a multitude of scenarios.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(fluid=True, class_="pa-0", children=[
                v.Row(align="center", children=[
                    v.Col(cols=12, sm=6, children=[
                        v.Html(tag="div", class_="text-center", children=[
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(x_small=True, color="secondary", dark=True, children=["Extra small Button"])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(small=True, color="primary", dark=True, children=["Small Button"])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(color="warning", dark=True, children=["Normal Button"])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(large=True, color="error", dark=True, children=["Large Button"])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(x_large=True, color="success", dark=True, children=["Extra large Button"])
                            ]),
                        ])
                    ]),
                    v.Col(cols=12, sm=6, children=[
                        v.Html(tag="div", class_="text-center", children=[
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, x_small=True, color="secondary", dark=True, children=[
                                    v.Icon(children=["mdi-television"])
                                ])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, small=True, color="primary", dark=True, children=[
                                    v.Icon(children=["mdi-pencil"])
                                ])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, color="warning", dark=True, children=[
                                    v.Icon(children=["mdi-account-circle"])
                                ])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, large=True, color="error", dark=True, children=[
                                    v.Icon(children=["mdi-alarm"])
                                ])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, x_large=True, color="success", dark=True, children=[
                                    v.Icon(children=["mdi-domain"])
                                ])
                            ]),
                        ])
                    ]),
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(fluid=True, class_="pa-0", children=[
                v.Row(align="center", children=[
                    v.Col(cols=12, sm=6, children=[
                        v.Html(tag="div", class_="text-center", children=[
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(x_small=True, color="secondary", dark=True, children=["Extra small Button"])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(small=True, color="primary", dark=True, children=["Small Button"])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(color="warning", dark=True, children=["Normal Button"])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(large=True, color="error", dark=True, children=["Large Button"])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(x_large=True, color="success", dark=True, children=["Extra large Button"])
                            ]),
                        ])
                    ]),
                    v.Col(cols=12, sm=6, children=[
                        v.Html(tag="div", class_="text-center", children=[
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, x_small=True, color="secondary", dark=True, children=[
                                    v.Icon(children=["mdi-television"])
                                ])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, small=True, color="primary", dark=True, children=[
                                    v.Icon(children=["mdi-pencil"])
                                ])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, color="warning", dark=True, children=[
                                    v.Icon(children=["mdi-account-circle"])
                                ])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, large=True, color="error", dark=True, children=[
                                    v.Icon(children=["mdi-alarm"])
                                ])
                            ]),
                            v.Html(tag="div", class_="my-2", children=[
                                v.Btn(fab=True, x_large=True, color="success", dark=True, children=[
                                    v.Icon(children=["mdi-domain"])
                                ])
                            ]),
                        ])
                    ]),
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-container fluid class="pa-0">
                    <v-row align="center">
                        <v-col cols="12" sm="6">
                            <div class="text-center">
                                <div class="my-2">
                                    <v-btn x-small color="secondary" dark>
                                        Extra small Button
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn small color="primary" dark>
                                        Small Button
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn color="warning" dark>
                                        Normal Button
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn color="error" dark large>
                                        Large Button
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn x-large color="success" dark>
                                        Extra large Button
                                    </v-btn>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="text-center">
                                <div class="my-2">
                                    <v-btn color="secondary" fab x-small dark>
                                        <v-icon>mdi-television</v-icon>
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn color="primary" fab small dark>
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn color="warning" fab dark>
                                        <v-icon>mdi-account-circle</v-icon>
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn color="error" fab large dark>
                                        <v-icon>mdi-alarm</v-icon>
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn color="success" fab x-large dark>
                                        <v-icon>mdi-domain</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </template>

Text
----

Text buttons have no box shadow and no background. Only on hover is the container for the button shown.
When used with the color prop, the supplied color is applied to the button text instead of the background.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(text=True, children=['Normal']),
                v.Btn(text=True, color='primary', children=['Primary']),
                v.Btn(text=True, color='error', children=['Error']),
                v.Btn(text=True, disabled=True, children=['Disabled']),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(text=True, children=['Normal']),
                v.Btn(text=True, color='primary', children=['Primary']),
                v.Btn(text=True, color='error', children=['Error']),
                v.Btn(text=True, disabled=True, children=['Disabled']),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row align="center" justify="space-around">
                    <v-btn text>Normal</v-btn>
                    <v-btn text color="primary">Primary</v-btn>
                    <v-btn text color="error">Error</v-btn>
                    <v-btn text disabled>Disabled</v-btn>
                </v-row>
            </template>

Tile
----

**tile** buttons behave the same as regular buttons but have no border radius.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(tile=True, children=['Normal'], class_="mx-2"),
                v.Btn(tile=True, color='primary', children=['Primary'], class_="mx-2"),
                v.Btn(tile=True, color='error', children=['Error'], class_="mx-2"),
                v.Btn(tile=True, disabled=True, children=['Disabled'], class_="mx-2"),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(tile=True, children=['Normal'], class_="mx-2"),
                v.Btn(tile=True, color='primary', children=['Primary'], class_="mx-2"),
                v.Btn(tile=True, color='error', children=['Error'], class_="mx-2"),
                v.Btn(tile=True, disabled=True, children=['Disabled'], class_="mx-2"),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row align="center" justify="space-around">
                    <v-btn tile>Normal</v-btn>
                    <v-btn tile color="primary">Primary</v-btn>
                    <v-btn tile color="error">Error</v-btn>
                    <v-btn tile disabled>Disabled</v-btn>
                </v-row>
            </template>

Raised
------

**raised** buttons have a box shadow that increases when clicked. This is the default style.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(raised=True, children=['Normal'], class_="mx-2"),
                v.Btn(raised=True, color='primary', children=['Primary'], class_="mx-2"),
                v.Btn(raised=True, color='error', children=['Error'], class_="mx-2"),
                v.Btn(raised=True, disabled=True, children=['Disabled'], class_="mx-2"),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(raised=True, children=['Normal'], class_="mx-2"),
                v.Btn(raised=True, color='primary', children=['Primary'], class_="mx-2"),
                v.Btn(raised=True, color='error', children=['Error'], class_="mx-2"),
                v.Btn(raised=True, disabled=True, children=['Disabled'], class_="mx-2"),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row align="center" justify="space-around">
                    <v-btn raised>Normal</v-btn>
                    <v-btn raised color="primary">Primary</v-btn>
                    <v-btn raised color="error">Error</v-btn>
                    <v-btn raised disabled>Disabled</v-btn>
                </v-row>
            </template>





