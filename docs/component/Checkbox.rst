Checkbox
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/checkboxes/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Checkbox <ipyvuetify.Checkbox>` component provides users the ability
to choose between two distinct values. These are very similar to a switch and can
be used in complex forms and checklists. A simpler version,
:py:class:`SimpleCheckbox <ipyvuetify.SimpleCheckbox>` is used primarily as a
lightweight alternative in data-table components to select rows or display inline
boolean data.

Usage
-----

A :py:class:`Checkbox <ipyvuetify.Checkbox>` in its simplest form provides a toggle
between 2 values.

.. jupyter-execute::

    import ipyvuetify as v

    v.Container(children=[
        v.Checkbox(v_model=True, label='Checkbox 1')
    ])

.. api::

    - :py:class:`ipyvuetify.Checkbox`
    - :py:class:`ipyvuetify.SimpleCheckbox`

Colors
------

Checkboxes can be colored by using any of the builtin colors and contextual names
using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='red',
                            label='red',
                            color='red',
                            value='red',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='red darken-3',
                            label='red darken-3',
                            color='red darken-3',
                            value='red darken-3',
                            hide_details=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='indigo',
                            label='indigo',
                            color='indigo',
                            value='indigo',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='indigo darken-3',
                            label='indigo darken-3',
                            color='indigo darken-3',
                            value='indigo darken-3',
                            hide_details=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='orange',
                            label='orange',
                            color='orange',
                            value='orange',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='orange darken-3',
                            label='orange darken-3',
                            color='orange darken-3',
                            value='orange darken-3',
                            hide_details=True,
                        ),
                    ]),
                ]),
                v.Row(class_='mt-12', children=[
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='primary',
                            label='primary',
                            color='primary',
                            value='primary',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='secondary',
                            label='secondary',
                            color='secondary',
                            value='secondary',
                            hide_details=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='success',
                            label='success',
                            color='success',
                            value='success',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='info',
                            label='info',
                            color='info',
                            value='info',
                            hide_details=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='warning',
                            label='warning',
                            color='warning',
                            value='warning',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='error',
                            label='error',
                            color='error',
                            value='error',
                            hide_details=True,
                        ),
                    ]),
                ]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='red',
                            label='red',
                            color='red',
                            value='red',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='red darken-3',
                            label='red darken-3',
                            color='red darken-3',
                            value='red darken-3',
                            hide_details=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='indigo',
                            label='indigo',
                            color='indigo',
                            value='indigo',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='indigo darken-3',
                            label='indigo darken-3',
                            color='indigo darken-3',
                            value='indigo darken-3',
                            hide_details=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='orange',
                            label='orange',
                            color='orange',
                            value='orange',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='orange darken-3',
                            label='orange darken-3',
                            color='orange darken-3',
                            value='orange darken-3',
                            hide_details=True,
                        ),
                    ]),
                ]),
                v.Row(class_='mt-12', children=[
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='primary',
                            label='primary',
                            color='primary',
                            value='primary',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='secondary',
                            label='secondary',
                            color='secondary',
                            value='secondary',
                            hide_details=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='success',
                            label='success',
                            color='success',
                            value='success',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='info',
                            label='info',
                            color='info',
                            value='info',
                            hide_details=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            v_model='warning',
                            label='warning',
                            color='warning',
                            value='warning',
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model='error',
                            label='error',
                            color='error',
                            value='error',
                            hide_details=True,
                        ),
                    ]),
                ]),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card flat>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" sm="4" md="4">
                                    <v-checkbox
                                        v-model="ex4"
                                        label="red"
                                        color="red"
                                        value="red"
                                        hide-details
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="ex4"
                                        label="red darken-3"
                                        color="red darken-3"
                                        value="red darken-3"
                                        hide-details
                                    ></v-checkbox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                        v-model="ex4"
                                        label="indigo"
                                        color="indigo"
                                        value="indigo"
                                        hide-details
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="ex4"
                                        label="indigo darken-3"
                                        color="indigo darken-3"
                                        value="indigo darken-3"
                                        hide-details
                                    ></v-checkbox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                        v-model="ex4"
                                        label="orange"
                                        color="orange"
                                        value="orange"
                                        hide-details
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="ex4"
                                        label="orange darken-3"
                                        color="orange darken-3"
                                        value="orange darken-3"
                                        hide-details
                                    ></v-checkbox>
                                </v-col>
                            </v-row>

                            <v-row class="mt-12">
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                        v-model="ex4"
                                        label="primary"
                                        color="primary"
                                        value="primary"
                                        hide-details
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="ex4"
                                        label="secondary"
                                        color="secondary"
                                        value="secondary"
                                        hide-details
                                    ></v-checkbox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                        v-model="ex4"
                                        label="success"
                                        color="success"
                                        value="success"
                                        hide-details
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="ex4"
                                        label="info"
                                        color="info"
                                        value="info"
                                        hide-details
                                    ></v-checkbox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                        v-model="ex4"
                                        label="warning"
                                        color="warning"
                                        value="warning"
                                        hide-details
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="ex4"
                                        label="error"
                                        color="error"
                                        value="error"
                                        hide-details
                                    ></v-checkbox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
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

Model as boolean
----------------

A single :py:class:`Checkbox <ipyvuetify.Checkbox>` will have a boolean value as its value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            checkbox1 = v.Checkbox(v_model=True, label='Checkbox 1')
            checkbox2 = v.Checkbox(v_model=False, label='Checkbox 2')
            checkbox1.label = 'Checked' if checkbox1.v_model else 'Unchecked'
            checkbox2.label = 'Checked' if checkbox2.v_model else 'Unchecked'

            v.Container(children=[checkbox1, checkbox2])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            checkbox1 = v.Checkbox(v_model=True, label='Checkbox 1')
            checkbox2 = v.Checkbox(v_model=False, label='Checkbox 2')
            checkbox1.label = 'Checked' if checkbox1.v_model else 'Unchecked'
            checkbox2.label = 'Checked' if checkbox2.v_model else 'Unchecked'

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

:py:class:`Checkbox <ipyvuetify.Checkbox>` can have different states such as default,
disabled, and indeterminate.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(class_='light--text', children=[
                    v.Col(cols=4, children=['on']),
                    v.Col(cols=4, children=['off']),
                    v.Col(cols=4, children=['indeterminate']),
                ]),
                v.Row(children=[
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            input_value=True,
                            value=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            value=False,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            value=True,
                            indeterminate=True,
                        ),
                    ]),
                ]),
                v.Row(class_='light--text', children=[
                    v.Col(cols=4, children=['on disabled']),
                    v.Col(cols=4, children=['off disabled']),
                ]),
                v.Row(children=[
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            input_value=True,
                            value=True,
                            disabled=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            value=False,
                            disabled=True,
                        ),
                    ]),
                ]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(class_='light--text', children=[
                    v.Col(cols=4, children=['on']),
                    v.Col(cols=4, children=['off']),
                    v.Col(cols=4, children=['indeterminate']),
                ]),
                v.Row(children=[
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            input_value=True,
                            value=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            value=False,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            value=True,
                            indeterminate=True,
                        ),
                    ]),
                ]),
                v.Row(class_='light--text', children=[
                    v.Col(cols=4, children=['on disabled']),
                    v.Col(cols=4, children=['off disabled']),
                ]),
                v.Row(children=[
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            input_value=True,
                            value=True,
                            disabled=True,
                        ),
                    ]),
                    v.Col(cols=4, children=[
                        v.Checkbox(
                            value=False,
                            disabled=True,
                        ),
                    ]),
                ]),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-container fluid>
                    <v-row class="light--text">
                        <v-col cols="4">
                            on
                        </v-col>
                        <v-col cols="4">
                            off
                        </v-col>
                        <v-col cols="4">
                            indeterminate
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-checkbox
                                input-value="true"
                                value
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="4">
                            <v-checkbox value></v-checkbox>
                        </v-col>
                        <v-col cols="4">
                            <v-checkbox
                                value
                                indeterminate
                            ></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row class="light--text">
                        <v-col cols="4">
                            on disabled
                        </v-col>
                        <v-col cols="4">
                            off disabled
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-checkbox
                                input-value="true"
                                value
                                disabled
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="4">
                            <v-checkbox
                                value
                                disabled
                            ></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
            </template>

Label slot
----------

Checkbox labels can be defined in ``label`` slot - that will allow to use HTML content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Checkbox(
                    v_model=False,
                    v_slots = [{
                        'name': 'label',
                        'variable': 'label',
                        'children': v.Html(tag='div', children=[
                            'I agree that ',
                            v.Tooltip(
                                bottom=True,
                                v_slots=[{
                                    'name': 'activator',
                                    'variable': 'activator',
                                    'children': v.Html(
                                        tag='a',
                                        v_on="activator.on",
                                        attributes={
                                            'href': 'https://vuetifyjs.com',
                                            'target': '_blank',
                                        },
                                        children=['Vuetify'],
                                    ),
                                }],
                            ),
                            ' is awesome',
                        ]),
                    }],
                )
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Checkbox(
                    v_model=False,
                    v_slots = [{
                        'name': 'label',
                        'variable': 'label',
                        'children': v.Html(tag='div', children=[
                            'I agree that ',
                            v.Tooltip(
                                bottom=True,
                                v_slots=[{
                                    'name': 'activator',
                                    'variable': 'activator',
                                    'children': v.Html(
                                        tag='a',
                                        v_on="activator.on",
                                        attributes={
                                            'href': 'https://vuetifyjs.com',
                                            'target': '_blank',
                                        },
                                        children=['Vuetify'],
                                    ),
                                }],
                            ),
                            ' is awesome',
                        ]),
                    }],
                )
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-container fluid>
                    <v-checkbox v-model="checkbox">
                        <template v-slot:label>
                            <div>
                                I agree that
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <a
                                            target="_blank"
                                            href="https://vuetifyjs.com"
                                            @click.stop
                                            v-on="on"
                                        >
                                            Vuetify
                                        </a>
                                    </template>
                                    Opens in new window
                                </v-tooltip>
                                is awesome
                            </div>
                        </template>
                    </v-checkbox>
                </v-container>
            </template>

Inline text field
-----------------

You can place :py:class:`Checkbox <ipyvuetify.Checkbox>` in line with other components
such as :py:class:`TextField <ipyvuetify.TextField>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            container = v.Container(children=[
                v.Card(children=[
                    v.CardText(children=[
                        v.Html(tag='div', class_="flex align-center", children=[
                            v.Checkbox(
                                v_model=False,
                                hide_details=True,
                                class_='shrink mr-2 mt-0 d-inline-flex',
                            ),
                            v.TextField(label='Include files', class_="d-inline-flex"),
                        ]),
                        v.Html(tag='div', class_="flex align-center", children=[
                            (checkbox :=v.Checkbox(
                                v_model=True,
                                hide_details=True,
                                class_='shrink mr-2 mt-0 d-inline-flex',
                            )),
                            (text_field := v.TextField(
                                label='I only work if you uncheck the box',
                                disabled=True,
                                class_="d-inline-flex",
                            )),
                        ]),
                    ]),
                ]),
            ])

            jslink((checkbox, 'v_model'), (text_field, 'disabled'))

            container

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            container = v.Container(children=[
                v.Card(children=[
                    v.CardText(children=[
                        v.Html(tag='div', class_="flex align-center", children=[
                            v.Checkbox(
                                v_model=False,
                                hide_details=True,
                                class_='shrink mr-2 mt-0 d-inline-flex',
                            ),
                            v.TextField(label='Include files', class_="d-inline-flex"),
                        ]),
                        v.Html(tag='div', class_="flex align-center", children=[
                            (checkbox :=v.Checkbox(
                                v_model=True,
                                hide_details=True,
                                class_='shrink mr-2 mt-0 d-inline-flex',
                            )),
                            (text_field := v.TextField(
                                label='I only work if you uncheck the box',
                                disabled=True,
                                class_="d-inline-flex",
                            )),
                        ]),
                    ]),
                ]),
            ])

            jslink((checkbox, 'v_model'), (text_field, 'disabled'))

            container

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card>
                    <v-card-text>
                        <v-row align="center">
                            <v-checkbox
                                v-model="includeFiles"
                                hide-details
                                class="shrink mr-2 mt-0"
                            ></v-checkbox>
                            <v-text-field label="Include files"></v-text-field>
                        </v-row>
                        <v-row align="center">
                            <v-checkbox
                                v-model="enabled"
                                hide-details
                                class="shrink mr-2 mt-0"
                            ></v-checkbox>
                            <v-text-field
                                :disabled="!enabled"
                                label="I only work if you check the box"
                            ></v-text-field>
                        </v-row>
                    </v-card-text>
                </v-card>
            </template>