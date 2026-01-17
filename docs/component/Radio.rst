Radio
=====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Radio buttons
    documentation <https://v2.vuetifyjs.com/en/components/radio-buttons/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Radio <ipyvuetify.Radio>` component is a simple radio button.
When combined with the :py:class:`RadioGroup <ipyvuetify.RadioGroup>` component
you can provide groupable functionality to allow users to select from a
predefined set of options.

.. api::

    - :py:class:`ipyvuetify.Radio`
    - :py:class:`ipyvuetify.RadioGroup`

Usage
-----

Although :py:class:`Radio <ipyvuetify.Radio>` can be used on its own, it is
best used in conjunction with :py:class:`RadioGroup <ipyvuetify.RadioGroup>`.
Using the v-model on the :py:class:`RadioGroup <ipyvuetify.RadioGroup>` you can
access the value of the selected radio button inside the group.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        class_='px-0',
        fluid=True,
        children=[
            v.RadioGroup(
                v_model=1,
                children=[
                    v.Radio(
                        label=f'Radio {n+1}',
                        value=n,
                    ) for n in range(0, 3)
                ],
            )
        ],
    )

Examples
--------

Colors
^^^^^^

Radios can be colored by using any of the builtin colors and contextual names
using the color prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['red', 'red darken-3', 'indigo', 'indigo darken-3', 'orange', 'orange darken-3']
            theme = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

            v.Card(
                flat=True,
                children=[
                    v.CardText(
                        children=[
                            v.Container(
                                fluid=True,
                                children=[
                                    v.Row(
                                        children=[
                                            v.Col(
                                                cols=12,
                                                sm=6,
                                                md=6,
                                                children=[
                                                    v.RadioGroup(
                                                        v_model=colors[0],
                                                        column=True,
                                                        children=[
                                                            v.Radio(
                                                                label=color,
                                                                color=color,
                                                                value=color,
                                                            ) for color in colors
                                                        ],
                                                    )
                                                ],
                                            ),
                                            v.Col(
                                                cols=12,
                                                sm=6,
                                                md=6,
                                                children=[
                                                    v.RadioGroup(
                                                        v_model=theme[0],
                                                        column=True,
                                                        children=[
                                                            v.Radio(
                                                                label=t,
                                                                color=t,
                                                                value=t,
                                                            ) for t in theme
                                                        ],
                                                    )
                                                ],
                                            ),
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['red', 'red darken-3', 'indigo', 'indigo darken-3', 'orange', 'orange darken-3']
            theme = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

            v.Card(
                flat=True,
                children=[
                    v.CardText(
                        children=[
                            v.Container(
                                fluid=True,
                                children=[
                                    v.Row(
                                        children=[
                                            v.Col(
                                                cols=12,
                                                sm=6,
                                                md=6,
                                                children=[
                                                    v.RadioGroup(
                                                        v_model=colors[0],
                                                        column=True,
                                                        children=[
                                                            v.Radio(
                                                                label=color,
                                                                color=color,
                                                                value=color,
                                                            ) for color in colors
                                                        ],
                                                    )
                                                ],
                                            ),
                                            v.Col(
                                                cols=12,
                                                sm=6,
                                                md=6,
                                                children=[
                                                    v.RadioGroup(
                                                        v_model=theme[0],
                                                        column=True,
                                                        children=[
                                                            v.Radio(
                                                                label=t,
                                                                color=t,
                                                                value=t,
                                                            ) for t in theme
                                                        ],
                                                    )
                                                ],
                                            ),
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card flat>
                <v-card-text>
                <v-container fluid>
                    <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-radio-group
                        v-model="ex7"
                        column
                        >
                        <v-radio
                            label="red"
                            color="red"
                            value="red"
                        ></v-radio>
                        <v-radio
                            label="red darken-3"
                            color="red darken-3"
                            value="red darken-3"
                        ></v-radio>
                        <v-radio
                            label="indigo"
                            color="indigo"
                            value="indigo"
                        ></v-radio>
                        <v-radio
                            label="indigo darken-3"
                            color="indigo darken-3"
                            value="indigo darken-3"
                        ></v-radio>
                        <v-radio
                            label="orange"
                            color="orange"
                            value="orange"
                        ></v-radio>
                        <v-radio
                            label="orange darken-3"
                            color="orange darken-3"
                            value="orange darken-3"
                        ></v-radio>
                        </v-radio-group>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-radio-group
                        v-model="ex8"
                        column
                        >
                        <v-radio
                            label="primary"
                            color="primary"
                            value="primary"
                        ></v-radio>
                        <v-radio
                            label="secondary"
                            color="secondary"
                            value="secondary"
                        ></v-radio>
                        <v-radio
                            label="success"
                            color="success"
                            value="success"
                        ></v-radio>
                        <v-radio
                            label="info"
                            color="info"
                            value="info"
                        ></v-radio>
                        <v-radio
                            label="warning"
                            color="warning"
                            value="warning"
                        ></v-radio>
                        <v-radio
                            label="error"
                            color="error"
                            value="error"
                        ></v-radio>
                        </v-radio-group>
                    </v-col>
                    </v-row>
                </v-container>
                </v-card-text>
            </v-card>
            </template>

Direction
^^^^^^^^^

Radio-groups can be presented either as a row or a column, using their
respective props. The default is as a column.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.RadioGroup(
                        v_model='radio-1',
                        column=True,
                        children=[
                            v.Radio(
                                label='Option 1',
                                value='radio-1',
                            ),
                            v.Radio(
                                label='Option 2',
                                value='radio-2',
                            ),
                        ],
                    ),
                    v.Divider(),
                    v.RadioGroup(
                        v_model='radio-1',
                        row=True,
                        children=[
                            v.Radio(
                                label='Option 1',
                                value='radio-1',
                            ),
                            v.Radio(
                                label='Option 2',
                                value='radio-2',
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.RadioGroup(
                        v_model='radio-1',
                        column=True,
                        children=[
                            v.Radio(
                                label='Option 1',
                                value='radio-1',
                            ),
                            v.Radio(
                                label='Option 2',
                                value='radio-2',
                            ),
                        ],
                    ),
                    v.Divider(),
                    v.RadioGroup(
                        v_model='radio-1',
                        row=True,
                        children=[
                            v.Radio(
                                label='Option 1',
                                value='radio-1',
                            ),
                            v.Radio(
                                label='Option 2',
                                value='radio-2',
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-radio-group
                v-model="column"
                column
                >
                <v-radio
                    label="Option 1"
                    value="radio-1"
                ></v-radio>
                <v-radio
                    label="Option 2"
                    value="radio-2"
                ></v-radio>
                </v-radio-group>
                <hr>
                <v-radio-group
                v-model="row"
                row
                >
                <v-radio
                    label="Option 1"
                    value="radio-1"
                ></v-radio>
                <v-radio
                    label="Option 2"
                    value="radio-2"
                ></v-radio>
                </v-radio-group>
            </v-container>
            </template>

Label
^^^^^

Radio Group labels can be defined in ``label`` slot - that will allow to use
HTML content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.RadioGroup(
                        v_model='Duckduckgo',
                        v_slots = [{
                            'name': 'label',
                            'children': [
                                v.Html(
                                    tag='div',
                                    children=[
                                        'Your favourite ',
                                        v.Html(
                                            tag='strong',
                                            children=['search engine'],
                                        ),
                                    ],
                                )
                            ]
                        }],
                        children=[
                            v.Radio(
                                value='Google',
                                v_slots = [{
                                    'name': 'label',
                                    'children': [
                                        v.Html(
                                            tag='div',
                                            children=[
                                                "Of course it's ",
                                                v.Html(
                                                    tag='strong',
                                                    class_='success--text',
                                                    children=['Google'],
                                                ),
                                            ],
                                        )
                                    ]
                                }],
                            ),
                            v.Radio(
                                value='Duckduckgo',
                                v_slots = [{
                                    'name': 'label',
                                    'children': [
                                        v.Html(
                                            tag='div',
                                            children=[
                                                'Definitely ',
                                                v.Html(
                                                    tag='strong',
                                                    class_='primary--text',
                                                    children=['Duckduckgo'],
                                                ),
                                            ],
                                        )
                                    ]
                                }],
                            ),
                        ],
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.RadioGroup(
                        v_model='Duckduckgo',
                        v_slots = [{
                            'name': 'label',
                            'children': [
                                v.Html(
                                    tag='div',
                                    children=[
                                        'Your favourite ',
                                        v.Html(
                                            tag='strong',
                                            children=['search engine'],
                                        ),
                                    ],
                                )
                            ]
                        }],
                        children=[
                            v.Radio(
                                value='Google',
                                v_slots = [{
                                    'name': 'label',
                                    'children': [
                                        v.Html(
                                            tag='div',
                                            children=[
                                                "Of course it's ",
                                                v.Html(
                                                    tag='strong',
                                                    class_='success--text',
                                                    children=['Google'],
                                                ),
                                            ],
                                        )
                                    ]
                                }],
                            ),
                            v.Radio(
                                value='Duckduckgo',
                                v_slots = [{
                                    'name': 'label',
                                    'children': [
                                        v.Html(
                                            tag='div',
                                            children=[
                                                'Definitely ',
                                                v.Html(
                                                    tag='strong',
                                                    class_='primary--text',
                                                    children=['Duckduckgo'],
                                                ),
                                            ],
                                        )
                                    ]
                                }],
                            ),
                        ],
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-radio-group v-model="radios">
                <template v-slot:label>
                    <div>Your favourite <strong>search engine</strong></div>
                </template>
                <v-radio value="Google">
                    <template v-slot:label>
                    <div>Of course it's <strong class="success--text">Google</strong></div>
                    </template>
                </v-radio>
                <v-radio value="Duckduckgo">
                    <template v-slot:label>
                    <div>Definitely <strong class="primary--text">Duckduckgo</strong></div>
                    </template>
                </v-radio>
                </v-radio-group>
            </v-container>
            </template>
