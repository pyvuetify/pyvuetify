ListItemGroup
=============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify List item groups
    documentation <https://v2.vuetifyjs.com/en/components/list-item-groups/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ListItemGroup <ipyvuetify.ListItemGroup>` provides the ability to
create a group of selectable :py:class:`ListItem <ipyvuetify.ListItem>`s. The
:py:class:`ListItemGroup <ipyvuetify.ListItemGroup>` component utilizes
:py:class:`ItemGroup <ipyvuetify.ItemGroup>` at its core to provide a clean
interface for interactive lists.

.. api::

    - :py:class:`ipyvuetify.ListGroup`
    - :py:class:`ipyvuetify.ListItem`
    - :py:class:`ipyvuetify.ListItemAction`
    - :py:class:`ipyvuetify.ListItemActionText`
    - :py:class:`ipyvuetify.ListItemAvatar`
    - :py:class:`ipyvuetify.ListItemContent`
    - :py:class:`ipyvuetify.ListItemGroup`
    - :py:class:`ipyvuetify.ListItemSubtitle`
    - :py:class:`ipyvuetify.ListItemTitle`

Usage
-----

By default, the :py:class:`ListItemGroup <ipyvuetify.ListItemGroup>` operates
similarly to :py:class:`ItemGroup <ipyvuetify.ItemGroup>`. If a value is not
provided, the group will provide a default based upon its index.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    items = [
        {"icon": "mdi-inbox", "text": "Inbox"},
        {"icon": "mdi-star", "text": "Star"},
        {"icon": "mdi-send", "text": "Send"},
        {"icon": "mdi-email-open", "text": "Drafts"},
    ]

    v.Card(
        class_="mx-auto my-2",
        width=400,
        children=[
            v.List(
                children=[
                    v.ListItemGroup(
                        v_model=2,
                        color="indigo",
                        children=[
                            v.ListItem(
                                key=i,
                                children=[
                                    v.ListItemIcon(
                                        children=[v.Icon(children=[item["icon"]])]
                                    ),
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(children=[item["text"]])
                                        ]
                                    ),
                                ],
                            )
                            for i, item in enumerate(items)
                        ],
                    )
                ]
            )
        ],
    )


Examples
--------

Active class
^^^^^^^^^^^^

You can set a class which will be added when an item is selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"icon": "mdi-wifi", "text": "Wifi",},
                {"icon": "mdi-bluetooth", "text": "Bluetooth",},
                {"icon": "mdi-chart-donut", "text": "Data Usage"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.List(
                        children=[
                            v.ListItemGroup(
                                v_model=1,
                                active_class="border",
                                color="indigo",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(
                                                        children=[item["icon"]]
                                                    )
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[item["text"]]
                                                    )
                                                ]
                                            ),
                                        ],
                                    )
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"icon": "mdi-wifi", "text": "Wifi",},
                {"icon": "mdi-bluetooth", "text": "Bluetooth",},
                {"icon": "mdi-chart-donut", "text": "Data Usage"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.List(
                        children=[
                            v.ListItemGroup(
                                v_model=1,
                                active_class="border",
                                color="indigo",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(
                                                        children=[item["icon"]]
                                                    )
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[item["text"]]
                                                    )
                                                ]
                                            ),
                                        ],
                                    )
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-list>
                <v-list-item-group
                    v-model="model"
                    active-class="border"
                    color="indigo"
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

Mandatory
^^^^^^^^^

At least one item must be selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            items = [
                {"icon": "mdi-wifi", "text": "Wifi",},
                {"icon": "mdi-bluetooth", "text": "Bluetooth",},
                {"icon": "mdi-chart-donut", "text": "Data Usage"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.List(
                        children=[
                            v.ListItemGroup(
                                mandatory=True,
                                v_model=1,
                                color="indigo",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(
                                                        children=[item["icon"]]
                                                    )
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[item["text"]]
                                                    )
                                                ]
                                            ),
                                        ],
                                    )
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            items = [
                {"icon": "mdi-wifi", "text": "Wifi",},
                {"icon": "mdi-bluetooth", "text": "Bluetooth",},
                {"icon": "mdi-chart-donut", "text": "Data Usage"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.List(
                        children=[
                            v.ListItemGroup(
                                mandatory=True,
                                v_model=1,
                                color="indigo",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(
                                                        children=[item["icon"]]
                                                    )
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[item["text"]]
                                                    )
                                                ]
                                            ),
                                        ],
                                    )
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-list>
                <v-list-item-group
                    v-model="model"
                    mandatory
                    color="indigo"
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

Multiple
^^^^^^^^

