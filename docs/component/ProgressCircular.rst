ProgressCircular
================

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Progress circular
    documentation <https://v2.vuetifyjs.com/en/components/progress-circular/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ProgressCircular <ipyvuetify.ProgressCircular>` component is
used to convey data circularly to users. It also can be put into an
indeterminate state to portray loading.

.. api::

    :py:class:`ipyvuetify.ProgressCircular`

Usage
-----

In its simplest form, :py:class:`ProgressCircular <ipyvuetify.ProgressCircular>`
displays a circular progress bar. Use the value prop to control the progress.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Layout(
        class_='d-flex flex-row justify-space-evenly my-2',
        children=[
            v.Html(
                tag="div",
                class_="d-flex flex-grow-1 justify-center",
                children=[v.ProgressCircular(value=i)],
            ) for i in range(0, 101, 20)
        ],
    )

Examples
--------

Color
^^^^^

Alternate colors can be applied to
:py:class:`ProgressCircular <ipyvuetify.ProgressCircular>` using the ``color``
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                (100, 'blue-grey'),
                (80, 'deep-orange lighten-2'),
                (60, 'brown'),
                (40, 'lime'),
                (20, 'indigo darken-2'),
            ]

            v.Layout(
                class_='d-flex flex-row justify-space-evenly my-2',
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.ProgressCircular(
                                value=value,
                                color=color,
                            )
                        ],
                    ) for value, color in items
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                (100, 'blue-grey'),
                (80, 'deep-orange lighten-2'),
                (60, 'brown'),
                (40, 'lime'),
                (20, 'indigo darken-2'),
            ]

            v.Layout(
                class_='d-flex flex-row justify-space-evenly my-2',
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.ProgressCircular(
                                value=value,
                                color=color,
                            )
                        ],
                    ) for value, color in items
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-progress-circular
                :value="100"
                color="blue-grey"
                ></v-progress-circular>

                <v-progress-circular
                :value="80"
                color="deep-orange lighten-2"
                ></v-progress-circular>

                <v-progress-circular
                :value="60"
                color="brown"
                ></v-progress-circular>

                <v-progress-circular
                :value="40"
                color="lime"
                ></v-progress-circular>

                <v-progress-circular
                :value="20"
                color="indigo darken-2"
                ></v-progress-circular>
            </div>
            </template>

Indeterminate
^^^^^^^^^^^^^

Using the ``indeterminate`` prop, a
:py:class:`ProgressCircular <ipyvuetify.ProgressCircular>` continues to animate
indefinitely.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ['primary', 'red', 'purple', 'green', 'amber']

            v.Layout(
                class_='d-flex flex-row justify-space-evenly my-2',
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.ProgressCircular(
                                indeterminate=True,
                                color=color,
                            )
                        ],
                    ) for color in colors
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['primary', 'red', 'purple', 'green', 'amber']

            v.Layout(
                class_='d-flex flex-row justify-space-evenly my-2',
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.ProgressCircular(
                                indeterminate=True,
                                color=color,
                            )
                        ],
                    ) for color in colors
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-progress-circular
                indeterminate
                color="primary"
                ></v-progress-circular>

                <v-progress-circular
                indeterminate
                color="red"
                ></v-progress-circular>

                <v-progress-circular
                indeterminate
                color="purple"
                ></v-progress-circular>

                <v-progress-circular
                indeterminate
                color="green"
                ></v-progress-circular>

                <v-progress-circular
                indeterminate
                color="amber"
                ></v-progress-circular>
            </div>
            </template>

Rotate
^^^^^^

The ``rotate`` prop gives you the ability to customize the
:py:class:`ProgressCircular <ipyvuetify.ProgressCircular>`'s origin.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                (360, 'teal'),
                (-90, 'primary'),
                (90, 'red'),
                (180, 'pink'),
            ]

            v.Layout(
                class_='d-flex flex-row justify-space-evenly my-2',
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.ProgressCircular(
                                rotate=angle,
                                size=100,
                                width=15,
                                value=60,
                                color=color,
                                children=["60"],
                            )
                        ],
                    ) for angle, color in items
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                (360, 'teal'),
                (-90, 'primary'),
                (90, 'red'),
                (180, 'pink'),
            ]

            v.Layout(
                class_='d-flex flex-row justify-space-evenly my-2',
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.ProgressCircular(
                                rotate=angle,
                                size=100,
                                width=15,
                                value=60,
                                color=color,
                                children=["60"],
                            )
                        ],
                    ) for angle, color in items
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :value="value"
                color="teal"
                >
                {{ value }}
                </v-progress-circular>

                <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="value"
                color="primary"
                >
                {{ value }}
                </v-progress-circular>

                <v-progress-circular
                :rotate="90"
                :size="100"
                :width="15"
                :value="value"
                color="red"
                >
                {{ value }}
                </v-progress-circular>

                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="value"
                color="pink"
                >
                {{ value }}
                </v-progress-circular>
            </div>
            </template>

Size and width
^^^^^^^^^^^^^^

The ``size`` and ``width`` props allow you to easily alter the size and width
of the :py:class:`ProgressCircular <ipyvuetify.ProgressCircular>` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                (50, 5, 'primary'),
                (100, 10, 'red'),
                (70, 7, 'purple'),
                (120, 12, 'green'),
                (80, 8, 'amber'),
            ]

            v.Layout(
                class_='d-flex flex-row justify-space-evenly my-2',
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.ProgressCircular(
                                size=size,
                                width=width,
                                color=color,
                                value=70,
                            )
                        ],
                    ) for size, width, color in items
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                (50, 5, 'primary'),
                (100, 10, 'red'),
                (70, 7, 'purple'),
                (120, 12, 'green'),
                (80, 8, 'amber'),
            ]

            v.Layout(
                class_='d-flex flex-row justify-space-evenly my-2',
                children=[
                    v.Html(
                        tag="div",
                        class_="d-flex flex-grow-1 justify-center",
                        children=[
                            v.ProgressCircular(
                                size=size,
                                width=width,
                                color=color,
                                value=70,
                            )
                        ],
                    ) for size, width, color in items
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
                ></v-progress-circular>

                <v-progress-circular
                :width="3"
                color="red"
                indeterminate
                ></v-progress-circular>

                <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
                ></v-progress-circular>

                <v-progress-circular
                :width="3"
                color="green"
                indeterminate
                ></v-progress-circular>

                <v-progress-circular
                :size="50"
                color="amber"
                indeterminate
                ></v-progress-circular>
            </div>
            </template>
