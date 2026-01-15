Stepper
=======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/steppers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Stepper <ipyvuetify.Stepper>` component displays progress through numbered steps. It can be used for a multitude of scenarios, including shopping carts, record creation and more.

.. api::

    :py:class:`ipyvuetify.Stepper`

Usage
-----

A stepper can be used for a multitude of scenarios, including shopping carts, record creation and more.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            step = v.Stepper(
                v_model=1,
                children=[
                    v.StepperHeader(children=[
                        v.StepperStep(step=1, children=['Step 1']),
                        v.Divider(),
                        v.StepperStep(step=2, children=['Step 2']),
                        v.Divider(),
                        v.StepperStep(step=3, children=['Step 3'])
                    ]),
                    v.StepperItems(children=[
                        v.StepperContent(step=1, children=[
                            v.Card(flat=True, children=['Step 1 content']),
                            v.Btn(color='primary', children=['Continue'])
                        ]),
                        v.StepperContent(step=2, children=[
                            v.Card(flat=True, children=['Step 2 content']),
                            v.Btn(color='primary', children=['Continue'])
                        ]),
                        v.StepperContent(step=3, children=[
                            v.Card(flat=True, children=['Step 3 content']),
                            v.Btn(color='primary', children=['Continue'])
                        ])
                    ])
                ]
            )
            step

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            step = v.Stepper(
                v_model=1,
                children=[
                    v.StepperHeader(children=[
                        v.StepperStep(step=1, children=['Step 1']),
                        v.Divider(),
                        v.StepperStep(step=2, children=['Step 2'])
                    ]),
                    v.StepperItems(children=[
                        v.StepperContent(step=1, children=[
                            v.Card(flat=True, children=['Step 1 content']),
                            v.Btn(color='primary', children=['Continue'])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-stepper v-model="step">
                <v-stepper-header>
                  <v-stepper-step :step="1">Step 1</v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step :step="2">Step 2</v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                  <v-stepper-content :step="1">
                    <v-card flat>Step 1 content</v-card>
                    <v-btn color="primary">Continue</v-btn>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </template>

Vertical
--------

Vertical steppers move users along the y-axis and otherwise work exactly the same as their horizontal counterpart.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            step = v.Stepper(
                v_model=1,
                vertical=True,
                children=[
                    v.StepperStep(step=1, children=['Select campaign settings']),
                    v.StepperContent(step=1, children=[
                        v.Card(color='grey lighten-4', class_='mb-4', height='200px'),
                        v.Btn(color='primary', children=['Continue'])
                    ]),
                    v.StepperStep(step=2, children=['Create an ad group']),
                    v.StepperContent(step=2, children=[
                        v.Card(color='grey lighten-4', class_='mb-4', height='200px'),
                        v.Btn(color='primary', children=['Continue'])
                    ])
                ]
            )
            step

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            step = v.Stepper(
                v_model=1,
                vertical=True,
                children=[
                    v.StepperStep(step=1, children=['Select campaign settings']),
                    v.StepperContent(step=1, children=[
                        v.Card(color='grey lighten-4', height='200px'),
                        v.Btn(color='primary', children=['Continue'])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-stepper v-model="step" vertical>
                <v-stepper-step :step="1">Select campaign settings</v-stepper-step>
                <v-stepper-content :step="1">
                  <v-card color="grey lighten-4" height="200px"></v-card>
                  <v-btn color="primary">Continue</v-btn>
                </v-stepper-content>
              </v-stepper>
            </template>
