ExpansionPanels
===============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Expansion Panels documentation
    <https://v2.vuetifyjs.com/en/components/expansion-panels/>`__. All examples have been converted
    to ipyvuetify syntax.

The :py:class:`ExpansionPanel <ipyvuetify.ExpansionPanel>` component is useful for reducing
vertical space with large amounts of information. The default functionality of the component is
to only display one expansion-panel body at a time; however, with the ``multiple`` property,
the expansion-panel can remain open until explicitly closed.

.. api::

    - :py:class:`ipyvuetify.ExpansionPanels`
    - :py:class:`ipyvuetify.ExpansionPanel`
    - :py:class:`ipyvuetify.ExpansionPanelHeader`
    - :py:class:`ipyvuetify.ExpansionPanelContent`
    - :py:class:`ipyvuetify.ExpandTransition`

Usage
-----

Expansion panels in their simplest form display a list of expandable items.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Card(
        elevation=15,
        class_="pa-2",
        children=[
            v.ExpansionPanels(
                children=[
                    v.ExpansionPanel(
                        children=[
                            v.ExpansionPanelHeader(
                                children=["Item"]
                            ),
                            v.ExpansionPanelContent(
                                children=[
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                ]
                            ),
                        ]
                    ) for i in range(5)
                ]
            )
        ]
    )

Examples
--------

Accordion
^^^^^^^^^

