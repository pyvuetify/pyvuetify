Avatar
======

.. aknowledgement::
    This documentation has been adapted from the official Vuetify 2 documentation available at
    https://v2.vuetifyjs.com/en/components/avatars/.

The :py:class:`Avatar <ipyvuetify.Avatar>` component is typically used to display circular user
profile pictures. This component will allow you to dynamically size and add a border radius of
responsive images, icons, and text. A ``tile`` variation is available for displaying an avatar
without border radius.

.. api::

    :py:class:`ipyvuetify.Avatar`

Usage
-----

Avatars in their simplest form display content within a circular container.

.. jupyter-execute::
    :hide-code:

    import ipyvuetify as v

    avatar = v.Avatar(
        color='primary',
        size=56,
        children=['VJ'],
    )
    v.Container(children=[avatar])

Size
----

The ``size`` prop allows you to define the height and width of :py:class:`Avatar <ipyvuetify.Avatar>`.
This prop scales both evenly with an aspect ratio of 1. ``height`` and ``width`` props will override
this prop.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Row(
                justify='space-around',
                children=[
                    v.Avatar(
                        color='indigo',
                        size=36,
                        children=[v.Html(tag='span', class_='text-white', children=['36'])]
                    ),
                    v.Avatar(
                        color='teal',
                        size=48,
                        children=[v.Html(tag='span', class_='text-white', children=['48'])]
                    ),
                    v.Avatar(
                        color='orange',
                        size=62,
                        children=[v.Html(tag='span', class_='text-white', children=['62'])]
                    ),
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Row(
                justify='space-around',
                children=[
                    v.Avatar(
                        color='indigo',
                        size=36,
                        children=[v.Html(tag='span', class_='text-white', children=['36'])]
                    ),
                    v.Avatar(
                        color='teal',
                        size=48,
                        children=[v.Html(tag='span', class_='text-white', children=['48'])]
                    ),
                    v.Avatar(
                        color='orange',
                        size=62,
                        children=[v.Html(tag='span', class_='text-white', children=['62'])]
                    ),
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-row justify="space-around">
                    <v-avatar
                        color="indigo"
                        size="36"
                    >
                        <span class="text-white">36</span>
                    </v-avatar>

                    <v-avatar
                        color="teal"
                        size="48"
                    >
                        <span class="text-white">48</span>
                    </v-avatar>

                    <v-avatar
                        color="orange"
                        size="62"
                    >
                        <span class="text-white">62</span>
                    </v-avatar>
                </v-row>
            </template>

Tile
----

The ``tile`` prop removes the border radius from :py:class:`Avatar <ipyvuetify.Avatar>` leaving you
with a simple square avatar.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Avatar(
                tile=True,
                color='blue',
                children=[v.Icon(dark=True, children=['mdi-alarm'])]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Avatar(
                tile=True,
                color='blue',
                children=[v.Icon(dark=True, children=['mdi-alarm'])]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-avatar
                        tile
                        color="blue"
                    >
                        <v-icon dark>
                            mdi-alarm
                        </v-icon>
                    </v-avatar>
                </div>
            </template>

Using images
------------

The :py:class:`Avatar <ipyvuetify.Avatar>` default chikdren will accept the :py:class:`Icon <ipyvuetify.Icon>`
component, an image, or text. Mix and match these with other props to create something unique.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Row(
                justify='space-around',
                children=[
                    v.Avatar(
                        color='indigo',
                        children=[v.Icon(dark=True, children=['mdi-account-circle'])]
                    ),
                    v.Avatar(
                        children=[
                            v.Img(
                                src='https://cdn.vuetifyjs.com/images/john.jpg',
                                alt='John',
                                width=40,
                                height=40
                            )
                        ]
                    ),
                    v.Avatar(
                        color='red',
                        children=[v.Html(tag='span', class_='white--text text-h5', children=['CJ'])]
                    ),
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Row(
                justify='space-around',
                children=[
                    v.Avatar(
                        color='indigo',
                        children=[v.Icon(dark=True, children=['mdi-account-circle'])]
                    ),
                    v.Avatar(
                        children=[
                            v.Html(
                                tag='img',
                                attributes={
                                    'src': 'https://cdn.vuetifyjs.com/images/john.jpg',
                                    'alt': 'John'
                                }
                            )
                        ]
                    ),
                    v.Avatar(
                        color='red',
                        children=[v.Html(tag='span', class_='white--text text-h5', children=['CJ'])]
                    ),
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-row justify="space-around">
                    <v-avatar color="indigo">
                        <v-icon dark>
                            mdi-account-circle
                        </v-icon>
                    </v-avatar>

                    <v-avatar>
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                    </v-avatar>

                    <v-avatar color="red">
                        <span class="white--text text-h5">CJ</span>
                    </v-avatar>
                </v-row>
            </template>

Advanced usage
--------------

Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.

.. tab-set::

.. tab-item:: Rendered

    .. jupyter-execute::
        :hide-code:

        import ipyvuetify as v

        messages = [
            {
                'avatar': 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                'name': 'John Leider',
                'title': 'Welcome to Vuetify!',
                'excerpt': 'Thank you for joining our community...',
                'new': None,
                'total': None,
                'color': None,
                'icon': None
            },
            {
                'color': 'red',
                'icon': 'mdi-account-multiple',
                'name': 'Social',
                'new': 1,
                'total': 3,
                'title': 'Twitter',
                'excerpt': None,
                'avatar': None
            },
            {
                'color': 'teal',
                'icon': 'mdi-tag',
                'name': 'Promos',
                'new': 2,
                'total': 4,
                'title': 'Shop your way',
                'excerpt': 'New deals available, Join Today',
                'avatar': None
            },
        ]

        lorem = (
            'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico '
            'iuvaret debitis mel an, et cum zril menandri.'
        )

        panels = []
        for i, message in enumerate(messages):
            avatar_content = []
            if message['avatar']:
                avatar_content.append(
                    v.Img(
                        alt='Avatar',
                        src=message['avatar']
                    )
                )
            else:
                avatar_content.append(
                    v.Icon(
                        color=message['color'],
                        children=[message['icon']]
                    )
                )

            header_cols = [
                v.Col(
                    cols=4,
                    sm=2,
                    md=1,
                    children=[
                        v.Avatar(size=36, children=avatar_content)
                    ]
                ),
                v.Col(
                    class_='hidden-xs-only',
                    sm=5,
                    md=3,
                    children=[
                        v.Html(tag='strong', children=[message['name']]),
                        v.Html(
                            tag='span',
                            class_='grey--text',
                            children=[f" ({message['total']})" if 'total' in message else '']
                        )
                    ]
                ),
                v.Col(
                    class_='text-no-wrap',
                    cols=5,
                    sm=3,
                    children=[
                        v.Chip(
                            color=f"{message['color']} lighten-4",
                            class_='ml-0 mr-2 black--text',
                            label=True,
                            small=True,
                            children=[f"{message['new'] if 'new' in message else ''} new"]
                        ),
                        v.Html(tag='strong', children=[message['title']])
                    ]
                ),
            ]

            if message['excerpt']:
                header_cols.append(
                    v.Col(
                        class_='grey--text text-truncate hidden-sm-and-down',
                        children=[f"— {message['excerpt']}"]
                    )
                )

            panels.append(
                v.ExpansionPanel(
                    hide_actions=True,
                    children=[
                        v.ExpansionPanelHeader(children=[
                            v.Row(
                                align='center',
                                class_='spacer',
                                no_gutters=True,
                                children=header_cols
                            )
                        ]),
                        v.ExpansionPanelContent(children=[
                            v.Divider(),
                            v.CardText(children=[lorem])
                        ])
                    ]
                )
            )

        v.Container(
            fluid=True,
            children=[
                v.Row(
                    justify='center',
                    children=[
                        v.Subheader(children=['Today']),
                        v.ExpansionPanels(popout=True, children=panels)
                    ]
                )
            ]
        )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-container fluid>
                    <v-row justify="center">
                        <v-subheader>Today</v-subheader>

                        <v-expansion-panels popout>
                            <v-expansion-panel
                                v-for="(message, i) in messages"
                                :key="i"
                                hide-actions
                            >
                                <v-expansion-panel-header>
                                    <v-row
                                        align="center"
                                        class="spacer"
                                        no-gutters
                                    >
                                        <v-col
                                            cols="4"
                                            sm="2"
                                            md="1"
                                        >
                                            <v-avatar size="36px">
                                                <img
                                                    v-if="message.avatar"
                                                    alt="Avatar"
                                                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                >
                                                <v-icon
                                                    v-else
                                                    :color="message.color"
                                                    v-text="message.icon"
                                                ></v-icon>
                                            </v-avatar>
                                        </v-col>

                                        <v-col
                                            class="hidden-xs-only"
                                            sm="5"
                                            md="3"
                                        >
                                            <strong v-html="message.name"></strong>
                                            <span
                                                v-if="message.total"
                                                class="grey--text"
                                            >
                                                &nbsp;({{ message.total }})
                                            </span>
                                        </v-col>

                                        <v-col
                                            class="text-no-wrap"
                                            cols="5"
                                            sm="3"
                                        >
                                            <v-chip
                                                v-if="message.new"
                                                :color="`${message.color} lighten-4`"
                                                class="ml-0 mr-2 black--text"
                                                label
                                                small
                                            >
                                                {{ message.new }} new
                                            </v-chip>
                                            <strong v-html="message.title"></strong>
                                        </v-col>

                                        <v-col
                                            v-if="message.excerpt"
                                            class="grey--text text-truncate hidden-sm-and-down"
                                        >
                                            &mdash;
                                            {{ message.excerpt }}
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-header>

                                <v-expansion-panel-content>
                                    <v-divider></v-divider>
                                    <v-card-text v-text="lorem"></v-card-text>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                </v-container>
            </template>

            <script>
                export default {
                    data: () => ({
                        messages: [
                            {
                                avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                                name: 'John Leider',
                                title: 'Welcome to Vuetify!',
                                excerpt: 'Thank you for joining our community...',
                            },
                            {
                                color: 'red',
                                icon: 'mdi-account-multiple',
                                name: 'Social',
                                new: 1,
                                total: 3,
                                title: 'Twitter',
                            },
                            {
                                color: 'teal',
                                icon: 'mdi-tag',
                                name: 'Promos',
                                new: 2,
                                total: 4,
                                title: 'Shop your way',
                                excerpt: 'New deals available, Join Today',
                            },
                    ],
                    lorem: 'Lorem ipsum dolor sit amet...',
                }),
            }
        </script>

Profile Card
------------

Using the ``tile`` prop, we can create a sleek hard-lined profile card.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto',
                max_width=434,
                tile=True,
                children=[
                    v.Img(
                        height='100%',
                        src='https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
                        children=[
                            v.Row(
                                align='end',
                                class_='fill-height',
                                children=[
                                    v.Col(
                                        align_self='start',
                                        class_='pa-0',
                                        cols=12,
                                        children=[
                                            v.Avatar(
                                                class_='profile',
                                                color='grey',
                                                size=164,
                                                tile=True,
                                                children=[
                                                    v.Img(src='https://cdn.vuetifyjs.com/images/profiles/marcus.jpg')
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        class_='py-0',
                                        children=[
                                            v.ListItem(
                                                color='rgba(0, 0, 0, .4)',
                                                dark=True,
                                                children=[
                                                    v.ListItemContent(children=[
                                                        v.ListItemTitle(
                                                            class_='text-h6',
                                                            children=['Marcus Obrien']
                                                        ),
                                                        v.ListItemSubtitle(
                                                            children=['Network Engineer']
                                                        )
                                                    ])
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

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto',
                max_width=434,
                tile=True,
                children=[
                    v.Img(
                        height='100%',
                        src='https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
                        children=[
                            v.Row(
                                align='end',
                                class_='fill-height',
                                children=[
                                    v.Col(
                                        align_self='start',
                                        class_='pa-0',
                                        cols=12,
                                        children=[
                                            v.Avatar(
                                                class_='profile',
                                                color='grey',
                                                size=164,
                                                tile=True,
                                                children=[
                                                    v.Img(src='https://cdn.vuetifyjs.com/images/profiles/marcus.jpg')
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        class_='py-0',
                                        children=[
                                            v.ListItem(
                                                color='rgba(0, 0, 0, .4)',
                                                dark=True,
                                                children=[
                                                    v.ListItemContent(children=[
                                                        v.ListItemTitle(
                                                            class_='text-h6',
                                                            children=['Marcus Obrien']
                                                        ),
                                                        v.ListItemSubtitle(
                                                            children=['Network Engineer']
                                                        )
                                                    ])
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

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="mx-auto"
                    max-width="434"
                    tile
                >
                    <v-img
                    height="100%"
                    src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                    >
                        <v-row
                            align="end"
                            class="fill-height"
                        >
                            <v-col
                            align-self="start"
                            class="pa-0"
                            cols="12"
                            >
                                <v-avatar
                                    class="profile"
                                    color="grey"
                                    size="164"
                                    tile
                                >
                                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col class="py-0">
                                <v-list-item
                                    color="rgba(0, 0, 0, .4)"
                                    dark
                                >
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6">
                                            Marcus Obrien
                                        </v-list-item-title>
                                        <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-img>
                </v-card>
            </template>
