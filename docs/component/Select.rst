Select
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Selects
    documentation <https://v2.vuetifyjs.com/en/components/selects/>`__.
    All examples have been converted to ipyvuetify syntax.

Select fields components are used for collecting user provided information from
a list of options.

.. api::

    - :py:class:`ipyvuetify.Select`

Usage
-----

Select fields components are used for collecting user provided information from
a list of options.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    items = [f"Item {i}" for i in range(1, 6)]

    v.Container(
        fluid=True,
        children=[
            v.Row(
                children=[
                    v.Col(
                        class_='d-flex',
                        cols=12,
                        sm=6,
                        children=[
                            v.Select(
                                items=items,
                                label='Standard',
                            ),
                        ],
                    ),
                    v.Col(
                        class_='d-flex',
                        cols=12,
                        sm=6,
                        children=[
                            v.Select(
                                items=items,
                                filled=True,
                                label='Filled style',
                            ),
                        ],
                    ),
                    v.Col(
                        class_='d-flex',
                        cols=12,
                        sm=6,
                        children=[
                            v.Select(
                                items=items,
                                label='Outlined style',
                                outlined=True,
                            ),
                        ],
                    ),
                    v.Col(
                        class_='d-flex',
                        cols=12,
                        sm=6,
                        children=[
                            v.Select(
                                items=items,
                                label='Solo field',
                                solo=True,
                            ),
                        ],
                    ),
                ],
            )
        ]
    )

.. note::

    Browser autocomplete is set to off by default, may vary by browser and may be
    ignored. See `MDN documentation
    <https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion>`__
    for more information.

.. warning::

    The ``auto`` property of ``menu_props`` is only supported for the default input style.

.. danger::

    When using objects for the ``items`` prop, you must associate ``item-text`` and
    ``item-value`` with existing properties on your objects. These values are defaulted
    to ``text`` and ``value`` and can be changed.

Examples
--------

Custom text and value
^^^^^^^^^^^^^^^^^^^^^

You can specify the specific properties within your items array correspond to
the text and value fields. By default, this is text and value. In this example
we also use the return-object prop which will return the entire object of the
selected item on selection.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"text": 'Florida', 'value': 'FL'},
                {"text": 'Georgia', 'value': 'GA'},
                {"text": 'Nebraska', 'value': 'NE'},
                {"text": 'California', 'value': 'CA'},
                {"text": 'New York', 'value': 'NY'},
            ]

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        align='center',
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Custom items']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model="FL",
                                        hint='Select a state',
                                        items=items,
                                        label='Select',
                                        persistent_hint=True,
                                        return_object=True,
                                        single_line=True,
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"text": 'Florida', 'value': 'FL'},
                {"text": 'Georgia', 'value': 'GA'},
                {"text": 'Nebraska', 'value': 'NE'},
                {"text": 'California', 'value': 'CA'},
                {"text": 'New York', 'value': 'NY'},
            ]

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        align='center',
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Custom items']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model="FL",
                                        hint='Select a state',
                                        items=items,
                                        label='Select',
                                        persistent_hint=True,
                                        return_object=True,
                                        single_line=True,
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row align="center">
                <v-col cols="6">
                    <v-subheader>
                    Custom items
                    </v-subheader>
                </v-col>

                <v-col cols="6">
                    <v-select
                    v-model="select"
                    :hint="`${select.state}, ${select.abbr}`"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    ></v-select>
                </v-col>
                </v-row>
            </v-container>
            </template>

Dense
^^^^^

