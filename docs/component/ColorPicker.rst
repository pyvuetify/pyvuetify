ColorPicker
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation
    <https://v2.vuetifyjs.com/en/components/color-pickers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ColorPicker <ipyvuetify.ColorPicker>` allows you to select a color
using a variety of input methods.

Usage
-----

The :py:class:`ColorPicker <ipyvuetify.ColorPicker>` allows you to select a color
using a variety of input methods.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        children=[
            v.ColorPicker(
                class_='mx-auto',
                dot_size=25,
                swatches_max_height=200,
            ),
        ],
        class_='my-2',
    )

.. api::

    - :py:class:`ipyvuetify.ColorPicker`
    - :py:class:`ipyvuetify.ColorPickerCanvas`
    - :py:class:`ipyvuetify.ColorPickerSwatches`

Canvas
------

The canvas can be hidden with the ``hide-canvas`` prop, and you can set its height
with the prop ``canvas-height``. The size of the selection dot can be controlled
with the ``dot-size`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            color_picker1 = v.ColorPicker(
                hide_canvas=True,
                class_='mx-auto my-2',
            )
            color_picker2 = v.ColorPicker(
                canvas_height=300,
                class_='mx-auto my-2',
            )
            color_picker3 = v.ColorPicker(
                dot_size=30,
                class_='mx-auto my-2',
            )

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            color_picker1,
                            color_picker2,
                            color_picker3,
                        ],
                    ),
                ],
                class_='my-2',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            color_picker1 = v.ColorPicker(
                hide_canvas=True,
                class_='mx-auto my-2',
            )
            color_picker2 = v.ColorPicker(
                canvas_height=300,
                class_='mx-auto my-2',
            )
            color_picker3 = v.ColorPicker(
                dot_size=30,
                class_='mx-auto my-2',
            )

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            color_picker1,
                            color_picker2,
                            color_picker3,
                        ],
                    ),
                ],
                class_='my-2',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

          <template>
            <v-row justify="space-around">
                <v-color-picker
                class="mx-auto my-2"
                hide-canvas
                ></v-color-picker>
                <v-color-picker
                class="mx-auto my-2"
                :canvas-height="300"
                ></v-color-picker>
                <v-color-picker
                class="mx-auto my-2"
                :dot-size="30"
                ></v-color-picker>
            </v-row>
          </template>

Elevation
---------

Adjust the elevation of the :py:class:`ColorPicker <ipyvuetify.ColorPicker>`
component using the ``elevation`` or ``flat`` prop. The ``flat`` is equivalent
to setting ``elevation`` to 0.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            color_picker1 = v.ColorPicker(
                class_='mx-auto my-2',
                flat=True,
            )
            color_picker2 = v.ColorPicker(
                class_='mx-auto my-2',
                elevation=15,
            )

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            color_picker1,
                            color_picker2,
                        ],
                    ),
                ],
                class_='my-2',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            color_picker1 = v.ColorPicker(
                class_='mx-auto my-2',
                flat=True,
            )
            color_picker2 = v.ColorPicker(
                class_='mx-auto my-2',
                elevation=15,
            )

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            color_picker1,
                            color_picker2,
                        ],
                    ),
                ],
                class_='my-2',
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-color-picker
                class="mx-auto my-2"
                flat
                ></v-color-picker>
                <v-color-picker
                class="mx-auto my-2"
                :elevation="15"
                ></v-color-picker>
            </v-row>
            </template>

Inputs
------

The number inputs can be hidden with the ``hide-inputs`` prop, and the sliders can
be hidden with the ``hide-sliders`` prop. You can also hide the mode switch icon
with the ``hide-mode-switch`` prop. The mode can also be controlled externally
through the ``mode`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            color_picker1 = v.ColorPicker(
                class_='ma-2',
                hide_inputs=True,
            )
            color_picker2 = v.ColorPicker(
                class_='ma-2',
                hide_mode_switch=True,
            )
            color_picker3 = v.ColorPicker(
                class_='ma-2',
                mode='hsla',
            )
            color_picker4 = v.ColorPicker(
                class_='ma-2',
                mode='hexa',
            )

            jslink((color_picker1, 'v_model'), (color_picker2, 'v_model'))
            jslink((color_picker1, 'v_model'), (color_picker3, 'v_model'))
            jslink((color_picker1, 'v_model'), (color_picker4, 'v_model'))

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            color_picker1,
                            color_picker2,
                            color_picker3,
                            color_picker4,
                        ],
                    ),
                ],
                class_='my-2',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            color_picker1 = v.ColorPicker(
                class_='ma-2',
                hide_inputs=True,
            )
            color_picker2 = v.ColorPicker(
                class_='ma-2',
                hide_mode_switch=True,
            )
            color_picker3 = v.ColorPicker(
                class_='ma-2',
                mode='hsla',
            )
            color_picker4 = v.ColorPicker(
                class_='ma-2',
                mode='hexa',
            )

            jslink((color_picker1, 'mode'), (color_picker2, 'mode'))
            jslink((color_picker1, 'mode'), (color_picker3, 'mode'))
            jslink((color_picker1, 'mode'), (color_picker4, 'mode'))

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            color_picker1,
                            color_picker2,
                            color_picker3,
                            color_picker4,
                        ],
                    ),
                ],
                class_='my-2',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-color-picker
                class="ma-2"
                hide-inputs
                ></v-color-picker>
                <v-color-picker
                class="ma-2"
                hide-mode-switch
                ></v-color-picker>
                <v-color-picker
                class="ma-2"
                mode="hsla"
                ></v-color-picker>
                <v-color-picker
                class="ma-2"
                mode="hexa"
                ></v-color-picker>
            </v-row>

