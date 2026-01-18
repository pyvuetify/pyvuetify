Tabs
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Tabs
    documentation <https://v2.vuetifyjs.com/en/components/tabs/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Tabs <ipyvuetify.Tabs>` component is used for hiding content
behind a selectable item. This can also be used as a pseudo-navigation for a
page, where the tabs are links and the tab-items are the content.

.. api::

    - :py:class:`ipyvuetify.Tabs`
    - :py:class:`ipyvuetify.Tab`
    - :py:class:`ipyvuetify.TabItem`
    - :py:class:`ipyvuetify.TabsItems`
    - :py:class:`ipyvuetify.TabsSlider`

.. warning::

    When using the ``dark`` prop and NOT providing a custom color, the
    :py:class:`Tabs <ipyvuetify.Tabs>` component will default its color to white.

.. warning::

    When using :py:class:`TabItem <ipyvuetify.TabItem>` that contain required
    input fields you must use the ``eager`` prop in order to validate the required
    fields that are not yet visible.

Usage
-----

The :py:class:`Tabs <ipyvuetify.Tabs>` component is a styled extension of
:py:class:`ItemGroup <ipyvuetify.ItemGroup>`. It provides an easy to use
interface for organizing groups of content.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Tabs(
        children=[
            v.Tab(children=['Item One']),
            v.Tab(children=['Item Two']),
            v.Tab(children=['Item Three']),
        ]
    )


Examples
--------

Align with title
^^^^^^^^^^^^^^^^

Make :py:class:`Tabs <ipyvuetify.Tabs>` lined up with the
:py:class:`ToolbarTitle <ipyvuetify.ToolbarTitle>` component using the
``align_with_title`` prop (:py:class:`AppBarNavIcon <ipyvuetify.AppBarNavIcon>`
or :py:class:`Btn <ipyvuetify.Btn>` must be used in
:py:class:`Toolbar <ipyvuetify.Toolbar>`).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            items = ['web', 'shopping', 'videos', 'images', 'news']
            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                align_with_title=True,
                v_model=0,
                children=[v.Tab(children=[item]) for item in items]
            )

            tab_items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(children=[text])
                                ]
                            )
                        ]
                    ) for n in range(len(items))
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                children=[
                    v.Toolbar(
                        color="cyan",
                        dark=True,
                        flat=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Your Dashboard"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])]
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-dots-vertical"])]
                            ),
                        ],
                        v_slots=[{
                            "name": "extension",
                            "children": tabs
                        }]
                    ),
                    tab_items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            items = ['web', 'shopping', 'videos', 'images', 'news']
            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                align_with_title=True,
                v_model=0,
                children=[v.Tab(children=[item]) for item in items]
            )

            tab_items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(children=[text])
                                ]
                            )
                        ]
                    ) for n in range(len(items))
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                children=[
                    v.Toolbar(
                        color="cyan",
                        dark=True,
                        flat=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Your Dashboard"]),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-magnify"])]
                            ),
                            v.Btn(
                                icon=True,
                                children=[v.Icon(children=["mdi-dots-vertical"])]
                            ),
                        ],
                        v_slots=[{
                            "name": "extension",
                            "children": tabs
                        }]
                    ),
                    tab_items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-toolbar
                color="cyan"
                dark
                flat
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Your Dashboard</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

                <template v-slot:extension>
                    <v-tabs
                    v-model="tab"
                    align-with-title
                    >
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab
                        v-for="item in items"
                        :key="item"
                    >
                        {{ item }}
                    </v-tab>
                    </v-tabs>
                </template>
                </v-toolbar>

                <v-tabs-items v-model="tab">
                <v-tab-item
                    v-for="item in items"
                    :key="item"
                >
                    <v-card flat>
                    <v-card-text v-text="text"></v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
            </v-card>
            </template>

Center active
^^^^^^^^^^^^^