Accordion expansion-panel hasn't got margins around active panel.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                elevation=15,
                class_="pa-2",
                children=[
                    v.ExpansionPanels(
                        accordion=True,
                        children=[
                            v.ExpansionPanel(
                                children=[
                                    v.ExpansionPanelHeader(
                                        children=["Item"]
                                    ),
                                    v.ExpansionPanelContent(
                                        children=[
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        ]
                                    ),
                                ]
                            ) for i in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                elevation=15,
                class_="pa-2",
                children=[
                    v.ExpansionPanels(
                        accordion=True,
                        children=[
                            v.ExpansionPanel(
                                children=[
                                    v.ExpansionPanelHeader(
                                        children=["Item"]
                                    ),
                                    v.ExpansionPanelContent(
                                        children=[
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        ]
                                    ),
                                ]
                            ) for i in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-expansion-panels accordion>
                <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
                >
                    <v-expansion-panel-header>Item</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
            </template>

Disabled
^^^^^^^^

Both the :py:class:`ExpansionPanel <ipyvuetify.ExpansionPanel>` and its content
can be disabled using the ``disabled`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            checkbox = v.Checkbox(label="Disabled", v_model=False)

            panels = v.ExpansionPanels(
                disabled=False,
                children=[
                    v.ExpansionPanel(
                        children=[
                            v.ExpansionPanelHeader(
                                children=[f"Panel {i+1}"]
                            ),
                            v.ExpansionPanelContent(
                                children=[
                                    "Some content"
                                ]
                            ),
                        ]
                    ) for i in range(3)
                ]
            )

            jslink((checkbox, "v_model"), (panels, "disabled"))

            v.Container(
                children=[
                    v.Row(children=[checkbox]),
                    panels
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            checkbox = v.Checkbox(label="Disabled", v_model=False)

            panels = v.ExpansionPanels(
                disabled=False,
                children=[
                    v.ExpansionPanel(
                        children=[
                            v.ExpansionPanelHeader(
                                children=[f"Panel {i+1}"]
                            ),
                            v.ExpansionPanelContent(
                                children=[
                                    "Some content"
                                ]
                            ),
                        ]
                    ) for i in range(3)
                ]
            )

            jslink((checkbox, "v_model"), (panels, "disabled"))

            v.Container(
                children=[
                    v.Row(children=[checkbox]),
                    panels
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <div class="d-flex">
                <v-checkbox
                    v-model="disabled"
                    label="Disabled"
                ></v-checkbox>
                </div>

                <v-expansion-panels
                v-model="panel"
                :disabled="disabled"
                multiple
                >
                <v-expansion-panel>
                    <v-expansion-panel-header>Panel 1</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Some content
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>Panel 2</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Some content
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Some content
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </div>
            </template>

Focusable
^^^^^^^^^

The expansion-panel headers can be made focusable with the prop ``focusable``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                elevation=15,
                class_="pa-2",
                children=[
                    v.ExpansionPanels(
                        focusable=True,
                        children=[
                            v.ExpansionPanel(
                                children=[
                                    v.ExpansionPanelHeader(
                                        children=["Item"]
                                    ),
                                    v.ExpansionPanelContent(
                                        children=[
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        ]
                                    ),
                                ]
                            ) for i in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                elevation=15,
                class_="pa-2",
                children=[
                    v.ExpansionPanels(
                        focusable=True,
                        children=[
                            v.ExpansionPanel(
                                children=[
                                    v.ExpansionPanelHeader(
                                        children=["Item"]
                                    ),
                                    v.ExpansionPanelContent(
                                        children=[
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        ]
                                    ),
                                ]
                            ) for i in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-expansion-panels focusable>
                <v-expansion-panel
                v-for="(item,i) in 5"
                :key="i"
                >
                <v-expansion-panel-header>Item</v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </template>

Inset
^^^^^

Inset expansion-panel becomes smaller when activated.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                elevation=15,
                class_="pa-2",
                children=[
                    v.ExpansionPanels(
                        inset=True,
                        children=[
                            v.ExpansionPanel(
                                children=[
                                    v.ExpansionPanelHeader(
                                        children=["Item"]
                                    ),
                                    v.ExpansionPanelContent(
                                        children=[
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        ]
                                    ),
                                ]
                            ) for i in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                elevation=15,
                class_="pa-2",
                children=[
                    v.ExpansionPanels(
                        inset=True,
                        children=[
                            v.ExpansionPanel(
                                children=[
                                    v.ExpansionPanelHeader(
                                        children=["Item"]
                                    ),
                                    v.ExpansionPanelContent(
                                        children=[
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        ]
                                    ),
                                ]
                            ) for i in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-expansion-panels inset>
                <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
                >
                    <v-expansion-panel-header>Item</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
            </template>

Model
^^^^^

Expansion panels can be controlled externally by modifying the ``v_model``. Its
value corresponds to a zero-based index of the currently opened expansion panel
content. If ``multiple`` prop is used then it is an array containing the indices
of the open items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            select = v.Select(
                label="Select panels",
                v_model=[],
                items=[{"text": f"Panel {i+1}", "value": i} for i in range(5)],
                multiple=True,
                readonly=True,
                chips=True,
            )

            panels = v.ExpansionPanels(
                v_model=[],
                inset=True,
                multiple=True,
                children=[
                    v.ExpansionPanel(
                        children=[
                            v.ExpansionPanelHeader(
                                children=["Item"]
                            ),
                            v.ExpansionPanelContent(
                                children=[
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                ]
                            ),
                        ]
                    ) for i in range(5)
                ]
            )

            jslink((select, "v_model"), (panels, "v_model"))

            v.Card(
                class_="pa-2",
                children=[select, panels]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            select = v.Select(
                label="Select panels",
                v_model=[],
                items=[{"text": f"Panel {i+1}", "value": i} for i in range(5)],
                multiple=True,
                readonly=True,
                chips=True,
            )

            panels = v.ExpansionPanels(
                v_model=[],
                inset=True,
                multiple=True,
                children=[
                    v.ExpansionPanel(
                        children=[
                            v.ExpansionPanelHeader(
                                children=["Item"]
                            ),
                            v.ExpansionPanelContent(
                                children=[
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                ]
                            ),
                        ]
                    ) for i in range(5)
                ]
            )

            jslink((select, "v_model"), (panels, "v_model"))

            v.Card(
                class_="pa-2",
                children=[select, panels]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <div class="text-center d-flex pb-4">
                <v-btn @click="all">
                    all
                </v-btn>
                <div>{{ panel }}</div>
                <v-btn @click="none">
                    none
                </v-btn>
                </div>

                <v-expansion-panels
                v-model="panel"
                multiple
                >
                <v-expansion-panel
                    v-for="(item,i) in items"
                    :key="i"
                >
                    <v-expansion-panel-header>Header {{ item }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </div>
            </template>

Popout
^^^^^^

The expansion-panel also has ``popout`` design. With it, expansion-panel is
enlarged when activated.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                elevation=15,
                class_="pa-2",
                children=[
                    v.ExpansionPanels(
                        popout=True,
                        children=[
                            v.ExpansionPanel(
                                children=[
                                    v.ExpansionPanelHeader(
                                        children=["Item"]
                                    ),
                                    v.ExpansionPanelContent(
                                        children=[
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        ]
                                    ),
                                ]
                            ) for i in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                elevation=15,
                class_="pa-2",
                children=[
                    v.ExpansionPanels(
                        popout=True,
                        children=[
                            v.ExpansionPanel(
                                children=[
                                    v.ExpansionPanelHeader(
                                        children=["Item"]
                                    ),
                                    v.ExpansionPanelContent(
                                        children=[
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        ]
                                    ),
                                ]
                            ) for i in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-expansion-panels popout>
                <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
                >
                    <v-expansion-panel-header>Item</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
            </template>

Readonly
^^^^^^^^

The ``readonly`` prop does the same thing as ``disabled``, but it doesn't touch styles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            checkbox = v.Checkbox(label="Readonly", v_model=False)

            panels = v.ExpansionPanels(
                readonly=False,
                children=[
                    v.ExpansionPanel(
                        children=[
                            v.ExpansionPanelHeader(
                                children=[f"Panel {i+1}"]
                            ),
                            v.ExpansionPanelContent(
                                children=[
                                    "Some content"
                                ]
                            ),
                        ]
                    ) for i in range(3)
                ]
            )

            jslink((checkbox, "v_model"), (panels, "disabled"))

            v.Container(
                children=[
                    v.Row(children=[checkbox]),
                    panels
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            checkbox = v.Checkbox(label="Readonly", v_model=False)

            panels = v.ExpansionPanels(
                readonly=False,
                children=[
                    v.ExpansionPanel(
                        children=[
                            v.ExpansionPanelHeader(
                                children=[f"Panel {i+1}"]
                            ),
                            v.ExpansionPanelContent(
                                children=[
                                    "Some content"
                                ]
                            ),
                        ]
                    ) for i in range(3)
                ]
            )

            jslink((checkbox, "v_model"), (panels, "disabled"))

            v.Container(
                children=[
                    v.Row(children=[checkbox]),
                    panels
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <div class="d-flex">
                <v-checkbox
                    v-model="readonly"
                    label="Readonly"
                ></v-checkbox>
                </div>

                <v-expansion-panels
                v-model="panel"
                :readonly="readonly"
                multiple
                >
                <v-expansion-panel>
                    <v-expansion-panel-header>Panel 1</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Some content
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>Panel 2</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Some content
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Some content
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </div>
            </template>

Advanced
^^^^^^^^

The expansion panel component provides a rich playground to build truly advanced
implementations. Here we take advantage of slots in the
:py:class:`ExpansionPanelHeader <ipyvuetify.ExpansionPanelHeader>` component to
react to the state of being open or closed by fading content in and out.

.. todo::

    This example depends heavily on the slot system which is quite sophisticated,
    any brave soul willing to translate it to ipyvuetify syntax will be greatly appreciated.
    :fas:`heart`

Custom icon
^^^^^^^^^^^

Expand action icon can be customized with ``expand_icon`` prop or the ``actions`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

                import ipyvuetify as v

                list_icons = [
                    {"icon": "mdi-chevron-up", "color": "primary" },
                    { "icon": "mdi-check", "color": "teal" },
                    { "icon": "mdi-alert-circle", "color": "error" },
                ]

                v.Card(
                    elevation=15,
                    class_="pa-2",
                    children=[
                        v.ExpansionPanels(
                            children=[
                                v.ExpansionPanel(
                                    children=[
                                        v.ExpansionPanelHeader(
                                            disable_icon_rotate=i!=0,
                                            children=["Item"],
                                            v_slots=[
                                                {
                                                    "name": "actions",
                                                    "children": v.Icon(
                                                        color=list_icons[i]["color"],
                                                        children=[list_icons[i]["icon"]]
                                                    )
                                                }
                                            ]
                                        ),
                                        v.ExpansionPanelContent(
                                            children=[
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                            ]
                                        ),
                                    ]
                                ) for i in range(3)
                            ]
                        )
                    ]
                )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

                import ipyvuetify as v

                list_icons = [
                    {"icon": "mdi-chevron-up", "color": "primary" },
                    { "icon": "mdi-check", "color": "teal" },
                    { "icon": "mdi-alert-circle", "color": "error" },
                ]

                v.Card(
                    elevation=15,
                    class_="pa-2",
                    children=[
                        v.ExpansionPanels(
                            children=[
                                v.ExpansionPanel(
                                    children=[
                                        v.ExpansionPanelHeader(
                                            disable_icon_rotate=i!=0,
                                            children=["Item"],
                                            v_slots=[
                                                {
                                                    "name": "actions",
                                                    "children": v.Icon(
                                                        color=list_icons[i]["color"],
                                                        children=[list_icons[i]["icon"]]
                                                    )
                                                }
                                            ]
                                        ),
                                        v.ExpansionPanelContent(
                                            children=[
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                            ]
                                        ),
                                    ]
                                ) for i in range(3)
                            ]
                        )
                    ]
                )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-expansion-panels class="mb-6">
                <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
                >
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                    Item
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>

                <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                    Item
                    <template v-slot:actions>
                        <v-icon color="primary">
                        $expand
                        </v-icon>
                    </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header disable-icon-rotate>
                    Item
                    <template v-slot:actions>
                        <v-icon color="teal">
                        mdi-check
                        </v-icon>
                    </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header disable-icon-rotate>
                    Item
                    <template v-slot:actions>
                        <v-icon color="error">
                        mdi-alert-circle
                        </v-icon>
                    </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </div>
            </template>