You can select multiple items at one time.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            items = [
                {"icon": "mdi-wifi", "text": "Wifi",},
                {"icon": "mdi-bluetooth", "text": "Bluetooth",},
                {"icon": "mdi-chart-donut", "text": "Data Usage"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.List(
                        children=[
                            v.ListItemGroup(
                                multiple=True,
                                v_model=[1, 2],
                                color="indigo",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(
                                                        children=[item["icon"]]
                                                    )
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[item["text"]]
                                                    )
                                                ]
                                            ),
                                        ],
                                    )
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            items = [
                {"icon": "mdi-wifi", "text": "Wifi",},
                {"icon": "mdi-bluetooth", "text": "Bluetooth",},
                {"icon": "mdi-chart-donut", "text": "Data Usage"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.List(
                        children=[
                            v.ListItemGroup(
                                multiple=True,
                                v_model=[1, 2],
                                color="indigo",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(
                                                        children=[item["icon"]]
                                                    )
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[item["text"]]
                                                    )
                                                ]
                                            ),
                                        ],
                                    )
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-list>
                <v-list-item-group
                    v-model="model"
                    multiple
                    color="indigo"
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

Flat list
^^^^^^^^^

You can easily disable the default highlighting of selected
:py:class:`ListItem <ipyvuetify.ListItem>`s. This creates a lower profile for a
user's choices.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:


            items = [
                {"icon": "mdi-wifi", "text": "Wifi",},
                {"icon": "mdi-bluetooth", "text": "Bluetooth",},
                {"icon": "mdi-chart-donut", "text": "Data Usage"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.List(
                        flat=True,
                        children=[
                            v.ListItemGroup(
                                v_model=1,
                                color="indigo",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(
                                                        children=[item["icon"]]
                                                    )
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[item["text"]]
                                                    )
                                                ]
                                            ),
                                        ],
                                    )
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            items = [
                {"icon": "mdi-wifi", "text": "Wifi",},
                {"icon": "mdi-bluetooth", "text": "Bluetooth",},
                {"icon": "mdi-chart-donut", "text": "Data Usage"},
            ]

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.List(
                        flat=True,
                        children=[
                            v.ListItemGroup(
                                v_model=1,
                                color="indigo",
                                children=[
                                    v.ListItem(
                                        key=i,
                                        children=[
                                            v.ListItemIcon(
                                                children=[
                                                    v.Icon(
                                                        children=[item["icon"]]
                                                    )
                                                ]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(
                                                        children=[item["text"]]
                                                    )
                                                ]
                                            ),
                                        ],
                                    )
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-list flat>
                <v-list-item-group
                    v-model="model"
                    color="indigo"
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

Selection controls
^^^^^^^^^^^^^^^^^^

Using the default slot, you can access an items internal state and toggle it.
Since the active property is a boolean, we use the ``true-value`` prop on the
checkbox to link its state to the :py:class:`ListItem <ipyvuetify.ListItem>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                "Wifi",
                "Bluetooth",
                "Data Usage",
                None,
                "Airplane Mode",
                "Hotspot",
            ]

            v.Card(
                class_="mx-auto my-2",
                width=500,
                children=[
                    v.List(
                        shaped=True,
                        children=[
                            v.ListItemGroup(
                                multiple=True,
                                v_model=[4],
                                children=[
                                    v.ListItem(
                                        key=i,
                                        value=item,
                                        active_class="deep-purple--text text--accent-4",
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=[item])
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[
                                                    v.Checkbox(
                                                        input_value=False,
                                                        true_value=True,
                                                        color="deep-purple accent-4",
                                                        v_bind="{ 'input-value': active }",
                                                    )
                                                ]
                                            ),
                                        ],
                                    ) if item else v.Divider()
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                "Wifi",
                "Bluetooth",
                "Data Usage",
                None,
                "Airplane Mode",
                "Hotspot",
            ]

            v.Card(
                class_="mx-auto my-2",
                width=500,
                children=[
                    v.List(
                        shaped=True,
                        children=[
                            v.ListItemGroup(
                                multiple=True,
                                v_model=[4],
                                children=[
                                    v.ListItem(
                                        key=i,
                                        value=item,
                                        active_class="deep-purple--text text--accent-4",
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=[item])
                                                ]
                                            ),
                                            v.ListItemAction(
                                                children=[
                                                    v.Checkbox(
                                                        input_value=False,
                                                        true_value=True,
                                                        color="deep-purple accent-4",
                                                        v_bind="{ 'input-value': active }",
                                                    )
                                                ]
                                            ),
                                        ],
                                    ) if item else v.Divider()
                                    for i, item in enumerate(items)
                                ],
                            )
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-list shaped>
                <v-list-item-group
                    v-model="model"
                    multiple
                >
                    <template v-for="(item, i) in items">
                    <v-divider
                        v-if="!item"
                        :key="`divider-${i}`"
                    ></v-divider>

                    <v-list-item
                        v-else
                        :key="`item-${i}`"
                        :value="item"
                        active-class="deep-purple--text text--accent-4"
                    >
                        <template v-slot:default="{ active }">
                        <v-list-item-content>
                            <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-checkbox
                            :input-value="active"
                            color="deep-purple accent-4"
                            ></v-checkbox>
                        </v-list-item-action>
                        </template>
                    </v-list-item>
                    </template>
                </v-list-item-group>
                </v-list>
            </v-card>
            </template>
