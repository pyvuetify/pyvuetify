ProgressLinear
==============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Progress linear
    documentation <https://v2.vuetifyjs.com/en/components/progress-linear/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component is used to
convey data visually to users. They can also represent an indeterminate amount,
such as loading or processing.

.. api::

    :py:class:`ipyvuetify.ProgressLinear`

Usage
-----

In its simplest form, :py:class:`ProgressLinear <ipyvuetify.ProgressLinear>`
displays a horizontal progress bar. Use the value prop to control the progress.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.ProgressLinear(class_="mx-1 my-3", v_model=40)

Examples
--------

Buffer value
^^^^^^^^^^^^

A buffer state represents two values simultaneously. The primary value is
controlled by v-model, whereas the buffer is controlled by the buffer-value
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['primary', 'purple', 'red lighten-2', 'black']

            items = [
                {"value": 40, "buffer": 70, "color": "primary"},
                {"value": 20, "buffer": 70, "color": "purple"},
                {"value": 40, "buffer": 70, "color": "red lighten-2"},
                {"value": 40, "buffer": 70, "color": "black"},
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        v_model=(i+1)*5,
                        buffer_value=(i+1)*10,
                        color=c,
                    ) for i, c in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['primary', 'purple', 'red lighten-2', 'black']

            items = [
                {"value": 40, "buffer": 70, "color": "primary"},
                {"value": 20, "buffer": 70, "color": "purple"},
                {"value": 40, "buffer": 70, "color": "red lighten-2"},
                {"value": 40, "buffer": 70, "color": "black"},
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        v_model=(i+1)*5,
                        buffer_value=(i+1)*10,
                        color=c,
                    ) for i, c in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-progress-linear
                v-model="value"
                :buffer-value="bufferValue"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                v-model="value"
                :buffer-value="bufferValue"
                color="purple"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                v-model="value"
                :buffer-value="bufferValue"
                color="red lighten-2"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                v-model="value"
                :buffer-value="bufferValue"
                color="black"
                ></v-progress-linear>
            </div>
            </template>

Colors
^^^^^^

You can also set the color using the props color and background-color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = [
                ('pink lighten-1', 'pink lighten-3'),
                ('lime', 'blue-grey'),
                ('error', 'success'),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        background_color=bg,
                        color=c,
                        v_model=(i+1)*15,
                    ) for i, (c, bg) in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = [
                ('pink lighten-1', 'pink lighten-3'),
                ('lime', 'blue-grey'),
                ('error', 'success'),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        background_color=bg,
                        color=c,
                        v_model=(i+1)*15,
                    ) for i, (c, bg) in enumerate(colors)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-progress-linear
                background-color="pink lighten-3"
                color="pink lighten-1"
                value="15"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                background-color="blue-grey"
                color="lime"
                value="30"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                background-color="success"
                color="error"
                value="45"
                ></v-progress-linear>
            </div>
            </template>

Indeterminate
^^^^^^^^^^^^^

