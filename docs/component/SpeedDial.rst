SpeedDial
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Floating Action
    Button documentation
    <https://v2.vuetifyjs.com/en/components/floating-action-buttons/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`SpeedDial <ipyvuetify.SpeedDial>` component has a very robust
API for customizing the floating action button experience. Combined with
:py:class:`Btn <ipyvuetify.Btn>` component, you can create a diverse set of
functions available for your users.

.. api::

    - :py:class:`ipyvuetify.SpeedDial`
    - :py:class:`ipyvuetify.Btn`

Usage
-----

The speed-dial component lets you display a set of actions that appear on
hover or click.

.. jupyter-execute::
    :raises:
    :hide-code:

    import ipyvuetify as v

    btns = [
        ("mdi-pencil", "green"),
        ("mdi-plus", "indigo"),
        ("mdi-delete", "red"),
    ]

    v.Card(
        width=600,
        height=300,
        class_="mx-auto my-2",
        children=[
            v.SpeedDial(
                absolute=True,
                top=True,
                right=True,
                direction='bottom',
                open_on_hover=True,
                v_slots=[{
                    "name": "activator",
                    "children": v.Btn(
                        color="blue darken-2",
                        dark=True,
                        fab=True,
                        children=[
                            v.Icon(children=["mdi-account-circle"])
                        ]
                    )
                }],
                children=[
                    v.Btn(
                        fab=True,
                        dark=True,
                        small=True,
                        color=color,
                        children=[v.Icon(children=[icon])]
                    ) for icon, color in btns
                ]
            )
        ]
    )

Examples
--------

Speed dial
^^^^^^^^^^