The ``center_active`` prop will make the active tab always centered.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Tabs(
                center_active=True,
                background_color="deep-purple accent-4",
                dark=True,
                children=[
                    v.Tab(children=['One']),
                    v.Tab(children=['Two']),
                    v.Tab(children=['Three']),
                    v.Tab(children=['Four']),
                    v.Tab(children=['Five']),
                    v.Tab(children=['Six']),
                    v.Tab(children=['Seven']),
                    v.Tab(children=['Eight']),
                    v.Tab(children=['Nine']),
                    v.Tab(children=['Ten']),
                    v.Tab(children=['Eleven']),
                    v.Tab(children=['Twelve']),
                    v.Tab(children=['Thirteen']),
                    v.Tab(children=['Fourteen']),
                    v.Tab(children=['Fifteen']),
                    v.Tab(children=['Sixteen']),
                    v.Tab(children=['Seventeen']),
                    v.Tab(children=['Eighteen']),
                    v.Tab(children=['Nineteen']),
                    v.Tab(children=['Twenty']),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Tabs(
                center_active=True,
                background_color="deep-purple accent-4",
                dark=True,
                children=[
                    v.Tab(children=['One']),
                    v.Tab(children=['Two']),
                    v.Tab(children=['Three']),
                    v.Tab(children=['Four']),
                    v.Tab(children=['Five']),
                    v.Tab(children=['Six']),
                    v.Tab(children=['Seven']),
                    v.Tab(children=['Eight']),
                    v.Tab(children=['Nine']),
                    v.Tab(children=['Ten']),
                    v.Tab(children=['Eleven']),
                    v.Tab(children=['Twelve']),
                    v.Tab(children=['Thirteen']),
                    v.Tab(children=['Fourteen']),
                    v.Tab(children=['Fifteen']),
                    v.Tab(children=['Sixteen']),
                    v.Tab(children=['Seventeen']),
                    v.Tab(children=['Eighteen']),
                    v.Tab(children=['Nineteen']),
                    v.Tab(children=['Twenty']),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-tabs
                background-color="deep-purple accent-4"
                center-active
                dark
                >
                <v-tab>One</v-tab>
                <v-tab>Two</v-tab>
                <v-tab>Three</v-tab>
                <v-tab>Four</v-tab>
                <v-tab>Five</v-tab>
                <v-tab>Six</v-tab>
                <v-tab>Seven</v-tab>
                <v-tab>Eight</v-tab>
                <v-tab>Nine</v-tab>
                <v-tab>Ten</v-tab>
                <v-tab>Eleven</v-tab>
                <v-tab>Twelve</v-tab>
                <v-tab>Thirteen</v-tab>
                <v-tab>Fourteen</v-tab>
                <v-tab>Fifteen</v-tab>
                <v-tab>Sixteen</v-tab>
                <v-tab>Seventeen</v-tab>
                <v-tab>Eighteen</v-tab>
                <v-tab>Nineteen</v-tab>
                <v-tab>Twenty</v-tab>
                </v-tabs>
            </v-card>
            </template>

Custom icons
^^^^^^^^^^^^

``prev_icon`` and ``next_icon`` can be used for applying custom pagination
icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Sheet(
                class_="mx-auto my-2",
                width=700,
                children=[
                    v.Tabs(
                        background_color="cyan",
                        dark=True,
                        next_icon="mdi-arrow-right-bold-box-outline",
                        prev_icon="mdi-arrow-left-bold-box-outline",
                        show_arrows=True,
                        children=[v.TabsSlider(color="yellow")] + [
                            v.Tab(children=[f'Item {i}']) for i in range(1, 31)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Sheet(
                class_="mx-auto my-2",
                width=700,
                children=[
                    v.Tabs(
                        background_color="cyan",
                        dark=True,
                        next_icon="mdi-arrow-right-bold-box-outline",
                        prev_icon="mdi-arrow-left-bold-box-outline",
                        show_arrows=True,
                        children=[v.TabsSlider(color="yellow")] + [
                            v.Tab(children=[f'Item {i}']) for i in range(1, 31)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-sheet elevation="6">
                <v-tabs
                background-color="cyan"
                dark
                next-icon="mdi-arrow-right-bold-box-outline"
                prev-icon="mdi-arrow-left-bold-box-outline"
                show-arrows
                >
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab
                    v-for="i in 30"
                    :key="i"
                    :href="'#tab-' + i"
                >
                    Item {{ i }}
                </v-tab>
                </v-tabs>
            </v-sheet>
            </template>

Fixed tabs
^^^^^^^^^^

The ``fixed_tabs`` prop forces :py:class:`Tab <ipyvuetify.Tab>` to take up
all available space up to the maximum width (300px).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Tabs(
                fixed_tabs=True,
                background_color="indigo",
                dark=True,
                children=[
                    v.Tab(children=['Option']),
                    v.Tab(children=['Another Selection']),
                    v.Tab(children=['Items']),
                    v.Tab(children=['Another Screen']),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Tabs(
                fixed_tabs=True,
                background_color="indigo",
                dark=True,
                children=[
                    v.Tab(children=['Option']),
                    v.Tab(children=['Another Selection']),
                    v.Tab(children=['Items']),
                    v.Tab(children=['Another Screen']),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-tabs
                fixed-tabs
                background-color="indigo"
                dark
            >
                <v-tab>
                Option
                </v-tab>
                <v-tab>
                Another Selection
                </v-tab>
                <v-tab>
                Items
                </v-tab>
                <v-tab>
                Another Screen
                </v-tab>
            </v-tabs>
            </template>

Grow
^^^^

The ``grow`` prop will make the tab items take up all available space up to a
maximum width of 300px.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                v_model=0,
                grow=True,
                background_color="transparent",
                color= "#356859",
                children=[v.Tab(children=[item]) for item in items]
            )

            tab_items= v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                color="#FFFBE6",
                                flat=True,
                                children=[
                                    v.CardText(children=[text])
                                ]
                            )
                        ]
                    ) for n in range(len(items))
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                color="#FFFBE6",
                children=[
                    v.CardTitle(
                        class_="text-center justify-center py-6",
                        children=[
                            v.Html(
                                tag="h1",
                                class_="font-weight-bold text-h2",
                                children=["BASiL"],
                                style_="color: #356859;"
                            )
                        ]
                    ),
                    tabs,
                    tab_items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                v_model=0,
                grow=True,
                background_color="transparent",
                color= "#356859",
                children=[v.Tab(children=[item]) for item in items]
            )

            tab_items= v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                color="#FFFBE6",
                                flat=True,
                                children=[
                                    v.CardText(children=[text])
                                ]
                            )
                        ]
                    ) for n in range(len(items))
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                color="#FFFBE6",
                children=[
                    v.CardTitle(
                        class_="text-center justify-center py-6",
                        children=[
                            v.Html(
                                tag="h1",
                                class_="font-weight-bold text-h2",
                                children=["BASiL"],
                                style_="color: #356859;"
                            )
                        ]
                    ),
                    tabs,
                    tab_items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card color="basil">
                <v-card-title class="text-center justify-center py-6">
                <h1 class="font-weight-bold text-h2 basil--text">
                    BASiL
                </h1>
                </v-card-title>

                <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                grow
                >
                <v-tab
                    v-for="item in items"
                    :key="item"
                >
                    {{ item }}
                </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                <v-tab-item
                    v-for="item in items"
                    :key="item"
                >
                    <v-card
                    color="basil"
                    flat
                    >
                    <v-card-text>{{ text }}</v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
            </v-card>
            </template>

Icons and text
^^^^^^^^^^^^^^

Using ``icons_and_text`` prop increases the :py:class:`Tabs <ipyvuetify.Tabs>`
height to 72px to allow for both icons as well as text to be used.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                icons_and_text=True,
                background_color="deep-purple accent-4",
                dark=True,
                centered=True,
                v_model=0,
                children=[
                    v.Tab(children=[v.Icon(children=['mdi-phone']), 'Recents']),
                    v.Tab(children=[v.Icon(children=['mdi-heart']), 'Favorites']),
                    v.Tab(children=[v.Icon(children=['mdi-account-box']), 'Nearby']),
                ]
            )

            tab_items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(children=[text])
                                ]
                            )
                        ]
                    ) for n in range(3)
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                children=[
                    tabs,
                    tab_items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                icons_and_text=True,
                background_color="deep-purple accent-4",
                dark=True,
                centered=True,
                v_model=0,
                children=[
                    v.Tab(children=[v.Icon(children=['mdi-phone']), 'Recents']),
                    v.Tab(children=[v.Icon(children=['mdi-heart']), 'Favorites']),
                    v.Tab(children=[v.Icon(children=['mdi-account-box']), 'Nearby']),
                ]
            )

            tab_items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(children=[text])
                                ]
                            )
                        ]
                    ) for n in range(3)
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                children=[
                    tabs,
                    tab_items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-tabs
                v-model="tab"
                background-color="deep-purple accent-4"
                centered
                dark
                icons-and-text
                >
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#tab-1">
                    Recents
                    <v-icon>mdi-phone</v-icon>
                </v-tab>

                <v-tab href="#tab-2">
                    Favorites
                    <v-icon>mdi-heart</v-icon>
                </v-tab>

                <v-tab href="#tab-3">
                    Nearby
                    <v-icon>mdi-account-box</v-icon>
                </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="'tab-' + i"
                >
                    <v-card flat>
                    <v-card-text>{{ text }}</v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
            </v-card>
            </template>

Pagination
^^^^^^^^^^

If the tab items overflow their container, pagination controls will appear on
desktop. For mobile devices, arrows will only display with the ``show_arrows``
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                max_width=700,
                children=[
                    v.Tabs(
                        show_arrows=True,
                        background_color="teal darken-3",
                        dark=True,
                        children=[
                            v.Tab(children=[f'Item {i}']) for i in range(1, 31)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                max_width=700,
                children=[
                    v.Tabs(
                        show_arrows=True,
                        background_color="teal darken-3",
                        dark=True,
                        children=[
                            v.Tab(children=[f'Item {i}']) for i in range(1, 31)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-tabs
                dark
                background-color="teal darken-3"
                show-arrows
                >
                <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

                <v-tab
                    v-for="i in 30"
                    :key="i"
                    :href="'#tab-' + i"
                >
                    Item {{ i }}
                </v-tab>
                </v-tabs>
            </v-card>
            </template>

Right
^^^^^

The ``right`` prop aligns the tabs to the right.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            tabs = v.Tabs(
                right=True,
                color="deep-purple accent-4",
                v_model=1,
                children=[
                    v.Tab(children=['Landscape']),
                    v.Tab(children=['City']),
                    v.Tab(children=['Abstract']),
                ]
            )

            tab_items = v.TabsItems(
                v_model=1,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Container(
                                fluid=True,
                                children=[
                                    v.Row(
                                        children=[
                                            v.Col(
                                                key=i,
                                                cols=4,
                                                children=[
                                                    v.Img(
                                                        src=f'https://picsum.photos/500/300?image={i * n * 5 + 10}',
                                                        lazy_src=f'https://picsum.photos/10/6?image={i * n * 5 + 10}',
                                                        aspect_ratio=1
                                                    )
                                                ]
                                            ) for i in range(1, 7)
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for n in range(1, 4)
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                width=700,
                children=[tabs, tab_items]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            tabs = v.Tabs(
                right=True,
                color="deep-purple accent-4",
                v_model=1,
                children=[
                    v.Tab(children=['Landscape']),
                    v.Tab(children=['City']),
                    v.Tab(children=['Abstract']),
                ]
            )

            tab_items = v.TabsItems(
                v_model=1,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Container(
                                fluid=True,
                                children=[
                                    v.Row(
                                        children=[
                                            v.Col(
                                                key=i,
                                                cols=4,
                                                children=[
                                                    v.Img(
                                                        src=f'https://picsum.photos/500/300?image={i * n * 5 + 10}',
                                                        lazy_src=f'https://picsum.photos/10/6?image={i * n * 5 + 10}',
                                                        aspect_ratio=1
                                                    )
                                                ]
                                            ) for i in range(1, 7)
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for n in range(1, 4)
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                width=700,
                children=[tabs, tab_items]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-tabs
                color="deep-purple accent-4"
                right
                >
                <v-tab>Landscape</v-tab>
                <v-tab>City</v-tab>
                <v-tab>Abstract</v-tab>

                <v-tab-item
                    v-for="n in 3"
                    :key="n"
                >
                    <v-container fluid>
                    <v-row>
                        <v-col
                        v-for="i in 6"
                        :key="i"
                        cols="12"
                        md="4"
                        >
                        <v-img
                            :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                            :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                            aspect-ratio="1"
                        ></v-img>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-tab-item>
                </v-tabs>
            </v-card>
            </template>

Vertical Tabs
^^^^^^^^^^^^^

The ``vertical`` prop allows for :py:class:`Tab <ipyvuetify.Tab>` components
to stack vertically.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            tabs = v.Tabs(
                vertical=True,
                v_model=0,
                children=[
                    v.Tab(
                        children=[
                            v.Icon(left=True, children=["mdi-account"]),
                            "Option 1"
                        ]
                    ),
                    v.Tab(
                        children=[
                            v.Icon(left=True, children=["mdi-lock"]),
                            "Option 2"
                        ]
                    ),
                    v.Tab(
                        children=[
                            v.Icon(left=True, children=["mdi-access-point"]),
                            "Option 3"
                        ]
                    ),
                ]
            )

            tab_items = v.TabsItems(
                v_model = 0,
                children=[
                    v.TabItem(
                        key=0,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[
                                            "Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.",
                                            v.Html(tag="br"),
                                            "Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.",
                                            v.Html(tag="br"),
                                            "Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio."
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.TabItem(
                        key=1,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[
                                            "Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.",
                                            v.Html(tag="br"),
                                            "Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.",
                                            v.Html(tag="br"),
                                            "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc."
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.TabItem(
                        key=2,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[
                                            "Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.",
                                            v.Html(tag="br"),
                                            "Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis."
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                children=[
                    v.Toolbar(
                        flat=True,
                        color="primary",
                        dark=True,
                        children=[
                            v.ToolbarTitle(children=["User Profile"])
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                cols=3,
                                children=[tabs]
                            ),
                            v.Col(
                                cols=9,
                                children=[tab_items]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            tabs = v.Tabs(
                vertical=True,
                v_model=0,
                children=[
                    v.Tab(
                        children=[
                            v.Icon(left=True, children=["mdi-account"]),
                            "Option 1"
                        ]
                    ),
                    v.Tab(
                        children=[
                            v.Icon(left=True, children=["mdi-lock"]),
                            "Option 2"
                        ]
                    ),
                    v.Tab(
                        children=[
                            v.Icon(left=True, children=["mdi-access-point"]),
                            "Option 3"
                        ]
                    ),
                ]
            )

            tab_items = v.TabsItems(
                v_model = 0,
                children=[
                    v.TabItem(
                        key=0,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[
                                            "Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.",
                                            v.Html(tag="br"),
                                            "Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.",
                                            v.Html(tag="br"),
                                            "Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio."
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.TabItem(
                        key=1,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[
                                            "Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.",
                                            v.Html(tag="br"),
                                            "Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.",
                                            v.Html(tag="br"),
                                            "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc."
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.TabItem(
                        key=2,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[
                                            "Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.",
                                            v.Html(tag="br"),
                                            "Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis."
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                children=[
                    v.Toolbar(
                        flat=True,
                        color="primary",
                        dark=True,
                        children=[
                            v.ToolbarTitle(children=["User Profile"])
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                cols=3,
                                children=[tabs]
                            ),
                            v.Col(
                                cols=9,
                                children=[tab_items]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-toolbar
                flat
                color="primary"
                dark
                >
                <v-toolbar-title>User Profile</v-toolbar-title>
                </v-toolbar>
                <v-tabs vertical>
                <v-tab>
                    <v-icon left>
                    mdi-account
                    </v-icon>
                    Option 1
                </v-tab>
                <v-tab>
                    <v-icon left>
                    mdi-lock
                    </v-icon>
                    Option 2
                </v-tab>
                <v-tab>
                    <v-icon left>
                    mdi-access-point
                    </v-icon>
                    Option 3
                </v-tab>

                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <p>
                        Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                        </p>

                        <p>
                        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                        </p>

                        <p class="mb-0">
                        Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <p>
                        Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                        </p>

                        <p>
                        Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                        </p>

                        <p>
                        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                        </p>

                        <p>
                        Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                        </p>

                        <p class="mb-0">
                        Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <p>
                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                        </p>

                        <p class="mb-0">
                        Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs>
            </v-card>
            </template>

Misc
----

Content
^^^^^^^

It is common to put :py:class:`Tabs <ipyvuetify.Tabs>` inside the extension
slot of :py:class:`Toolbar <ipyvuetify.Toolbar>`. Using
:py:class:`Toolbar <ipyvuetify.Toolbar>`'s ``tabs`` prop auto adjusts its
height to 48px to match :py:class:`Tabs <ipyvuetify.Tabs>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                v_model=2,
                centered=True,
                slider_color="yellow",
                children=[
                    v.Tab(children=[f'Item {i}']) for i in range(1, 4)
                ]
            )

            tab_items = v.TabsItems(
                v_model=2,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[text]
                                    )
                                ]
                            )
                        ]
                    ) for n in range(3)
                ]
            )

            v.Card(
                children=[
                    v.Toolbar(
                        color="cyan",
                        dark=True,
                        flat=True,
                        tabs=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Page title"]),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                        ],
                        v_slots=[{
                            "name": "extension",
                            "children": [tabs]
                        }]
                    ),
                    tab_items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                v_model=2,
                centered=True,
                slider_color="yellow",
                children=[
                    v.Tab(children=[f'Item {i}']) for i in range(1, 4)
                ]
            )

            tab_items = v.TabsItems(
                v_model=2,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[text]
                                    )
                                ]
                            )
                        ]
                    ) for n in range(3)
                ]
            )

            v.Card(
                children=[
                    v.Toolbar(
                        color="cyan",
                        dark=True,
                        flat=True,
                        tabs=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Page title"]),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                        ],
                        v_slots=[{
                            "name": "extension",
                            "children": [tabs]
                        }]
                    ),
                    tab_items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-toolbar
                color="cyan"
                dark
                flat
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Page title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

                <template v-slot:extension>
                    <v-tabs
                    v-model="model"
                    centered
                    slider-color="yellow"
                    >
                    <v-tab
                        v-for="i in 3"
                        :key="i"
                        :href="`#tab-${i}`"
                    >
                        Item {{ i }}
                    </v-tab>
                    </v-tabs>
                </template>
                </v-toolbar>

                <v-tabs-items v-model="model">
                <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="`tab-${i}`"
                >
                    <v-card flat>
                    <v-card-text v-text="text"></v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
            </v-card>
            </template>

Desktop tabs
^^^^^^^^^^^^

You can represent :py:class:`Tab <ipyvuetify.Tab>` actions by using single
icons. This is useful when it is easy to correlate content to each tab.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                #background_color="indigo",
                fixed_tabs=True,
                flat=True,
                v_model=0,
                children=[
                    v.Tab(
                        children=[
                            v.Icon(children=["mdi-phone"])
                        ]
                    ),
                    v.Tab(
                        children=[
                            v.Icon(children=["mdi-heart"])
                        ]
                    ),
                    v.Tab(
                        children=[
                            v.Icon(children=["mdi-account-box"])
                        ]
                    ),
                ]
            )

            tab_items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[text]
                                    )
                                ]
                            )
                        ]
                    ) for n in range(3)
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                max_width=700,
                children=[
                    v.Toolbar(
                        flat=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Contact Database"]),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                        ],
                        v_slots=[{
                            "name": "extension",
                            "children": [tabs]
                        }]
                    ),
                    tab_items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            tabs = v.Tabs(
                #background_color="indigo",
                fixed_tabs=True,
                flat=True,
                v_model=0,
                children=[
                    v.Tab(
                        children=[
                            v.Icon(children=["mdi-phone"])
                        ]
                    ),
                    v.Tab(
                        children=[
                            v.Icon(children=["mdi-heart"])
                        ]
                    ),
                    v.Tab(
                        children=[
                            v.Icon(children=["mdi-account-box"])
                        ]
                    ),
                ]
            )

            tab_items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(
                        key=n,
                        children=[
                            v.Card(
                                flat=True,
                                children=[
                                    v.CardText(
                                        children=[text]
                                    )
                                ]
                            )
                        ]
                    ) for n in range(3)
                ]
            )

            jslink((tabs, 'v_model'), (tab_items, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                max_width=700,
                children=[
                    v.Toolbar(
                        flat=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Contact Database"]),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                        ],
                        v_slots=[{
                            "name": "extension",
                            "children": [tabs]
                        }]
                    ),
                    tab_items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-toolbar flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Contact Database</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

                <template v-slot:extension>
                    <v-tabs
                    v-model="tabs"
                    fixed-tabs
                    >
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab
                        href="#mobile-tabs-5-1"
                        class="primary--text"
                    >
                        <v-icon>mdi-phone</v-icon>
                    </v-tab>

                    <v-tab
                        href="#mobile-tabs-5-2"
                        class="primary--text"
                    >
                        <v-icon>mdi-heart</v-icon>
                    </v-tab>

                    <v-tab
                        href="#mobile-tabs-5-3"
                        class="primary--text"
                    >
                        <v-icon>mdi-account-box</v-icon>
                    </v-tab>
                    </v-tabs>
                </template>
                </v-toolbar>

                <v-tabs-items v-model="tabs">
                <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="'mobile-tabs-5-' + i"
                >
                    <v-card flat>
                    <v-card-text v-text="text"></v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
            </v-card>
            </template>

Dynamic height
^^^^^^^^^^^^^^

When changing your :py:class:`TabItem <ipyvuetify.TabItem>`, the content area
will smoothly scale to the new size.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Dynamic Tabs
^^^^^^^^^^^^

Tabs can be dynamically added and removed. This allows you to update to any
number and the :py:class:`Tabs <ipyvuetify.Tabs>` component will react. In
this example when we add a new tab, we automatically change our model to
match. As we add more tabs and overflow the container, the selected item will
be automatically scrolled into view. Remove all :py:class:`Tab <ipyvuetify.Tab>`
and the slider will disappear.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Overflow to menu
^^^^^^^^^^^^^^^^

You can use a menu to hold additional tabs, swapping them out on the fly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Tab Items
^^^^^^^^^

The :py:class:`TabsItems <ipyvuetify.TabsItems>` component allows for you to
customize the content per tab. Using a shared ``v_model``, the
:py:class:`TabsItems <ipyvuetify.TabsItems>` will sync with the currently
selected :py:class:`Tab <ipyvuetify.Tab>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>
