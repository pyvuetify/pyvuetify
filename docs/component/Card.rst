Card
====

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Card documentation <https://v2.vuetifyjs.com/en/components/cards/>`_. All examples have been converted to ipyvuetify syntax.

The :py:class:`Card <ipyvuetify.Card>` component is a versatile component that can be used for anything from a panel to a static image. The card component has numerous helper components to make markup as easy as possible: :py:class:`CardTitle <ipyvuetify.CardTitle>`, :py:class:`CardSubtitle <ipyvuetify.CardSubtitle>`, :py:class:`CardText <ipyvuetify.CardText>`, and :py:class:`CardActions <ipyvuetify.CardActions>`.

.. api::

    :py:class:`ipyvuetify.Card`

Usage
-----

A card has 4 basic components: ``v-card-title``, ``v-card-subtitle``, ``v-card-text`` and ``v-card-actions``.

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

Outlined
--------

An ``outlined`` card has 0 elevation and contains a soft border.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto',
                max_width=344,
                outlined=True,
                children=[
                    v.ListItem(
                        three_line=True,
                        children=[
                            v.ListItemContent(children=[
                                v.Html(tag='div', class_='text-overline mb-4', children=['OVERLINE']),
                                v.ListItemTitle(class_='text-h5 mb-1', children=['Headline 5']),
                                v.ListItemSubtitle(children=['Greyhound divisely hello coldly wonderfully']),
                            ]),
                            v.ListItemAvatar(tile=True, size=80, color='grey'),
                        ]
                    ),
                    v.CardActions(children=[
                        v.Btn(outlined=True, rounded=True, text=True, children=['Button'])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto',
                max_width=344,
                outlined=True,
                children=[
                    v.ListItem(
                        three_line=True,
                        children=[
                            v.ListItemContent(children=[
                                v.Html(tag='div', class_='text-overline mb-4', children=['OVERLINE']),
                                v.ListItemTitle(class_='text-h5 mb-1', children=['Headline 5']),
                                v.ListItemSubtitle(children=['Greyhound divisely hello coldly wonderfully']),
                            ]),
                            v.ListItemAvatar(tile=True, size=80, color='grey'),
                        ]
                    ),
                    v.CardActions(children=[
                        v.Btn(outlined=True, rounded=True, text=True, children=['Button'])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="text-overline mb-4">OVERLINE</div>
                            <v-list-item-title class="text-h5 mb-1">
                                Headline 5
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Greyhound divisely hello coldly wonderfully
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80" color="grey">
                        </v-list-item-avatar>
                    </v-list-item>
                    <v-card-actions>
                        <v-btn outlined rounded text>Button</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