You can use ``dense`` prop to reduce the field height and lower max height of list
items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Foo', 'Bar', 'Fizz', 'Buzz']

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                class_='d-flex',
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        items=items,
                                        label='Standard',
                                        dense=True,
                                    ),
                                ],
                            ),
                            v.Col(
                                class_='d-flex',
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        items=items,
                                        filled=True,
                                        label='Filled style',
                                        dense=True,
                                    )
                                ],
                            ),
                        ],
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                class_='d-flex',
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        items=items,
                                        label='Outlined style',
                                        outlined=True,
                                        dense=True,
                                    ),
                                ],
                            ),
                            v.Col(
                                class_='d-flex',
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        items=items,
                                        label='Solo field',
                                        solo=True,
                                        dense=True,
                                    )
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Foo', 'Bar', 'Fizz', 'Buzz']

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                class_='d-flex',
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        items=items,
                                        label='Standard',
                                        dense=True,
                                    ),
                                ],
                            ),
                            v.Col(
                                class_='d-flex',
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        items=items,
                                        filled=True,
                                        label='Filled style',
                                        dense=True,
                                    )
                                ],
                            ),
                        ],
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                class_='d-flex',
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        items=items,
                                        label='Outlined style',
                                        outlined=True,
                                        dense=True,
                                    ),
                                ],
                            ),
                            v.Col(
                                class_='d-flex',
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        items=items,
                                        label='Solo field',
                                        solo=True,
                                        dense=True,
                                    )
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row align="center">
                <v-col
                    class="d-flex"
                    cols="12"
                    sm="6"
                >
                    <v-select
                    :items="items"
                    label="Standard"
                    dense
                    ></v-select>
                </v-col>

                <v-col
                    class="d-flex"
                    cols="12"
                    sm="6"
                >
                    <v-select
                    :items="items"
                    filled
                    label="Filled style"
                    dense
                    ></v-select>
                </v-col>

                <v-col
                    class="d-flex"
                    cols="12"
                    sm="6"
                >
                    <v-select
                    :items="items"
                    label="Outlined style"
                    dense
                    outlined
                    ></v-select>
                </v-col>

                <v-col
                    class="d-flex"
                    cols="12"
                    sm="6"
                >
                    <v-select
                    :items="items"
                    label="Solo field"
                    dense
                    solo
                    ></v-select>
                </v-col>
                </v-row>
            </v-container>
            </template>

Disabled
^^^^^^^^

