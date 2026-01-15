Footer
======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/footers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Footer <ipyvuetify.Footer>` component is used for displaying general information that a user might want to access from any page within your site.

.. api::

    :py:class:`ipyvuetify.Footer`

Usage
-----

The ``v-footer`` component in its simplest form is a container.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Footer(
                children=[
                    v.Html(tag='div', children=['2025 — Vuetify'])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Footer(
                children=[
                    v.Html(tag='div', children=['2025 — Vuetify'])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-footer>
                <div>2025 — Vuetify</div>
              </v-footer>
            </template>

Padless
-------

The ``padless`` prop removes all default padding from the footer component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Footer(
                padless=True,
                children=[
                    v.Card(
                        flat=True,
                        tile=True,
                        width='100%',
                        class_='text-center',
                        children=[
                            v.CardText(children=[
                                v.Btn(class_='mx-4', icon=True, children=[
                                    v.Icon(size=24, children=['mdi-home'])
                                ]),
                                v.Btn(class_='mx-4', icon=True, children=[
                                    v.Icon(size=24, children=['mdi-email'])
                                ]),
                                v.Btn(class_='mx-4', icon=True, children=[
                                    v.Icon(size=24, children=['mdi-calendar'])
                                ]),
                                v.Btn(class_='mx-4', icon=True, children=[
                                    v.Icon(size=24, children=['mdi-delete'])
                                ])
                            ]),
                            v.Divider(),
                            v.CardText(children=['2025 — Vuetify'])
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Footer(
                padless=True,
                children=[
                    v.Card(
                        flat=True,
                        tile=True,
                        width='100%',
                        class_='text-center',
                        children=[
                            v.CardText(children=[
                                v.Btn(class_='mx-4', icon=True, children=[
                                    v.Icon(size=24, children=['mdi-home'])
                                ]),
                                v.Btn(class_='mx-4', icon=True, children=[
                                    v.Icon(size=24, children=['mdi-email'])
                                ]),
                                v.Btn(class_='mx-4', icon=True, children=[
                                    v.Icon(size=24, children=['mdi-calendar'])
                                ]),
                                v.Btn(class_='mx-4', icon=True, children=[
                                    v.Icon(size=24, children=['mdi-delete'])
                                ])
                            ]),
                            v.Divider(),
                            v.CardText(children=['2025 — Vuetify'])
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-footer padless>
                <v-card flat tile width="100%" class="text-center">
                  <v-card-text>
                    <v-btn class="mx-4" icon>
                      <v-icon size="24">mdi-home</v-icon>
                    </v-btn>
                    <v-btn class="mx-4" icon>
                      <v-icon size="24">mdi-email</v-icon>
                    </v-btn>
                    <v-btn class="mx-4" icon>
                      <v-icon size="24">mdi-calendar</v-icon>
                    </v-btn>
                    <v-btn class="mx-4" icon>
                      <v-icon size="24">mdi-delete</v-icon>
                    </v-btn>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text>2025 — Vuetify</v-card-text>
                </v-card>
              </v-footer>
            </template>

Company Footer
--------------

The footer component as a basic company footer with links.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Footer(
                dark=True,
                padless=True,
                children=[
                    v.Card(
                        flat=True,
                        tile=True,
                        dark=True,
                        width='100%',
                        class_='text-center',
                        children=[
                            v.CardText(children=[
                                v.Btn(class_='mx-4', text=True, children=['Home']),
                                v.Btn(class_='mx-4', text=True, children=['About Us']),
                                v.Btn(class_='mx-4', text=True, children=['Team']),
                                v.Btn(class_='mx-4', text=True, children=['Services']),
                                v.Btn(class_='mx-4', text=True, children=['Blog']),
                                v.Btn(class_='mx-4', text=True, children=['Contact Us'])
                            ]),
                            v.Divider(),
                            v.CardText(children=['2025 — Vuetify'])
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Footer(
                dark=True,
                padless=True,
                children=[
                    v.Card(
                        flat=True,
                        tile=True,
                        dark=True,
                        width='100%',
                        class_='text-center',
                        children=[
                            v.CardText(children=[
                                v.Btn(class_='mx-4', text=True, children=['Home']),
                                v.Btn(class_='mx-4', text=True, children=['About Us']),
                                v.Btn(class_='mx-4', text=True, children=['Team']),
                                v.Btn(class_='mx-4', text=True, children=['Services']),
                                v.Btn(class_='mx-4', text=True, children=['Blog']),
                                v.Btn(class_='mx-4', text=True, children=['Contact Us'])
                            ]),
                            v.Divider(),
                            v.CardText(children=['2025 — Vuetify'])
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-footer dark padless>
                <v-card flat tile dark width="100%" class="text-center">
                  <v-card-text>
                    <v-btn class="mx-4" text>Home</v-btn>
                    <v-btn class="mx-4" text>About Us</v-btn>
                    <v-btn class="mx-4" text>Team</v-btn>
                    <v-btn class="mx-4" text>Services</v-btn>
                    <v-btn class="mx-4" text>Blog</v-btn>
                    <v-btn class="mx-4" text>Contact Us</v-btn>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text>2025 — Vuetify</v-card-text>
                </v-card>
              </v-footer>
            </template>
