Divider
=======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Divider documentation
    <https://v2.vuetifyjs.com/en/components/dividers/>`__. All examples have been converted
    to ipyvuetify syntax.

The :py:class:`Divider <ipyvuetify.Divider>` component is used to separate sections of lists or layouts.

.. api::

    :py:class:`ipyvuetify.Divider`

Usage
-----

Dividers in their simplest form display a horizontal line.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Divider()

Examples
--------

Inset
^^^^^

Inset dividers are moved 72px to the right. This will cause them to line up with list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items= [
                { "avatar": 'https://cdn.vuetifyjs.com/images/lists/2.jpg', "title": 'Summer BBQ', "subtitle": 'to Alex, Scott, Jennifer - Wish I could come, but I\'m out of town this weekend.' },
                { "avatar": 'https://cdn.vuetifyjs.com/images/lists/3.jpg', "title": 'Oui oui', "subtitle": 'Sandra Adams - Do you have Paris recommendations? Have you ever been?' },
                { "avatar": 'https://cdn.vuetifyjs.com/images/lists/1.jpg', "title": 'Brunch this weekend?', "subtitle": 'Ali Connors - I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' },
            ]

            list_items = [
                v.ListItem(
                    children=[
                        v.ListItemAvatar(
                            children=[
                                v.Img(src=item["avatar"])
                            ]
                        ),
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(
                                    children=[item["title"]]
                                ),
                                v.ListItemSubtitle(
                                    children=[item["subtitle"]]
                                ),
                            ]
                        ),
                    ]
                ) for item in items
            ]

            v.Container(
                children=[
                    v.Card(
                        max_width="400",
                        children=[
                            v.CardTitle(children=[v.Html(tag="h2", children=["Today"])]),
                            v.CardText(
                                children=[
                                    v.List(
                                        two_line=True,
                                        children=[
                                            list_items[0],
                                            v.Divider(inset=True),
                                            list_items[1],
                                            v.Divider(inset=True),
                                            list_items[2]
                                        ]
                                    )
                                ]
                            ),
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items= [
                { "avatar": 'https://cdn.vuetifyjs.com/images/lists/2.jpg', "title": 'Summer BBQ', "subtitle": 'to Alex, Scott, Jennifer - Wish I could come, but I\'m out of town this weekend.' },
                { "avatar": 'https://cdn.vuetifyjs.com/images/lists/3.jpg', "title": 'Oui oui', "subtitle": 'Sandra Adams - Do you have Paris recommendations? Have you ever been?' },
                { "avatar": 'https://cdn.vuetifyjs.com/images/lists/1.jpg', "title": 'Brunch this weekend?', "subtitle": 'Ali Connors - I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' },
            ]

            list_items = [
                v.ListItem(
                    children=[
                        v.ListItemAvatar(
                            children=[
                                v.Img(src=item["avatar"])
                            ]
                        ),
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(
                                    children=[item["title"]]
                                ),
                                v.ListItemSubtitle(
                                    children=[item["subtitle"]]
                                ),
                            ]
                        ),
                    ]
                ) for item in items
            ]

            v.Container(
                children=[
                    v.Card(
                        max_width="400",
                        children=[
                            v.CardTitle(children=[v.Html(tag="h2", children=["Today"])]),
                            v.CardText(
                                children=[
                                    v.List(
                                        two_line=True,
                                        children=[
                                            list_items[0],
                                            v.Divider(inset=True),
                                            list_items[1],
                                            v.Divider(inset=True),
                                            list_items[2]
                                        ]
                                    )
                                ]
                            ),
                        ]
                    )
                ],
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
                    <v-list two-line>
                    <template v-for="(item, index) in items.slice(0, 6)">
                        <v-subheader
                        v-if="item.header"
                        :key="item.header"
                        >
                        {{ item.header }}
                        </v-subheader>
                        <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        :inset="item.inset"
                        ></v-divider>
                        <v-list-item
                        v-else
                        :key="item.title"
                        >
                        <v-list-item-avatar>
                            <img :src="item.avatar">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </template>
                    </v-list>
                </v-card>
                </v-col>
            </v-row>
            </template>

Vertical
^^^^^^^^

Vertical dividers give you more tools for unique layouts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Toolbar(
                color="purple",
                dark=True,
                children=[
                    v.ToolbarTitle(children=["Title"]),
                    v.Divider(
                        class_="mx-4",
                        vertical=True
                    ),
                    v.Html(
                        tag="span",
                        class_="subheading",
                        children=["My Home"]
                    ),
                    v.Spacer(),
                    v.ToolbarItems(
                        class_="hidden-sm-and-down",
                        children=[
                            v.Btn(
                                text=True,
                                children=["News"]
                            ),
                            v.Divider(vertical=True),
                            v.Btn(
                                text=True,
                                children=["Blog"]
                            ),
                            v.Divider(vertical=True),
                            v.Btn(
                                text=True,
                                children=["Music"]
                            ),
                            v.Divider(vertical=True),
                        ]
                    ),
                    v.AppBarNavIcon()
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Toolbar(
                color="purple",
                dark=True,
                children=[
                    v.ToolbarTitle(children=["Title"]),
                    v.Divider(
                        class_="mx-4",
                        vertical=True
                    ),
                    v.Html(
                        tag="span",
                        class_="subheading",
                        children=["My Home"]
                    ),
                    v.Spacer(),
                    v.ToolbarItems(
                        class_="hidden-sm-and-down",
                        children=[
                            v.Btn(
                                text=True,
                                children=["News"]
                            ),
                            v.Divider(vertical=True),
                            v.Btn(
                                text=True,
                                children=["Blog"]
                            ),
                            v.Divider(vertical=True),
                            v.Btn(
                                text=True,
                                children=["Music"]
                            ),
                            v.Divider(vertical=True),
                        ]
                    ),
                    v.AppBarNavIcon()
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-toolbar
                color="purple"
                dark
            >
                <v-toolbar-title>Title</v-toolbar-title>

                <v-divider
                class="mx-4"
                vertical
                ></v-divider>

                <span class="subheading">My Home</span>

                <v-spacer></v-spacer>

                <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text>
                    News
                </v-btn>

                <v-divider vertical></v-divider>

                <v-btn text>
                    Blog
                </v-btn>

                <v-divider vertical></v-divider>

                <v-btn text>
                    Music
                </v-btn>

                <v-divider vertical></v-divider>
                </v-toolbar-items>

                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-toolbar>
            </template>

Portrait View
^^^^^^^^^^^^^

Create custom cards to fit any use-case.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Card(
                        xlass_="mx-auto",
                        max_width=600,
                        children=[
                            v.CardTitle(
                                class_="cyan darken-1",
                                children=[
                                    v.Html(
                                        tag="span",
                                        class_="text-h5 white--text",
                                        children=["Sarah Mcbeal"]
                                    ),
                                    v.Spacer(),
                                    v.Btn(
                                        icon=True,
                                        dark=True,
                                        children=[v.Icon(children=["mdi-chevron-left"])]
                                    ),
                                    v.Btn(
                                        icon=True,
                                        dark=True,
                                        children=[v.Icon(children=["mdi-pencil"])]
                                    ),
                                    v.Btn(
                                        icon=True,
                                        dark=True,
                                        children=[v.Icon(children=["mdi-dots-vertical"])]
                                    ),
                                ]
                            ),
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-phone"])]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=["(650) 555-1234"]
                                                    )
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-message-text"])]
                                            ),
                                        ]
                                    ),
                                    v.Divider(inset=True, class_="mt-0"),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-phone"])]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=["(323) 555-6789"]
                                                    )
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-message-text"])]
                                            ),
                                        ]
                                    ),
                                    v.Divider(inset=True, class_="mt-0"),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-email"])]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=["sarah@example.com"]
                                                    )
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-message-text"])]
                                            ),
                                        ]
                                    ),
                                    v.Divider(inset=True, class_="mt-0"),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-email"])]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=["Orlando, FL 79938"]
                                                    )
                                                ]
                                            ),
                                        ]
                                    ),
                                ]
                            ),
                            v.Img(
                                src="https://picsum.photos/700?image=996",
                                height="200px"
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
                    v.Card(
                        xlass_="mx-auto",
                        max_width=600,
                        children=[
                            v.CardTitle(
                                class_="cyan darken-1",
                                children=[
                                    v.Html(
                                        tag="span",
                                        class_="text-h5 white--text",
                                        children=["Sarah Mcbeal"]
                                    ),
                                    v.Spacer(),
                                    v.Btn(
                                        icon=True,
                                        dark=True,
                                        children=[v.Icon(children=["mdi-chevron-left"])]
                                    ),
                                    v.Btn(
                                        icon=True,
                                        dark=True,
                                        children=[v.Icon(children=["mdi-pencil"])]
                                    ),
                                    v.Btn(
                                        icon=True,
                                        dark=True,
                                        children=[v.Icon(children=["mdi-dots-vertical"])]
                                    ),
                                ]
                            ),
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-phone"])]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=["(650) 555-1234"]
                                                    )
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-message-text"])]
                                            ),
                                        ]
                                    ),
                                    v.Divider(inset=True, class_="mt-0"),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-phone"])]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=["(323) 555-6789"]
                                                    )
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-message-text"])]
                                            ),
                                        ]
                                    ),
                                    v.Divider(inset=True, class_="mt-0"),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-email"])]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=["sarah@example.com"]
                                                    )
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-message-text"])]
                                            ),
                                        ]
                                    ),
                                    v.Divider(inset=True, class_="mt-0"),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Icon(children=["mdi-email"])]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=["Orlando, FL 79938"]
                                                    )
                                                ]
                                            ),
                                        ]
                                    ),
                                ]
                            ),
                            v.Img(
                                src="https://picsum.photos/700?image=996",
                                height="200px"
                            ),
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-col
                cols="12"
                sm="8"
                >
                <v-card>
                    <v-card-title class="cyan darken-1">
                    <span class="text-h5 white--text">Sarah Mcbeal</span>

                    <v-spacer></v-spacer>

                    <v-btn
                        dark
                        icon
                    >
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>

                    <v-btn
                        dark
                        icon
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>

                    <v-btn
                        dark
                        icon
                    >
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                    </v-card-title>

                    <v-list>
                    <v-list-item>
                        <v-list-item-action>
                        <v-icon>mdi-phone</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>(650) 555-1234</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                        <v-icon>mdi-message-text</v-icon>
                        </v-list-item-action>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-action>
                        <v-icon>mdi-phone</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>(323) 555-6789</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                        <v-icon>mdi-message-text</v-icon>
                        </v-list-item-action>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-action>
                        <v-icon>mdi-email</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>mcbeal@example.com</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-action>
                        <v-icon>mdi-map-marker</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>Orlando, FL 79938</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list>

                    <v-img
                    src="https://picsum.photos/700?image=996"
                    height="200px"
                    ></v-img>
                </v-card>
                </v-col>
            </v-row>
            </template>

