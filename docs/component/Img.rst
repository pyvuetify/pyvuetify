Img
===

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Images documentation
    <https://v2.vuetifyjs.com/en/components/images/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Img <ipyvuetify.Img>` component is packed with features to
support rich media. Combined with the `vuetify-loader
<https://github.com/vuetifyjs/vuetify-loader>`__, you can add dynamic
progressive images to provide a better user experience.

.. api::

    :py:class:`ipyvuetify.Img`

Usage
-----

:py:class:`Img <ipyvuetify.Img>` component is used to display a responsive
image with lazy-load and placeholder.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v
    from ipywidgets import jslink

    contains = v.Checkbox(label='Contain',v_model=False)
    max_height = v.Slider(label='Max Height', min=100, max=500, step=1, v_model=300)
    max_width = v.Slider(label='Max Width', min=100, max=500, step=1, v_model=400)

    img = v.Img(
        src="https://picsum.photos/id/11/500/300",
        contain=False,
        max_height=300,
        max_width=400
    )

    jslink((contains, 'v_model'), (img, 'contain'))
    jslink((max_height, 'v_model'), (img, 'max_height'))
    jslink((max_width, 'v_model'), (img, 'max_width'))

    v.Container(children=[contains, max_height, max_width, img])

Examples
--------

Aspect ratio
^^^^^^^^^^^^

You can set a fixed aspect ratio if you want to change aspect ratio of the
image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            slider = v.Slider(min=200, max=500, step=1, v_model=300)
            img = v.Img(
                aspect_ratio=16/9,
                width=300,
                src='https://cdn.vuetifyjs.com/images/parallax/material.jpg'
            )
            jslink((slider, 'v_model'), (img, 'width'))

            v.Container(children=[slider, img])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            slider = v.Slider(label='Width', min=200, max=500, step=1, v_model=300)
            img = v.Img(
                aspect_ratio=16/9,
                width=300,
                src='https://cdn.vuetifyjs.com/images/parallax/material.jpg'
            )
            jslink((slider, 'v_model'), (img, 'width'))

            v.Container(children=[slider, img])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="d-flex flex-column justify-space-between align-center">
                <v-slider
                v-model="width"
                class="align-self-stretch"
                min="200"
                max="500"
                step="1"
                ></v-slider>

                <v-img
                :aspect-ratio="16/9"
                :width="width"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                ></v-img>
            </div>
            </template>

Contain
^^^^^^^

