Slider
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Slider
    documentation <https://v2.vuetifyjs.com/en/components/sliders/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Slider <ipyvuetify.Slider>` component is a better visualization
of the number input. It is used for gathering numerical user data.

.. api::

    - :py:class:`ipyvuetify.Slider`
    - :py:class:`ipyvuetify.RangeSlider`

Usage
-----

Sliders reflect a range of values along a bar, from which users may select a
single value. They are ideal for adjusting settings such as volume,
brightness, or applying image filters.

.. jupyter-execute::
    :raises:
    :hide-code:

    import ipyvuetify as v

    v.Slider(
        class_="my-3 mx-1",
        dense=True,
        hide_details=True,
        hint="Im a hint",
        inverse_label=True,
        max=50,
        min=-50,
        persistent_hint=True
    )


Examples
--------

Colors
^^^^^^

You can set the colors of the slider using the props ``color``,
``track_color`` and ``thumb_color``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Col(
                class_="mx-1 my-2",
                children=[
                    v.Slider(
                        v_model=25,
                        color="orange darken-3",
                        label="color"
                    ),
                    v.Slider(
                        v_model=50,
                        label="track color",
                        track_color="light-green lighten-4"
                    ),
                    v.Slider(
                        class_="mt-4",
                        thumb_label="always",
                        v_model=75,
                        color="blue",
                        label="thumb color",
                        thumb_color="red"
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Col(
                class_="mx-1 my-2",
                children=[
                    v.Slider(
                        v_model=25,
                        color="orange darken-3",
                        label="color"
                    ),
                    v.Slider(
                        v_model=50,
                        label="track color",
                        track_color="light-green lighten-4"
                    ),
                    v.Slider(
                        class_="mt-4",
                        thumb_label="always",
                        v_model=75,
                        color="blue",
                        label="thumb color",
                        thumb_color="red"
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-slider
                v-model="ex1.val"
                :color="ex1.color"
                :label="ex1.label"
                ></v-slider>

                <v-slider
                v-model="ex2.val"
                :label="ex2.label"
                :track-color="ex2.color"
                ></v-slider>

                <v-slider
                v-model="ex3.val"
                :label="ex3.label"
                :thumb-color="ex3.color"
                thumb-label="always"
                ></v-slider>
            </div>
            </template>

Disabled
^^^^^^^^

You cannot interact with disabled sliders.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Slider(
                disabled=True,
                label="Disabled",
                value=30
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Slider(
                disabled=True,
                label="Disabled",
                value=30
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row>
                <v-col cols="12">
                    <v-slider
                    disabled
                    label="Disabled"
                    value="30"
                    ></v-slider>
                </v-col>
                </v-row>
            </v-container>
            </template>

Discrete
^^^^^^^^

Discrete sliders offer a thumb label that displays the exact current amount.
Using the ``step`` prop you can disallow selecting values outside of steps.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Col(
                class_="mx-1 my-2",
                children=[
                    v.Slider(
                        class_="mt-4 mx-2",
                        step=10,
                        thumb_label="on",
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            import ipyvuetify as v

            v.Col(
                class_="mx-1 my-2",
                children=[
                    v.Slider(
                        class_="mt-4 mx-2",
                        step=10,
                        thumb_label="on",
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-card-text>
                <v-slider
                    v-model="value"
                    step="10"
                    thumb-label
                    ticks
                ></v-slider>
                </v-card-text>
            </v-card>
            </template>

Icons
^^^^^

You can add icons to the slider with the ``append_icon`` and ``prepend_icon``
props. With ``@click:append`` and ``@click:prepend`` you can trigger a
callback function when click the icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Col(
                class_="mx-1 my-2",
                children=[
                    v.Slider(
                        v_model=30,
                        prepend_icon="mdi-volume-high",
                        label="Media volume"
                    ),
                    v.Slider(
                        v_model=70,
                        append_icon="mdi-alarm",
                        label="Alarm volume"
                    ),
                    v.Slider(
                        v_model=100,
                        append_icon="mdi-magnify-plus-outline",
                        prepend_icon="mdi-magnify-minus-outline",
                        label="Icon click callback"
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Col(
                class_="mx-1 my-2",
                children=[
                    v.Slider(
                        v_model=30,
                        prepend_icon="mdi-volume-high",
                        label="Media volume"
                    ),
                    v.Slider(
                        v_model=70,
                        append_icon="mdi-alarm",
                        label="Alarm volume"
                    ),
                    v.Slider(
                        v_model=100,
                        append_icon="mdi-magnify-plus-outline",
                        prepend_icon="mdi-magnify-minus-outline",
                        label="Icon click callback"
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                flat
                color="transparent"
            >
                <v-subheader>Media volume</v-subheader>
                <v-card-text>
                <v-slider
                    v-model="media"
                    prepend-icon="mdi-volume-high"
                ></v-slider>
                </v-card-text>

                <v-subheader>Alarm volume</v-subheader>

                <v-card-text>
                <v-slider
                    v-model="alarm"
                    append-icon="mdi-alarm"
                ></v-slider>
                </v-card-text>

                <v-subheader>Icon click callback</v-subheader>

                <v-card-text>
                <v-slider
                    v-model="zoom"
                    append-icon="mdi-magnify-plus-outline"
                    prepend-icon="mdi-magnify-minus-outline"
                    @click:append="zoomIn"
                    @click:prepend="zoomOut"
                ></v-slider>
                </v-card-text>
            </v-card>
            </template>

Inverse label
^^^^^^^^^^^^^

:py:class:`Slider <ipyvuetify.Slider>` with ``inverse_label`` property
displays label at the end of it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Slider(
                inverse_label=True,
                label="Inverse label",
                value=30
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Slider(
                inverse_label=True,
                label="Inverse label",
                value=30
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row>
                <v-col cols="12">
                    <v-slider
                    inverse-label
                    label="Inverse label"
                    value="30"
                    ></v-slider>
                </v-col>
                </v-row>
            </v-container>
            </template>

Min and max
^^^^^^^^^^^

You can set ``min`` and ``max`` values of sliders.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Col(
                class_="mx-1 mt-2",
                children=[
                    v.Slider(
                        class_="mt-5",
                        v_model=-10,
                        thumb_label="always",
                        max=200,
                        min=-100,
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Col(
                class_="mx-1 mt-2",
                children=[
                    v.Slider(
                        class_="mt-5",
                        v_model=-10,
                        thumb_label="always",
                        max=200,
                        min=-100,
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                flat
                color="transparent"
            >
                <v-subheader>Min and max default slider</v-subheader>

                <v-card-text>
                <v-row>
                    <v-col class="pr-4">
                    <v-slider
                        v-model="slider"
                        class="align-center"
                        :max="max"
                        :min="min"
                        hide-details
                    >
                        <template v-slot:append>
                        <v-text-field
                            v-model="slider"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                        ></v-text-field>
                        </template>
                    </v-slider>
                    </v-col>
                </v-row>
                </v-card-text>
            </v-card>
            </template>

Readonly
^^^^^^^^

You cannot interact with ``readonly`` sliders, but they look as ordinary ones.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v


            v.Slider(
                readonly=True,
                label="Readonly",
                value=30
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v


            v.Slider(
                readonly=True,
                label="Readonly",
                value=30
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row>
                <v-col cols="12">
                    <v-slider
                    readonly
                    label="Readonly"
                    value="30"
                    ></v-slider>
                </v-col>
                </v-row>
            </v-container>
            </template>

Step
^^^^

:py:class:`Slider <ipyvuetify.Slider>` can have steps other than 1. This can
be helpful for some applications where you need to adjust values with more or
less accuracy.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Col(
                class_="mx-1 mt-2",
                children=[
                    v.Slider(
                        class_="mt-4",
                        step=10,
                        thumb_label="always",
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Col(
                class_="mx-1 mt-2",
                children=[
                    v.Slider(
                        class_="mt-4",
                        step=10,
                        thumb_label="always",
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-card-text>
                <v-slider
                    v-model="value"
                    step="10"
                ></v-slider>
                </v-card-text>
            </v-card>
            </template>

Thumb
^^^^^

You can display a thumb label while sliding or always with the ``thumb_label``
prop. It can have a custom color by setting ``thumb_color`` prop and a custom
size with the ``thumb_size`` prop. With the ``always_dirty`` prop its color
will never change, even when on the ``min`` value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            emojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']

            slider = v.Slider(
                class_="mt-4",
                label="Show thumb when using",
                v_model=50,
                thumb_label=True,
            )

            slider2 = v.Slider(
                class_="mt-4",
                label="Always show thumb label",
                v_model=50,
                thumb_label="always",
            )

            slider3 = v.Slider(
                class_="mt-4",
                label="Custom thumb size",
                v_model=50,
                thumb_size=24,
                thumb_label="always",
            )

            slider4 = v.Slider(
                class_="mt-4",
                label="Custom thumb label",
                v_model=50,
                thumb_label="always",
                v_slots=[{
                    "name": "thumb_label",
                    "variable": "props",
                    "children": emojis[
                        # min((int('props.value') // 10), 9) no idea how to do that
                        min((int(6) // 10), 9)
                    ]
                }]
            )

            jslink((slider, 'v_model'), (slider2, 'v_model'))
            jslink((slider, 'v_model'), (slider3, 'v_model'))
            jslink((slider, 'v_model'), (slider4, 'v_model'))

            v.Col(
                class_="mx-1 my-2",
                children=[slider, slider2, slider3, slider4]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            emojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']

            slider = v.Slider(
                class_="mt-4",
                label="Show thumb when using",
                v_model=50,
                thumb_label=True,
            )

            slider2 = v.Slider(
                class_="mt-4",
                label="Always show thumb label",
                v_model=50,
                thumb_label="always",
            )

            slider3 = v.Slider(
                class_="mt-4",
                label="Custom thumb size",
                v_model=50,
                thumb_size=24,
                thumb_label="always",
            )

            slider4 = v.Slider(
                class_="mt-4",
                label="Custom thumb label",
                v_model=50,
                thumb_label="always",
                v_slots=[{
                    "name": "thumb_label",
                    "variable": "props",
                    "children": emojis[
                        # min((int('props.value') // 10), 9) no idea how to do that
                        min((int(6) // 10), 9)
                    ]
                }]
            )

            jslink((slider, 'v_model'), (slider2, 'v_model'))
            jslink((slider, 'v_model'), (slider3, 'v_model'))
            jslink((slider, 'v_model'), (slider4, 'v_model'))

            v.Col(
                class_="mx-1 my-2",
                children=[slider, slider2, slider3, slider4]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row>
                <v-col cols="12">
                    <v-subheader class="pl-0">
                    Show thumb when using slider
                    </v-subheader>
                    <v-slider
                    v-model="slider"
                    thumb-label
                    ></v-slider>
                </v-col>

                <v-col cols="12">
                    <v-subheader class="pl-0">
                    Always show thumb label
                    </v-subheader>
                    <v-slider
                    v-model="slider"
                    thumb-label="always"
                    ></v-slider>
                </v-col>

                <v-col cols="12">
                    <v-subheader class="pl-0">
                    Custom thumb size
                    </v-subheader>
                    <v-slider
                    v-model="slider"
                    :thumb-size="24"
                    thumb-label="always"
                    ></v-slider>
                </v-col>

                <v-col cols="12">
                    <v-subheader class="pl-0">
                    Custom thumb label
                    </v-subheader>
                    <v-slider
                    v-model="slider"
                    :thumb-size="24"
                    thumb-label="always"
                    >
                    <template v-slot:thumb-label="{ value }">
                        {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
                    </template>
                    </v-slider>
                </v-col>
                </v-row>
            </v-container>
            </template>

Ticks
^^^^^

Tick marks represent predetermined values to which the user can move the
slider.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            slider = v.Slider(
                v_model=50,
                label="Show ticks when using slider",
                class_="mt-4 mx-2",
                step=10,
                ticks=True,
            )

            slider1 = v.Slider(
                v_model=50,
                label="Always show ticks",
                class_="mt-4 mx-2",
                step=10,
                ticks="always",
            )

            slider2 = v.Slider(
                v_model=50,
                label="Tick size",
                class_="mt-4 mx-2",
                step=10,
                ticks="always",
                tick_size=4,
            )

            slider3 = v.Slider(
                label="Tick labels",
                class_="mt-4 mx-2",
                v_model=1,
                max=3,
                step=1,
                ticks="always",
                tick_size=4,
                tick_labels=["Apple", "Banana", "Cherry", "Date"]
            )

            jslink((slider, 'v_model'), (slider1, 'v_model'))
            jslink((slider, 'v_model'), (slider2, 'v_model'))

            v.Col(
                class_="mx-1 my-2",
                children=[slider, slider1, slider2, slider3]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            slider = v.Slider(
                v_model=50,
                label="Show ticks when using slider",
                class_="mt-4 mx-2",
                step=10,
                ticks=True,
            )

            slider1 = v.Slider(
                v_model=50,
                label="Always show ticks",
                class_="mt-4 mx-2",
                step=10,
                ticks="always",
            )

            slider2 = v.Slider(
                v_model=50,
                label="Tick size",
                class_="mt-4 mx-2",
                step=10,
                ticks="always",
                tick_size=4,
            )

            slider3 = v.Slider(
                label="Tick labels",
                class_="mt-4 mx-2",
                v_model=1,
                max=3,
                step=1,
                ticks="always",
                tick_size=4,
                tick_labels=["Apple", "Banana", "Cherry", "Date"]
            )

            jslink((slider, 'v_model'), (slider1, 'v_model'))
            jslink((slider, 'v_model'), (slider2, 'v_model'))

            v.Col(
                class_="mx-1 my-2",
                children=[slider, slider1, slider2, slider3]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                flat
                color="transparent"
            >
                <v-subheader>Show ticks when using slider</v-subheader>

                <v-card-text>
                <v-slider
                    v-model="value"
                    step="10"
                    ticks
                ></v-slider>
                </v-card-text>

                <v-subheader>Always show ticks</v-subheader>

                <v-card-text>
                <v-slider
                    v-model="value"
                    step="10"
                    ticks="always"
                ></v-slider>
                </v-card-text>

                <v-subheader>Tick size</v-subheader>

                <v-card-text>
                <v-slider
                    v-model="value"
                    step="10"
                    ticks="always"
                    tick-size="4"
                ></v-slider>
                </v-card-text>

                <v-subheader>Tick labels</v-subheader>

                <v-card-text>
                <v-slider
                    v-model="fruits"
                    :tick-labels="ticksLabels"
                    :max="3"
                    step="1"
                    ticks="always"
                    tick-size="4"
                ></v-slider>
                </v-card-text>
            </v-card>
            </template>

Validation
^^^^^^^^^^

Vuetify includes simple validation through the ``rules`` prop. The prop
accepts a mixed array of types ``function``, ``boolean`` and ``string``. When
the input value changes, each element in the array will be validated.
Functions pass the current ``v_model`` as an argument and must return either
``true`` / ``false`` or a ``string`` containing an error message.

.. todo::

    rule props is not usable in the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

Vertical sliders
^^^^^^^^^^^^^^^^

You can use the ``vertical`` prop to switch sliders to a vertical orientation.
If you need to change the height of the slider, use css.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Slider(
                v_model=50,
                class_="mx-1 my-2",
                vertical=True,
                label="Regular",
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Slider(
                v_model=50,
                class_="mx-1 my-2",
                vertical=True,
                label="Regular",
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-row>
                <v-slider
                    v-model="value"
                    vertical
                    label="Regular"
                ></v-slider>
                </v-row>
            </v-container>
            </template>

Slots
-----

Append and prepend
^^^^^^^^^^^^^^^^^^

Use slots such as ``append`` and ``prepend`` to easily customize the
:py:class:`Slider <ipyvuetify.Slider>` to fit any situation.

.. todo::

    The animation does not work in the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.Toolbar(
                        flat=True,
                        dense=True,
                        children=[
                            v.ToolbarTitle(
                                children=[
                                    v.Html(
                                        tag='span',
                                        class_='subheading',
                                        children=['METRONOME']
                                    )
                                ]
                            ),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(
                                        children=['mdi-share-variant']
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CardText(
                        children=[
                            v.Row(
                                class_="mb-4",
                                justify="space-between",
                                children=[
                                    v.Col(
                                        class_="text-left",
                                        children=[
                                            v.Html(
                                                tag='h1',
                                                class_='font-weight-light',
                                                children=['120']
                                            ),
                                            v.Html(
                                                tag='span',
                                                class_='subheading font-weight-light mr-1',
                                                children=['BPM']
                                            ),
                                            v.FadeTransition(
                                                children=[
                                                    v.Avatar(
                                                        class_='mb-1 v-avatar--metronome',
                                                        size=12,
                                                        color='purple',
                                                        style={
                                                            'animationDuration': '500ms'
                                                        }
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        class_="text-right",
                                        children=[
                                            v.Btn(
                                                depressed=True,
                                                fab=True,
                                                color='purple',
                                                dark=True,
                                                children=[
                                                    v.Icon(
                                                        large=True,
                                                        children=['mdi-play']
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.Slider(
                                v_model=120,
                                color="purple",
                                track_color="grey lighten-2",
                                class_="align-center",
                                min=40,
                                max=218,
                                v_slots=[{
                                    "name": "append",
                                    "children": v.Icon(
                                        class_="mr-2",
                                        small=True,
                                        children=["mdi-plus"]
                                    )
                                },
                                {
                                    "name": "prepend",
                                    "children": v.Icon(
                                        class_="ml-2",
                                        small=True,
                                        children=["mdi-minus"]
                                    )
                                }]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            v.Card(
                class_="mx-auto my-2",
                width=600,
                children=[
                    v.Toolbar(
                        flat=True,
                        dense=True,
                        children=[
                            v.ToolbarTitle(
                                children=[
                                    v.Html(
                                        tag='span',
                                        class_='subheading',
                                        children=['METRONOME']
                                    )
                                ]
                            ),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(
                                        children=['mdi-share-variant']
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CardText(
                        children=[
                            v.Row(
                                class_="mb-4",
                                justify="space-between",
                                children=[
                                    v.Col(
                                        class_="text-left",
                                        children=[
                                            v.Html(
                                                tag='h1',
                                                class_='font-weight-light',
                                                children=['120']
                                            ),
                                            v.Html(
                                                tag='span',
                                                class_='subheading font-weight-light mr-1',
                                                children=['BPM']
                                            ),
                                            v.FadeTransition(
                                                children=[
                                                    v.Avatar(
                                                        class_='mb-1 v-avatar--metronome',
                                                        size=12,
                                                        color='purple',
                                                        style={
                                                            'animationDuration': '500ms'
                                                        }
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        class_="text-right",
                                        children=[
                                            v.Btn(
                                                depressed=True,
                                                fab=True,
                                                color='purple',
                                                dark=True,
                                                children=[
                                                    v.Icon(
                                                        large=True,
                                                        children=['mdi-play']
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.Slider(
                                v_model=120,
                                color="purple",
                                track_color="grey lighten-2",
                                class_="align-center",
                                min=40,
                                max=218,
                                v_slots=[{
                                    "name": "append",
                                    "children": v.Icon(
                                        class_="mr-2",
                                        small=True,
                                        children=["mdi-plus"]
                                    )
                                },
                                {
                                    "name": "prepend",
                                    "children": v.Icon(
                                        class_="ml-2",
                                        small=True,
                                        children=["mdi-minus"]
                                    )
                                }]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="600"
            >
                <v-toolbar
                flat
                dense
                >
                <v-toolbar-title>
                    <span class="subheading">METRONOME</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
                </v-toolbar>

                <v-card-text>
                <v-row
                    class="mb-4"
                    justify="space-between"
                >
                    <v-col class="text-left">
                    <span
                        class="text-h2 font-weight-light"
                        v-text="bpm"
                    ></span>
                    <span class="subheading font-weight-light mr-1">BPM</span>
                    <v-fade-transition>
                        <v-avatar
                        v-if="isPlaying"
                        :color="color"
                        :style="{
                            animationDuration: animationDuration
                        }"
                        class="mb-1 v-avatar--metronome"
                        size="12"
                        ></v-avatar>
                    </v-fade-transition>
                    </v-col>
                    <v-col class="text-right">
                    <v-btn
                        :color="color"
                        dark
                        depressed
                        fab
                        @click="toggle"
                    >
                        <v-icon large>
                        {{ isPlaying ? 'mdi-pause' : 'mdi-play' }}
                        </v-icon>
                    </v-btn>
                    </v-col>
                </v-row>

                <v-slider
                    v-model="bpm"
                    :color="color"
                    track-color="grey"
                    always-dirty
                    min="40"
                    max="218"
                >
                    <template v-slot:prepend>
                    <v-icon
                        :color="color"
                        @click="decrement"
                    >
                        mdi-minus
                    </v-icon>
                    </template>

                    <template v-slot:append>
                    <v-icon
                        :color="color"
                        @click="increment"
                    >
                        mdi-plus
                    </v-icon>
                    </template>
                </v-slider>
                </v-card-text>
            </v-card>
            </template>

Append text field
^^^^^^^^^^^^^^^^^

Sliders can be combined with other components in its ``append`` slot, such as
:py:class:`TextField <ipyvuetify.TextField>`, to add additional functionality
to the component.

.. todo::

    The two-way binding does not work in the current ipyvuetify implementation.
    If anyone can help to improve this section, please contribute :fas:`coffee`

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.Responsive(
                        style="background: rgb(128, 128, 128);",
                        height=300
                    ),
                    v.Slider(
                        v_model=128,
                        class_="mx-2",
                        color="red",
                        track_color="red lighten-4",
                        label="R",
                        min=0,
                        max=255,
                        v_slots=[{
                            "name": "append",
                            "children": v.TextField(
                                style={"width": "60px"},
                                v_model=128,
                                type="number",
                                hide_details=True,
                                dense=True
                            )
                        }]
                    ),
                    v.Slider(
                        v_model=128,
                        class_="mx-2",
                        color="green",
                        track_color="green lighten-4",
                        label="G",
                        min=0,
                        max=255,
                        v_slots=[{
                            "name": "append",
                            "children": v.TextField(
                                style={"width": "60px"},
                                v_model=128,
                                type="number",
                                hide_details=True,
                                dense=True
                            )
                        }]
                    ),
                    v.Slider(
                        v_model=128,
                        class_="mx-2",
                        color="blue",
                        track_color="blue lighten-4",
                        label="B",
                        min=0,
                        max=255,
                        v_slots=[{
                            "name": "append",
                            "children": v.TextField(
                                style={"width": "60px"},
                                v_model=128,
                                type="number",
                                hide_details=True,
                                dense=True
                            )
                        }]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                width=400,
                children=[
                    v.Responsive(
                        style="background: rgb(128, 128, 128);",
                        height=300
                    ),
                    v.Slider(
                        v_model=128,
                        class_="mx-2",
                        color="red",
                        track_color="red lighten-4",
                        label="R",
                        min=0,
                        max=255,
                        v_slots=[{
                            "name": "append",
                            "children": v.TextField(
                                style={"width": "60px"},
                                v_model=128,
                                type="number",
                                hide_details=True,
                                dense=True
                            )
                        }]
                    ),
                    v.Slider(
                        v_model=128,
                        class_="mx-2",
                        color="green",
                        track_color="green lighten-4",
                        label="G",
                        min=0,
                        max=255,
                        v_slots=[{
                            "name": "append",
                            "children": v.TextField(
                                style={"width": "60px"},
                                v_model=128,
                                type="number",
                                hide_details=True,
                                dense=True
                            )
                        }]
                    ),
                    v.Slider(
                        v_model=128,
                        class_="mx-2",
                        color="blue",
                        track_color="blue lighten-4",
                        label="B",
                        min=0,
                        max=255,
                        v_slots=[{
                            "name": "append",
                            "children": v.TextField(
                                style={"width": "60px"},
                                v_model=128,
                                type="number",
                                hide_details=True,
                                dense=True
                            )
                        }]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card class="e4">
                <v-responsive
                :style="{ background: `rgb(${red}, ${green}, ${blue})` }"
                height="300px"
                ></v-responsive>

                <v-card-text>
                <v-container fluid>
                    <v-row>
                    <v-col cols="12">
                        <v-slider
                        v-model="red"
                        :max="255"
                        label="R"
                        class="align-center"
                        >
                        <template v-slot:append>
                            <v-text-field
                            v-model="red"
                            class="mt-0 pt-0"
                            type="number"
                            style="width: 60px"
                            ></v-text-field>
                        </template>
                        </v-slider>
                    </v-col>

                    <v-col cols="12">
                        <v-slider
                        v-model="green"
                        :max="255"
                        label="G"
                        class="align-center"
                        >
                        <template v-slot:append>
                            <v-text-field
                            v-model="green"
                            class="mt-0 pt-0"
                            type="number"
                            style="width: 60px"
                            ></v-text-field>
                        </template>
                        </v-slider>
                    </v-col>

                    <v-col cols="12">
                        <v-slider
                        v-model="blue"
                        :max="255"
                        label="B"
                        class="align-center"
                        >
                        <template v-slot:append>
                            <v-text-field
                            v-model="blue"
                            class="mt-0 pt-0"
                            type="number"
                            style="width: 60px"
                            ></v-text-field>
                        </template>
                        </v-slider>
                    </v-col>
                    </v-row>
                </v-container>
                </v-card-text>
            </v-card>
            </template>
