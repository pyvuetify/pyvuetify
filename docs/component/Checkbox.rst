Checkbox
========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/checkboxes/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Checkbox <ipyvuetify.Checkbox>` component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists.

.. api::

    :py:class:`ipyvuetify.Checkbox`
    :py:class:`ipyvuetify.SimpleCheckbox`

Usage
-----

A :py:class:`Checkbox <ipyvuetify.Checkbox>` in its simplest form provides a toggle between 2 values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            checkbox = v.Checkbox(
                v_model=True,
                label='Checkbox 1'
            )

            v.Container(children=[checkbox])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            checkbox = v.Checkbox(
                v_model=True,
                label='Checkbox 1'
            )

            v.Container(children=[checkbox])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-checkbox
                v-model="checkbox1"
                label="Checkbox 1"
              ></v-checkbox>
            </template>

            <script>
              export default {
                data: () => ({
                  checkbox1: true,
                }),
              }
            </script>

Colors
------

Checkboxes can be colored by using any of the builtin colors and contextual names using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='red', color='red')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='red darken-3', color='red darken-3')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='indigo', color='indigo')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='indigo darken-3', color='indigo darken-3')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='orange', color='orange')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='orange darken-3', color='orange darken-3')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='primary', color='primary')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='secondary', color='secondary')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='success', color='success')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='info', color='info')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='warning', color='warning')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='error', color='error')]),
                ]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='red', color='red')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='red darken-3', color='red darken-3')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='indigo', color='indigo')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='indigo darken-3', color='indigo darken-3')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='orange', color='orange')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='orange darken-3', color='orange darken-3')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='primary', color='primary')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='secondary', color='secondary')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='success', color='success')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='info', color='info')]),
                ]),
                v.Row(children=[
                    v.Col(children=[v.Checkbox(v_model=True, label='warning', color='warning')]),
                    v.Col(children=[v.Checkbox(v_model=True, label='error', color='error')]),
                ]),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-row>
                  <v-col>
                    <v-checkbox
                      v-model="checked"
                      label="red"
                      color="red"
                      value="red"
                    ></v-checkbox>
                  </v-col>
                  <v-col>
                    <v-checkbox
                      v-model="checked"
                      label="red darken-3"
                      color="red darken-3"
                      value="red darken-3"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-checkbox
                      v-model="checked"
                      label="indigo"
                      color="indigo"
                      value="indigo"
                    ></v-checkbox>
                  </v-col>
                  <v-col>
                    <v-checkbox
                      v-model="checked"
                      label="indigo darken-3"
                      color="indigo darken-3"
                      value="indigo darken-3"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </template>

Model as Array
--------------

Multiple :py:class:`Checkbox <ipyvuetify.Checkbox>`'s can share the same ``v_model`` by using an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            selected = ['John']

            checkbox1 = v.Checkbox(v_model=selected, label='John', value='John')
            checkbox2 = v.Checkbox(v_model=selected, label='Jacob', value='Jacob')

            v.Container(children=[checkbox1, checkbox2])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            selected = ['John']

            checkbox1 = v.Checkbox(v_model=selected, label='John', value='John')
            checkbox2 = v.Checkbox(v_model=selected, label='Jacob', value='Jacob')

            v.Container(children=[checkbox1, checkbox2])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div>
                <v-checkbox
                  v-model="selected"
                  label="John"
                  value="John"
                ></v-checkbox>
                <v-checkbox
                  v-model="selected"
                  label="Jacob"
                  value="Jacob"
                ></v-checkbox>
              </div>
            </template>

            <script>
              export default {
                data: () => ({
                  selected: ['John'],
                }),
              }
            </script>

States
------

:py:class:`Checkbox <ipyvuetify.Checkbox>` can have different states such as default, disabled, and indeterminate.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Checkbox(v_model=True, label='on'),
                    v.Checkbox(v_model=False, label='off'),
                    v.Checkbox(v_model=False, indeterminate=True, label='indeterminate'),
                ]),
                v.Row(children=[
                    v.Checkbox(v_model=True, disabled=True, label='on disabled'),
                    v.Checkbox(v_model=False, disabled=True, label='off disabled'),
                ]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Checkbox(v_model=True, label='on'),
                    v.Checkbox(v_model=False, label='off'),
                    v.Checkbox(v_model=False, indeterminate=True, label='indeterminate'),
                ]),
                v.Row(children=[
                    v.Checkbox(v_model=True, disabled=True, label='on disabled'),
                    v.Checkbox(v_model=False, disabled=True, label='off disabled'),
                ]),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-row>
                  <v-checkbox
                    v-model="checked"
                    label="on"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="unchecked"
                    label="off"
                  ></v-checkbox>
                  <v-checkbox
                    indeterminate
                    label="indeterminate"
                  ></v-checkbox>
                </v-row>
                <v-row>
                  <v-checkbox
                    v-model="checked"
                    disabled
                    label="on disabled"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="unchecked"
                    disabled
                    label="off disabled"
                  ></v-checkbox>
                </v-row>
              </v-container>
            </template>

            <script>
              export default {
                data: () => ({
                  checked: true,
                  unchecked: false,
                }),
              }
            </script>
