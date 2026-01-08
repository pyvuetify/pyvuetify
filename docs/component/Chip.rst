Chip
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/chips/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Chip <ipyvuetify.Chip>` component is used to convey small pieces of information.
Using the ``close`` property, the chip becomes interactive, allowing user interaction.
This component is used by the :py:class:`ChipGroup <ipyvuetify.ChipGroup>` for advanced selection options.

Usage
-----

Chips come in the following variations: closeable, colored, outlined, and sized.
The default slot allows you to customize the content inside the chip.

.. jupyter-execute::

    import ipyvuetify as v

    v.Container(
        children=[
            v.Chip(
                class_='ma-2',
                close_icon="mdi-close-outline",
                close_=True,
                color='purple',
                children=['Default'],
                text_color="white"
            ),
        ]
    )

.. api::

    - :py:class:`ipyvuetify.Chip`
    - :py:class:`ipyvuetify.ChipGroup`

Closeable
---------

Closeable chips can be controlled with a ``v_model``. You can also listen to the
``click:close`` event to perform actions when the chip is closed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        v_model=True,
                        children=['Closable']
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='red',
                        text_color='white',
                        v_model=True,
                        children=['Remove']
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='green',
                        outlined=True,
                        v_model=True,
                        children=['Success']
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='orange',
                        label=True,
                        outlined=True,
                        v_model=True,
                        children=['Complete']
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        v_model=True,
                        children=['Closable']
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='red',
                        text_color='white',
                        v_model=True,
                        children=['Remove']
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='green',
                        outlined=True,
                        v_model=True,
                        children=['Success']
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='orange',
                        label=True,
                        outlined=True,
                        v_model=True,
                        children=['Complete']
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-btn
                        v-if="!chip1 && !chip2 && !chip3 && !chip4"
                        close
                        color="primary"
                        dark
                        @click="chip1 = true, chip2 = true, chip3 = true, chip4= true"
                    >
                        Reset Chips
                    </v-btn>

                    <v-chip
                        v-if="chip1"
                        class="ma-2"
                        close
                        @click:close="chip1 = false"
                    >
                        Closable
                    </v-chip>

                    <v-chip
                        v-if="chip2"
                        class="ma-2"
                        close
                        color="red"
                        text-color="white"
                        @click:close="chip2 = false"
                    >
                        Remove
                    </v-chip>

                    <v-chip
                        v-if="chip3"
                        class="ma-2"
                        close
                        color="green"
                        outlined
                        @click:close="chip3 = false"
                    >
                        Success
                    </v-chip>

                    <v-chip
                        v-if="chip4"
                        class="ma-2"
                        close
                        color="orange"
                        label
                        outlined
                        @click:close="chip4 = false"
                    >
                        Complete
                    </v-chip>
                </div>
            </template>

Colored
-------

Any color from the Material Design palette can be used to change a chip's color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color=color,
                        text_color='white',
                        children=[color.capitalize()]
                    ) for color in colors
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color=color,
                        text_color='white',
                        children=[color.capitalize()]
                    ) for color in colors
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-chip class="ma-2">Default</v-chip>
                    <v-chip class="ma-2" color="primary">Primary</v-chip>
                    <v-chip class="ma-2" color="secondary">Secondary</v-chip>
                    <v-chip class="ma-2" color="red" text-color="white">Red Chip</v-chip>
                    <v-chip class="ma-2" color="green" text-color="white">Green Chip</v-chip>
                </div>
            </template>


Draggable
---------

``draggable`` :py:class:`Chip <ipyvuetify.Chip>` component can be dragged by mouse.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        draggable=True,
                        children=['Default']
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        draggable=True,
                        children=['Default']
                    ),
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row
                    justify="center"
                    align="center"
                >
                    <v-chip draggable>
                        Default
                    </v-chip>
                </v-row>
            </template>

Filter
------

:py:class:`Chip <ipyvuetify.Chip>` component has ``filter`` option which shows an
additional icon to you if chip is active. It can be customized using ``filter-icon``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            chip1 = v.Chip(
                class_='ma-2',
                input_value=True,
                filter=True,
                children=["I'm v-chip"]
            )
            chip2 = v.Chip(
                class_='ma-2',
                input_value=True,
                filter=True,
                filter_icon='mdi-plus',
                children=["I'm v-chip"]
            )
            chip3 = v.Chip(
                class_='ma-2',
                input_value=True,
                filter=True,
                filter_icon='mdi-minus',
                children=["I'm v-chip"]
            )

            switch = v.Switch(
                v_model=True,
                label='Active'
            )

            jslink((switch, 'v_model'), (chip1, 'input_value'))
            jslink((switch, 'v_model'), (chip2, 'input_value'))
            jslink((switch, 'v_model'), (chip3, 'input_value'))

            v.Container(children=[chip1, chip2, chip3, switch])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            chip1 = v.Chip(
                class_='ma-2',
                input_value=True,
                filter=True,
                children=["I'm v-chip"]
            )
            chip2 = v.Chip(
                class_='ma-2',
                input_value=True,
                filter=True,
                filter_icon='mdi-plus',
                children=["I'm v-chip"]
            )
            chip3 = v.Chip(
                class_='ma-2',
                input_value=True,
                filter=True,
                filter_icon='mdi-minus',
                children=["I'm v-chip"]
            )

            switch = v.Switch(
                v_model=True,
                label='Active'
            )

            jslink((switch, 'v_model'), (chip1, 'input_value'))
            jslink((switch, 'v_model'), (chip2, 'input_value'))
            jslink((switch, 'v_model'), (chip3, 'input_value'))

            v.Container(children=[chip1, chip2, chip3, switch])


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row justify="space-around" align="center">
                    <v-chip
                        class="ma-2"
                        :input-value="active"
                        filter
                    >
                        I'm v-chip
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        :input-value="active"
                        filter
                        filter-icon="mdi-plus"
                    >
                        I'm v-chip
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        :input-value="active"
                        filter
                        filter-icon="mdi-minus"
                    >
                        I'm v-chip
                    </v-chip>

                    <v-switch
                        v-model="active"
                        label="Active"
                    ></v-switch>
                </v-row>
            </template>

Label
-----

Label chips use the :py:class:`Card <ipyvuetify.Card>` border-radius.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        label=True,
                        children=['Label']
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='pink',
                        label=True,
                        text_color='white',
                        children=[
                            v.Icon(left=True, children=['mdi-label']),
                            'Tags'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='primary',
                        label=True,
                        children=[
                            v.Icon(left=True, children=['mdi-account-circle-outline']),
                            'John Leider'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='cyan',
                        label=True,
                        text_color='white',
                        children=[
                            v.Icon(left=True, children=['mdi-twitter']),
                            'New Tweets'
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        label=True,
                        children=['Label']
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='pink',
                        label=True,
                        text_color='white',
                        children=[
                            v.Icon(left=True, children=['mdi-label']),
                            'Tags'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='primary',
                        label=True,
                        children=[
                            v.Icon(left=True, children=['mdi-account-circle-outline']),
                            'John Leider'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='cyan',
                        label=True,
                        text_color='white',
                        children=[
                            v.Icon(left=True, children=['mdi-twitter']),
                            'New Tweets'
                        ]
                    ),
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-chip
                        class="ma-2"
                        label
                    >
                        Label
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="pink"
                        label
                        text-color="white"
                    >
                        <v-icon left>
                            mdi-label
                        </v-icon>
                        Tags
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="primary"
                        label
                    >
                        <v-icon left>
                            mdi-account-circle-outline
                        </v-icon>
                        John Leider
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        close
                        color="cyan"
                        label
                        text-color="white"
                    >
                        <v-icon left>
                            mdi-twitter
                        </v-icon>
                        New Tweets
                    </v-chip>
                </div>
            </template>

No ripple
---------

:py:class:`Chip <ipyvuetify.Chip>` can be rendered without ripple if ``ripple`` prop is set to ``false``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        ripple=False,
                        children=['No Ripple']
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        ripple=False,
                        children=['No Ripple']
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row
                    justify="center"
                    align="center"
                >
                    <v-chip :ripple="false">
                        No Ripple
                    </v-chip>
                </v-row>
            </template>

Outlined
--------

Outlined chips inherit their border color from the current text color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color='success',
                        outlined=True,
                        children=[
                            v.Icon(left=True, children=['mdi-server-plus']),
                            'Server Status'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='primary',
                        outlined=True,
                        pill=True,
                        children=[
                            'User Account',
                            v.Icon(right=True, children=['mdi-account-outline'])
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='deep-purple accent-4',
                        outlined=True,
                        children=[
                            v.Icon(left=True, children=['mdi-wrench']),
                            'Update Settings'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='indigo darken-3',
                        outlined=True,
                        children=[
                            v.Icon(left=True, children=['mdi-fire']),
                            'New Posts Available'
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color='success',
                        outlined=True,
                        children=[
                            v.Icon(left=True, children=['mdi-server-plus']),
                            'Server Status'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='primary',
                        outlined=True,
                        pill=True,
                        children=[
                            'User Account',
                            v.Icon(right=True, children=['mdi-account-outline'])
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='deep-purple accent-4',
                        outlined=True,
                        children=[
                            v.Icon(left=True, children=['mdi-wrench']),
                            'Update Settings'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='indigo darken-3',
                        outlined=True,
                        children=[
                            v.Icon(left=True, children=['mdi-fire']),
                            'New Posts Available'
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-chip
                        class="ma-2"
                        color="success"
                        outlined
                    >
                        <v-icon left>
                            mdi-server-plus
                        </v-icon>
                        Server Status
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="primary"
                        outlined
                        pill
                    >
                        User Account
                        <v-icon right>
                            mdi-account-outline
                        </v-icon>
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="deep-purple accent-4"
                        outlined
                    >
                        <v-icon left>
                            mdi-wrench
                        </v-icon>
                        Update Settings
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        close
                        color="indigo darken-3"
                        outlined
                    >
                        <v-icon left>
                            mdi-fire
                        </v-icon>
                        New Posts Available
                    </v-chip>
                </div>
            </template>

Sizes
-----

:py:class:`Chip <ipyvuetify.Chip>` component can have various sizes from ``x-small`` to ``x-large``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            sizes = ['x-small', 'small', 'default', 'large', 'x-large']

            kwargs = [
                {
                    'class_': 'ma-2',
                    size.replace('-', '_'): True,
                    'children': [(f"{size} chip").capitalize()]
                }
                for size in sizes
            ]

            v.Container(children=[v.Chip(**kw) for kw in kwargs])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            sizes = ['x-small', 'small', 'default', 'large', 'x-large']

            kwargs = [
                {
                    'class_': 'ma-2',
                    size.replace('-', '_'): True,
                    'children': [(f"{size} chip").capitalize()]
                }
                for size in sizes
            ]

            v.Container(children=[v.Chip(**kw) for kw in kwargs])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-chip
                        class="ma-2"
                        x-small
                    >
                        x-small chip
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        small
                    >
                        small chip
                    </v-chip>

                    <v-chip
                        class="ma-2"
                    >
                        Default
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        large
                    >
                        large chip
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        x-large
                    >
                        x-large chip
                    </v-chip>
                </div>
            </template>

Icon
----

Chips can use text or any icon available in the Material Icons font library.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color='indigo',
                        text_color='white',
                        children=[
                            v.Avatar(
                                left=True,
                                children=[v.Icon(children=['mdi-account-circle'])]
                            ),
                            'Mike'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='orange',
                        text_color='white',
                        children=[
                            'Premium',
                            v.Icon(
                                right=True,
                                children=['mdi-star']
                            )
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='primary',
                        text_color='white',
                        children=[
                            '1 Year',
                            v.Icon(
                                right=True,
                                children=['mdi-cake-variant']
                            )
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='green',
                        text_color='white',
                        children=[
                            v.Avatar(
                                left=True,
                                class_='green darken-4',
                                children=['1']
                            ),
                            'Years'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='teal',
                        text_color='white',
                        children=[
                            v.Avatar(
                                left=True,
                                children=[v.Icon(children=['mdi-checkbox-marked-circle'])]
                            ),
                            'Confirmed'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='teal',
                        text_color='white',
                        children=[
                            v.Avatar(
                                left=True,
                                children=[v.Icon(children=['mdi-checkbox-marked-circle'])]
                            ),
                            'Confirmed'
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color='indigo',
                        text_color='white',
                        children=[
                            v.Avatar(
                                left=True,
                                children=[v.Icon(children=['mdi-account-circle'])]
                            ),
                            'Mike'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='orange',
                        text_color='white',
                        children=[
                            'Premium',
                            v.Icon(
                                right=True,
                                children=['mdi-star']
                            )
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='primary',
                        text_color='white',
                        children=[
                            '1 Year',
                            v.Icon(
                                right=True,
                                children=['mdi-cake-variant']
                            )
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='green',
                        text_color='white',
                        children=[
                            v.Avatar(
                                left=True,
                                class_='green darken-4',
                                children=['1']
                            ),
                            'Years'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='teal',
                        text_color='white',
                        children=[
                            v.Avatar(
                                left=True,
                                children=[v.Icon(children=['mdi-checkbox-marked-circle'])]
                            ),
                            'Confirmed'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        close_=True,
                        color='teal',
                        text_color='white',
                        children=[
                            v.Avatar(
                                left=True,
                                children=[v.Icon(children=['mdi-checkbox-marked-circle'])]
                            ),
                            'Confirmed'
                        ]
                    ),
                ]
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-chip
                        class="ma-2"
                        color="indigo"
                        text-color="white"
                    >
                        <v-avatar left>
                            <v-icon>mdi-account-circle</v-icon>
                        </v-avatar>
                        Mike
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="orange"
                        text-color="white"
                    >
                        Premium
                        <v-icon right>
                            mdi-star
                        </v-icon>
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="primary"
                        text-color="white"
                    >
                        1 Year
                        <v-icon right>
                            mdi-cake-variant
                        </v-icon>
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="green"
                        text-color="white"
                    >
                        <v-avatar
                            left
                            class="green darken-4"
                        >
                            1
                        </v-avatar>
                        Years
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        close
                        color="teal"
                        text-color="white"
                        @click:close="close"
                    >
                        <v-avatar left>
                            <v-icon>mdi-checkbox-marked-circle</v-icon>
                        </v-avatar>
                        Confirmed
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        close
                        color="teal"
                        text-color="white"
                        close-icon="mdi-delete"
                        @click:close="close"
                    >
                        <v-avatar left>
                            <v-icon>mdi-checkbox-marked-circle</v-icon>
                        </v-avatar>
                        Confirmed
                    </v-chip>
                </div>
            </template>