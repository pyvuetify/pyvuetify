SpeedDial
=========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/floating-action-buttons/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SpeedDial <ipyvuetify.SpeedDial>` component has a very robust API for customizing the floating action button experience. Combined with v-btn component, you can create a diverse set of functions available for your users.

.. api::

    :py:class:`ipyvuetify.SpeedDial`

Usage
-----

The speed-dial component lets you display a set of actions that appear on hover or click.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            speed_dial = v.SpeedDial(
                v_model=False,
                direction='top',
                children=[
                    v.Btn(
                        v_slots=[{'name': 'activator', 'children': v.Icon(children=['mdi-plus'])}],
                        color='blue darken-2',
                        dark=True,
                        fab=True
                    ),
                    v.Btn(fab=True, dark=True, small=True, color='green', children=[
                        v.Icon(children=['mdi-pencil'])
                    ]),
                    v.Btn(fab=True, dark=True, small=True, color='red', children=[
                        v.Icon(children=['mdi-delete'])
                    ])
                ]
            )
            speed_dial

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            speed_dial = v.SpeedDial(
                v_model=False,
                direction='top',
                children=[
                    v.Btn(
                        v_slots=[{'name': 'activator', 'children': v.Icon(children=['mdi-plus'])}],
                        color='blue darken-2',
                        dark=True,
                        fab=True
                    ),
                    v.Btn(fab=True, dark=True, small=True, color='green', children=[
                        v.Icon(children=['mdi-pencil'])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-speed-dial v-model="fab" direction="top">
                <template v-slot:activator>
                  <v-btn color="blue darken-2" dark fab>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-btn fab dark small color="green">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-speed-dial>
            </template>

Direction
---------

The direction of the speed dial actions can be controlled with the ``direction`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            speed_dial = v.SpeedDial(
                v_model=False,
                direction='left',
                children=[
                    v.Btn(
                        v_slots=[{'name': 'activator', 'children': v.Icon(children=['mdi-menu'])}],
                        color='purple',
                        dark=True,
                        fab=True
                    ),
                    v.Btn(fab=True, dark=True, small=True, color='indigo', children=[
                        v.Icon(children=['mdi-home'])
                    ]),
                    v.Btn(fab=True, dark=True, small=True, color='blue', children=[
                        v.Icon(children=['mdi-email'])
                    ])
                ]
            )
            speed_dial

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            speed_dial = v.SpeedDial(
                v_model=False,
                direction='left',
                children=[
                    v.Btn(
                        v_slots=[{'name': 'activator', 'children': v.Icon(children=['mdi-menu'])}],
                        color='purple',
                        dark=True,
                        fab=True
                    ),
                    v.Btn(fab=True, dark=True, small=True, color='indigo', children=[
                        v.Icon(children=['mdi-home'])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-speed-dial v-model="fab" direction="left">
                <template v-slot:activator>
                  <v-btn color="purple" dark fab>
                    <v-icon>mdi-menu</v-icon>
                  </v-btn>
                </template>
                <v-btn fab dark small color="indigo">
                  <v-icon>mdi-home</v-icon>
                </v-btn>
              </v-speed-dial>
            </template>
