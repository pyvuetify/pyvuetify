Footer
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Footer documentation
    <https://v2.vuetifyjs.com/en/components/footer/>`__. All examples have been converted
    to ipyvuetify syntax.

The :py:class:`Footer <ipyvuetify.Footer>` component is used for displaying general
information that a user might want to access from any page within your site.

.. api::

    :py:class:`ipyvuetify.Footer`

Usage
-----

The :py:class:`Footer <ipyvuetify.Footer>` component in its simplest form is a container.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v
    from datetime import datetime as dt

    icons = ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"]

    v.Footer(
        children=[
            v.Card(
                flat=True,
                tile=True,
                width="100%",
                padless=True,
                class_="red lighten-1 text-center",
                children=[
                    v.CardText(
                        children=[
                            v.Btn(
                                icon=True,
                                class_="mx-4",
                                children=[v.Icon(children=[i])],
                            ) for i in icons
                        ],
                    ),
                    v.Divider(),
                    v.CardText(
                        class_="white--text",
                        children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["IpyVuetify"])],
                    ),
                ],
            ),
        ],
    )


Examples
--------

Padless Footer
^^^^^^^^^^^^^^

The ``padless`` prop removes all default padding from the footer component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from datetime import datetime as dt

            v.Footer(
                padless=True,
                children=[
                    v.Col(
                        class_="text-center",
                        cols="12",
                        children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from datetime import datetime as dt

            v.Footer(
                padless=True,
                children=[
                    v.Col(
                        class_="text-center",
                        cols="12",
                        children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-footer padless>
                <v-col
                class="text-center"
                cols="12"
                >
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-footer>
            </template>

Company Footer
^^^^^^^^^^^^^^

The footer component as a basic company footer with links.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Footer(
                color="primary",
                padless=True,
                children=[
                    v.Col(
                        class_="text-center",
                        justify_center=True,
                        no_gutters=True,
                        children=[
                            v.Btn(
                                color="white",
                                text=True,
                                rounded=True,
                                class_="my-2 d-inline",
                                children=[link.title()],
                            ) for link in ["home", "about us", "services", "contact"]
                        ],
                    ),
                    v.Col(
                        class_="primary py-4 text-center white--text",
                        cols="12",
                        children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Footer(
                color="primary",
                padless=True,
                children=[
                    v.Col(
                        class_="text-center",
                        justify_center=True,
                        no_gutters=True,
                        children=[
                            v.Btn(
                                color="white",
                                text=True,
                                rounded=True,
                                class_="my-2 d-inline",
                                children=[link.title()],
                            ) for link in ["home", "about us", "services", "contact"]
                        ],
                    ),
                    v.Col(
                        class_="primary py-4 text-center white--text",
                        cols="12",
                        children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-footer
                color="primary lighten-1"
                padless
            >
                <v-row
                justify="center"
                no-gutters
                >
                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    text
                    rounded
                    class="my-2"
                >
                    {{ link }}
                </v-btn>
                <v-col
                    class="primary lighten-2 py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
                </v-row>
            </v-footer>
            </template>

Indigo Footer
^^^^^^^^^^^^^

The footer component with Indigo background color and social media icons and button.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from datetime import datetime as dt

            icons = ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-linkedin"]

            v.Footer(
                dark=True,
                padless=True,
                children=[
                    v.Card(
                        flat=True,
                        tile=True,
                        class_="indigo lighten-1 white--text text-center",
                        children=[
                            v.CardText(
                                children=[
                                    v.Btn(
                                        icon=True,
                                        class_="mx-4 white--text",
                                        children=[v.Icon(size="24px", children=[i])],
                                    ) for i in icons
                                ],
                            ),
                            v.CardText(
                                class_="white--text pt-0",
                                children=[
                                    "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. "
                                    "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus "
                                    "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim "
                                    "a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula "
                                    "lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus "
                                    "iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor "
                                    "vel ut orci. Orci varius natoque penatibus et magnis dis parturient "
                                    "montes, nascetur ridiculus mus."
                                ],
                            ),
                            v.Divider(),
                            v.CardText(
                                class_="white--text",
                                children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from datetime import datetime as dt

            icons = ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-linkedin"]

            v.Footer(
                dark=True,
                padless=True,
                children=[
                    v.Card(
                        flat=True,
                        tile=True,
                        class_="indigo lighten-1 white--text text-center",
                        children=[
                            v.CardText(
                                children=[
                                    v.Btn(
                                        icon=True,
                                        class_="mx-4 white--text",
                                        children=[v.Icon(size="24px", children=[i])],
                                    ) for i in icons
                                ],
                            ),
                            v.CardText(
                                class_="white--text pt-0",
                                children=[
                                    "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. "
                                    "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus "
                                    "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim "
                                    "a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula "
                                    "lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus "
                                    "iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor "
                                    "vel ut orci. Orci varius natoque penatibus et magnis dis parturient "
                                    "montes, nascetur ridiculus mus."
                                ],
                            ),
                            v.Divider(),
                            v.CardText(
                                class_="white--text",
                                children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-footer
                dark
                padless
            >
                <v-card
                flat
                tile
                class="indigo lighten-1 white--text text-center"
                >
                <v-card-text>
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                    >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
                </v-card>
            </v-footer>
            </template>

Teal Footer
^^^^^^^^^^^

The footer component with a Teal color header and columns and rows of links.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from datetime import datetime as dt

            icons = ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-linkedin"]

            v.Footer(
                dark=True,
                padless=True,
                children=[
                    v.Card(
                        width="100%",
                        flat=True,
                        tile=True,
                        children=[
                            v.CardTitle(
                                class_="teal",
                                children=[
                                    v.Html(
                                        tag="strong",
                                        class_="subheading",
                                        children=["Get connected with us on social networks!"],
                                    ),
                                    v.Spacer(),
                                    *[
                                        v.Btn(
                                            icon=True,
                                            class_="mx-4",
                                            children=[v.Icon(size="24px", children=[i])],
                                        ) for i in icons
                                    ],
                                ],
                            ),
                            v.CardText(
                                class_="py-2 white--text text-center",
                                children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from datetime import datetime as dt

            icons = ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-linkedin"]

            v.Footer(
                dark=True,
                padless=True,
                children=[
                    v.Card(
                        width="100%",
                        flat=True,
                        tile=True,
                        children=[
                            v.CardTitle(
                                class_="teal",
                                children=[
                                    v.Html(
                                        tag="strong",
                                        class_="subheading",
                                        children=["Get connected with us on social networks!"],
                                    ),
                                    v.Spacer(),
                                    *[
                                        v.Btn(
                                            icon=True,
                                            class_="mx-4",
                                            children=[v.Icon(size="24px", children=[i])],
                                        ) for i in icons
                                    ],
                                ],
                            ),
                            v.CardText(
                                class_="py-2 white--text text-center",
                                children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-footer
                dark
                padless
            >
                <v-card
                class="flex"
                flat
                tile
                >
                <v-card-title class="teal">
                    <strong class="subheading">Get connected with us on social networks!</strong>

                    <v-spacer></v-spacer>

                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    dark
                    icon
                    >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text class="py-2 white--text text-center">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
                </v-card>
            </v-footer>
            </template>
