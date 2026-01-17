List
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Lists documentation
    <https://v2.vuetifyjs.com/en/components/lists/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`List <ipyvuetify.List>` component is used to display information.
It can contain an avatar, content, actions, subheaders and much more. Lists
present content in a way that makes it easy to identify a specific item in a
collection. They provide a consistent styling for organizing groups of text and
images.

.. api::

    - :py:class:`ipyvuetify.List`
    - :py:class:`ipyvuetify.ListGroup`
    - :py:class:`ipyvuetify.ListItem`
    - :py:class:`ipyvuetify.ListItemAction`
    - :py:class:`ipyvuetify.ListItemActionText`
    - :py:class:`ipyvuetify.ListItemAvatar`
    - :py:class:`ipyvuetify.ListItemContent`
    - :py:class:`ipyvuetify.ListItemGroup`
    - :py:class:`ipyvuetify.ListItemIcon`
    - :py:class:`ipyvuetify.ListItemSubtitle`
    - :py:class:`ipyvuetify.ListItemTitle`

Usage
-----

Lists come in three main variations. single-line (default), two-line and
three-line. The line declaration specifies the minimum height of the item and
can also be controlled from :py:class:`List <ipyvuetify.List>` with the same
prop.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Card(
        class_="mx-auto my-2",
        max_width=400,
        tile=True,
        children=[
            v.ListItem(
                children=[
                    v.ListItemContent(
                        children=[
                            v.ListItemTitle(children=["Single-line item"])
                        ]
                    )
                ]
            ),
            v.ListItem(
                two_line=True,
                children=[
                    v.ListItemContent(
                        children=[
                            v.ListItemTitle(children=["Two-line item"]),
                            v.ListItemSubtitle(children=["Secondary text"])
                        ]
                    )
                ]
            ),
            v.ListItem(
                three_line=True,
                children=[
                    v.ListItemContent(
                        children=[
                            v.ListItemTitle(children=["Three-line item"]),
                            v.ListItemSubtitle(
                                children=[
                                    "Secondary line text Lorem ipsum dolor sit amet,",
                                    "consectetur adipiscing elit."
                                ]
                            )
                        ]
                    )
                ]
            )
        ]
    )

.. note::

    If you are looking for stateful list items, please check out
    :py:class:`ListItemGroup <ipyvuetify.ListItemGroup>`.

Examples
--------

Dense
^^^^^