Model
-----

The :py:class:`ColorPicker <ipyvuetify.ColorPicker>` uses the ``v-model`` prop to
control the color displayed. It supports hex strings such as #FF00FF and
#FF00FF00, and objects representing RGBA, HSLA and HSVA values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            color_picker1 = v.ColorPicker(
                mode="hexa",
                v_model='#FF5733',
                class_='ma-2',
            )

            color_picker2 = v.ColorPicker(
                v_model={'r': 255, 'g': 87, 'b': 51, 'a': 1},
                class_='ma-2',
            )

            jslink((color_picker1, 'v_model'), (color_picker2, 'v_model'))

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[color_picker1, color_picker2],
                    ),
                ],
                class_='my-2',
            )



    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            color_picker1 = v.ColorPicker(
                mode="hexa",
                v_model='#FF5733',
                class_='ma-2',
            )

            color_picker2 = v.ColorPicker(
                v_model={'r': 255, 'g': 87, 'b': 51, 'a': 1},
                class_='ma-2',
            )

            jslink((color_picker1, 'v_model'), (color_picker2, 'v_model'))

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[color_picker1, color_picker2],
                    ),
                ],
                class_='my-2',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-color-picker
                class="ma-2"
                mode="hexa"
                v-model="colorHex"
                ></v-color-picker>
                <v-color-picker
                class="ma-2"
                v-model="colorRgba"
                ></v-color-picker>
            </v-row>
            </template>

Swatches
--------

Using the ``show-swatches`` prop you can display an array of color swatches that
users can pick from. It is also possible to customize what colors are shown using
the ``swatches`` prop. This prop accepts a two-dimensional array, where the first
dimension defines a column, and second dimension defines the swatches from top to
bottom by providing rgba hex strings. You can also set the max height of the swatches
section with the ``swatches-max-height`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors =  [
                ['#FF0000', '#AA0000', '#550000'],
                ['#FFFF00', '#AAAA00', '#555500'],
                ['#00FF00', '#00AA00', '#005500'],
                ['#00FFFF', '#00AAAA', '#005555'],
            ]

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            v.ColorPicker(
                                class_='ma-2',
                                show_swatches=True,
                            ),
                            v.ColorPicker(
                                class_='ma-2',
                                swatches=colors,
                                show_swatches=True,
                            ),
                            v.ColorPicker(
                                class_='ma-2',
                                show_swatches=True,
                                swatches_max_height=300,
                            ),
                        ],
                    ),
                ],
                class_='my-2',
            )
    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors =  [
                ['#FF0000', '#AA0000', '#550000'],
                ['#FFFF00', '#AAAA00', '#555500'],
                ['#00FF00', '#00AA00', '#005500'],
                ['#00FFFF', '#00AAAA', '#005555'],
            ]

            v.Container(
                children=[
                    v.Row(
                        justify='space-around',
                        children=[
                            v.ColorPicker(
                                class_='ma-2',
                                show_swatches=True,
                            ),
                            v.ColorPicker(
                                class_='ma-2',
                                swatches=colors,
                                show_swatches=True,
                            ),
                            v.ColorPicker(
                                class_='ma-2',
                                show_swatches=True,
                                swatches_max_height=300,
                            ),
                        ],
                    ),
                ],
                class_='my-2',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-color-picker
                class="ma-2"
                show-swatches
                ></v-color-picker>
                <v-color-picker
                class="ma-2"
                :swatches="swatches"
                show-swatches
                ></v-color-picker>
                <v-color-picker
                class="ma-2"
                show-swatches
                swatches-max-height="300px"
                ></v-color-picker>
            </v-row>
            </template>