Subheaders
^^^^^^^^^^

Dividers and :py:class:`Subheader <ipyvuetify.Subheader>` components can help break up content
and can optionally line up with one another by using the same ``inset`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"avatar": 'https://picsum.photos/250/300?image=660', "title": 'Meeting @ Noon', "subtitle": 'Spike Lee - I\'ll be in your neighborhood'},
                {"avatar": 'https://picsum.photos/250/300?image=821', "title": 'Summer BBQ', "subtitle": 'to Operations support - Wish I could come.'},
                {"avatar": 'https://picsum.photos/250/300?image=783', "title": 'Yes yes', "subtitle": 'Bella - Do you have Paris recommendations'},
                {"avatar": 'https://picsum.photos/250/300?image=1006', "title": 'Dinner tonight?', "subtitle": 'LaToya - Do you want to hang out?'},
                {"avatar": 'https://picsum.photos/250/300?image=146', "title": 'So long', "subtitle": 'Nancy - Do you see what time it is?'},
                {"avatar": 'https://picsum.photos/250/300?image=1008', "title": 'Breakfast?', "subtitle": 'LaToya - Do you want to hang out?'},
                {"avatar": 'https://picsum.photos/250/300?image=839', "title": 'Winter Porridge', "subtitle": 'cc: Daniel - Tell me more...'},
                {"avatar": 'https://picsum.photos/250/300?image=145', "title": 'Oui oui', "subtitle": 'Nancy - Do you see what time it is?'},
            ]

            list_items = [
                v.ListItem(
                    children=[
                        v.ListItemAvatar(
                            children=[
                                v.Img(src=item["avatar"])
                            ]
                        ),
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(
                                    children=[item["title"]]
                                ),
                                v.ListItemSubtitle(
                                    children=[item["subtitle"]]
                                ),
                            ]
                        ),
                    ]
                ) for item in items
            ]

            v.Container(
                children=[
                    v.Card(
                        max_width="600",
                        children=[
                            v.Toolbar(
                                color="orange lighten-1",
                                dark=True,
                                children=[
                                    v.AppBarNavIcon(),
                                    v.ToolbarTitle(children=["Message Board"]),
                                    v.Spacer(),
                                    v.Btn(
                                        icon=True,
                                        children=[v.Icon(children=["mdi-magnify"])]
                                    ),
                                ]
                            ),
                            v.List(
                                two_line=True,
                                children=[
                                    v.Subheader(inset=True, children=["Today"]),
                                    v.Divider(inset=True, class_="mt-0"),
                                    *list_items[:3],
                                    v.Subheader(inset=True, children=["Yesterday"]),
                                    v.Divider(inset=True, class_="mt-0"),
                                    *list_items[3:6],
                                    v.Subheader(inset=True, children=["Last Week"]),
                                    v.Divider(inset=True, class_="mt-0"),
                                    *list_items[6:],
                                ]
                            ),
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"avatar": 'https://picsum.photos/250/300?image=660', "title": 'Meeting @ Noon', "subtitle": 'Spike Lee - I\'ll be in your neighborhood'},
                {"avatar": 'https://picsum.photos/250/300?image=821', "title": 'Summer BBQ', "subtitle": 'to Operations support - Wish I could come.'},
                {"avatar": 'https://picsum.photos/250/300?image=783', "title": 'Yes yes', "subtitle": 'Bella - Do you have Paris recommendations'},
                {"avatar": 'https://picsum.photos/250/300?image=1006', "title": 'Dinner tonight?', "subtitle": 'LaToya - Do you want to hang out?'},
                {"avatar": 'https://picsum.photos/250/300?image=146', "title": 'So long', "subtitle": 'Nancy - Do you see what time it is?'},
                {"avatar": 'https://picsum.photos/250/300?image=1008', "title": 'Breakfast?', "subtitle": 'LaToya - Do you want to hang out?'},
                {"avatar": 'https://picsum.photos/250/300?image=839', "title": 'Winter Porridge', "subtitle": 'cc: Daniel - Tell me more...'},
                {"avatar": 'https://picsum.photos/250/300?image=145', "title": 'Oui oui', "subtitle": 'Nancy - Do you see what time it is?'},
            ]

            list_items = [
                v.ListItem(
                    children=[
                        v.ListItemAvatar(
                            children=[
                                v.Img(src=item["avatar"])
                            ]
                        ),
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(
                                    children=[item["title"]]
                                ),
                                v.ListItemSubtitle(
                                    children=[item["subtitle"]]
                                ),
                            ]
                        ),
                    ]
                ) for item in items
            ]

            v.Container(
                children=[
                    v.Card(
                        max_width="600",
                        children=[
                            v.Toolbar(
                                color="orange lighten-1",
                                dark=True,
                                children=[
                                    v.AppBarNavIcon(),
                                    v.ToolbarTitle(children=["Message Board"]),
                                    v.Spacer(),
                                    v.Btn(
                                        icon=True,
                                        children=[v.Icon(children=["mdi-magnify"])]
                                    ),
                                ]
                            ),
                            v.List(
                                two_line=True,
                                children=[
                                    v.Subheader(inset=True, children=["Today"]),
                                    v.Divider(inset=True, class_="mt-0"),
                                    *list_items[:3],
                                    v.Subheader(inset=True, children=["Yesterday"]),
                                    v.Divider(inset=True, class_="mt-0"),
                                    *list_items[3:6],
                                    v.Subheader(inset=True, children=["Last Week"]),
                                    v.Divider(inset=True, class_="mt-0"),
                                    *list_items[6:],
                                ]
                            ),
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-col
                cols="12"
                sm="8"
                md="6"
                >
                <v-card>
                    <v-toolbar
                    color="orange lighten-1"
                    dark
                    >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Message Board</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    </v-toolbar>

                    <v-list two-line>
                    <template v-for="(item, index) in items">
                        <v-subheader
                        v-if="item.header"
                        :key="item.header"
                        inset
                        >
                        {{
                            item.header
                        }}
                        </v-subheader>

                        <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        inset
                        ></v-divider>

                        <v-list-item
                        v-else
                        :key="item.title"
                        ripple
                        >
                        <v-list-item-avatar>
                            <img :src="item.avatar">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle
                            v-html="item.subtitle"
                            ></v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </template>
                    </v-list>
                </v-card>
                </v-col>
            </v-row>
            </template>

Accessibility
-------------

By default, :py:class:`Divider <ipyvuetify.Divider>` components are assigned the
`WAI-ARIA <https://www.w3.org/WAI/standards-guidelines/aria/>`__ role of
`separator <https://www.w3.org/TR/wai-aria/#separator>`__ which denotes that the divider
"separates and distinguishes sections of content or groups of menu items." However, sometimes
a divider is just a way to make an interface look nice. In those cases, the role of
`presentation <https://www.w3.org/TR/wai-aria/#presentation>`__ should be used which denotes
"an element whose implicit native role semantics will not be mapped to the accessibility API."


To override the default separator role in a :py:class:`Divider <ipyvuetify.Divider>`, simply
add a ``role="presentation"`` prop to your component. In addition, :py:class:`Divider <ipyvuetify.Divider>`
components have an ``aria-orientation="horizontal"``. If ``vertical=True``, then
``aria-orientation="vertical"`` will be set automatically as well. If ``role="presentation"``,
``aria-orientation="undefined"``, its default value.
