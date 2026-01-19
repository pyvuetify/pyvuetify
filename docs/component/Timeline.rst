Timeline
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Timelines
    documentation <https://v2.vuetifyjs.com/en/components/timelines/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Timeline <ipyvuetify.Timeline>` is useful for stylistically
displaying chronological information.

.. api::

    - :py:class:`ipyvuetify.Timeline`
    - :py:class:`ipyvuetify.TimelineItem`

Usage
-----

:py:class:`Timeline <ipyvuetify.Timeline>`'s in their simplest form display a
vertical timeline that should contain at least one
:py:class:`TimelineItem <ipyvuetify.TimelineItem>`.

.. jupyter-execute::
    :raises:
    :hide-code:

    import ipyvuetify as v

    v.Timeline(
        children=[
            v.TimelineItem(children=["timeline item"]),
            v.TimelineItem(class_="text-right", children=["timeline item"]),
            v.TimelineItem(children=["timeline item"]),
        ]
    )

Examples
--------

Color
^^^^^

Colored dots create visual breakpoints that make your timelines easier to read.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                max_width=400,
                children=[
                    v.Card(
                        dark=True,
                        flat=True,
                        children=[
                            v.Btn(
                                absolute=True,
                                bottom=True,
                                color="pink",
                                right=True,
                                fab=True,
                                children=[v.Icon(children=["mdi-plus"])],
                            ),
                            v.CardTitle(
                                class_="pa-2 purple lighten-3",
                                children=[
                                    v.Btn(
                                        icon=True,
                                        children=[v.Icon(children=["mdi-menu"])],
                                    ),
                                    v.Html(
                                        tag="h3",
                                        class_="text-h6 font-weight-light text-center grow",
                                        children=["Timeline"],
                                    ),
                                    v.Avatar(
                                        children=[
                                            v.Img(
                                                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                            )
                                        ]
                                    ),
                                ],
                            ),
                            v.Img(
                                src="https://cdn.vuetifyjs.com/images/cards/forest.jpg",
                                gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)",
                                children=[
                                    v.Container(
                                        class_="fill-height",
                                        children=[
                                            v.Row(
                                                align="center",
                                                children=[
                                                    v.Html(
                                                        tag="strong",
                                                        class_="text-h1 font-weight-regular mr-6",
                                                        children=["8"],
                                                    ),
                                                    v.Row(
                                                        justify="end",
                                                        children=[
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-h5 font-weight-light",
                                                                children=["Monday"],
                                                            ),
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-uppercase font-weight-light",
                                                                children=["February 2015"],
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    )
                                ],
                            ),
                        ],
                    ),
                    v.CardText(
                        class_="py-0",
                        children=[
                            v.Timeline(
                                align_top=True,
                                dense=True,
                                children=[
                                    v.TimelineItem(
                                        color="pink",
                                        small=True,
                                        children=[
                                            v.Row(
                                                class_="pt-1",
                                                children=[
                                                    v.Col(
                                                        cols=3,
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["5pm"],
                                                            )
                                                        ],
                                                    ),
                                                    v.Col(
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["New Icon"],
                                                            ),
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-caption",
                                                                children=["Mobile App"],
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    ),
                                    v.TimelineItem(
                                        color="teal lighten-3",
                                        small=True,
                                        children=[
                                            v.Row(
                                                class_="pt-1",
                                                children=[
                                                    v.Col(
                                                        cols=3,
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["3-4pm"],
                                                            )
                                                        ],
                                                    ),
                                                    v.Col(
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["Design Stand Up"],
                                                            ),
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-caption mb-2",
                                                                children=["Hangouts"],
                                                            ),
                                                            v.Avatar(
                                                                children=[
                                                                    v.Img(
                                                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                                                                    )
                                                                ]
                                                            ),
                                                            v.Avatar(
                                                                children=[
                                                                    v.Img(
                                                                        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                                                                    )
                                                                ]
                                                            ),
                                                            v.Avatar(
                                                                children=[
                                                                    v.Img(
                                                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                                                                    )
                                                                ]
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    ),
                                    v.TimelineItem(
                                        color="pink",
                                        small=True,
                                        children=[
                                            v.Row(
                                                class_="pt-1",
                                                children=[
                                                    v.Col(
                                                        cols=3,
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["12pm"],
                                                            )
                                                        ],
                                                    ),
                                                    v.Col(
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["Lunch break"],
                                                            )
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    ),
                                    v.TimelineItem(
                                        color="teal lighten-3",
                                        small=True,
                                        children=[
                                            v.Row(
                                                class_="pt-1",
                                                children=[
                                                    v.Col(
                                                        cols=3,
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["9-11am"],
                                                            )
                                                        ],
                                                    ),
                                                    v.Col(
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["Finish Home Screen"],
                                                            ),
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-caption",
                                                                children=["Web App"],
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    ),
                                ],
                            )
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                max_width=400,
                children=[
                    v.Card(
                        dark=True,
                        flat=True,
                        children=[
                            v.Btn(
                                absolute=True,
                                bottom=True,
                                color="pink",
                                right=True,
                                fab=True,
                                children=[v.Icon(children=["mdi-plus"])],
                            ),
                            v.CardTitle(
                                class_="pa-2 purple lighten-3",
                                children=[
                                    v.Btn(
                                        icon=True,
                                        children=[v.Icon(children=["mdi-menu"])],
                                    ),
                                    v.Html(
                                        tag="h3",
                                        class_="text-h6 font-weight-light text-center grow",
                                        children=["Timeline"],
                                    ),
                                    v.Avatar(
                                        children=[
                                            v.Img(
                                                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                            )
                                        ]
                                    ),
                                ],
                            ),
                            v.Img(
                                src="https://cdn.vuetifyjs.com/images/cards/forest.jpg",
                                gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)",
                                children=[
                                    v.Container(
                                        class_="fill-height",
                                        children=[
                                            v.Row(
                                                align="center",
                                                children=[
                                                    v.Html(
                                                        tag="strong",
                                                        class_="text-h1 font-weight-regular mr-6",
                                                        children=["8"],
                                                    ),
                                                    v.Row(
                                                        justify="end",
                                                        children=[
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-h5 font-weight-light",
                                                                children=["Monday"],
                                                            ),
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-uppercase font-weight-light",
                                                                children=["February 2015"],
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    )
                                ],
                            ),
                        ],
                    ),
                    v.CardText(
                        class_="py-0",
                        children=[
                            v.Timeline(
                                align_top=True,
                                dense=True,
                                children=[
                                    v.TimelineItem(
                                        color="pink",
                                        small=True,
                                        children=[
                                            v.Row(
                                                class_="pt-1",
                                                children=[
                                                    v.Col(
                                                        cols=3,
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["5pm"],
                                                            )
                                                        ],
                                                    ),
                                                    v.Col(
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["New Icon"],
                                                            ),
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-caption",
                                                                children=["Mobile App"],
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    ),
                                    v.TimelineItem(
                                        color="teal lighten-3",
                                        small=True,
                                        children=[
                                            v.Row(
                                                class_="pt-1",
                                                children=[
                                                    v.Col(
                                                        cols=3,
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["3-4pm"],
                                                            )
                                                        ],
                                                    ),
                                                    v.Col(
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["Design Stand Up"],
                                                            ),
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-caption mb-2",
                                                                children=["Hangouts"],
                                                            ),
                                                            v.Avatar(
                                                                children=[
                                                                    v.Img(
                                                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                                                                    )
                                                                ]
                                                            ),
                                                            v.Avatar(
                                                                children=[
                                                                    v.Img(
                                                                        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                                                                    )
                                                                ]
                                                            ),
                                                            v.Avatar(
                                                                children=[
                                                                    v.Img(
                                                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                                                                    )
                                                                ]
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    ),
                                    v.TimelineItem(
                                        color="pink",
                                        small=True,
                                        children=[
                                            v.Row(
                                                class_="pt-1",
                                                children=[
                                                    v.Col(
                                                        cols=3,
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["12pm"],
                                                            )
                                                        ],
                                                    ),
                                                    v.Col(
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["Lunch break"],
                                                            )
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    ),
                                    v.TimelineItem(
                                        color="teal lighten-3",
                                        small=True,
                                        children=[
                                            v.Row(
                                                class_="pt-1",
                                                children=[
                                                    v.Col(
                                                        cols=3,
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["9-11am"],
                                                            )
                                                        ],
                                                    ),
                                                    v.Col(
                                                        children=[
                                                            v.Html(
                                                                tag="strong",
                                                                children=["Finish Home Screen"],
                                                            ),
                                                            v.Html(
                                                                tag="div",
                                                                class_="text-caption",
                                                                children=["Web App"],
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        ],
                                    ),
                                ],
                            )
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-card
                dark
                flat
                >
                <v-btn
                    absolute
                    bottom
                    color="pink"
                    right
                    fab
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-card-title class="pa-2 purple lighten-3">
                    <v-btn icon>
                    <v-icon>mdi-menu</v-icon>
                    </v-btn>
                    <h3 class="text-h6 font-weight-light text-center grow">
                    Timeline
                    </h3>
                    <v-avatar>
                    <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
                    </v-avatar>
                </v-card-title>
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
                    gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
                >
                    <v-container class="fill-height">
                    <v-row align="center">
                        <strong class="text-h1 font-weight-regular mr-6">8</strong>
                        <v-row justify="end">
                        <div class="text-h5 font-weight-light">
                            Monday
                        </div>
                        <div class="text-uppercase font-weight-light">
                            February 2015
                        </div>
                        </v-row>
                    </v-row>
                    </v-container>
                </v-img>
                </v-card>
                <v-card-text class="py-0">
                <v-timeline
                    align-top
                    dense
                >
                    <v-timeline-item
                    color="pink"
                    small
                    >
                    <v-row class="pt-1">
                        <v-col cols="3">
                        <strong>5pm</strong>
                        </v-col>
                        <v-col>
                        <strong>New Icon</strong>
                        <div class="text-caption">
                            Mobile App
                        </div>
                        </v-col>
                    </v-row>
                    </v-timeline-item>

                    <v-timeline-item
                    color="teal lighten-3"
                    small
                    >
                    <v-row class="pt-1">
                        <v-col cols="3">
                        <strong>3-4pm</strong>
                        </v-col>
                        <v-col>
                        <strong>Design Stand Up</strong>
                        <div class="text-caption mb-2">
                            Hangouts
                        </div>
                        <v-avatar>
                            <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                            ></v-img>
                        </v-avatar>
                        <v-avatar>
                            <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                            ></v-img>
                        </v-avatar>
                        <v-avatar>
                            <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                            ></v-img>
                        </v-avatar>
                        </v-col>
                    </v-row>
                    </v-timeline-item>

                    <v-timeline-item
                    color="pink"
                    small
                    >
                    <v-row class="pt-1">
                        <v-col cols="3">
                        <strong>12pm</strong>
                        </v-col>
                        <v-col>
                        <strong>Lunch break</strong>
                        </v-col>
                    </v-row>
                    </v-timeline-item>

                    <v-timeline-item
                    color="teal lighten-3"
                    small
                    >
                    <v-row class="pt-1">
                        <v-col cols="3">
                        <strong>9-11am</strong>
                        </v-col>
                        <v-col>
                        <strong>Finish Home Screen</strong>
                        <div class="text-caption">
                            Web App
                        </div>
                        </v-col>
                    </v-row>
                    </v-timeline-item>
                </v-timeline>
                </v-card-text>
            </v-card>
            </template>

Dense
^^^^^

**Dense** timelines position all content to the right. In this example,
:py:class:`Alert <ipyvuetify.Alert>` replaces the card to provide a different
design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
            alerts = [("info", "mdi-information"), ("success", "mdi-check-circle"), ("warning", "mdi-alert"), ("error", "mdi-close-circle")]

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.CardTitle(
                        class_="blue-grey",
                        children=[
                            v.Html(tag="h4", children=["Logs"], class_="white--text ma-0"),
                            v.Spacer(),
                            v.Btn(
                                outlined=True,
                                color="white",
                                dark=True,
                                depressed=True,
                                children=["Realtime Logging"],
                            ),
                        ],
                    ),
                    v.CardText(
                        class_="py-0",
                        children=[
                            v.Timeline(
                                dense=True,
                                children=[
                                    v.SlideXReverseTransition(
                                        group=True,
                                        hide_on_leave=True,
                                        children=[
                                            v.TimelineItem(
                                                key=i,
                                                color=color,
                                                small=True,
                                                fill_dot=True,
                                                children=[
                                                    v.Alert(
                                                        value=True,
                                                        color=color,
                                                        icon=icon,
                                                        class_="white--text",
                                                        children=[text],
                                                    )
                                                ],
                                            ) for i, (color, icon) in enumerate(alerts)
                                        ],
                                    )
                                ],
                            )
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
            alerts = [("info", "mdi-information"), ("success", "mdi-check-circle"), ("warning", "mdi-alert"), ("error", "mdi-close-circle")]

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.CardTitle(
                        class_="blue-grey",
                        children=[
                            v.Html(tag="h4", children=["Logs"], class_="white--text ma-0"),
                            v.Spacer(),
                            v.Btn(
                                outlined=True,
                                color="white",
                                dark=True,
                                depressed=True,
                                children=["Realtime Logging"],
                            ),
                        ],
                    ),
                    v.CardText(
                        class_="py-0",
                        children=[
                            v.Timeline(
                                dense=True,
                                children=[
                                    v.SlideXReverseTransition(
                                        group=True,
                                        hide_on_leave=True,
                                        children=[
                                            v.TimelineItem(
                                                key=i,
                                                color=color,
                                                small=True,
                                                fill_dot=True,
                                                children=[
                                                    v.Alert(
                                                        value=True,
                                                        color=color,
                                                        icon=icon,
                                                        class_="white--text",
                                                        children=[text],
                                                    )
                                                ],
                                            ) for i, (color, icon) in enumerate(alerts)
                                        ],
                                    )
                                ],
                            )
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="600"
            >
                <v-card-title
                class="blue-grey white--text"
                >
                <span class="text-h6">Logs</span>
                <v-spacer></v-spacer>
                <v-btn
                    :outlined="interval == null"
                    :color="interval == null ? 'white' : 'primary'"
                    dark
                    depressed
                    @click="interval == null ? start() : stop()"
                >
                    Realtime Logging
                </v-btn>
                </v-card-title>
                <v-card-text class="py-0">
                <v-timeline dense>
                    <v-slide-x-reverse-transition
                    group
                    hide-on-leave
                    >
                    <v-timeline-item
                        v-for="item in items"
                        :key="item.id"
                        :color="item.color"
                        small
                        fill-dot
                    >
                        <v-alert
                        :value="true"
                        :color="item.color"
                        :icon="item.icon"
                        class="white--text"
                        >
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                        </v-alert>
                    </v-timeline-item>
                    </v-slide-x-reverse-transition>
                </v-timeline>
                </v-card-text>
            </v-card>
            </template>

Icon dots
^^^^^^^^^

Conditionally use icons within the :py:class:`TimelineItem <ipyvuetify.TimelineItem>`'s
dot to provide additional context.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            text = 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'

            items =  [
                ('red lighten-2', 'mdi-star'),
                ('purple darken-1', 'mdi-book-variant'),
                ('green lighten-1', 'mdi-airballoon'),
                ('indigo', 'mdi-buffer'),
            ]

            v.Timeline(
                align_top=True,
                children=[
                    v.TimelineItem(
                        color=color,
                        icon=icon,
                        fill_dot=True,
                        children=[
                            v.Card(
                                color=color,
                                dark=True,
                                children=[
                                    v.CardTitle(
                                        class_="text-h6",
                                        children=["Lorem Ipsum Dolor"],
                                    ),
                                    v.CardText(
                                        class_="white text--primary",
                                        children=[
                                            v.Html(
                                                tag="p",
                                                children=[text]
                                            ),
                                            v.Btn(
                                                color=color,
                                                class_="mx-0",
                                                outlined=True,
                                                children=["Button"],
                                            ),
                                        ],
                                    ),
                                ],
                            )
                        ],
                    ) for color, icon in items
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text = 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'

            items =  [
                ('red lighten-2', 'mdi-star'),
                ('purple darken-1', 'mdi-book-variant'),
                ('green lighten-1', 'mdi-airballoon'),
                ('indigo', 'mdi-buffer'),
            ]

            v.Timeline(
                align_top=True,
                children=[
                    v.TimelineItem(
                        color=color,
                        icon=icon,
                        fill_dot=True,
                        children=[
                            v.Card(
                                color=color,
                                dark=True,
                                children=[
                                    v.CardTitle(
                                        class_="text-h6",
                                        children=["Lorem Ipsum Dolor"],
                                    ),
                                    v.CardText(
                                        class_="white text--primary",
                                        children=[
                                            v.Html(
                                                tag="p",
                                                children=[text]
                                            ),
                                            v.Btn(
                                                color=color,
                                                class_="mx-0",
                                                outlined=True,
                                                children=["Button"],
                                            ),
                                        ],
                                    ),
                                ],
                            )
                        ],
                    ) for color, icon in items
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-timeline
                align-top
                :dense="$vuetify.breakpoint.smAndDown"
            >
                <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
                >
                <v-card
                    :color="item.color"
                    dark
                >
                    <v-card-title class="text-h6">
                    Lorem Ipsum Dolor
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                    <v-btn
                        :color="item.color"
                        class="mx-0"
                        outlined
                    >
                        Button
                    </v-btn>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
            </template>

Reverse
^^^^^^^

You can reverse the direction of the timeline items by using the ``reverse`` prop.
This works both in default and dense mode.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."

            reverse = v.Switch(label="Toggle reverse", v_model=True)
            timeline = v.Timeline(
                reverse=True,
                children=[
                    v.TimelineItem(
                        children=[
                            v.Card(
                                class_="elevation-2",
                                children=[
                                    v.CardTitle(
                                        class_="text-h5",
                                        children=["Lorem ipsum"],
                                    ),
                                    v.CardText(
                                        children=[text],
                                    ),
                                ],
                            )
                        ],
                        slots={
                            "opposite": "Tus eu perfecto"
                        },
                    ) for n in range(2)
                ],
            )
            timeline2 = v.Timeline(
                reverse=True,
                dense=True,
                children=[
                    v.TimelineItem(
                        children=[
                            v.Card(
                                class_="elevation-2",
                                children=[
                                    v.CardTitle(
                                        class_="text-h5",
                                        children=["Lorem ipsum"],
                                    ),
                                    v.CardText(
                                        children=[text],
                                    ),
                                ],
                            )
                        ],
                        slots={
                            "opposite": "Tus eu perfecto"
                        },
                    ) for n in range(2)
                ],
            )

            jslink((reverse, 'v_model'), (timeline, 'reverse'))
            jslink((reverse, 'v_model'), (timeline2, 'reverse'))

            v.Container(
                children=[
                    reverse,
                    timeline,
                    timeline2,
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."

            reverse = v.Switch(label="Toggle reverse", v_model=True)
            timeline = v.Timeline(
                reverse=True,
                children=[
                    v.TimelineItem(
                        children=[
                            v.Card(
                                class_="elevation-2",
                                children=[
                                    v.CardTitle(
                                        class_="text-h5",
                                        children=["Lorem ipsum"],
                                    ),
                                    v.CardText(
                                        children=[text],
                                    ),
                                ],
                            )
                        ],
                        slots={
                            "opposite": "Tus eu perfecto"
                        },
                    ) for n in range(2)
                ],
            )
            timeline2 = v.Timeline(
                reverse=True,
                dense=True,
                children=[
                    v.TimelineItem(
                        children=[
                            v.Card(
                                class_="elevation-2",
                                children=[
                                    v.CardTitle(
                                        class_="text-h5",
                                        children=["Lorem ipsum"],
                                    ),
                                    v.CardText(
                                        children=[text],
                                    ),
                                ],
                            )
                        ],
                        slots={
                            "opposite": "Tus eu perfecto"
                        },
                    ) for n in range(2)
                ],
            )

            jslink((reverse, 'v_model'), (timeline, 'reverse'))
            jslink((reverse, 'v_model'), (timeline2, 'reverse'))

            v.Container(
                children=[
                    reverse,
                    timeline,
                    timeline2,
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-switch
                v-model="reverse"
                label="Toggle reverse"
                ></v-switch>
                <v-timeline
                :reverse="reverse"
                :dense="$vuetify.breakpoint.smAndDown"
                >
                <v-timeline-item
                    v-for="n in 2"
                    :key="n"
                >
                    <span slot="opposite">Tus eu perfecto</span>
                    <v-card class="elevation-2">
                    <v-card-title class="text-h5">
                        Lorem ipsum
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </v-card-text>
                    </v-card>
                </v-timeline-item>
                </v-timeline>
                <v-timeline
                :reverse="reverse"
                dense
                >
                <v-timeline-item
                    v-for="n in 2"
                    :key="n"
                >
                    <span slot="opposite">Tus eu perfecto</span>
                    <v-card class="elevation-2">
                    <v-card-title class="text-h5">
                        Lorem ipsum
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </v-card-text>
                    </v-card>
                </v-timeline-item>
                </v-timeline>
            </div>
            </template>

Small
^^^^^

The ``small`` prop allows alternate styles to provide a unique design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus."
            items = [
                ("purple lighten-2", "mdi-magnify"),
                ("amber lighten-1", "mdi-home-outline"),
                ("cyan lighten-1", "mdi-email-outline"),
                ("red lighten-1", "mdi-account-multiple-outline"),
                ("green lighten-1", "mdi-phone-in-talk"),
            ]

            v.Timeline(
                children=[
                    v.TimelineItem(
                        color=color,
                        fill_dot=True,
                        right=(i % 2 == 0),
                        small=(i % 2 != 0),
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_=f"{color} {'justify-end' if i % 2 != 0 else ''}",
                                        children=[
                                            v.Icon(
                                                dark=True,
                                                size=42,
                                                class_="mr-4",
                                                children=[icon],
                                            ) if i % 2 == 0 else "",
                                            v.Html(
                                                tag="h4",
                                                class_="white--text font-weight-light mr-4 my-0",
                                                children=[f"Title {i + 1}"],
                                            ),
                                            v.Icon(
                                                dark=True,
                                                size=42,
                                                children=[icon],
                                            ) if i % 2 != 0 else "",
                                        ],
                                    ),
                                    v.CardText(children=[text]),
                                ],
                            )
                        ],
                    ) for i, (color, icon) in enumerate(items)
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus."
            items = [
                ("purple lighten-2", "mdi-magnify"),
                ("amber lighten-1", "mdi-home-outline"),
                ("cyan lighten-1", "mdi-email-outline"),
                ("red lighten-1", "mdi-account-multiple-outline"),
                ("green lighten-1", "mdi-phone-in-talk"),
            ]

            v.Timeline(
                children=[
                    v.TimelineItem(
                        color=color,
                        fill_dot=True,
                        right=(i % 2 == 0),
                        small=(i % 2 != 0),
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_=f"{color} {'justify-end' if i % 2 != 0 else ''}",
                                        children=[
                                            v.Icon(
                                                dark=True,
                                                size=42,
                                                class_="mr-4",
                                                children=[icon],
                                            ) if i % 2 == 0 else "",
                                            v.Html(
                                                tag="h4",
                                                class_="white--text font-weight-light mr-4 my-0",
                                                children=[f"Title {i + 1}"],
                                            ),
                                            v.Icon(
                                                dark=True,
                                                size=42,
                                                children=[icon],
                                            ) if i % 2 != 0 else "",
                                        ],
                                    ),
                                    v.CardText(children=[text]),
                                ],
                            )
                        ],
                    ) for i, (color, icon) in enumerate(items)
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                color="purple lighten-2"
                fill-dot
                right
                >
                <v-card>
                    <v-card-title class="purple lighten-2">
                    <v-icon
                        dark
                        size="42"
                        class="mr-4"
                    >
                        mdi-magnify
                    </v-icon>
                    <h2 class="text-h4 white--text font-weight-light">
                        Title 1
                    </h2>
                    </v-card-title>
                    <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        md="10"
                        >
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                        </v-col>
                        <v-col
                        class="hidden-sm-and-down text-right"
                        md="2"
                        >
                        <v-icon size="64">
                            mdi-calendar-text
                        </v-icon>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                color="amber lighten-1"
                fill-dot
                left
                small
                >
                <v-card>
                    <v-card-title class="amber lighten-1 justify-end">
                    <h2 class="text-h4 mr-4 white--text font-weight-light">
                        Title 2
                    </h2>
                    <v-icon
                        dark
                        size="42"
                    >
                        mdi-home-outline
                    </v-icon>
                    </v-card-title>
                    <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        md="8"
                        >
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                        </v-col>
                        <v-col
                        cols="12"
                        md="4"
                        >
                        Lorem ipsum dolor sit amet, no nam oblique veritus.
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                color="cyan lighten-1"
                fill-dot
                right
                >
                <v-card>
                    <v-card-title class="cyan lighten-1">
                    <v-icon
                        class="mr-4"
                        dark
                        size="42"
                    >
                        mdi-email-outline
                    </v-icon>
                    <h2 class="text-h4 white--text font-weight-light">
                        Title 3
                    </h2>
                    </v-card-title>
                    <v-container>
                    <v-row>
                        <v-col
                        v-for="n in 3"
                        :key="n"
                        cols="12"
                        md="4"
                        >
                        Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                color="red lighten-1"
                fill-dot
                left
                small
                >
                <v-card>
                    <v-card-title class="red lighten-1 justify-end">
                    <h2 class="text-h4 mr-4 white--text font-weight-light">
                        Title 4
                    </h2>
                    <v-icon
                        dark
                        size="42"
                    >
                        mdi-account-multiple-outline
                    </v-icon>
                    </v-card-title>
                    <v-container>
                    <v-row>
                        <v-col
                        class="hidden-sm-and-down"
                        md="2"
                        >
                        <v-icon size="64">
                            mdi-server-network
                        </v-icon>
                        </v-col>
                        <v-col
                        cols="12"
                        md="10"
                        >
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                color="green lighten-1"
                fill-dot
                right
                >
                <v-card>
                    <v-card-title class="green lighten-1">
                    <v-icon
                        class="mr-4"
                        dark
                        size="42"
                    >
                        mdi-phone-in-talk
                    </v-icon>
                    <h2 class="text-h4 white--text font-weight-light">
                        Title 5
                    </h2>
                    </v-card-title>
                    <v-container>
                    <v-row>
                        <v-col>
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                </v-timeline-item>
            </v-timeline>
            </template>

Icon
^^^^

Insert avatars into dots with use of the ``icon`` slot and
:py:class:`Avatar <ipyvuetify.Avatar>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."

            v.Timeline(
                children=[
                    v.TimelineItem(
                        large=True,
                        children=[
                            v.Card(
                                class_="elevation-2",
                                children=[
                                    v.CardTitle(
                                        class_="text-h5",
                                        children=["Lorem ipsum"],
                                    ),
                                    v.CardText(
                                        children=[text],
                                    ),
                                ],
                            )
                        ],
                        v_slots=[
                            {
                                "name": "icon",
                                "children": v.Avatar(
                                    children=[
                                        v.Img(
                                            src="https://i.pravatar.cc/64"
                                        )
                                    ]
                                ),
                            },
                            {
                            "name": "opposite",
                            "children": "Tus eu perfecto"
                            }
                        ],
                    ) for n in range(4)
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."

            v.Timeline(
                children=[
                    v.TimelineItem(
                        large=True,
                        children=[
                            v.Card(
                                class_="elevation-2",
                                children=[
                                    v.CardTitle(
                                        class_="text-h5",
                                        children=["Lorem ipsum"],
                                    ),
                                    v.CardText(
                                        children=[text],
                                    ),
                                ],
                            )
                        ],
                        v_slots=[
                            {
                                "name": "icon",
                                "children": v.Avatar(
                                    children=[
                                        v.Img(
                                            src="https://i.pravatar.cc/64"
                                        )
                                    ]
                                ),
                            },
                            {
                            "name": "opposite",
                            "children": "Tus eu perfecto"
                            }
                        ],
                    ) for n in range(4)
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-timeline>
                <v-timeline-item
                v-for="n in 4"
                :key="n"
                large
                >
                <template v-slot:icon>
                    <v-avatar>
                    <img src="https://i.pravatar.cc/64">
                    </v-avatar>
                </template>
                <template v-slot:opposite>
                    <span>Tus eu perfecto</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="text-h5">
                    Lorem ipsum
                    </v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
            </template>

Opposite
^^^^^^^^

The ``opposite`` slot provides an additional layer of customization within your
timelines.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            text="Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
            years = [
                ('cyan', '1960'),
                ('green', '1970'),
                ('pink', '1980'),
                ('amber', '1990'),
                ('orange', '2000'),
            ]

            v.Timeline(
                children=[
                    v.TimelineItem(
                        color=color,
                        small=True,
                        children=[
                            v.Html(
                                tag="div",
                                class_="py-4",
                                children=[
                                    v.Html(
                                        tag="h2",
                                        class_=f"headline font-weight-light mb-4 {color}--text",
                                        children=["Lorem ipsum"],
                                    ),
                                    v.Html(
                                        tag="div",
                                        children=[text],
                                    ),
                                ],
                            )
                        ],
                        v_slots=[
                            {
                                "name": "opposite",
                                "children": v.Html(
                                    tag="span",
                                    class_=f"headline font-weight-bold {color}--text",
                                    children=[year],
                                ),
                            }
                        ],
                    ) for color, year in years
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text="Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
            years = [
                ('cyan', '1960'),
                ('green', '1970'),
                ('pink', '1980'),
                ('amber', '1990'),
                ('orange', '2000'),
            ]

            v.Timeline(
                children=[
                    v.TimelineItem(
                        color=color,
                        small=True,
                        children=[
                            v.Html(
                                tag="div",
                                class_="py-4",
                                children=[
                                    v.Html(
                                        tag="h2",
                                        class_=f"headline font-weight-light mb-4 {color}--text",
                                        children=["Lorem ipsum"],
                                    ),
                                    v.Html(
                                        tag="div",
                                        children=[text],
                                    ),
                                ],
                            )
                        ],
                        v_slots=[
                            {
                                "name": "opposite",
                                "children": v.Html(
                                    tag="span",
                                    class_=f"headline font-weight-bold {color}--text",
                                    children=[year],
                                ),
                            }
                        ],
                    ) for color, year in years
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-timeline>
                <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :color="year.color"
                small
                >
                <template v-slot:opposite>
                    <span
                    :class="`headline font-weight-bold ${year.color}--text`"
                    v-text="year.year"
                    ></span>
                </template>
                <div class="py-4">
                    <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                    Lorem ipsum
                    </h2>
                    <div>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </div>
                </div>
                </v-timeline-item>
            </v-timeline>
            </template>

Timeline item default
^^^^^^^^^^^^^^^^^^^^^

If you place a :py:class:`Card <ipyvuetify.Card>` inside of a
:py:class:`TimelineItem <ipyvuetify.TimelineItem>`, a caret will appear on the side
of the card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."

            v.Timeline(
                children=[
                    v.TimelineItem(
                        color="red lighten-2",
                        large=True,
                        children=[
                            v.Card(
                                class_="elevation-2",
                                children=[
                                    v.CardTitle(
                                        class_="text-h5",
                                        children=["Lorem ipsum"],
                                    ),
                                    v.CardText(
                                        children=[text],
                                    ),
                                ],
                            )
                        ],
                        v_slots=[
                            {
                            "name": "opposite",
                            "children": "Tus eu perfecto"
                            }
                        ],
                    ) for n in range(3)
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-timeline>
                <v-timeline-item
                v-for="n in 3"
                :key="n"
                color="red lighten-2"
                large
                >
                <template v-slot:opposite>
                    <span>Tus eu perfecto</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="text-h5">
                    Lorem ipsum
                    </v-card-title>
                    <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
            </template>

Advanced
^^^^^^^^

Modular components allow you to create highly customized solutions that just work.

.. todo::

    This example requires an active kernel to run.
