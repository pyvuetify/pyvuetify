ColorPicker
===========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/color-pickers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ColorPicker <ipyvuetify.ColorPicker>` allows you to select a color using a variety of input methods.

.. api::

    :py:class:`ipyvuetify.ColorPicker`
    :py:class:`ipyvuetify.ColorPickerCanvas`
    :py:class:`ipyvuetify.ColorPickerSwatches`

Usage
-----

The color picker allows color selection from a variety of input methods.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.ColorPicker(v_model='#FF0000')

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.ColorPicker(v_model='#FF0000')

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-color-picker v-model="color"></v-color-picker>
            </template>

            <script>
              export default {
                data: () => ({
                  color: '#FF0000',
                }),
              }
            </script>

Model
-----

The :py:class:`ColorPicker <ipyvuetify.ColorPicker>` uses the ``v_model`` prop to control the color displayed. It supports hex strings such as #FF00FF and objects representing RGBA, HSLA and HSVA values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            color_picker = v.ColorPicker(v_model='#FF00FF')

            v.Container(children=[
                color_picker,
                v.Html(tag='div', class_='mt-4', children=[f'Selected: {color_picker.v_model}'])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            color_picker = v.ColorPicker(v_model='#FF00FF')

            v.Container(children=[
                color_picker,
                v.Html(tag='div', class_='mt-4', children=[f'Selected: {color_picker.v_model}'])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div>
                <v-color-picker v-model="color"></v-color-picker>
                <div class="mt-4">Selected: {{ color }}</div>
              </div>
            </template>

            <script>
              export default {
                data: () => ({
                  color: '#FF00FF',
                }),
              }
            </script>

Canvas
------

The canvas can be hidden with the ``hide_canvas`` prop, and you can set its height with the ``canvas_height`` prop. The size of the selection dot can be controlled with the ``dot_size`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.ColorPicker(v_model='#FF0000')]),
                    v.Col(children=[v.ColorPicker(v_model='#FF0000', canvas_height=100)]),
                    v.Col(children=[v.ColorPicker(v_model='#FF0000', dot_size=15)]),
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.ColorPicker(v_model='#FF0000')]),
                    v.Col(children=[v.ColorPicker(v_model='#FF0000', canvas_height=100)]),
                    v.Col(children=[v.ColorPicker(v_model='#FF0000', dot_size=15)]),
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-row>
                <v-col>
                  <v-color-picker v-model="color"></v-color-picker>
                </v-col>
                <v-col>
                  <v-color-picker
                    v-model="color"
                    canvas-height="100"
                  ></v-color-picker>
                </v-col>
                <v-col>
                  <v-color-picker
                    v-model="color"
                    dot-size="15"
                  ></v-color-picker>
                </v-col>
              </v-row>
            </template>

            <script>
              export default {
                data: () => ({
                  color: '#FF0000',
                }),
              }
            </script>

Swatches
--------

Using the ``show_swatches`` prop you can display an array of color swatches that users can pick from. You can customize what colors are shown using the ``swatches`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.ColorPicker(
                v_model='#FF0000',
                show_swatches=True
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.ColorPicker(
                v_model='#FF0000',
                show_swatches=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-color-picker
                v-model="color"
                show-swatches
              ></v-color-picker>
            </template>

            <script>
              export default {
                data: () => ({
                  color: '#FF0000',
                }),
              }
            </script>

Hide Inputs
-----------

The number inputs can be hidden with the ``hide_inputs`` prop, and the sliders can be hidden with the ``hide_sliders`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.ColorPicker(v_model='#FF0000', hide_inputs=True)]),
                    v.Col(children=[v.ColorPicker(v_model='#FF0000', hide_sliders=True)]),
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.ColorPicker(v_model='#FF0000', hide_inputs=True)]),
                    v.Col(children=[v.ColorPicker(v_model='#FF0000', hide_sliders=True)]),
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-row>
                <v-col>
                  <v-color-picker
                    v-model="color"
                    hide-inputs
                  ></v-color-picker>
                </v-col>
                <v-col>
                  <v-color-picker
                    v-model="color"
                    hide-sliders
                  ></v-color-picker>
                </v-col>
              </v-row>
            </template>

            <script>
              export default {
                data: () => ({
                  color: '#FF0000',
                }),
              }
            </script>
