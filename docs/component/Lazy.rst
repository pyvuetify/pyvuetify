Lazy
====

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/lazy/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Lazy <ipyvuetify.Lazy>` component is used to dynamically load components based upon an elements visibility.

.. api::

    :py:class:`ipyvuetify.Lazy`

Usage
-----

The ``v-lazy`` component by default will not render its contents until it has been intersected. Scroll down and watch the element render as you go past it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                style_='height: 400px; overflow-y: auto;',
                children=[
                    v.Html(tag='div', class_='text-h6 pa-4', children=['Scroll down']),
                    v.Html(tag='div', style_='height: 300px;'),
                    v.Html(tag='div', children=['The card will appear below:']),
                    v.Lazy(
                        min_height='200',
                        children=[
                            v.Card(
                                elevation=2,
                                class_='mx-auto my-4',
                                max_width='300',
                                children=[
                                    v.CardTitle(children=['Lazy Loaded Card']),
                                    v.CardText(children=[
                                        'This card was lazy loaded when you scrolled to it.'
                                    ])
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
                style_='height: 400px; overflow-y: auto;',
                children=[
                    v.Html(tag='div', class_='text-h6 pa-4', children=['Scroll down']),
                    v.Html(tag='div', style_='height: 300px;'),
                    v.Html(tag='div', children=['The card will appear below:']),
                    v.Lazy(
                        min_height='200',
                        children=[
                            v.Card(
                                elevation=2,
                                class_='mx-auto my-4',
                                max_width='300',
                                children=[
                                    v.CardTitle(children=['Lazy Loaded Card']),
                                    v.CardText(children=[
                                        'This card was lazy loaded when you scrolled to it.'
                                    ])
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container style="height: 400px; overflow-y: auto;">
                <div class="text-h6 pa-4">Scroll down</div>
                <div style="height: 300px;"></div>
                <div>The card will appear below:</div>
                <v-lazy min-height="200">
                  <v-card
                    elevation="2"
                    class="mx-auto my-4"
                    max-width="300"
                  >
                    <v-card-title>Lazy Loaded Card</v-card-title>
                    <v-card-text>
                      This card was lazy loaded when you scrolled to it.
                    </v-card-text>
                  </v-card>
                </v-lazy>
              </v-container>
            </template>