The :py:class:`SpeedDial <ipyvuetify.SpeedDial>` component has a very robust
API for customizing your FAB experience exactly how you want.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            btns = [
                ("mdi-pencil", "green"),
                ("mdi-plus", "indigo"),
                ("mdi-delete", "red"),
            ]

            speed_dial = v.SpeedDial(
                absolute=True,
                v_model=False,
                top=True,
                right=True,
                left=False,
                bottom=False,
                direction='bottom',
                open_on_hover=True,
                transition='slide-y-transition',
                v_slots=[{
                    "name": "activator",
                    "children": v.Btn(
                        id="activator_btn",
                        color="blue darken-2",
                        dark=True,
                        fab=True,
                        children=[
                            v.Icon(children=["mdi-account-circle"])
                        ]
                    )
                }],
                children=[
                    v.Btn(
                        fab=True,
                        dark=True,
                        small=True,
                        color=color,
                        children=[v.Icon(children=[icon])]
                    ) for icon, color in btns
                ]
            )

            hover_cb = v.Checkbox(
                v_model=True,
                label="Open on hover",
                hide_details=True,
                id="hover_cb"
            )

            top_location = v.Checkbox(v_model=True, label="Top", class_="ma-0")
            bottom_location = v.Checkbox(v_model=False, label="Bottom", class_="ma-0")
            right_location = v.Checkbox(v_model=True, label="Right", class_="ma-0")
            left_location = v.Checkbox(v_model=False, label="Left", class_="ma-0")

            direction_rg = v.RadioGroup(
                v_model='bottom',
                hide_details=True,
                id="direction_rg",
                children=[
                    v.Radio(value="top", label="Top"),
                    v.Radio(value="right", label="Right"),
                    v.Radio(value="bottom", label="Bottom"),
                    v.Radio(value="left", label="Left"),
                ]
            )

            transition_rg = v.RadioGroup(
                v_model='slide-y-transition',
                hide_details=True,
                id="transition_rg",
                children=[
                    v.Radio(value="slide-y-transition", label="Slide y"),
                    v.Radio(value="slide-y-reverse-transition", label="Slide y reverse"),
                    v.Radio(value="slide-x-transition", label="Slide x"),
                    v.Radio(value="slide-x-reverse-transition", label="Slide x reverse"),
                    v.Radio(value="scale-transition", label="Scale"),
                ]
            )

            jslink((hover_cb, 'v_model'), (speed_dial, 'open_on_hover'))
            jslink((top_location, 'v_model'), (speed_dial, 'top'))
            jslink((bottom_location, 'v_model'), (speed_dial, 'bottom'))
            jslink((right_location, 'v_model'), (speed_dial, 'right'))
            jslink((left_location, 'v_model'), (speed_dial, 'left'))
            jslink((direction_rg, 'v_model'), (speed_dial, 'direction'))
            jslink((transition_rg, 'v_model'), (speed_dial, 'transition'))


            v.Card(
                class_="mx-auto my-2 pa-2",
                width=600,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols=12,
                                sm=6,
                                md=4,
                                children=[
                                    v.Subheader(children=["Options"]),
                                    hover_cb
                                ]
                            ),
                            v.Col(
                                cols=12,
                                sm=6,
                                md=4,
                                children=[
                                    v.Subheader(children=["FAB location"]),
                                    top_location,
                                    bottom_location,
                                    right_location,
                                    left_location,
                                ]
                            ),
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols=12,
                                sm=6,
                                md=4,
                                children=[
                                    v.Subheader(children=["Speed dial direction"]),
                                    direction_rg
                                ]
                            ),
                            v.Col(
                                cols=12,
                                sm=6,
                                md=4,
                                children=[
                                    v.Subheader(children=["Transition"]),
                                    transition_rg
                                ]
                            ),
                        ]
                    ),
                    speed_dial
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card id="create">
                <v-container fluid>
                <v-row class="child-flex">
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-subheader>Options</v-subheader>
                    <v-checkbox
                        v-model="hover"
                        label="Open on hover"
                        hide-details
                    ></v-checkbox>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-subheader>FAB location</v-subheader>
                    <v-checkbox
                        v-model="top"
                        label="Top"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="right"
                        label="Right"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="bottom"
                        label="Bottom"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="left"
                        label="Left"
                        hide-details
                    ></v-checkbox>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-subheader>Speed dial direction</v-subheader>
                    <v-radio-group
                        v-model="direction"
                        hide-details
                    >
                        <v-radio
                        value="top"
                        label="Top"
                        ></v-radio>
                        <v-radio
                        value="right"
                        label="Right"
                        ></v-radio>
                        <v-radio
                        value="bottom"
                        label="Bottom"
                        ></v-radio>
                        <v-radio
                        value="left"
                        label="Left"
                        ></v-radio>
                    </v-radio-group>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-subheader>Transition</v-subheader>
                    <v-radio-group
                        v-model="transition"
                        hide-details
                    >
                        <v-radio
                        value="slide-y-transition"
                        label="Slide y"
                        ></v-radio>
                        <v-radio
                        value="slide-y-reverse-transition"
                        label="Slide y reverse"
                        ></v-radio>
                        <v-radio
                        value="slide-x-transition"
                        label="Slide x"
                        ></v-radio>
                        <v-radio
                        value="slide-x-reverse-transition"
                        label="Slide x reverse"
                        ></v-radio>
                        <v-radio
                        value="scale-transition"
                        label="Scale"
                        ></v-radio>
                    </v-radio-group>
                    </v-col>
                </v-row>
                </v-container>
                <v-speed-dial
                v-model="fab"
                :top="top"
                :bottom="bottom"
                :right="right"
                :left="left"
                :direction="direction"
                :open-on-hover="hover"
                :transition="transition"
                >
                <template v-slot:activator>
                    <v-btn
                    v-model="fab"
                    color="blue darken-2"
                    dark
                    fab
                    >
                    <v-icon v-if="fab">
                        mdi-close
                    </v-icon>
                    <v-icon v-else>
                        mdi-account-circle
                    </v-icon>
                    </v-btn>
                </template>
                <v-btn
                    fab
                    dark
                    small
                    color="green"
                >
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                    fab
                    dark
                    small
                    color="indigo"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn
                    fab
                    dark
                    small
                    color="red"
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
                </v-speed-dial>
            </v-card>
            </template>
