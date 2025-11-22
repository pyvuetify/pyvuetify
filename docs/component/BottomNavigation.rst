BottomNavigation
================

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/bottom-navigation/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` component is an alternative to the sidebar. It is primarily used for mobile applications and comes in three variants, icons and text, and shift.

.. api::

    :py:class:`ipyvuetify.BottomNavigation`

Usage
-----

While :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` is meant to be used with vue-router, you can also programmatically control the active state of the buttons by using the ``v_model`` property. A button is given a default value of its index with ``v-bottom-navigation``.

.. jupyter-execute::

    import ipyvuetify as v

    bottom_nav = v.BottomNavigation(
        v_model='recent',
        children=[
            v.Btn(
                value='recent',
                children=[
                    v.Html(tag='span', children=['Recent']),
                    v.Icon(children=['mdi-history'])
                ]
            ),
            v.Btn(
                value='favorites',
                children=[
                    v.Html(tag='span', children=['Favorites']),
                    v.Icon(children=['mdi-heart'])
                ]
            ),
            v.Btn(
                value='nearby',
                children=[
                    v.Html(tag='span', children=['Nearby']),
                    v.Icon(children=['mdi-map-marker'])
                ]
            ),
        ]
    )

    v.Container(children=[bottom_nav])

Color
-----

