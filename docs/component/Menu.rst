Menu
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Menus documentation
    <https://v2.vuetifyjs.com/en/components/menus/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Menu <ipyvuetify.Menu>` component shows a menu at the position
of the element used to activate it.

.. api::

    :py:class:`ipyvuetify.Menu`

Usage
-----

Remember to put the element that activates the menu in the ``activator`` slot.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Menu(
        offset_y=True,
        v_slots=[{
            'name': 'activator',
            'variable': 'props',
            'children': v.Btn(
                class_="mx-auto my-2",
                children=['Dropdown'],
                color='primary',
                dark=True,
                v_bind = 'props.attrs',
                v_on = 'props.on',
            )
        }],
        children=[
            v.List(
                children=[
                    v.ListItem(
                        children=[
                            v.ListItemTitle(children=[f'Item {i}'])
                        ]
                    ) for i in range(4)
                ]
            )
        ],
    )

Examples
--------

Absolute
^^^^^^^^

Menus can also be placed absolutely on top of the activator element using the
``absolute`` prop. Try clicking anywhere on the image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Menu(
                absolute=True,
                offset_y=True,
                style="max-width: 600px",
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Card(
                        class_="portrait mx-auto my-2",
                        img="https://cdn.vuetifyjs.com/images/cards/girl.jpg",
                        height="300",
                        width="600",
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Menu(
                absolute=True,
                offset_y=True,
                style="max-width: 600px",
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Card(
                        class_="portrait mx-auto my-2",
                        img="https://cdn.vuetifyjs.com/images/cards/girl.jpg",
                        height="300",
                        width="600",
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row
                class="d-flex"
                justify="center"
            >
                <v-menu
                v-model="showMenu"
                absolute
                offset-y
                style="max-width: 600px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-card
                    class="portrait"
                    img="https://cdn.vuetifyjs.com/images/cards/girl.jpg"
                    height="300"
                    width="600"
                    v-bind="attrs"
                    v-on="on"
                    ></v-card>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </v-row>
            </template>

Close on click
^^^^^^^^^^^^^^

Menu can be closed when lost focus.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets  import jslink

            switch = v.Switch(
                v_model=True,
                label="Close on click",
            )

            menu = v.Menu(
                top=True,
                close_on_click=switch.v_model,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (menu, 'close_on_click'))

            v.Layout(class_="d-flex flex-row", children=[switch, menu])


    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets  import jslink

            switch = v.Switch(
                v_model=True,
                label="Close on click",
            )

            menu = v.Menu(
                top=True,
                close_on_click=switch.v_model,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (menu, 'close_on_click'))

            v.Layout(class_="d-flex flex-row", children=[switch, menu])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-switch
                v-model="closeOnClick"
                label="Close on click"
                ></v-switch>
                <v-menu
                top
                :close-on-click="closeOnClick"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Dropdown
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            </template>

Close on content click
^^^^^^^^^^^^^^^^^^^^^^

You can configure whether :py:class:`Menu <ipyvuetify.Menu>` should be closed
when its content is clicked.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets  import jslink

            switch = v.Switch(
                v_model=True,
                label="Close on content click",
            )

            menu = v.Menu(
                top=True,
                close_on_content_click=switch.v_model,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (menu, 'close_on_content_click'))

            v.Layout(class_="d-flex flex-row", children=[switch, menu])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets  import jslink

            switch = v.Switch(
                v_model=True,
                label="Close on content click",
            )

            menu = v.Menu(
                top=True,
                close_on_content_click=switch.v_model,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (menu, 'close_on_content_click'))

            v.Layout(class_="d-flex flex-row", children=[switch, menu])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-switch
                v-model="closeOnContentClick"
                label="Close on content click"
                ></v-switch>
                <v-menu
                top
                :close-on-content-click="closeOnContentClick"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Dropdown
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            </template>

Disabled
^^^^^^^^

You can disable the menu. Disabled menus can't be opened.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Menu(
                disabled=True,
                offset_y=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Menu(
                disabled=True,
                offset_y=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-menu
                disabled
                top
                offset-y
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Dropdown
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            </template>

Offset x
^^^^^^^^

Menu can be offset by the X axis to make the activator visible.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(
                class_="ml-3",
                v_model=False,
                label="X offset",
            )

            menu = v.Menu(
                top=True,
                offset_x=switch.v_model,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (menu, 'offset_x'))

            v.Layout(class_="d-flex flex-row", children=[switch, menu])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(
                class_="ml-3",
                v_model=False,
                label="X offset",
            )

            menu = v.Menu(
                top=True,
                offset_x=switch.v_model,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (menu, 'offset_x'))

            v.Layout(class_="d-flex flex-row", children=[switch, menu])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-switch
                v-model="offset"
                label="X offset"
                color="primary"
                ></v-switch>
                <v-menu
                top
                :offset-x="offset"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Dropdown
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            </template>

Offset y
^^^^^^^^

Menu can be offset by the Y axis to make the activator visible.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(
                class_="ml-3",
                v_model=False,
                label="Y offset",
            )

            menu = v.Menu(
                top=True,
                offset_y=switch.v_model,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (menu, 'offset_y'))
            v.Layout(class_="d-flex flex-row", children=[switch, menu])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(
                class_="ml-3",
                v_model=False,
                label="Y offset",
            )

            menu = v.Menu(
                top=True,
                offset_y=switch.v_model,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

            jslink((switch, 'v_model'), (menu, 'offset_y'))
            v.Layout(class_="d-flex flex-row", children=[switch, menu])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-switch
                v-model="offset"
                label="Y offset"
                color="primary"
                ></v-switch>
                <v-menu
                top
                :offset-y="offset"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Dropdown
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            </template>

Open on hover
^^^^^^^^^^^^^

Menus can be accessed using hover instead of clicking with the ``open-on-hover``
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Menu(
                open_on_hover=True,
                top=True,
                offset_y=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Menu(
                open_on_hover=True,
                top=True,
                offset_y=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Dropdown'],
                        color='primary',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.List(
                        children=[
                            v.ListItem(
                                children=[
                                    v.ListItemTitle(children=[f'Item {i}'])
                                ]
                            ) for i in range(4)
                        ]
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-menu
                open-on-hover
                top
                offset-y
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Dropdown
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
            </template>

Rounded
^^^^^^^

Menus can have their border-radius set by the ``rounded`` prop. Additional
information about rounded classes is on the `Border Radius page
<https://v2.vuetifyjs.com/en/styles/border-radius/>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            btns = [
                {"title": 'Removed', "radius": '0', "color": 'deep-purple accent-4'},
                {"title": 'Large', "radius": 'lg', "color": 'error'},
                {"title": 'Custom', "radius": 'b-xl', "color": 'teal darken-1'},
            ]

            v.Layout(
                class_="d-flex flex-row justify-space-around",
                children=[
                    v.Menu(
                        rounded=btn["radius"],
                        offset_y=True,
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'props',
                            'children': v.Btn(
                                class_="white--text ma-5",
                                children=[f'{btn["title"]} Radius'],
                                color=btn["color"],
                                v_bind = 'props.attrs',
                                v_on = 'props.on',
                            )
                        }],
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemTitle(children=[item])
                                        ]
                                    ) for item in ['Profile', 'Settings', 'Logout']
                                ]
                            )
                        ],
                    ) for btn in btns
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            btns = [
                {"title": 'Removed', "radius": '0', "color": 'deep-purple accent-4'},
                {"title": 'Large', "radius": 'lg', "color": 'error'},
                {"title": 'Custom', "radius": 'b-xl', "color": 'teal darken-1'},
            ]

            v.Layout(
                class_="d-flex flex-row justify-space-around",
                children=[
                    v.Menu(
                        rounded=btn["radius"],
                        offset_y=True,
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'props',
                            'children': v.Btn(
                                class_="white--text ma-5",
                                children=[f'{btn["title"]} Radius'],
                                color=btn["color"],
                                v_bind = 'props.attrs',
                                v_on = 'props.on',
                            )
                        }],
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemTitle(children=[item])
                                        ]
                                    ) for item in ['Profile', 'Settings', 'Logout']
                                ]
                            )
                        ],
                    ) for btn in btns
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-menu
                v-for="([text, rounded], index) in btns"
                :key="text"
                :rounded="rounded"
                offset-y
                >
                <template v-slot:activator="{ attrs, on }">
                    <v-btn
                    :color="colors[index]"
                    class="white--text ma-5"
                    v-bind="attrs"
                    v-on="on"
                    >
                    {{ text }} Radius
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="item in items"
                    :key="item"
                    link
                    >
                    <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </v-row>
            </template>

Activator and tooltip
^^^^^^^^^^^^^^^^^^^^^

With the new ``v-slot`` syntax, nested activators such as those seen with a
:py:class:`Menu <ipyvuetify.Menu>` and :py:class:`Tooltip <ipyvuetify.Tooltip>`
attached to the same activator button, need a particular setup in order to
function correctly. Note: this same syntax is used for other nested activators
such as :py:class:`Dialog <ipyvuetify.Dialog>` w/ :py:class:`Tooltip
<ipyvuetify.Tooltip>`.

.. todo::

    Need experimenting on the double activator setup to provide a proper example
    here. Please help me improve this section :fas:`coffee`

Custom transitions
^^^^^^^^^^^^^^^^^^

Vuetify comes with 3 standard transitions, scale, slide-x and slide-y. You can
also create your own and pass it as the transition argument. For an example of
how the stock transitions are constructed, visit `here
<https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/util/helpers.ts>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            transitions =[
                "scale-transition",
                "slide-x-transition",
                "slide-y-transition",
            ]

            v.Layout(
                class_="d-flex flex-row justify-space-around",
                children=[
                    v.Menu(
                        bottom=True,
                        origin="center center",
                        transition=transition,
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'props',
                            'children': v.Btn(
                                class_="mx-2",
                                children=[transition.replace("-", " ").title()],
                                color='primary',
                                dark=True,
                                v_bind = 'props.attrs',
                                v_on = 'props.on',
                            )
                        }],
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemTitle(children=[f'Item {i}'])
                                        ]
                                    ) for i in range(4)
                                ]
                            )
                        ],
                    ) for transition in transitions
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            transitions =[
                "scale-transition",
                "slide-x-transition",
                "slide-y-transition",
            ]

            v.Layout(
                class_="d-flex flex-row justify-space-around",
                children=[
                    v.Menu(
                        bottom=True,
                        origin="center center",
                        transition=transition,
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'props',
                            'children': v.Btn(
                                class_="mx-2",
                                children=[transition.replace("-", " ").title()],
                                color='primary',
                                dark=True,
                                v_bind = 'props.attrs',
                                v_on = 'props.on',
                            )
                        }],
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemTitle(children=[f'Item {i}'])
                                        ]
                                    ) for i in range(4)
                                ]
                            )
                        ],
                    ) for transition in transitions
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-menu
                bottom
                origin="center center"
                transition="scale-transition"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Scale Transition
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>

                <v-menu
                transition="slide-x-transition"
                bottom
                right
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    class="deep-orange"
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Slide X Transition
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>

                <v-menu
                transition="slide-y-transition"
                bottom
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    class="purple"
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Slide Y Transition
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </v-row>
            </template>

