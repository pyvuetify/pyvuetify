RangeSlider
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Range Sliders
    documentation <https://v2.vuetifyjs.com/en/components/range-sliders/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`RangeSlider <ipyvuetify.RangeSlider>` component complements
the :py:class:`Slider <ipyvuetify.Slider>` component by allowing the
selection of a range of values. It is ideal for adjusting settings such as
volume, brightness, or applying image filters.

.. api::

    - :py:class:`ipyvuetify.RangeSlider`
    - :py:class:`ipyvuetify.Slider`

Usage
-----

Sliders reflect a range of values along a bar, from which users may select a
single value. They are ideal for adjusting settings such as volume,
brightness, or applying image filters.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.RangeSlider(
        class_="mx-1 my-3",
        v_model=[10, 80],
        min=0,
        max=100,
    )

Examples
--------

Disabled
^^^^^^^^

You cannot interact with disabled sliders.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.RangeSlider(
                class_="mx-1 my-3",
                v_model=[30, 70],
                disabled=True,
                label='Disabled',
                value='30',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.RangeSlider(
                class_="mx-1 my-3",
                v_model=[30, 70],
                disabled=True,
                label='Disabled',
                value='30',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row>
                <v-col cols="12">
                    <v-range-slider
                    v-model="value"
                    disabled
                    label="Disabled"
                    value="30"
                    ></v-range-slider>
                </v-col>
                </v-row>
            </v-container>
            </template>

Min and max
^^^^^^^^^^^

You can set min and max values of sliders.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v


            v.Col(
                children=[
                    v.RangeSlider(
                        class_="mx-1 mt-10",
                        v_model=[25, 75],
                        thumb_label=True,
                        label="default Range",
                    ),
                    v.RangeSlider(
                        class_="mx-1 mt-10",
                        v_model=[-10, 20],
                        min=-50,
                        max=50,
                        label='negative to positive range',
                        thumb_label=True,
                    ),
                ]

            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v


            v.Col(
                children=[
                    v.RangeSlider(
                        class_="mx-1 mt-10",
                        v_model=[25, 75],
                        thumb_label=True,
                        label="default Range",
                    ),
                    v.RangeSlider(
                        class_="mx-1 mt-10",
                        v_model=[-10, 20],
                        min=-50,
                        max=50,
                        label='negative to positive range',
                        thumb_label=True,
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
                <v-subheader>Min and max range slider</v-subheader>

                <v-card-text>
                <v-row>
                    <v-col class="px-4">
                    <v-range-slider
                        v-model="range"
                        :max="max"
                        :min="min"
                        hide-details
                        class="align-center"
                    >
                        <template v-slot:prepend>
                        <v-text-field
                            :value="range[0]"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                            @change="$set(range, 0, $event)"
                        ></v-text-field>
                        </template>
                        <template v-slot:append>
                        <v-text-field
                            :value="range[1]"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                            @change="$set(range, 1, $event)"
                        ></v-text-field>
                        </template>
                    </v-range-slider>
                    </v-col>
                </v-row>
                </v-card-text>
            </v-card>
            </template>

Step
^^^^

:py:class:`RangeSlider <ipyvuetify.RangeSlider>` can have steps other than
1. This can be helpful for some applications where you need to adjust values
with more or less accuracy.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.RangeSlider(
                class_="mx-1 my-3",
                v_model=[20, 80],
                step=10,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.RangeSlider(
                class_="mx-1 my-3",
                v_model=[20, 80],
                step=10,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-card-text>
                <v-range-slider
                    v-model="value"
                    step="10"
                ></v-range-slider>
                </v-card-text>
            </v-card>
            </template>

Vertical sliders
^^^^^^^^^^^^^^^^

You can use the vertical prop to switch sliders to a vertical orientation. If
you need to change the height of the slider, use css.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.RangeSlider(
                class_="mx-auto my-3",
                v_model=[30, 70],
                vertical=True,
                label='Range',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.RangeSlider(
                class_="mx-auto my-3",
                v_model=[30, 70],
                vertical=True,
                label='Range',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-row>
                <v-range-slider
                    v-model="value"
                    vertical
                    label="Range"
                ></v-range-slider>
                </v-row>
            </v-container>
            </template>

Thumb label
^^^^^^^^^^^

Using the tick-labels prop along with the ``thumb-label`` slot, you can
create a very customized solution.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            seasons = ['Winter', 'Spring', 'Summer', 'Fall']
            icons = ['mdi-snowflake', 'mdi-flower', 'mdi-weather-sunny', 'mdi-leaf']


            v.RangeSlider(
                class_="mx-3 mt-10",
                tick_labels=seasons,
                v_model=[0, 1],
                min=0,
                max=3,
                ticks="always",
                tick_size=4,
                thumb_label="always",
                v_slots=[{
                    'name': 'thumb_label',
                    'variables': 'props',
                    'children': [v.Icon(
                        dark=True,
                        children=[f"{{{{ season(props.value) }}}}"],
                    )],
                }],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            seasons = ['Winter', 'Spring', 'Summer', 'Fall']
            icons = ['mdi-snowflake', 'mdi-flower', 'mdi-weather-sunny', 'mdi-leaf']


            v.RangeSlider(
                class_="mx-3 mt-10",
                tick_labels=seasons,
                v_model=[0, 1],
                min=0,
                max=3,
                ticks="always",
                tick_size=4,
                thumb_label="always",
                v_slots=[{
                    'name': 'thumb_label',
                    'variables': 'props',
                    'children': [v.Icon(
                        dark=True,
                        children=[f"{{{{ season(props.value) }}}}"],
                    )],
                }],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row>
                <v-col class="pa-12">
                <v-range-slider
                    :tick-labels="seasons"
                    :value="[0, 1]"
                    min="0"
                    max="3"
                    ticks="always"
                    tick-size="4"
                >
                    <template v-slot:thumb-label="props">
                    <v-icon dark>
                        {{ season(props.value) }}
                    </v-icon>
                    </template>
                </v-range-slider>
                </v-col>
            </v-row>
            </template>
