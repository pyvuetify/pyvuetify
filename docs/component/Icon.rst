Icon
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Icon documentation
    <https://v2.vuetifyjs.com/en/components/icons/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Icon <ipyvuetify.Icon>` component provides a large set of
glyphs to provide context to various aspects of your application. For a list of
all available icons, visit the official `Material Design Icons
<https://pictogrammers.com/library/mdi/>`__ page. To use any of these icons simply
use the ``mdi-`` prefix followed by the icon name.

.. api::

    - :py:class:`ipyvuetify.Icon`

Usage
-----

Icons come in two themes (light and dark), and five different sizes (x-small,
small, medium (default), large, and x-large).

.. jupyter-execute::
    :raises:

    import ipyvuetify as v
    from ipywidgets import jslink

    v.Icon(
        children=['mdi-home'],
        color='primary',
        large=True,
    )


Examples
--------

Color
^^^^^

Using color helpers you can change the color of an icon from the standard dark
and light themes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            icons = [
                ('mdi-domain', 'green darken-2'),
                ('mdi-message-text', 'blue darken-2'),
                ('mdi-dialpad', 'purple darken-2'),
                ('mdi-email', 'teal darken-2'),
                ('mdi-call-split', 'blue-grey darken-2'),
                ('mdi-arrow-up-bold-box-outline', 'orange darken-2'),
            ]

            v.Layout(
                class_="d-flex flex-row justify-space-evenly",
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.Icon(
                                children=[icon_name],
                                large=True,
                                color=color,
                            )
                        ],
                    ) for icon_name, color in icons
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            icons = [
                ('mdi-domain', 'green darken-2'),
                ('mdi-message-text', 'blue darken-2'),
                ('mdi-dialpad', 'purple darken-2'),
                ('mdi-email', 'teal darken-2'),
                ('mdi-call-split', 'blue-grey darken-2'),
                ('mdi-arrow-up-bold-box-outline', 'orange darken-2'),
            ]

            v.Layout(
                class_="d-flex flex-row justify-space-evenly",
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.Icon(
                                children=[icon_name],
                                large=True,
                                color=color,
                            )
                        ],
                    ) for icon_name, color in icons
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-icon
                large
                color="green darken-2"
                >
                mdi-domain
                </v-icon>

                <v-icon
                large
                color="blue darken-2"
                >
                mdi-message-text
                </v-icon>

                <v-icon
                large
                color="purple darken-2"
                >
                mdi-dialpad
                </v-icon>

                <v-icon
                large
                color="teal darken-2"
                >
                mdi-email
                </v-icon>

                <v-icon
                large
                color="blue-grey darken-2"
                >
                mdi-call-split
                </v-icon>

                <v-icon
                large
                color="orange darken-2"
                >
                mdi-arrow-up-bold-box-outline
                </v-icon>
            </v-row>
            </template>

Click
^^^^^