Popover menu
^^^^^^^^^^^^

A menu can be configured to be static when opened, allowing it to function as a
popover. This can be useful when there are multiple interactive items within the
menu contents.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Menu(
                close_on_content_click=False,
                nudge_width=200,
                offset_x=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Menu as Popover'],
                        color='indigo',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.Card(
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAvatar(children=[
                                                v.Img(src="https://cdn.vuetifyjs.com/images/john.jpg", alt="John")
                                            ]),
                                            v.ListItemContent(children=[
                                                v.ListItemTitle(children=["John Leider"]),
                                                v.ListItemSubtitle(children=["Founder of Vuetify"]),
                                            ]),
                                            v.ListItemAction(children=[
                                                v.Btn(class_="red--text" ,icon=True, children=[v.Icon(children=["mdi-heart"])])
                                            ]),
                                        ]
                                    ),
                                ]
                            ),
                            v.Divider(),
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(children=[v.Switch(v_model=True, color="purple")]),
                                            v.ListItemTitle(children=["Enable messages"]),
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(children=[v.Switch(v_model=False, color="purple")]),
                                            v.ListItemTitle(children=["Enable hints"]),
                                        ]
                                    ),
                                ]
                            ),
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Menu(
                close_on_content_click=False,
                nudge_width=200,
                offset_x=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': v.Btn(
                        class_="mx-auto my-2",
                        children=['Menu as Popover'],
                        color='indigo',
                        dark=True,
                        v_bind = 'props.attrs',
                        v_on = 'props.on',
                    )
                }],
                children=[
                    v.Card(
                        children=[
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAvatar(children=[
                                                v.Img(src="https://cdn.vuetifyjs.com/images/john.jpg", alt="John")
                                            ]),
                                            v.ListItemContent(children=[
                                                v.ListItemTitle(children=["John Leider"]),
                                                v.ListItemSubtitle(children=["Founder of Vuetify"]),
                                            ]),
                                            v.ListItemAction(children=[
                                                v.Btn(class_="red--text" ,icon=True, children=[v.Icon(children=["mdi-heart"])])
                                            ]),
                                        ]
                                    ),
                                ]
                            ),
                            v.Divider(),
                            v.List(
                                children=[
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(children=[v.Switch(v_model=True, color="purple")]),
                                            v.ListItemTitle(children=["Enable messages"]),
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(children=[v.Switch(v_model=False, color="purple")]),
                                            v.ListItemTitle(children=["Enable hints"]),
                                        ]
                                    ),
                                ]
                            ),
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="indigo"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Menu as Popover
                    </v-btn>
                </template>

                <v-card>
                    <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                        <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                        <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                        >
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                    <v-list-item>
                        <v-list-item-action>
                        <v-switch
                            v-model="message"
                            color="purple"
                        ></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-action>
                        <v-switch
                            v-model="hints"
                            color="purple"
                        ></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable hints</v-list-item-title>
                    </v-list-item>
                    </v-list>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        text
                        @click="menu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="primary"
                        text
                        @click="menu = false"
                    >
                        Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-menu>
            </div>
            </template>

