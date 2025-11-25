Badge
=====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/badges/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Badge <ipyvuetify.Badge>` component superscripts or subscripts an avatar-like icon or
text onto content to highlight information to a user or to just draw attention to a specific element.
Content within the badge usually contains numbers or icons.

.. api::

    :py:class:`ipyvuetify.Badge`

Usage
-----

Badges in their simplest form display to the upper right of the content that it wraps and requires the badge slot.

.. jupyter-execute::

    import ipyvuetify as v

    v.Container(
        class_='text-center mt-2',
        style_='width: 100%',
        children=[
            v.Badge(
                content='6',
                children=[
                    v.Icon(large=True, children=['mdi-vuetify'])
                ]
            )
        ]
    )

Customization options
---------------------

The :py:class:`Badge <ipyvuetify.Badge>` component is flexible and can be used in a variety of use-cases over numerous elements. Options to tweak the location are also available through the ``offset_x`` and ``offset_y`` props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-inline-flex justify-center",
                children=[
                    v.Badge(
                        bordered=True,
                        color='error',
                        icon='mdi-lock',
                        overlap=True,
                        children=[
                            v.Btn(
                                class_='white--text',
                                color='error',
                                depressed=True,
                                children=['Lock Account']
                            )
                        ]
                    ),
                    v.Html(tag='div', class_='mx-3'),
                    v.Badge(
                        bordered=True,
                        bottom=True,
                        color='deep-purple accent-4',
                        dot=True,
                        offset_x=10,
                        offset_y=10,
                        children=[
                            v.Avatar(
                                size=40,
                                children=[
                                    v.Img(src='https://cdn.vuetifyjs.com/images/lists/2.jpg')
                                ]
                            )
                        ]
                    ),
                    v.Html(tag='div', class_='mx-3'),
                    v.Badge(
                        avatar=True,
                        bordered=True,
                        overlap=True,
                        v_slots=[{
                            'name': 'badge',
                            'children': v.Avatar(children=[
                                v.Img(src='https://cdn.vuetifyjs.com/images/logos/v.png')
                            ])
                        }],
                        children=[
                            v.Avatar(
                                size=40,
                                children=[
                                    v.Img(src='https://cdn.vuetifyjs.com/images/john.png')
                                ]
                            )
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="d-inline-flex justify-center",
                children=[
                    v.Badge(
                        bordered=True,
                        color='error',
                        icon='mdi-lock',
                        overlap=True,
                        children=[
                            v.Btn(
                                class_='white--text',
                                color='error',
                                depressed=True,
                                children=['Lock Account']
                            )
                        ]
                    ),
                    v.Html(tag='div', class_='mx-3'),
                    v.Badge(
                        bordered=True,
                        bottom=True,
                        color='deep-purple accent-4',
                        dot=True,
                        offset_x=10,
                        offset_y=10,
                        children=[
                            v.Avatar(
                                size=40,
                                children=[
                                    v.Img(src='https://cdn.vuetifyjs.com/images/lists/2.jpg')
                                ]
                            )
                        ]
                    ),
                    v.Html(tag='div', class_='mx-3'),
                    v.Badge(
                        avatar=True,
                        bordered=True,
                        overlap=True,
                        v_slots=[{
                            'name': 'badge',
                            'children': v.Avatar(children=[
                                v.Img(src='https://cdn.vuetifyjs.com/images/logos/v.png')
                            ])
                        }],
                        children=[
                            v.Avatar(
                                size=40,
                                children=[
                                    v.Img(src='https://cdn.vuetifyjs.com/images/john.png')
                                ]
                            )
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-container>
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-badge
                            bordered
                            color="error"
                            icon="mdi-lock"
                            overlap
                        >
                            <v-btn
                                class="white--text"
                                color="error"
                                depressed
                            >
                                Lock Account
                            </v-btn>
                        </v-badge>

                        <div class="mx-3"></div>

                        <v-badge
                            bordered
                            bottom
                            color="deep-purple accent-4"
                            dot
                            offset-x="10"
                            offset-y="10"
                        >
                            <v-avatar size="40">
                                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                            </v-avatar>
                        </v-badge>

                        <div class="mx-3"></div>

                        <v-badge
                            avatar
                            bordered
                            overlap
                        >
                            <template v-slot:badge>
                                <v-avatar>
                                    <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
                                </v-avatar>
                            </template>

                            <v-avatar size="40">
                                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                            </v-avatar>
                        </v-badge>
                    </v-row>
                </v-container>
            </template>

Dynamic notifications
---------------------

You can incorporate badges with dynamic content to make things such as a notification system.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            messages = 0

            def update_messages(*args):
                global messages
                messages += 1
                badge.content = messages
                badge.value = messages > 0

            def clear_messages(*args):
                global messages
                messages = 0
                badge.content = 0
                badge.value = False



            btn_send = v.Btn(
                class_='mx-1',
                color='primary',
                children=['Send Message']
            )
            btn_send.on_event('click', update_messages)

            btn_clear = v.Btn(
                class_='mx-1',
                color='error',
                children=['Clear Notifications']
            )
            btn_clear.on_event('click', clear_messages)

            badge = v.Badge(
                content=5,
                value=True,
                color='green',
                overlap=True,
                children=[
                    v.Icon(large=True, children=['mdi-vuetify'])
                ]
            )

            v.Container(
                class_='d-inline-flex',
                children=[
                    v.Html(tag='div', children=[btn_send, btn_clear]),
                    v.Spacer(),
                    badge
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            messages = 0

            def update_messages(*args):
                global messages
                messages += 1
                badge.content = messages
                badge.value = messages > 0

            def clear_messages(*args):
                global messages
                messages = 0
                badge.content = 0
                badge.value = False



            btn_send = v.Btn(
                class_='mx-1',
                color='primary',
                children=['Send Message']
            )
            btn_send.on_event('click', update_messages)

            btn_clear = v.Btn(
                class_='mx-1',
                color='error',
                children=['Clear Notifications']
            )
            btn_clear.on_event('click', clear_messages)

            badge = v.Badge(
                content=5,
                value=True,
                color='green',
                overlap=True,
                children=[
                    v.Icon(large=True, children=['mdi-vuetify'])
                ]
            )

            v.Container(
                class_='d-inline-flex',
                children=[
                    v.Html(tag='div', children=[btn_send, btn_clear]),
                    v.Spacer(),
                    badge
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-container>
                    <v-row justify="space-around">
                        <div>
                            <v-btn
                                class="mx-1"
                                color="primary"
                                @click="messages++"
                            >
                                Send Message
                            </v-btn>

                            <v-btn
                                class="mx-1"
                                color="error"
                                @click="messages = 0"
                            >
                                Clear Notifications
                            </v-btn>
                        </div>

                        <v-badge
                            :content="messages"
                            :value="messages"
                            color="green"
                            overlap
                        >
                            <v-icon large>
                                mdi-vuetify
                            </v-icon>
                        </v-badge>
                    </v-row>
                </v-container>
            </template>

            <script>
                export default {
                    data () {
                        return {
                            messages: 0,
                        }
                    },
                }
            </script>

Show on hover
-------------

You can do many things with visibility control, for example, show badge on hover.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            icon = v.Icon(
                color='grey lighten-1',
                large=True,
                children=['mdi-account']
            )

            badge = v.Badge(
                value=True,
                color='deep-purple accent-4',
                content='9999+',
                left=True,
                transition='slide-x-transition',
                children=[icon]
            )

            # Simulate hover with mouse events
            icon.on_event('mouseenter', lambda *args: badge.set('value', True))
            icon.on_event('mouseleave', lambda *args: badge.set('value', False))

            v.Container(class_='d-inline-flex justify-center pb-1 pt-5', children=[badge])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            icon = v.Icon(
                color='grey lighten-1',
                large=True,
                children=['mdi-account']
            )

            badge = v.Badge(
                value=True,
                color='deep-purple accent-4',
                content='9999+',
                left=True,
                transition='slide-x-transition',
                children=[icon]
            )

            # Simulate hover with mouse events
            icon.on_event('mouseenter', lambda *args: badge.set('value', True))
            icon.on_event('mouseleave', lambda *args: badge.set('value', False))

            v.Container(class_='d-inline-flex justify-center pb-1 pt-5', children=[badge])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-badge
                        :value="hover"
                        color="deep-purple accent-4"
                        content="9999+"
                        left
                        transition="slide-x-transition"
                    >
                        <v-hover v-model="hover">
                            <v-icon
                                color="grey lighten-1"
                                large
                            >
                                mdi-account
                            </v-icon>
                        </v-hover>
                    </v-badge>
                </div>
            </template>

            <script>
                export default {
                    data: () => ({
                    hover: false,
                    }),
                }
            </script>

Tabs
----

Badges help convey information to the user in a variety of ways.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Toolbar(children=[
                v.Tabs(
                    dark=True,
                    background_color='primary',
                    grow=True,
                    children=[
                        v.Tab(children=[
                            v.Badge(
                                color='pink',
                                dot=True,
                                children=['Item One']
                            )
                        ]),
                        v.Tab(children=[
                            v.Badge(
                                color='green',
                                content='6',
                                children=['Item Two']
                            )
                        ]),
                        v.Tab(children=[
                            v.Badge(
                                color='deep-purple accent-4',
                                icon='mdi-language-python',
                                children=['Item Three']
                            )
                        ]),
                    ]
                )
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Toolbar(children=[
                v.Tabs(
                    dark=True,
                    background_color='primary',
                    grow=True,
                    children=[
                        v.Tab(children=[
                            v.Badge(
                                color='pink',
                                dot=True,
                                children=['Item One']
                            )
                        ]),
                        v.Tab(children=[
                            v.Badge(
                                color='green',
                                content='6',
                                children=['Item Two']
                            )
                        ]),
                        v.Tab(children=[
                            v.Badge(
                                color='deep-purple accent-4',
                                icon='mdi-language-python',
                                children=['Item Three']
                            )
                        ]),
                    ]
                )
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-toolbar>
                    <v-tabs
                        dark
                        background-color="primary"
                        grow
                    >
                        <v-tab>
                            <v-badge
                                color="pink"
                                dot
                            >
                                Item One
                            </v-badge>
                        </v-tab>

                        <v-tab>
                            <v-badge
                                color="green"
                                content="6"
                            >
                                Item Two
                            </v-badge>
                        </v-tab>

                        <v-tab>
                            <v-badge
                                color="deep-purple accent-4"
                                icon="mdi-vuetify"
                            >
                                Item Three
                            </v-badge>
                        </v-tab>
                    </v-tabs>
                </v-toolbar>
            </template>