Binding any click event to :py:class:`Icon <ipyvuetify.Icon>` will
automatically change the cursor to a pointer.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                children=[
                    v.Toolbar(
                        color="pink",
                        dark=True,
                        dense=True,
                        flat=True,
                        children=[
                            v.ToolbarTitle(
                                class_="text-body-2",
                                children=["Upcoming Changes"],
                            ),
                        ],
                    ),
                    v.CardText(
                        children=[
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                            "sed do eiusmod tempor incididunt ut labore et dolore magna "
                            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                            "ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                            "Duis aute irure dolor in reprehenderit in voluptate velit "
                            "esse cillum dolore eu fugiat nulla pariatur. Excepteur "
                            "sint occaecat cupidatat non proident, sunt in culpa qui "
                            "officia deserunt mollit anim id est laborum."
                        ]
                    ),
                    v.CardActions(
                        children=[
                            v.Spacer(),
                            v.Icon(
                                large=True,
                                children=["mdi-chevron-right"],
                                #on_click=lambda x: print("Icon clicked!"),
                            ),
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                children=[
                    v.Toolbar(
                        color="pink",
                        dark=True,
                        dense=True,
                        flat=True,
                        children=[
                            v.ToolbarTitle(
                                class_="text-body-2",
                                children=["Upcoming Changes"],
                            ),
                        ],
                    ),
                    v.CardText(
                        children=[
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                            "sed do eiusmod tempor incididunt ut labore et dolore magna "
                            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                            "ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                            "Duis aute irure dolor in reprehenderit in voluptate velit "
                            "esse cillum dolore eu fugiat nulla pariatur. Excepteur "
                            "sint occaecat cupidatat non proident, sunt in culpa qui "
                            "officia deserunt mollit anim id est laborum."
                        ]
                    ),
                    v.CardActions(
                        children=[
                            v.Spacer(),
                            v.Icon(
                                large=True,
                                children=["mdi-chevron-right"],
                                #on_click=lambda x: print("Icon clicked!"),
                            ),
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-toolbar
                color="pink"
                dark
                dense
                flat
                >
                <v-toolbar-title class="text-body-2">
                    Upcoming Changes
                </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-icon
                    large
                    @click="next"
                >
                    mdi-chevron-right
                </v-icon>
                </v-card-actions>
            </v-card>
            </template>

Buttons
^^^^^^^

Icons can be used inside of buttons to add emphasis to the action.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(tag="div", children=[
                v.Html(tag="div", class_="text-center", children=[
                    v.Html(tag="div", children=[
                        v.Btn(
                            class_="ma-2",
                            color="primary",
                            dark=True,
                            children=[
                                "Accept",
                                v.Icon(
                                    dark=True,
                                    right=True,
                                    children=["mdi-checkbox-marked-circle"],
                                ),
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            color="red",
                            dark=True,
                            children=[
                                "Decline",
                                v.Icon(
                                    dark=True,
                                    right=True,
                                    children=["mdi-cancel"],
                                ),
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            dark=True,
                            children=[
                                v.Icon(
                                    dark=True,
                                    left=True,
                                    children=["mdi-minus-circle"],
                                ),
                                "Cancel",
                            ],
                        ),
                    ]),
                    v.Html(tag="div", children=[
                        v.Btn(
                            class_="ma-2",
                            color="orange darken-2",
                            dark=True,
                            children=[
                                v.Icon(
                                    dark=True,
                                    left=True,
                                    children=["mdi-arrow-left"],
                                ),
                                "Back",
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            color="purple",
                            dark=True,
                            children=[
                                v.Icon(
                                    dark=True,
                                    children=["mdi-wrench"],
                                ),
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            color="indigo",
                            dark=True,
                            children=[
                                v.Icon(
                                    dark=True,
                                    children=["mdi-cloud-upload"],
                                ),
                            ],
                        ),
                    ]),
                    v.Html(tag="div", children=[
                        v.Btn(
                            class_="ma-2",
                            text=True,
                            icon=True,
                            color="blue lighten-2",
                            children=[
                                v.Icon(
                                    children=["mdi-thumb-up"],
                                ),
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            text=True,
                            icon=True,
                            color="red lighten-2",
                            children=[
                                v.Icon(
                                    children=["mdi-thumb-down"],
                                ),
                            ],
                        ),
                    ]),
                ]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(tag="div", children=[
                v.Html(tag="div", class_="text-center", children=[
                    v.Html(tag="div", children=[
                        v.Btn(
                            class_="ma-2",
                            color="primary",
                            dark=True,
                            children=[
                                "Accept",
                                v.Icon(
                                    dark=True,
                                    right=True,
                                    children=["mdi-checkbox-marked-circle"],
                                ),
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            color="red",
                            dark=True,
                            children=[
                                "Decline",
                                v.Icon(
                                    dark=True,
                                    right=True,
                                    children=["mdi-cancel"],
                                ),
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            dark=True,
                            children=[
                                v.Icon(
                                    dark=True,
                                    left=True,
                                    children=["mdi-minus-circle"],
                                ),
                                "Cancel",
                            ],
                        ),
                    ]),
                    v.Html(tag="div", children=[
                        v.Btn(
                            class_="ma-2",
                            color="orange darken-2",
                            dark=True,
                            children=[
                                v.Icon(
                                    dark=True,
                                    left=True,
                                    children=["mdi-arrow-left"],
                                ),
                                "Back",
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            color="purple",
                            dark=True,
                            children=[
                                v.Icon(
                                    dark=True,
                                    children=["mdi-wrench"],
                                ),
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            color="indigo",
                            dark=True,
                            children=[
                                v.Icon(
                                    dark=True,
                                    children=["mdi-cloud-upload"],
                                ),
                            ],
                        ),
                    ]),
                    v.Html(tag="div", children=[
                        v.Btn(
                            class_="ma-2",
                            text=True,
                            icon=True,
                            color="blue lighten-2",
                            children=[
                                v.Icon(
                                    children=["mdi-thumb-up"],
                                ),
                            ],
                        ),
                        v.Btn(
                            class_="ma-2",
                            text=True,
                            icon=True,
                            color="red lighten-2",
                            children=[
                                v.Icon(
                                    children=["mdi-thumb-down"],
                                ),
                            ],
                        ),
                    ]),
                ]),
            ])


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <div>
                <v-btn
                    class="ma-2"
                    color="primary"
                    dark
                >
                    Accept
                    <v-icon
                    dark
                    right
                    >
                    mdi-checkbox-marked-circle
                    </v-icon>
                </v-btn>

                <v-btn
                    class="ma-2"
                    color="red"
                    dark
                >
                    Decline
                    <v-icon
                    dark
                    right
                    >
                    mdi-cancel
                    </v-icon>
                </v-btn>

                <v-btn
                    class="ma-2"
                    dark
                >
                    <v-icon
                    dark
                    left
                    >
                    mdi-minus-circle
                    </v-icon>Cancel
                </v-btn>
                </div>

                <div>
                <v-btn
                    class="ma-2"
                    color="orange darken-2"
                    dark
                >
                    <v-icon
                    dark
                    left
                    >
                    mdi-arrow-left
                    </v-icon>Back
                </v-btn>

                <v-btn
                    class="ma-2"
                    color="purple"
                    dark
                >
                    <v-icon dark>
                    mdi-wrench
                    </v-icon>
                </v-btn>

                <v-btn
                    class="ma-2"
                    color="indigo"
                    dark
                >
                    <v-icon dark>
                    mdi-cloud-upload
                    </v-icon>
                </v-btn>
                </div>

                <div>
                <v-btn
                    class="ma-2"
                    text
                    icon
                    color="blue lighten-2"
                >
                    <v-icon>mdi-thumb-up</v-icon>
                </v-btn>

                <v-btn
                    class="ma-2"
                    text
                    icon
                    color="red lighten-2"
                >
                    <v-icon>mdi-thumb-down</v-icon>
                </v-btn>
                </div>
            </div>
            </template>

Font Awesome
^^^^^^^^^^^^

`Font Awesome <https://fontawesome.com/icons/>`__ is also supported. Simply use
the ``fa-`` prefixed icon name. Please note that you still need to include the
Font Awesome icons in your project. For more information on how to install it,
please navigate to the `installation page
<https://v2.vuetifyjs.com/en/features/icon-fonts/#install-font-awesome-5-icons>`__.

.. danger::

    change of icon font is not yet supported by ipyvuetify.

Material Design
^^^^^^^^^^^^^^^

`Material Design <https://material.io/tools/icons/?style=baseline>`__ is also
supported. For more information on how to install it please `navigate here
<https://v2.vuetifyjs.com/en/features/icon-fonts/#install-material-icons>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            icons = ['mdi-home', 'mdi-calendar', 'mdi-information']
            green_icons = ['mdi-folder-open', 'mdi-widgets', 'mdi-gavel']
            sizes = [ 'small', 'medium', 'large', 'x-large']


            v.Container(
                fluid=True,
                children=[
                    v.Layout(
                        class_="d-flex flex-row justify-space-evenly my-2",
                        children=[
                            v.Html(
                                tag="div",
                                class_="d-flex flex-grow-1 justify-center py-2",
                                children=[
                                    v.Icon(
                                        small=(size == 'small'),
                                        large=(size == 'large'),
                                        x_large=(size == 'x-large'),
                                        children=[icon],
                                    )
                                ]
                            ) for icon in icons
                        ] + [
                            v.Html(
                                tag="div",
                                class_="teal d-flex flex-grow-1 justify-center py-2",
                                children=[
                                    v.Icon(
                                        dark=True,
                                        small=(size == 'small'),
                                        large=(size == 'large'),
                                        x_large=(size == 'x-large'),
                                        children=[icon],
                                    )
                                ]
                            ) for icon in green_icons
                        ]
                    ) for size in sizes
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            icons = ['mdi-home', 'mdi-calendar', 'mdi-information']
            green_icons = ['mdi-folder-open', 'mdi-widgets', 'mdi-gavel']
            sizes = [ 'small', 'medium', 'large', 'x-large']


            v.Container(
                fluid=True,
                children=[
                    v.Layout(
                        class_="d-flex flex-row justify-space-evenly my-2",
                        children=[
                            v.Html(
                                tag="div",
                                class_="d-flex flex-grow-1 justify-center py-2",
                                children=[
                                    v.Icon(
                                        small=(size == 'small'),
                                        large=(size == 'large'),
                                        x_large=(size == 'x-large'),
                                        children=[icon],
                                    )
                                ]
                            ) for icon in icons
                        ] + [
                            v.Html(
                                tag="div",
                                class_="teal d-flex flex-grow-1 justify-center py-2",
                                children=[
                                    v.Icon(
                                        dark=True,
                                        small=(size == 'small'),
                                        large=(size == 'large'),
                                        x_large=(size == 'x-large'),
                                        children=[icon],
                                    )
                                ]
                            ) for icon in green_icons
                        ]
                    ) for size in sizes
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row
                justify="space-around"
                class="mb-2"
                >
                <span class="group pa-2">
                    <v-icon small>home</v-icon>
                    <v-icon small>event</v-icon>
                    <v-icon small>info</v-icon>
                </span>

                <span class="group pa-2 teal">
                    <v-icon
                    dark
                    small
                    >folder_open</v-icon>
                    <v-icon
                    dark
                    small
                    >widgets</v-icon>
                    <v-icon
                    dark
                    small
                    >gavel</v-icon>
                </span>
                </v-row>

                <v-row
                justify="space-around"
                class="mb-2"
                >
                <span class="group pa-2">
                    <v-icon>home</v-icon>
                    <v-icon>event</v-icon>
                    <v-icon>info</v-icon>
                </span>

                <span class="group pa-2 teal">
                    <v-icon dark>folder_open</v-icon>
                    <v-icon dark>widgets</v-icon>
                    <v-icon dark>gavel</v-icon>
                </span>
                </v-row>

                <v-row
                justify="space-around"
                class="mb-2"
                >
                <span class="group pa-2">
                    <v-icon large>home</v-icon>
                    <v-icon large>event</v-icon>
                    <v-icon large>info</v-icon>
                </span>

                <span class="group pa-2 teal">
                    <v-icon
                    large
                    dark
                    >folder_open</v-icon>
                    <v-icon
                    large
                    dark
                    >widgets</v-icon>
                    <v-icon
                    large
                    dark
                    >gavel</v-icon>
                </span>
                </v-row>

                <v-row justify="space-around">
                <span class="group pa-2">
                    <v-icon x-large>home</v-icon>
                    <v-icon x-large>event</v-icon>
                    <v-icon x-large>info</v-icon>
                </span>

                <span class="group pa-2 teal">
                    <v-icon
                    x-large
                    dark
                    >folder_open</v-icon>
                    <v-icon
                    x-large
                    dark
                    >widgets</v-icon>
                    <v-icon
                    x-large
                    dark
                    >gavel</v-icon>
                </span>
                </v-row>
            </v-container>
            </template>

Accessibility
-------------

Icons can convey all sorts of meaningful information, so it's important that
they reach the largest amount of people possible. There are two use cases you'll
want to consider:

- **Decorative Icons** are only being used for visual or branding reinforcement.
  If they were removed from the page, users would still understand and be able
  to use your page.
- **Semantic Icons** are ones that you're using to convey meaning, rather than
  just pure decoration. This includes icons without text next to them used as
  interactive controls — buttons, form elements, toggles, etc.

.. danger::

    WAI-ARIA Authoring Practices 1.1 notes that ``aria-hidden="false"`` currently
    `behaves inconsistently across browsers <https://www.w3.org/TR/wai-aria-1.1/#aria-hidden>`__.

