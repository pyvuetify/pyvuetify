Carousel
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/carousels/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Carousel <ipyvuetify.Carousel>` component is used to display large numbers of visual content on a rotating timer. It expands upon v-window by providing additional features targeted at displaying images.

.. api::

    - :py:class:`ipyvuetify.Carousel`
    - :py:class:`ipyvuetify.CarouselItem`
    - :py:class:`ipyvuetify.CarouselReverseTransition`
    - :py:class:`ipyvuetify.CarouselTransition`

Usage
-----

The Carousel component expands upon the window component by providing additional features targeted at displaying images.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    colors = ['primary', 'secondary', 'error', 'success', 'warning']

    v.Carousel(
        v_model='model',
        children=[
            v.CarouselItem(
                children=[
                    v.Sheet(
                        color=color,
                        height='100%',
                        tile=True,
                        children=[
                            v.Row(
                                class_='fill-height',
                                align='center',
                                justify='center',
                                children=[
                                    v.Html(tag='h1', children=[f'Slide {i + 1}'])
                                ]
                            )
                        ]
                    )
                ]
            ) for i, color in enumerate(colors)
        ]
    )

Custom delimiters
-----------------

Use any available icon as your carousel's slide delimiter.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'error', 'success', 'warning']

            v.Carousel(
                continuous=False,
                cycle=False,
                show_arrows=False,
                hide_delimiter_background=True,
                delimiter_icon='mdi-minus',
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                color=color,
                                height='100%',
                                tile=True,
                                children=[
                                    v.Row(
                                        class_='fill-height',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.Html(tag='h1', children=[f'Slide {i + 1}'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for i, color in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'error', 'success', 'warning']

            v.Carousel(
                continuous=False,
                cycle=False,
                show_arrows=False,
                hide_delimiter_background=True,
                delimiter_icon='mdi-minus',
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                color=color,
                                height='100%',
                                tile=True,
                                children=[
                                    v.Row(
                                        class_='fill-height',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.Html(tag='h1', children=[f'Slide {i + 1}'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for i, color in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
                <v-carousel
                    :continuous="false"
                    :cycle="cycle"
                    :show-arrows="false"
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    height="300"
                >
                    <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                    >
                        <v-sheet
                            :color="colors[i]"
                            height="100%"
                            tile
                        >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                                <div class="text-h2">
                                    {{ slide }} Slide
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </template>

Custom transition
-----------------

The :py:class:`CarouselItem <ipyvuetify.CarouselItem>` component can have its
transition/reverse-transition changed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
            ]

            v.Carousel(
                children=[
                    v.CarouselItem(
                        reverse_transition='fade-transition',
                        transition='fade-transition',
                        children=[v.Img(src=item["src"])]
                    ) for item in items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
            ]

            v.Carousel(
                children=[
                    v.CarouselItem(
                        reverse_transition='fade-transition',
                        transition='fade-transition',
                        children=[v.Img(src=item["src"])]
                    ) for item in items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
                <v-carousel>
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </template>



Cycle
-----

With the ``cycle`` prop you can have your slides automatically transition to the next available every 6 seconds (default).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'error', 'success', 'warning']

            v.Carousel(
                continuous=False,
                cycle=True,
                hide_delimiter_background=True,
                show_arrows_on_hover=True,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                color=color,
                                height='100%',
                                tile=True,
                                children=[
                                    v.Row(
                                        class_='fill-height',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.Html(tag='h1', children=[f'Slide {i + 1}'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for i, color in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'error', 'success', 'warning']

            v.Carousel(
                continuous=False,
                cycle=True,
                hide_delimiter_background=True,
                show_arrows_on_hover=True,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                color=color,
                                height='100%',
                                tile=True,
                                children=[
                                    v.Row(
                                        class_='fill-height',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.Html(tag='h1', children=[f'Slide {i + 1}'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for i, color in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
                <v-carousel
                    :continuous="false"
                    :cycle="true"
                    height="300"
                    show-arrows-on-hover
                >
                    <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                    >
                        <v-sheet
                            :color="colors[i]"
                            height="100%"
                            tile
                        >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                                <div class="text-h2">
                                    {{ slide }} Slide
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </template>

Hide controls
-------------

You can hide the carousel navigation controls with ``show_arrows=False``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
            ]

            v.Carousel(
                continuous=False,
                cycle=True,
                show_arrows=False,
                children=[v.CarouselItem(children=[v.Img(src=item["src"])]) for item in items]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
            ]

            v.Carousel(
                continuous=False,
                cycle=True,
                show_arrows=False,
                children=[v.CarouselItem(children=[v.Img(src=item["src"])]) for item in items]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
                <v-carousel
                    :continuous="false"
                    :cycle="true"
                    :show-arrows="false"
                    height="300"
                >
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </template>

Customized arrows
-----------------

Arrows can be customized by using the ``prev`` and ``next`` slots to replace the
default navigation controls.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'error', 'success', 'warning']

            v.Carousel(
                height='400px',
                hide_delimiter_background=True,
                show_arrows_on_hover=True,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                color=color,
                                height='100%',
                                children=[
                                    v.Row(
                                        class_='fill-height',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.Html(tag='h2', children=[f'{i + 1} Slide'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for i, color in enumerate(colors)
                ],
                v_slots=[
                    {
                        "name": "prev",
                        "variable": "var",
                        "children": [v.Btn(color='success', children=['Previous slide'], v_bind="var.attrs", v_on="var.on")]
                    },
                    {
                        "name": "next",
                        "variable": "var",
                        "children": [v.Btn(color='info', children=['Next slide'], v_bind="var.attrs", v_on="var.on")]
                    }
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'error', 'success', 'warning']

            v.Carousel(
                height='400px',
                hide_delimiter_background=True,
                show_arrows_on_hover=True,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                color=color,
                                height='100%',
                                children=[
                                    v.Row(
                                        class_='fill-height',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.Html(tag='h2', children=[f'{i + 1} Slide'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for i, color in enumerate(colors)
                ],
                v_slots=[
                    {
                        "name": "prev",
                        "variable": "var",
                        "children": [v.Btn(color='success', children=['Previous slide'], v_bind="var.attrs", v_on="var.on")]
                    },
                    {
                        "name": "next",
                        "variable": "var",
                        "children": [v.Btn(color='info', children=['Next slide'], v_bind="var.attrs", v_on="var.on")]
                    }
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
                <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
                >
                    <template v-slot:prev="{ on, attrs }">
                        <v-btn
                            color="success"
                            v-bind="attrs"
                            v-on="on"
                        >Previous slide</v-btn>
                    </template>
                    <template v-slot:next="{ on, attrs }">
                        <v-btn
                            color="info"
                            v-bind="attrs"
                            v-on="on"
                        >Next slide</v-btn>
                    </template>
                    <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                    >
                        <v-sheet
                            :color="colors[i]"
                            height="100%"
                        >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                                <div class="text-h2">
                                    {{ slide }} Slide
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </template>

Hide delimiters
---------------

You can hide the bottom controls with ``hide-delimiters`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
            ]

            v.Carousel(
                hide_delimiters=True,
                children=[v.CarouselItem(children=[v.Img(src=item["src"])]) for item in items]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
            ]

            v.Carousel(
                hide_delimiters=True,
                children=[v.CarouselItem(children=[v.Img(src=item["src"])]) for item in items]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
                <v-carousel
                    hide-delimiters
                    height="300"
                >
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </template>



Progress
--------

You can show a linear progress bar with the ``progress`` prop. It will indicate
how far into the cycle the carousel currently is.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
            ]

            v.Carousel(
                hide_delimiters=True,
                progress=True,
                children=[v.CarouselItem(children=[v.Img(src=item["src"])]) for item in items]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
                {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
            ]

            v.Carousel(
                hide_delimiters=True,
                progress=True,
                children=[v.CarouselItem(children=[v.Img(src=item["src"])]) for item in items]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
                <v-carousel
                    hide-delimiters
                    progress
                    height="300"
                >
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </template>
Model
-----

You can control the carousel with ``v_model``. This example demonstrates manual
control with buttons. This example will start the carousel on the 3rd slide.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'error', 'success', 'warning']

            v.Carousel(
                v_model=2,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                color=color,
                                height='100%',
                                tile=True,
                                children=[
                                    v.Row(
                                        class_='fill-height',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.Html(tag='h1', children=[f'Slide {i + 1}'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for i, color in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'error', 'success', 'warning']

            v.Carousel(
                v_model=2,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                color=color,
                                height='100%',
                                tile=True,
                                children=[
                                    v.Row(
                                        class_='fill-height',
                                        align='center',
                                        justify='center',
                                        children=[
                                            v.Html(tag='h1', children=[f'Slide {i + 1}'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ) for i, color in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
                <v-carousel
                    v-model="model"
                    height="300"
                >
                    <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                    >
                        <v-sheet
                            :color="colors[i]"
                            height="100%"
                            tile
                        >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                                <div class="text-h2">
                                    {{ slide }} Slide
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
