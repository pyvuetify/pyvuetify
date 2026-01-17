NavigationDrawer
================

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Navigation
    drawers documentation
    <https://v2.vuetifyjs.com/en/components/navigation-drawers/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>` component is
what your users will utilize to navigate through the application. The
navigation-drawer is pre-configured to work with or without vue-router right
out the box. For the purpose of display, some examples are wrapped in a
:py:class:`Card <ipyvuetify.Card>` element. Within your application you will
generally place the :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>`
as a direct child of :py:class:`App <ipyvuetify.App>`.

.. api::

    :py:class:`ipyvuetify.NavigationDrawer`

Usage
-----

The navigation drawer is primarily used to house links to the pages in your
application. Using ``null`` as the starting value for its v-model will
initialize the drawer as closed on mobile and as open on desktop. It is common
to pair drawers with the :py:class:`List <ipyvuetify.List>` component using the
nav property.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    items = [
        {"title": "Inbox", "icon": "mdi-inbox"},
        {"title": "Sent", "icon": "mdi-send"},
        {"title": "Trash", "icon": "mdi-delete"},
    ]

    v.Card(
        class_="mx-auto my-2",
        height=400,
        width=256,
        children=[
            v.NavigationDrawer(
                permanent=True,
                children=[
                    v.ListItem(
                        children=[
                            v.ListItemContent(
                                children=[
                                    v.ListItemTitle(
                                        class_="text-h6",
                                        children=["Application"],
                                    ),
                                    v.ListItemSubtitle(
                                        children=["subtext"],
                                    ),
                                ],
                            ),
                        ],
                    ),
                    v.Divider(),
                    v.List(
                        dense=True,
                        nav=True,
                        children=[
                            v.ListItem(
                                link=True,
                                children=[
                                    v.ListItemIcon(
                                        children=[v.Icon(children=[item["icon"]])],
                                    ),
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(children=["Inbox"])
                                        ],
                                    ),
                                ],
                            ) for item in items
                        ]
                    ),
                ],
            )
        ],
    )


.. warning::

    If you are using :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>`
    with app property enabled, you don't need to use absolute prop as in examples.

.. note::

    The expand-on-hover prop does not alter the content area of
    :py:class:`Main <ipyvuetify.Main>`. To have content area respond to
    expand-on-hover, bind mini-variant.sync to a data prop.

Examples
--------

Bottom drawer
^^^^^^^^^^^^^

