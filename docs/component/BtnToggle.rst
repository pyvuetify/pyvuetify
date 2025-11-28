BtnToggle
=========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/button-groups/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`BtnToggle <ipyvuetify.BtnToggle>` component is a simple wrapper for :py:class:`ItemGroup <ipyvuetify.ItemGroup>` built specifically to work with :py:class:`Btn <ipyvuetify.Btn>`.

.. api::

    :py:class:`ipyvuetify.BtnToggle`

Usage
-----

Toggle buttons allow you to create a styled group of buttons that can be selected or toggled under a single ``v_model``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            toggle_exclusive = v.BtnToggle(
                v_model=1,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_exclusive])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            toggle_exclusive = v.BtnToggle(
                v_model=1,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_exclusive])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-btn-toggle
                v-model="toggle_exclusive"
              >
                <v-btn>
                  <v-icon>mdi-format-align-left</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-center</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-right</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-justify</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>

            <script>
              export default {
                data: () => ({
                  toggle_exclusive: 1,
                }),
              }
            </script>

Mandatory
---------

A :py:class:`BtnToggle <ipyvuetify.BtnToggle>` with the ``mandatory`` prop will always have a value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            toggle_mandatory = v.BtnToggle(
                v_model=0,
                mandatory=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_mandatory])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            toggle_mandatory = v.BtnToggle(
                v_model=0,
                mandatory=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_mandatory])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-btn-toggle
                v-model="toggle_mandatory"
                mandatory
              >
                <v-btn>
                  <v-icon>mdi-format-align-left</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-center</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-right</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-justify</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>

            <script>
              export default {
                data: () => ({
                  toggle_mandatory: 0,
                }),
              }
            </script>

Multiple
--------

A :py:class:`BtnToggle <ipyvuetify.BtnToggle>` with the ``multiple`` prop will allow a user to select multiple return values as an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            toggle_multiple = v.BtnToggle(
                v_model=[0, 1, 2],
                multiple=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_multiple])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            toggle_multiple = v.BtnToggle(
                v_model=[0, 1, 2],
                multiple=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_multiple])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-btn-toggle
                v-model="toggle_multiple"
                multiple
              >
                <v-btn>
                  <v-icon>mdi-format-align-left</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-center</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-right</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-justify</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>

            <script>
              export default {
                data: () => ({
                  toggle_multiple: [0, 1, 2],
                }),
              }
            </script>

Rounded
-------

You can make :py:class:`BtnToggle <ipyvuetify.BtnToggle>` rounded using the ``rounded`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            toggle_rounded = v.BtnToggle(
                v_model=1,
                rounded=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_rounded])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            toggle_rounded = v.BtnToggle(
                v_model=1,
                rounded=True,
                children=[
                    v.Btn(children=[v.Icon(children=['mdi-format-align-left'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-center'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-right'])]),
                    v.Btn(children=[v.Icon(children=['mdi-format-align-justify'])])
                ]
            )

            v.Container(children=[toggle_rounded])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-btn-toggle
                v-model="toggle_rounded"
                rounded
              >
                <v-btn>
                  <v-icon>mdi-format-align-left</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-center</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-right</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-format-align-justify</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>

            <script>
              export default {
                data: () => ({
                  toggle_rounded: 1,
                }),
              }
            </script>
