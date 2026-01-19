TextField
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Text Fields
    documentation <https://v2.vuetifyjs.com/en/components/text-fields/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`TextField <ipyvuetify.TextField>` component is used for collecting
user provided information.

.. api::

    - :py:class:`ipyvuetify.TextField`

Usage
-----

A simple text field with placeholder and/or label.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        children=[
            v.Form(
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                sm="6",
                                md="3",
                                children=[
                                    v.TextField(
                                        label="Regular",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                md="3",
                                children=[
                                    v.TextField(
                                        label="Regular",
                                        placeholder="Placeholder",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                md="3",
                                children=[
                                    v.TextField(
                                        label="Solo",
                                        solo=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                md="3",
                                children=[
                                    v.TextField(
                                        label="Solo",
                                        placeholder="Placeholder",
                                        solo=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                md="3",
                                children=[
                                    v.TextField(
                                        label="Filled",
                                        filled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                md="3",
                                children=[
                                    v.TextField(
                                        label="Filled",
                                        placeholder="Placeholder",
                                        filled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                md="3",
                                children=[
                                    v.TextField(
                                        label="Outlined",
                                        outlined=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                md="3",
                                children=[
                                    v.TextField(
                                        label="Outlined",
                                        placeholder="Placeholder",
                                        outlined=True,
                                    )
                                ],
                            ),
                        ]
                    )
                ]
            )
        ]
    )

Examples
--------

Counter
^^^^^^^

Use a ``counter`` prop to inform a user of the character limit. The counter does
not perform any validation by itself - you will need to pair it with either the
internal validation system, or a 3rd party library. The counter can be customised
with the ``counter_value`` prop and counter scoped slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            text = [
                "Preliminary report",
                "California is a state in the western United States",
                "Preliminary report",
                "Preliminary report",
            ]

            v.Form(
                children=[
                    v.Container(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=text[0],
                                                counter="25",
                                                hint="This field uses counter prop",
                                                label="Regular",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=text[1],
                                                counter=True,
                                                maxlength="25",
                                                hint="This field uses maxlength attribute",
                                                label="Limit exceeded",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=text[2],
                                                counter="5",
                                                hint="This field counts words instead of characters",
                                                label="Custom counter from prop",
                                                counter_value="v => v.trim().split(' ').length",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=text[3],
                                                counter="5",
                                                hint="This field counts words instead of characters",
                                                label="Custom counter from slot",
                                                v_slots=[{
                                                    "name": "counter",
                                                    "children": v.Counter(
                                                        value="v.trim().split(' ').length"
                                                    )
                                                }]
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text = [
                "Preliminary report",
                "California is a state in the western United States",
                "Preliminary report",
                "Preliminary report",
            ]

            v.Form(
                children=[
                    v.Container(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=text[0],
                                                counter="25",
                                                hint="This field uses counter prop",
                                                label="Regular",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=text[1],
                                                counter=True,
                                                maxlength="25",
                                                hint="This field uses maxlength attribute",
                                                label="Limit exceeded",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=text[2],
                                                counter="5",
                                                hint="This field counts words instead of characters",
                                                label="Custom counter from prop",
                                                counter_value="v => v.trim().split(' ').length",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=text[3],
                                                counter="5",
                                                hint="This field counts words instead of characters",
                                                label="Custom counter from slot",
                                                v_slots=[{
                                                    "name": "counter",
                                                    "children": v.Counter(
                                                        value="v.trim().split(' ').length"
                                                    )
                                                }]
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="title"
                        :rules="rules"
                        counter="25"
                        hint="This field uses counter prop"
                        label="Regular"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="description"
                        :rules="rules"
                        counter
                        maxlength="25"
                        hint="This field uses maxlength attribute"
                        label="Limit exceeded"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="title"
                        :rules="wordsRules"
                        counter="5"
                        hint="This field counts words instead of characters"
                        label="Custom counter from prop"
                        :counter-value="v => v.trim().split(' ').length"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="title"
                        :rules="wordsRules"
                        counter="5"
                        hint="This field counts words instead of characters"
                        label="Custom counter from slot"
                    >
                        <template v-slot:counter="{ props }">
                        <v-counter v-bind="props" :value="title.trim().split(' ').length"></v-counter>
                        </template>
                    </v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Clearable
^^^^^^^^^

When ``clearable``, you can customize the clear icon with ``clear_icon``. Note that
**readonly** will not remove the clear icon, to prevent readonly inputs from being
cleared you should also disable clearable.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            message = "You can clear me!"

            v.Form(
                children=[
                    v.Container(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=message,
                                                label="Regular",
                                                clearable=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=message,
                                                solo=True,
                                                label="Solo",
                                                clearable=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=message,
                                                filled=True,
                                                label="Filled",
                                                clearable=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=message,
                                                label="Outlined",
                                                outlined=True,
                                                clearable=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            message = "You can clear me!"

            v.Form(
                children=[
                    v.Container(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=message,
                                                label="Regular",
                                                clearable=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=message,
                                                solo=True,
                                                label="Solo",
                                                clearable=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=message,
                                                filled=True,
                                                label="Filled",
                                                clearable=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model=message,
                                                label="Outlined",
                                                outlined=True,
                                                clearable=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="message1"
                        label="Regular"
                        clearable
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="message2"
                        solo
                        label="Solo"
                        clearable
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="message3"
                        filled
                        label="Filled"
                        clearable
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="message4"
                        label="Outlined"
                        outlined
                        clearable
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Custom colors
^^^^^^^^^^^^^

You can optionally change a text field into any color in the Material design
palette.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ["indigo", "pink", "success", "error"]

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        color=colors[0],
                                        v_model=colors[0],
                                        label="Regular",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        color=colors[1],
                                        v_model=colors[1],
                                        solo=True,
                                        label="Solo",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        color=colors[2],
                                        v_model=colors[2],
                                        filled=True,
                                        label="Filled",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        color=colors[3],
                                        v_model=colors[3],
                                        label="Outlined",
                                        outlined=True,
                                    )
                                ],
                            ),
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ["indigo", "pink", "success", "error"]

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        color=colors[0],
                                        v_model=colors[0],
                                        label="Regular",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        color=colors[1],
                                        v_model=colors[1],
                                        solo=True,
                                        label="Solo",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        color=colors[2],
                                        v_model=colors[2],
                                        filled=True,
                                        label="Filled",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        color=colors[3],
                                        v_model=colors[3],
                                        label="Outlined",
                                        outlined=True,
                                    )
                                ],
                            ),
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        color="indigo"
                        v-model="message1"
                        label="Regular"
                        clearable
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        color="pink"
                        v-model="message2"
                        solo
                        label="Solo"
                        clearable
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        color="success"
                        v-model="message3"
                        filled
                        label="Filled"
                        clearable
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        color="error"
                        v-model="message4"
                        label="Outlined"
                        outlined
                        clearable
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Dense
^^^^^

You can reduce the text field height with ``dense`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                dense=True,
                                                label="Regular",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Filled",
                                                filled=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Filled",
                                                placeholder="Dense & Rounded",
                                                filled=True,
                                                rounded=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Solo",
                                                solo=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Outlined",
                                                outlined=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Outlined",
                                                placeholder="Placeholder",
                                                outlined=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                dense=True,
                                                label="Regular",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Filled",
                                                filled=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Filled",
                                                placeholder="Dense & Rounded",
                                                filled=True,
                                                rounded=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Solo",
                                                solo=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Outlined",
                                                outlined=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        md="4",
                                        children=[
                                            v.TextField(
                                                label="Outlined",
                                                placeholder="Placeholder",
                                                outlined=True,
                                                dense=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-text-field
                        dense
                        label="Regular"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-text-field
                        label="Filled"
                        filled
                        dense
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-text-field
                        label="Filled"
                        placeholder="Dense & Rounded"
                        filled
                        rounded
                        dense
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-text-field
                        label="Solo"
                        solo
                        dense
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-text-field
                        label="Outlined"
                        outlined
                        dense
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-text-field
                        label="Outlined"
                        placeholder="Placeholder"
                        outlined
                        dense
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Disabled and readonly
^^^^^^^^^^^^^^^^^^^^^

Text fields can be **disabled** or **readonly**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Regular",
                                        disabled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Regular",
                                        readonly=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Solo",
                                        solo=True,
                                        disabled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Solo",
                                        solo=True,
                                        readonly=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Filled",
                                        filled=True,
                                        disabled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Filled",
                                        filled=True,
                                        readonly=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Outlined",
                                        outlined=True,
                                        disabled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Outlined",
                                        outlined=True,
                                        readonly=True,
                                    )
                                ],
                            ),
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Regular",
                                        disabled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Regular",
                                        readonly=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Solo",
                                        solo=True,
                                        disabled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Solo",
                                        solo=True,
                                        readonly=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Filled",
                                        filled=True,
                                        disabled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Filled",
                                        filled=True,
                                        readonly=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Outlined",
                                        outlined=True,
                                        disabled=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.TextField(
                                        value="John Doe",
                                        label="Outlined",
                                        outlined=True,
                                        readonly=True,
                                    )
                                ],
                            ),
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        value="John Doe"
                        label="Regular"
                        disabled
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        value="John Doe"
                        label="Regular"
                        readonly
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        value="John Doe"
                        label="Solo"
                        solo
                        disabled
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        value="John Doe"
                        label="Solo"
                        solo
                        readonly
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        value="John Doe"
                        label="Filled"
                        filled
                        disabled
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        value="John Doe"
                        label="Filled"
                        filled
                        readonly
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        value="John Doe"
                        label="Outlined"
                        outlined
                        disabled
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        value="John Doe"
                        label="Outlined"
                        outlined
                        readonly
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Filled
^^^^^^

Text fields can be used with an alternative box design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="First",
                                                label="First Name",
                                                filled=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="Last",
                                                label="Last Name",
                                                filled=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="First",
                                                label="First Name",
                                                filled=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="Last",
                                                label="Last Name",
                                                filled=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="first"
                        label="First Name"
                        filled
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="last"
                        label="Last Name"
                        filled
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Hide details
^^^^^^^^^^^^

When ``hide_details`` is set to **auto** messages will be rendered only if there's
a message (hint, error message, counter value etc) to display.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.TextField(
                        label="Main input",
                        hide_details="auto",
                    ),
                    v.TextField(
                        label="Another input",
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.TextField(
                        label="Main input",
                        hide_details="auto",
                    ),
                    v.TextField(
                        label="Another input",
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-text-field
                label="Main input"
                :rules="rules"
                hide-details="auto"
                ></v-text-field>
                <v-text-field label="Another input"></v-text-field>
            </div>
            </template>

Hint
^^^^

The ``hint`` property on text fields adds the provided string beneath the text
field. Using ``persistent_hint`` keeps the hint visible when the text field is not
focused. Hint prop is not supported in solo mode.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your product or service",
                                                value="Grocery delivery",
                                                hint="For example, flowers or used cars",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your landing page",
                                                hint="www.example.com/page",
                                                persistent_hint=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your product or service",
                                                value="Grocery delivery",
                                                hint="For example, flowers or used cars",
                                                filled=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your landing page",
                                                hint="www.example.com/page",
                                                persistent_hint=True,
                                                filled=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your product or service",
                                                value="Grocery delivery",
                                                hint="For example, flowers or used cars",
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your landing page",
                                                hint="www.example.com/page",
                                                persistent_hint=True,
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your product or service",
                                                value="Grocery delivery",
                                                hint="For example, flowers or used cars",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your landing page",
                                                hint="www.example.com/page",
                                                persistent_hint=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your product or service",
                                                value="Grocery delivery",
                                                hint="For example, flowers or used cars",
                                                filled=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your landing page",
                                                hint="www.example.com/page",
                                                persistent_hint=True,
                                                filled=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your product or service",
                                                value="Grocery delivery",
                                                hint="For example, flowers or used cars",
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Your landing page",
                                                hint="www.example.com/page",
                                                persistent_hint=True,
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Your product or service"
                        value="Grocery delivery"
                        hint="For example, flowers or used cars"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Your landing page"
                        hint="www.example.com/page"
                        persistent-hint
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Your product or service"
                        value="Grocery delivery"
                        hint="For example, flowers or used cars"
                        filled
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Your landing page"
                        hint="www.example.com/page"
                        persistent-hint
                        filled
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Your product or service"
                        value="Grocery delivery"
                        hint="For example, flowers or used cars"
                        outlined
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Your landing page"
                        hint="www.example.com/page"
                        persistent-hint
                        outlined
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Icons
^^^^^

You can add icons to the text field with ``prepend_icon``, ``append_icon`` and
``append_outer_icon`` props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Prepend",
                                                prepend_icon="mdi-map-marker",
                                            ),
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Prepend inner",
                                                prepend_inner_icon="mdi-map-marker",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Append",
                                                append_icon="mdi-map-marker",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Append outer",
                                                append_outer_icon="mdi-map-marker",
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Prepend",
                                                prepend_icon="mdi-map-marker",
                                            ),
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Prepend inner",
                                                prepend_inner_icon="mdi-map-marker",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Append",
                                                append_icon="mdi-map-marker",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Append outer",
                                                append_outer_icon="mdi-map-marker",
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Prepend"
                        prepend-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        label="Prepend inner"
                        prepend-inner-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        label="Append"
                        append-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        label="Append outer"
                        append-outer-icon="mdi-map-marker"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        solo
                        label="Prepend"
                        prepend-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        solo
                        label="Prepend inner"
                        prepend-inner-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        solo
                        label="Append"
                        append-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        solo
                        label="Append outer"
                        append-outer-icon="mdi-map-marker"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        filled
                        label="Prepend"
                        prepend-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        filled
                        label="Prepend inner"
                        prepend-inner-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        filled
                        label="Append"
                        append-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        filled
                        label="Append outer"
                        append-outer-icon="mdi-map-marker"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        outlined
                        label="Prepend"
                        prepend-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        outlined
                        label="Prepend inner"
                        prepend-inner-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        outlined
                        label="Append"
                        append-icon="mdi-map-marker"
                    ></v-text-field>

                    <v-text-field
                        outlined
                        label="Append outer"
                        append-outer-icon="mdi-map-marker"
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Outlined
^^^^^^^^

Text fields can be used with an alternative outlined design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="First",
                                                label="First Name",
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="Last",
                                                label="Last Name",
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="First",
                                                label="First Name",
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="Last",
                                                label="Last Name",
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="first"
                        label="First Name"
                        outlined
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="last"
                        label="Last Name"
                        outlined
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Prefixes and suffixes
^^^^^^^^^^^^^^^^^^^^^

The ``prefix`` and ``suffix`` properties allows you to prepend and append inline
non-modifiable text next to the text field.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="4",
                                children=[
                                    v.Subheader(children=["Prefix for dollar currency"])
                                ],
                            ),
                            v.Col(
                                cols="8",
                                children=[
                                    v.TextField(
                                        label="Amount",
                                        value="10.00",
                                        prefix="$",
                                    )
                                ],
                            ),
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="4",
                                children=[
                                    v.Subheader(children=["Suffix for weight"])
                                ],
                            ),
                            v.Col(
                                cols="8",
                                children=[
                                    v.TextField(
                                        label="Weight",
                                        value="28.00",
                                        suffix="lbs",
                                    )
                                ],
                            ),
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="4",
                                children=[
                                    v.Subheader(children=["Suffix for email domain"])
                                ],
                            ),
                            v.Col(
                                cols="8",
                                children=[
                                    v.TextField(
                                        label="Email address",
                                        value="example",
                                        suffix="@gmail.com",
                                    )
                                ],
                            ),
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="4",
                                children=[
                                    v.Subheader(children=["Suffix for time zone"])
                                ],
                            ),
                            v.Col(
                                cols="8",
                                children=[
                                    v.TextField(
                                        label="Label Text",
                                        value="12:30:00",
                                        type="time",
                                        suffix="PST",
                                    )
                                ],
                            ),
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="4",
                                children=[
                                    v.Subheader(children=["Prefix for dollar currency"])
                                ],
                            ),
                            v.Col(
                                cols="8",
                                children=[
                                    v.TextField(
                                        label="Amount",
                                        value="10.00",
                                        prefix="$",
                                    )
                                ],
                            ),
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="4",
                                children=[
                                    v.Subheader(children=["Suffix for weight"])
                                ],
                            ),
                            v.Col(
                                cols="8",
                                children=[
                                    v.TextField(
                                        label="Weight",
                                        value="28.00",
                                        suffix="lbs",
                                    )
                                ],
                            ),
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="4",
                                children=[
                                    v.Subheader(children=["Suffix for email domain"])
                                ],
                            ),
                            v.Col(
                                cols="8",
                                children=[
                                    v.TextField(
                                        label="Email address",
                                        value="example",
                                        suffix="@gmail.com",
                                    )
                                ],
                            ),
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="4",
                                children=[
                                    v.Subheader(children=["Suffix for time zone"])
                                ],
                            ),
                            v.Col(
                                cols="8",
                                children=[
                                    v.TextField(
                                        label="Label Text",
                                        value="12:30:00",
                                        type="time",
                                        suffix="PST",
                                    )
                                ],
                            ),
                        ]
                    ),
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row>
                <v-col cols="4">
                    <v-subheader>Prefix for dollar currency</v-subheader>
                </v-col>
                <v-col cols="8">
                    <v-text-field
                    label="Amount"
                    value="10.00"
                    prefix="$"
                    ></v-text-field>
                </v-col>
                </v-row>

                <v-row>
                <v-col cols="4">
                    <v-subheader>Suffix for weight</v-subheader>
                </v-col>
                <v-col cols="8">
                    <v-text-field
                    label="Weight"
                    value="28.00"
                    suffix="lbs"
                    ></v-text-field>
                </v-col>
                </v-row>

                <v-row>
                <v-col cols="4">
                    <v-subheader>Suffix for email domain</v-subheader>
                </v-col>
                <v-col cols="8">
                    <v-text-field
                    label="Email address"
                    value="example"
                    suffix="@gmail.com"
                    ></v-text-field>
                </v-col>
                </v-row>

                <v-row>
                <v-col cols="4">
                    <v-subheader>Suffix for time zone</v-subheader>
                </v-col>
                <v-col cols="8">
                    <v-text-field
                    label="Label Text"
                    value="12:30:00"
                    type="time"
                    suffix="PST"
                    ></v-text-field>
                </v-col>
                </v-row>
            </v-container>
            </template>

Shaped
^^^^^^

**Shaped** text fields are rounded if they're outlined and have higher
border-radius if filled.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="First",
                                                label="First Name",
                                                shaped=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="Last",
                                                label="Last Name",
                                                filled=True,
                                                shaped=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="First",
                                                label="First Name",
                                                shaped=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="Last",
                                                label="Last Name",
                                                filled=True,
                                                shaped=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="first"
                        label="First Name"
                        outlined
                        shaped
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="last"
                        label="Last Name"
                        filled
                        shaped
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Single line
^^^^^^^^^^^

**Single-line** text fields do not float their label on focus or with data.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Regular",
                                                single_line=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Solo",
                                                single_line=True,
                                                solo=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Filled",
                                                single_line=True,
                                                filled=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Outlined",
                                                single_line=True,
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Regular",
                                                single_line=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Solo",
                                                single_line=True,
                                                solo=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Filled",
                                                single_line=True,
                                                filled=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                label="Outlined",
                                                single_line=True,
                                                outlined=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Regular"
                        single-line
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Solo"
                        single-line
                        solo
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Filled"
                        single-line
                        filled
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        label="Outlined"
                        single-line
                        outlined
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Solo
^^^^

Text fields can be used with an alternative solo design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="First",
                                                label="First Name",
                                                solo=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="Last",
                                                label="Last Name",
                                                solo_inverted=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="First",
                                                label="First Name",
                                                solo=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="Last",
                                                label="Last Name",
                                                solo_inverted=True,
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="first"
                        label="First Name"
                        solo
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="last"
                        label="Last Name"
                        solo-inverted
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Validation
^^^^^^^^^^

Vuetify includes simple validation through the ``rules`` prop. The prop accepts a
mixed array of types **function**, **boolean** and **string**. When the input value
changes, each element in the array will be validated. Functions pass the current
v-model as an argument and must return either **true** / **false** or a **string**
containing an error message.

.. todo::

    Rules and validation require a active kernel.

Icon events
^^^^^^^^^^^

``click:prepend``, ``click:append``, ``click:append-outer``, and ``click:clear``
will be emitted when you click on the respective icon. Note that these events will
not be fired if the slot is used instead.

.. todo::

    Icon events require a active kernel.

Icon slots
^^^^^^^^^^

Instead of using ``prepend``/``append``/``append-outer`` icons you can use slots to
extend input's functionality.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                children=[
                                    v.TextField(
                                        v_model="message",
                                        outlined=True,
                                        clearable=True,
                                        label="Message",
                                        v_slots=[{
                                            "name": "prepend",
                                            "children":v.Tooltip(
                                                bottom=True,
                                                v_slots=[{
                                                    "name": "activator",
                                                    "variable":"activator",
                                                    "children":
                                                        v.Icon(
                                                            children=["mdi-help-circle-outline"],
                                                            v_on="activator.on",
                                                            v_bind="activator.attrs",
                                                        )
                                                }],
                                                children="I'm a tooltip",
                                            )
                                        },
                                        {
                                            "name": "append",
                                            "children":v.Img(
                                                width=24,
                                                height=24,
                                                src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg",
                                            )
                                        },
                                        {
                                            "name": "append-outer",
                                            "children": v.Menu(
                                                offset_y=True,
                                                style="top: -12px",
                                                v_slots=[{
                                                    "name": "activator",
                                                    "variable":"activator",
                                                    "children":v.Btn(
                                                        v_on="activator.on",
                                                        v_bind="activator.attrs",
                                                        children=[
                                                            v.Icon(
                                                                left=True,
                                                                children=["mdi-menu"],
                                                            ),
                                                            "Menu",
                                                        ],
                                                    )
                                                }],
                                                children=[
                                                    v.Card(
                                                        children=[
                                                            v.CardText(
                                                                class_="pa-6",
                                                                children=[
                                                                    v.Btn(
                                                                        large=True,
                                                                        text=True,
                                                                        color="primary",
                                                                        click="clickMe",
                                                                        children=[
                                                                            v.Icon(
                                                                                left=True,
                                                                                children=["mdi-target"],
                                                                            ),
                                                                            "Click me",
                                                                        ],
                                                                    ),
                                                                ]
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            )
                                        }]
                                    )
                                ],
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                children=[
                                    v.TextField(
                                        v_model="message",
                                        outlined=True,
                                        clearable=True,
                                        label="Message",
                                        v_slots=[{
                                            "name": "prepend",
                                            "children":v.Tooltip(
                                                bottom=True,
                                                v_slots=[{
                                                    "name": "activator",
                                                    "variable":"activator",
                                                    "children":
                                                        v.Icon(
                                                            children=["mdi-help-circle-outline"],
                                                            v_on="activator.on",
                                                            v_bind="activator.attrs",
                                                        )
                                                }],
                                                children="I'm a tooltip",
                                            )
                                        },
                                        {
                                            "name": "append",
                                            "children":v.Img(
                                                width=24,
                                                height=24,
                                                src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg",
                                            )
                                        },
                                        {
                                            "name": "append-outer",
                                            "children": v.Menu(
                                                offset_y=True,
                                                style="top: -12px",
                                                v_slots=[{
                                                    "name": "activator",
                                                    "variable":"activator",
                                                    "children":v.Btn(
                                                        v_on="activator.on",
                                                        v_bind="activator.attrs",
                                                        children=[
                                                            v.Icon(
                                                                left=True,
                                                                children=["mdi-menu"],
                                                            ),
                                                            "Menu",
                                                        ],
                                                    )
                                                }],
                                                children=[
                                                    v.Card(
                                                        children=[
                                                            v.CardText(
                                                                class_="pa-6",
                                                                children=[
                                                                    v.Btn(
                                                                        large=True,
                                                                        text=True,
                                                                        color="primary",
                                                                        click="clickMe",
                                                                        children=[
                                                                            v.Icon(
                                                                                left=True,
                                                                                children=["mdi-target"],
                                                                            ),
                                                                            "Click me",
                                                                        ],
                                                                    ),
                                                                ]
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            )
                                        }]
                                    )
                                ],
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-row>
                    <v-col cols="12">
                    <v-text-field
                        v-model="message"
                        outlined
                        clearable
                        label="Message"
                        type="text"
                    >
                        <template v-slot:prepend>
                        <v-tooltip
                            bottom
                        >
                            <template v-slot:activator="{ on }">
                            <v-icon v-on="on">
                                mdi-help-circle-outline
                            </v-icon>
                            </template>
                            I'm a tooltip
                        </v-tooltip>
                        </template>
                        <template v-slot:append>
                        <v-fade-transition leave-absolute>
                            <v-progress-circular
                            v-if="loading"
                            size="24"
                            color="info"
                            indeterminate
                            ></v-progress-circular>
                            <img
                            v-else
                            width="24"
                            height="24"
                            src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                            alt=""
                            >
                        </v-fade-transition>
                        </template>
                        <template v-slot:append-outer>
                        <v-menu
                            style="top: -12px"
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon left>
                                mdi-menu
                                </v-icon>
                                Menu
                            </v-btn>
                            </template>
                            <v-card>
                            <v-card-text class="pa-6">
                                <v-btn
                                large
                                text
                                color="primary"
                                @click="clickMe"
                                >
                                <v-icon left>
                                    mdi-target
                                </v-icon>Click me
                                </v-btn>
                            </v-card-text>
                            </v-card>
                        </v-menu>
                        </template>
                    </v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>

Label
^^^^^

Text field label can be defined in ``label`` slot - that will allow to use HTML
content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.TextField(
                        outlined=True,
                        v_slots=[{
                            "name": "label",
                            "children": v.Html(
                                tag="div",
                                children=[
                                    "What about ",
                                    v.Html(tag="strong", children=["icon"]),
                                    " here?",
                                    v.Icon(style_="vertical-align: middle", children=["mdi-file-find"]),
                                ]
                            )
                        }]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.TextField(
                        outlined=True,
                        v_slots=[{
                            "name": "label",
                            "children": v.Html(
                                tag="div",
                                children=[
                                    "What about ",
                                    v.Html(tag="strong", children=["icon"]),
                                    " here?",
                                    v.Icon(style_="vertical-align: middle", children=["mdi-file-find"]),
                                ]
                            )
                        }]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container>
                <v-text-field>
                    <template v-slot:label>
                    What about <strong>icon</strong> here? <v-icon style="vertical-align: middle">
                        mdi-file-find
                    </v-icon>
                    </template>
                </v-text-field>
                </v-container>
            </v-form>
            </template>

Progress
^^^^^^^^

You can display a progress bar instead of the bottom line. You can use the default
indeterminate progress having same color as the text field or designate a custom
one using the ``progress`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.TextField(
                        v_model="value",
                        color="cyan darken",
                        label="Text field",
                        placeholder="Start typing...",
                        loading=True,
                        v_slots=[{
                            "name": "progress",
                            "children": v.ProgressLinear(
                                color="red lighten-2",
                                absolute=True,
                                height=7,
                                indeterminate=True,
                            )
                        }]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.TextField(
                        v_model="value",
                        color="cyan darken",
                        label="Text field",
                        placeholder="Start typing...",
                        loading=True,
                        v_slots=[{
                            "name": "progress",
                            "children": v.ProgressLinear(
                                color="red lighten-2",
                                absolute=True,
                                height=7,
                                indeterminate=True,
                            )
                        }]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-checkbox
                v-model="custom"
                label="Custom progress bar"
                ></v-checkbox>
                <v-text-field
                v-model="value"
                color="cyan darken"
                label="Text field"
                placeholder="Start typing..."
                loading
                >
                <template v-slot:progress>
                    <v-progress-linear
                    v-if="custom"
                    :value="progress"
                    :color="color"
                    absolute
                    height="7"
                    ></v-progress-linear>
                </template>
                </v-text-field>
            </v-container>
            </template>

Custom validation
^^^^^^^^^^^^^^^^^

While the built in :py:class:`Form <ipyvuetify.Form>` or 3rd party plugin such as
vuelidate__ or vee-validation__ can help streamline your validation process, you
can choose to simply control it yourself.

.. __: https://github.com/monterail/vuelidate
.. __: https://github.com/logaretm/vee-validate

.. todo::

    Rules and validation require an active kernel.

Password input
^^^^^^^^^^^^^^

Using the HTML input `type password`__ can be used with an appended icon and
callback to control the visibility.

.. __: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                children=[
                    v.Form(
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                v_model="password",
                                                append_icon="mdi-eye",
                                                type_="password",
                                                name="input-10-1",
                                                label="Normal with hint text",
                                                hint="At least 8 characters",
                                                counter=True,
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                append_icon="mdi-eye",
                                                type_="text",
                                                name="input-10-2",
                                                label="Visible",
                                                hint="At least 8 characters",
                                                value="wqfasds",
                                                class_="input-group--focused",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                append_icon="mdi-eye-off",
                                                type_="password",
                                                name="input-10-2",
                                                label="Not visible",
                                                hint="At least 8 characters",
                                                value="wqfasds",
                                                class_="input-group--focused",
                                            )
                                        ],
                                    ),
                                    v.Col(
                                        cols="12",
                                        sm="6",
                                        children=[
                                            v.TextField(
                                                append_icon="mdi-eye-off",
                                                type_="password",
                                                name="input-10-2",
                                                label="Error",
                                                hint="At least 8 characters",
                                                value="Pa",
                                                error=True,
                                                click_append="show4 = not show4",
                                            )
                                        ],
                                    ),
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form>
                <v-container fluid>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Normal with hint text"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show2 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Visible"
                        hint="At least 8 characters"
                        value="wqfasds"
                        class="input-group--focused"
                        @click:append="show2 = !show2"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show3 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Not visible"
                        hint="At least 8 characters"
                        value="wqfasds"
                        class="input-group--focused"
                        @click:append="show3 = !show3"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-text-field
                        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.emailMatch]"
                        :type="show4 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Error"
                        hint="At least 8 characters"
                        value="Pa"
                        error
                        @click:append="show4 = !show4"
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </template>