Using the bottom prop, we are able to relocate our drawer on mobile devices to
come from the bottom of the screen. This is an alternative style and only
activates once the mobile-breakpoint is met.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label="Toggle Drawer", v_model=True)

            navigation_drawer =v.NavigationDrawer(
                v_model=True,
                absolute=True,
                bottom=True,
                temporary=True,
                children=[
                    v.List(
                        nav=True,
                        dense=True,
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=["Foo"]),
                                ],
                            ),
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=["Bar"]),
                                ],
                            ),
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=["Fizz"]),
                                ],
                            ),
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=["Buzz"]),
                                ],
                            ),
                        ],
                    )
                ],
            )

            jslink((switch, 'v_model'), (navigation_drawer, 'v_model'))

            v.Card(
                class_="mx-auto my-2 overflow-hidden",
                height=400,
                width=344,
                children=[
                    v.SystemBar(color="deep-purple darken-3"),
                    v.AppBar(
                        color="deep-purple accent-4",
                        dark=True,
                        prominent=True,
                        children=[
                            switch,
                            v.ToolbarTitle(children=["My files"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-filter"])],
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-dots-vertical"])],
                            ),
                        ],
                    ),
                    navigation_drawer,
                    v.CardText(
                        children=[
                            "The navigation drawer will appear from the bottom on smaller size screens."
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label="Toggle Drawer", v_model=True)

            navigation_drawer =v.NavigationDrawer(
                v_model=True,
                absolute=True,
                bottom=True,
                temporary=True,
                children=[
                    v.List(
                        nav=True,
                        dense=True,
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=["Foo"]),
                                ],
                            ),
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=["Bar"]),
                                ],
                            ),
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=["Fizz"]),
                                ],
                            ),
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=["Buzz"]),
                                ],
                            ),
                        ],
                    )
                ],
            )

            jslink((switch, 'v_model'), (navigation_drawer, 'v_model'))

            v.Card(
                class_="mx-auto my-2 overflow-hidden",
                height=400,
                width=344,
                children=[
                    v.SystemBar(color="deep-purple darken-3"),
                    v.AppBar(
                        color="deep-purple accent-4",
                        dark=True,
                        prominent=True,
                        children=[
                            switch,
                            v.ToolbarTitle(children=["My files"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-filter"])],
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-dots-vertical"])],
                            ),
                        ],
                    ),
                    navigation_drawer,
                    v.CardText(
                        children=[
                            "The navigation drawer will appear from the bottom on smaller size screens."
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto overflow-hidden"
                height="400"
                width="344"
            >
                <v-system-bar color="deep-purple darken-3"></v-system-bar>

                <v-app-bar
                color="deep-purple accent-4"
                dark
                prominent
                >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>My files</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-filter</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-app-bar>

                <v-navigation-drawer
                v-model="drawer"
                absolute
                bottom
                temporary
                >
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                    >
                    <v-list-item>
                        <v-list-item-title>Foo</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Bar</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Fizz</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Buzz</v-list-item-title>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
                </v-navigation-drawer>

                <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens.
                </v-card-text>
            </v-card>
            </template>

Expand on hover
^^^^^^^^^^^^^^^

Places the component in mini-variant mode and expands once hovered. This does
not alter the content area of :py:class:`Main <ipyvuetify.Main>`. The width can
be controlled with the mini-variant-width property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=600,
                children=[
                    v.NavigationDrawer(
                        permanent=True,
                        expand_on_hover=True,
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        class_="px-2",
                                        children=[
                                            v.ListItemAvatar(
                                                children=[
                                                    v.Img(
                                                        src="https://randomuser.me/api/portraits/women/85.jpg",
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        class_="text-h6",
                                                        children=["Sandra Adams"],
                                                    ),
                                                    v.ListItemSubtitle(
                                                        children=["sandra.adams@example.com"],
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                            v.Divider(),
                            v.List(
                                nav=True,
                                dense=True,
                                children=[
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-folder"])],
                                            ),
                                            v.ListItemTitle(children=["My Files"]),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-account-multiple"])],
                                            ),
                                            v.ListItemTitle(children=["Shared with me"]),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-star"])],
                                            ),
                                            v.ListItemTitle(children=["Starred"]),
                                        ],
                                    ),
                                ]
                            )
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=600,
                children=[
                    v.NavigationDrawer(
                        permanent=True,
                        expand_on_hover=True,
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        class_="px-2",
                                        children=[
                                            v.ListItemAvatar(
                                                children=[
                                                    v.Img(
                                                        src="https://randomuser.me/api/portraits/women/85.jpg",
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        class_="text-h6",
                                                        children=["Sandra Adams"],
                                                    ),
                                                    v.ListItemSubtitle(
                                                        children=["sandra.adams@example.com"],
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                            v.Divider(),
                            v.List(
                                nav=True,
                                dense=True,
                                children=[
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-folder"])],
                                            ),
                                            v.ListItemTitle(children=["My Files"]),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-account-multiple"])],
                                            ),
                                            v.ListItemTitle(children=["Shared with me"]),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-star"])],
                                            ),
                                            v.ListItemTitle(children=["Starred"]),
                                        ],
                                    ),
                                ]
                            )
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="ma-12 pa-12">
                <v-card>
                <v-navigation-drawer
                    permanent
                    expand-on-hover
                >
                    <v-list>
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            Sandra Adams
                        </v-list-item-title>
                        <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list
                    nav
                    dense
                    >
                    <v-list-item link>
                        <v-list-item-icon>
                        <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>My Files</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                        <v-icon>mdi-account-multiple</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Shared with me</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                        <v-icon>mdi-star</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Starred</v-list-item-title>
                    </v-list-item>
                    </v-list>
                </v-navigation-drawer>
                </v-card>
            </div>
            </template>

Images
^^^^^^

Apply a custom background to your drawer via the src prop. If you need to
customize :py:class:`Img <ipyvuetify.Img>`'s properties you can use the ``img``
slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"icon": 'mdi-email', "title": 'Inbox'},
                {"icon": 'mdi-account-supervisor-circle', "title": 'Supervisors'},
                {"icon": 'mdi-clock-start', "title": 'Clock-in'},
            ]

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=400,
                children=[
                    v.NavigationDrawer(
                        absolute=True,
                        dark=True,
                        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",
                        width=400,
                        permanent=True,
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=[item["icon"]])],
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=[item["title"]])
                                                ],
                                            ),
                                        ],
                                    ) for item in items
                                ]
                            )
                        ],
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"icon": 'mdi-email', "title": 'Inbox'},
                {"icon": 'mdi-account-supervisor-circle', "title": 'Supervisors'},
                {"icon": 'mdi-clock-start', "title": 'Clock-in'},
            ]

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=400,
                children=[
                    v.NavigationDrawer(
                        absolute=True,
                        dark=True,
                        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",
                        width=400,
                        permanent=True,
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=[item["icon"]])],
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=[item["title"]])
                                                ],
                                            ),
                                        ],
                                    ) for item in items
                                ]
                            )
                        ],
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                height="300"
                width="300"
            >
                <v-navigation-drawer
                absolute
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                width="100%"
                permanent
                >
                <v-list>
                    <v-list-item
                    v-for="([icon, text], i) in items"
                    :key="i"
                    link
                    >
                    <v-list-item-icon>
                        <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ text }}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-navigation-drawer>
            </v-card>
            </template>