If the provided aspect ratio doesn't match that of the actual image, the default
behavior is to fill as much space as possible, clipping the sides of the image.
Enabling the ``contain`` prop will prevent this, but will result in empty space
at the sides.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(fluid=True, children=[
                v.Row(justify='space-around', children=[
                    v.Col(cols=5, children=[
                        v.Html(tag="h3", children=["Default (cover)"], class_='mb-1'),
                        v.Html(tag="h4", children=["Matching"], class_='subheading'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=1.7
                        ),
                        v.Html(tag="h4", children=["Too high"], class_='subheading pt-4'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=2
                        ),
                        v.Html(tag="h4", children=["Too low"], class_='subheading pt-4'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=1.4
                        ),
                    ]),
                    v.Col(cols=5, children=[
                        v.Html(tag="h3", children=["Contain"], class_='mb-1'),
                        v.Html(tag="h4", children=["Matching"], class_='subheading'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=1.7,
                            contain=True
                        ),
                        v.Html(tag="h4", children=["Too high"], class_='subheading pt-4'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=2,
                            contain=True
                        ),
                        v.Html(tag="h4", children=["Too low"], class_='subheading pt-4'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=1.4,
                            contain=True
                        ),
                    ]),
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(fluid=True, children=[
                v.Row(justify='space-around', children=[
                    v.Col(cols=5, children=[
                        v.Html(tag="h3", children=["Default (cover)"], class_='mb-1'),
                        v.Html(tag="h4", children=["Matching"], class_='subheading'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=1.7
                        ),
                        v.Html(tag="h4", children=["Too high"], class_='subheading pt-4'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=2
                        ),
                        v.Html(tag="h4", children=["Too low"], class_='subheading pt-4'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=1.4
                        ),
                    ]),
                    v.Col(cols=5, children=[
                        v.Html(tag="h3", children=["Contain"], class_='mb-1'),
                        v.Html(tag="h4", children=["Matching"], class_='subheading'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=1.7,
                            contain=True
                        ),
                        v.Html(tag="h4", children=["Too high"], class_='subheading pt-4'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=2,
                            contain=True
                        ),
                        v.Html(tag="h4", children=["Too low"], class_='subheading pt-4'),
                        v.Img(
                            src='https://picsum.photos/510/300?random',
                            aspect_ratio=1.4,
                            contain=True
                        ),
                    ]),
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row justify="space-around">
                <v-col cols="5">
                    <div class="text-h6 mb-1">
                    Default (cover)
                    </div>
                    <div class="subheading">
                    Matching
                    </div>
                    <v-img
                    src="https://picsum.photos/510/300?random"
                    aspect-ratio="1.7"
                    ></v-img>
                    <div class="subheading pt-4">
                    Too high
                    </div>
                    <v-img
                    src="https://picsum.photos/510/300?random"
                    aspect-ratio="2"
                    ></v-img>
                    <div class="subheading pt-4">
                    Too low
                    </div>
                    <v-img
                    src="https://picsum.photos/510/300?random"
                    aspect-ratio="1.4"
                    ></v-img>
                </v-col>

                <v-col cols="5">
                    <div class="text-h6 mb-1">
                    Contain
                    </div>
                    <div class="subheading">
                    Matching
                    </div>
                    <v-img
                    src="https://picsum.photos/510/300?random"
                    aspect-ratio="1.7"
                    contain
                    ></v-img>
                    <div class="subheading pt-4">
                    Too high
                    </div>
                    <v-img
                    src="https://picsum.photos/510/300?random"
                    aspect-ratio="2"
                    contain
                    ></v-img>
                    <div class="subheading pt-4">
                    Too low
                    </div>
                    <v-img
                    src="https://picsum.photos/510/300?random"
                    aspect-ratio="1.4"
                    contain
                    ></v-img>
                </v-col>
                </v-row>
            </v-container>
            </template>

Gradients
^^^^^^^^^

The ``gradient`` prop can be used to apply a simple gradient overlay to the
image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Img(
                src='https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
                gradient='to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Img(
                src='https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
                gradient='to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row>
                <v-col
                cols="6"
                sm="4"
                >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                ></v-img>
                </v-col>

                <v-col
                cols="6"
                sm="4"
                >
                <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                    <div class="fill-height bottom-gradient"></div>
                </v-img>
                </v-col>

                <v-col
                cols="6"
                sm="4"
                >
                <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                    <div class="fill-height repeating-gradient"></div>
                </v-img>
                </v-col>
            </v-row>
            </template>

Height
^^^^^^

:py:class:`Img <ipyvuetify.Img>` will automatically grow to the size of its
``src``, preserving the correct aspect ratio. You can limit this with the
``height`` and ``max-height`` props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_='fill-height',
                fluid=True,
                min_height='434px',
                children=[
                    v.FadeTransition(
                        mode='out-in',
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.Card(
                                                children=[
                                                    v.Img(
                                                        src='https://picsum.photos/350/165?random',
                                                        height='125',
                                                        class_='grey darken-4'
                                                    ),
                                                    v.CardTitle(
                                                        class_='text-h6',
                                                        children=['height']
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.Card(
                                                children=[
                                                    v.Img(
                                                        src='https://picsum.photos/350/165?random',
                                                        height='125',
                                                        contain=True,
                                                        class_='grey darken-4'
                                                    ),
                                                    v.CardTitle(
                                                        class_='text-h6',
                                                        children=['height with contain']
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.Card(
                                                children=[
                                                    v.Img(
                                                        src='https://picsum.photos/350/165?random',
                                                        max_height='125',
                                                        class_='grey darken-4'
                                                    ),
                                                    v.CardTitle(
                                                        class_='text-h6',
                                                        children=['max-height']
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.Card(
                                                children=[
                                                    v.Img(
                                                        src='https://picsum.photos/350/165?random',
                                                        max_height='125',
                                                        contain=True,
                                                        class_='grey darken-4'
                                                    ),
                                                    v.CardTitle(
                                                        class_='text-h6',
                                                        children=['max-height with contain']
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

            v.Container(
                class_='fill-height',
                fluid=True,
                min_height='434px',
                children=[
                    v.FadeTransition(
                        mode='out-in',
                        children=[
                            v.Row(
                                children=[
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.Card(
                                                children=[
                                                    v.Img(
                                                        src='https://picsum.photos/350/165?random',
                                                        height='125',
                                                        class_='grey darken-4'
                                                    ),
                                                    v.CardTitle(
                                                        class_='text-h6',
                                                        children=['height']
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.Card(
                                                children=[
                                                    v.Img(
                                                        src='https://picsum.photos/350/165?random',
                                                        height='125',
                                                        contain=True,
                                                        class_='grey darken-4'
                                                    ),
                                                    v.CardTitle(
                                                        class_='text-h6',
                                                        children=['height with contain']
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.Card(
                                                children=[
                                                    v.Img(
                                                        src='https://picsum.photos/350/165?random',
                                                        max_height='125',
                                                        class_='grey darken-4'
                                                    ),
                                                    v.CardTitle(
                                                        class_='text-h6',
                                                        children=['max-height']
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.Card(
                                                children=[
                                                    v.Img(
                                                        src='https://picsum.photos/350/165?random',
                                                        max_height='125',
                                                        contain=True,
                                                        class_='grey darken-4'
                                                    ),
                                                    v.CardTitle(
                                                        class_='text-h6',
                                                        children=['max-height with contain']
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
            <v-container
                class="fill-height"
                fluid
                style="min-height: 434px"
            >
                <v-fade-transition mode="out-in">
                <v-row>
                    <v-col cols="6">
                    <v-card>
                        <v-img
                        src="https://picsum.photos/350/165?random"
                        height="125"
                        class="grey darken-4"
                        ></v-img>
                        <v-card-title class="text-h6">
                        height
                        </v-card-title>
                    </v-card>
                    </v-col>

                    <v-col cols="6">
                    <v-card>
                        <v-img
                        src="https://picsum.photos/350/165?random"
                        height="125"
                        contain
                        class="grey darken-4"
                        ></v-img>
                        <v-card-title class="text-h6">
                        height with contain
                        </v-card-title>
                    </v-card>
                    </v-col>

                    <v-col cols="6">
                    <v-card>
                        <v-img
                        src="https://picsum.photos/350/165?random"
                        max-height="125"
                        class="grey darken-4"
                        ></v-img>
                        <v-card-title class="text-h6">
                        max-height
                        </v-card-title>
                    </v-card>
                    </v-col>

                    <v-col cols="6">
                    <v-card>
                        <v-img
                        src="https://picsum.photos/350/165?random"
                        max-height="125"
                        contain
                        class="grey darken-4"
                        ></v-img>
                        <v-card-title class="text-h6">
                        max-height with contain
                        </v-card-title>
                    </v-card>
                    </v-col>
                </v-row>
                </v-fade-transition>
            </v-container>
            </template>

Placeholder
^^^^^^^^^^^

:py:class:`Img <ipyvuetify.Img>` has a special ``placeholder`` slot for
placeholder to display while image's loading. Note: the example below has bad
src which won't load for you to see placeholder.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Row(justify='center', children=[
                v.Img(
                    src='https://bad.src/not/valid',
                    lazy_src='https://picsum.photos/id/11/100/60',
                    max_width='500',
                    max_height='300',
                    children=[
                        v.Row(
                            class_='fill-height ma-0',
                            align='center',
                            justify='center',
                            children=[
                                v.ProgressCircular(
                                    indeterminate=True,
                                    color='grey lighten-5'
                                )
                            ]
                        )
                    ],
                    slots={
                        'placeholder': 'placeholder'
                    }
                )
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Row(justify='center', children=[
                v.Img(
                    src='https://bad.src/not/valid',
                    lazy_src='https://picsum.photos/id/11/100/60',
                    max_width='500',
                    max_height='300',
                    children=[
                        v.Row(
                            class_='fill-height ma-0',
                            align='center',
                            justify='center',
                            children=[
                                v.ProgressCircular(
                                    indeterminate=True,
                                    color='grey lighten-5'
                                )
                            ]
                        )
                    ],
                    slots={
                        'placeholder': 'placeholder'
                    }
                )
            ])


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-img
                src="https://bad.src/not/valid"
                lazy-src="https://picsum.photos/id/11/100/60"
                max-width="500"
                max-height="300"
                >
                <template v-slot:placeholder>
                    <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                    >
                    <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                    ></v-progress-circular>
                    </v-row>
                </template>
                </v-img>
            </v-row>
            </template>

Grid
^^^^

You can use :py:class:`Img <ipyvuetify.Img>` to make, for example, a picture
gallery.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Row(children=[
                v.Col(
                    cols=4,
                    class_='d-flex child-flex',
                    children=[
                        v.Img(
                            src=f'https://picsum.photos/500/300?image={n * 5 + 10}',
                            lazy_src=f'https://picsum.photos/10/6?image={n * 5 + 10}',
                            aspect_ratio=1,
                            class_='grey lighten-2',
                            v_slots=[{
                                "name": "placeholder",
                                "children": [
                                    v.Row(
                                        class_='fill-height ma-0',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.ProgressCircular(
                                                indeterminate=True,
                                                color='grey lighten-5'
                                            )
                                        ]
                                    )
                                ],
                            }],
                        )
                    ]
                ) for n in range(9)
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Row(children=[
                v.Col(
                    cols=4,
                    class_='d-flex child-flex',
                    children=[
                        v.Img(
                            src=f'https://picsum.photos/500/300?image={n * 5 + 10}',
                            lazy_src=f'https://picsum.photos/10/6?image={n * 5 + 10}',
                            aspect_ratio=1,
                            class_='grey lighten-2',
                            v_slots=[{
                                "name": "placeholder",
                                "children": [
                                    v.Row(
                                        class_='fill-height ma-0',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.ProgressCircular(
                                                indeterminate=True,
                                                color='grey lighten-5'
                                            )
                                        ]
                                    )
                                ],
                            }],
                        )
                    ]
                ) for n in range(9)
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row>
                <v-col
                v-for="n in 9"
                :key="n"
                class="d-flex child-flex"
                cols="4"
                >
                <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                >
                    <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                    </template>
                </v-img>
                </v-col>
            </v-row>
            </template>
