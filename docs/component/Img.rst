Img
===

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/images/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Img <ipyvuetify.Img>` component is packed with features to support rich media. Combined with the vuetify-loader, you can add dynamic progressive images to provide a better user experience.

.. api::

    :py:class:`ipyvuetify.Img`

Usage
-----

``v-img`` component is used to display a responsive image with lazy-load and placeholder.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Img(
                lazy_src='https://picsum.photos/id/11/10/6',
                max_height='150',
                max_width='250',
                src='https://picsum.photos/id/11/500/300'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Img(
                lazy_src='https://picsum.photos/id/11/10/6',
                max_height='150',
                max_width='250',
                src='https://picsum.photos/id/11/500/300'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="150"
                max-width="250"
                src="https://picsum.photos/id/11/500/300"
              ></v-img>
            </template>

Aspect Ratio
------------

You can set a fixed aspect ratio if you want to change aspect ratio of the image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(cols=6, children=[
                        v.Img(
                            src='https://picsum.photos/id/11/500/300',
                            aspect_ratio='1'
                        )
                    ]),
                    v.Col(cols=6, children=[
                        v.Img(
                            src='https://picsum.photos/id/11/500/300',
                            aspect_ratio='1.7'
                        )
                    ])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(cols=6, children=[
                        v.Img(
                            src='https://picsum.photos/id/11/500/300',
                            aspect_ratio='1'
                        )
                    ]),
                    v.Col(cols=6, children=[
                        v.Img(
                            src='https://picsum.photos/id/11/500/300',
                            aspect_ratio='1.7'
                        )
                    ])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-img
                      src="https://picsum.photos/id/11/500/300"
                      aspect-ratio="1"
                    ></v-img>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://picsum.photos/id/11/500/300"
                      aspect-ratio="1.7"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </template>

Gradients
---------

The ``gradient`` prop can be used to apply a simple gradient overlay to the image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Img(
                src='https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
                gradient='to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)',
                max_height='300',
                max_width='400'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Img(
                src='https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
                gradient='to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)',
                max_height='300',
                max_width='400'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                max-height="300"
                max-width="400"
              ></v-img>
            </template>

Height
------

``v-img`` will automatically grow to the size of its ``src``, preserving the correct aspect ratio. You can limit this with the ``height`` and ``max_height`` props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(cols=6, children=[
                        v.Card(children=[
                            v.CardTitle(children=['height']),
                            v.Img(
                                src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                                height='200'
                            )
                        ])
                    ]),
                    v.Col(cols=6, children=[
                        v.Card(children=[
                            v.CardTitle(children=['max-height']),
                            v.Img(
                                src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                                max_height='200'
                            )
                        ])
                    ])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(cols=6, children=[
                        v.Card(children=[
                            v.CardTitle(children=['height']),
                            v.Img(
                                src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                                height='200'
                            )
                        ])
                    ]),
                    v.Col(cols=6, children=[
                        v.Card(children=[
                            v.CardTitle(children=['max-height']),
                            v.Img(
                                src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                                max_height='200'
                            )
                        ])
                    ])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-card>
                      <v-card-title>height</v-card-title>
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200"
                      ></v-img>
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card>
                      <v-card-title>max-height</v-card-title>
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        max-height="200"
                      ></v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </template>
