Window
======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/windows/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Window <ipyvuetify.Window>` component provides the baseline functionality for transitioning content from 1 pane to another. Other components such as v-tabs, v-carousel and v-stepper utilize this component at their core.

.. api::

    :py:class:`ipyvuetify.Window`

Usage
-----

Designed to easily cycle through content, ``v-window`` provides a simple interface to create truly custom implementations.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            window = v.Window(
                v_model=0,
                children=[
                    v.WindowItem(children=[
                        v.Card(flat=True, children=[
                            v.CardTitle(children=['Window 1']),
                            v.CardText(children=['Content for window 1'])
                        ])
                    ]),
                    v.WindowItem(children=[
                        v.Card(flat=True, children=[
                            v.CardTitle(children=['Window 2']),
                            v.CardText(children=['Content for window 2'])
                        ])
                    ]),
                    v.WindowItem(children=[
                        v.Card(flat=True, children=[
                            v.CardTitle(children=['Window 3']),
                            v.CardText(children=['Content for window 3'])
                        ])
                    ])
                ]
            )

            prev_btn = v.Btn(children=['Prev'])
            next_btn = v.Btn(children=['Next'])

            def on_prev(widget, event, data):
                if window.v_model > 0:
                    window.v_model -= 1

            def on_next(widget, event, data):
                if window.v_model < 2:
                    window.v_model += 1

            prev_btn.on_event('click', on_prev)
            next_btn.on_event('click', on_next)

            v.Container(children=[window, prev_btn, next_btn])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            window = v.Window(
                v_model=0,
                children=[
                    v.WindowItem(children=[
                        v.Card(flat=True, children=[
                            v.CardTitle(children=['Window 1']),
                            v.CardText(children=['Content 1'])
                        ])
                    ]),
                    v.WindowItem(children=[
                        v.Card(flat=True, children=[
                            v.CardTitle(children=['Window 2']),
                            v.CardText(children=['Content 2'])
                        ])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-window v-model="window">
                <v-window-item>
                  <v-card flat>
                    <v-card-title>Window 1</v-card-title>
                    <v-card-text>Content 1</v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item>
                  <v-card flat>
                    <v-card-title>Window 2</v-card-title>
                    <v-card-text>Content 2</v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </template>

Reverse
-------

Reverse ``v-window`` always displays reverse transition.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            window = v.Window(
                v_model=0,
                reverse=True,
                children=[
                    v.WindowItem(children=[
                        v.Card(flat=True, children=['Slide 1'])
                    ]),
                    v.WindowItem(children=[
                        v.Card(flat=True, children=['Slide 2'])
                    ])
                ]
            )
            window

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            window = v.Window(
                v_model=0,
                reverse=True,
                children=[
                    v.WindowItem(children=[
                        v.Card(flat=True, children=['Slide 1'])
                    ]),
                    v.WindowItem(children=[
                        v.Card(flat=True, children=['Slide 2'])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-window v-model="window" reverse>
                <v-window-item>
                  <v-card flat>Slide 1</v-card>
                </v-window-item>
                <v-window-item>
                  <v-card flat>Slide 2</v-card>
                </v-window-item>
              </v-window>
            </template>
