Dialog
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/dialogs/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Dialog <ipyvuetify.Dialog>` component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.

.. api::

    - :py:class:`ipyvuetify.Dialog`
    - :py:class:`ipyvuetify.DialogBottomTransition`
    - :py:class:`ipyvuetify.DialogTransition`

Usage
-----

A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    dialog = v.Dialog(
        v_model=False,
        width=500,
        children=[
            v.Card(
                children=[
                    v.CardTitle(
                        children=['Privacy Policy'],
                        class_='text-h5 grey lighten-2',
                    ),
                    v.CardText(children=[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
                        'sed do eiusmod tempor incididunt ut labore et dolore magna ',
                        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
                        'ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                        'Duis aute irure dolor in reprehenderit in voluptate velit '
                        'esse cillum dolore eu fugiat nulla pariatur. Excepteur '
                        'sint occaecat cupidatat non proident, sunt in culpa qui '
                        'officia deserunt mollit anim id est laborum.'
                    ]),
                    v.Divider(),
                    v.CardActions(children=[
                        v.Spacer(),
                        v.Btn(children=['I accept'], color='primary',),
                    ]),
                ]
            )
        ],
        v_slots=[{
            'name': 'activator',
            'variable': 'dialog',
            'children': v.Btn(
                children=['Click me'],
                color='red lighten-2',
                dark=True,
                v_bind="dialog.attrs",
                v_on="dialog.on",
            ),
        }],
    )

    v.Container(children=[dialog], class_='text-center')

Fullscreen
----------

Due to limited space, full-screen dialogs may be more appropriate for mobile devices
than dialogs used on devices with larger screens.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(
                v_model=False,
                label='close dialog',
                class_='mb-4',
            )

            dialog = v.Dialog(
                v_model=False,
                fullscreen=True,
                #hide_hoverlay=True,
                transition='dialog-bottom-transition',
                children=[
                    v.Card(
                        children=[
                            v.List(
                                three_line=True,
                                subheader=True,
                                children=[
                                    v.Subheader(children=['User Controls']),
                                    v.ListItem(
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Content filtering']),
                                                    v.ListItemSubtitle(
                                                        children=['Set the content filtering level to restrict apps that can be downloaded']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Password']),
                                                    v.ListItemSubtitle(
                                                        children=['Require password for purchase or use password to restrict purchase']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                ],
                            ),
                            v.Divider(),
                            v.List(
                                three_line=True,
                                subheader=True,
                                children=[
                                    v.Subheader(children=['General']),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Checkbox(v_model=True)]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Notifications']),
                                                    v.ListItemSubtitle(
                                                        children=['Notify me about updates to apps or games that I downloaded']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Checkbox(v_model=False)]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Sound']),
                                                    v.ListItemSubtitle(
                                                        children=['Auto-update apps at any time. Data charges may apply']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Checkbox(v_model=True)]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Auto-add widgets']),
                                                    v.ListItemSubtitle(
                                                        children=['Automatically add home screen widgets']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                ],
                            ),
                            v.CardActions(
                                class_='justify-center',
                                children=[v.Spacer(), switch, v.Spacer()]
                            ),
                        ]
                    )
                ],
                v_slots=[{
                    'name': 'activator',
                    'variable': 'dialog',
                    'children': v.Btn(
                        children=['Open Dialog'],
                        color='primary',
                        dark=True,
                        v_bind="dialog.attrs",
                        v_on="dialog.on",
                    ),
                }],
            )

            jslink((switch, 'v_model'), (dialog, 'v_model'))

            v.Container(children=[dialog], class_='text-center')

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(
                v_model=False,
                label='close dialog',
                class_='mb-4',
            )

            dialog = v.Dialog(
                v_model=False,
                fullscreen=True,
                #hide_hoverlay=True,
                transition='dialog-bottom-transition',
                children=[
                    v.Card(
                        children=[
                            v.List(
                                three_line=True,
                                subheader=True,
                                children=[
                                    v.Subheader(children=['User Controls']),
                                    v.ListItem(
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Content filtering']),
                                                    v.ListItemSubtitle(
                                                        children=['Set the content filtering level to restrict apps that can be downloaded']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Password']),
                                                    v.ListItemSubtitle(
                                                        children=['Require password for purchase or use password to restrict purchase']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                ],
                            ),
                            v.Divider(),
                            v.List(
                                three_line=True,
                                subheader=True,
                                children=[
                                    v.Subheader(children=['General']),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Checkbox(v_model=True)]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Notifications']),
                                                    v.ListItemSubtitle(
                                                        children=['Notify me about updates to apps or games that I downloaded']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Checkbox(v_model=False)]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Sound']),
                                                    v.ListItemSubtitle(
                                                        children=['Auto-update apps at any time. Data charges may apply']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                    v.ListItem(
                                        children=[
                                            v.ListItemAction(
                                                children=[v.Checkbox(v_model=True)]
                                            ),
                                            v.ListItemContent(
                                                children=[
                                                    v.ListItemTitle(children=['Auto-add widgets']),
                                                    v.ListItemSubtitle(
                                                        children=['Automatically add home screen widgets']
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                ],
                            ),
                            v.CardActions(
                                class_='justify-center',
                                children=[v.Spacer(), switch, v.Spacer()]
                            ),
                        ]
                    )
                ],
                v_slots=[{
                    'name': 'activator',
                    'variable': 'dialog',
                    'children': v.Btn(
                        children=['Open Dialog'],
                        color='primary',
                        dark=True,
                        v_bind="dialog.attrs",
                        v_on="dialog.on",
                    ),
                }],
            )

            jslink((switch, 'v_model'), (dialog, 'v_model'))

            v.Container(children=[dialog], class_='text-center')

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Open Dialog
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar
                    dark
                    color="primary"
                    >
                    <v-btn
                        icon
                        dark
                        @click="dialog = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                        dark
                        text
                        @click="dialog = false"
                        >
                        Save
                        </v-btn>
                    </v-toolbar-items>
                    </v-toolbar>
                    <v-list
                    three-line
                    subheader
                    >
                    <v-subheader>User Controls</v-subheader>
                    <v-list-item>
                        <v-list-item-content>
                        <v-list-item-title>Content filtering</v-list-item-title>
                        <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                        <v-list-item-title>Password</v-list-item-title>
                        <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list
                    three-line
                    subheader
                    >
                    <v-subheader>General</v-subheader>
                    <v-list-item>
                        <v-list-item-action>
                        <v-checkbox v-model="notifications"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                        <v-checkbox v-model="sound"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                        <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                        <v-checkbox v-model="widgets"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                        <v-list-item-title>Auto-add widgets</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list>
                </v-card>
                </v-dialog>
            </v-row>
            </template>

Transitions
-----------

You can make the dialog appear from the top or the bottom.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        transition="dialog-bottom-transition",
                        children=[
                            v.Card(
                                children=[
                                    v.Toolbar(
                                        children=['Opening from the bottom'],
                                        color='primary',
                                        dark=True,
                                    ),
                                    v.CardText(
                                        children=[
                                            v.Html(tag='div', class_='text-h2 pa-12', children=['Hello world!'])
                                        ]
                                    ),
                                    v.CardActions(
                                        class_='justify-end',
                                        children=[
                                            v.Btn(
                                                children=['Close'],
                                                text=True,
                                                on_click=lambda widget, event: setattr(dialog_bottom, 'v_model', False),
                                            )
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog_bottom',
                            'children': v.Btn(
                                class_='mx-4',
                                children=['From the bottom'],
                                color='primary',
                                v_bind='dialog_bottom.attrs',
                                v_on='dialog_bottom.on',
                            ),
                        }],
                    ),
                    v.Dialog(
                        transition="dialog-top-transition",
                        children=[
                            v.Card(
                                children=[
                                    v.Toolbar(
                                        children=['Opening from the top'],
                                        color='primary',
                                        dark=True,
                                    ),
                                    v.CardText(
                                        children=[
                                            v.Html(tag='div', class_='text-h2 pa-12', children=['Hello world!'])
                                        ]
                                    ),
                                    v.CardActions(
                                        class_='justify-end',
                                        children=[
                                            v.Btn(
                                                children=['Close'],
                                                text=True,
                                                on_click=lambda widget, event: setattr(dialog_top, 'v_model', False),
                                            )
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog_top',
                            'children': v.Btn(
                                class_='mx-4',
                                children=['From the top'],
                                color='primary',
                                v_bind='dialog_top.attrs',
                                v_on='dialog_top.on',
                            ),
                        }],
                    ),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        transition="dialog-bottom-transition",
                        children=[
                            v.Card(
                                children=[
                                    v.Toolbar(
                                        children=['Opening from the bottom'],
                                        color='primary',
                                        dark=True,
                                    ),
                                    v.CardText(
                                        children=[
                                            v.Html(tag='div', class_='text-h2 pa-12', children=['Hello world!'])
                                        ]
                                    ),
                                    v.CardActions(
                                        class_='justify-end',
                                        children=[
                                            v.Btn(
                                                children=['Close'],
                                                text=True,
                                                on_click=lambda widget, event: setattr(dialog_bottom, 'v_model', False),
                                            )
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog_bottom',
                            'children': v.Btn(
                                class_='mx-4',
                                children=['From the bottom'],
                                color='primary',
                                v_bind='dialog_bottom.attrs',
                                v_on='dialog_bottom.on',
                            ),
                        }],
                    ),
                    v.Dialog(
                        transition="dialog-top-transition",
                        children=[
                            v.Card(
                                children=[
                                    v.Toolbar(
                                        children=['Opening from the top'],
                                        color='primary',
                                        dark=True,
                                    ),
                                    v.CardText(
                                        children=[
                                            v.Html(tag='div', class_='text-h2 pa-12', children=['Hello world!'])
                                        ]
                                    ),
                                    v.CardActions(
                                        class_='justify-end',
                                        children=[
                                            v.Btn(
                                                children=['Close'],
                                                text=True,
                                                on_click=lambda widget, event: setattr(dialog_top, 'v_model', False),
                                            )
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog_top',
                            'children': v.Btn(
                                class_='mx-4',
                                children=['From the top'],
                                color='primary',
                                v_bind='dialog_top.attrs',
                                v_on='dialog_top.on',
                            ),
                        }],
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-col cols="auto">
                <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="600"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                    >From the bottom</v-btn>
                    </template>
                    <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar
                        color="primary"
                        dark
                        >Opening from the bottom</v-toolbar>
                        <v-card-text>
                        <div class="text-h2 pa-12">Hello world!</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                        <v-btn
                            text
                            @click="dialog.value = false"
                        >Close</v-btn>
                        </v-card-actions>
                    </v-card>
                    </template>
                </v-dialog>
                </v-col>

                <v-col cols="auto">
                <v-dialog
                    transition="dialog-top-transition"
                    max-width="600"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                    >From the top</v-btn>
                    </template>
                    <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar
                        color="primary"
                        dark
                        >Opening from the top</v-toolbar>
                        <v-card-text>
                        <div class="text-h2 pa-12">Hello world!</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                        <v-btn
                            text
                            @click="dialog.value = false"
                        >Close</v-btn>
                        </v-card-actions>
                    </v-card>
                    </template>
                </v-dialog>
                </v-col>
            </v-row>
            </template>

Persistent
----------

Similar to a Simple Dialog, except that it's not dismissed when touching outside or pressing esc key.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        # persistent=True,  # not working in the documentation so we comment it out
                        max_width=290,
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_='text-h5',
                                        children=["Use Google's location service?"],
                                    ),
                                    v.CardText(
                                        children=[
                                            "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
                                        ]
                                    ),
                                    v.CardActions(
                                        children=[
                                            v.Spacer(),
                                            v.Btn(
                                                text=True,
                                                color='green darken-1',
                                                children=['Disagree'],
                                                on_click=lambda widget, event: setattr(dialog, 'v_model', False),
                                            ),
                                            v.Btn(
                                                text=True,
                                                color='green darken-1',
                                                children=['Agree'],
                                                on_click=lambda widget, event: setattr(dialog, 'v_model', False),
                                            ),
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Open Dialog'],
                                color='primary',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        # persistent=True,  # not working in the documentation so we comment it out
                        max_width=290,
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_='text-h5',
                                        children=["Use Google's location service?"],
                                    ),
                                    v.CardText(
                                        children=[
                                            "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
                                        ]
                                    ),
                                    v.CardActions(
                                        children=[
                                            v.Spacer(),
                                            v.Btn(
                                                text=True,
                                                color='green darken-1',
                                                children=['Disagree'],
                                                on_click=lambda widget, event: setattr(dialog, 'v_model', False),
                                            ),
                                            v.Btn(
                                                text=True,
                                                color='green darken-1',
                                                children=['Agree'],
                                                on_click=lambda widget, event: setattr(dialog, 'v_model', False),
                                            ),
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Open Dialog'],
                                color='primary',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Open Dialog
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="text-h5">
                    Use Google's location service?
                    </v-card-title>
                    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        Disagree
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        Agree
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
            </template>

Scrollable
----------

Example of a dialog with scrollable content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        scrollable=True,
                        max_width=300,
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_='text-h5',
                                        children=['Select Country'],
                                    ),
                                    v.Divider(),
                                    v.CardText(
                                        style_='height: 300px;',
                                        children=[
                                            v.RadioGroup(
                                                v_model=None,
                                                column=True,
                                                children=[
                                                    v.Radio(label='Bahamas, The', value='bahamas'),
                                                    v.Radio(label='Bahrain', value='bahrain'),
                                                    v.Radio(label='Bangladesh', value='bangladesh'),
                                                    v.Radio(label='Barbados', value='barbados'),
                                                    v.Radio(label='Belarus', value='belarus'),
                                                    v.Radio(label='Belgium', value='belgium'),
                                                    v.Radio(label='Belize', value='belize'),
                                                    v.Radio(label='Benin', value='benin'),
                                                    v.Radio(label='Bhutan', value='bhutan'),
                                                    v.Radio(label='Bolivia', value='bolivia'),
                                                    v.Radio(label='Bosnia and Herzegovina', value='bosnia'),
                                                    v.Radio(label='Botswana', value='botswana'),
                                                    v.Radio(label='Brazil', value='brazil'),
                                                    v.Radio(label='Brunei', value='brunei'),
                                                    v.Radio(label='Bulgaria', value='bulgaria'),
                                                    v.Radio(label='Burkina Faso', value='burkina'),
                                                    v.Radio(label='Burma', value='burma'),
                                                    v.Radio(label='Burundi', value='burundi'),
                                                ],
                                            )
                                        ]
                                    ),
                                    v.Divider(),
                                    v.CardActions(
                                        children=[
                                            v.Btn(
                                                text=True,
                                                color='blue darken-1',
                                                children=['Close'],
                                                on_click=lambda widget, event: setattr(dialog, 'v_model', False),
                                            ),
                                            v.Btn(
                                                text=True,
                                                color='blue darken-1',
                                                children=['Save'],
                                                on_click=lambda widget, event: setattr(dialog, 'v_model', False),
                                            ),
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Open Dialog'],
                                color='primary',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        scrollable=True,
                        max_width=300,
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_='text-h5',
                                        children=['Select Country'],
                                    ),
                                    v.Divider(),
                                    v.CardText(
                                        style_='height: 300px;',
                                        children=[
                                            v.RadioGroup(
                                                v_model=None,
                                                column=True,
                                                children=[
                                                    v.Radio(label='Bahamas, The', value='bahamas'),
                                                    v.Radio(label='Bahrain', value='bahrain'),
                                                    v.Radio(label='Bangladesh', value='bangladesh'),
                                                    v.Radio(label='Barbados', value='barbados'),
                                                    v.Radio(label='Belarus', value='belarus'),
                                                    v.Radio(label='Belgium', value='belgium'),
                                                    v.Radio(label='Belize', value='belize'),
                                                    v.Radio(label='Benin', value='benin'),
                                                    v.Radio(label='Bhutan', value='bhutan'),
                                                    v.Radio(label='Bolivia', value='bolivia'),
                                                    v.Radio(label='Bosnia and Herzegovina', value='bosnia'),
                                                    v.Radio(label='Botswana', value='botswana'),
                                                    v.Radio(label='Brazil', value='brazil'),
                                                    v.Radio(label='Brunei', value='brunei'),
                                                    v.Radio(label='Bulgaria', value='bulgaria'),
                                                    v.Radio(label='Burkina Faso', value='burkina'),
                                                    v.Radio(label='Burma', value='burma'),
                                                    v.Radio(label='Burundi', value='burundi'),
                                                ],
                                            )
                                        ]
                                    ),
                                    v.Divider(),
                                    v.CardActions(
                                        children=[
                                            v.Btn(
                                                text=True,
                                                color='blue darken-1',
                                                children=['Close'],
                                                on_click=lambda widget, event: setattr(dialog, 'v_model', False),
                                            ),
                                            v.Btn(
                                                text=True,
                                                color='blue darken-1',
                                                children=['Save'],
                                                on_click=lambda widget, event: setattr(dialog, 'v_model', False),
                                            ),
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Open Dialog'],
                                color='primary',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-dialog
                v-model="dialog"
                scrollable
                max-width="300px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Open Dialog
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>Select Country</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 300px;">
                    <v-radio-group
                        v-model="dialogm1"
                        column
                    >
                        <v-radio
                        label="Bahamas, The"
                        value="bahamas"
                        ></v-radio>
                        <v-radio
                        label="Bahrain"
                        value="bahrain"
                        ></v-radio>
                        <v-radio
                        label="Bangladesh"
                        value="bangladesh"
                        ></v-radio>
                        <v-radio
                        label="Barbados"
                        value="barbados"
                        ></v-radio>
                        <v-radio
                        label="Belarus"
                        value="belarus"
                        ></v-radio>
                        <v-radio
                        label="Belgium"
                        value="belgium"
                        ></v-radio>
                        <v-radio
                        label="Belize"
                        value="belize"
                        ></v-radio>
                        <v-radio
                        label="Benin"
                        value="benin"
                        ></v-radio>
                        <v-radio
                        label="Bhutan"
                        value="bhutan"
                        ></v-radio>
                        <v-radio
                        label="Bolivia"
                        value="bolivia"
                        ></v-radio>
                        <v-radio
                        label="Bosnia and Herzegovina"
                        value="bosnia"
                        ></v-radio>
                        <v-radio
                        label="Botswana"
                        value="botswana"
                        ></v-radio>
                        <v-radio
                        label="Brazil"
                        value="brazil"
                        ></v-radio>
                        <v-radio
                        label="Brunei"
                        value="brunei"
                        ></v-radio>
                        <v-radio
                        label="Bulgaria"
                        value="bulgaria"
                        ></v-radio>
                        <v-radio
                        label="Burkina Faso"
                        value="burkina"
                        ></v-radio>
                        <v-radio
                        label="Burma"
                        value="burma"
                        ></v-radio>
                        <v-radio
                        label="Burundi"
                        value="burundi"
                        ></v-radio>
                    </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
            </template>

Form
----

A simple example of a form in a dialog.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        max_width=600,
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_='text-h5',
                                        children=['User Profile'],
                                    ),
                                    v.CardText(
                                        children=[
                                            v.Container(
                                                children=[
                                                    v.Row(
                                                        children=[
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                md=4,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Legal first name*',
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                md=4,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Legal middle name',
                                                                        hint='example of helper text only on focus',
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                md=4,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Legal last name*',
                                                                        hint='example of persistent helper text',
                                                                        persistent_hint=True,
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Email*',
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Password*',
                                                                        type_='password',
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                children=[
                                                                    v.Select(
                                                                        items=['0-17', '18-29', '30-54', '54+'],
                                                                        label='Age*',
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                children=[
                                                                    v.Autocomplete(
                                                                        items=['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump'],
                                                                        label='Interests',
                                                                        multiple=True,
                                                                    )
                                                                ]
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            )
                                        ]
                                    ),
                                    v.CardActions(
                                        children=[
                                            v.Spacer(),
                                            v.Btn(
                                                text=True,
                                                color='blue darken-1',
                                                children=['Close'],
                                            ),
                                            v.Btn(
                                                text=True,
                                                color='blue darken-1',
                                                children=['Save'],
                                            ),
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Open Dialog'],
                                color='primary',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        max_width=600,
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_='text-h5',
                                        children=['User Profile'],
                                    ),
                                    v.CardText(
                                        children=[
                                            v.Container(
                                                children=[
                                                    v.Row(
                                                        children=[
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                md=4,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Legal first name*',
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                md=4,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Legal middle name',
                                                                        hint='example of helper text only on focus',
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                md=4,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Legal last name*',
                                                                        hint='example of persistent helper text',
                                                                        persistent_hint=True,
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Email*',
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                children=[
                                                                    v.TextField(
                                                                        label='Password*',
                                                                        type_='password',
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                children=[
                                                                    v.Select(
                                                                        items=['0-17', '18-29', '30-54', '54+'],
                                                                        label='Age*',
                                                                        required=True,
                                                                    )
                                                                ]
                                                            ),
                                                            v.Col(
                                                                cols=12,
                                                                sm=6,
                                                                children=[
                                                                    v.Autocomplete(
                                                                        items=['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump'],
                                                                        label='Interests',
                                                                        multiple=True,
                                                                    )
                                                                ]
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            )
                                        ]
                                    ),
                                    v.CardActions(
                                        children=[
                                            v.Spacer(),
                                            v.Btn(
                                                text=True,
                                                color='blue darken-1',
                                                children=['Close'],
                                            ),
                                            v.Btn(
                                                text=True,
                                                color='blue darken-1',
                                                children=['Save'],
                                            ),
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Open Dialog'],
                                color='primary',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Open Dialog
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="text-h5">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            label="Legal first name*"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            label="Legal middle name"
                            hint="example of helper text only on focus"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            label="Legal last name*"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="Email*"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="Password*"
                            type="password"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*"
                            required
                            ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Interests"
                            multiple
                            ></v-autocomplete>
                        </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
            </template>

Loader
------

The :py:class:`Dialog <ipyvuetify.Dialog>` component makes it easy to create a
customized loading experience for your application.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        width=300,
                        children=[
                            v.Card(
                                color='primary',
                                dark=True,
                                children=[
                                    v.CardText(
                                        children=[
                                            'Please stand by',
                                            v.ProgressLinear(
                                                indeterminate=True,
                                                color='white',
                                                class_='mb-0',
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    ,
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Start loading'],
                                color='purple darken-2',
                                class_='white--text',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        width=300,
                        children=[
                            v.Card(
                                color='primary',
                                dark=True,
                                children=[
                                    v.CardText(
                                        children=[
                                            'Please stand by',
                                            v.ProgressLinear(
                                                indeterminate=True,
                                                color='white',
                                                class_='mb-0',
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    ,
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Start loading'],
                                color='purple darken-2',
                                class_='white--text',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-btn
                :disabled="dialog"
                :loading="dialog"
                class="white--text"
                color="purple darken-2"
                @click="dialog = true"
                >
                Start loading
                </v-btn>
                <v-dialog
                v-model="dialog"
                hide-overlay
                persistent
                width="300"
                >
                <v-card
                    color="primary"
                    dark
                >
                    <v-card-text>
                    Please stand by
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                    </v-card-text>
                </v-card>
                </v-dialog>
            </div>
            </template>

Nesting
-------

Dialogs can be nested: you can open one dialog from another.

.. todo::

    It's a very chalenging example please help us !

Overflowed
----------

Modals that do not fit within the available window space will scroll the container.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        width=600,
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_='text-h5',
                                        children=['Use Google\'s location service?'],
                                    ),
                                    v.CardText(
                                        children=['''
                                            Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
                                            Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
                                            Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
                                            Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
                                            Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
                                            Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
                                            Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
                                            Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
                                            Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
                                            Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
                                            +
                                        '''],
                                    ),
                                    v.CardActions(
                                        children=[
                                            v.Spacer(),
                                            v.Btn(
                                                color='green darken-1',
                                                children=['Disagree'],
                                            ),
                                            v.Btn(
                                                color='green darken-1',
                                                children=['Agree'],
                                            ),
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Open Dialog'],
                                color='primary',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.Dialog(
                        v_model=False,
                        width=600,
                        children=[
                            v.Card(
                                children=[
                                    v.CardTitle(
                                        class_='text-h5',
                                        children=['Use Google\'s location service?'],
                                    ),
                                    v.CardText(
                                        children=['''
                                            Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
                                            Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
                                            Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
                                            Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
                                            Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
                                            Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
                                            Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
                                            Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
                                            Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
                                            Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
                                            +
                                        '''],
                                    ),
                                    v.CardActions(
                                        children=[
                                            v.Spacer(),
                                            v.Btn(
                                                color='green darken-1',
                                                children=['Disagree'],
                                            ),
                                            v.Btn(
                                                color='green darken-1',
                                                children=['Agree'],
                                            ),
                                        ]
                                    ),
                                ]
                            )
                        ],
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'dialog',
                            'children': v.Btn(
                                children=['Open Dialog'],
                                color='primary',
                                v_bind='dialog.attrs',
                                v_on='dialog.on',
                            ),
                        }],
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-dialog
                v-model="dialog"
                width="600px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Open Dialog
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="text-h5">Use Google's location service?</span>
                    </v-card-title>
                    <v-card-text>
                    Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
                    Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
                    Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
                    Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
                    Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
                    Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
                    Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
                    Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
                    Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
                    Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
                    +
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        Disagree
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        Agree
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
            </template>