:py:class:`List <ipyvuetify.List>` can be lowered with ``dense`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"text": "Real-Time", "icon": "mdi-clock"},
                {"text": "Audience", "icon": "mdi-account"},
                {"text": "Conversions", "icon": "mdi-flag"},
            ]

            v.Card(
                class_="my-2 mx-auto",
                width=400,
                tile=True,
                children=[
                    v.List(
                        dense=True,
                        children=[
                            v.Subheader(children=["REPORTS"]),
                            v.ListItemGroup(
                                v_model=1,
                                color="primary",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(children=[e["icon"]])
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[e["text"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for i, e in enumerate(items)
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
                {"text": "Real-Time", "icon": "mdi-clock"},
                {"text": "Audience", "icon": "mdi-account"},
                {"text": "Conversions", "icon": "mdi-flag"},
            ]

            v.Card(
                class_="my-2 mx-auto",
                width=400,
                tile=True,
                children=[
                    v.List(
                        dense=True,
                        children=[
                            v.Subheader(children=["REPORTS"]),
                            v.ListItemGroup(
                                v_model=1,
                                color="primary",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(children=[e["icon"]])
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[e["text"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for i, e in enumerate(items)
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="300"
                tile
            >
                <v-list dense>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
            </template>

Disabled
^^^^^^^^

You cannot interact with disabled :py:class:`List <ipyvuetify.List>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"text": "Real-Time", "icon": "mdi-clock"},
                {"text": "Audience", "icon": "mdi-account"},
                {"text": "Conversions", "icon": "mdi-flag"},
            ]

            v.Card(
                class_="my-2 mx-auto",
                width=400,
                tile=True,
                children=[
                    v.List(
                        disabled=True,
                        dense=True,
                        children=[
                            v.Subheader(children=["REPORTS"]),
                            v.ListItemGroup(
                                v_model=1,
                                color="primary",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(children=[e["icon"]])
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[e["text"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for i, e in enumerate(items)
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
                {"text": "Real-Time", "icon": "mdi-clock"},
                {"text": "Audience", "icon": "mdi-account"},
                {"text": "Conversions", "icon": "mdi-flag"},
            ]

            v.Card(
                class_="my-2 mx-auto",
                width=400,
                tile=True,
                children=[
                    v.List(
                        disabled=True,
                        dense=True,
                        children=[
                            v.Subheader(children=["REPORTS"]),
                            v.ListItemGroup(
                                v_model=1,
                                color="primary",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(children=[e["icon"]])
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[e["text"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for i, e in enumerate(items)
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="300"
                tile
            >
                <v-list disabled>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
            </template>

Flat
^^^^

Items don't change when selected in :py:class:`List <ipyvuetify.List>` with
``flat`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"text": "Real-Time", "icon": "mdi-clock"},
                {"text": "Audience", "icon": "mdi-account"},
                {"text": "Conversions", "icon": "mdi-flag"},
            ]

            v.Card(
                class_="my-2 mx-auto",
                width=400,
                tile=True,
                children=[
                    v.List(
                        flat=True,
                        dense=True,
                        children=[
                            v.Subheader(children=["REPORTS"]),
                            v.ListItemGroup(
                                v_model=1,
                                color="primary",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(children=[e["icon"]])
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[e["text"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for i, e in enumerate(items)
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
                {"text": "Real-Time", "icon": "mdi-clock"},
                {"text": "Audience", "icon": "mdi-account"},
                {"text": "Conversions", "icon": "mdi-flag"},
            ]

            v.Card(
                class_="my-2 mx-auto",
                width=400,
                tile=True,
                children=[
                    v.List(
                        flat=True,
                        dense=True,
                        children=[
                            v.Subheader(children=["REPORTS"]),
                            v.ListItemGroup(
                                v_model=1,
                                color="primary",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(children=[e["icon"]])
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[e["text"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for i, e in enumerate(items)
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="300"
                tile
            >
                <v-list flat>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
            </template>

Nav
^^^

Lists can receive an alternative ``nav`` styling that reduces the width
:py:class:`ListItem <ipyvuetify.ListItem>` takes up as well as adding a border
radius.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"text": "My Files", "icon": "mdi-folder"},
                {"text": "Shared with me", "icon": "mdi-account-multiple"},
                {"text": "Starred", "icon": "mdi-star"},
                {"text": "Recent", "icon": "mdi-history"},
                {"text": "Offline", "icon": "mdi-check-circle"},
                {"text": "Uploads", "icon": "mdi-upload"},
                {"text": "Backups", "icon": "mdi-cloud-upload"},
            ]

            v.Card(
                class_="mx-auto my-2",
                max_width=256,
                tile=True,
                children=[
                    v.NavigationDrawer(
                        permanent=True,
                        children=[
                            v.SystemBar(),
                            v.List(
                                nav=True,
                                dense=True,
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAvatar(
                                                children=[
                                                    v.Img(
                                                        src="https://cdn.vuetifyjs.com/images/john.png"
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        class_="text-h6",
                                                        children=["John Leider"]
                                                    ),
                                                    v.ListItemSubtitle(
                                                        children=["john@vuetifyjs.com"]
                                                    )
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[
                                                    v.Icon(children=["mdi-menu-down"])
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.Divider(),
                            v.List(
                                nav=True,
                                dense=True,
                                children=[
                                    v.ListItemGroup(
                                        v_model=2,
                                        color="success",
                                        children=[
                                            v.ListItem(
                                                key=i,
                                                children=[
                                                    v.ListItemIcon(
                                                        children=[
                                                            v.Icon(children=[e["icon"]])
                                                        ]
                                                    ),
                                                    v.ListItemContent(
                                                        children=[
                                                            v.ListItemTitle(
                                                                children=[e["text"]]
                                                            )
                                                        ]
                                                    )
                                                ]
                                            ) for i, e in enumerate(items)
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
                {"text": "My Files", "icon": "mdi-folder"},
                {"text": "Shared with me", "icon": "mdi-account-multiple"},
                {"text": "Starred", "icon": "mdi-star"},
                {"text": "Recent", "icon": "mdi-history"},
                {"text": "Offline", "icon": "mdi-check-circle"},
                {"text": "Uploads", "icon": "mdi-upload"},
                {"text": "Backups", "icon": "mdi-cloud-upload"},
            ]

            v.Card(
                class_="mx-auto my-2",
                max_width=256,
                tile=True,
                children=[
                    v.NavigationDrawer(
                        permanent=True,
                        children=[
                            v.SystemBar(),
                            v.List(
                                nav=True,
                                dense=True,
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAvatar(
                                                children=[
                                                    v.Img(
                                                        src="https://cdn.vuetifyjs.com/images/john.png"
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.ListItem(
                                        link=True,
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        class_="text-h6",
                                                        children=["John Leider"]
                                                    ),
                                                    v.ListItemSubtitle(
                                                        children=["john@vuetifyjs.com"]
                                                    )
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[
                                                    v.Icon(children=["mdi-menu-down"])
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.Divider(),
                            v.List(
                                nav=True,
                                dense=True,
                                children=[
                                    v.ListItemGroup(
                                        v_model=2,
                                        color="success",
                                        children=[
                                            v.ListItem(
                                                key=i,
                                                children=[
                                                    v.ListItemIcon(
                                                        children=[
                                                            v.Icon(children=[e["icon"]])
                                                        ]
                                                    ),
                                                    v.ListItemContent(
                                                        children=[
                                                            v.ListItemTitle(
                                                                children=[e["text"]]
                                                            )
                                                        ]
                                                    )
                                                ]
                                            ) for i, e in enumerate(items)
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
            <v-card
                class="mx-auto"
                width="256"
                tile
            >
                <v-navigation-drawer permanent>
                <v-system-bar></v-system-bar>
                <v-list>
                    <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                        John Leider
                        </v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                    >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
                </v-navigation-drawer>
            </v-card>
            </template>

Rounded
^^^^^^^

You can make :py:class:`List <ipyvuetify.List>` items rounded.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"text": "Real-Time", "icon": "mdi-clock"},
                {"text": "Audience", "icon": "mdi-account"},
                {"text": "Conversions", "icon": "mdi-flag"},
            ]

            v.Card(
                class_="my-2 mx-auto",
                width=400,
                tile=True,
                children=[
                    v.List(
                        rounded=True,
                        dense=True,
                        children=[
                            v.Subheader(children=["REPORTS"]),
                            v.ListItemGroup(
                                v_model=1,
                                color="primary",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(children=[e["icon"]])
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[e["text"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for i, e in enumerate(items)
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
                {"text": "Real-Time", "icon": "mdi-clock"},
                {"text": "Audience", "icon": "mdi-account"},
                {"text": "Conversions", "icon": "mdi-flag"},
            ]

            v.Card(
                class_="my-2 mx-auto",
                width=400,
                tile=True,
                children=[
                    v.List(
                        rounded=True,
                        dense=True,
                        children=[
                            v.Subheader(children=["REPORTS"]),
                            v.ListItemGroup(
                                v_model=1,
                                color="primary",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(children=[e["icon"]])
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[e["text"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for i, e in enumerate(items)
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="300"
                tile
            >
                <v-list rounded>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
            </template>

Shaped
^^^^^^

Shaped lists have rounded borders on one side of the
:py:class:`ListItem <ipyvuetify.ListItem>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"text": "Real-Time", "icon": "mdi-clock"},
                {"text": "Audience", "icon": "mdi-account"},
                {"text": "Conversions", "icon": "mdi-flag"},
            ]

            v.Card(
                class_="my-2 mx-auto",
                width=400,
                tile=True,
                children=[
                    v.List(
                        shaped=True,
                        dense=True,
                        children=[
                            v.Subheader(children=["REPORTS"]),
                            v.ListItemGroup(
                                v_model=1,
                                color="primary",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(children=[e["icon"]])
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[e["text"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for i, e in enumerate(items)
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
            <v-card
                class="mx-auto"
                max-width="300"
                tile
            >
                <v-list shaped>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                >
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
            </template>

Sub group
^^^^^^^^^

Using the :py:class:`ListGroup <ipyvuetify.ListGroup>` component you can create
up to 2 levels in depth using the ``sub-group`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            admins = [
                {"text": "Management", "icon": "mdi-account-multiple-outline"},
                {"text": "Settings", "icon": "mdi-cogs"},
            ]

            cruds = [
                {"text": "Create", "icon": "mdi-plus-outline"},
                {"text": "Read", "icon": "mdi-file-outline"},
                {"text": "Update", "icon": "mdi-update"},
                {"text": "Delete", "icon": "mdi-delete"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=300,
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemIcon(children=[v.Icon(children=["mdi-home"])]),
                                    v.ListItemTitle(children=["Home"])
                                ]
                            ),
                            v.ListGroup(
                                value=True,
                                prepend_icon="mdi-account-circle",
                                v_slots = [{
                                    "name": "activator",
                                    "children": [v.ListItemTitle(children=["Users"])]
                                }],
                                children = [
                                    v.ListGroup(
                                        value=True,
                                        no_action=True,
                                        sub_group=True,
                                        v_slots = [{
                                            "name": "activator",
                                            "children": [
                                                v.ListItemContent(
                                                    children=[
                                                        v.ListItemTitle(children=["Admin"])
                                                    ]
                                                )
                                            ]
                                        }],
                                        children = [
                                            v.ListItem(
                                                link=True,
                                                children=[
                                                    v.ListItemTitle(children=[e["text"]]),
                                                    v.ListItemIcon(
                                                        children=[v.Icon(children=[e["icon"]])]
                                                    )
                                                ]
                                            ) for e in admins
                                        ]
                                    ),
                                    v.ListGroup(
                                        no_action=True,
                                        sub_group=True,
                                        v_slots = [{
                                            "name": "activator",
                                            "children": [
                                                v.ListItemContent(
                                                    children=[
                                                        v.ListItemTitle(children=["Actions"])
                                                    ]
                                                )
                                            ]
                                        }],
                                        children = [
                                            v.ListItem(
                                                link=True,
                                                children=[
                                                    v.ListItemTitle(children=[e["text"]]),
                                                    v.ListItemIcon(
                                                        children=[v.Icon(children=[e["icon"]])]
                                                    )
                                                ]
                                            ) for e in cruds
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

            admins = [
                {"text": "Management", "icon": "mdi-account-multiple-outline"},
                {"text": "Settings", "icon": "mdi-cogs"},
            ]

            cruds = [
                {"text": "Create", "icon": "mdi-plus-outline"},
                {"text": "Read", "icon": "mdi-file-outline"},
                {"text": "Update", "icon": "mdi-update"},
                {"text": "Delete", "icon": "mdi-delete"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=300,
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemIcon(children=[v.Icon(children=["mdi-home"])]),
                                    v.ListItemTitle(children=["Home"])
                                ]
                            ),
                            v.ListGroup(
                                value=True,
                                prepend_icon="mdi-account-circle",
                                v_slots = [{
                                    "name": "activator",
                                    "children": [v.ListItemTitle(children=["Users"])]
                                }],
                                children = [
                                    v.ListGroup(
                                        value=True,
                                        no_action=True,
                                        sub_group=True,
                                        v_slots = [{
                                            "name": "activator",
                                            "children": [
                                                v.ListItemContent(
                                                    children=[
                                                        v.ListItemTitle(children=["Admin"])
                                                    ]
                                                )
                                            ]
                                        }],
                                        children = [
                                            v.ListItem(
                                                link=True,
                                                children=[
                                                    v.ListItemTitle(children=[e["text"]]),
                                                    v.ListItemIcon(
                                                        children=[v.Icon(children=[e["icon"]])]
                                                    )
                                                ]
                                            ) for e in admins
                                        ]
                                    ),
                                    v.ListGroup(
                                        no_action=True,
                                        sub_group=True,
                                        v_slots = [{
                                            "name": "activator",
                                            "children": [
                                                v.ListItemContent(
                                                    children=[
                                                        v.ListItemTitle(children=["Actions"])
                                                    ]
                                                )
                                            ]
                                        }],
                                        children = [
                                            v.ListItem(
                                                link=True,
                                                children=[
                                                    v.ListItemTitle(children=[e["text"]]),
                                                    v.ListItemIcon(
                                                        children=[v.Icon(children=[e["icon"]])]
                                                    )
                                                ]
                                            ) for e in cruds
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
            <v-card
                class="mx-auto"
                width="300"
            >
                <v-list>
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-group
                    :value="true"
                    prepend-icon="mdi-account-circle"
                >
                    <template v-slot:activator>
                    <v-list-item-title>Users</v-list-item-title>
                    </template>

                    <v-list-group
                    :value="true"
                    no-action
                    sub-group
                    >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title>Admin</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in admins"
                        :key="i"
                        link
                    >
                        <v-list-item-title v-text="title"></v-list-item-title>

                        <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    </v-list-group>

                    <v-list-group
                    no-action
                    sub-group
                    >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title>Actions</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in cruds"
                        :key="i"
                        link
                    >
                        <v-list-item-title v-text="title"></v-list-item-title>

                        <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    </v-list-group>
                </v-list-group>
                </v-list>
            </v-card>
            </template>

Three line
^^^^^^^^^^

For three line lists, the subtitle will clamp vertically at 2 lines and then
ellipsis. This feature uses `line-clamp
<https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp>`__ and is
not supported in all browsers.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items =  [
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    "title": "Brunch this weekend?",
                    "subtitle": "Ali Connors - I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                },
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                    "title": "Summer BBQ 4",
                    "subtitle": "to Alex, Scott, Jennifer - Wish I could come, but I'm out of town this weekend.",
                },
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                    "title": "Oui oui",
                    "subtitle": "Sandra Adams - Do you have Paris recommendations? Have you ever been?",
                },
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                    "title": "Birthday gift",
                    "subtitle": "Trevor Hansen - Have any ideas about what we should get Heidi for her birthday?",
                },
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                    "title": "Recipe to try",
                    "subtitle": "Britta Holt - We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
                },
            ]

            v.Card(
                class_="mx-auto my-2",
                max_width=450,
                children=[
                    v.Toolbar(
                        color="cyan",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Inbox"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])]
                            )
                        ]
                    ),
                    v.Html(tag="h3", children=["Today"], class_="ml-3"),
                    v.List(
                        three_line=True,
                        children=[
                            v.ListItem(
                                key=i,
                                children=[
                                    v.ListItemAvatar(
                                        children=[
                                            v.Img(src=e["avatar"])
                                        ]
                                    ),
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(
                                                children=[v.Html(tag="span", children=[e["title"]])]
                                            ),
                                            v.ListItemSubtitle(
                                                children=[v.Html(tag="span", children=[e["subtitle"]])]
                                            ),
                                            v.Divider()
                                        ]
                                    )
                                ]
                            ) for i,  e in enumerate(items)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items =  [
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    "title": "Brunch this weekend?",
                    "subtitle": "Ali Connors - I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                },
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                    "title": "Summer BBQ 4",
                    "subtitle": "to Alex, Scott, Jennifer - Wish I could come, but I'm out of town this weekend.",
                },
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                    "title": "Oui oui",
                    "subtitle": "Sandra Adams - Do you have Paris recommendations? Have you ever been?",
                },
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                    "title": "Birthday gift",
                    "subtitle": "Trevor Hansen - Have any ideas about what we should get Heidi for her birthday?",
                },
                {
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                    "title": "Recipe to try",
                    "subtitle": "Britta Holt - We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
                },
            ]

            v.Card(
                class_="mx-auto my-2",
                max_width=450,
                children=[
                    v.Toolbar(
                        color="cyan",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Inbox"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])]
                            )
                        ]
                    ),
                    v.Html(tag="h3", children=["Today"], class_="ml-3"),
                    v.List(
                        three_line=True,
                        children=[
                            v.ListItem(
                                key=i,
                                children=[
                                    v.ListItemAvatar(
                                        children=[
                                            v.Img(src=e["avatar"])
                                        ]
                                    ),
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(
                                                children=[v.Html(tag="span", children=[e["title"]])]
                                            ),
                                            v.ListItemSubtitle(
                                                children=[v.Html(tag="span", children=[e["subtitle"]])]
                                            ),
                                            v.Divider()
                                        ]
                                    )
                                ]
                            ) for i,  e in enumerate(items)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                max-width="450"
                class="mx-auto"
            >
                <v-toolbar
                color="cyan"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Inbox</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list three-line>
                <template v-for="(item, index) in items">
                    <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"
                    ></v-subheader>

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
                        <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </template>
                </v-list>
            </v-card>
            </template>

Two lines and subheader
^^^^^^^^^^^^^^^^^^^^^^^

Lists can contain subheaders, dividers, and can contain 1 or more lines. The
subtitle will overflow with ellipsis if it extends past one line.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            files = [
                {
                    "color": 'blue',
                    "icon": 'mdi-clipboard-text',
                    "subtitle": 'Jan 20, 2014',
                    "title": 'Vacation itinerary',
                },
                {
                    "color": 'amber',
                    "icon": 'mdi-gesture-tap-button',
                    "subtitle": 'Jan 10, 2014',
                    "title": 'Kitchen remodel',
                },
            ]

            folders = [
                {
                    "subtitle": 'Jan 9, 2014',
                    "title": 'Photos',
                },
                {
                    "subtitle": 'Jan 17, 2014',
                    "title": 'Recipes',
                },
                {
                    "subtitle": 'Jan 28, 2014',
                    "title": 'Work',
                }
            ]

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.Toolbar(
                        color="light-blue",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["My files"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])]
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-view-module"])]
                            )
                        ]
                    ),
                    v.List(
                        subheader=True,
                        two_line=True,
                        children=[
                            v.Subheader(inset=True, children=["Folders"]),
                            *[
                                v.ListItem(
                                    key=i,
                                    children=[
                                        v.ListItemAvatar(
                                            children=[
                                                v.Icon(
                                                    class_="grey lighten-1",
                                                    dark=True,
                                                    children=["mdi-folder"]
                                                )
                                            ]
                                        ),
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[e["title"]]),
                                                v.ListItemSubtitle(children=[e["subtitle"]])
                                            ]
                                        ),
                                        v.ListItemAction(
                                            children=[
                                                v.Btn(
                                                    icon=True,
                                                    children=[
                                                        v.Icon(color="grey lighten-1", children=["mdi-information"])
                                                    ]
                                                )
                                            ]
                                        )
                                    ]
                                ) for i, e in enumerate(folders)
                            ],
                            v.Divider(inset=True),
                            v.Subheader(inset=True, children=["Files"]),
                            *[
                                v.ListItem(
                                    key=i,
                                    children=[
                                        v.ListItemAvatar(
                                            children=[
                                                v.Icon(
                                                    class_=e["color"],
                                                    dark=True,
                                                    children=[e["icon"]]
                                                )
                                            ]
                                        ),
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[e["title"]]),
                                                v.ListItemSubtitle(children=[e["subtitle"]])
                                            ]
                                        ),
                                        v.ListItemAction(
                                            children=[
                                                v.Btn(
                                                    icon=True,
                                                    children=[
                                                        v.Icon(color="grey lighten-1", children=["mdi-information"])
                                                    ]
                                                )
                                            ]
                                        )
                                    ]
                                ) for i, e in enumerate(files)
                            ]
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            files = [
                {
                    "color": 'blue',
                    "icon": 'mdi-clipboard-text',
                    "subtitle": 'Jan 20, 2014',
                    "title": 'Vacation itinerary',
                },
                {
                    "color": 'amber',
                    "icon": 'mdi-gesture-tap-button',
                    "subtitle": 'Jan 10, 2014',
                    "title": 'Kitchen remodel',
                },
            ]

            folders = [
                {
                    "subtitle": 'Jan 9, 2014',
                    "title": 'Photos',
                },
                {
                    "subtitle": 'Jan 17, 2014',
                    "title": 'Recipes',
                },
                {
                    "subtitle": 'Jan 28, 2014',
                    "title": 'Work',
                }
            ]

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.Toolbar(
                        color="light-blue",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["My files"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])]
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-view-module"])]
                            )
                        ]
                    ),
                    v.List(
                        subheader=True,
                        two_line=True,
                        children=[
                            v.Subheader(inset=True, children=["Folders"]),
                            *[
                                v.ListItem(
                                    key=i,
                                    children=[
                                        v.ListItemAvatar(
                                            children=[
                                                v.Icon(
                                                    class_="grey lighten-1",
                                                    dark=True,
                                                    children=["mdi-folder"]
                                                )
                                            ]
                                        ),
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[e["title"]]),
                                                v.ListItemSubtitle(children=[e["subtitle"]])
                                            ]
                                        ),
                                        v.ListItemAction(
                                            children=[
                                                v.Btn(
                                                    icon=True,
                                                    children=[
                                                        v.Icon(color="grey lighten-1", children=["mdi-information"])
                                                    ]
                                                )
                                            ]
                                        )
                                    ]
                                ) for i, e in enumerate(folders)
                            ],
                            v.Divider(inset=True),
                            v.Subheader(inset=True, children=["Files"]),
                            *[
                                v.ListItem(
                                    key=i,
                                    children=[
                                        v.ListItemAvatar(
                                            children=[
                                                v.Icon(
                                                    class_=e["color"],
                                                    dark=True,
                                                    children=[e["icon"]]
                                                )
                                            ]
                                        ),
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[e["title"]]),
                                                v.ListItemSubtitle(children=[e["subtitle"]])
                                            ]
                                        ),
                                        v.ListItemAction(
                                            children=[
                                                v.Btn(
                                                    icon=True,
                                                    children=[
                                                        v.Icon(color="grey lighten-1", children=["mdi-information"])
                                                    ]
                                                )
                                            ]
                                        )
                                    ]
                                ) for i, e in enumerate(files)
                            ]
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                max-width="600"
                class="mx-auto"
            >
                <v-toolbar
                color="light-blue"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>My files</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-view-module</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list
                subheader
                two-line
                >
                <v-subheader inset>Folders</v-subheader>

                <v-list-item
                    v-for="folder in folders"
                    :key="folder.title"
                >
                    <v-list-item-avatar>
                    <v-icon
                        class="grey lighten-1"
                        dark
                    >
                        mdi-folder
                    </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title v-text="folder.title"></v-list-item-title>

                    <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                    </v-list-item-action>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-subheader inset>Files</v-subheader>

                <v-list-item
                    v-for="file in files"
                    :key="file.title"
                >
                    <v-list-item-avatar>
                    <v-icon
                        :class="file.color"
                        dark
                        v-text="file.icon"
                    ></v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title v-text="file.title"></v-list-item-title>

                    <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                    </v-list-item-action>
                </v-list-item>
                </v-list>
            </v-card>
            </template>

Expansion Lists
^^^^^^^^^^^^^^^

A list can contain a group of items which will display on click utilizing
:py:class:`ListGroup <ipyvuetify.ListGroup>`'s ``activator`` slot. Expansion
lists are also used within the :py:class:`NavigationDrawer
<ipyvuetify.NavigationDrawer>` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {
                    "action": 'mdi-ticket',
                    "items": [{"title": 'List Item'}],
                    "title": 'Attractions',
                },
                {
                    "action": 'mdi-silverware-fork-knife',
                    "active": True,
                    "items": [
                        {"title": 'Breakfast & brunch'},
                        {"title": 'New American'},
                        {"title": 'Sushi'},
                    ],
                    "title": 'Dining',
                },
                {
                    "action": 'mdi-school',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Education',
                },
                {
                    "action": 'mdi-home',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Family',
                },
                {
                    "action": 'mdi-bottle-tonic-plus',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Health',
                },
                {
                    "action": 'mdi-briefcase',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Office',
                },
                {
                    "action": 'mdi-tag',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Promotions',
                },
            ]

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.Toolbar(
                        color="teal",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Topics"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-dots-vertical"])]
                            )
                        ]
                    ),
                    v.List(
                        children=[
                            v.ListGroup(
                                key=item["title"],
                                bind="item",
                                no_action=True,
                                prepend_icon=item["action"],
                                v_slots = [{
                                    "name": "activator",
                                    "children": [
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[item["title"]])
                                            ]
                                        )
                                    ]
                                }],
                                children=[
                                    v.ListItem(
                                        key=child["title"],
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[child["title"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for child in item["items"]
                                ]
                            ) for item in items
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {
                    "action": 'mdi-ticket',
                    "items": [{"title": 'List Item'}],
                    "title": 'Attractions',
                },
                {
                    "action": 'mdi-silverware-fork-knife',
                    "active": True,
                    "items": [
                        {"title": 'Breakfast & brunch'},
                        {"title": 'New American'},
                        {"title": 'Sushi'},
                    ],
                    "title": 'Dining',
                },
                {
                    "action": 'mdi-school',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Education',
                },
                {
                    "action": 'mdi-home',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Family',
                },
                {
                    "action": 'mdi-bottle-tonic-plus',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Health',
                },
                {
                    "action": 'mdi-briefcase',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Office',
                },
                {
                    "action": 'mdi-tag',
                    "active": False,
                    "items": [{"title": 'List Item'}],
                    "title": 'Promotions',
                },
            ]

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.Toolbar(
                        color="teal",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Topics"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-dots-vertical"])]
                            )
                        ]
                    ),
                    v.List(
                        children=[
                            v.ListGroup(
                                key=item["title"],
                                bind="item",
                                no_action=True,
                                prepend_icon=item["action"],
                                v_slots = [{
                                    "name": "activator",
                                    "children": [
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[item["title"]])
                                            ]
                                        )
                                    ]
                                }],
                                children=[
                                    v.ListItem(
                                        key=child["title"],
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[child["title"]]
                                                    )
                                                ]
                                            )
                                        ]
                                    ) for child in item["items"]
                                ]
                            ) for item in items
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-toolbar
                color="teal"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Topics</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list>
                <v-list-group
                    v-for="item in items"
                    :key="item.title"
                    v-model="item.active"
                    :prepend-icon="item.action"
                    no-action
                >
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    </template>

                    <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    >
                    <v-list-item-content>
                        <v-list-item-title v-text="child.title"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                </v-list>
            </v-card>
            </template>

Action and item groups
^^^^^^^^^^^^^^^^^^^^^^

A three-line list with actions. Utilizing :py:class:`ListItemGroup
<ipyvuetify.ListItemGroup>`, easily connect actions to your tiles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.Toolbar(
                        color="purple",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Settings"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            )
                        ]
                    ),
                    v.List(
                        subheader=True,
                        three_line=True,
                        children=[
                            v.Subheader(children=["User Controls"]),
                            v.ListItem(
                                children=[
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(children=["Content filtering"]),
                                            v.ListItemSubtitle(
                                                children=[
                                                    "Set the content filtering level to restrict appts that can be downloaded"
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.ListItem(
                                children=[
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(children=["Password"]),
                                            v.ListItemSubtitle(
                                                children=[
                                                    "Require password for purchase or use password to restrict purchase"
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.Divider(),
                            v.Subheader(children=["General"]),
                            v.ListItemGroup(
                                multiple=True,
                                active_class="",
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[
                                                    v.Checkbox()
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=["Notifications"]),
                                                    v.ListItemSubtitle(
                                                        children=[
                                                            "Notify me about updates to apps or games that I downloaded"
                                                        ]
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[
                                                    v.Checkbox()
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=["Sound"]),
                                                    v.ListItemSubtitle(
                                                        children=[
                                                            "Auto-update apps at any time. Data charges may apply"
                                                        ]
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[
                                                    v.Checkbox()
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=["Auto-add widgets"]),
                                                    v.ListItemSubtitle(
                                                        children=[
                                                            "Automatically add home screen widgets when downloads complete"
                                                        ]
                                                    )
                                                ]
                                            )
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

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.Toolbar(
                        color="purple",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Settings"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            )
                        ]
                    ),
                    v.List(
                        subheader=True,
                        three_line=True,
                        children=[
                            v.Subheader(children=["User Controls"]),
                            v.ListItem(
                                children=[
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(children=["Content filtering"]),
                                            v.ListItemSubtitle(
                                                children=[
                                                    "Set the content filtering level to restrict appts that can be downloaded"
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.ListItem(
                                children=[
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(children=["Password"]),
                                            v.ListItemSubtitle(
                                                children=[
                                                    "Require password for purchase or use password to restrict purchase"
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.Divider(),
                            v.Subheader(children=["General"]),
                            v.ListItemGroup(
                                multiple=True,
                                active_class="",
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[
                                                    v.Checkbox()
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=["Notifications"]),
                                                    v.ListItemSubtitle(
                                                        children=[
                                                            "Notify me about updates to apps or games that I downloaded"
                                                        ]
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[
                                                    v.Checkbox()
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=["Sound"]),
                                                    v.ListItemSubtitle(
                                                        children=[
                                                            "Auto-update apps at any time. Data charges may apply"
                                                        ]
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[
                                                    v.Checkbox()
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=["Auto-add widgets"]),
                                                    v.ListItemSubtitle(
                                                        children=[
                                                            "Automatically add home screen widgets when downloads complete"
                                                        ]
                                                    )
                                                ]
                                            )
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
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-toolbar
                color="purple"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Settings</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list
                subheader
                three-line
                >
                <v-subheader>User Controls</v-subheader>

                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title>Content filtering</v-list-item-title>
                    <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title>Password</v-list-item-title>
                    <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list
                flat
                subheader
                three-line
                >
                <v-subheader>General</v-subheader>

                <v-list-item-group
                    v-model="settings"
                    multiple
                    active-class=""
                >
                    <v-list-item>
                    <template v-slot:default="{ active }">
                        <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                    </v-list-item>

                    <v-list-item>
                    <template v-slot:default="{ active }">
                        <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                        <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                    </v-list-item>

                    <v-list-item>
                    <template v-slot:default="{ active }">
                        <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>Auto-add widgets</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
            </template>

Action stack
^^^^^^^^^^^^

A list can contain a stack within an action. This is useful when you need to
display meta text next to your action item.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {
                    "action": '15 min',
                    "headline": 'Brunch this weekend?',
                    "subtitle": "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                    "title": 'Ali Connors',
                },
                {
                    "action": '2 hr',
                    "headline": 'Summer BBQ',
                    "subtitle": "Wish I could come, but I'm out of town this weekend.",
                    "title": 'me, Scrott, Jennifer',
                },
                {
                    "action": '6 hr',
                    "headline": 'Oui oui',
                    "subtitle": 'Do you have Paris recommendations? Have you ever been?',
                    "title": 'Sandra Adams',
                },
                {
                    "action": '12 hr',
                    "headline": 'Birthday gift',
                    "subtitle": 'Have any ideas about what we should get Heidi for her birthday?',
                    "title": 'Trevor Hansen',
                },
                {
                    "action": '18hr',
                    "headline": 'Recipe to try',
                    "subtitle": "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
                    "title": 'Britta Holt',
                },
            ]

            v.Card(
                class_="mx-auto my-2",
                width=500,
                children=[
                    v.Toolbar(
                        color="pink",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Inbox"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-checkbox-marked-circle"])],
                            ),
                        ]
                    ),
                    v.List(
                        two_line=True,
                        children=[
                            v.ListItemGroup(
                                multiple=True,
                                active_class="pink--text",
                                children=[
                                    v.ListItem(
                                        key=item["title"],
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=[item["title"]]),
                                                    v.ListItemSubtitle(
                                                        class_="text--primary",
                                                        children=[item["headline"]],
                                                    ),
                                                    v.ListItemSubtitle(
                                                        children=[item["subtitle"]]
                                                    ),
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[
                                                    v.ListItemActionText(
                                                        children=[item["action"]]
                                                    ),
                                                    v.Icon(
                                                        color="grey lighten-1",
                                                        children=["mdi-star-outline"],
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ) for item in items
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
                {
                    "action": '15 min',
                    "headline": 'Brunch this weekend?',
                    "subtitle": "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                    "title": 'Ali Connors',
                },
                {
                    "action": '2 hr',
                    "headline": 'Summer BBQ',
                    "subtitle": "Wish I could come, but I'm out of town this weekend.",
                    "title": 'me, Scrott, Jennifer',
                },
                {
                    "action": '6 hr',
                    "headline": 'Oui oui',
                    "subtitle": 'Do you have Paris recommendations? Have you ever been?',
                    "title": 'Sandra Adams',
                },
                {
                    "action": '12 hr',
                    "headline": 'Birthday gift',
                    "subtitle": 'Have any ideas about what we should get Heidi for her birthday?',
                    "title": 'Trevor Hansen',
                },
                {
                    "action": '18hr',
                    "headline": 'Recipe to try',
                    "subtitle": "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
                    "title": 'Britta Holt',
                },
            ]

            v.Card(
                class_="mx-auto my-2",
                width=500,
                children=[
                    v.Toolbar(
                        color="pink",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Inbox"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-checkbox-marked-circle"])],
                            ),
                        ]
                    ),
                    v.List(
                        two_line=True,
                        children=[
                            v.ListItemGroup(
                                multiple=True,
                                active_class="pink--text",
                                children=[
                                    v.ListItem(
                                        key=item["title"],
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=[item["title"]]),
                                                    v.ListItemSubtitle(
                                                        class_="text--primary",
                                                        children=[item["headline"]],
                                                    ),
                                                    v.ListItemSubtitle(
                                                        children=[item["subtitle"]]
                                                    ),
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[
                                                    v.ListItemActionText(
                                                        children=[item["action"]]
                                                    ),
                                                    v.Icon(
                                                        color="grey lighten-1",
                                                        children=["mdi-star-outline"],
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ) for item in items
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-toolbar
                color="pink"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Inbox</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list two-line>
                <v-list-item-group
                    v-model="selected"
                    active-class="pink--text"
                    multiple
                >
                    <template v-for="(item, index) in items">
                    <v-list-item :key="item.title">
                        <template v-slot:default="{ active }">
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>

                            <v-list-item-subtitle
                            class="text--primary"
                            v-text="item.headline"
                            ></v-list-item-subtitle>

                            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                            <v-icon
                            v-if="!active"
                            color="grey lighten-1"
                            >
                            mdi-star-outline
                            </v-icon>

                            <v-icon
                            v-else
                            color="yellow darken-3"
                            >
                            mdi-star
                            </v-icon>
                        </v-list-item-action>
                        </template>
                    </v-list-item>

                    <v-divider
                        v-if="index < items.length - 1"
                        :key="index"
                    ></v-divider>
                    </template>
                </v-list-item-group>
                </v-list>
            </v-card>
            </template>

Card list
^^^^^^^^^

A list can be combined with a card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                width=500,
                class_="mx-auto my-2",
                children=[
                    v.Img(
                        src="https://cdn.vuetifyjs.com/images/lists/ali.png",
                        height="300px",
                        dark=True,
                        children=[
                            v.Row(class_="fill-height", children=[
                                v.CardTitle(children=[
                                    v.Btn(
                                        dark=True,
                                        icon=True,
                                        children=[v.Icon(children=["mdi-chevron-left"])],
                                    ),
                                    v.Spacer(),
                                    v.Btn(
                                        dark=True,
                                        icon=True,
                                        class_="mr-4",
                                        children=[v.Icon(children=["mdi-pencil"])],
                                    ),
                                    v.Btn(
                                        dark=True,
                                        icon=True, children=[v.Icon(children=["mdi-dots-vertical"])],
                                    ),
                                ]),
                                v.Spacer(),
                                v.CardTitle(class_="white--text pl-12 pt-12", children=[
                                    v.Html(tag="div", class_="text-h4 pl-12 pt-12", children=["Ali Conners"]),
                                ]),
                            ])
                        ]
                    ),
                    v.List(two_line=True, children=[
                        v.ListItem(children=[
                            v.ListItemIcon(children=[
                                v.Icon(color="indigo", children=["mdi-phone"]),
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["(650) 555-1234"]),
                                v.ListItemSubtitle(children=["Mobile"]),
                            ]),
                            v.ListItemIcon(children=[
                                v.Icon(children=["mdi-message-text"]),
                            ]),
                        ]),
                        v.ListItem(children=[
                            v.ListItemAction(),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["(323) 555-6789"]),
                                v.ListItemSubtitle(children=["Work"]),
                            ]),
                            v.ListItemIcon(children=[
                                v.Icon(children=["mdi-message-text"]),
                            ]),
                        ]),
                        v.Divider(inset=True),
                        v.ListItem(children=[
                            v.ListItemIcon(children=[
                                v.Icon(color="indigo", children=["mdi-email"]),
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["ali.conners@example.com"]),
                                v.ListItemSubtitle(children=["Personnal"]),
                            ]),
                            v.ListItemIcon(children=[
                                v.Icon(children=["mdi-email-outline"]),
                            ]),
                        ]),
                        v.ListItem(children=[
                            v.ListItemAction(),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["ali.conners@example.com"]),
                                v.ListItemSubtitle(children=["Email"]),
                            ]),
                            v.ListItemIcon(children=[
                                v.Icon(children=["mdi-email-outline"]),
                            ]),
                        ]),
                        v.Divider(inset=True),
                        v.ListItem(children=[
                            v.ListItemIcon(children=[
                                v.Icon(color="indigo", children=["mdi-map-marker"]),
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["1400 Main Street"]),
                                v.ListItemSubtitle(children=["Orlando, FL 79938"]),
                            ]),
                        ]),
                    ]),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                width=500,
                class_="mx-auto my-2",
                children=[
                    v.Img(
                        src="https://cdn.vuetifyjs.com/images/lists/ali.png",
                        height="300px",
                        dark=True,
                        children=[
                            v.Row(class_="fill-height", children=[
                                v.CardTitle(children=[
                                    v.Btn(
                                        dark=True,
                                        icon=True,
                                        children=[v.Icon(children=["mdi-chevron-left"])],
                                    ),
                                    v.Spacer(),
                                    v.Btn(
                                        dark=True,
                                        icon=True,
                                        class_="mr-4",
                                        children=[v.Icon(children=["mdi-pencil"])],
                                    ),
                                    v.Btn(
                                        dark=True,
                                        icon=True, children=[v.Icon(children=["mdi-dots-vertical"])],
                                    ),
                                ]),
                                v.Spacer(),
                                v.CardTitle(class_="white--text pl-12 pt-12", children=[
                                    v.Html(tag="div", class_="text-h4 pl-12 pt-12", children=["Ali Conners"]),
                                ]),
                            ])
                        ]
                    ),
                    v.List(two_line=True, children=[
                        v.ListItem(children=[
                            v.ListItemIcon(children=[
                                v.Icon(color="indigo", children=["mdi-phone"]),
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["(650) 555-1234"]),
                                v.ListItemSubtitle(children=["Mobile"]),
                            ]),
                            v.ListItemIcon(children=[
                                v.Icon(children=["mdi-message-text"]),
                            ]),
                        ]),
                        v.ListItem(children=[
                            v.ListItemAction(),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["(323) 555-6789"]),
                                v.ListItemSubtitle(children=["Work"]),
                            ]),
                            v.ListItemIcon(children=[
                                v.Icon(children=["mdi-message-text"]),
                            ]),
                        ]),
                        v.Divider(inset=True),
                        v.ListItem(children=[
                            v.ListItemIcon(children=[
                                v.Icon(color="indigo", children=["mdi-email"]),
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["ali.conners@example.com"]),
                                v.ListItemSubtitle(children=["Personnal"]),
                            ]),
                            v.ListItemIcon(children=[
                                v.Icon(children=["mdi-email-outline"]),
                            ]),
                        ]),
                        v.ListItem(children=[
                            v.ListItemAction(),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["ali.conners@example.com"]),
                                v.ListItemSubtitle(children=["Email"]),
                            ]),
                            v.ListItemIcon(children=[
                                v.Icon(children=["mdi-email-outline"]),
                            ]),
                        ]),
                        v.Divider(inset=True),
                        v.ListItem(children=[
                            v.ListItemIcon(children=[
                                v.Icon(color="indigo", children=["mdi-map-marker"]),
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=["1400 Main Street"]),
                                v.ListItemSubtitle(children=["Orlando, FL 79938"]),
                            ]),
                        ]),
                    ]),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                max-width="375"
                class="mx-auto"
            >
                <v-img
                src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                height="300px"
                dark
                >
                <v-row class="fill-height">
                    <v-card-title>
                    <v-btn
                        dark
                        icon
                    >
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        dark
                        icon
                        class="mr-4"
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

                    <v-spacer></v-spacer>

                    <v-card-title class="white--text pl-12 pt-12">
                    <div class="text-h4 pl-12 pt-12">
                        Ali Conners
                    </div>
                    </v-card-title>
                </v-row>
                </v-img>

                <v-list two-line>
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="indigo">
                        mdi-phone
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>(650) 555-1234</v-list-item-title>
                    <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>(323) 555-6789</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="indigo">
                        mdi-email
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>aliconnors@example.com</v-list-item-title>
                    <v-list-item-subtitle>Personal</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>ali_connors@example.com</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="indigo">
                        mdi-map-marker
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>1400 Main Street</v-list-item-title>
                    <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card>
            </template>

Simple avatar list
^^^^^^^^^^^^^^^^^^

A simple list utilizing :py:class:`ListItemIcon <ipyvuetify.ListItemIcon>`,
:py:class:`ListItemTitle <ipyvuetify.ListItemTitle>` and
:py:class:`ListItemAvatar <ipyvuetify.ListItemAvatar>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"icon": True, "title": "Jason Oner", "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg" },
                {"icon": False, "title": "Travis Howard", "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg" },
                {"icon": False, "title": "Ali Connors", "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg" },
                {"icon": False, "title": "Cindy Baker", "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg" },
            ]

            v.Card(
                width=500,
                class_="mx-auto my-2",
                children=[
                    v.Toolbar(
                        color="indigo",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Inbox"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-dots-vertical"])],
                            ),
                        ]
                    ),
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemIcon(
                                        children=[
                                            v.Icon(color="pink", children=["mdi-star"]),
                                        ]
                                    ) if item["icon"] else v.ListItemIcon(),
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(children=[item["title"]]),
                                        ]
                                    ),
                                    v.ListItemAvatar(
                                        children=[
                                            v.Img(src=item["avatar"]),
                                        ]
                                    ),
                                ]
                            ) for item in items
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"icon": True, "title": "Jason Oner", "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg" },
                {"icon": False, "title": "Travis Howard", "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg" },
                {"icon": False, "title": "Ali Connors", "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg" },
                {"icon": False, "title": "Cindy Baker", "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg" },
            ]

            v.Card(
                width=500,
                class_="mx-auto my-2",
                children=[
                    v.Toolbar(
                        color="indigo",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Inbox"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-dots-vertical"])],
                            ),
                        ]
                    ),
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemIcon(
                                        children=[
                                            v.Icon(color="pink", children=["mdi-star"]),
                                        ]
                                    ) if item["icon"] else v.ListItemIcon(),
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(children=[item["title"]]),
                                        ]
                                    ),
                                    v.ListItemAvatar(
                                        children=[
                                            v.Img(src=item["avatar"]),
                                        ]
                                    ),
                                ]
                            ) for item in items
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                max-width="500"
                class="mx-auto"
            >
                <v-toolbar
                color="indigo"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Inbox</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
                <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                >
                    <v-list-item-icon>
                    <v-icon
                        v-if="item.icon"
                        color="pink"
                    >
                        mdi-star
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                </v-list-item>
                </v-list>
            </v-card>
            </template>