Using the ``indeterminate`` prop,
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` continuously animates.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['yellow darken-2', 'green', 'teal', 'cyan']

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        indeterminate=True,
                        color=c,
                    ) for c in colors
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['yellow darken-2', 'green', 'teal', 'cyan']

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        indeterminate=True,
                        color=c,
                    ) for c in colors
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-progress-linear
                indeterminate
                color="yellow darken-2"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                indeterminate
                color="green"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                indeterminate
                color="teal"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                indeterminate
                color="cyan"
                ></v-progress-linear>
            </div>
            </template>

Rounded
^^^^^^^

The rounded prop is an alternative style that adds a border radius to the
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['red darken-2', 'indigo', 'teal', 'cyan darken-2']

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        rounded=True,
                        value=100,
                        color=c,
                    ) for c in colors
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['red darken-2', 'indigo', 'teal', 'cyan darken-2']

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        rounded=True,
                        value=100,
                        color=c,
                    ) for c in colors
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-progress-linear
                color="red darken-2"
                rounded
                value="100"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                color="indigo"
                rounded
                value="100"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                color="teal"
                rounded
                value="100"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                color="cyan darken-2"
                rounded
                value="100"
                ></v-progress-linear>
            </div>
            </template>

Stream
^^^^^^

The stream property works with buffer-value to convey to the user that there is
some action taking place. You can use any combination of buffer-value and value
to achieve your design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                ("red lighten-2", 0, 0),
                ("teal", 20, 0),
                ("cyan", 50, 0),
                ("orange", 40, 60),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        buffer_value=buffer,
                        v_model=value,
                        stream=True,
                        color=color,
                    ) for color, value, buffer in items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                ("red lighten-2", 0, 0),
                ("teal", 20, 0),
                ("cyan", 50, 0),
                ("orange", 40, 60),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        buffer_value=buffer,
                        v_model=value,
                        stream=True,
                        color=color,
                    ) for color, value, buffer in items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-progress-linear
                color="red lighten-2"
                buffer-value="0"
                stream
                ></v-progress-linear>
                <br>
                <v-progress-linear
                color="teal"
                buffer-value="0"
                value="20"
                stream
                ></v-progress-linear>
                <br>
                <v-progress-linear
                buffer-value="50"
                stream
                color="cyan"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                buffer-value="60"
                value="40"
                stream
                color="orange"
                ></v-progress-linear>
            </div>
            </template>

Striped
^^^^^^^

This applies a striped background over the value portion of the
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                ('light-blue', 10),
                ('light-green darken-4', 20),
                ('lime', 45),
                ('deep-orange', 60),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        color=color,
                        v_model=value,
                        height=10,
                        striped=True,
                    ) for color, value in items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                ('light-blue', 10),
                ('light-green darken-4', 20),
                ('lime', 45),
                ('deep-orange', 60),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        color=color,
                        v_model=value,
                        height=10,
                        striped=True,
                    ) for color, value in items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-progress-linear
                color="light-blue"
                height="10"
                value="10"
                striped
                ></v-progress-linear>
                <br>
                <v-progress-linear
                color="light-green darken-4"
                height="10"
                value="20"
                striped
                ></v-progress-linear>
                <br>
                <v-progress-linear
                height="10"
                value="45"
                striped
                color="lime"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                value="60"
                height="10"
                striped
                color="deep-orange"
                ></v-progress-linear>
            </div>
            </template>

Default
^^^^^^^

The :py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component will be
responsive to user input when using v-model. You can use the default slot or
bind a local model to display inside of the progress. If you are looking for
advanced features on a linear type component, check out
:py:class:`Slider <ipyvuetify.Slider>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                ('amber', 80),
                ('blue-grey', 20),
                ('primary', 33),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        v_model=value,
                        color=color,
                        height=25,
                        children=[
                            v.Html(tag='strong', children=[f"{int(value)}%"])
                        ],
                    ) for color, value in items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                ('amber', 80),
                ('blue-grey', 20),
                ('primary', 33),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        v_model=value,
                        color=color,
                        height=25,
                        children=[
                            v.Html(tag='strong', children=[f"{int(value)}%"])
                        ],
                    ) for color, value in items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-progress-linear
                v-model="power"
                color="amber"
                height="25"
                ></v-progress-linear>

                <br>

                <v-progress-linear
                v-model="skill"
                color="blue-grey"
                height="25"
                >
                <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>

                <br>

                <v-progress-linear
                v-model="knowledge"
                height="25"
                >
                <strong>{{ Math.ceil(knowledge) }}%</strong>
                </v-progress-linear>
            </div>
            </template>

Determinate
^^^^^^^^^^^