The ``color`` prop applies a color to the background of the bottom navigation. We recommend using the ``light`` and ``dark`` props to properly contrast text color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.BottomNavigation(
                value=1,
                color='primary',
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Recents']),
                        v.Icon(children=['mdi-history'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Favorites']),
                        v.Icon(children=['mdi-heart'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Nearby']),
                        v.Icon(children=['mdi-map-marker'])
                    ]),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.BottomNavigation(
                value=1,
                color='primary',
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Recents']),
                        v.Icon(children=['mdi-history'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Favorites']),
                        v.Icon(children=['mdi-heart'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Nearby']),
                        v.Icon(children=['mdi-map-marker'])
                    ]),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-bottom-navigation
                :value="value"
                color="primary"
              >
                <v-btn>
                  <span>Recents</span>
                  <v-icon>mdi-history</v-icon>
                </v-btn>

                <v-btn>
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn>
                  <span>Nearby</span>
                  <v-icon>mdi-map-marker</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </template>

            <script>
              export default {
                data: () => ({ value: 1 }),
              }
            </script>

Grow
----

Using the ``grow`` property forces :py:class:`Btn <ipyvuetify.Btn>` components to fill all available space. Buttons have a maximum width of 168px per the Bottom Navigation Material Design specification.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.BottomNavigation(
                value=1,
                color='teal',
                grow=True,
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Recents']),
                        v.Icon(children=['mdi-history'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Favorites']),
                        v.Icon(children=['mdi-heart'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Nearby']),
                        v.Icon(children=['mdi-map-marker'])
                    ]),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.BottomNavigation(
                value=1,
                color='teal',
                grow=True,
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Recents']),
                        v.Icon(children=['mdi-history'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Favorites']),
                        v.Icon(children=['mdi-heart'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Nearby']),
                        v.Icon(children=['mdi-map-marker'])
                    ]),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-bottom-navigation
                :value="value"
                color="teal"
                grow
              >
                <v-btn>
                  <span>Recents</span>
                  <v-icon>mdi-history</v-icon>
                </v-btn>

                <v-btn>
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn>
                  <span>Nearby</span>
                  <v-icon>mdi-map-marker</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </template>

            <script>
              export default {
                data: () => ({ value: 1 }),
              }
            </script>

Hide on scroll
--------------

The :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` component hides when scrolling up when using the ``hide_on_scroll`` property. This is similar to the scrolling techniques that are supported in :py:class:`AppBar <ipyvuetify.AppBar>`. In the following example, scroll up and down to see this behavior.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden mx-auto',
                height=200,
                max_width=500,
                children=[
                    v.BottomNavigation(
                        absolute=True,
                        hide_on_scroll=True,
                        horizontal=True,
                        scroll_target='#hide-on-scroll-example',
                        children=[
                            v.Btn(
                                color='deep-purple accent-4',
                                text=True,
                                children=[
                                    v.Html(tag='span', children=['Recents']),
                                    v.Icon(children=['mdi-history'])
                                ]
                            ),
                            v.Btn(
                                color='deep-purple accent-4',
                                text=True,
                                children=[
                                    v.Html(tag='span', children=['Favorites']),
                                    v.Icon(children=['mdi-heart'])
                                ]
                            ),
                            v.Btn(
                                color='deep-purple accent-4',
                                text=True,
                                children=[
                                    v.Html(tag='span', children=['Nearby']),
                                    v.Icon(children=['mdi-map-marker'])
                                ]
                            ),
                        ]
                    ),
                    v.Responsive(
                        id='hide-on-scroll-example',
                        class_='overflow-y-auto',
                        max_height=600,
                        children=[
                            v.Responsive(height=1500)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden mx-auto',
                height=200,
                max_width=500,
                children=[
                    v.BottomNavigation(
                        absolute=True,
                        hide_on_scroll=True,
                        horizontal=True,
                        scroll_target='#hide-on-scroll-example',
                        children=[
                            v.Btn(
                                color='deep-purple accent-4',
                                text=True,
                                children=[
                                    v.Html(tag='span', children=['Recents']),
                                    v.Icon(children=['mdi-history'])
                                ]
                            ),
                            v.Btn(
                                color='deep-purple accent-4',
                                text=True,
                                children=[
                                    v.Html(tag='span', children=['Favorites']),
                                    v.Icon(children=['mdi-heart'])
                                ]
                            ),
                            v.Btn(
                                color='deep-purple accent-4',
                                text=True,
                                children=[
                                    v.Html(tag='span', children=['Nearby']),
                                    v.Icon(children=['mdi-map-marker'])
                                ]
                            ),
                        ]
                    ),
                    v.Responsive(
                        id='hide-on-scroll-example',
                        class_='overflow-y-auto',
                        max_height=600,
                        children=[
                            v.Responsive(height=1500)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-card
                class="overflow-hidden mx-auto"
                height="200"
                max-width="500"
              >
                <v-bottom-navigation
                  absolute
                  hide-on-scroll
                  horizontal
                  scroll-target="#hide-on-scroll-example"
                >
                  <v-btn
                    color="deep-purple accent-4"
                    text
                  >
                    <span>Recents</span>
                    <v-icon>mdi-history</v-icon>
                  </v-btn>

                  <v-btn
                    color="deep-purple accent-4"
                    text
                  >
                    <span>Favorites</span>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn
                    color="deep-purple accent-4"
                    text
                  >
                    <span>Nearby</span>
                    <v-icon>mdi-map-marker</v-icon>
                  </v-btn>
                </v-bottom-navigation>

                <v-responsive
                  id="hide-on-scroll-example"
                  class="overflow-y-auto"
                  max-height="600"
                >
                  <v-responsive height="1500"></v-responsive>
                </v-responsive>
              </v-card>
            </template>

Horizontal
----------

Adjust the style of buttons and icons by using the ``horizontal`` prop. This positions button text inline with the provided :py:class:`Icon <ipyvuetify.Icon>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.BottomNavigation(
                value=1,
                color='primary',
                horizontal=True,
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Recents']),
                        v.Icon(children=['mdi-history'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Favorites']),
                        v.Icon(children=['mdi-heart'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Nearby']),
                        v.Icon(children=['mdi-map-marker'])
                    ]),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.BottomNavigation(
                value=1,
                color='primary',
                horizontal=True,
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Recents']),
                        v.Icon(children=['mdi-history'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Favorites']),
                        v.Icon(children=['mdi-heart'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Nearby']),
                        v.Icon(children=['mdi-map-marker'])
                    ]),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-bottom-navigation
                :value="value"
                color="primary"
                horizontal
              >
                <v-btn>
                  <span>Recents</span>
                  <v-icon>mdi-history</v-icon>
                </v-btn>

                <v-btn>
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn>
                  <span>Nearby</span>
                  <v-icon>mdi-map-marker</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </template>

            <script>
              export default {
                data: () => ({ value: 1 }),
              }
            </script>

Scroll threshold
----------------

Modify the ``scroll_threshold`` property to increase the distance a user must scroll before the :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` is hidden.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto overflow-hidden',
                height=200,
                max_width=500,
                children=[
                    v.BottomNavigation(
                        absolute=True,
                        color='white',
                        hide_on_scroll=True,
                        horizontal=True,
                        scroll_target='#scroll-threshold-example',
                        scroll_threshold=500,
                        children=[
                            v.Btn(children=[
                                v.Html(tag='span', children=['Recents']),
                                v.Icon(children=['mdi-history'])
                            ]),
                            v.Btn(children=[
                                v.Html(tag='span', children=['Favorites']),
                                v.Icon(children=['mdi-heart'])
                            ]),
                            v.Btn(children=[
                                v.Html(tag='span', children=['Nearby']),
                                v.Icon(children=['mdi-map-marker'])
                            ]),
                        ]
                    ),
                    v.Sheet(
                        id='scroll-threshold-example',
                        class_='overflow-y-auto pb-16',
                        max_height=600,
                        children=[
                            v.Responsive(height=1500)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto overflow-hidden',
                height=200,
                max_width=500,
                children=[
                    v.BottomNavigation(
                        absolute=True,
                        color='white',
                        hide_on_scroll=True,
                        horizontal=True,
                        scroll_target='#scroll-threshold-example',
                        scroll_threshold=500,
                        children=[
                            v.Btn(children=[
                                v.Html(tag='span', children=['Recents']),
                                v.Icon(children=['mdi-history'])
                            ]),
                            v.Btn(children=[
                                v.Html(tag='span', children=['Favorites']),
                                v.Icon(children=['mdi-heart'])
                            ]),
                            v.Btn(children=[
                                v.Html(tag='span', children=['Nearby']),
                                v.Icon(children=['mdi-map-marker'])
                            ]),
                        ]
                    ),
                    v.Sheet(
                        id='scroll-threshold-example',
                        class_='overflow-y-auto pb-16',
                        max_height=600,
                        children=[
                            v.Responsive(height=1500)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-card
                class="mx-auto overflow-hidden"
                height="200"
                max-width="500"
              >
                <v-bottom-navigation
                  absolute
                  color="white"
                  hide-on-scroll
                  horizontal
                  scroll-target="#scroll-threshold-example"
                  scroll-threshold="500"
                >
                  <v-btn>
                    <span>Recents</span>
                    <v-icon>mdi-history</v-icon>
                  </v-btn>

                  <v-btn>
                    <span>Favorites</span>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn>
                    <span>Nearby</span>
                    <v-icon>mdi-map-marker</v-icon>
                  </v-btn>
                </v-bottom-navigation>

                <v-sheet
                  id="scroll-threshold-example"
                  class="overflow-y-auto pb-16"
                  max-height="600"
                >
                  <v-responsive height="1500"></v-responsive>
                </v-sheet>
              </v-card>
            </template>

Shift
-----

The ``shift`` prop hides button text when not active. This provides an alternative visual style to the :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. code-block:: python

            import ipyvuetify as v

            value_state = v.use_state(1)

            colors = ['blue-grey', 'teal', 'brown', 'indigo']

            bottom_nav = v.BottomNavigation(
                v_model=1,
                background_color=colors[1],
                dark=True,
                shift=True,
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Video']),
                        v.Icon(children=['mdi-television-play'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Music']),
                        v.Icon(children=['mdi-music-note'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Book']),
                        v.Icon(children=['mdi-book'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Image']),
                        v.Icon(children=['mdi-image'])
                    ]),
                ]
            )

            def update_color(widget, event, data):
                value_state.set(data)
                if data < len(colors):
                    bottom_nav.background_color = colors[data]

            bottom_nav.on_event('change', update_color)

            v.Container(children=[bottom_nav])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            value = 1
            colors = ['blue-grey', 'teal', 'brown', 'indigo']

            bottom_nav = v.BottomNavigation(
                v_model=1,
                background_color=colors[1],
                dark=True,
                shift=True,
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Video']),
                        v.Icon(children=['mdi-television-play'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Music']),
                        v.Icon(children=['mdi-music-note'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Book']),
                        v.Icon(children=['mdi-book'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Image']),
                        v.Icon(children=['mdi-image'])
                    ]),
                ]
            )

            def update_color(widget, event, data):
                global value
                value = data
                if data < len(colors):
                    bottom_nav.background_color = colors[data]

            bottom_nav.on_event('change', update_color)

            v.Container(children=[bottom_nav])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-bottom-navigation
                v-model="value"
                :background-color="color"
                dark
                shift
              >
                <v-btn>
                  <span>Video</span>
                  <v-icon>mdi-television-play</v-icon>
                </v-btn>

                <v-btn>
                  <span>Music</span>
                  <v-icon>mdi-music-note</v-icon>
                </v-btn>

                <v-btn>
                  <span>Book</span>
                  <v-icon>mdi-book</v-icon>
                </v-btn>

                <v-btn>
                  <span>Image</span>
                  <v-icon>mdi-image</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </template>

            <script>
              export default {
                data: () => ({ value: 1 }),
                computed: {
                  color () {
                    switch (this.value) {
                      case 0: return 'blue-grey'
                      case 1: return 'teal'
                      case 2: return 'brown'
                      case 3: return 'indigo'
                      default: return 'blue-grey'
                    }
                  },
                },
              }
            </script>

Toggle
------

The display state of :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>` can be toggled using the ``input_value`` prop. You can also control the currently active button using ``v_model``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. code-block:: python

            import ipyvuetify as v

            active_state = v.use_state(True)

            toggle_btn = v.Btn(
                color='deep-purple',
                outlined=True,
                children=['Toggle Navigation']
            )

            bottom_nav = v.BottomNavigation(
                v_model=1,
                input_value=True,
                color='indigo',
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Recents']),
                        v.Icon(children=['mdi-history'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Favorites']),
                        v.Icon(children=['mdi-heart'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Nearby']),
                        v.Icon(children=['mdi-map-marker'])
                    ]),
                ]
            )

            def toggle_navigation(widget, event, data):
                current = active_state.value
                active_state.set(not current)
                bottom_nav.input_value = not current

            toggle_btn.on_event('click', toggle_navigation)

            v.Container(
                class_='overflow-hidden',
                children=[
                    v.Html(
                        tag='div',
                        class_='text-center mb-8',
                        children=[toggle_btn]
                    ),
                    bottom_nav
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            active = True

            toggle_btn = v.Btn(
                color='deep-purple',
                outlined=True,
                children=['Toggle Navigation']
            )

            bottom_nav = v.BottomNavigation(
                v_model=1,
                input_value=True,
                color='indigo',
                children=[
                    v.Btn(children=[
                        v.Html(tag='span', children=['Recents']),
                        v.Icon(children=['mdi-history'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Favorites']),
                        v.Icon(children=['mdi-heart'])
                    ]),
                    v.Btn(children=[
                        v.Html(tag='span', children=['Nearby']),
                        v.Icon(children=['mdi-map-marker'])
                    ]),
                ]
            )

            def toggle_navigation(widget, event, data):
                global active
                active = not active
                bottom_nav.input_value = active

            toggle_btn.on_event('click', toggle_navigation)

            v.Container(
                class_='overflow-hidden',
                children=[
                    v.Html(
                        tag='div',
                        class_='text-center mb-8',
                        children=[toggle_btn]
                    ),
                    bottom_nav
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div class="overflow-hidden">
                <div class="text-center mb-8">
                  <v-btn
                    color="deep-purple"
                    outlined
                    @click="active = !active"
                  >
                    Toggle Navigation
                  </v-btn>
                </div>

                <v-bottom-navigation
                  v-model="value"
                  :input-value="active"
                  color="indigo"
                >
                  <v-btn>
                    <span>Recents</span>
                    <v-icon>mdi-history</v-icon>
                  </v-btn>

                  <v-btn>
                    <span>Favorites</span>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn>
                    <span>Nearby</span>
                    <v-icon>mdi-map-marker</v-icon>
                  </v-btn>
                </v-bottom-navigation>
              </div>
            </template>

            <script>
              export default {
                data () {
                  return {
                    value: 1,
                    active: true,
                  }
                },
              }
            </script>
