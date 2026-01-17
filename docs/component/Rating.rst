Rating
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Ratings
    documentation <https://v2.vuetifyjs.com/en/components/ratings/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Rating <ipyvuetify.Rating>` component is a specialized but
crucial piece in building user widgets. Collecting user feedback via ratings
is a simple analytic that can provide a lot of feedback to your product or
application.

.. api::

    - :py:class:`ipyvuetify.Rating`

Usage
-----

The :py:class:`Rating <ipyvuetify.Rating>` component provides a simple
interface for gathering user feedback.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Rating(
        class_='my-2 mx-auto',
        half_increments=True,
        hover=True,
        length=10,
        size=45,
        value=7.5,
    )

Examples
--------

Color
^^^^^

The :py:class:`Rating <ipyvuetify.Rating>` component can be colored as you
want, you can set both selected and not selected colors.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['purple', 'pink', 'orange', 'green', 'red', 'indigo']

            v.Col(
                class_='text-center',
                children=[
                    v.Rating(
                        v_model=3,
                        background_color=f"{color} lighten-3",
                        color=color,
                    )
                    for color in colors
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['purple', 'pink', 'orange', 'green', 'red', 'indigo']

            v.Col(
                class_='text-center',
                children=[
                    v.Rating(
                        v_model=3,
                        background_color=f"{color} lighten-3",
                        color=color,
                    )
                    for color in colors
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-rating
                v-model="rating"
                background-color="purple lighten-3"
                color="purple"
                large
                ></v-rating>
                <v-rating
                v-model="rating"
                background-color="pink lighten-3"
                color="pink"
                large
                ></v-rating>
                <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                large
                ></v-rating>
                <v-rating
                v-model="rating"
                background-color="green lighten-3"
                color="green"
                large
                ></v-rating>
                <v-rating
                v-model="rating"
                background-color="red lighten-3"
                color="red"
                large
                ></v-rating>
                <v-rating
                v-model="rating"
                background-color="indigo lighten-3"
                color="indigo"
                large
                ></v-rating>
            </div>
            </template>

Length
^^^^^^

Sometimes an application will call for a customized implementation. Easily
change length or displayed icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            slider = v.Slider(
                class_='mt-4',
                v_model=5,
                min=1,
                max=15,
                label='Custom length',
            )

            rating = v.Rating(
                class_='my-2',
                v_model=4,
                length=slider.v_model,
                color='red lighten-3',
                background_color='grey lighten-1',
                large=True,
            )

            value = v.TextField(
                label='Rating value',
                v_model=4,
                readonly=True,
            )

            jslink((slider, 'v_model'), (rating, 'length'))
            jslink((rating, 'v_model'), (value, 'v_model'))

            v.Col(
                class_='text-center',
                children=[slider, value, rating],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            slider = v.Slider(
                class_='mt-4',
                v_model=5,
                min=1,
                max=15,
                label='Custom length',
            )

            rating = v.Rating(
                class_='my-2',
                v_model=4,
                length=slider.v_model,
                color='red lighten-3',
                background_color='grey lighten-1',
                large=True,
            )

            value = v.TextField(
                label='Rating value',
                v_model=4,
                readonly=True,
            )

            jslink((slider, 'v_model'), (rating, 'length'))
            jslink((rating, 'v_model'), (value, 'v_model'))

            v.Col(
                class_='text-center',
                children=[slider, value, rating],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-slider
                v-model="length"
                color="red darken-4"
                min="1"
                max="15"
                label="Custom length"
                ></v-slider>
                <v-rating
                v-model="rating"
                :length="length"
                color="red lighten-3"
                background-color="grey lighten-1"
                large
                ></v-rating>
                <div>
                <span class="text-caption text-uppercase">model:</span>
                <span class="font-weight-bold">
                    {{ rating }}
                </span>
                </div>
            </div>
            </template>

Incremented
^^^^^^^^^^^

A rating can have 3 defined icons, full-icon, half-icon (with the
half-increments prop) and empty-icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                width=400,
                children=[
                    v.CardTitle(
                        class_='text-h5',
                        children=['Rate Our Framework'],
                    ),
                    v.CardText(
                        children=[
                            'If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!',
                            v.Divider(),
                            v.Rating(
                                v_model=3.5,
                                color='yellow darken-3',
                                background_color='grey darken-1',
                                empty_icon='$ratingFull',
                                half_increments=True,
                                hover=True,
                                class_='text-center',
                            ),
                        ],
                    ),
                    v.Divider(),
                    v.CardActions(
                        class_='justify-space-between',
                        children=[
                            v.Btn(
                                text=True,
                                children=['No Thanks'],
                            ),
                            v.Btn(
                                color='primary',
                                text=True,
                                children=['Rate Now'],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                width=400,
                children=[
                    v.CardTitle(
                        class_='text-h5',
                        children=['Rate Our Framework'],
                    ),
                    v.CardText(
                        children=[
                            'If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!',
                            v.Divider(),
                            v.Rating(
                                v_model=3.5,
                                color='yellow darken-3',
                                background_color='grey darken-1',
                                empty_icon='$ratingFull',
                                half_increments=True,
                                hover=True,
                                class_='text-center',
                            ),
                        ],
                    ),
                    v.Divider(),
                    v.CardActions(
                        class_='justify-space-between',
                        children=[
                            v.Btn(
                                text=True,
                                children=['No Thanks'],
                            ),
                            v.Btn(
                                color='primary',
                                text=True,
                                children=['Rate Now'],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="elevation-16 mx-auto"
                width="300"
            >
                <v-card-title class="text-h5">
                Rate Our Framework
                </v-card-title>
                <v-card-text>
                If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!

                <div class="text-center mt-12">
                    <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    large
                    ></v-rating>
                </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="justify-space-between">
                <v-btn text>
                    No Thanks
                </v-btn>
                <v-btn
                    color="primary"
                    text
                >
                    Rate Now
                </v-btn>
                </v-card-actions>
            </v-card>
            </template>

Size
^^^^

Utilize the same sizing classes available in :py:class:`Icon <ipyvuetify.Icon>`
or provide your own with the size prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                ('small', 'purple'),
                ('default', 'pink'),
                ('large', 'green'),
                ('x-large', 'red'),
                ('64px', 'indigo'),
            ]

            v.Col(
                class_='text-center',
                children=[
                    v.Rating(
                        v_model=3,
                        background_color=f"{color} lighten-3",
                        color=color,
                        **({'size': size} if size.endswith('px') else {size.replace('-', '_'): True}),
                    )
                    for size, color in items
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                ('small', 'purple'),
                ('default', 'pink'),
                ('large', 'green'),
                ('x-large', 'red'),
                ('64px', 'indigo'),
            ]

            v.Col(
                class_='text-center',
                children=[
                    v.Rating(
                        v_model=3,
                        background_color=f"{color} lighten-3",
                        color=color,
                        **({'size': size} if size.endswith('px') else {size.replace('-', '_'): True}),
                    )
                    for size, color in items
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-rating
                v-model="rating"
                background-color="purple lighten-3"
                color="purple"
                small
                ></v-rating>
                <v-rating
                v-model="rating"
                background-color="pink lighten-3"
                color="pink"
                ></v-rating>
                <v-rating
                v-model="rating"
                background-color="green lighten-3"
                color="green"
                large
                ></v-rating>
                <v-rating
                v-model="rating"
                background-color="red lighten-3"
                color="red"
                x-large
                ></v-rating>
                <v-rating
                v-model="rating"
                background-color="indigo lighten-3"
                color="indigo"
                size="64"
                ></v-rating>
            </div>
            </template>

Icon Label
^^^^^^^^^^

Provide a label to assistive technologies for icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Rating(
                v_model=2,
                class_='my-2 mx-auto',
                icon_label='custom icon label text {0} of {1}',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Rating(
                v_model=2,
                class_='my-2 mx-auto',
                icon_label='custom icon label text {0} of {1}',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-rating
                v-model="rating"
                icon-label="custom icon label text {0} of {1}"
                ></v-rating>
            </div>
            </template>

Item slot
^^^^^^^^^

Slots are provided to give you even more freedom in how you display the
rating.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Rating()

            v.Rating(
                class_='text-center',
                v_model=3,
                v_slots=[{
                    'name': 'item',
                    'variable': 'props',
                    'children': v.Icon(
                        children=['mdi-star-circle'],
                    ),
                }],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Rating()

            v.Rating(
                class_='text-center',
                v_model=3,
                v_slots=[{
                    'name': 'item',
                    'variable': 'props',
                    'children': v.Icon(
                        children=['mdi-star-circle'],
                    ),
                }],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-rating v-model="rating">
                <template v-slot:item="props">
                    <v-icon
                    :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
                    large
                    @click="props.click"
                    >
                    {{ props.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline' }}
                    </v-icon>
                </template>
                </v-rating>
            </div>
            </template>

Advanced usage
^^^^^^^^^^^^^^

The :py:class:`Rating <ipyvuetify.Rating>` component fits right in with
existing components. Build truly complex examples with rich features and
beautiful designs.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                class_="d-flex",
                                cols=6,
                                children=[
                                    v.Img(
                                        src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png",
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Container(
                                        class_="pa-0 pl-2",
                                        style="margin: -4px 0",
                                        children=[
                                            v.Row(
                                                children=[
                                                    v.Col(
                                                        class_="d-flex",
                                                        cols=7,
                                                        children=[
                                                            v.Img(
                                                                src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png",
                                                            ),
                                                        ],
                                                    ),
                                                    v.Col(
                                                        class_="d-flex",
                                                        cols=5,
                                                        children=[
                                                            v.Img(
                                                                src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png",
                                                            ),
                                                        ],
                                                    ),
                                                    v.Col(
                                                        class_="d-flex",
                                                        cols=5,
                                                        children=[
                                                            v.Img(
                                                                src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png",
                                                            ),
                                                        ],
                                                    ),
                                                    v.Col(
                                                        class_="d-flex",
                                                        cols=7,
                                                        children=[
                                                            v.Img(
                                                                src="https://cdn.vuetifyjs.com/images/ratings/fortnite5.png",
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                        ],
                    ),
                    v.CardTitle(
                        align_start=True,
                        children=[
                            v.Html(
                                tag='div',
                                children=[
                                    v.Html(
                                        tag='span',
                                        class_='text-h5',
                                        children=['FORTNITE'],
                                    ),
                                    v.Html(
                                        tag='div',
                                        class_='grey--text font-weight-light',
                                        children=['Video game'],
                                    ),
                                ],
                            ),
                            v.Spacer(),
                            v.Icon(
                                children=['mdi-share-variant'],
                            ),
                        ]
                    ),
                    v.Divider(),
                    v.CardActions(
                        children=[
                            v.Html(
                                tag='span',
                                class_='pl-2 grey--text text--darken-2 font-weight-light text-caption',
                                children=['16,544 reviews'],
                            ),
                            v.Spacer(),
                            v.Rating(
                                v_model=7,
                                length=10,
                                readonly=True,
                                v_slots=[{
                                    'name': 'item',
                                    'variable': 'props',
                                    'children': v.Icon(
                                        large=True,
                                        children=['mdi-numeric-0-box'],
                                        color='purple darken-4',
                                    ),
                                }],
                            ),
                        ]
                    ),
                    v.Html(
                        tag='div',
                        class_='pa-4 pt-0 text-caption',
                        children=[
                            v.Html(
                                tag='em',
                                children=['Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.'],
                            ),
                        ],
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                class_="d-flex",
                                cols=6,
                                children=[
                                    v.Img(
                                        src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png",
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Container(
                                        class_="pa-0 pl-2",
                                        style="margin: -4px 0",
                                        children=[
                                            v.Row(
                                                children=[
                                                    v.Col(
                                                        class_="d-flex",
                                                        cols=7,
                                                        children=[
                                                            v.Img(
                                                                src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png",
                                                            ),
                                                        ],
                                                    ),
                                                    v.Col(
                                                        class_="d-flex",
                                                        cols=5,
                                                        children=[
                                                            v.Img(
                                                                src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png",
                                                            ),
                                                        ],
                                                    ),
                                                    v.Col(
                                                        class_="d-flex",
                                                        cols=5,
                                                        children=[
                                                            v.Img(
                                                                src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png",
                                                            ),
                                                        ],
                                                    ),
                                                    v.Col(
                                                        class_="d-flex",
                                                        cols=7,
                                                        children=[
                                                            v.Img(
                                                                src="https://cdn.vuetifyjs.com/images/ratings/fortnite5.png",
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                        ],
                    ),
                    v.CardTitle(
                        align_start=True,
                        children=[
                            v.Html(
                                tag='div',
                                children=[
                                    v.Html(
                                        tag='span',
                                        class_='text-h5',
                                        children=['FORTNITE'],
                                    ),
                                    v.Html(
                                        tag='div',
                                        class_='grey--text font-weight-light',
                                        children=['Video game'],
                                    ),
                                ],
                            ),
                            v.Spacer(),
                            v.Icon(
                                children=['mdi-share-variant'],
                            ),
                        ]
                    ),
                    v.Divider(),
                    v.CardActions(
                        children=[
                            v.Html(
                                tag='span',
                                class_='pl-2 grey--text text--darken-2 font-weight-light text-caption',
                                children=['16,544 reviews'],
                            ),
                            v.Spacer(),
                            v.Rating(
                                v_model=7,
                                length=10,
                                readonly=True,
                                v_slots=[{
                                    'name': 'item',
                                    'variable': 'props',
                                    'children': v.Icon(
                                        large=True,
                                        children=['mdi-numeric-0-box'],
                                        color='purple darken-4',
                                    ),
                                }],
                            ),
                        ]
                    ),
                    v.Html(
                        tag='div',
                        class_='pa-4 pt-0 text-caption',
                        children=[
                            v.Html(
                                tag='em',
                                children=['Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.'],
                            ),
                        ],
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto overflow-hidden"
                style="max-width: 600px;"
            >
                <v-row>
                <v-col
                    class="d-flex"
                    cols="6"
                >
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"
                    ></v-img>
                </v-col>
                <v-col cols="6">
                    <v-container
                    class="pa-0 pl-2"
                    style="margin: -4px 0"
                    >
                    <v-row>
                        <v-col
                        class="d-flex"
                        cols="7"
                        >
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png"
                        ></v-img>
                        </v-col>
                        <v-col
                        class="d-flex"
                        cols="5"
                        >
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png"
                        ></v-img>
                        </v-col>
                        <v-col
                        class="d-flex"
                        cols="5"
                        >
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png"
                        ></v-img>
                        </v-col>
                        <v-col
                        class="d-flex"
                        cols="7"
                        >
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/ratings/fortnite5.png"
                        ></v-img>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-col>
                </v-row>
                <v-card-title class="align-start">
                <div>
                    <span class="text-h5">FORTNITE</span>
                    <div class="grey--text font-weight-light">
                    Video game
                    </div>
                </div>
                <v-spacer></v-spacer>
                <v-dialog
                    v-model="dialog"
                    width="400"
                >
                    <template v-slot:activator="{ on }">
                    <v-icon v-on="on">
                        mdi-share-variant
                    </v-icon>
                    </template>
                    <v-card>
                    <v-card-title>
                        <span class="text-h6 font-weight-bold">Share</span>
                        <v-spacer></v-spacer>
                        <v-btn
                        class="mx-0"
                        icon
                        @click="dialog = false"
                        >
                        <v-icon>mdi-close-circle-outline</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-list>
                        <v-list-item>
                        <v-list-item-action>
                            <v-icon color="indigo">
                            mdi-facebook
                            </v-icon>
                        </v-list-item-action>
                        <v-card-title>Facebook</v-card-title>
                        </v-list-item>
                        <v-list-item>
                        <v-list-item-action>
                            <v-icon color="cyan">
                            mdi-twitter
                            </v-icon>
                        </v-list-item-action>
                        <v-card-title>Twitter</v-card-title>
                        </v-list-item>
                        <v-list-item>
                        <v-list-item-action>
                            <v-icon>mdi-email</v-icon>
                        </v-list-item-action>
                        <v-card-title>Email</v-card-title>
                        </v-list-item>
                    </v-list>
                    <v-text-field
                        ref="link"
                        :label="copied ? 'Link copied' : 'Click to copy link'"
                        class="pa-4"
                        readonly
                        value="https://g.co/kgs/nkrK43"
                        @click="copy"
                    ></v-text-field>
                    </v-card>
                </v-dialog>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-actions>
                <span class="pl-2 grey--text text--darken-2 font-weight-light text-caption">16,544 reviews</span>
                <v-spacer></v-spacer>
                <v-rating
                    v-model="rating"
                    length="10"
                    readonly
                >
                    <template v-slot:item="props">
                    <v-icon
                        large
                        :color="props.isFilled ? 'purple darken-4' : ''"
                        v-text="`mdi-numeric-${props.index}-box`"
                    ></v-icon>
                    </template>
                </v-rating>
                </v-card-actions>
                <div class="pa-4 pt-0 text-caption">
                <em>Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</em>
                </div>
            </v-card>
            </template>

Card ratings
^^^^^^^^^^^^

The rating component pairs well with products allowing you to gather and
display customer feedback.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto elevation-20',
                color='purple',
                dark=True,
                style='max-width: 400px;',
                children=[
                    v.Row(
                        justify='space-between',
                        children=[
                            v.Col(
                                cols=8,
                                children=[
                                    v.CardTitle(
                                        children=[
                                            v.Html(
                                                tag='div',
                                                children=[
                                                    v.Html(
                                                        tag='div',
                                                        class_='text-h5',
                                                        children=['Halycon Days'],
                                                    ),
                                                    v.Html(
                                                        tag='div',
                                                        children=['Ellie Goulding'],
                                                    ),
                                                    v.Html(
                                                        tag='div',
                                                        children=['(2013)'],
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                            v.Img(
                                class_='shrink ma-2',
                                contain=True,
                                height='125px',
                                src='https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                                style_='flex-basis: 125px',
                            ),
                        ],
                    ),
                    v.Divider(dark=True, class_="my-0"),
                    v.CardActions(
                        class_='pa-4',
                        children=[
                            'Rate this album',
                            v.Spacer(),
                            v.Rating(
                                v_model=3.5,
                                background_color='white',
                                color='yellow accent-4',
                                dense=True,
                                half_increments=True,
                                hover=True,
                                size=18,
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto elevation-20',
                color='purple',
                dark=True,
                style='max-width: 400px;',
                children=[
                    v.Row(
                        justify='space-between',
                        children=[
                            v.Col(
                                cols=8,
                                children=[
                                    v.CardTitle(
                                        children=[
                                            v.Html(
                                                tag='div',
                                                children=[
                                                    v.Html(
                                                        tag='div',
                                                        class_='text-h5',
                                                        children=['Halycon Days'],
                                                    ),
                                                    v.Html(
                                                        tag='div',
                                                        children=['Ellie Goulding'],
                                                    ),
                                                    v.Html(
                                                        tag='div',
                                                        children=['(2013)'],
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                ],
                            ),
                            v.Img(
                                class_='shrink ma-2',
                                contain=True,
                                height='125px',
                                src='https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                                style_='flex-basis: 125px',
                            ),
                        ],
                    ),
                    v.Divider(dark=True, class_="my-0"),
                    v.CardActions(
                        class_='pa-4',
                        children=[
                            'Rate this album',
                            v.Spacer(),
                            v.Rating(
                                v_model=3.5,
                                background_color='white',
                                color='yellow accent-4',
                                dense=True,
                                half_increments=True,
                                hover=True,
                                size=18,
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto elevation-20"
                color="purple"
                dark
                style="max-width: 400px;"
            >
                <v-row justify="space-between">
                <v-col cols="8">
                    <v-card-title>
                    <div>
                        <div class="text-h5">
                        Halycon Days
                        </div>
                        <div>Ellie Goulding</div>
                        <div>(2013)</div>
                    </div>
                    </v-card-title>
                </v-col>
                <v-img
                    class="shrink ma-2"
                    contain
                    height="125px"
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    style="flex-basis: 125px"
                ></v-img>
                </v-row>
                <v-divider dark></v-divider>
                <v-card-actions class="pa-4">
                Rate this album
                <v-spacer></v-spacer>
                <span class="grey--text text--lighten-2 text-caption mr-2">
                    ({{ rating }})
                </span>
                <v-rating
                    v-model="rating"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="18"
                ></v-rating>
                </v-card-actions>
            </v-card>
            </template>