The progress linear component can have a determinate state modified by v-model.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                ('deep-purple accent-4', 70),
                ('pink', 50),
                ('indigo darken-2', 30),
                ('amber', 90),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        v_model=value,
                        color=color,
                    ) for color, value in items
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                ('deep-purple accent-4', 70),
                ('pink', 50),
                ('indigo darken-2', 30),
                ('amber', 90),
            ]

            v.Col(
                children=[
                    v.ProgressLinear(
                        class_="my-3 mx-1",
                        v_model=value,
                        color=color,
                    ) for color, value in items
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-progress-linear
                v-model="valueDeterminate"
                color="deep-purple accent-4"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                v-model="valueDeterminate"
                color="pink"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                v-model="valueDeterminate"
                color="indigo darken-2"
                ></v-progress-linear>
                <br>
                <v-progress-linear
                v-model="valueDeterminate"
                color="amber"
                ></v-progress-linear>
            </div>
            </template>

File loader
^^^^^^^^^^^

The :py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component is good
for translating to the user that they are waiting for a response.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                max_width=344,
                children=[
                    v.Toolbar(
                        color="deep-purple accent-4",
                        dark=True,
                        prominent=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["My Files"]),
                            v.Btn(
                                absolute=True,
                                bottom=True,
                                color="white",
                                fab=True,
                                left=True,
                                light=True,
                                children=[
                                    v.Icon(children=["mdi-plus"])
                                ],
                            ),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-share-variant"])
                                ],
                            ),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-magnify"])
                                ],
                            ),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-dots-vertical"])
                                ],
                            ),
                        ],
                    ),
                    v.Container(
                        style_="height: 400px;",
                        children=[
                            v.Row(
                                class_="fill-height",
                                align_content="center",
                                justify="center",
                                children=[
                                    v.Col(
                                        class_="text-subtitle-1 text-center",
                                        cols=12,
                                        children=["Getting your files"],
                                    ),
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.ProgressLinear(
                                                color="deep-purple accent-4",
                                                indeterminate=True,
                                                rounded=True,
                                                height=6,
                                            )
                                        ],
                                    ),
                                ],
                            )
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                max_width=344,
                children=[
                    v.Toolbar(
                        color="deep-purple accent-4",
                        dark=True,
                        prominent=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["My Files"]),
                            v.Btn(
                                absolute=True,
                                bottom=True,
                                color="white",
                                fab=True,
                                left=True,
                                light=True,
                                children=[
                                    v.Icon(children=["mdi-plus"])
                                ],
                            ),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-share-variant"])
                                ],
                            ),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-magnify"])
                                ],
                            ),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-dots-vertical"])
                                ],
                            ),
                        ],
                    ),
                    v.Container(
                        style_="height: 400px;",
                        children=[
                            v.Row(
                                class_="fill-height",
                                align_content="center",
                                justify="center",
                                children=[
                                    v.Col(
                                        class_="text-subtitle-1 text-center",
                                        cols=12,
                                        children=["Getting your files"],
                                    ),
                                    v.Col(
                                        cols=6,
                                        children=[
                                            v.ProgressLinear(
                                                color="deep-purple accent-4",
                                                indeterminate=True,
                                                rounded=True,
                                                height=6,
                                            )
                                        ],
                                    ),
                                ],
                            )
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="344"
            >
                <v-toolbar
                color="deep-purple accent-4"
                dark
                prominent
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>My Files</v-toolbar-title>

                <v-btn
                    absolute
                    bottom
                    color="white"
                    fab
                    left
                    light
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>

                <v-container style="height: 400px;">
                <v-row
                    class="fill-height"
                    align-content="center"
                    justify="center"
                >
                    <v-col
                    class="text-subtitle-1 text-center"
                    cols="12"
                    >
                    Getting your files
                    </v-col>
                    <v-col cols="6">
                    <v-progress-linear
                        color="deep-purple accent-4"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
            </template>

Toolbar loader
^^^^^^^^^^^^^^

Using the absolute prop we are able to position the
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component at the bottom
of the :py:class:`Toolbar <ipyvuetify.Toolbar>`. We also use the active prop
which allows us to control the visibility of the progress.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            card = v.Card(
                class_="mx-auto my-2",
                width=344,
                children=[
                    v.SystemBar(
                        children=[
                            v.Spacer(),
                            v.Icon(children=["mdi-square"]),
                            v.Icon(children=["mdi-circle"]),
                            v.Icon(children=["mdi-triangle"]),
                        ]
                    ),
                    v.Toolbar(
                        children=[
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-arrow-left"])
                                ],
                            ),
                            v.ToolbarTitle(children=["My Recipes"]),
                            (progress := v.ProgressLinear(
                                active=False,
                                indeterminate=True,
                                absolute=True,
                                bottom=True,
                                color="deep-purple accent-4",
                            )),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-magnify"])
                                ],
                            ),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-dots-vertical"])
                                ],
                            ),
                        ]
                    ),
                    v.Container(
                        style_="height: 282px;",
                        children=[
                            v.Row(
                                class_="fill-height",
                                align="center",
                                justify="center",
                                children=[
                                    v.ScaleTransition(
                                        children=[
                                            v.Html(
                                                tag="div",
                                                class_="text-center",
                                                children=[
                                                    (switch := v.Switch(
                                                        v_model=False,
                                                        label="Start Loading"
                                                    )),
                                                ],
                                            )
                                        ]
                                    )
                                ],
                            )
                        ],
                    ),
                ],
            )

            jslink((switch, 'v_model'), (progress, 'active'))

            card

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto mt-6"
                width="344"
            >
                <v-system-bar>
                <v-spacer></v-spacer>
                <v-icon>mdi-square</v-icon>
                <v-icon>mdi-circle</v-icon>
                <v-icon>mdi-triangle</v-icon>
                </v-system-bar>

                <v-toolbar>
                <v-btn icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-toolbar-title>My Recipes</v-toolbar-title>

                <v-progress-linear
                    :active="loading"
                    :indeterminate="loading"
                    absolute
                    bottom
                    color="deep-purple accent-4"
                ></v-progress-linear>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>

                <v-container style="height: 282px;">
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                    <v-scale-transition>
                    <div
                        v-if="!loading"
                        class="text-center"
                    >
                        <v-btn
                        color="primary"
                        @click="loading = true"
                        >
                        Start loading
                        </v-btn>
                    </div>
                    </v-scale-transition>
                </v-row>
                </v-container>
            </v-card>
            </template>