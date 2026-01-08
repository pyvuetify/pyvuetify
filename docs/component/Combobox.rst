Combobox
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation
    <https://v2.vuetifyjs.com/en/components/combobox/>`_. All examples have been
    converted to ipyvuetify syntax.

The :py:class:`Combobox <ipyvuetify.Combobox>` component is a :py:class:`Autocomplete
<ipyvuetify.Autocomplete>` that allows the user to enter values that do not exist
within the provided items. Created items will be returned as strings.

Usage
-----

With :py:class:`Combobox <ipyvuetify.Combobox>`, you can allow a user to create
new values that may not be present in a provided items list.

.. jupyter-execute::
    :hide-code:

    import ipyvuetify as v

    v.Container(
        class_="mx-auto my-2", children=[
            v.Combobox(
                multiple=True,
                label='Select or create an item',
                items=['Apple', 'Banana', 'Orange'],
                clearable=True,
                chips=True,
            )
        ]
    )


.. api::

    :py:class:`ipyvuetify.Combobox`

Caveats
-------

.. danger::

    As the Combobox allows user input, it always returns the full value provided
    to it (for example a list of Objects will always return an Object when selected).
    This is because there’s no way to tell if a value is supposed to be user input
    or an object lookup `GitHub Issue <https://github.com/vuetifyjs/vuetify/issues/5479>`__.

.. warning::

    The ``auto`` property of ``menu-props`` is only supported for the default input style.

.. note::

    Browser autocomplete is set to off by default, may vary by browser and may be ignored.
    `MDN <https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion>`__

Dense
-----

