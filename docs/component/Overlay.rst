Overlay
=======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Overlays
    documentation <https://v2.vuetifyjs.com/en/components/overlays/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Overlay <ipyvuetify.Overlay>` component is used to provide
emphasis on a particular element or parts of it. It signals to the user of a
state change within the application and can be used for creating loaders,
dialogs and more.

.. api::

    :py:class:`ipyvuetify.Overlay`

Usage
-----

In its simplest form, the :py:class:`Overlay <ipyvuetify.Overlay>` component
will add a dimmed layer over your application.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v
    from ipywidgets import jslink

    switch = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
    switch2 = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
    overlay = v.Overlay(v_model=False, children=[switch2])
    jslink((switch, 'v_model'), (overlay, 'v_model'))
    jslink((switch2, 'v_model'), (overlay, 'v_model'))

    v.Layout(children=[switch, overlay])

Examples
--------

Absolute
^^^^^^^^

``absolute`` overlays are positioned absolutely and contained inside of their
parent element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-auto")
            switch2 = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
            overlay = v.Overlay(absolute=True, v_model=False, children=[switch2])
            jslink((switch, 'v_model'), (overlay, 'v_model'))
            jslink((switch2, 'v_model'), (overlay, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                height=300,
                width=300,
                children=[switch, overlay]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-auto")
            switch2 = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
            overlay = v.Overlay(absolute=True, v_model=False, children=[switch2])
            jslink((switch, 'v_model'), (overlay, 'v_model'))
            jslink((switch2, 'v_model'), (overlay, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                height=300,
                width=300,
                children=[switch, overlay]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row
                align="center"
                justify="center"
            >
                <v-card
                height="300"
                width="250"
                >
                <v-row justify="center">
                    <v-btn
                    color="success"
                    class="mt-12"
                    @click="overlay = !overlay"
                    >
                    Show Overlay
                    </v-btn>

                    <v-overlay
                    :absolute="absolute"
                    :value="overlay"
                    >
                    <v-btn
                        color="success"
                        @click="overlay = false"
                    >
                        Hide Overlay
                    </v-btn>
                    </v-overlay>
                </v-row>
                </v-card>
            </v-row>
            </template>

Opacity
^^^^^^^

``opacity`` allows you to customize the transparency of
:py:class:`Overlay <ipyvuetify.Overlay>` components.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-auto")
            switch2 = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
            overlay = v.Overlay(absolute=True, v_model=False, opacity=1, children=[switch2])
            jslink((switch, 'v_model'), (overlay, 'v_model'))
            jslink((switch2, 'v_model'), (overlay, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                height=300,
                width=300,
                children=[switch, overlay]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-auto")
            switch2 = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
            overlay = v.Overlay(absolute=True, v_model=False, opacity=1, children=[switch2])
            jslink((switch, 'v_model'), (overlay, 'v_model'))
            jslink((switch2, 'v_model'), (overlay, 'v_model'))

            v.Card(
                class_="mx-auto my-2",
                height=300,
                width=300,
                children=[switch, overlay]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row
                align="center"
                justify="center"
            >
                <v-card
                height="300"
                width="250"
                >
                <v-row justify="center">
                    <v-btn
                    color="orange lighten-2"
                    class="mt-12"
                    @click="overlay = !overlay"
                    >
                    Show Overlay
                    </v-btn>

                    <v-overlay
                    :absolute="absolute"
                    :opacity="opacity"
                    :value="overlay"
                    >
                    <v-btn
                        color="orange lighten-2"
                        @click="overlay = false"
                    >
                        Hide Overlay
                    </v-btn>
                    </v-overlay>
                </v-row>
                </v-card>
            </v-row>
            </template>

Advanced
^^^^^^^^

Using the :py:class:`Hover <ipyvuetify.Hover>`, we are able to add a nice scrim
over the information card with additional actions the user can take.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Hover(
                v_slots=[{
                    'name': 'default',
                    'variable': 'default',
                    'children': v.Card(
                        class_="mx-auto",
                        max_width=344,
                        children=[
                            v.Img(src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"),
                            v.CardText(children=[
                                v.Html(tag='h2', class_="text-h6 primary--text", children=["Magento Forests"]),
                                "Travel to the best outdoor experience on planet Earth. A vacation you will never forget!"
                            ]),
                            v.CardTitle(children=[
                                v.Rating(
                                    value=4,
                                    dense=True,
                                    color="orange",
                                    background_color="orange",
                                    hover=True,
                                    class_="mr-2"
                                ),
                                v.Html(tag='span', class_="primary--text text-subtitle-2", children=["64 Reviews"])
                            ]),
                            v.FadeTransition(
                                children=[
                                    v.Overlay(
                                        v_if='default.hover',
                                        absolute=True,
                                        color="#036358",
                                        children=[
                                            v.Btn(children=["See more info"])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                }]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Hover(
                v_slots=[{
                    'name': 'default',
                    'variable': 'default',
                    'children': v.Card(
                        class_="mx-auto",
                        max_width=344,
                        children=[
                            v.Img(src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"),
                            v.CardText(children=[
                                v.Html(tag='h2', class_="text-h6 primary--text", children=["Magento Forests"]),
                                "Travel to the best outdoor experience on planet Earth. A vacation you will never forget!"
                            ]),
                            v.CardTitle(children=[
                                v.Rating(
                                    value=4,
                                    dense=True,
                                    color="orange",
                                    background_color="orange",
                                    hover=True,
                                    class_="mr-2"
                                ),
                                v.Html(tag='span', class_="primary--text text-subtitle-2", children=["64 Reviews"])
                            ]),
                            v.FadeTransition(
                                children=[
                                    v.Overlay(
                                        v_if='default.hover',
                                        absolute=True,
                                        color="#036358",
                                        children=[
                                            v.Btn(children=["See more info"])
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                }]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-hover>
                <template v-slot:default="{ hover }">
                <v-card
                    class="mx-auto"
                    max-width="344"
                >
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

                    <v-card-text>
                    <h2 class="text-h6 primary--text">
                        Magento Forests
                    </h2>
                    Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                    </v-card-text>

                    <v-card-title>
                    <v-rating
                        :value="4"
                        dense
                        color="orange"
                        background-color="orange"
                        hover
                        class="mr-2"
                    ></v-rating>
                    <span class="primary--text text-subtitle-2">64 Reviews</span>
                    </v-card-title>

                    <v-fade-transition>
                    <v-overlay
                        v-if="hover"
                        absolute
                        color="#036358"
                    >
                        <v-btn>See more info</v-btn>
                    </v-overlay>
                    </v-fade-transition>
                </v-card>
                </template>
            </v-hover>
            </template>

Loader
^^^^^^

Using the :py:class:`Overlay <ipyvuetify.Overlay>` as a background, add a
progress component to easily create a custom loader.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
            switch2 = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
            progress = v.ProgressCircular(indeterminate=True, size=64)
            overlay = v.Overlay(v_model=False, children=[switch2, progress])
            jslink((switch, 'v_model'), (overlay, 'v_model'))
            jslink((switch2, 'v_model'), (overlay, 'v_model'))

            v.Layout(children=[switch, overlay])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
            switch2 = v.Switch(label='Show Overlay', v_model=False, class_="mx-auto my-2")
            progress = v.ProgressCircular(indeterminate=True, size=64)
            overlay = v.Overlay(v_model=False, children=[switch2, progress])
            jslink((switch, 'v_model'), (overlay, 'v_model'))
            jslink((switch2, 'v_model'), (overlay, 'v_model'))

            v.Layout(children=[switch, overlay])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-btn
                color="deep-purple accent-4"
                class="white--text"
                @click="overlay = !overlay"
                >
                Launch Application
                <v-icon right>
                    mdi-open-in-new
                </v-icon>
                </v-btn>

                <v-overlay :value="overlay">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
                </v-overlay>
            </div>
            </template>