Applying the disabled prop to a :py:class:`Select <ipyvuetify.Select>` will
prevent a user from interacting with the component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Foo', 'Bar', 'Fizz', 'Buzz']

            v.Row(
                align="center",
                children=[
                    v.Col(
                        cols=12,
                        children=[
                            v.Select(
                                items=items,
                                disabled=True,
                                label="Disabled",
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Foo', 'Bar', 'Fizz', 'Buzz']

            v.Row(
                align="center",
                children=[
                    v.Col(
                        cols=12,
                        children=[
                            v.Select(
                                :items="items",
                                disabled=True,
                                label="Disabled",
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row align="center">
                <v-col cols="12">
                <v-select
                    :items="items"
                    disabled
                    label="Disabled"
                ></v-select>
                </v-col>
            </v-row>
            </template>

Icons
^^^^^

Use a custom prepended or appended icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ["Foo", "Bar", "Fizz", "Buzz"]

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        align="center",
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Prepended icon']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model="Foo",
                                        items=items,
                                        menu_props="auto",
                                        label="Select",
                                        hide_details=True,
                                        prepend_icon="mdi-map",
                                        single_line=True,
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Appended icon']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model="Bar",
                                        items=items,
                                        append_outer_icon="mdi-map",
                                        menu_props="auto",
                                        hide_details=True,
                                        label="Select",
                                        single_line=True,
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ["Foo", "Bar", "Fizz", "Buzz"]

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        align="center",
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Prepended icon']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model="Foo",
                                        items=items,
                                        menu_props="auto",
                                        label="Select",
                                        hide_details=True,
                                        prepend_icon="mdi-map",
                                        single_line=True,
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Appended icon']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model="Bar",
                                        items=items,
                                        append_outer_icon="mdi-map",
                                        menu_props="auto",
                                        hide_details=True,
                                        label="Select",
                                        single_line=True,
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row align="center">
                <v-col cols="6">
                    <v-subheader>
                    Prepended icon
                    </v-subheader>
                </v-col>
                <v-col cols="6">
                    <v-select
                    v-model="e1"
                    :items="states"
                    menu-props="auto"
                    label="Select"
                    hide-details
                    prepend-icon="mdi-map"
                    single-line
                    ></v-select>
                </v-col>
                <v-col cols="6">
                    <v-subheader>
                    Appended icon
                    </v-subheader>
                </v-col>
                <v-col cols="6">
                    <v-select
                    v-model="e2"
                    :items="states"
                    append-outer-icon="mdi-map"
                    menu-props="auto"
                    hide-details
                    label="Select"
                    single-line
                    ></v-select>
                </v-col>
                </v-row>
            </v-container>
            </template>

Chips
^^^^^

A standard single select has a multitude of configuration options.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ["Foo", "Bar", "Fizz", "Buzz"]

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        align="center",
                        children=[
                            v.Col(
                                class_="d-flex",
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        v_model=items,
                                        items=items,
                                        attach=True,
                                        chips=True,
                                        label="Chips",
                                        multiple=True,
                                    ),
                                ],
                            ),
                            v.Col(
                                class_="d-flex",
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        v_model=items,
                                        items=items,
                                        filled=True,
                                        chips=True,
                                        label="Chips",
                                        multiple=True,
                                    ),
                                ],
                            ),
                            v.Col(
                                class_="d-flex",
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        v_model=items,
                                        items=items,
                                        chips=True,
                                        label="Chips",
                                        multiple=True,
                                        outlined=True,
                                    ),
                                ],
                            ),
                            v.Col(
                                class_="d-flex",
                                cols=12,
                                sm=6,
                                children=[
                                    v.Select(
                                        v_model=items,
                                        items=items,
                                        chips=True,
                                        label="Chips",
                                        multiple=True,
                                        solo=True,
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card>
                <v-container fluid>
                <v-row
                    align="center"
                >
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-select
                        v-model="value"
                        :items="items"
                        attach
                        chips
                        label="Chips"
                        multiple
                    ></v-select>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-select
                        v-model="value"
                        :items="items"
                        filled
                        chips
                        label="Chips"
                        multiple
                    ></v-select>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-select
                        v-model="value"
                        :items="items"
                        chips
                        label="Chips"
                        multiple
                        outlined
                    ></v-select>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                    <v-select
                        v-model="value"
                        :items="items"
                        chips
                        label="Chips"
                        multiple
                        solo
                    ></v-select>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
            </template>

Multiple
^^^^^^^^

A multi-select can utilize :py:class:`Chip <ipyvuetify.Chip>` as the display
for selected items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            states = [
                'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                'Arkansas', 'California', 'Colorado', 'Connecticut',
                'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
                'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada',
                'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
                'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
                'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
            ]

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        align="center",
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Multiple select']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model=['California', 'New York'],
                                        items=states,
                                        label="Select",
                                        multiple=True,
                                        menu_props={"maxHeight": "400"},
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Multiple with chips']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model=['Texas', 'Florida'],
                                        items=states,
                                        chips=True,
                                        label="Select",
                                        multiple=True,
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            states = [
                'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                'Arkansas', 'California', 'Colorado', 'Connecticut',
                'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
                'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada',
                'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
                'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
                'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
            ]

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        align="center",
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Multiple select']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model=['California', 'New York'],
                                        items=states,
                                        label="Select",
                                        multiple=True,
                                        menu_props={"maxHeight": "400"},
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Subheader(
                                        children=['Multiple with chips']
                                    ),
                                ],
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Select(
                                        v_model=['Texas', 'Florida'],
                                        items=states,
                                        chips=True,
                                        label="Select",
                                        multiple=True,
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row align="center">
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-subheader v-text="'Multiple with persistent hint'"></v-subheader>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-select
                    v-model="e6"
                    :items="states"
                    :menu-props="{ maxHeight: '400' }"
                    label="Select"
                    multiple
                    hint="Pick your favorite states"
                    persistent-hint
                    ></v-select>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-subheader v-text="'Multiple (Chips) with persistent hint'"></v-subheader>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-select
                    v-model="e7"
                    :items="states"
                    label="Select"
                    multiple
                    chips
                    hint="What are the target regions"
                    persistent-hint
                    ></v-select>
                </v-col>
                </v-row>
            </v-container>
            </template>

Readonly
^^^^^^^^

You can use the read-only prop on :py:class:`Select <ipyvuetify.Select>` which
will prevent a user from changing its value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Foo', 'Bar', 'Fizz', 'Buzz']

            v.Row(
                align="center",
                children=[
                    v.Col(
                        cols=12,
                        children=[
                            v.Select(
                                items=items,
                                readonly=True,
                                label="Read-only",
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Foo', 'Bar', 'Fizz', 'Buzz']

            v.Row(
                align="center",
                children=[
                    v.Col(
                        cols=12,
                        children=[
                            v.Select(
                                items=items,
                                readonly=True,
                                label="Read-only",
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row align="center">
                <v-col cols="12">
                <v-select
                    :items="items"
                    readonly
                    label="Read-only"
                ></v-select>
                </v-col>
            </v-row>
            </template>

Append and prepend item
^^^^^^^^^^^^^^^^^^^^^^^

The :py:class:`Select <ipyvuetify.Select>` components can be optionally
expanded with prepended and appended items. This is perfect for customized
select-all functionality.

.. todo::

    This example requires custom logic to handle the select-all functionality.

Selection
^^^^^^^^^

The selection slot can be used to customize the way selected values are shown
in the input. This is great when you want something like ``foo (+20 others)``
or don't want the selection to occupy multiple lines.

.. todo::

    This example requires custom logic to handle the selection display.