Use In components
^^^^^^^^^^^^^^^^^

Menus can be placed within almost any component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                width=400,
                height=200,
                children=[
                    v.CardTitle(
                        class_="blue white--text",
                        children=[
                            v.Html(tag="span",class_="text-h5", children=["Menu"]),
                            v.Spacer(),
                            v.Menu(
                                bottom=True,
                                left=True,
                                v_slots=[{
                                    'name': 'activator',
                                    'variable': 'props',
                                    'children': v.Btn(
                                        icon=True,
                                        dark=True,
                                        children=[v.Icon(children=["mdi-dots-vertical"])],
                                        v_bind = 'props.attrs',
                                        v_on = 'props.on',
                                    )
                                }],
                                children=[
                                    v.List(
                                        children=[
                                            v.ListItem(
                                                children=[
                                                    v.ListItemTitle(children=[f'Item {i}'])
                                                ]
                                            ) for i in range(4)
                                        ]
                                    )
                                ],
                            )
                        ]
                    ),
                    v.CardText(children=["Lorem Ipsum"])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                width=400,
                height=200,
                children=[
                    v.CardTitle(
                        class_="blue white--text",
                        children=[
                            v.Html(tag="span",class_="text-h5", children=["Menu"]),
                            v.Spacer(),
                            v.Menu(
                                bottom=True,
                                left=True,
                                v_slots=[{
                                    'name': 'activator',
                                    'variable': 'props',
                                    'children': v.Btn(
                                        icon=True,
                                        dark=True,
                                        children=[v.Icon(children=["mdi-dots-vertical"])],
                                        v_bind = 'props.attrs',
                                        v_on = 'props.on',
                                    )
                                }],
                                children=[
                                    v.List(
                                        children=[
                                            v.ListItem(
                                                children=[
                                                    v.ListItemTitle(children=[f'Item {i}'])
                                                ]
                                            ) for i in range(4)
                                        ]
                                    )
                                ],
                            )
                        ]
                    ),
                    v.CardText(children=["Lorem Ipsum"])
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
                <v-card height="200px">
                    <v-card-title class="blue white--text">
                    <span class="text-h5">Menu</span>

                    <v-spacer></v-spacer>

                    <v-menu
                        bottom
                        left
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            dark
                            icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                        </template>

                        <v-list>
                        <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                    </v-card-title>

                    <v-card-text>Lorem Ipsum</v-card-text>
                </v-card>
                </v-col>
            </v-row>
            </template>

Accessibility
-------------

By default, :py:class:`Menu <ipyvuetify.Menu>` components are detached and
moved to the root of your application. In order to properly support `inserting
dynamic content into the DOM
<https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR26>`__, you
must use the ``attach`` prop. This will ensure that focus transfers from the
activator to the content when pressing the tab key.
