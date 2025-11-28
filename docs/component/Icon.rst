Icon
====

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/icons/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Icon <ipyvuetify.Icon>` component provides a large set of glyphs to provide context to various aspects of your application. For a list of all available icons, visit the official Material Design Icons page. To use any of these icons simply use the ``mdi-`` prefix followed by the icon name.

.. api::

    :py:class:`ipyvuetify.Icon`

Usage
-----

Icons come in two themes (light and dark), and five different sizes (x-small, small, medium (default), large, and x-large).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.Icon(x_small=True, children=['mdi-home'])]),
                    v.Col(children=[v.Icon(small=True, children=['mdi-home'])]),
                    v.Col(children=[v.Icon(children=['mdi-home'])]),
                    v.Col(children=[v.Icon(large=True, children=['mdi-home'])]),
                    v.Col(children=[v.Icon(x_large=True, children=['mdi-home'])])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.Icon(x_small=True, children=['mdi-home'])]),
                    v.Col(children=[v.Icon(small=True, children=['mdi-home'])]),
                    v.Col(children=[v.Icon(children=['mdi-home'])]),
                    v.Col(children=[v.Icon(large=True, children=['mdi-home'])]),
                    v.Col(children=[v.Icon(x_large=True, children=['mdi-home'])])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-row>
                  <v-col><v-icon x-small>mdi-home</v-icon></v-col>
                  <v-col><v-icon small>mdi-home</v-icon></v-col>
                  <v-col><v-icon>mdi-home</v-icon></v-col>
                  <v-col><v-icon large>mdi-home</v-icon></v-col>
                  <v-col><v-icon x-large>mdi-home</v-icon></v-col>
                </v-row>
              </v-container>
            </template>

Color
-----

Using color helpers you can change the color of an icon from the standard dark and light themes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.Icon(color='red', children=['mdi-heart'])]),
                    v.Col(children=[v.Icon(color='blue', children=['mdi-star'])]),
                    v.Col(children=[v.Icon(color='green', children=['mdi-check-circle'])]),
                    v.Col(children=[v.Icon(color='orange', children=['mdi-fire'])]),
                    v.Col(children=[v.Icon(color='purple', children=['mdi-bell'])])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.Icon(color='red', children=['mdi-heart'])]),
                    v.Col(children=[v.Icon(color='blue', children=['mdi-star'])]),
                    v.Col(children=[v.Icon(color='green', children=['mdi-check-circle'])]),
                    v.Col(children=[v.Icon(color='orange', children=['mdi-fire'])]),
                    v.Col(children=[v.Icon(color='purple', children=['mdi-bell'])])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-row>
                  <v-col><v-icon color="red">mdi-heart</v-icon></v-col>
                  <v-col><v-icon color="blue">mdi-star</v-icon></v-col>
                  <v-col><v-icon color="green">mdi-check-circle</v-icon></v-col>
                  <v-col><v-icon color="orange">mdi-fire</v-icon></v-col>
                  <v-col><v-icon color="purple">mdi-bell</v-icon></v-col>
                </v-row>
              </v-container>
            </template>

Buttons
-------

Icons can be used inside of buttons to add emphasis to the action.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(
                    color='success',
                    children=[
                        v.Icon(left=True, children=['mdi-check-circle']),
                        'Accept'
                    ]
                ),
                v.Btn(
                    color='error',
                    class_='ml-2',
                    children=[
                        v.Icon(left=True, children=['mdi-close-circle']),
                        'Decline'
                    ]
                ),
                v.Btn(
                    disabled=True,
                    class_='ml-2',
                    children=[
                        v.Icon(left=True, children=['mdi-cancel']),
                        'Cancel'
                    ]
                )
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(
                    color='success',
                    children=[
                        v.Icon(left=True, children=['mdi-check-circle']),
                        'Accept'
                    ]
                ),
                v.Btn(
                    color='error',
                    children=[
                        v.Icon(left=True, children=['mdi-close-circle']),
                        'Decline'
                    ]
                ),
                v.Btn(
                    disabled=True,
                    children=[
                        v.Icon(left=True, children=['mdi-cancel']),
                        'Cancel'
                    ]
                )
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-btn color="success">
                  <v-icon left>mdi-check-circle</v-icon>
                  Accept
                </v-btn>
                <v-btn color="error">
                  <v-icon left>mdi-close-circle</v-icon>
                  Decline
                </v-btn>
                <v-btn disabled>
                  <v-icon left>mdi-cancel</v-icon>
                  Cancel
                </v-btn>
              </v-container>
            </template>
