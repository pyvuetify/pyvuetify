Subheader
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Subheader
    documentation <https://v2.vuetifyjs.com/en/components/subheaders/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Subheader <ipyvuetify.Subheader>` component is used to separate
sections of lists.

.. api::

    - :py:class:`ipyvuetify.Subheader`

Usage
-----

Subheaders in their simplest form display a subheading with default theme.

.. jupyter-execute::
    :raises:
    :hide-code:

    import ipyvuetify as v

    v.Subheader(
        children=["Default Subheader"]
    )

Examples
--------

Inset
^^^^^

Inset subheaders are moved 72px to the right. This gives you the option to
line them up with list items and inset dividers.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [v.ListItem(
                dense=True,
                children=[
                    v.ListItemAction(
                        children=[v.Icon(children=["mdi-label"])]
                    ),
                    v.ListItemContent(
                        children=[f'List item {i}']
                    )
                ]
            ) for i in range(1, 4)]

            v.Col(
                cols=12,
                sm=6,
                offset_sm=3,
                children=[
                    v.Card(
                        children=[
                            v.Subheader(
                                inset=True,
                                children=["Subheader"]
                            ),
                            v.List(
                                dense=True,
                                children=[
                                    items[0],
                                    v.Divider(inset=True),
                                    items[1],
                                    v.Divider(inset=True),
                                    items[2]
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [v.ListItem(
                dense=True,
                children=[
                    v.ListItemAction(
                        children=[v.Icon(children=["mdi-label"])]
                    ),
                    v.ListItemContent(
                        children=[f'List item {i}']
                    )
                ]
            ) for i in range(1, 4)]

            v.Col(
                cols=12,
                sm=6,
                offset_sm=3,
                children=[
                    v.Card(
                        children=[
                            v.Subheader(
                                inset=True,
                                children=["Subheader"]
                            ),
                            v.List(
                                dense=True,
                                children=[
                                    items[0],
                                    v.Divider(inset=True),
                                    items[1],
                                    v.Divider(inset=True),
                                    items[2]
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-col
                cols="12"
                sm="6"
                offset-sm="3"
            >
                <v-card>
                <v-subheader :inset="inset">
                    Subheader
                </v-subheader>

                <v-list>
                    <template v-for="(item, index) in items">
                    <v-list-item
                        v-if="item.action"
                        :key="item.title"
                    >
                        <v-list-item-action>
                        <v-icon>{{ item.action }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        :inset="inset"
                    ></v-divider>
                    </template>
                </v-list>
                </v-card>
            </v-col>
            </template>

Misc
----

Grid
^^^^

A subheader can add context to what a user is looking at.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Row(
                children=[
                    v.Col(
                        cols=12,
                        sm=6,
                        offset_sm=3,
                        children=[
                            v.Card(
                                children=[
                                    v.Toolbar(
                                        color="white",
                                        flat=True,
                                        children=[
                                            v.Btn(
                                                icon=True,
                                                light=True,
                                                children=[
                                                    v.Icon(
                                                        color="grey darken-2",
                                                        children=["mdi-arrow-left"]
                                                    )
                                                ]
                                            ),
                                            v.ToolbarTitle(
                                                class_="grey--text text--darken-4",
                                                children=["Albums"]
                                            ),
                                            v.Spacer(),
                                            v.Btn(
                                                icon=True,
                                                light=True,
                                                children=[
                                                    v.Icon(
                                                        color="grey darken-2",
                                                        children=["mdi-magnify"]
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Subheader(
                                        children=["May"]
                                    ),
                                    v.Container(
                                        fluid=True,
                                        children=[
                                            v.Row(
                                                children=[
                                                    v.Col(
                                                        cols=4,
                                                        children=[
                                                            v.Img(
                                                                src=f"https://randomuser.me/api/portraits/men/{i + 20}.jpg",
                                                                alt="lorem",
                                                                class_="image",
                                                                height="100%",
                                                                width="100%"
                                                            )
                                                        ]
                                                    ) for i in range(1, 7)
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Subheader(
                                        children=["June"]
                                    ),
                                    v.Container(
                                        fluid=True,
                                        children=[
                                            v.Row(
                                                children=[
                                                    v.Col(
                                                        cols=4,
                                                        children=[
                                                            v.Img(
                                                                src=f"https://randomuser.me/api/portraits/women/{i + 5}.jpg",
                                                                alt="lorem",
                                                                class_="image",
                                                                height="100%",
                                                                width="100%"
                                                            )
                                                        ]
                                                    ) for i in range(1, 7)
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Footer(
                                        class_="mt-12"
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

            v.Row(
                children=[
                    v.Col(
                        cols=12,
                        sm=6,
                        offset_sm=3,
                        children=[
                            v.Card(
                                children=[
                                    v.Toolbar(
                                        color="white",
                                        flat=True,
                                        children=[
                                            v.Btn(
                                                icon=True,
                                                light=True,
                                                children=[
                                                    v.Icon(
                                                        color="grey darken-2",
                                                        children=["mdi-arrow-left"]
                                                    )
                                                ]
                                            ),
                                            v.ToolbarTitle(
                                                class_="grey--text text--darken-4",
                                                children=["Albums"]
                                            ),
                                            v.Spacer(),
                                            v.Btn(
                                                icon=True,
                                                light=True,
                                                children=[
                                                    v.Icon(
                                                        color="grey darken-2",
                                                        children=["mdi-magnify"]
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Subheader(
                                        children=["May"]
                                    ),
                                    v.Container(
                                        fluid=True,
                                        children=[
                                            v.Row(
                                                children=[
                                                    v.Col(
                                                        cols=4,
                                                        children=[
                                                            v.Img(
                                                                src=f"https://randomuser.me/api/portraits/men/{i + 20}.jpg",
                                                                alt="lorem",
                                                                class_="image",
                                                                height="100%",
                                                                width="100%"
                                                            )
                                                        ]
                                                    ) for i in range(1, 7)
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Subheader(
                                        children=["June"]
                                    ),
                                    v.Container(
                                        fluid=True,
                                        children=[
                                            v.Row(
                                                children=[
                                                    v.Col(
                                                        cols=4,
                                                        children=[
                                                            v.Img(
                                                                src=f"https://randomuser.me/api/portraits/women/{i + 5}.jpg",
                                                                alt="lorem",
                                                                class_="image",
                                                                height="100%",
                                                                width="100%"
                                                            )
                                                        ]
                                                    ) for i in range(1, 7)
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Footer(
                                        class_="mt-12"
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
            <v-row>
                <v-col
                cols="12"
                sm="6"
                offset-sm="3"
                >
                <v-card>
                    <v-toolbar
                    color="white"
                    flat
                    >
                    <v-btn
                        icon
                        light
                    >
                        <v-icon color="grey darken-2">
                        mdi-arrow-left
                        </v-icon>
                    </v-btn>

                    <v-toolbar-title class="grey--text text--darken-4">
                        Albums
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        light
                    >
                        <v-icon color="grey darken-2">
                        mdi-magnify
                        </v-icon>
                    </v-btn>
                    </v-toolbar>

                    <v-subheader>May</v-subheader>
                    <v-container fluid>
                    <v-row>
                        <v-col
                        v-for="i in 6"
                        :key="i"
                        cols="4"
                        >
                        <img
                            :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`"
                            alt="lorem"
                            class="image"
                            height="100%"
                            width="100%"
                        >
                        </v-col>
                    </v-row>
                    </v-container>

                    <v-subheader>June</v-subheader>
                    <v-container fluid>
                    <v-row>
                        <v-col
                        v-for="i in 6"
                        :key="i"
                        cols="4"
                        >
                        <img
                            :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`"
                            alt="lorem"
                            class="image"
                            height="100%"
                            width="100%"
                        >
                        </v-col>
                    </v-row>
                    </v-container>

                    <v-footer class="mt-12"></v-footer>
                </v-card>
                </v-col>
            </v-row>
            </template>

Menu
^^^^

Using a subheader can help separate different types of actions.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                ('mdi-inbox-arrow-down', 'Inbox'),
                ('mdi-send', 'Sent'),
                ('mdi-delete', 'Trash'),
                ('mdi-alert-octagon', 'Spam'),
            ]

            labels = [
                ('mdi-label', 'Family'),
                ('mdi-label', 'Friends'),
                ('mdi-label', 'Work'),
            ]

            v.Row(
                children=[
                    v.Col(
                        cols=12,
                        sm=6,
                        offset_sm=3,
                        children=[
                            v.Card(
                                children=[
                                    v.Toolbar(
                                        color="teal",
                                        dark=True,
                                        children=[
                                            v.AppBarNavIcon(),
                                            v.ToolbarTitle(children=["Manage"]),
                                            v.Spacer(),
                                            v.Btn(
                                                icon=True,
                                                children=[
                                                    v.Icon(children=["mdi-dots-vertical"])
                                                ]
                                            )
                                        ]
                                    ),
                                    v.List(
                                        children=[
                                            v.ListItem(
                                                children=[
                                                    v.ListItemAction(
                                                        children=[v.Icon(children=[icon])]
                                                    ),
                                                    v.ListItemContent(
                                                        children=[title]
                                                    )
                                                ]
                                            ) for icon, title in items
                                        ] + [
                                            v.Divider(),
                                            v.Subheader(
                                                children=["Labels"]
                                            )
                                        ] + [
                                            v.ListItem(
                                                children=[
                                                    v.ListItemAction(
                                                        children=[v.Icon(children=[icon])]
                                                    ),
                                                    v.ListItemContent(
                                                        children=[title]
                                                    )
                                                ]
                                            ) for icon, title in labels
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

            items = [
                ('mdi-inbox-arrow-down', 'Inbox'),
                ('mdi-send', 'Sent'),
                ('mdi-delete', 'Trash'),
                ('mdi-alert-octagon', 'Spam'),
            ]

            labels = [
                ('mdi-label', 'Family'),
                ('mdi-label', 'Friends'),
                ('mdi-label', 'Work'),
            ]

            v.Row(
                children=[
                    v.Col(
                        cols=12,
                        sm=6,
                        offset_sm=3,
                        children=[
                            v.Card(
                                children=[
                                    v.Toolbar(
                                        color="teal",
                                        dark=True,
                                        children=[
                                            v.AppBarNavIcon(),
                                            v.ToolbarTitle(children=["Manage"]),
                                            v.Spacer(),
                                            v.Btn(
                                                icon=True,
                                                children=[
                                                    v.Icon(children=["mdi-dots-vertical"])
                                                ]
                                            )
                                        ]
                                    ),
                                    v.List(
                                        children=[
                                            v.ListItem(
                                                children=[
                                                    v.ListItemAction(
                                                        children=[v.Icon(children=[icon])]
                                                    ),
                                                    v.ListItemContent(
                                                        children=[title]
                                                    )
                                                ]
                                            ) for icon, title in items
                                        ] + [
                                            v.Divider(),
                                            v.Subheader(
                                                children=["Labels"]
                                            )
                                        ] + [
                                            v.ListItem(
                                                children=[
                                                    v.ListItemAction(
                                                        children=[v.Icon(children=[icon])]
                                                    ),
                                                    v.ListItemContent(
                                                        children=[title]
                                                    )
                                                ]
                                            ) for icon, title in labels
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
            <v-row>
                <v-col
                cols="12"
                sm="6"
                offset-sm="3"
                >
                <v-card>
                    <v-toolbar
                    color="teal"
                    dark
                    >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Manage</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                    </v-toolbar>

                    <v-list>
                    <template v-for="(item, index) in items">
                        <v-list-item
                        v-if="item.action"
                        :key="item.title"
                        >
                        <v-list-item-action>
                            <v-icon>{{ item.action }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        ></v-divider>

                        <v-subheader
                        v-else-if="item.header"
                        :key="item.header"
                        >
                        {{ item.header }}
                        </v-subheader>
                    </template>
                    </v-list>
                </v-card>
                </v-col>
            </v-row>
            </template>

Social media
^^^^^^^^^^^^

Using a subheader with social media interaction.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from random import random

            types = ['Places to Be', 'Places to See']
            cards = ['Good', 'Best', 'Finest']
            socials = [
                ('mdi-facebook', 'indigo'),
                ('mdi-linkedin', 'cyan darken-1'),
                ('mdi-instagram', 'red lighten-3'),
            ]

            v.Card(
                flat=True,
                tile=True,
                children=[
                    v.Toolbar(
                        color="cyan",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Application"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-magnify"])
                                ]
                            )
                        ]
                    ),
                    *[
                        v.Container(
                            fluid=True,
                            class_="grey lighten-4",
                            children=[
                                v.Subheader(
                                    children=[type_]
                                ),
                                v.Row(
                                    children=[
                                        v.Spacer(),
                                        *[
                                            v.Col(
                                                cols=12,
                                                sm=6,
                                                md=4,
                                                children=[
                                                    v.Card(
                                                        children=[
                                                            v.Img(
                                                                src=f"https://picsum.photos/200/300?image={int(random() * 11) + 550}",
                                                                height="300px",
                                                                children=[
                                                                    v.Html(
                                                                        tag="span",
                                                                        class_="text-h5 white--text pl-4 pt-4 d-inline-block",
                                                                        children=[card]
                                                                    )
                                                                ]
                                                            ),
                                                            v.CardActions(
                                                                class_="white justify-center",
                                                                children=[
                                                                    v.Btn(
                                                                        color=social[1],
                                                                        class_="white--text",
                                                                        fab=True,
                                                                        icon=True,
                                                                        small=True,
                                                                        children=[
                                                                            v.Icon(
                                                                                children=[social[0]]
                                                                            )
                                                                        ]
                                                                    ) for social in socials
                                                                ]
                                                            )
                                                        ]
                                                    )
                                                ]
                                            ) for j, card in enumerate(cards)
                                        ],
                                    ]
                                )
                            ]
                        ) for i, type_ in enumerate(types)
                    ]
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from random import random

            types = ['Places to Be', 'Places to See']
            cards = ['Good', 'Best', 'Finest']
            socials = [
                ('mdi-facebook', 'indigo'),
                ('mdi-linkedin', 'cyan darken-1'),
                ('mdi-instagram', 'red lighten-3'),
            ]

            v.Card(
                flat=True,
                tile=True,
                children=[
                    v.Toolbar(
                        color="cyan",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Application"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-magnify"])
                                ]
                            )
                        ]
                    ),
                    *[
                        v.Container(
                            fluid=True,
                            class_="grey lighten-4",
                            children=[
                                v.Subheader(
                                    children=[type_]
                                ),
                                v.Row(
                                    children=[
                                        v.Spacer(),
                                        *[
                                            v.Col(
                                                cols=12,
                                                sm=6,
                                                md=4,
                                                children=[
                                                    v.Card(
                                                        children=[
                                                            v.Img(
                                                                src=f"https://picsum.photos/200/300?image={int(random() * 11) + 550}",
                                                                height="300px",
                                                                children=[
                                                                    v.Html(
                                                                        tag="span",
                                                                        class_="text-h5 white--text pl-4 pt-4 d-inline-block",
                                                                        children=[card]
                                                                    )
                                                                ]
                                                            ),
                                                            v.CardActions(
                                                                class_="white justify-center",
                                                                children=[
                                                                    v.Btn(
                                                                        color=social[1],
                                                                        class_="white--text",
                                                                        fab=True,
                                                                        icon=True,
                                                                        small=True,
                                                                        children=[
                                                                            v.Icon(
                                                                                children=[social[0]]
                                                                            )
                                                                        ]
                                                                    ) for social in socials
                                                                ]
                                                            )
                                                        ]
                                                    )
                                                ]
                                            ) for j, card in enumerate(cards)
                                        ],
                                    ]
                                )
                            ]
                        ) for i, type_ in enumerate(types)
                    ]
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                flat
                tile
            >
                <v-toolbar
                color="cyan"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Application</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                </v-toolbar>

                <v-container
                v-for="type in types"
                :key="type"
                class="grey lighten-4"
                fluid
                >
                <v-subheader>{{ type }}</v-subheader>

                <v-row>
                    <v-spacer></v-spacer>
                    <v-col
                    v-for="card in cards"
                    :key="card"
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-card>
                        <v-img
                        :src="`https://picsum.photos/200/300?image=${getImage()}`"
                        height="300px"
                        >
                        <span
                            class="text-h5 white--text pl-4 pt-4 d-inline-block"
                            v-text="card"
                        ></span>
                        </v-img>

                        <v-card-actions class="white justify-center">
                        <v-btn
                            v-for="(social, i) in socials"
                            :key="i"
                            :color="social.color"
                            class="white--text"
                            fab
                            icon
                            small
                        >
                            <v-icon>{{ social.icon }}</v-icon>
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
            </template>
