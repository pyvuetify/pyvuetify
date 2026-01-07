Card
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Card documentation
    <https://v2.vuetifyjs.com/en/components/cards/>`__. All examples have been converted
    to ipyvuetify syntax.

The :py:class:`Card <ipyvuetify.Card>` component is a versatile component that can
be used for anything from a panel to a static image. The card component has numerous
helper components to make markup as easy as possible. Components that have no listed
options use Vue's functional component option for faster rendering and serve as markup
sugar to make building easier.

.. api::

    - :py:class:`ipyvuetify.Card`
    - :py:class:`ipyvuetify.CardTitle`
    - :py:class:`ipyvuetify.CardSubtitle`
    - :py:class:`ipyvuetify.CardText`
    - :py:class:`ipyvuetify.CardActions`

Usage
-----

A card has 4 basic components: :py:class:`CardTitle <ipyvuetify.CardTitle>`,
:py:class:`CardSubtitle <ipyvuetify.CardSubtitle>`,
:py:class:`CardText <ipyvuetify.CardText>` and
:py:class:`CardActions <ipyvuetify.CardActions>`.

.. jupyter-execute::

    import ipyvuetify as v

    v.Card(children=[
        v.CardTitle(children=['Card title']),
        v.CardSubtitle(children=['Subtitle text']),
        v.CardText(children=['Greyhound divisively hello coldly wonderfully marginally far upon excluding.']),
        v.CardActions(children=[
            v.Btn(text=True, color='primary', children=['Action 1']),
            v.Btn(text=True, color='primary', children=['Action 2']),
        ])
    ])

Functional Components
---------------------

``CardActions``
^^^^^^^^^^^^^^^

The container used for placing **actions** for a card, such as :py:class:`Btn <ipyvuetify.Btn>`
or :py:class:`Menu <ipyvuetify.Menu>`. Also applies special margin to buttons so that
they properly line up with other card content areas.

``CardSubtitle``
^^^^^^^^^^^^^^^^

Provides a default **font-size** and **padding** for card subtitles. Font-size can be
overwritten with `typography classes <https://v2.vuetifyjs.com/en/styles/text-and-typography/>`__.

``CardText``
^^^^^^^^^^^^

Primarily used for **text content** in a card. Applies padding for text, reduces its
font-size to .875rem.

``CardTitle``
^^^^^^^^^^^^^

Provides a default **font-size** and **padding** for card titles. Font-size can be
overwritten with `typography classes <https://v2.vuetifyjs.com/en/styles/typography/>`__.

Loading
-------

