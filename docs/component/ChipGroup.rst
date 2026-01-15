ChipGroup
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/chip-groups/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ChipGroup <ipyvuetify.ChipGroup>` supercharges the :py:class:`Chip <ipyvuetify.Chip>`
component by providing groupable functionality. It is used for creating groups of
selections using chips.

Usage
-----

Chip groups make it easy for users to select filtering options for more complex
implementations. By default, :py:class:`ChipGroup <ipyvuetify.ChipGroup>` will
overflow to the right but can be changed to a **column** only mode.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    chip_group = v.ChipGroup(
        active_class='primary--text',
        children=[
            v.Chip(children=['Work']),
            v.Chip(children=['Home Improvement']),
            v.Chip(children=['Vacation']),
            v.Chip(children=['Food']),
            v.Chip(children=['Drawers']),
            v.Chip(children=['Shopping']),
            v.Chip(children=['Art']),
            v.Chip(children=['Tech']),
            v.Chip(children=['Creative Writing']),
        ]
    )

    output = v.Alert(
        class_='mt-4',
        type='info',
        children=['Select a chip']
    )

    def on_change(widget, event, data):
        if data is not None:
            output.children = [f'Selected: {tags[data]}']
        else:
            output.children = ['No selection']

    chip_group.on_event('change', on_change)

    v.Container(
        children=[
            chip_group,
            output
        ]
    )

.. api::

    - :py:class:`ipyvuetify.ChipGroup`
    - :py:class:`ipyvuetify.Chip`

Column
------

Chip groups with the ``column`` prop can wrap their chips in a vertical layout.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            tags = [
                'Work',
                'Home Improvement',
                'Vacation',
                'Food',
                'Drawers',
                'Shopping',
                'Art',
                'Tech',
                'Creative Writing',
            ]

            chip_group = v.ChipGroup(
                column=True,
                active_class='text-primary',
                children=[v.Chip(children=[tag]) for tag in tags]
            )

            v.Sheet(
                class_='mx-auto my-2',
                elevation=10,
                max_width='500',
                rounded='xl',
                children=[
                    v.Sheet(
                        class_='pa-3 bg-primary text-right text-white',
                        rounded='t-xl',
                        children=[
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-content-save'])]),
                            v.Btn(class_='ms-2', icon=True, children=[v.Icon(children=['mdi-check-bold'])]),
                        ]
                    ),
                    v.Html(tag='div', class_='pa-4', children=[chip_group])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            tags = [
                'Work',
                'Home Improvement',
                'Vacation',
                'Food',
                'Drawers',
                'Shopping',
                'Art',
                'Tech',
                'Creative Writing',
            ]

            chip_group = v.ChipGroup(
                column=True,
                active_class='text-primary',
                children=[v.Chip(children=[tag]) for tag in tags]
            )

            v.Sheet(
                class_='mx-auto my-2',
                elevation=10,
                max_width='500',
                rounded='xl',
                children=[
                    v.Sheet(
                        class_='pa-3 bg-primary text-right text-white',
                        rounded='t-xl',
                        children=[
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-content-save'])]),
                            v.Btn(class_='ms-2', icon=True, children=[v.Icon(children=['mdi-check-bold'])]),
                        ]
                    ),
                    v.Html(tag='div', class_='pa-4', children=[chip_group])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-col
                cols="12"
                sm="7"
                md="6"
                lg="5"
                >
                <v-sheet
                    elevation="10"
                    rounded="xl"
                >
                    <v-sheet
                    class="pa-3 primary text-right"
                    dark
                    rounded="t-xl"
                    >
                    <v-btn icon>
                        <v-icon>mdi-content-save-cog-outline</v-icon>
                    </v-btn>

                    <v-btn
                        class="ml-2"
                        icon
                    >
                        <v-icon>mdi-check-bold</v-icon>
                    </v-btn>
                    </v-sheet>

                    <div class="pa-4">
                    <v-chip-group
                        active-class="primary--text"
                        column
                    >
                        <v-chip
                        v-for="tag in tags"
                        :key="tag"
                        >
                        {{ tag }}
                        </v-chip>
                    </v-chip-group>
                    </div>
                </v-sheet>
                </v-col>
            </v-row>
            </template>

Filter results
--------------

Easily create chip groups that provide additional feedback with the ``filter`` prop.
This creates an alternative visual style that communicates to the user that the
chip is selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            amenities = v.ChipGroup(
                v_model=[],
                column=True,
                multiple=True,
                children=[
                    v.Chip(children=['Elevator'], outlined=True, filter=True),
                    v.Chip(children=['Washer / Dryer'], outlined=True, filter=True),
                    v.Chip(children=['Fireplace'], outlined=True, filter=True),
                    v.Chip(children=['Wheelchair access'], outlined=True, filter=True),
                    v.Chip(children=['Dogs ok'], outlined=True, filter=True),
                    v.Chip(children=['Cats ok'], outlined=True, filter=True),
                ]
            )

            neighborhoods = v.ChipGroup(
                v_model=[],
                column=True,
                multiple=True,
                children=[
                    v.Chip(children=['Snowy Rock Place'], outlined=True, filter=True),
                    v.Chip(children=['Honeylane Circle'], outlined=True, filter=True),
                    v.Chip(children=['Donna Drive'], outlined=True, filter=True),
                    v.Chip(children=['Elaine Street'], outlined=True, filter=True),
                    v.Chip(children=['Court Street'], outlined=True, filter=True),
                    v.Chip(children=['Kennedy Park'], outlined=True, filter=True),
                ]
            )

            v.Card(
                class_='mx-auto my-2',
                max_width='400',
                children=[
                    v.Toolbar(
                        color='deep-purple accent-4 text-white',
                        children=[
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-close'])]),
                            v.ToolbarTitle(children=['Filter results']),
                        ]
                    ),
                    v.CardText(
                        children=[
                            v.Html(tag='h5', class_='my-2', children=['Choose amenities']),
                            amenities,
                        ]
                    ),
                    v.CardText(
                        children=[
                            v.Html(tag='h5', class_='my-2', children=['Choose neighborhoods']),
                            neighborhoods,
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            amenities = v.ChipGroup(
                v_model=[],
                column=True,
                multiple=True,
                children=[
                    v.Chip(children=['Elevator'], outlined=True, filter=True),
                    v.Chip(children=['Washer / Dryer'], outlined=True, filter=True),
                    v.Chip(children=['Fireplace'], outlined=True, filter=True),
                    v.Chip(children=['Wheelchair access'], outlined=True, filter=True),
                    v.Chip(children=['Dogs ok'], outlined=True, filter=True),
                    v.Chip(children=['Cats ok'], outlined=True, filter=True),
                ]
            )

            neighborhoods = v.ChipGroup(
                v_model=[],
                column=True,
                multiple=True,
                children=[
                    v.Chip(children=['Snowy Rock Place'], outlined=True, filter=True),
                    v.Chip(children=['Honeylane Circle'], outlined=True, filter=True),
                    v.Chip(children=['Donna Drive'], outlined=True, filter=True),
                    v.Chip(children=['Elaine Street'], outlined=True, filter=True),
                    v.Chip(children=['Court Street'], outlined=True, filter=True),
                    v.Chip(children=['Kennedy Park'], outlined=True, filter=True),
                ]
            )

            v.Card(
                class_='mx-auto my-2',
                max_width='400',
                children=[
                    v.Toolbar(
                        color='deep-purple accent-4 text-white',
                        children=[
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-close'])]),
                            v.ToolbarTitle(children=['Filter results']),
                        ]
                    ),
                    v.CardText(
                        children=[
                            v.Html(tag='h5', class_='my-2', children=['Choose amenities']),
                            amenities,
                        ]
                    ),
                    v.CardText(
                        children=[
                            v.Html(tag='h5', class_='my-2', children=['Choose neighborhoods']),
                            neighborhoods,
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-toolbar
                flat
                color="deep-purple accent-4"
                dark
                >
                <v-btn icon>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Filter results</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                <h2 class="text-h6 mb-2">
                    Choose amenities
                </h2>

                <v-chip-group
                    v-model="amenities"
                    column
                    multiple
                >
                    <v-chip
                    filter
                    outlined
                    >
                    Elevator
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Washer / Dryer
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Fireplace
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Wheelchair access
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Dogs ok
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Cats ok
                    </v-chip>
                </v-chip-group>
                </v-card-text>

                <v-card-text>
                <h2 class="text-h6 mb-2">
                    Choose neighborhoods
                </h2>

                <v-chip-group
                    v-model="neighborhoods"
                    column
                    multiple
                >
                    <v-chip
                    filter
                    outlined
                    >
                    Snowy Rock Place
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Honeylane Circle
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Donna Drive
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Elaine Street
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Court Street
                    </v-chip>
                    <v-chip
                    filter
                    outlined
                    >
                    Kennedy Park
                    </v-chip>
                </v-chip-group>
                </v-card-text>
            </v-card>
            </template>

Mandatory
---------

Chip groups with the ``mandatory`` prop must always have a value selected.
This means a chip cannot be deselected if it's the only selected one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2", children=[v.ChipGroup(
                    active_class='text-primary',
                    v_model=0,
                    mandatory=True,
                    selected_class='text-primary',
                    children=[
                        v.Chip(children=['Work']),
                        v.Chip(children=['Home Improvement']),
                        v.Chip(children=['Vacation']),
                        v.Chip(children=['Food']),
                        v.Chip(children=['Drawers']),
                        v.Chip(children=['Shopping']),
                        v.Chip(children=['Art']),
                        v.Chip(children=['Tech']),
                        v.Chip(children=['Creative Writing']),
                    ]
                )]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2", children=[v.ChipGroup(
                    active_class='text-primary',
                    v_model=0,
                    mandatory=True,
                    selected_class='text-primary',
                    children=[
                        v.Chip(children=['Work']),
                        v.Chip(children=['Home Improvement']),
                        v.Chip(children=['Vacation']),
                        v.Chip(children=['Food']),
                        v.Chip(children=['Drawers']),
                        v.Chip(children=['Shopping']),
                        v.Chip(children=['Art']),
                        v.Chip(children=['Tech']),
                        v.Chip(children=['Creative Writing']),
                    ]
                )]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-col
                cols="12"
                sm="10"
                md="8"
                >
                <v-sheet
                    elevation="10"
                    class="py-4 px-1"
                >
                    <v-chip-group
                    mandatory
                    active-class="primary--text"
                    >
                    <v-chip
                        v-for="tag in tags"
                        :key="tag"
                    >
                        {{ tag }}
                    </v-chip>
                    </v-chip-group>
                </v-sheet>
                </v-col>
            </v-row>
            </template>

Multiple
--------

Chip groups with the ``multiple`` prop can have many values selected.
This allows you to select multiple chips at once.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2", children=[v.ChipGroup(
                    active_class='text-primary',
                    v_model=[0, 2],
                    multiple=True,
                    children=[
                        v.Chip(children=['Work']),
                        v.Chip(children=['Home Improvement']),
                        v.Chip(children=['Vacation']),
                        v.Chip(children=['Food']),
                        v.Chip(children=['Drawers']),
                        v.Chip(children=['Shopping']),
                        v.Chip(children=['Art']),
                        v.Chip(children=['Tech']),
                        v.Chip(children=['Creative Writing']),
                    ]
                )]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="mx-auto my-2", children=[v.ChipGroup(
                    active_class='text-primary',
                    v_model=[0, 2],
                    multiple=True,
                    children=[
                        v.Chip(children=['Work']),
                        v.Chip(children=['Home Improvement']),
                        v.Chip(children=['Vacation']),
                        v.Chip(children=['Food']),
                        v.Chip(children=['Drawers']),
                        v.Chip(children=['Shopping']),
                        v.Chip(children=['Art']),
                        v.Chip(children=['Tech']),
                        v.Chip(children=['Creative Writing']),
                    ]
                )]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-col
                cols="12"
                sm="10"
                md="8"
                >
                <v-sheet
                    elevation="10"
                    class="py-4 px-1"
                >
                    <v-chip-group
                    multiple
                    active-class="primary--text"
                    >
                    <v-chip
                        v-for="tag in tags"
                        :key="tag"
                    >
                        {{ tag }}
                    </v-chip>
                    </v-chip-group>
                </v-sheet>
                </v-col>
            </v-row>
            </template>

Product card
------------

Chip groups can be used in combination with cards to create rich selection interfaces.
This example shows a product size selector.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            sizes = ['04', '06', '08', '10', '12', '14']

            v.Card(
                class_='mx-auto my-2',
                max_width='400',
                children=[
                    v.CardTitle(
                        children=[
                            v.Html(tag='h2', children=['Shirt Blouse']),
                            v.Spacer(),
                            v.Html(tag='h3', children=['$44.50']),
                        ]
                    ),
                    v.CardText(
                        children=[
                            'Our blouses are available in 8 colors. You can custom order a built-in arch support for any of the models.'
                        ]
                    ),
                    v.Divider(class_='mx-4'),
                    v.CardText(
                        children=[
                            v.Html(tag='span', class_='subheading', children=['Select size']),
                            v.ChipGroup(
                                v_model=2,
                                active_class='deep-purple--text text--accent-4',
                                mandatory=True,
                                children=[v.Chip(children=[size]) for size in sizes]
                            )
                        ]
                    ),
                    v.CardActions(
                        children=[
                            v.Btn(
                                block=True,
                                class_='white--text',
                                color='deep-purple accent-4',
                                children=['Add to Cart']
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            sizes = ['04', '06', '08', '10', '12', '14']

            v.Card(
                class_='mx-auto my-2',
                max_width='400',
                children=[
                    v.CardTitle(
                        children=[
                            v.Html(tag='h2', children=['Shirt Blouse']),
                            v.Spacer(),
                            v.Html(tag='h3', children=['$44.50']),
                        ]
                    ),
                    v.CardText(
                        children=[
                            'Our blouses are available in 8 colors. You can custom order a built-in arch support for any of the models.'
                        ]
                    ),
                    v.Divider(class_='mx-4'),
                    v.CardText(
                        children=[
                            v.Html(tag='span', class_='subheading', children=['Select size']),
                            v.ChipGroup(
                                v_model=2,
                                active_class='deep-purple--text text--accent-4',
                                mandatory=True,
                                children=[v.Chip(children=[size]) for size in sizes]
                            )
                        ]
                    ),
                    v.CardActions(
                        children=[
                            v.Btn(
                                block=True,
                                class_='white--text',
                                color='deep-purple accent-4',
                                children=['Add to Cart']
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-card-title>
                <h2 class="text-h4">
                    Shirt Blouse
                </h2>
                <v-spacer></v-spacer>
                <span class="text-h6">$44.50</span>
                </v-card-title>

                <v-card-text>
                Our blouses are available in 8 colors. You can custom order a built-in arch support for any of the models.
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-text>
                <span class="subheading">Select size</span>

                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple--text text--accent-4"
                    mandatory
                >
                    <v-chip
                    v-for="size in sizes"
                    :key="size"
                    :value="size"
                    >
                    {{ size }}
                    </v-chip>
                </v-chip-group>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    block
                    class="white--text"
                    color="deep-purple accent-4"
                >
                    Add to Cart
                </v-btn>
                </v-card-actions>
            </v-card>
            </template>

Toothbrush card
---------------

This example demonstrates how chip groups can be used to select product variations,
such as toothbrush bristle types.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            bristle_types = ['Extra Soft', 'Soft', 'Medium', 'Hard']

            v.Card(
                class_='mx-auto my-2',
                max_width='400',
                children=[
                    v.CardTitle(
                        children=[
                            v.Html(tag='h2', children=['Toothbrush']),
                            v.Spacer(),
                            v.Html(tag='h3', children=['$4.99']),
                        ]
                    ),
                    v.CardText(
                        children=[
                            'Our company takes pride in making handmade brushes. Our toothbrushes are available in 4 different bristel types, from extra soft to hard.'
                        ]
                    ),
                    v.Divider(class_='mx-4'),
                    v.CardText(
                        children=[
                            v.Html(tag='span', class_='subheading', children=['Select type']),
                            v.ChipGroup(
                                v_model=0,
                                active_class='deep-purple--text text--accent-4',
                                mandatory=True,
                                children=[v.Chip(children=[bristle]) for bristle in bristle_types]
                            )
                        ]
                    ),
                    v.CardActions(
                        children=[
                            v.Btn(
                                block=True,
                                class_='white--text',
                                color='deep-purple accent-4',
                                children=['Add to Cart']
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            bristle_types = ['Extra Soft', 'Soft', 'Medium', 'Hard']

            v.Card(
                class_='mx-auto my-2',
                max_width='400',
                children=[
                    v.CardTitle(
                        children=[
                            v.Html(tag='h2', children=['Toothbrush']),
                            v.Spacer(),
                            v.Html(tag='h3', children=['$4.99']),
                        ]
                    ),
                    v.CardText(
                        children=[
                            'Our company takes pride in making handmade brushes. Our toothbrushes are available in 4 different bristel types, from extra soft to hard.'
                        ]
                    ),
                    v.Divider(class_='mx-4'),
                    v.CardText(
                        children=[
                            v.Html(tag='span', class_='subheading', children=['Select type']),
                            v.ChipGroup(
                                v_model=0,
                                active_class='deep-purple--text text--accent-4',
                                mandatory=True,
                                children=[v.Chip(children=[bristle]) for bristle in bristle_types]
                            )
                        ]
                    ),
                    v.CardActions(
                        children=[
                            v.Btn(
                                block=True,
                                class_='white--text',
                                color='deep-purple accent-4',
                                children=['Add to Cart']
                            )
                        ]
                    )
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-card-title>
                <h2 class="text-h4">
                    Toothbrush
                </h2>
                <v-spacer></v-spacer>
                <span class="text-h6">$4.99</span>
                </v-card-title>

                <v-card-text>
                Our company takes pride in making handmade brushes.
                Our toothbrushes are available in 4 different bristel types, from extra soft to hard.
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-text>
                <span class="subheading">Select type</span>

                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple--text text--accent-4"
                    mandatory
                >
                    <v-chip>Extra Soft</v-chip>
                    <v-chip>Soft</v-chip>
                    <v-chip>Medium</v-chip>
                    <v-chip>Hard</v-chip>
                </v-chip-group>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    block
                    class="white--text"
                    color="deep-purple accent-4"
                >
                    Add to Cart
                </v-btn>
                </v-card-actions>
            </v-card>
            </template>
