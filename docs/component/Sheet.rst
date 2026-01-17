Sheet
=====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Sheets
    documentation <https://v2.vuetifyjs.com/en/components/sheets/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Sheet <ipyvuetify.Sheet>` component is the baseline for
numerous components such as :py:class:`Card <ipyvuetify.Card>`,
:py:class:`Toolbar <ipyvuetify.Toolbar>`, and more. The available properties
form the foundation of Material Design — the concept of paper and elevation
(shadows).

.. api::

    - :py:class:`ipyvuetify.Sheet`

Usage
-----

The :py:class:`Sheet <ipyvuetify.Sheet>` component is a transformable piece of
paper that provides a basic foundation for Vuetify features. For example,
properties such as rounded and shaped modify the ``border-radius`` property
while elevation increases/decreases ``box-shadow``.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        class_="mx-auto my-3",
        children=[
            v.Sheet(
                color='white',
                elevation=1,
                height=100,
                width=100
            )
        ]
    )

Examples
--------

Elevation
^^^^^^^^^

The :py:class:`Sheet <ipyvuetify.Sheet>` component accepts a custom elevation
between 0 and 24 (0 is default). The elevation property modifies the
``box-shadow`` property. More information is located in the `MD Elevation
Design Specification
<https://material.io/design/environment/elevation.html>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.Sheet(
                                        class_='pa-12',
                                        color='grey lighten-3',
                                        children=[
                                            v.Sheet(
                                                elevation=elevation,
                                                class_='mx-auto',
                                                height=100,
                                                width=100
                                            )
                                        ]
                                    )
                                ]
                            ) for elevation in [6, 12, 24]
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.Sheet(
                                        class_='pa-12',
                                        color='grey lighten-3',
                                        children=[
                                            v.Sheet(
                                                elevation=elevation,
                                                class_='mx-auto',
                                                height=100,
                                                width=100
                                            )
                                        ]
                                    )
                                ]
                            ) for elevation in [6, 12, 24]
                        ]
                    )
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-row justify="space-around">
                <v-col
                    v-for="elevation in elevations"
                    :key="elevation"
                    cols="12"
                    md="4"
                >
                    <v-sheet
                    class="pa-12"
                    color="grey lighten-3"
                    >
                    <v-sheet
                        :elevation="elevation"
                        class="mx-auto"
                        height="100"
                        width="100"
                    ></v-sheet>
                    </v-sheet>
                </v-col>
                </v-row>
            </v-container>
            </template>

Color
^^^^^

Sheets and components based on them can have different sizes and colors.

The :py:class:`Sheet <ipyvuetify.Sheet>` component accepts custom `Material
Design Color <https://v2.vuetifyjs.com/en/styles/colors/>`__ values such as
``warning``, ``amber darken-3``, and ``deep-purple accent`` — as well as rgb,
rgba, and hexadecimal values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['red lighten-3', 'pink lighten-3', 'purple lighten-3', 'deep-purple lighten-3']

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.Sheet(
                                        class_='pa-12',
                                        color='grey lighten-3',
                                        children=[
                                            v.Sheet(
                                                color=color,
                                                elevation=12,
                                                class_='mx-auto',
                                                height=100,
                                                width=100
                                            )
                                        ]
                                    )
                                ]
                            ) for color in colors
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-row class="flex-child">
                <v-col
                    class="d-flex"
                    cols="12"
                    md="4"
                >
                    <v-sheet
                    class="d-flex"
                    color="grey lighten-3"
                    height="424"
                    >
                    <sheet-footer>
                        #1: (3r x 2c)
                    </sheet-footer>
                    </v-sheet>
                </v-col>
                <v-col
                    class="d-flex"
                    cols="12"
                    md="4"
                >
                    <v-row class="ma-n3">
                    <v-col cols="6">
                        <v-sheet
                        class="d-flex"
                        color="green lighten-3"
                        height="150"
                        >
                        <sheet-footer>
                            #2: (1r x 1c)
                        </sheet-footer>
                        </v-sheet>
                    </v-col>

                    <v-col cols="6">
                        <v-sheet
                        class="d-flex"
                        color="yellow lighten-3"
                        height="150"
                        >
                        <sheet-footer>
                            #3: (1r x 1c)
                        </sheet-footer>
                        </v-sheet>
                    </v-col>

                    <v-col cols="12">
                        <v-sheet
                        class="d-flex"
                        color="red lighten-3"
                        height="250"
                        >
                        <sheet-footer>
                            #5: (2r x 2c)
                        </sheet-footer>
                        </v-sheet>
                    </v-col>
                    </v-row>
                </v-col>

                <v-col
                    cols="6"
                    md="2"
                >
                    <v-sheet
                    class="d-flex"
                    color="teal lighten-3"
                    height="300"
                    >
                    <sheet-footer>
                        #4: (2r x 1c)
                    </sheet-footer>
                    </v-sheet>
                </v-col>

                <v-col
                    class="d-flex"
                    cols="6"
                    md="2"
                >
                    <v-sheet
                    class="d-flex mt-auto"
                    color="purple lighten-3"
                    height="300"
                    >
                    <sheet-footer>
                        #6: (2r x 1c)
                    </sheet-footer>
                    </v-sheet>
                </v-col>
                </v-row>
            </v-container>
            </template>