Mini variant
^^^^^^^^^^^^

When using the mini-variant prop, the drawer will shrink (default 56px) and
hide everything inside of :py:class:`List <ipyvuetify.List>` except the first
element. In this example we use the .sync modifier that allows us to tie the
expanding/contracting of the drawer programmatically.

.. todo::

    The .sync modifier is not yet implemented in ipyvuetify. This example cannot be
    represented in a static documenation.

Permanent and floating
^^^^^^^^^^^^^^^^^^^^^^

By default, a navigation drawer has a 1px right border that separates it from
content. In this example we want to detach the drawer from the left side and
let it float on its own. The floating property removes the right border (or
left if using right).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"title": "Home", "icon": "mdi-view-dashboard"},
                {"title": "About", "icon": "mdi-forum"},
            ]

            v.Card(
                class_="pa-12",
                color="indigo darken-2",
                flat=True,
                children=[
                    v.Card(
                        elevation="12",
                        width=256,
                        children=[
                            v.NavigationDrawer(
                                floating=True,
                                permanent=True,
                                children=[
                                    v.List(
                                        dense=True,
                                        rounded=True,
                                        children=[
                                            v.ListItem(
                                                link=True,
                                                children=[
                                                    v.ListItemIcon(
                                                        children=[v.Icon(children=[item["icon"]])],
                                                    ),
                                                    v.ListItemContent(
                                                        children=[
                                                            v.ListItemTitle(children=[item["title"]])
                                                        ],
                                                    ),
                                                ],
                                            ) for item in items
                                        ],
                                    )
                                ],
                            )
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"title": "Home", "icon": "mdi-view-dashboard"},
                {"title": "About", "icon": "mdi-forum"},
            ]

            v.Card(
                class_="pa-12",
                color="indigo darken-2",
                flat=True,
                children=[
                    v.Card(
                        elevation="12",
                        width=256,
                        children=[
                            v.NavigationDrawer(
                                floating=True,
                                permanent=True,
                                children=[
                                    v.List(
                                        dense=True,
                                        rounded=True,
                                        children=[
                                            v.ListItem(
                                                link=True,
                                                children=[
                                                    v.ListItemIcon(
                                                        children=[v.Icon(children=[item["icon"]])],
                                                    ),
                                                    v.ListItemContent(
                                                        children=[
                                                            v.ListItemTitle(children=[item["title"]])
                                                        ],
                                                    ),
                                                ],
                                            ) for item in items
                                        ],
                                    )
                                ],
                            )
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="pa-12"
                color="indigo darken-2"
                flat
            >
                <v-card
                elevation="12"
                width="256"
                >
                <v-navigation-drawer
                    floating
                    permanent
                >
                    <v-list
                    dense
                    rounded
                    >
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                    >
                        <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list>
                </v-navigation-drawer>
                </v-card>
            </v-card>
            </template>

Right
^^^^^

Navigation drawers can also be positioned on the right side of your application
(or an element). This is also useful for creating a side-sheet with auxiliary
information that may not have any navigation links. When using RTL you must
explicitly define right for your drawer.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=800,
                children=[
                    v.NavigationDrawer(
                        permanent=True,
                        absolute=True,
                        right=True,
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        class_="px-2",
                                        children=[
                                            v.ListItemAvatar(
                                                children=[
                                                    v.Img(
                                                        src="https://randomuser.me/api/portraits/women/85.jpg",
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        class_="text-h6",
                                                        children=["Sandra Adams"],
                                                    ),
                                                    v.ListItemSubtitle(
                                                        children=["sandra.adams@example.com"],
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                            v.Divider(),
                            v.List(
                                nav=True,
                                dense=True,
                                children=[
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-folder"])],
                                            ),
                                            v.ListItemTitle(children=["My Files"]),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-account-multiple"])],
                                            ),
                                            v.ListItemTitle(children=["Shared with me"]),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-star"])],
                                            ),
                                            v.ListItemTitle(children=["Starred"]),
                                        ],
                                    ),
                                ]
                            )
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=800,
                children=[
                    v.NavigationDrawer(
                        permanent=True,
                        absolute=True,
                        right=True,
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        class_="px-2",
                                        children=[
                                            v.ListItemAvatar(
                                                children=[
                                                    v.Img(
                                                        src="https://randomuser.me/api/portraits/women/85.jpg",
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        class_="text-h6",
                                                        children=["Sandra Adams"],
                                                    ),
                                                    v.ListItemSubtitle(
                                                        children=["sandra.adams@example.com"],
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                            v.Divider(),
                            v.List(
                                nav=True,
                                dense=True,
                                children=[
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-folder"])],
                                            ),
                                            v.ListItemTitle(children=["My Files"]),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-account-multiple"])],
                                            ),
                                            v.ListItemTitle(children=["Shared with me"]),
                                        ],
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=["mdi-star"])],
                                            ),
                                            v.ListItemTitle(children=["Starred"]),
                                        ],
                                    ),
                                ]
                            )
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card height="350px">
                <v-navigation-drawer
                absolute
                permanent
                right
                >
                <template v-slot:prepend>
                    <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/women/81.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Jane Smith</v-list-item-title>
                        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </template>

                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-navigation-drawer>
            </v-card>
            </template>

Temporary
^^^^^^^^^

A temporary drawer sits above its application and uses a scrim (overlay) to
darken the background. This drawer behavior is mimicked by default when on
mobile. Clicking outside of the drawer will cause it to close.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label="Toggle Drawer", v_model=False)

            drawer =  v.NavigationDrawer(
                v_model=False,
                absolute=True,
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                class_="px-2",
                                children=[
                                    v.ListItemAvatar(
                                        children=[
                                            v.Img(
                                                src="https://randomuser.me/api/portraits/women/85.jpg",
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                            v.ListItem(
                                link=True,
                                children=[
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(
                                                class_="text-h6",
                                                children=["Sandra Adams"],
                                            ),
                                            v.ListItemSubtitle(
                                                children=["sandra.adams@example.com"],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                        ],
                    ),
                    v.Divider(),
                    v.List(
                        nav=True,
                        dense=True,
                        children=[
                            v.ListItem(
                                link=True,
                                children=[
                                    v.ListItemIcon(
                                        children=[v.Icon(children=["mdi-folder"])],
                                    ),
                                    v.ListItemTitle(children=["My Files"]),
                                ],
                            ),
                            v.ListItem(
                                link=True,
                                children=[
                                    v.ListItemIcon(
                                        children=[v.Icon(children=["mdi-account-multiple"])],
                                    ),
                                    v.ListItemTitle(children=["Shared with me"]),
                                ],
                            ),
                            v.ListItem(
                                link=True,
                                children=[
                                    v.ListItemIcon(
                                        children=[v.Icon(children=["mdi-star"])],
                                    ),
                                    v.ListItemTitle(children=["Starred"]),
                                ],
                            ),
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (drawer, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=800,
                children=[
                    v.Layout(
                        align_content_center=True,
                        justify_center=True,
                        children=[switch]
                    ),
                    drawer
                ],
            )


    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label="Toggle Drawer", v_model=False)

            drawer =  v.NavigationDrawer(
                v_model=False,
                absolute=True,
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                class_="px-2",
                                children=[
                                    v.ListItemAvatar(
                                        children=[
                                            v.Img(
                                                src="https://randomuser.me/api/portraits/women/85.jpg",
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                            v.ListItem(
                                link=True,
                                children=[
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(
                                                class_="text-h6",
                                                children=["Sandra Adams"],
                                            ),
                                            v.ListItemSubtitle(
                                                children=["sandra.adams@example.com"],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                        ],
                    ),
                    v.Divider(),
                    v.List(
                        nav=True,
                        dense=True,
                        children=[
                            v.ListItem(
                                link=True,
                                children=[
                                    v.ListItemIcon(
                                        children=[v.Icon(children=["mdi-folder"])],
                                    ),
                                    v.ListItemTitle(children=["My Files"]),
                                ],
                            ),
                            v.ListItem(
                                link=True,
                                children=[
                                    v.ListItemIcon(
                                        children=[v.Icon(children=["mdi-account-multiple"])],
                                    ),
                                    v.ListItemTitle(children=["Shared with me"]),
                                ],
                            ),
                            v.ListItem(
                                link=True,
                                children=[
                                    v.ListItemIcon(
                                        children=[v.Icon(children=["mdi-star"])],
                                    ),
                                    v.ListItemTitle(children=["Starred"]),
                                ],
                            ),
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (drawer, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=800,
                children=[
                    v.Layout(
                        align_content_center=True,
                        justify_center=True,
                        children=[switch]
                    ),
                    drawer
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-sheet
                height="400"
                class="overflow-hidden"
                style="position: relative;"
            >
                <v-container class="fill-height">
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-btn
                    color="pink"
                    dark
                    @click.stop="drawer = !drawer"
                    >
                    Toggle
                    </v-btn>
                </v-row>
                </v-container>

                <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                >
                <v-list-item>
                    <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-navigation-drawer>
            </v-sheet>
            </template>

Colored drawer
^^^^^^^^^^^^^^

Navigation drawers can be customized to fit any application's design. Here we
apply a custom background color and an appended content area using the append
slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"title": 'Dashboard', "icon": 'mdi-view-dashboard'},
                {"title": 'Account', "icon": 'mdi-account-box'},
                {"title": 'Admin', "icon": 'mdi-gavel'},
            ]

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=256,
                children=[
                    v.NavigationDrawer(
                        class_="deep-purple accent-4",
                        dark=True,
                        permanent=True,
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=[item["icon"]])],
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=[item["title"]])
                                                ],
                                            ),
                                        ],
                                    ) for item in items
                                ],
                            ),
                        ],
                        v_slots = [{
                            'name': 'append',
                            'children': v.Html(
                                tag='div',
                                class_='pa-2',
                                children=[
                                    v.Btn(
                                        block=True,
                                        children=['Logout']
                                    )
                                ]
                            )
                        }]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"title": 'Dashboard', "icon": 'mdi-view-dashboard'},
                {"title": 'Account', "icon": 'mdi-account-box'},
                {"title": 'Admin', "icon": 'mdi-gavel'},
            ]

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=256,
                children=[
                    v.NavigationDrawer(
                        class_="deep-purple accent-4",
                        dark=True,
                        permanent=True,
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemIcon(
                                                children=[v.Icon(children=[item["icon"]])],
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=[item["title"]])
                                                ],
                                            ),
                                        ],
                                    ) for item in items
                                ],
                            ),
                        ],
                        v_slots = [{
                            'name': 'append',
                            'children': v.Html(
                                tag='div',
                                class_='pa-2',
                                children=[
                                    v.Btn(
                                        block=True,
                                        children=['Logout']
                                    )
                                ]
                            )
                        }]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                height="400"
                width="256"
            >
                <v-navigation-drawer
                class="deep-purple accent-4"
                dark
                permanent
                >
                <v-list>
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>

                <template v-slot:append>
                    <div class="pa-2">
                    <v-btn block>
                        Logout
                    </v-btn>
                    </div>
                </template>
                </v-navigation-drawer>
            </v-card>
            </template>

Combined drawer
^^^^^^^^^^^^^^^

In this example we define a custom width to accommodate our nested drawer.
Using :py:class:`Row <ipyvuetify.Row>` we ensure that the drawer and list stack
horizontally next to each other.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"title": 'Home', "icon": 'mdi-view-dashboard'},
                {"title": 'About', "icon": 'mdi-forum'},
            ]

            links = ['Home', 'Contacts', 'Settings']

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=400,
                children=[
                    v.NavigationDrawer(
                        permanent=True,
                        children=[
                            v.Layout(
                                class_="fill-height",
                                children=[
                                    v.NavigationDrawer(
                                        dark=True,
                                        mini_variant=True,
                                        mini_variant_width="56",
                                        permanent=True,
                                        children=[
                                            v.ListItem(
                                                class_="px-2",
                                                children=[
                                                    v.ListItemAvatar(
                                                        children=[
                                                            v.Img(
                                                                src="https://randomuser.me/api/portraits/women/75.jpg",
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            ),
                                            v.Divider(),
                                            v.List(
                                                dense=True,
                                                nav=True,
                                                children=[
                                                    v.ListItem(
                                                        link=True,
                                                        children=[
                                                            v.ListItemIcon(
                                                                children=[v.Icon(children=[item["icon"]])],
                                                            ),
                                                            v.ListItemContent(
                                                                children=[
                                                                    v.ListItemTitle(children=[item["title"]])
                                                                ],
                                                            ),
                                                        ],
                                                    ) for item in items
                                                ],
                                            )
                                        ],
                                    ),
                                    v.List(
                                        class_="grow",
                                        children=[
                                            v.ListItem(
                                                link=True,
                                                children=[
                                                    v.ListItemTitle(children=[link])
                                                ],
                                            ) for link in links
                                        ],
                                    )
                                ],
                            )
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"title": 'Home', "icon": 'mdi-view-dashboard'},
                {"title": 'About', "icon": 'mdi-forum'},
            ]

            links = ['Home', 'Contacts', 'Settings']

            v.Card(
                class_="mx-auto my-2",
                height=400,
                width=400,
                children=[
                    v.NavigationDrawer(
                        permanent=True,
                        children=[
                            v.Layout(
                                class_="fill-height",
                                children=[
                                    v.NavigationDrawer(
                                        dark=True,
                                        mini_variant=True,
                                        mini_variant_width="56",
                                        permanent=True,
                                        children=[
                                            v.ListItem(
                                                class_="px-2",
                                                children=[
                                                    v.ListItemAvatar(
                                                        children=[
                                                            v.Img(
                                                                src="https://randomuser.me/api/portraits/women/75.jpg",
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            ),
                                            v.Divider(),
                                            v.List(
                                                dense=True,
                                                nav=True,
                                                children=[
                                                    v.ListItem(
                                                        link=True,
                                                        children=[
                                                            v.ListItemIcon(
                                                                children=[v.Icon(children=[item["icon"]])],
                                                            ),
                                                            v.ListItemContent(
                                                                children=[
                                                                    v.ListItemTitle(children=[item["title"]])
                                                                ],
                                                            ),
                                                        ],
                                                    ) for item in items
                                                ],
                                            )
                                        ],
                                    ),
                                    v.List(
                                        class_="grow",
                                        children=[
                                            v.ListItem(
                                                link=True,
                                                children=[
                                                    v.ListItemTitle(children=[link])
                                                ],
                                            ) for link in links
                                        ],
                                    )
                                ],
                            )
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                height="300"
                width="330"
            >
                <v-navigation-drawer
                permanent
                width="100%"
                >
                <v-row
                    class="fill-height"
                    no-gutters
                >
                    <v-navigation-drawer
                    dark
                    mini-variant
                    mini-variant-width="56"
                    permanent
                    >
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list
                        dense
                        nav
                    >
                        <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    </v-navigation-drawer>

                    <v-list class="grow">
                    <v-list-item
                        v-for="link in links"
                        :key="link"
                        link
                    >
                        <v-list-item-title v-text="link"></v-list-item-title>
                    </v-list-item>
                    </v-list>
                </v-row>
                </v-navigation-drawer>
            </v-card>
            </template>
