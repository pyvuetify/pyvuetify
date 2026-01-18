Switch
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Switch
    documentation <https://v2.vuetifyjs.com/en/components/switches/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Switch <ipyvuetify.Switch>` component provides users the
ability to choose between two distinct values. These are very similar to a
toggle, or on/off switch, though aesthetically different than a checkbox.

.. api::

    - :py:class:`ipyvuetify.Switch`

Usage
-----

A :py:class:`Switch <ipyvuetify.Switch>` in its simplest form provides a
toggle between 2 values.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        class_="mx-auto my-2",
        fluid=True,
        children=[
            v.Switch(
                v_model=True,
                label="Switch 1"
            )
        ]
    )

Examples
--------

Colors
^^^^^^

Switches can be colored by using any of the builtin colors and contextual
names using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = [
                'red', 'red darken-3',
                'indigo', 'indigo darken-3',
                'orange', 'orange darken-3',
                'primary', 'secondary',
                'success', 'info',
                'warning', 'error',
            ]

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols=12,
                                sm=4,
                                md=4,
                                children=[
                                    v.Switch(
                                        v_model=True,
                                        label=color,
                                        color=color,
                                    ) for color in colors[n:n+2]
                                ]
                            ) for n in range(0, len(colors), 2)
                        ]
                    )
                ]
            )


    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = [
                'red', 'red darken-3',
                'indigo', 'indigo darken-3',
                'orange', 'orange darken-3',
                'primary', 'secondary',
                'success', 'info',
                'warning', 'error',
            ]

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols=12,
                                sm=4,
                                md=4,
                                children=[
                                    v.Switch(
                                        v_model=True,
                                        label=color,
                                        color=color,
                                    ) for color in colors[n:n+2]
                                ]
                            ) for n in range(0, len(colors), 2)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card flat>
                <v-card-text>
                <v-container fluid>
                    <v-row>
                    <v-col
                        cols="12"
                        sm="4"
                        md="4"
                    >
                        <v-switch
                        v-model="ex11"
                        label="red"
                        color="red"
                        value="red"
                        hide-details
                        ></v-switch>
                        <v-switch
                        v-model="ex11"
                        label="red darken-3"
                        color="red darken-3"
                        value="red darken-3"
                        hide-details
                        ></v-switch>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="4"
                        md="4"
                    >
                        <v-switch
                        v-model="ex11"
                        label="indigo"
                        color="indigo"
                        value="indigo"
                        hide-details
                        ></v-switch>
                        <v-switch
                        v-model="ex11"
                        label="indigo darken-3"
                        color="indigo darken-3"
                        value="indigo darken-3"
                        hide-details
                        ></v-switch>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="4"
                        md="4"
                    >
                        <v-switch
                        v-model="ex11"
                        label="orange"
                        color="orange"
                        value="orange"
                        hide-details
                        ></v-switch>
                        <v-switch
                        v-model="ex11"
                        label="orange darken-3"
                        color="orange darken-3"
                        value="orange darken-3"
                        hide-details
                        ></v-switch>
                    </v-col>
                    </v-row>

                    <v-row class="mt-12">
                    <v-col
                        cols="12"
                        sm="4"
                        md="4"
                    >
                        <v-switch
                        v-model="ex11"
                        label="primary"
                        color="primary"
                        value="primary"
                        hide-details
                        ></v-switch>
                        <v-switch
                        v-model="ex11"
                        label="secondary"
                        color="secondary"
                        value="secondary"
                        hide-details
                        ></v-switch>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="4"
                        md="4"
                    >
                        <v-switch
                        v-model="ex11"
                        label="success"
                        color="success"
                        value="success"
                        hide-details
                        ></v-switch>
                        <v-switch
                        v-model="ex11"
                        label="info"
                        color="info"
                        value="info"
                        hide-details
                        ></v-switch>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="4"
                        md="4"
                    >
                        <v-switch
                        v-model="ex11"
                        label="warning"
                        color="warning"
                        value="warning"
                        hide-details
                        ></v-switch>
                        <v-switch
                        v-model="ex11"
                        label="error"
                        color="error"
                        value="error"
                        hide-details
                        ></v-switch>
                    </v-col>
                    </v-row>
                </v-container>
                </v-card-text>
            </v-card>
            </template>

Flat
^^^^