Single line list
^^^^^^^^^^^^^^^^

Here we combine :py:class:`ListItemAvatar <ipyvuetify.ListItemAvatar>` and
:py:class:`ListItemIcon <ipyvuetify.ListItemIcon>` in a single-line list.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            recent = [
                {
                    "active": True,
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    "title": "Jason Oner",
                },
                {
                    "active": True,
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                    "title": "Mike Carlson",
                },
                {
                    "active": False,
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                    "title": "Cindy Baker",
                },
                {
                    "active": False,
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                    "title": "Ali Connors",
                },
            ]

            previous = [{
                "title": "Travis Howard",
                "avatar": "https://cdn.vuetifyjs.com/images/lists/5.jpg",
            }]

            v.Card(
                class_="mx-auto my-2",
                width=500,
                children=[
                    v.Toolbar(
                        color="deep-purple accent-4",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["New Chat"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            ),
                        ]
                    ),
                    v.List(
                        subheader=True,
                        children=[
                            v.Subheader(children=["Recent chat"]),
                            *[
                                v.ListItem(
                                    children=[
                                        v.ListItemAvatar(
                                            children=[
                                                v.Img(
                                                    alt=f"{chat['title']} avatar",
                                                    src=chat["avatar"],
                                                ),
                                            ]
                                        ),
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[chat["title"]]),
                                            ]
                                        ),
                                        v.ListItemIcon(
                                            children=[
                                                v.Icon(
                                                    color="deep-purple accent-4" if chat["active"] else "grey",
                                                    children=["mdi-message-outline"],
                                                ),
                                            ]
                                        ),
                                    ]
                                ) for chat in recent
                            ],
                            v.Divider(),
                            v.Subheader(children=["Previous chats"]),
                            *[
                                v.ListItem(
                                    children=[
                                        v.ListItemAvatar(
                                            children=[
                                                v.Img(
                                                    alt=f"{chat['title']} avatar",
                                                    src=chat["avatar"],
                                                ),
                                            ]
                                        ),
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[chat["title"]]),
                                            ]
                                        ),
                                    ]
                                ) for chat in previous
                            ],
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            recent = [
                {
                    "active": True,
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    "title": "Jason Oner",
                },
                {
                    "active": True,
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                    "title": "Mike Carlson",
                },
                {
                    "active": False,
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                    "title": "Cindy Baker",
                },
                {
                    "active": False,
                    "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                    "title": "Ali Connors",
                },
            ]

            previous = [{
                "title": "Travis Howard",
                "avatar": "https://cdn.vuetifyjs.com/images/lists/5.jpg",
            }]

            v.Card(
                class_="mx-auto my-2",
                width=500,
                children=[
                    v.Toolbar(
                        color="deep-purple accent-4",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["New Chat"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])],
                            ),
                        ]
                    ),
                    v.List(
                        subheader=True,
                        children=[
                            v.Subheader(children=["Recent chat"]),
                            *[
                                v.ListItem(
                                    children=[
                                        v.ListItemAvatar(
                                            children=[
                                                v.Img(
                                                    alt=f"{chat['title']} avatar",
                                                    src=chat["avatar"],
                                                ),
                                            ]
                                        ),
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[chat["title"]]),
                                            ]
                                        ),
                                        v.ListItemIcon(
                                            children=[
                                                v.Icon(
                                                    color="deep-purple accent-4" if chat["active"] else "grey",
                                                    children=["mdi-message-outline"],
                                                ),
                                            ]
                                        ),
                                    ]
                                ) for chat in recent
                            ],
                            v.Divider(),
                            v.Subheader(children=["Previous chats"]),
                            *[
                                v.ListItem(
                                    children=[
                                        v.ListItemAvatar(
                                            children=[
                                                v.Img(
                                                    alt=f"{chat['title']} avatar",
                                                    src=chat["avatar"],
                                                ),
                                            ]
                                        ),
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[chat["title"]]),
                                            ]
                                        ),
                                    ]
                                ) for chat in previous
                            ],
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-toolbar
                color="deep-purple accent-4"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>New Chat</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list subheader>
                <v-subheader>Recent chat</v-subheader>

                <v-list-item
                    v-for="chat in recent"
                    :key="chat.title"
                >
                    <v-list-item-avatar>
                    <v-img
                        :alt="`${chat.title} avatar`"
                        :src="chat.avatar"
                    ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title v-text="chat.title"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-icon>
                    <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
                        mdi-message-outline
                    </v-icon>
                    </v-list-item-icon>
                </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list subheader>
                <v-subheader>Previous chats</v-subheader>

                <v-list-item
                    v-for="chat in previous"
                    :key="chat.title"
                >
                    <v-list-item-avatar>
                    <v-img
                        :alt="`${chat.title} avatar`"
                        :src="chat.avatar"
                    ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title v-text="chat.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card>
            </template>

