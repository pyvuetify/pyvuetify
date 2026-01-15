Autocomplete
============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/autocompletes/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Autocomplete <ipyvuetify.Autocomplete>` component offers simple and flexible type-ahead
functionality. This is useful when searching large sets of data or even dynamically requesting information
from an API. The autocomplete component extends :py:class:`Select <ipyvuetify.Select>` and adds the
ability to filter items.

.. api::

    :py:class:`ipyvuetify.Autocomplete`

Usage
-----

The autocomplete component extends :py:class:`Select <ipyvuetify.Select>` and adds the ability to filter items.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    autocomplete = v.Autocomplete(
        items=['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California'],
        label='States',
        dense=False,
        filled=False,
        clearable=True,
    )

    v.Container(children=[autocomplete])

Dense
-----

You can use ``dense`` prop to reduce autocomplete height and lower max height of list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(children=[
                v.Container(fluid=True, children=[
                    v.Row(align='center', children=[
                        v.Col(cols=12, children=[
                            v.Autocomplete(
                                v_model=['foo', 'bar'],
                                items=['foo', 'bar', 'fizz', 'buzz'],
                                outlined=True,
                                dense=True,
                                chips=True,
                                small_chips=True,
                                label='Outlined',
                                multiple=True,
                            )
                        ]),
                        v.Col(cols=12, children=[
                            v.Autocomplete(
                                v_model=['foo', 'bar'],
                                items=['foo', 'bar', 'fizz', 'buzz'],
                                dense=True,
                                chips=True,
                                small_chips=True,
                                label='Solo',
                                multiple=True,
                                solo=True,
                            )
                        ]),
                        v.Col(cols=12, children=[
                            v.Autocomplete(
                                items=['foo', 'bar', 'fizz', 'buzz'],
                                dense=True,
                                filled=True,
                                label='Filled',
                            )
                        ]),
                    ])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(children=[
                v.Container(fluid=True, children=[
                    v.Row(align='center', children=[
                        v.Col(cols=12, children=[
                            v.Autocomplete(
                                v_model=['foo', 'bar'],
                                items=['foo', 'bar', 'fizz', 'buzz'],
                                outlined=True,
                                dense=True,
                                chips=True,
                                small_chips=True,
                                label='Outlined',
                                multiple=True,
                            )
                        ]),
                        v.Col(cols=12, children=[
                            v.Autocomplete(
                                v_model=['foo', 'bar'],
                                items=['foo', 'bar', 'fizz', 'buzz'],
                                dense=True,
                                chips=True,
                                small_chips=True,
                                label='Solo',
                                multiple=True,
                                solo=True,
                            )
                        ]),
                        v.Col(cols=12, children=[
                            v.Autocomplete(
                                items=['foo', 'bar', 'fizz', 'buzz'],
                                dense=True,
                                filled=True,
                                label='Filled',
                            )
                        ]),
                    ])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card>
                    <v-container fluid>
                        <v-row align="center">
                            <v-col cols="12">
                                <v-autocomplete
                                    v-model="values"
                                    :items="items"
                                    outlined
                                    dense
                                    chips
                                    small-chips
                                    label="Outlined"
                                    multiple
                                ></v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete
                                    v-model="values"
                                    :items="items"
                                    dense
                                    chips
                                    small-chips
                                    label="Solo"
                                    multiple
                                    solo
                                ></v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete
                                    v-model="value"
                                    :items="items"
                                    dense
                                    filled
                                    label="Filled"
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </template>

No-Filter
---------

The ``no-filter`` prop can be used to prevent filtering of the items. Useful when
you want to display all options regardless of the search input.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            states = [
                {'name': 'Florida', 'abbr': 'FL', 'id': 1},
                {'name': 'Georgia', 'abbr': 'GA', 'id': 2},
                {'name': 'Nebraska', 'abbr': 'NE', 'id': 3},
                {'name': 'California', 'abbr': 'CA', 'id': 4},
                {'name': 'New York', 'abbr': 'NY', 'id': 5},
            ]

            v.Card(
                class_='overflow-hidden',
                color='purple lighten-1',
                dark=True,
                children=[
                    v.Toolbar(
                        flat=True,
                        color='purple',
                        children=[
                            v.Icon(children=['mdi-account']),
                            v.ToolbarTitle(
                                class_='font-weight-light',
                                children=['User Profile']
                            ),
                            v.Spacer(),
                        ]
                    ),
                    v.CardText(children=[
                        v.TextField(
                            color='white',
                            label='Name',
                        ),
                        v.Autocomplete(
                            items=states,
                            item_text='name',
                            color='white',
                            label='State',
                            no_filter=True,
                        ),
                    ]),
                    v.Divider(),
                    v.CardActions(children=[
                        v.Spacer(),
                        v.Btn(
                            color='success',
                            children=['Save']
                        ),
                    ]),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            states = [
                {'name': 'Florida', 'abbr': 'FL', 'id': 1},
                {'name': 'Georgia', 'abbr': 'GA', 'id': 2},
                {'name': 'Nebraska', 'abbr': 'NE', 'id': 3},
                {'name': 'California', 'abbr': 'CA', 'id': 4},
                {'name': 'New York', 'abbr': 'NY', 'id': 5},
            ]

            v.Card(
                class_='overflow-hidden',
                color='purple lighten-1',
                dark=True,
                children=[
                    v.Toolbar(
                        flat=True,
                        color='purple',
                        children=[
                            v.Icon(children=['mdi-account']),
                            v.ToolbarTitle(
                                class_='font-weight-light',
                                children=['User Profile']
                            ),
                            v.Spacer(),
                        ]
                    ),
                    v.CardText(children=[
                        v.TextField(
                            disabled=False,
                            color='white',
                            label='Name',
                        ),
                        v.Autocomplete(
                            disabled=False,
                            items=states,
                            item_text='name',
                            color='white',
                            label='State',
                            no_filter=True,
                        ),
                    ]),
                    v.Divider(),
                    v.CardActions(children=[
                        v.Spacer(),
                        v.Btn(
                            disabled=False,
                            color='success',
                            children=['Save']
                        ),
                    ]),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="overflow-hidden"
                    color="purple lighten-1"
                    dark
                >
                    <v-toolbar
                        flat
                        color="purple"
                    >
                        <v-icon>mdi-account</v-icon>
                        <v-toolbar-title class="font-weight-light">
                            User Profile
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field
                            color="white"
                            label="Name"
                        ></v-text-field>
                        <v-autocomplete
                            :items="states"
                            no-filter
                            color="white"
                            item-text="name"
                            label="State"
                        ></v-autocomplete>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="success"
                            @click="save"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>

Slots
-----

With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            people = [
                {'name': 'Sandra Adams', 'avatar': 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
                {'name': 'Britta Holt', 'avatar': 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
            ]

            v.Card(
                color='blue-grey darken-1',
                dark=True,
                children=[
                    v.Img(
                        height=200,
                        src='https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
                        children=[
                            v.Row(children=[
                                v.Col(
                                    class_='text-right',
                                    cols=12,
                                    children=[
                                        v.Menu(
                                            bottom=True,
                                            left=True,
                                            transition='slide-y-transition',
                                            v_slots=[{
                                                'name': 'activator',
                                                'variable': 'menuProps',
                                                'children': v.Btn(
                                                    icon=True,
                                                    v_on='menuProps.on',
                                                    children=[v.Icon(children=['mdi-dots-vertical'])]
                                                )
                                            }],
                                            children=[
                                                v.List(children=[
                                                    v.ListItem(children=[
                                                        v.ListItemAction(children=[v.Icon(children=['mdi-cogs'])]),
                                                        v.ListItemContent(children=[
                                                            v.ListItemTitle(children=['Update'])
                                                        ]),
                                                    ]),
                                                ])
                                            ]
                                        )
                                    ]
                                ),
                                v.Row(
                                    class_='ma-auto',
                                    align='center',
                                    justify='center',
                                    children=[
                                        v.Col(class_='text-center', children=[
                                            v.Html(tag='h3', class_='mb-1 text-white', children=['Midnight Crew']),
                                            v.Html(tag='span', class_='mt-1 grey--text text--lighten-1', children=['The summer breeze']),
                                        ])
                                    ]
                                ),
                            ])
                        ]
                    ),
                    v.Form(children=[
                        v.Container(children=[
                            v.Row(children=[
                                v.Col(cols=12, md=6, children=[
                                    v.TextField(
                                        v_model='Midnight Crew',
                                        filled=True,
                                        color='blue-grey lighten-2',
                                        label='Name',
                                    )
                                ]),
                                v.Col(cols=12, md=6, children=[
                                    v.TextField(
                                        v_model='The summer breeze',
                                        filled=True,
                                        color='blue-grey lighten-2',
                                        label='Title',
                                    )
                                ]),
                                v.Col(cols=12, children=[
                                    v.Autocomplete(
                                        v_model=['Sandra Adams', 'Britta Holt'],
                                        items=people,
                                        filled=True,
                                        chips=True,
                                        color='blue-grey lighten-2',
                                        label='Select',
                                        item_text='name',
                                        item_value='name',
                                        multiple=True,
                                    )
                                ]),
                            ])
                        ])
                    ]),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            people = [
                {'name': 'Sandra Adams', 'avatar': 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
                {'name': 'Britta Holt', 'avatar': 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
            ]

            v.Card(
                color='blue-grey darken-1',
                dark=True,
                children=[
                    v.Img(
                        height=200,
                        src='https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg',
                        children=[
                            v.Row(children=[
                                v.Col(
                                    class_='text-right',
                                    cols=12,
                                    children=[
                                        v.Menu(
                                            bottom=True,
                                            left=True,
                                            transition='slide-y-transition',
                                            v_slots=[{
                                                'name': 'activator',
                                                'variable': 'menuProps',
                                                'children': v.Btn(
                                                    icon=True,
                                                    v_on='menuProps.on',
                                                    children=[v.Icon(children=['mdi-dots-vertical'])]
                                                )
                                            }],
                                            children=[
                                                v.List(children=[
                                                    v.ListItem(children=[
                                                        v.ListItemAction(children=[v.Icon(children=['mdi-cogs'])]),
                                                        v.ListItemContent(children=[
                                                            v.ListItemTitle(children=['Update'])
                                                        ]),
                                                    ]),
                                                ])
                                            ]
                                        )
                                    ]
                                ),
                                v.Row(
                                    class_='ma-auto',
                                    align='center',
                                    justify='center',
                                    children=[
                                        v.Col(class_='text-center', children=[
                                            v.Html(tag='h3', class_='mb-1 text-white', children=['Midnight Crew']),
                                            v.Html(tag='span', class_='mt-1 grey--text text--lighten-1', children=['The summer breeze']),
                                        ])
                                    ]
                                ),
                            ])
                        ]
                    ),
                    v.Form(children=[
                        v.Container(children=[
                            v.Row(children=[
                                v.Col(cols=12, md=6, children=[
                                    v.TextField(
                                        v_model='Midnight Crew',
                                        filled=True,
                                        color='blue-grey lighten-2',
                                        label='Name',
                                    )
                                ]),
                                v.Col(cols=12, md=6, children=[
                                    v.TextField(
                                        v_model='The summer breeze',
                                        filled=True,
                                        color='blue-grey lighten-2',
                                        label='Title',
                                    )
                                ]),
                                v.Col(cols=12, children=[
                                    v.Autocomplete(
                                        v_model=['Sandra Adams', 'Britta Holt'],
                                        items=people,
                                        filled=True,
                                        chips=True,
                                        color='blue-grey lighten-2',
                                        label='Select',
                                        item_text='name',
                                        item_value='name',
                                        multiple=True,
                                    )
                                ]),
                            ])
                        ])
                    ]),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card
                    color="blue-grey darken-1"
                    dark
                >
                    <v-img
                        height="200"
                        src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
                    >
                        <!-- Menu and profile content -->
                    </v-img>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="name"
                                        filled
                                        color="blue-grey lighten-2"
                                        label="Name"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="title"
                                        filled
                                        color="blue-grey lighten-2"
                                        label="Title"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-autocomplete
                                        v-model="friends"
                                        :items="people"
                                        filled
                                        chips
                                        color="blue-grey lighten-2"
                                        label="Select"
                                        item-text="name"
                                        item-value="name"
                                        multiple
                                    >
                                        <template v-slot:selection="data">
                                            <v-chip
                                                v-bind="data.attrs"
                                                :input-value="data.selected"
                                                close
                                                @click="data.select"
                                                @click:close="remove(data.item)"
                                            >
                                                <v-avatar left>
                                                    <v-img :src="data.item.avatar"></v-img>
                                                </v-avatar>
                                                {{ data.item.name }}
                                            </v-chip>
                                        </template>
                                        <template v-slot:item="data">
                                            <v-list-item-avatar>
                                                <v-img :src="data.item.avatar"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                    </v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card>
            </template>

Asynchronous items
------------------

Sometimes you need to load data externally based upon a search query. Use the ``search_input`` prop
with the ``.sync`` modifier when using the ``autocomplete`` prop. We also make use of the new
``cache_items`` prop. This will keep a unique list of all items that have been passed to the ``items``
prop and is REQUIRED when using asynchronous items and the multiple prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            states = [
                'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                'Arkansas', 'California', 'Colorado', 'Connecticut',
                'Delaware', 'District of Columbia', 'Florida', 'Georgia',
            ]

            v.Toolbar(
                dark=True,
                color='teal',
                children=[
                    v.ToolbarTitle(children=['State selection']),
                    v.Autocomplete(
                        items=states,
                        cache_items=True,
                        class_='mx-4',
                        flat=True,
                        hide_no_data=True,
                        hide_details=True,
                        label='What state are you from?',
                        solo_inverted=True,
                    ),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            states = [
                'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                'Arkansas', 'California', 'Colorado', 'Connecticut',
                'Delaware', 'District of Columbia', 'Florida', 'Georgia',
            ]

            v.Toolbar(
                dark=True,
                color='teal',
                children=[
                    v.ToolbarTitle(children=['State selection']),
                    v.Autocomplete(
                        items=states,
                        cache_items=True,
                        class_='mx-4',
                        flat=True,
                        hide_no_data=True,
                        hide_details=True,
                        label='What state are you from?',
                        solo_inverted=True,
                    ),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-toolbar
                    dark
                    color="teal"
                >
                    <v-toolbar-title>State selection</v-toolbar-title>
                    <v-autocomplete
                        v-model="select"
                        :loading="loading"
                        :items="items"
                        :search-input.sync="search"
                        cache-items
                        class="mx-4"
                        flat
                        hide-no-data
                        hide-details
                        label="What state are you from?"
                        solo-inverted
                    ></v-autocomplete>
                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-toolbar>
            </template>

State selector
--------------

Using a combination of :py:class:`Autocomplete <ipyvuetify.Autocomplete>` slots and transitions, you
can create a stylish toggleable autocomplete field such as this state selector.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California']

            v.Card(children=[
                v.CardTitle(
                    class_='text-h5 font-weight-regular blue-grey white--text',
                    children=['Profile']
                ),
                v.CardText(children=[
                    v.Subheader(class_='pa-0', children=['Where do you live?']),
                    v.Autocomplete(
                        items=states,
                        readonly=True,
                        label='State — Readonly',
                        persistent_hint=True,
                        hint='Click the icon to edit',
                        prepend_icon='mdi-city',
                    ),
                ]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California']

            v.Card(children=[
                v.CardTitle(
                    class_='text-h5 font-weight-regular blue-grey white--text',
                    children=['Profile']
                ),
                v.CardText(children=[
                    v.Subheader(class_='pa-0', children=['Where do you live?']),
                    v.Autocomplete(
                        items=states,
                        readonly=True,
                        label='State — Readonly',
                        persistent_hint=True,
                        hint='Click the icon to edit',
                        prepend_icon='mdi-city',
                    ),
                ]),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card>
                    <v-card-title class="text-h5 font-weight-regular blue-grey white--text">
                        Profile
                    </v-card-title>
                    <v-card-text>
                        <v-subheader class="pa-0">
                            Where do you live?
                        </v-subheader>
                        <v-autocomplete
                            v-model="model"
                            :hint="`Click the icon to ${isEditing ? 'save' : 'edit'}`"
                            :items="states"
                            :readonly="!isEditing"
                            :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
                            persistent-hint
                            prepend-icon="mdi-city"
                        >
                            <template v-slot:append-outer>
                                <v-slide-x-reverse-transition mode="out-in">
                                    <v-icon
                                        :key="`icon-${isEditing}`"
                                        :color="isEditing ? 'success' : 'info'"
                                        @click="isEditing = !isEditing"
                                        v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                                    ></v-icon>
                                </v-slide-x-reverse-transition>
                            </template>
                        </v-autocomplete>
                    </v-card-text>
                </v-card>
            </template>
