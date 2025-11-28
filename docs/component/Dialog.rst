Dialog
======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/dialogs/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Dialog <ipyvuetify.Dialog>` component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.

.. api::

    :py:class:`ipyvuetify.Dialog`

Usage
-----

A dialog contains two slots, one for its activator and one for its content (default).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            close_btn = v.Btn(
                color='primary',
                text=True,
                children=['Close']
            )

            dialog = v.Dialog(
                width='500',
                v_model=False,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='primary',
                        dark=True,
                        children=['Open Dialog']
                    )
                }],
                children=[
                    v.Card(children=[
                        v.CardTitle(
                            class_='text-h5',
                            children=['Privacy Policy']
                        ),
                        v.CardText(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        ]),
                        v.CardActions(children=[
                            v.Spacer(),
                            close_btn
                        ])
                    ])
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(dialog, 'v_model', False))

            v.Container(children=[dialog])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            close_btn = v.Btn(
                color='primary',
                text=True,
                children=['Close']
            )

            dialog = v.Dialog(
                width='500',
                v_model=False,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='primary',
                        dark=True,
                        children=['Open Dialog']
                    )
                }],
                children=[
                    v.Card(children=[
                        v.CardTitle(
                            class_='text-h5',
                            children=['Privacy Policy']
                        ),
                        v.CardText(children=[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        ]),
                        v.CardActions(children=[
                            v.Spacer(),
                            close_btn
                        ])
                    ])
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(dialog, 'v_model', False))

            v.Container(children=[dialog])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-dialog
                v-model="dialog"
                max-width="500"
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
                    Privacy Policy
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>

            <script>
              export default {
                data: () => ({
                  dialog: false,
                }),
              }
            </script>

Persistent
----------

Similar to a Simple Dialog, except that it's not dismissed when touching outside or pressing esc key.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            close_btn = v.Btn(
                color='primary',
                text=True,
                children=['Close']
            )

            dialog = v.Dialog(
                width='500',
                v_model=False,
                persistent=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='primary',
                        dark=True,
                        children=['Open Persistent Dialog']
                    )
                }],
                children=[
                    v.Card(children=[
                        v.CardTitle(
                            class_='text-h5',
                            children=['Use Google location service?']
                        ),
                        v.CardText(children=[
                            'Let Google help apps determine location. This means sending anonymous location data to Google.'
                        ]),
                        v.CardActions(children=[
                            v.Spacer(),
                            v.Btn(
                                color='green darken-1',
                                text=True,
                                children=['Disagree'],
                                on_event=('click', lambda *args: setattr(dialog, 'v_model', False))
                            ),
                            close_btn
                        ])
                    ])
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(dialog, 'v_model', False))

            v.Container(children=[dialog])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            close_btn = v.Btn(
                color='primary',
                text=True,
                children=['Close']
            )

            dialog = v.Dialog(
                width='500',
                v_model=False,
                persistent=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='primary',
                        dark=True,
                        children=['Open Persistent Dialog']
                    )
                }],
                children=[
                    v.Card(children=[
                        v.CardTitle(
                            class_='text-h5',
                            children=['Use Google location service?']
                        ),
                        v.CardText(children=[
                            'Let Google help apps determine location.'
                        ]),
                        v.CardActions(children=[
                            v.Spacer(),
                            v.Btn(
                                color='green darken-1',
                                text=True,
                                children=['Disagree'],
                                on_event=('click', lambda *args: setattr(dialog, 'v_model', False))
                            ),
                            close_btn
                        ])
                    ])
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(dialog, 'v_model', False))

            v.Container(children=[dialog])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-dialog
                v-model="dialog"
                persistent
                max-width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Open Persistent Dialog
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5">
                    Use Google location service?
                  </v-card-title>
                  <v-card-text>
                    Let Google help apps determine location.
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
            </template>

            <script>
              export default {
                data: () => ({
                  dialog: false,
                }),
              }
            </script>

Scrollable
----------

Example of a dialog with scrollable content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            close_btn = v.Btn(
                color='blue darken-1',
                text=True,
                children=['Close']
            )

            dialog = v.Dialog(
                width='500',
                v_model=False,
                scrollable=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='primary',
                        dark=True,
                        children=['Open Scrollable Dialog']
                    )
                }],
                children=[
                    v.Card(children=[
                        v.CardTitle(children=['Select Country']),
                        v.Divider(),
                        v.CardText(
                            style_='height: 300px;',
                            children=[
                                v.RadioGroup(
                                    v_model=None,
                                    children=[
                                        v.Radio(label='Bahamas, The', value='bahamas'),
                                        v.Radio(label='Bahrain', value='bahrain'),
                                        v.Radio(label='Bangladesh', value='bangladesh'),
                                        v.Radio(label='Barbados', value='barbados'),
                                        v.Radio(label='Belarus', value='belarus'),
                                        v.Radio(label='Belgium', value='belgium'),
                                        v.Radio(label='Belize', value='belize'),
                                        v.Radio(label='Benin', value='benin'),
                                    ]
                                )
                            ]
                        ),
                        v.Divider(),
                        v.CardActions(children=[
                            v.Spacer(),
                            close_btn
                        ])
                    ])
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(dialog, 'v_model', False))

            v.Container(children=[dialog])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            close_btn = v.Btn(
                color='blue darken-1',
                text=True,
                children=['Close']
            )

            dialog = v.Dialog(
                width='500',
                v_model=False,
                scrollable=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='primary',
                        dark=True,
                        children=['Open Scrollable Dialog']
                    )
                }],
                children=[
                    v.Card(children=[
                        v.CardTitle(children=['Select Country']),
                        v.Divider(),
                        v.CardText(
                            style_='height: 300px;',
                            children=[
                                v.RadioGroup(
                                    v_model=None,
                                    children=[
                                        v.Radio(label='Bahamas', value='bahamas'),
                                        v.Radio(label='Bahrain', value='bahrain'),
                                        v.Radio(label='Bangladesh', value='bangladesh'),
                                    ]
                                )
                            ]
                        ),
                        v.Divider(),
                        v.CardActions(children=[
                            v.Spacer(),
                            close_btn
                        ])
                    ])
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(dialog, 'v_model', False))

            v.Container(children=[dialog])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-dialog
                v-model="dialog"
                scrollable
                max-width="500px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Open Scrollable Dialog
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>Select Country</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text style="height: 300px;">
                    <v-radio-group
                      v-model="dialogSelection"
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
                    </v-radio-group>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>

            <script>
              export default {
                data: () => ({
                  dialog: false,
                  dialogSelection: null,
                }),
              }
            </script>

Fullscreen
----------

Due to limited space, full-screen dialogs may be more appropriate for mobile devices.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            close_btn = v.Btn(
                icon=True,
                dark=True,
                children=[v.Icon(children=['mdi-close'])]
            )

            dialog = v.Dialog(
                v_model=False,
                fullscreen=True,
                hide_overlay=True,
                transition='dialog-bottom-transition',
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='primary',
                        dark=True,
                        children=['Open Fullscreen Dialog']
                    )
                }],
                children=[
                    v.Card(children=[
                        v.Toolbar(
                            dark=True,
                            color='primary',
                            children=[
                                close_btn,
                                v.ToolbarTitle(children=['Settings']),
                                v.Spacer(),
                                v.Btn(
                                    dark=True,
                                    text=True,
                                    children=['Save']
                                )
                            ]
                        ),
                        v.CardText(
                            class_='pa-4',
                            children=[
                                v.Html(tag='div', children=['This is a fullscreen dialog'])
                            ]
                        )
                    ])
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(dialog, 'v_model', False))

            v.Container(children=[dialog])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            close_btn = v.Btn(
                icon=True,
                dark=True,
                children=[v.Icon(children=['mdi-close'])]
            )

            dialog = v.Dialog(
                v_model=False,
                fullscreen=True,
                hide_overlay=True,
                transition='dialog-bottom-transition',
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='primary',
                        dark=True,
                        children=['Open Fullscreen Dialog']
                    )
                }],
                children=[
                    v.Card(children=[
                        v.Toolbar(
                            dark=True,
                            color='primary',
                            children=[
                                close_btn,
                                v.ToolbarTitle(children=['Settings']),
                                v.Spacer(),
                                v.Btn(dark=True, text=True, children=['Save'])
                            ]
                        ),
                        v.CardText(
                            class_='pa-4',
                            children=['This is a fullscreen dialog']
                        )
                    ])
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(dialog, 'v_model', False))

            v.Container(children=[dialog])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
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
                    Open Fullscreen Dialog
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
                  <v-card-text class="pa-4">
                    This is a fullscreen dialog
                  </v-card-text>
                </v-card>
              </v-dialog>
            </template>

            <script>
              export default {
                data: () => ({
                  dialog: false,
                }),
              }
            </script>
