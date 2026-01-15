Form
====

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/forms/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Form <ipyvuetify.Form>` component has event listeners to validate and reset form data. When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality.

.. api::

    :py:class:`ipyvuetify.Form`

Usage
-----

The internal ``v-form`` component makes it easy to add validation to form inputs. All input components have a ``rules`` prop which accepts a mixed array of types function, boolean and string.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Form(children=[
                v.Container(children=[
                    v.Row(children=[
                        v.Col(cols=12, md=4, children=[
                            v.TextField(
                                label='First name',
                                counter=10,
                                #rules=[lambda x: len(x) <= 10 or 'Max 10 characters']
                            )
                        ]),
                        v.Col(cols=12, md=4, children=[
                            v.TextField(
                                label='Last name',
                                counter=10,
                                #rules=[lambda x: len(x) <= 10 or 'Max 10 characters']
                            )
                        ]),
                        v.Col(cols=12, md=4, children=[
                            v.TextField(
                                label='E-mail',
                                #rules=[lambda x: '@' in x or 'E-mail must be valid']
                            )
                        ])
                    ])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Form(children=[
                v.Container(children=[
                    v.Row(children=[
                        v.Col(cols=12, md=4, children=[
                            v.TextField(
                                label='First name',
                                counter=10,
                                #rules=[lambda x: len(x) <= 10 or 'Max 10 characters']
                            )
                        ]),
                        v.Col(cols=12, md=4, children=[
                            v.TextField(
                                label='Last name',
                                counter=10,
                                #rules=[lambda x: len(x) <= 10 or 'Max 10 characters']
                            )
                        ]),
                        v.Col(cols=12, md=4, children=[
                            v.TextField(
                                label='E-mail',
                                #²rules=[lambda x: '@' in x or 'E-mail must be valid']
                            )
                        ])
                    ])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="First name"
                        counter="10"
                        :rules="[v => v.length <= 10 || 'Max 10 characters']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Last name"
                        counter="10"
                        :rules="[v => v.length <= 10 || 'Max 10 characters']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="E-mail"
                        :rules="[v => v.includes('@') || 'E-mail must be valid']"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </template>

Rules
-----

Rules allow you to apply custom validation on all form components. These are validated sequentially and will display a maximum of 1 error at a time.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            allow_spaces = v.Checkbox(v_model=False, label='Allow spaces')

            text_field = v.TextField(
                label='First name',
                hint='Foobar',
                v_model='Foobar',
                counter=6
            )

            def update_rules(*args):
                if allow_spaces.v_model:
                    text_field.rules = [
                        lambda x: len(x) <= 6 or 'Max 6 characters',
                        lambda x: x == 'Foobar' or 'Value must match Foobar'
                    ]
                else:
                    text_field.rules = [
                        lambda x: len(x) <= 6 or 'Max 6 characters',
                        lambda x: ' ' not in x or 'No spaces allowed',
                        lambda x: x == 'Foobar' or 'Value must match Foobar'
                    ]

            v.Container(children=[
                text_field,
                allow_spaces
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            allow_spaces = v.Checkbox(v_model=False, label='Allow spaces')

            text_field = v.TextField(
                label='First name',
                hint='Foobar',
                v_model='Foobar',
                counter=6
            )

            def update_rules(*args):
                if allow_spaces.v_model:
                    text_field.rules = [
                        lambda x: len(x) <= 6 or 'Max 6 characters',
                        lambda x: x == 'Foobar' or 'Value must match Foobar'
                    ]
                else:
                    text_field.rules = [
                        lambda x: len(x) <= 6 or 'Max 6 characters',
                        lambda x: ' ' not in x or 'No spaces allowed',
                        lambda x: x == 'Foobar' or 'Value must match Foobar'
                    ]

            v.Container(children=[text_field, allow_spaces])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-text-field
                  v-model="name"
                  label="First name"
                  hint="Foobar"
                  counter="6"
                  :rules="rules"
                ></v-text-field>
                <v-checkbox
                  v-model="allowSpaces"
                  label="Allow spaces"
                ></v-checkbox>
              </v-container>
            </template>

            <script>
            export default {
              data: () => ({
                name: 'Foobar',
                allowSpaces: false,
              }),
              computed: {
                rules() {
                  const rules = [
                    v => v.length <= 6 || 'Max 6 characters',
                  ]
                  if (!this.allowSpaces) {
                    rules.push(v => (v || '').indexOf(' ') < 0 || 'No spaces allowed')
                  }
                  rules.push(v => v === 'Foobar' || 'Value must match Foobar')
                  return rules
                },
              },
            }
            </script>
