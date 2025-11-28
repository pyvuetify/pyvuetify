Carousel
========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/carousels/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Carousel <ipyvuetify.Carousel>` component is used to display large numbers of visual content on a rotating timer. It expands upon v-window by providing additional features targeted at displaying images.

.. api::

    :py:class:`ipyvuetify.Carousel`

Usage
-----

The Carousel component provides a simple way to cycle through images or content with built-in controls.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            carousel = v.Carousel(
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='red lighten-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 1'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='blue lighten-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 2'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='green lighten-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 3'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='orange lighten-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 4'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            carousel

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            carousel = v.Carousel(
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='red lighten-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 1'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='blue lighten-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 2'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='green lighten-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 3'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='orange lighten-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 4'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            carousel

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
              <v-carousel>
                <v-carousel-item>
                  <v-sheet height="400" color="red lighten-2">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">Slide 1</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="400" color="blue lighten-2">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">Slide 2</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="400" color="green lighten-2">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">Slide 3</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="400" color="orange lighten-2">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">Slide 4</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </template>

Cycle
-----

With the ``cycle`` prop you can have your slides automatically transition to the next available every 6 seconds (default).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            carousel = v.Carousel(
                cycle=True,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='primary',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['First Slide'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='secondary',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Second Slide'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='accent',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Third Slide'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            carousel

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            carousel = v.Carousel(
                cycle=True,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='primary',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['First Slide'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='secondary',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Second Slide'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='accent',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Third Slide'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            carousel

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
              <v-carousel cycle>
                <v-carousel-item>
                  <v-sheet height="400" color="primary">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">First Slide</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="400" color="secondary">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">Second Slide</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="400" color="accent">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">Third Slide</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </template>

Hide controls
-------------

You can hide the carousel navigation controls with ``:show_arrows=False``. Similarly, you can hide the bottom delimiters with ``hide_delimiters`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            carousel = v.Carousel(
                show_arrows=False,
                hide_delimiters=True,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='indigo',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['No Controls'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='teal',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Hidden Navigation'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='purple',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Clean Look'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            carousel

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            carousel = v.Carousel(
                show_arrows=False,
                hide_delimiters=True,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='indigo',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['No Controls'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='teal',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Hidden Navigation'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='purple',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Clean Look'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            carousel

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
              <v-carousel :show-arrows="false" hide-delimiters>
                <v-carousel-item>
                  <v-sheet height="400" color="indigo">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">No Controls</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="400" color="teal">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">Hidden Navigation</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="400" color="purple">
                    <v-container fill-height class="d-flex align-center justify-center">
                      <h1 class="white--text">Clean Look</h1>
                    </v-container>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </template>

Model
-----

You can control the carousel with ``v_model``. This example demonstrates manual control with buttons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            carousel = v.Carousel(
                v_model=0,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='red darken-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 1'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='blue darken-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 2'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='green darken-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 3'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            prev_btn = v.Btn(
                color='primary',
                children=[v.Icon(children=['mdi-chevron-left'])]
            )
            next_btn = v.Btn(
                color='primary',
                children=[v.Icon(children=['mdi-chevron-right'])]
            )

            def prev_slide(*args):
                carousel.v_model = max(0, carousel.v_model - 1)

            def next_slide(*args):
                carousel.v_model = min(2, carousel.v_model + 1)

            prev_btn.on_event('click', prev_slide)
            next_btn.on_event('click', next_slide)

            v.Container(
                children=[
                    carousel,
                    v.Row(
                        class_='mt-4',
                        justify='center',
                        children=[prev_btn, v.Spacer(), next_btn]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            carousel = v.Carousel(
                v_model=0,
                children=[
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='red darken-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 1'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='blue darken-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 2'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CarouselItem(
                        children=[
                            v.Sheet(
                                height='400px',
                                color='green darken-2',
                                children=[
                                    v.Container(
                                        fill_height=True,
                                        class_='d-flex align-center justify-center',
                                        children=[
                                            v.Html(tag='h1', class_='white--text', children=['Slide 3'])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

            prev_btn = v.Btn(
                color='primary',
                children=[v.Icon(children=['mdi-chevron-left'])]
            )
            next_btn = v.Btn(
                color='primary',
                children=[v.Icon(children=['mdi-chevron-right'])]
            )

            def prev_slide(*args):
                carousel.v_model = max(0, carousel.v_model - 1)

            def next_slide(*args):
                carousel.v_model = min(2, carousel.v_model + 1)

            prev_btn.on_event('click', prev_slide)
            next_btn.on_event('click', next_slide)

            v.Container(
                children=[
                    carousel,
                    v.Row(
                        class_='mt-4',
                        justify='center',
                        children=[prev_btn, v.Spacer(), next_btn]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
              <v-container>
                <v-carousel v-model="model">
                  <v-carousel-item>
                    <v-sheet height="400" color="red darken-2">
                      <v-container fill-height class="d-flex align-center justify-center">
                        <h1 class="white--text">Slide 1</h1>
                      </v-container>
                    </v-sheet>
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-sheet height="400" color="blue darken-2">
                      <v-container fill-height class="d-flex align-center justify-center">
                        <h1 class="white--text">Slide 2</h1>
                      </v-container>
                    </v-sheet>
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-sheet height="400" color="green darken-2">
                      <v-container fill-height class="d-flex align-center justify-center">
                        <h1 class="white--text">Slide 3</h1>
                      </v-container>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
                <v-row class="mt-4" justify="center">
                  <v-btn color="primary" @click="model = Math.max(0, model - 1)">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="model = Math.min(2, model + 1)">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </template>

            <script>
            export default {
              data() {
                return {
                  model: 0
                }
              }
            }
            </script>