Subheadings and dividers
^^^^^^^^^^^^^^^^^^^^^^^^

Lists can contain multiple subheaders and dividers.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"title": "Notifications", "subtitle": "Allow notifications"},
                {"title": "Sound", "subtitle": "Hangouts message"},
                {"title": "Video sounds", "subtitle": "Hangouts video call"},
                {"title": "Invites", "subtitle": "Notify when receiving invites"},
            ]

            v.Card(
                width=475,
                class_="mx-auto my-2",
                children=[
                    v.Toolbar(
                        color="teal",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Settings"]),
                        ]
                    ),
                    v.List(
                        two_line=True,
                        subheader=True,
                        children=[
                            v.Subheader(children=["General"]),
                            v.ListItem(children=[
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=["Profile photo"]),
                                    v.ListItemSubtitle(children=["Change your Google+ profile photo"]),
                                ]),
                            ]),
                            v.ListItem(children=[
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=["Show your status"]),
                                    v.ListItemSubtitle(children=["Your status is visible to everyone"]),
                                ]),
                            ]),
                            v.Divider(),
                            v.Subheader(children=["Hangout notifications"]),
                            v.ListItemGroup(
                                multiple=True,
                                children=[
                                    v.ListItem(
                                        v_slots=[{
                                            "name": "default",
                                            "variables": "default",
                                            "children": [
                                                v.ListItemAction(
                                                    children=[
                                                        v.Checkbox(v_model="default.active")
                                                    ]
                                                ),
                                                v.ListItemContent(children=[
                                                    v.ListItemTitle(children=[item["title"]]),
                                                    v.ListItemSubtitle(children=[item["subtitle"]]),
                                                ]),
                                            ]
                                        }]
                                    ) for item in items
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
                {"title": "Notifications", "subtitle": "Allow notifications"},
                {"title": "Sound", "subtitle": "Hangouts message"},
                {"title": "Video sounds", "subtitle": "Hangouts video call"},
                {"title": "Invites", "subtitle": "Notify when receiving invites"},
            ]

            v.Card(
                width=475,
                class_="mx-auto my-2",
                children=[
                    v.Toolbar(
                        color="teal",
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Settings"]),
                        ]
                    ),
                    v.List(
                        two_line=True,
                        subheader=True,
                        children=[
                            v.Subheader(children=["General"]),
                            v.ListItem(children=[
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=["Profile photo"]),
                                    v.ListItemSubtitle(children=["Change your Google+ profile photo"]),
                                ]),
                            ]),
                            v.ListItem(children=[
                                v.ListItemContent(children=[
                                    v.ListItemTitle(children=["Show your status"]),
                                    v.ListItemSubtitle(children=["Your status is visible to everyone"]),
                                ]),
                            ]),
                            v.Divider(),
                            v.Subheader(children=["Hangout notifications"]),
                            v.ListItemGroup(
                                multiple=True,
                                children=[
                                    v.ListItem(
                                        v_slots=[{
                                            "name": "default",
                                            "variables": "default",
                                            "children": [
                                                v.ListItemAction(
                                                    children=[
                                                        v.Checkbox(v_model="default.active")
                                                    ]
                                                ),
                                                v.ListItemContent(children=[
                                                    v.ListItemTitle(children=[item["title"]]),
                                                    v.ListItemSubtitle(children=[item["subtitle"]]),
                                                ]),
                                            ]
                                        }]
                                    ) for item in items
                                ]
                            ),
                        ]
                    )
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                max-width="475"
                class="mx-auto"
            >
                <v-toolbar
                color="teal"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Settings</v-toolbar-title>
                </v-toolbar>

                <v-list
                two-line
                subheader
                >
                <v-subheader>General</v-subheader>

                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title>Profile photo</v-list-item-title>
                    <v-list-item-subtitle>Change your Google+ profile photo</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title>Show your status</v-list-item-title>
                    <v-list-item-subtitle>Your status is visible to everyone</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list
                subheader
                two-line
                flat
                >
                <v-subheader>Hangout notifications</v-subheader>

                <v-list-item-group
                    v-model="settings"
                    multiple
                >
                    <v-list-item>
                    <template v-slot:default="{ active, }">
                        <v-list-item-action>
                        <v-checkbox
                            :input-value="active"
                            color="primary"
                        ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                    </v-list-item>

                    <v-list-item>
                    <template v-slot:default="{ active }">
                        <v-list-item-action>
                        <v-checkbox
                            :input-value="active"
                            color="primary"
                        ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                        <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                    </v-list-item>

                    <v-list-item>
                    <template v-slot:default="{ active }">
                        <v-list-item-action>
                        <v-checkbox
                            :input-value="active"
                            color="primary"
                        ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>Video sounds</v-list-item-title>
                        <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                    </v-list-item>

                    <v-list-item>
                    <template v-slot:default="{ active }">
                        <v-list-item-action>
                        <v-checkbox
                            :input-value="active"
                            color="primary"
                        ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>Invites</v-list-item-title>
                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
            </v-card>
            </template>