Cards can be set to a loading state when processing a user action. This disables
further actions and provides visual feedback with an indeterminate
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=374,
                loading=True,
                children=[
                    v.Img(height="250", src="https://cdn.vuetifyjs.com/images/cards/cooking.png"),
                    v.CardTitle(children=['Cafe Badilico']),
                    v.CardText(children=[
                        v.Container(class_="pa-0 flex", children=[
                            v.Rating(value=4.5, color="amber", dense=True, half_increments=True, readonly=True, size=14, class_="d-inline-flex"),
                            v.Html(tag='div', class_='grey--text mb-2 d-inline-flex', children=['4.5 (413)']),
                        ]),
                        v.Html(tag='div', children=['$ • Italian, Cafe'], class_="my-2 text-subtitle-1"),
                        v.Html(tag='div', children=['Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.']),
                    ]),
                    v.Divider(class_='mx-4'),
                    v.CardTitle(children=["Tonight's availability"]),
                    v.CardText(children=[
                        v.ChipGroup(
                            v_model="selection",
                            active_class="deep-purple accent-4 white--text",
                            children = [
                                v.Chip(children=['5:30PM'], active=True),
                                v.Chip(children=['7:30PM']),
                                v.Chip(children=['8:00PM']),
                                v.Chip(children=['9:00PM']),
                            ],
                        ),
                    ]),
                    v.CardActions(children=[
                        v.Btn(
                            color='deep-purple lighten-2',
                            text=True,
                            children=['Reserve']
                        ),
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=374,
                loading=True,
                children=[
                    v.Img(height="250", src="https://cdn.vuetifyjs.com/images/cards/cooking.png"),
                    v.CardTitle(children=['Cafe Badilico']),
                    v.CardText(children=[
                        v.Container(class_="pa-0 flex", children=[
                            v.Rating(value=4.5, color="amber", dense=True, half_increments=True, readonly=True, size=14, class_="d-inline-flex"),
                            v.Html(tag='div', class_='grey--text mb-2 d-inline-flex', children=['4.5 (413)']),
                        ]),
                        v.Html(tag='div', children=['$ • Italian, Cafe'], class_="my-2 text-subtitle-1"),
                        v.Html(tag='div', children=['Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.']),
                    ]),
                    v.Divider(class_='mx-4'),
                    v.CardTitle(children=["Tonight's availability"]),
                    v.CardText(children=[
                        v.ChipGroup(
                            v_model="selection",
                            active_class="deep-purple accent-4 white--text",
                            children = [
                                v.Chip(children=['5:30PM'], active=True),
                                v.Chip(children=['7:30PM']),
                                v.Chip(children=['8:00PM']),
                                v.Chip(children=['9:00PM']),
                            ],
                        ),
                    ]),
                    v.CardActions(children=[
                        v.Btn(
                            color='deep-purple lighten-2',
                            text=True,
                            children=['Reserve']
                        ),
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                >
                    <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                    </template>

                    <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                            ></v-rating>

                            <div class="grey--text ms-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            $ • Italian, Cafe
                        </div>

                        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Tonight's availability</v-card-title>

                    <v-card-text>
                        <v-chip-group
                            v-model="selection"
                            active-class="deep-purple accent-4 white--text"
                            column
                        >
                            <v-chip>5:30PM</v-chip>
                            <v-chip>7:30PM</v-chip>
                            <v-chip>8:00PM</v-chip>
                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            color="deep-purple lighten-2"
                            text
                            @click="reserve"
                        >
                            Reserve
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>

Outlined
--------

An ``outlined`` card has 0 elevation and contains a soft border.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=344,
                outlined=True,
                children=[
                    v.ListItem(
                        three_line=True,
                        children=[
                            v.ListItemContent(
                                children=[
                                    v.Html(tag='div', class_='text-overline mb-4', children=['OVERLINE']),
                                    v.ListItemTitle(class_='text-h5 mb-1', children=['Headline 5']),
                                    v.ListItemSubtitle(children=['Greyhound divisely hello coldly fonwderfully']),
                                ]
                            ),
                            v.ListItemAvatar(
                                tile=True,
                                size=80,
                                color='grey',
                            ),
                        ]
                    ),
                    v.CardActions(
                        children=[
                            v.Btn(
                                outlined=True,
                                rounded=True,
                                text=True,
                                children=['Button']
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=344,
                outlined=True,
                children=[
                    v.ListItem(
                        three_line=True,
                        children=[
                            v.ListItemContent(
                                children=[
                                    v.Html(tag='div', class_='text-overline mb-4', children=['OVERLINE']),
                                    v.ListItemTitle(class_='text-h5 mb-1', children=['Headline 5']),
                                    v.ListItemSubtitle(children=['Greyhound divisely hello coldly fonwderfully']),
                                ]
                            ),
                            v.ListItemAvatar(
                                tile=True,
                                size=80,
                                color='grey',
                            ),
                        ]
                    ),
                    v.CardActions(
                        children=[
                            v.Btn(
                                outlined=True,
                                rounded=True,
                                text=True,
                                children=['Button']
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
                    max-width="344"
                    outlined
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="text-overline mb-4">
                                OVERLINE
                            </div>
                            <v-list-item-title class="text-h5 mb-1">
                                Headline 5
                            </v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn
                            outlined
                            rounded
                            text
                        >
                            Button
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>

Card Reveal
-----------

Using :py:class:`ExpandTransition <ipyvuetify.ExpandTransition>` and a ``click``
event you can have a card that reveals more information once the button is clicked,
activating the hidden card to be revealed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=344,
                children=[
                    v.CardTitle(children=['Word of the Day']),
                    v.CardSubtitle(children=['el·ee·mos·y·nar·y']),
                    v.CardActions(children=[
                        v.Btn(text=True, children=['Learn More'])
                    ]),
                    v.ExpandTransition(children=[
                        v.Card(
                            class_='transition-fast-in-fast-out v-card--reveal',
                            style_='height: 100%;',
                            children=[
                                v.CardText(class_='pb-0', children=[
                                    v.Html(tag='p', class_='text-h4 text--primary', children=['adjective']),
                                    v.Html(tag='p', children=['relating to or dependent on charity; charitable.']),
                                    v.Html(tag='p', children=['"an eleemosynary educational institution."']),
                                ]),
                                v.CardActions(class_='pt-0', children=[
                                    v.Btn(text=True, color='teal accent-4', children=['Close'])
                                ])
                            ]
                        )
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=344,
                children=[
                    v.CardTitle(children=['Word of the Day']),
                    v.CardSubtitle(children=['el·ee·mos·y·nar·y']),
                    v.CardActions(children=[
                        v.Btn(text=True, children=['Learn More'])
                    ]),
                    v.ExpandTransition(children=[
                        v.Card(
                            class_='transition-fast-in-fast-out v-card--reveal',
                            style_='height: 100%;',
                            children=[
                                v.CardText(class_='pb-0', children=[
                                    v.Html(tag='p', class_='text-h4 text--primary', children=['adjective']),
                                    v.Html(tag='p', children=['relating to or dependent on charity; charitable.']),
                                    v.Html(tag='p', children=['"an eleemosynary educational institution."']),
                                ]),
                                v.CardActions(class_='pt-0', children=[
                                    v.Btn(text=True, color='teal accent-4', children=['Close'])
                                ])
                            ]
                        )
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="mx-auto"
                    max-width="344"
                >
                    <v-card-text>
                        <div>Word of the Day</div>
                        <p class="text-h4 text--primary">
                            el·ee·mos·y·nar·y
                        </p>
                        <p>adjective</p>
                        <div class="text--primary">
                            relating to or dependent on charity; charitable.<br>
                            "an eleemosynary educational institution."
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            text
                            color="teal accent-4"
                            @click="reveal = true"
                        >
                            Learn More
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <v-card
                            v-if="reveal"
                            class="transition-fast-in-fast-out v-card--reveal"
                            style="height: 100%;"
                        >
                            <v-card-text class="pb-0">
                                <p class="text-h4 text--primary">
                                    Origin
                                </p>
                                <p>
                                    late 16th century (as a noun denoting a place where alms were distributed):
                                    from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’,
                                    from Greek eleēmosunē ‘compassion’
                                </p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                                <v-btn
                                    text
                                    color="teal accent-4"
                                    @click="reveal = false"
                                >
                                    Close
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-expand-transition>
                </v-card>
            </template>

Content Wrapping
----------------

The ``v-card`` component is useful for wrapping content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(justify='space-around', children=[
                    v.Card(
                        width=400,
                        children=[
                            v.Img(
                                height='200px',
                                src='https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
                                children=[
                                    v.AppBar(
                                        flat=True,
                                        color='rgba(0, 0, 0, 0)',
                                        children=[
                                            v.AppBarNavIcon(color='white'),
                                            v.ToolbarTitle(class_='text-h6 white--text pl-0', children=['Messages']),
                                            v.Spacer(),
                                            v.Btn(
                                                color='white',
                                                icon=True,
                                                children=[
                                                    v.Icon(children=['mdi-dots-vertical'])
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.CardText(children=[
                                v.Html(tag='div', class_='font-weight-bold ml-8 mb-2', children=['Today']),
                                v.Timeline(
                                    align_top=True,
                                    dense=True,
                                    children=[
                                        v.TimelineItem(
                                            color=message['color'],
                                            small=True,
                                            children=[
                                                v.Html(tag='div', children=[
                                                    v.Html(tag='div', class_='font-weight-normal', children=[
                                                        v.Html(tag='strong', children=[message['from']]),
                                                        f" @{message['time']}",
                                                    ]),
                                                    v.Html(tag='div', children=[message['message']])
                                                ])
                                            ]
                                        ) for message in [
                                            {"from": "You", "message": "Sure, I'll see you later.", "time": '10:42am', "color": 'deep-purple lighten-1'},
                                            {"from": "John Doe", "message": "Yeah, sure. Does 1:00pm work?", "time": '10:37am', "color": 'green'},
                                            {"from": "You", "message": "Did you still want to grab lunch today?", "time": '9:47am', "color": 'deep-purple lighten-1'},
                                        ]
                                    ]
                                )
                            ])
                        ]
                    )
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(justify='space-around', children=[
                    v.Card(
                        width=400,
                        children=[
                            v.Img(
                                height='200px',
                                src='https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
                                children=[
                                    v.AppBar(
                                        flat=True,
                                        color='rgba(0, 0, 0, 0)',
                                        children=[
                                            v.AppBarNavIcon(color='white'),
                                            v.ToolbarTitle(class_='text-h6 white--text pl-0', children=['Messages']),
                                            v.Spacer(),
                                            v.Btn(
                                                color='white',
                                                icon=True,
                                                children=[
                                                    v.Icon(children=['mdi-dots-vertical'])
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.CardText(children=[
                                v.Html(tag='div', class_='font-weight-bold ml-8 mb-2', children=['Today']),
                                v.Timeline(
                                    align_top=True,
                                    dense=True,
                                    children=[
                                        v.TimelineItem(
                                            color=message['color'],
                                            small=True,
                                            children=[
                                                v.Html(tag='div', children=[
                                                    v.Html(tag='div', class_='font-weight-normal', children=[
                                                        v.Html(tag='strong', children=[message['from']]),
                                                        f" @{message['time']}",
                                                    ]),
                                                    v.Html(tag='div', children=[message['message']])
                                                ])
                                            ]
                                        ) for message in [
                                            {"from": "You", "message": "Sure, I'll see you later.", "time": '10:42am', "color": 'deep-purple lighten-1'},
                                            {"from": "John Doe", "message": "Yeah, sure. Does 1:00pm work?", "time": '10:37am', "color": 'green'},
                                            {"from": "You", "message": "Did you still want to grab lunch today?", "time": '9:47am', "color": 'deep-purple lighten-1'},
                                        ]
                                    ]
                                )
                            ])
                        ]
                    )
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-container>
                    <v-row justify="space-around">
                        <v-card width="400">
                            <v-img
                                height="200px"
                                src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                            >
                                <v-app-bar
                                    flat
                                    color="rgba(0, 0, 0, 0)"
                                >
                                    <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

                                    <v-toolbar-title class="text-h6 white--text pl-0">
                                        Messages
                                    </v-toolbar-title>

                                    <v-spacer></v-spacer>

                                    <v-btn
                                        color="white"
                                        icon
                                    >
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </v-app-bar>
                            </v-img>

                            <v-card-text>
                                <div class="font-weight-bold ml-8 mb-2">
                                    Today
                                </div>

                                <v-timeline
                                    align-top
                                    dense
                                >
                                    <v-timeline-item
                                        v-for="message in messages"
                                        :key="message.time"
                                        :color="message.color"
                                        small
                                    >
                                        <div>
                                            <div class="font-weight-normal">
                                                <strong>{{ message.from }}</strong> @{{ message.time }}
                                            </div>
                                            <div>{{ message.message }}</div>
                                        </div>
                                    </v-timeline-item>
                                </v-timeline>
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-container>
            </template>

Custom Actions
--------------

With a simple conditional, you can easily add supplementary text that is hidden until opened.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=344,
                children=[
                    v.Img(
                        src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                        height='200px'
                    ),
                    v.CardTitle(children=['Top western road trips']),
                    v.CardSubtitle(children=['1,000 miles of wonder']),
                    v.CardActions(children=[
                        v.Btn(
                            color='orange lighten-2',
                            text=True,
                            children=['Explore']
                        ),
                        v.Spacer(),
                        v.Btn(
                            icon=True,
                            children=[
                                v.Icon(children=['mdi-chevron-down'])
                            ]
                        )
                    ]),
                    v.ExpandTransition(children=[
                        v.Divider(),
                        v.CardText(children=[
                            "I'm a thing. But, like most politicians, he promised more than he could deliver. "
                            "You won't have time for sleeping, soldier, not with all the bed making you'll be doing. "
                            "Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! "
                            "You're going to do his laundry? I've got to find a way to escape."
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=344,
                children=[
                    v.Img(
                        src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                        height='200px'
                    ),
                    v.CardTitle(children=['Top western road trips']),
                    v.CardSubtitle(children=['1,000 miles of wonder']),
                    v.CardActions(children=[
                        v.Btn(
                            color='orange lighten-2',
                            text=True,
                            children=['Explore']
                        ),
                        v.Spacer(),
                        v.Btn(
                            icon=True,
                            children=[
                                v.Icon(children=['mdi-chevron-down'])
                            ]
                        )
                    ]),
                    v.ExpandTransition(children=[
                        v.Divider(),
                        v.CardText(children=[
                            "I'm a thing. But, like most politicians, he promised more than he could deliver. "
                            "You won't have time for sleeping, soldier, not with all the bed making you'll be doing. "
                            "Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! "
                            "You're going to do his laundry? I've got to find a way to escape."
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="mx-auto"
                    max-width="344"
                >
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200px"
                    ></v-img>

                    <v-card-title>
                        Top western road trips
                    </v-card-title>

                    <v-card-subtitle>
                        1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn
                            color="orange lighten-2"
                            text
                        >
                            Explore
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                            icon
                            @click="show = !show"
                        >
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver.
                                You won't have time for sleeping, soldier, not with all the bed making you'll be doing.
                                Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk!
                                You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </template>

Grids
-----

Using grids, you can create beautiful layouts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            data = [
                {"title": "Pre-fab homes", "src": "https://cdn.vuetifyjs.com/images/cards/house.jpg", "flex": 12 },
                {"title": "Favorite road trips", "src": "https://cdn.vuetifyjs.com/images/cards/road.jpg", "flex": 6 },
                {"title": "Best airlines", "src": "https://cdn.vuetifyjs.com/images/cards/plane.jpg", "flex": 6 },
            ]

            v.Card(
                class_='mx-auto my-2',
                max_width=500,
                children=[
                    v.SystemBar(
                        color='indigo darken-2',
                        dark=True,
                        children=[
                            v.Spacer(),
                            v.Icon(children=['mdi-window-minimize']),
                            v.Icon(children=['mdi-window-maximize']),
                            v.Icon(children=['mdi-close']),
                        ]
                    ),
                    v.Toolbar(
                        color='indigo',
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Discover']),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=['mdi-magnify'])
                                ]
                            )
                        ]
                    ),
                    v.Container(fluid=True, children=[
                        v.Row(dense=True, children=[
                            v.Col(
                                cols=card['flex'],
                                children=[
                                    v.Card(children=[
                                        v.Img(
                                            src=card['src'],
                                            class_='white--text align-end',
                                            gradient='to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)',
                                            height='200px',
                                            children=[
                                                v.CardTitle(v_text=card['title'])
                                            ]
                                        ),
                                        v.CardActions(children=[
                                            v.Spacer(),
                                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                                            v.Btn(icon=True, children=[v.Icon(children=['mdi-bookmark'])]),
                                            v.Btn(icon=True, children=[v.Icon(children=['mdi-share-variant'])]),
                                        ])
                                    ])
                                ]
                            ) for card in data
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            data = [
                {"title": "Pre-fab homes", "src": "https://cdn.vuetifyjs.com/images/cards/house.jpg", "flex": 12 },
                {"title": "Favorite road trips", "src": "https://cdn.vuetifyjs.com/images/cards/road.jpg", "flex": 6 },
                {"title": "Best airlines", "src": "https://cdn.vuetifyjs.com/images/cards/plane.jpg", "flex": 6 },
            ]

            v.Card(
                class_='mx-auto my-2',
                max_width=500,
                children=[
                    v.SystemBar(
                        color='indigo darken-2',
                        dark=True,
                        children=[
                            v.Spacer(),
                            v.Icon(children=['mdi-window-minimize']),
                            v.Icon(children=['mdi-window-maximize']),
                            v.Icon(children=['mdi-close']),
                        ]
                    ),
                    v.Toolbar(
                        color='indigo',
                        dark=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Discover']),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=['mdi-magnify'])
                                ]
                            )
                        ]
                    ),
                    v.Container(fluid=True, children=[
                        v.Row(dense=True, children=[
                            v.Col(
                                cols=card['flex'],
                                children=[
                                    v.Card(children=[
                                        v.Img(
                                            src=card['src'],
                                            class_='white--text align-end',
                                            gradient='to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)',
                                            height='200px',
                                            children=[
                                                v.CardTitle(v_text=card['title'])
                                            ]
                                        ),
                                        v.CardActions(children=[
                                            v.Spacer(),
                                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                                            v.Btn(icon=True, children=[v.Icon(children=['mdi-bookmark'])]),
                                            v.Btn(icon=True, children=[v.Icon(children=['mdi-share-variant'])]),
                                        ])
                                    ])
                                ]
                            ) for card in data
                        ])
                    ])
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="mx-auto"
                    max-width="500"
                >
                    <v-system-bar
                        color="indigo darken-2"
                        dark
                    >
                        <v-spacer></v-spacer>

                        <v-icon>mdi-window-minimize</v-icon>

                        <v-icon>mdi-window-maximize</v-icon>

                        <v-icon>mdi-close</v-icon>
                    </v-system-bar>

                    <v-toolbar
                        color="indigo"
                        dark
                    >
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>

                        <v-toolbar-title>Discover</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-container fluid>
                        <v-row dense>
                            <v-col
                                v-for="card in cards"
                                :key="card.title"
                                :cols="card.flex"
                            >
                                <v-card>
                                    <v-img
                                        :src="card.src"
                                        class="white--text align-end"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                        height="200px"
                                    >
                                        <v-card-title v-text="card.title"></v-card-title>
                                    </v-img>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn icon>
                                            <v-icon>mdi-heart</v-icon>
                                        </v-btn>

                                        <v-btn icon>
                                            <v-icon>mdi-bookmark</v-icon>
                                        </v-btn>

                                        <v-btn icon>
                                            <v-icon>mdi-share-variant</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </template>

Horizontal Cards
----------------

Using :py:class:`Col <ipyvuetify.Col>`, you can create customized horizontal cards.
Use the ``contain`` property to shrink the :py:class:`Img <ipyvuetify.Img>` to fit inside the container,
instead of covering.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            items = [
                {
                    "color": '#1F7087',
                    "src": 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    "title": 'Supermodel',
                    "artist": 'Foster the People',
                },
                {
                    "color": '#952175',
                    "src": 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    "title": 'Halcyon Days',
                    "artist": 'Ellie Goulding',
                },
            ]

            v.Card(
                class_='mx-auto my-2',
                max_width=400,
                children=[
                    v.SystemBar(
                        color='pink darken-2',
                        dark=True,
                        children=[
                            v.Spacer(),
                            v.Icon(children=['mdi-window-minimize']),
                            v.Icon(children=['mdi-window-maximize']),
                            v.Icon(children=['mdi-close']),
                        ]
                    ),
                    v.AppBar(
                        dark=True,
                        color='pink',
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['My Music']),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=['mdi-magnify'])
                                ]
                            )
                        ]
                    ),
                    v.Container(children=[
                        v.Row(dense=True, children=[
                            v.Col(
                                cols=12,
                                children=[
                                    v.Card(
                                        color='#385F73',
                                        dark=True,
                                        children=[
                                            v.CardTitle(class_='text-h5', children=['Unlimited music now']),
                                            v.CardSubtitle(children=[
                                                'Listen to your favorite artists and albums whenever and wherever, '
                                                'online and offline.'
                                            ]),
                                            v.CardActions(children=[
                                                v.Btn(text=True, children=['Listen Now'])
                                            ])
                                        ]
                                    )
                                ]
                            ),
                            *[
                                v.Col(
                                    cols=12,
                                    children=[
                                        v.Card(
                                            color=item['color'],
                                            dark=True,
                                            children=[
                                                v.Html(tag='div', class_='d-flex flex-no-wrap justify-space-between', children=[
                                                    v.Html(tag='div', children=[
                                                        v.CardTitle(class_='text-h5', children=[item['title']]),
                                                        v.CardSubtitle(children=[item['artist']]),
                                                        v.CardActions(children=[
                                                            v.Btn(
                                                                class_='ml-2 mt-3' if item['artist'] == 'Ellie Goulding' else 'ml-2 mt-5',
                                                                fab=True if item['artist'] == 'Ellie Goulding' else False,
                                                                icon=True if item['artist'] == 'Ellie Goulding' else False,
                                                                height='40px' if item['artist'] == 'Ellie Goulding' else None,
                                                                right=True if item['artist'] == 'Ellie Goulding' else False,
                                                                width='40px' if item['artist'] == 'Ellie Goulding' else None,
                                                                outlined=False if item['artist'] == 'Ellie Goulding' else True,
                                                                rounded=False if item['artist'] == 'Ellie Goulding' else True,
                                                                small=False if item['artist'] == 'Ellie Goulding' else True,
                                                                children=[
                                                                    v.Icon(children=['mdi-play']) if item['artist'] == 'Ellie Goulding' else 'START RADIO'
                                                                ]
                                                            )
                                                        ]),
                                                    ]),
                                                    v.Avatar(
                                                        class_='ma-3',
                                                        size='125',
                                                        tile=True,
                                                        children=[
                                                            v.Img(src=item['src'])
                                                        ]
                                                    )
                                                ])
                                            ]
                                        )
                                    ]
                                ) for item in items
                            ]
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    max-width="400"
                    class="mx-auto"
                >
                    <v-system-bar
                        color="pink darken-2"
                        dark
                    >
                        <v-spacer></v-spacer>
                        <v-icon>mdi-window-minimize</v-icon>
                        <v-icon>mdi-window-maximize</v-icon>
                        <v-icon>mdi-close</v-icon>
                    </v-system-bar>

                    <v-app-bar
                        dark
                        color="pink"
                    >
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>

                        <v-toolbar-title>My Music</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </v-app-bar>

                    <v-container>
                        <v-row dense>
                            <v-col cols="12">
                                <v-card
                                    color="#385F73"
                                    dark
                                >
                                    <v-card-title class="text-h5">
                                        Unlimited music now
                                    </v-card-title>

                                    <v-card-subtitle>
                                        Listen to your favorite artists and albums whenever and wherever,
                                        online and offline.
                                    </v-card-subtitle>

                                    <v-card-actions>
                                        <v-btn text>
                                            Listen Now
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>

                            <v-col
                                v-for="(item, i) in items"
                                :key="i"
                                cols="12"
                            >
                                <v-card
                                    :color="item.color"
                                    dark
                                >
                                    <div class="d-flex flex-no-wrap justify-space-between">
                                        <div>
                                            <v-card-title
                                                class="text-h5"
                                                v-text="item.title"
                                            ></v-card-title>

                                            <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                                            <v-card-actions>
                                                <v-btn
                                                    v-if="item.artist === 'Ellie Goulding'"
                                                    class="ml-2 mt-3"
                                                    fab
                                                    icon
                                                    height="40px"
                                                    right
                                                    width="40px"
                                                >
                                                    <v-icon>mdi-play</v-icon>
                                                </v-btn>

                                                <v-btn
                                                    v-else
                                                    class="ml-2 mt-5"
                                                    outlined
                                                    rounded
                                                    small
                                                >
                                                    START RADIO
                                                </v-btn>
                                            </v-card-actions>
                                        </div>

                                        <v-avatar
                                            class="ma-3"
                                            size="125"
                                            tile
                                        >
                                            <v-img :src="item.src"></v-img>
                                        </v-avatar>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </template>

Information Card
----------------

Cards are entry points to more detailed information. To keep things concise, ensure to limit the number of actions the user can take.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                min_width=500,
                children=[
                    v.CardText(children=[
                        v.Html(tag='div', children=['Word of the Day']),
                        v.Html(tag='h3', class_='text--primary my-2', children=['be•nev•o•lent']),
                        v.Html(tag='p', children=['adjective']),
                        v.Html(tag='div', class_='text--primary', children=[
                            'well meaning and kindly.', v.Html(tag='br'),
                            '"a benevolent smile"'
                        ])
                    ]),
                    v.CardActions(children=[
                        v.Btn(
                            text=True,
                            color='deep-purple accent-4',
                            children=['Learn More']
                        )
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                min_width=500,
                children=[
                    v.CardText(children=[
                        v.Html(tag='div', children=['Word of the Day']),
                        v.Html(tag='h3', class_='text--primary my-2', children=['be•nev•o•lent']),
                        v.Html(tag='p', children=['adjective']),
                        v.Html(tag='div', class_='text--primary', children=[
                            'well meaning and kindly.', v.Html(tag='br'),
                            '"a benevolent smile"'
                        ])
                    ]),
                    v.CardActions(children=[
                        v.Btn(
                            text=True,
                            color='deep-purple accent-4',
                            children=['Learn More']
                        )
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="mx-auto"
                    max-width="344"
                >
                    <v-card-text>
                        <div>Word of the Day</div>
                        <p class="text-h4 text--primary">
                            be•nev•o•lent
                        </p>
                        <p>adjective</p>
                        <div class="text--primary">
                            well meaning and kindly.<br>
                            "a benevolent smile"
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            text
                            color="deep-purple accent-4"
                        >
                            Learn More
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>

Media with Text
---------------

Using the layout system, we can add custom text anywhere within the background.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=400,
                children=[
                    v.Img(
                        src='https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                        height='200px',
                        class_='white--text align-end',
                        children=[
                            v.CardTitle(children=['Top 10 Australian beaches'])
                        ]
                    ),
                    v.CardSubtitle(class_='pb-0', children=['Number 10']),
                    v.CardText(class_='text--primary', children=[
                        v.Html(tag='div', children=['Whitehaven Beach']),
                        v.Html(tag='div', children=['Whitsunday Island, Whitsunday Islands'])
                    ]),
                    v.CardActions(children=[
                        v.Btn(
                            color='orange',
                            text=True,
                            children=['Share']
                        ),
                        v.Btn(
                            color='orange',
                            text=True,
                            children=['Explore']
                        )
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                max_width=400,
                children=[
                    v.Img(
                        src='https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                        height='200px',
                        class_='white--text align-end',
                        children=[
                            v.CardTitle(children=['Top 10 Australian beaches'])
                        ]
                    ),
                    v.CardSubtitle(class_='pb-0', children=['Number 10']),
                    v.CardText(class_='text--primary', children=[
                        v.Html(tag='div', children=['Whitehaven Beach']),
                        v.Html(tag='div', children=['Whitsunday Island, Whitsunday Islands'])
                    ]),
                    v.CardActions(children=[
                        v.Btn(
                            color='orange',
                            text=True,
                            children=['Share']
                        ),
                        v.Btn(
                            color='orange',
                            text=True,
                            children=['Explore']
                        )
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="mx-auto"
                    max-width="400"
                >
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        Number 10
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                        <div>Whitehaven Beach</div>

                        <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            color="orange"
                            text
                        >
                            Share
                        </v-btn>

                        <v-btn
                            color="orange"
                            text
                        >
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>

Twitter Card
------------

The :py:class:`Card <ipyvuetify.Card>` component has multiple children components
that help you build complex examples without having to worry about spacing. This
example is comprised of the :py:class:`CardTitle <ipyvuetify.CardTitle>`,
:py:class:`CardText <ipyvuetify.CardText>` and
:py:class:`CardActions <ipyvuetify.CardActions>` components.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                color='#26c6da',
                dark=True,
                max_width=400,
                children=[
                    v.CardTitle(children=[
                        v.Icon(
                            large=True,
                            left=True,
                            children=['mdi-twitter']
                        ),
                        v.Html(tag='span', class_='text-h6 font-weight-light', children=['Twitter'])
                    ]),
                    v.CardText(class_='text-h5 font-weight-bold', children=[
                        '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."'
                    ]),
                    v.CardActions(children=[
                        v.ListItem(class_='flex-grow', children=[
                            v.ListItemAvatar(color='grey darken-3', children=[
                                v.Img(
                                    class_='elevation-6',
                                    alt='',
                                    src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
                                )
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Evan You'])
                            ]),
                            v.Container(
                                class_="flex",
                                children=[
                                    v.Icon(class_='mr-1', children=['mdi-heart']),
                                    v.Html(tag='span', class_='subheading mr-2', children=['256']),
                                    v.Html(tag='span', class_='mr-1', children=['·']),
                                    v.Icon(class_='mr-1', children=['mdi-share-variant']),
                                    v.Html(tag='span', class_='subheading', children=['45']),
                                ]
                            )
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                color='#26c6da',
                dark=True,
                max_width=400,
                children=[
                    v.CardTitle(children=[
                        v.Icon(
                            large=True,
                            left=True,
                            children=['mdi-twitter']
                        ),
                        v.Html(tag='span', class_='text-h6 font-weight-light', children=['Twitter'])
                    ]),
                    v.CardText(class_='text-h5 font-weight-bold', children=[
                        '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."'
                    ]),
                    v.CardActions(children=[
                        v.ListItem(class_='flex-grow', children=[
                            v.ListItemAvatar(color='grey darken-3', children=[
                                v.Img(
                                    class_='elevation-6',
                                    alt='',
                                    src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
                                )
                            ]),
                            v.ListItemContent(children=[
                                v.ListItemTitle(children=['Evan You'])
                            ]),
                            v.Container(
                                class_="flex",
                                children=[
                                    v.Icon(class_='mr-1', children=['mdi-heart']),
                                    v.Html(tag='span', class_='subheading mr-2', children=['256']),
                                    v.Html(tag='span', class_='mr-1', children=['·']),
                                    v.Icon(class_='mr-1', children=['mdi-share-variant']),
                                    v.Html(tag='span', class_='subheading', children=['45']),
                                ]
                            )
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="mx-auto"
                    color="#26c6da"
                    dark
                    max-width="400"
                >
                    <v-card-title>
                        <v-icon
                            large
                            left
                        >
                            mdi-twitter
                        </v-icon>
                        <span class="text-h6 font-weight-light">Twitter</span>
                    </v-card-title>

                    <v-card-text class="text-h5 font-weight-bold">
                        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                    </v-card-text>

                    <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                                <v-img
                                    class="elevation-6"
                                    alt=""
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>Evan You</v-list-item-title>
                            </v-list-item-content>

                            <v-row
                                align="center"
                                justify="end"
                            >
                                <v-icon class="mr-1">
                                    mdi-heart
                                </v-icon>
                                <span class="subheading mr-2">256</span>
                                <span class="mr-1">·</span>
                                <v-icon class="mr-1">
                                    mdi-share-variant
                                </v-icon>
                                <span class="subheading">45</span>
                            </v-row>
                        </v-list-item>
                    </v-card-actions>
                </v-card>
            </template>

Weather Card
------------

Using :py:class:`ListItem <ipyvuetify.ListItem>` and a :py:class:`Slider <ipyvuetify.Slider>`,
we are able to create a unique weather card. The list components ensure that we have
consistent spacing and functionality while the slider component allows us to provide
a useful interface of selection to the user.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            labels = ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA']
            forecast = [
                {"day": "'Tuesday", "icon": "mdi-white-balance-sunny", "temp": "24\xB0/12\xB0" },
                {"day": "Wednesday", "icon": "mdi-white-balance-sunny", "temp": "22\xB0/14\xB0" },
                {"day": "Thursday", "icon": "mdi-cloud", "temp": "25\xB0/15\xB0" },
            ]

            v.Card(
                class_='mx-auto my-2',
                min_width=500,
                children=[
                    v.ListItem(two_line=True, children=[
                        v.ListItemContent(children=[
                            v.ListItemTitle(children=[
                                v.Html(tag="h3", class_="text--primary",children=['San Francisco']),
                            ]),
                            v.ListItemSubtitle(children=['Mon, 12:30 PM, Mostly sunny'])
                        ])
                    ]),
                    v.CardText(children=[
                        v.Row(align='center', children=[
                            v.Col(cols=6, children=[
                                v.Html(tag="h1", children=['23°C'], class_="text--primary"),
                            ]),
                            v.Col(cols=6, children=[
                                v.Img(
                                    src='https://cdn.vuetifyjs.com/images/cards/sun.png',
                                    alt='Sunny image',
                                    width='92'
                                )
                            ])
                        ])
                    ]),
                    v.ListItem(children=[
                        v.ListItemIcon(children=[v.Icon(children=['mdi-send'])]),
                        v.ListItemSubtitle(children=['23 km/h'])
                    ]),
                    v.ListItem(children=[
                        v.ListItemIcon(children=[v.Icon(children=['mdi-cloud-download'])]),
                        v.ListItemSubtitle(children=['48%'])
                    ]),
                    v.Slider(
                        v_model=0,
                        max=6,
                        tick_labels=labels,
                        class_='mx-4',
                        ticks=True
                    ),
                    v.List(class_='transparent', children=[
                        v.ListItem(key=i, children=[
                            v.ListItemTitle(children=[day['day']]),
                            v.ListItemIcon(children=[v.Icon(children=[day['icon']])]),
                            v.ListItemSubtitle(class_='text-right', children=[day['temp']])
                        ]) for i, day in enumerate(forecast)
                    ]),
                    v.Divider(),
                    v.CardActions(children=[
                        v.Btn(text=True, children=['Full Report'])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            labels = ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA']
            forecast = [
                {"day": "'Tuesday", "icon": "mdi-white-balance-sunny", "temp": "24\xB0/12\xB0" },
                {"day": "Wednesday", "icon": "mdi-white-balance-sunny", "temp": "22\xB0/14\xB0" },
                {"day": "Thursday", "icon": "mdi-cloud", "temp": "25\xB0/15\xB0" },
            ]

            v.Card(
                class_='mx-auto my-2',
                min_width=500,
                children=[
                    v.ListItem(two_line=True, children=[
                        v.ListItemContent(children=[
                            v.ListItemTitle(children=[
                                v.Html(tag="h3", class_="text--primary",children=['San Francisco']),
                            ]),
                            v.ListItemSubtitle(children=['Mon, 12:30 PM, Mostly sunny'])
                        ])
                    ]),
                    v.CardText(children=[
                        v.Row(align='center', children=[
                            v.Col(cols=6, children=[
                                v.Html(tag="h1", children=['23°C'], class_="text--primary"),
                            ]),
                            v.Col(cols=6, children=[
                                v.Img(
                                    src='https://cdn.vuetifyjs.com/images/cards/sun.png',
                                    alt='Sunny image',
                                    width='92'
                                )
                            ])
                        ])
                    ]),
                    v.ListItem(children=[
                        v.ListItemIcon(children=[v.Icon(children=['mdi-send'])]),
                        v.ListItemSubtitle(children=['23 km/h'])
                    ]),
                    v.ListItem(children=[
                        v.ListItemIcon(children=[v.Icon(children=['mdi-cloud-download'])]),
                        v.ListItemSubtitle(children=['48%'])
                    ]),
                    v.Slider(
                        v_model=0,
                        max=6,
                        tick_labels=labels,
                        class_='mx-4',
                        ticks=True
                    ),
                    v.List(class_='transparent', children=[
                        v.ListItem(key=i, children=[
                            v.ListItemTitle(children=[day['day']]),
                            v.ListItemIcon(children=[v.Icon(children=[day['icon']])]),
                            v.ListItemSubtitle(class_='text-right', children=[day['temp']])
                        ]) for i, day in enumerate(forecast)
                    ]),
                    v.Divider(),
                    v.CardActions(children=[
                        v.Btn(text=True, children=['Full Report'])
                    ])
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="mx-auto"
                    max-width="400"
                >
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5">
                                San Francisco
                            </v-list-item-title>
                            <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-card-text>
                        <v-row align="center">
                            <v-col
                                class="text-h2"
                                cols="6"
                            >
                                23&deg;C
                            </v-col>
                            <v-col cols="6">
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                                    alt="Sunny image"
                                    width="92"
                                ></v-img>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-send</v-icon>
                        </v-list-item-icon>
                        <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-cloud-download</v-icon>
                        </v-list-item-icon>
                        <v-list-item-subtitle>48%</v-list-item-subtitle>
                    </v-list-item>

                    <v-slider
                        v-model="time"
                        :max="6"
                        :tick-labels="labels"
                        class="mx-4"
                        ticks
                    ></v-slider>

                    <v-list class="transparent">
                        <v-list-item
                            v-for="item in forecast"
                            :key="item.day"
                        >
                            <v-list-item-title>{{ item.day }}</v-list-item-title>

                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-subtitle class="text-right">
                                {{ item.temp }}
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-btn text>
                            Full Report
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
