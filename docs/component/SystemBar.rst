SystemBar
=========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/system-bars/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SystemBar <ipyvuetify.SystemBar>` component can be used for displaying statuses to the user. It looks like the Android system bar and can contain icons, spacers, and some text.

.. api::

    :py:class:`ipyvuetify.SystemBar`

Usage
-----

``v-system-bar`` in its simplest form displays a small container with default theme.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.SystemBar(children=[
                v.Icon(children=['mdi-wifi']),
                v.Icon(children=['mdi-signal']),
                v.Icon(children=['mdi-battery']),
                v.Spacer(),
                '12:30'
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.SystemBar(children=[
                v.Icon(children=['mdi-wifi']),
                v.Icon(children=['mdi-signal']),
                v.Icon(children=['mdi-battery']),
                v.Spacer(),
                '12:30'
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-system-bar>
                <v-icon>mdi-wifi</v-icon>
                <v-icon>mdi-signal</v-icon>
                <v-icon>mdi-battery</v-icon>
                <v-spacer></v-spacer>
                12:30
              </v-system-bar>
            </template>

Color
-----

You can optionally change the color of the ``v-system-bar`` by using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.SystemBar(color='primary', dark=True, children=[
                    v.Icon(children=['mdi-wifi']),
                    v.Spacer(),
                    '12:30'
                ]),
                v.SystemBar(color='success', dark=True, children=[
                    v.Icon(children=['mdi-signal']),
                    v.Spacer(),
                    '12:30'
                ]),
                v.SystemBar(color='error', dark=True, children=[
                    v.Icon(children=['mdi-battery']),
                    v.Spacer(),
                    '12:30'
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.SystemBar(color='primary', dark=True, children=[
                    v.Icon(children=['mdi-wifi']),
                    v.Spacer(),
                    '12:30'
                ]),
                v.SystemBar(color='success', dark=True, children=[
                    v.Icon(children=['mdi-signal']),
                    v.Spacer(),
                    '12:30'
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-system-bar color="primary" dark>
                  <v-icon>mdi-wifi</v-icon>
                  <v-spacer></v-spacer>
                  12:30
                </v-system-bar>
                <v-system-bar color="success" dark>
                  <v-icon>mdi-signal</v-icon>
                  <v-spacer></v-spacer>
                  12:30
                </v-system-bar>
              </v-container>
            </template>
