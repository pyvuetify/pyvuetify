SystemBar
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify System Bar
    documentation <https://v2.vuetifyjs.com/en/components/system-bars/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`SystemBar <ipyvuetify.SystemBar>` component can be used for
displaying statuses to the user. It looks like the Android system bar and can
contain icons, spacers, and some text.

.. api::

    - :py:class:`ipyvuetify.SystemBar`

Usage
-----

:py:class:`SystemBar <ipyvuetify.SystemBar>` in its simplest form displays a
small container with default theme.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Card(
        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg",
        height="200px",
        children=[
            v.SystemBar(
                color="orange",
                children=[
                    v.Spacer(),
                    v.Icon(children=["mdi-wifi-strength-2"]),
                    v.Icon(children=["mdi-signal-cellular-2"]),
                    v.Icon(children=["mdi-battery-90"]),
                    v.Html(tag="span", children=["12:30"])
                ]
            )
        ]
    )

Examples
--------

Color
^^^^^

You can optionally change the color of the
:py:class:`SystemBar <ipyvuetify.SystemBar>` by using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['primary', 'red lighten-2', 'indigo darken-2']

            v.Container(
                children=[
                    v.SystemBar(
                        class_="my-3",
                        color=color,
                        dark=True,
                        children=[
                            v.Spacer(),
                            v.Icon(children=["mdi-wifi-strength-2"]),
                            v.Icon(children=["mdi-signal-cellular-2"]),
                            v.Icon(children=["mdi-battery-90"]),
                            v.Html(tag="span", children=["12:30"])
                        ]
                    ) for color in colors
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['primary', 'red lighten-2', 'indigo darken-2']

            v.Container(
                children=[
                    v.SystemBar(
                        class_="my-3",
                        color=color,
                        dark=True,
                        children=[
                            v.Spacer(),
                            v.Icon(children=["mdi-wifi-strength-2"]),
                            v.Icon(children=["mdi-signal-cellular-2"]),
                            v.Icon(children=["mdi-battery-90"]),
                            v.Html(tag="span", children=["12:30"])
                        ]
                    ) for color in colors
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-system-bar
                dark
                color="primary"
                >
                <v-spacer></v-spacer>
                <v-icon>mdi-wifi-strength-4</v-icon>
                <v-icon>mdi-signal-cellular-outline</v-icon>
                <v-icon>mdi-battery</v-icon>
                <span>12:30</span>
                </v-system-bar>
                <br>
                <v-system-bar
                dark
                color="red lighten-2"
                >
                <v-spacer></v-spacer>
                <v-icon>mdi-wifi-strength-4</v-icon>
                <v-icon>mdi-signal-cellular-outline</v-icon>
                <v-icon>mdi-battery</v-icon>
                <span>12:30</span>
                </v-system-bar>
                <br>
                <v-system-bar
                dark
                color="indigo darken-2"
                >
                <v-spacer></v-spacer>
                <v-icon>mdi-wifi-strength-4</v-icon>
                <v-icon>mdi-signal-cellular-outline</v-icon>
                <v-icon>mdi-battery</v-icon>
                <span>12:30</span>
                </v-system-bar>
            </div>
            </template>

Lights out
^^^^^^^^^^

You can reduce :py:class:`SystemBar <ipyvuetify.SystemBar>`'s opacity using
``lights_out`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Subheader(children=["Lights out (light)"]),
                    v.Card(
                        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg",
                        height="200px",
                        children=[
                            v.SystemBar(
                                lights_out=True,
                                children=[
                                    v.Spacer(),
                                    v.Icon(children=["mdi-wifi-strength-4"]),
                                    v.Icon(children=["mdi-signal-cellular-outline"]),
                                    v.Icon(children=["mdi-battery"]),
                                    v.Html(tag="span", children=["12:30"])
                                ]
                            )
                        ]
                    ),
                    v.Subheader(children=["Lights out (dark)"]),
                    v.Card(
                        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg",
                        height="200px",
                        children=[
                            v.SystemBar(
                                lights_out=True,
                                dark=True,
                                children=[
                                    v.Spacer(),
                                    v.Icon(children=["mdi-wifi-strength-4"]),
                                    v.Icon(children=["mdi-signal-cellular-outline"]),
                                    v.Icon(children=["mdi-battery"]),
                                    v.Html(tag="span", children=["12:30"])
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
                    v.Subheader(children=["Lights out (light)"]),
                    v.Card(
                        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg",
                        height="200px",
                        children=[
                            v.SystemBar(
                                lights_out=True,
                                children=[
                                    v.Spacer(),
                                    v.Icon(children=["mdi-wifi-strength-4"]),
                                    v.Icon(children=["mdi-signal-cellular-outline"]),
                                    v.Icon(children=["mdi-battery"]),
                                    v.Html(tag="span", children=["12:30"])
                                ]
                            )
                        ]
                    ),
                    v.Subheader(children=["Lights out (dark)"]),
                    v.Card(
                        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg",
                        height="200px",
                        children=[
                            v.SystemBar(
                                lights_out=True,
                                dark=True,
                                children=[
                                    v.Spacer(),
                                    v.Icon(children=["mdi-wifi-strength-4"]),
                                    v.Icon(children=["mdi-signal-cellular-outline"]),
                                    v.Icon(children=["mdi-battery"]),
                                    v.Html(tag="span", children=["12:30"])
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-subheader>Lights out (light)</v-subheader>
                <v-card
                img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg"
                height="200px"
                >
                <v-system-bar
                    color="primary"
                    lights-out
                >
                    <v-spacer></v-spacer>
                    <v-icon>mdi-wifi-strength-4</v-icon>
                    <v-icon>mdi-signal-cellular-outline</v-icon>
                    <v-icon>mdi-battery</v-icon>
                    <span>12:30</span>
                </v-system-bar>
                </v-card>
                <v-subheader>Lights out (dark)</v-subheader>
                <v-card
                img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg"
                height="200px"
                >
                <v-system-bar
                    color="primary"
                    lights-out
                    dark
                >
                    <v-spacer></v-spacer>
                    <v-icon>mdi-wifi-strength-4</v-icon>
                    <v-icon>mdi-signal-cellular-outline</v-icon>
                    <v-icon>mdi-battery</v-icon>
                    <span>12:30</span>
                </v-system-bar>
                </v-card>
            </div>
            </template>

Themes
^^^^^^

Dark or light theme variants can be applied to
:py:class:`SystemBar <ipyvuetify.SystemBar>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Subheader(children=["Light status bar"]),
                    v.Card(
                        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg",
                        height="200px",
                        children=[
                            v.SystemBar(
                                color="primary",
                                children=[
                                    v.Spacer(),
                                    v.Icon(children=["mdi-wifi-strength-4"]),
                                    v.Icon(children=["mdi-signal-cellular-outline"]),
                                    v.Icon(children=["mdi-battery"]),
                                    v.Html(tag="span", children=["12:30"])
                                ]
                            )
                        ]
                    ),
                    v.Subheader(children=["Dark status bar"]),
                    v.Card(
                        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg",
                        height="200px",
                        children=[
                            v.SystemBar(
                                color="primary",
                                dark=True,
                                children=[
                                    v.Spacer(),
                                    v.Icon(children=["mdi-wifi-strength-4"]),
                                    v.Icon(children=["mdi-signal-cellular-outline"]),
                                    v.Icon(children=["mdi-battery"]),
                                    v.Html(tag="span", children=["12:30"])
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
                    v.Subheader(children=["Light status bar"]),
                    v.Card(
                        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg",
                        height="200px",
                        children=[
                            v.SystemBar(
                                color="primary",
                                children=[
                                    v.Spacer(),
                                    v.Icon(children=["mdi-wifi-strength-4"]),
                                    v.Icon(children=["mdi-signal-cellular-outline"]),
                                    v.Icon(children=["mdi-battery"]),
                                    v.Html(tag="span", children=["12:30"])
                                ]
                            )
                        ]
                    ),
                    v.Subheader(children=["Dark status bar"]),
                    v.Card(
                        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg",
                        height="200px",
                        children=[
                            v.SystemBar(
                                color="primary",
                                dark=True,
                                children=[
                                    v.Spacer(),
                                    v.Icon(children=["mdi-wifi-strength-4"]),
                                    v.Icon(children=["mdi-signal-cellular-outline"]),
                                    v.Icon(children=["mdi-battery"]),
                                    v.Html(tag="span", children=["12:30"])
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-subheader>Light status bar</v-subheader>
                <v-card
                img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg"
                height="200px"
                >
                <v-system-bar color="primary">
                    <v-spacer></v-spacer>
                    <v-icon>mdi-wifi-strength-4</v-icon>
                    <v-icon>mdi-signal-cellular-outline</v-icon>
                    <v-icon>mdi-battery</v-icon>
                    <span>12:30</span>
                </v-system-bar>
                </v-card>
                <v-subheader>Dark status bar</v-subheader>
                <v-card
                img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg"
                height="200px"
                >
                <v-system-bar
                    color="primary"
                    dark
                >
                    <v-spacer></v-spacer>
                    <v-icon>mdi-wifi-strength-4</v-icon>
                    <v-icon>mdi-signal-cellular-outline</v-icon>
                    <v-icon>mdi-battery</v-icon>
                    <span>12:30</span>
                </v-system-bar>
                </v-card>
            </div>
            </template>

Window
^^^^^^

A window bar with window controls and status info.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.SystemBar(
                window=True,
                dark=True,
                children=[
                    v.Icon(children=["mdi-message"]),
                    v.Html(tag="span", children=["10 unread messages"]),
                    v.Spacer(),
                    v.Icon(children=["mdi-minus"]),
                    v.Icon(children=["mdi-checkbox-blank-outline"]),
                    v.Icon(children=["mdi-close"])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.SystemBar(
                window=True,
                dark=True,
                children=[
                    v.Icon(children=["mdi-message"]),
                    v.Html(tag="span", children=["10 unread messages"]),
                    v.Spacer(),
                    v.Icon(children=["mdi-minus"]),
                    v.Icon(children=["mdi-checkbox-blank-outline"]),
                    v.Icon(children=["mdi-close"])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-system-bar
                window
                dark
                >
                <v-icon>mdi-message</v-icon>
                <span>10 unread messages</span>
                <v-spacer></v-spacer>
                <v-icon>mdi-minus</v-icon>
                <v-icon>mdi-checkbox-blank-outline</v-icon>
                <v-icon>mdi-close</v-icon>
                </v-system-bar>
            </div>
            </template>