You can use ``dense`` prop to reduce combobox height and lower max height of list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Combobox(
                        v_model=[],
                        items=['Item 1', 'Item 2', 'Item 3'],
                        label='Combobox',
                        multiple=True,
                        outlined=True,
                        dense=True,
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Combobox(
                        v_model=[],
                        items=['Item 1', 'Item 2', 'Item 3'],
                        label='Combobox',
                        multiple=True,
                        outlined=True,
                        dense=True,
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="Combobox"
                    multiple
                    outlined
                    dense
                    ></v-combobox>
                </v-col>
                </v-row>
            </v-container>
            </template>

Multiple combobox
-----------------

Previously known as **tags** - user is allowed to enter more than 1 value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            options = [
                'Hiking', 'Swimming', 'Reading',
                'Cooking', 'Traveling', 'Gaming'
            ]

            combobox1 = v.Combobox(
                v_model=[],
                items=options,
                label='Select a favorite activity or create a new one',
                multiple=True,
            )

            combobox2 = v.Combobox(
                v_model=[],
                items=options,
                label='I use chips',
                multiple=True,
                chips=True,
            )

            #combobox3 = v.Combobox(
            #    v_model=[],
            #    items=options,
            #    label='I use a scoped slot',
            #    multiple=True,
            #    chips=True,
            #    v_slots=[{
            #        'name': 'selection',
            #        'variable': 'data',
            #        'children': v.Chip(
            #            key='JSON.stringify(data.item)',
            #            v_bind='data.attrs',
            #            input_value='data.selected',
            #            disabled='data.disabled',
            #            children=[
            #                v.Avatar(
            #                    class_='accent white--text',
            #                    left=True,
            #                    children=['{{ data.item.slice(0, 1).toUpperCase() }}'],
            #                ),
            #                '{{ data.item }}',
            #            ],
            #        ),
            #    }],
            #)

            combobox4 = v.Combobox(
                v_model=[],
                label="I'm readonly",
                multiple=True,
                chips=True,
                readonly=True,
            )

            jslink((combobox1, 'v_model'), (combobox2, 'v_model'))
            #jslink((combobox1, 'v_model'), (combobox3, 'v_model'))
            jslink((combobox1, 'v_model'), (combobox4, 'v_model'))

            combobox1.v_model = ['Reading', 'Gaming']

            v.Container(
                children=[
                    combobox1,
                    combobox2,
                    #combobox3,
                    combobox4,
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            options = [
                'Hiking', 'Swimming', 'Reading',
                'Cooking', 'Traveling', 'Gaming'
            ]

            combobox1 = v.Combobox(
                v_model=[],
                items=options,
                label='Select a favorite activity or create a new one',
                multiple=True,
            )

            combobox2 = v.Combobox(
                v_model=[],
                items=options,
                label='I use chips',
                multiple=True,
                chips=True,
            )

            #combobox3 = v.Combobox(
            #    v_model=[],
            #    items=options,
            #    label='I use a scoped slot',
            #    multiple=True,
            #    chips=True,
            #    v_slots=[{
            #        'name': 'selection',
            #        'variable': 'data',
            #        'children': v.Chip(
            #            key='JSON.stringify(data.item)',
            #            v_bind='data.attrs',
            #            input_value='data.selected',
            #            disabled='data.disabled',
            #            children=[
            #                v.Avatar(
            #                    class_='accent white--text',
            #                    left=True,
            #                    children=['{{ data.item.slice(0, 1).toUpperCase() }}'],
            #                ),
            #                '{{ data.item }}',
            #            ],
            #        ),
            #    }],
            #)

            combobox4 = v.Combobox(
                v_model=[],
                label="I'm readonly",
                multiple=True,
                chips=True,
                readonly=True,
            )

            jslink((combobox1, 'v_model'), (combobox2, 'v_model'))
            #jslink((combobox1, 'v_model'), (combobox3, 'v_model'))
            jslink((combobox1, 'v_model'), (combobox4, 'v_model'))

            combobox1.v_model = ['Reading', 'Gaming']

            v.Container(
                children=[
                    combobox1,
                    combobox2,
                    #combobox3,
                    combobox4,
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="Select a favorite activity or create a new one"
                    multiple
                    ></v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="I use chips"
                    multiple
                    chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="I use a scoped slot"
                    multiple
                    chips
                    >
                    <template v-slot:selection="data">
                        <v-chip
                        :key="JSON.stringify(data.item)"
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        :disabled="data.disabled"
                        @click:close="data.parent.selectItem(data.item)"
                        >
                        <v-avatar
                            class="accent white--text"
                            left
                            v-text="data.item.slice(0, 1).toUpperCase()"
                        ></v-avatar>
                        {{ data.item }}
                        </v-chip>
                    </template>
                    </v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    label="I'm readonly"
                    chips
                    multiple
                    readonly
                    ></v-combobox>
                </v-col>
                </v-row>
            </v-container>
            </template>

No data with chips
------------------

In this example we utilize a custom ``no-data`` slot to provide context to the user
when searching / creating items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            options = [
                'Hiking', 'Swimming', 'Reading',
                'Cooking', 'Traveling', 'Gaming'
            ]

            v.Container(
                fluid=True,
                children=[
                    v.Combobox(
                        v_model=[],
                        items=options,
                        label='Add some tags',
                        multiple=True,
                        small_chips=True,
                        hide_selected=True,
                        hint='Maximum of 5 tags',
                        persistent_hint=True,
                        v_slots=[{
                            'name': 'no-data',
                            'children': v.ListItem(
                                children=[
                                    v.ListItemContent(
                                        children=[
                                            v.ListItemTitle(
                                                children=[
                                                    'No results matching ',
                                                    v.Html(tag='strong', children=['{{ search }}']),
                                                    '. Press ',
                                                    v.Html(tag='kbd', children=['enter']),
                                                    ' to create a new one',
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            )
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            # TODO: Add example code here

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-combobox
                v-model="model"
                :items="items"
                :search-input.sync="search"
                hide-selected
                hint="Maximum of 5 tags"
                label="Add some tags"
                multiple
                persistent-hint
                small-chips
                >
                <template v-slot:no-data>
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                        No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </template>
                </v-combobox>
            </v-container>
            </template>

Advanced custom options
-----------------------

The :py:class:`Combobox <ipyvuetify.Combobox>` improves upon the added functionality
from :py:class:`Select <ipyvuetify.Select>` and :py:class:`Autocomplete
<ipyvuetify.Autocomplete>`. This provides you with an expansive interface to
create truly customized implementations. This example takes advantage of some more
advanced features such as a custom filter algorithm, inline list editing and
dynamic input items.

.. todo::

    This example is pending completion as it's a very complex slot-based example.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            # TODO: Add example code here

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            # TODO: Add example code here

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>