You can make switch render without elevation of thumb using ``flat`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Switch(
                        flat=True,
                        v_model=True,
                        label="Flat Switch"
                    ),
                    v.Switch(
                        flat=True,
                        v_model=False,
                        label="Flat Switch"
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Switch(
                        flat=True,
                        v_model=True,
                        label="Flat Switch"
                    ),
                    v.Switch(
                        flat=True,
                        v_model=False,
                        label="Flat Switch"
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-sheet
                width="100%"
                height="100%"
                class="pa-12"
            >
                <v-switch
                v-model="switch1"
                flat
                :label="`Switch 1: ${switch1.toString()}`"
                ></v-switch>
                <v-switch
                v-model="switch2"
                flat
                :label="`Switch 2: ${switch2.toString()}`"
                ></v-switch>
            </v-sheet>
            </template>

Inset
^^^^^

You can make switch render in inset mode.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Switch(
                        inset=True,
                        v_model=True,
                        label="Inset Switch 1"
                    ),
                    v.Switch(
                        inset=True,
                        v_model=False,
                        label="Inset Switch 2"
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Switch(
                        inset=True,
                        v_model=True,
                        label="Inset Switch 1"
                    ),
                    v.Switch(
                        inset=True,
                        v_model=False,
                        label="Inset Switch 2"
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-sheet class="pa-5">
                <v-switch
                v-model="switch1"
                inset
                :label="`Switch 1: ${switch1.toString()}`"
                ></v-switch>
                <v-switch
                v-model="switch2"
                inset
                :label="`Switch 2: ${switch2.toString()}`"
                ></v-switch>
            </v-sheet>
            </template>

Model as array
^^^^^^^^^^^^^^

Multiple :py:class:`Switch <ipyvuetify.Switch>` can share the same
``v_model`` by using an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            select = v.Select(
                chips=True,
                items=['John', 'Jacob'],
                v_model=[],
                multiple=True,
                readonly=True
            )
            switch1 = v.Switch(v_model=[], label="John", value="John")
            switch2 = v.Switch(v_model=[], label="Jacob", value="Jacob")

            jslink((select, 'v_model'), (switch1, 'v_model'))
            jslink((select, 'v_model'), (switch2, 'v_model'))

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[select, switch1, switch2]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            select = v.Select(
                chips=True,
                items=['John', 'Jacob'],
                v_model=[],
                multiple=True,
                readonly=True
            )
            switch1 = v.Switch(v_model=[], label="John", value="John")
            switch2 = v.Switch(v_model=[], label="Jacob", value="Jacob")

            jslink((select, 'v_model'), (switch1, 'v_model'))
            jslink((select, 'v_model'), (switch2, 'v_model'))

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[select, switch1, switch2]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <p>{{ people }}</p>
                <v-switch
                v-model="people"
                color="primary"
                label="John"
                value="John"
                ></v-switch>
                <v-switch
                v-model="people"
                color="primary"
                label="Jacob"
                value="Jacob"
                ></v-switch>
            </v-container>
            </template>

Model as boolean
^^^^^^^^^^^^^^^^

A single :py:class:`Switch <ipyvuetify.Switch>` will have a boolean value as
its value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Switch(
                        v_model=True,
                        label="Switch 1"
                    ),
                    v.Switch(
                        v_model=False,
                        label="Switch 2"
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Switch(
                        v_model=True,
                        label="Switch 1"
                    ),
                    v.Switch(
                        v_model=False,
                        label="Switch 2"
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-switch
                v-model="switch1"
                :label="`Switch 1: ${switch1.toString()}`"
                ></v-switch>
                <v-switch
                v-model="switch2"
                :label="`Switch 2: ${switch2.toString()}`"
                ></v-switch>
            </v-container>
            </template>

States
^^^^^^

:py:class:`Switch <ipyvuetify.Switch>` can have different states such as
default, disabled, and loading.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="On",
                                        color="primary",
                                        v_model=True
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="Off",
                                        color="primary",
                                        v_model=False
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="On disabled",
                                        color="primary",
                                        v_model=True,
                                        disabled=True
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="Off disabled",
                                        color="primary",
                                        v_model=False,
                                        disabled=True
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="On loading",
                                        loading="warning",
                                        v_model=True
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="Off loading",
                                        loading="warning",
                                        v_model=False
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="On",
                                        color="primary",
                                        v_model=True
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="Off",
                                        color="primary",
                                        v_model=False
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="On disabled",
                                        color="primary",
                                        v_model=True,
                                        disabled=True
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="Off disabled",
                                        color="primary",
                                        v_model=False,
                                        disabled=True
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="On loading",
                                        loading="warning",
                                        v_model=True
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Switch(
                                        label="Off loading",
                                        loading="warning",
                                        v_model=False
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row class="dark--text">
                <v-col cols="6">
                    on
                </v-col>
                <v-col cols="6">
                    off
                </v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-switch
                    color="primary"
                    value
                    input-value="true"
                    ></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch color="primary"></v-switch>
                </v-col>
                </v-row>
                <v-row class="dark--text">
                <v-col cols="6">
                    on disabled
                </v-col>
                <v-col cols="6">
                    off disabled
                </v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-switch
                    color="primary"
                    value
                    input-value="true"
                    disabled
                    ></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch disabled></v-switch>
                </v-col>
                </v-row>
                <v-row class="dark--text">
                <v-col cols="6">
                    on loading
                </v-col>
                <v-col cols="6">
                    off loading
                </v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-switch
                    loading="warning"
                    value
                    input-value="true"
                    ></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch loading="warning"></v-switch>
                </v-col>
                </v-row>
            </v-container>
            </template>

Slots
-----

Label
^^^^^

Switch labels can be defined in ``label`` slot - that will allow to use HTML
content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            progress = v.ProgressCircular(
                indeterminate=False,
                size=24,
                class_='ml-2'
            )

            switch = v.Switch(
                v_model=False,
                v_slots=[{
                    'name': 'label',
                    'children': v.Html(
                        tag='span',
                        children=['Turn on the progress: ', progress]
                    )
                }]
            )

            jslink((switch, 'v_model'), (progress, 'indeterminate'))

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[switch]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            progress = v.ProgressCircular(
                indeterminate=False,
                size=24,
                class_='ml-2'
            )

            switch = v.Switch(
                v_model=False,
                v_slots=[{
                    'name': 'label',
                    'children': v.Html(
                        tag='span',
                        children=['Turn on the progress: ', progress]
                    )
                }]
            )

            jslink((switch, 'v_model'), (progress, 'indeterminate'))

            v.Container(
                class_="mx-auto my-2",
                fluid=True,
                children=[switch]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-switch v-model="switchMe">
                <template v-slot:label>
                    Turn on the progress: <v-progress-circular
                    :indeterminate="switchMe"
                    :value="0"
                    size="24"
                    class="ml-2"
                    ></v-progress-circular>
                </template>
                </v-switch>
            </v-container>
            </template>
