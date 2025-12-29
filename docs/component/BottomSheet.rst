BottomSheet
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/bottom-sheets/>`_.
    All examples have been converted to ipyvuetify syntax.

The bottom sheet is a modified :py:class:`Dialog <ipyvuetify.Dialog>` that slides from the bottom of the screen, similar to a :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>`. Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet can contain anything.

.. api::

    :py:class:`ipyvuetify.BottomSheet`

Usage
-----

Here we display an example list of actions that could be present in an application.

.. jupyter-execute::

    import ipyvuetify as v

    close_btn = v.Btn(
        class_='my-6',
        depressed=True,
        color='error',
        children=['close']
    )

    bottom_sheet = v.BottomSheet(
        v_model=False,
        v_slots=[{
            'name': 'activator',
            'variable': 'x',
            'children': v.Btn(
                color='purple',
                dark=True,
                children=['Open Playground']
            )
        }],
        children=[
            v.Sheet(
                class_='text-center',
                height='200px',
                children=[close_btn]
            )
        ]
    )

    close_btn.on_event('click', lambda *args: setattr(bottom_sheet, 'v_model', False))

    v.Container(
        class_='fill-height',
        children=[
            v.Row(
                align='center',
                justify='center',
                children=[bottom_sheet]
            )
        ]
    )

Inset
-----

Bottom sheets can be inset, reducing their maximum width on desktop to 70%. This can be further reduced manually using the ``width`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            close_btn = v.Btn(
                class_='mt-6',
                text=True,
                color='error',
                children=['close']
            )

            bottom_sheet = v.BottomSheet(
                v_model=False,
                inset=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='orange',
                        dark=True,
                        children=['Open Inset']
                    )
                }],
                children=[
                    v.Sheet(
                        class_='text-center',
                        height='200px',
                        children=[
                            close_btn,
                            v.Html(tag='div', class_='my-3', children=['This is a bottom sheet using the inset prop'])
                        ]
                    )
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(bottom_sheet, 'v_model', False))

            v.Container(class_='text-center', children=[bottom_sheet])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            sheet = False

            open_btn = v.Btn(
                color='orange',
                dark=True,
                children=['Open Inset']
            )

            close_btn = v.Btn(
                class_='mt-6',
                text=True,
                color='error',
                children=['close']
            )

            bottom_sheet = v.BottomSheet(
                v_model=False,
                inset=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': open_btn
                }],
                children=[
                    v.Sheet(
                        class_='text-center',
                        height='200px',
                        children=[
                            close_btn,
                            v.Html(tag='div', class_='my-3', children=['This is a bottom sheet using the inset prop'])
                        ]
                    )
                ]
            )

            def toggle_sheet(*args):
                global sheet
                sheet = not sheet
                bottom_sheet.v_model = sheet

            open_btn.on_event('click', toggle_sheet)
            close_btn.on_event('click', toggle_sheet)

            v.Container(class_='text-center', children=[bottom_sheet])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div class="text-center">
                <v-bottom-sheet
                  v-model="sheet"
                  inset
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="orange"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Open Inset
                    </v-btn>
                  </template>
                  <v-sheet
                    class="text-center"
                    height="200px"
                  >
                    <v-btn
                      class="mt-6"
                      text
                      color="error"
                      @click="sheet = !sheet"
                    >
                      close
                    </v-btn>
                    <div class="my-3">
                      This is a bottom sheet using the inset prop
                    </div>
                  </v-sheet>
                </v-bottom-sheet>
              </div>
            </template>

            <script>
              export default {
                data: () => ({
                  sheet: false,
                }),
              }
            </script>

Model
-----

Bottom sheets can be controlled using ``v_model``. You can use it to close them or if you can't use ``activator`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            open_btn = v.Btn(
                color='blue',
                dark=True,
                children=['Open v-model']
            )

            close_btn = v.Btn(
                class_='mt-6',
                text=True,
                color='red',
                children=['close']
            )

            bottom_sheet = v.BottomSheet(
                v_model=False,
                children=[
                    v.Sheet(
                        class_='text-center',
                        height='200px',
                        children=[
                            close_btn,
                            v.Html(tag='div', class_='py-3', children=['This is a bottom sheet using the controlled by v-model instead of activator'])
                        ]
                    )
                ]
            )

            def toggle_sheet(*args):
                bottom_sheet.v_model = not bottom_sheet.v_model

            open_btn.on_event('click', toggle_sheet)
            close_btn.on_event('click', toggle_sheet)

            v.Container(class_='text-center', children=[open_btn, bottom_sheet])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            sheet = False

            open_btn = v.Btn(
                color='blue',
                dark=True,
                children=['Open v-model']
            )

            close_btn = v.Btn(
                class_='mt-6',
                text=True,
                color='red',
                children=['close']
            )

            bottom_sheet = v.BottomSheet(
                v_model=False,
                children=[
                    v.Sheet(
                        class_='text-center',
                        height='200px',
                        children=[
                            close_btn,
                            v.Html(tag='div', class_='py-3', children=['This is a bottom sheet using the controlled by v-model instead of activator'])
                        ]
                    )
                ]
            )

            def toggle_sheet(*args):
                global sheet
                sheet = not sheet
                bottom_sheet.v_model = sheet

            open_btn.on_event('click', toggle_sheet)
            close_btn.on_event('click', toggle_sheet)

            v.Container(class_='text-center', children=[open_btn, bottom_sheet])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div class="text-center">
                <v-btn
                  color="blue"
                  dark
                  @click="sheet = !sheet"
                >
                  Open v-model
                </v-btn>
                <v-bottom-sheet v-model="sheet">
                  <v-sheet
                    class="text-center"
                    height="200px"
                  >
                    <v-btn
                      class="mt-6"
                      text
                      color="red"
                      @click="sheet = !sheet"
                    >
                      close
                    </v-btn>
                    <div class="py-3">
                      This is a bottom sheet using the controlled by v-model instead of activator
                    </div>
                  </v-sheet>
                </v-bottom-sheet>
              </div>
            </template>

            <script>
              export default {
                data: () => ({
                  sheet: false,
                }),
              }
            </script>

Persistent
----------

Persistent bottom sheets can't be closed by clicking outside them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            close_btn = v.Btn(
                class_='mt-6',
                text=True,
                color='error',
                children=['close']
            )

            bottom_sheet = v.BottomSheet(
                v_model=False,
                persistent=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='green',
                        dark=True,
                        children=['Open Persistent']
                    )
                }],
                children=[
                    v.Sheet(
                        class_='text-center',
                        height='200px',
                        children=[
                            close_btn,
                            v.Html(tag='div', class_='py-3', children=['This is a bottom sheet using the persistent prop'])
                        ]
                    )
                ]
            )

            close_btn.on_event('click', lambda *args: setattr(bottom_sheet, 'v_model', False))

            v.Container(class_='text-center', children=[bottom_sheet])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            sheet = False

            open_btn = v.Btn(
                color='green',
                dark=True,
                children=['Open Persistent']
            )

            close_btn = v.Btn(
                class_='mt-6',
                text=True,
                color='error',
                children=['close']
            )

            bottom_sheet = v.BottomSheet(
                v_model=False,
                persistent=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': open_btn
                }],
                children=[
                    v.Sheet(
                        class_='text-center',
                        height='200px',
                        children=[
                            close_btn,
                            v.Html(tag='div', class_='py-3', children=['This is a bottom sheet using the persistent prop'])
                        ]
                    )
                ]
            )

            def toggle_sheet(*args):
                global sheet
                sheet = not sheet
                bottom_sheet.v_model = sheet

            open_btn.on_event('click', toggle_sheet)
            close_btn.on_event('click', toggle_sheet)

            v.Container(class_='text-center', children=[bottom_sheet])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div class="text-center">
                <v-bottom-sheet
                  v-model="sheet"
                  persistent
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="green"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Open Persistent
                    </v-btn>
                  </template>
                  <v-sheet
                    class="text-center"
                    height="200px"
                  >
                    <v-btn
                      class="mt-6"
                      text
                      color="error"
                      @click="sheet = !sheet"
                    >
                      close
                    </v-btn>
                    <div class="py-3">
                      This is a bottom sheet using the persistent prop
                    </div>
                  </v-sheet>
                </v-bottom-sheet>
              </div>
            </template>

            <script>
              export default {
                data: () => ({
                  sheet: false,
                }),
              }
            </script>

Music Player
------------

Using a inset bottom sheet, you can make practical components such as this simple music player.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.BottomSheet(
                        inset=True,
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'x',
                            'children': v.Btn(
                                color='red',
                                dark=True,
                                children=['Open Player']
                            )
                        }],
                        children=[
                            v.Card(
                                tile=True,
                                children=[
                                    v.ProgressLinear(
                                        value=50,
                                        class_='my-0',
                                        height=3
                                    ),
                                    v.List(children=[
                                        v.ListItem(children=[
                                            v.ListItemContent(children=[
                                                v.ListItemTitle(children=['The Walker']),
                                                v.ListItemSubtitle(children=['Fitz & The Trantrums'])
                                            ]),
                                            v.Spacer(),
                                            v.ListItemIcon(children=[
                                                v.Btn(icon=True, children=[v.Icon(children=['mdi-rewind'])])
                                            ]),
                                            v.ListItemIcon(children=[
                                                v.Btn(icon=True, children=[v.Icon(children=['mdi-pause'])])
                                            ]),
                                            v.ListItemIcon(
                                                class_='ml-0',
                                                children=[
                                                    v.Btn(icon=True, children=[v.Icon(children=['mdi-fast-forward'])])
                                                ]
                                            )
                                        ])
                                    ])
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_='text-center',
                children=[
                    v.BottomSheet(
                        inset=True,
                        v_slots=[{
                            'name': 'activator',
                            'variable': 'x',
                            'children': v.Btn(
                                color='red',
                                dark=True,
                                children=['Open Player']
                            )
                        }],
                        children=[
                            v.Card(
                                tile=True,
                                children=[
                                    v.ProgressLinear(
                                        value=50,
                                        class_='my-0',
                                        height=3
                                    ),
                                    v.List(children=[
                                        v.ListItem(children=[
                                            v.ListItemContent(children=[
                                                v.ListItemTitle(children=['The Walker']),
                                                v.ListItemSubtitle(children=['Fitz & The Trantrums'])
                                            ]),
                                            v.Spacer(),
                                            v.ListItemIcon(children=[
                                                v.Btn(icon=True, children=[v.Icon(children=['mdi-rewind'])])
                                            ]),
                                            v.ListItemIcon(children=[
                                                v.Btn(icon=True, children=[v.Icon(children=['mdi-pause'])])
                                            ]),
                                            v.ListItemIcon(
                                                class_='ml-0',
                                                children=[
                                                    v.Btn(icon=True, children=[v.Icon(children=['mdi-fast-forward'])])
                                                ]
                                            )
                                        ])
                                    ])
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div class="text-center">
                    <v-bottom-sheet inset>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="red"
                                dark
                                v-bind="attrs"
                                v-on="on"
                            >
                                Open Player
                            </v-btn>
                        </template>
                        <v-card tile>
                            <v-progress-linear
                                :value="50"
                                class="my-0"
                                height="3"
                            ></v-progress-linear>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>The Walker</v-list-item-title>
                                        <v-list-item-subtitle>Fitz and The Trantrums</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-spacer></v-spacer>

                                    <v-list-item-icon>
                                        <v-btn icon>
                                            <v-icon>mdi-rewind</v-icon>
                                        </v-btn>
                                    </v-list-item-icon>

                                    <v-list-item-icon>
                                        <v-btn icon>
                                            <v-icon>mdi-pause</v-icon>
                                        </v-btn>
                                    </v-list-item-icon>

                                    <v-list-item-icon class="ml-0">
                                        <v-btn icon>
                                            <v-icon>mdi-fast-forward</v-icon>
                                        </v-btn>
                                    </v-list-item-icon>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-bottom-sheet>
                </div>
            </template>

Open In List
------------

By combining a functional list into a bottom sheet, you can create a simple 'open in' component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            tiles = [
                {'img': 'keep.png', 'title': 'Keep'},
                {'img': 'inbox.png', 'title': 'Inbox'},
                {'img': 'hangouts.png', 'title': 'Hangouts'},
                {'img': 'messenger.png', 'title': 'Messenger'},
                {'img': 'google.png', 'title': 'Google+'},
            ]

            bottom_sheet = v.BottomSheet(
                v_model=False,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='purple',
                        dark=True,
                        children=['Open In']
                    )
                }],
                children=[
                    v.List(children=[
                        v.Subheader(children=['Open in'])
                    ])
                ]
            )

            list_items = []
            for tile in tiles:
                item = v.ListItem(children=[
                    v.ListItemAvatar(children=[
                        v.Avatar(
                            size=32,
                            tile=True,
                            children=[
                                v.Img(
                                    src=f"https://cdn.vuetifyjs.com/images/bottom-sheets/{tile['img']}",
                                    alt=tile['title']
                                )
                            ]
                        )
                    ]),
                    v.ListItemTitle(children=[tile['title']])
                ])

                item.on_event('click', lambda *args: setattr(bottom_sheet, 'v_model', False))
                list_items.append(item)

            bottom_sheet.children[0].children.extend(list_items)
            v.Container(class_='text-center', children=[bottom_sheet])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            sheet = False

            tiles = [
                {'img': 'keep.png', 'title': 'Keep'},
                {'img': 'inbox.png', 'title': 'Inbox'},
                {'img': 'hangouts.png', 'title': 'Hangouts'},
                {'img': 'messenger.png', 'title': 'Messenger'},
                {'img': 'google.png', 'title': 'Google+'},
            ]

            list_items = []
            for tile in tiles:
                item = v.ListItem(children=[
                    v.ListItemAvatar(children=[
                        v.Avatar(
                            size=32,
                            tile=True,
                            children=[
                                v.Img(
                                    src=f"https://cdn.vuetifyjs.com/images/bottom-sheets/{tile['img']}",
                                    alt=tile['title']
                                )
                            ]
                        )
                    ]),
                    v.ListItemTitle(children=[tile['title']])
                ])

                def close_sheet(*args):
                    global sheet
                    sheet = False
                    bottom_sheet.v_model = False

                item.on_event('click', close_sheet)
                list_items.append(item)

            bottom_sheet = v.BottomSheet(
                v_model=False,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'x',
                    'children': v.Btn(
                        color='purple',
                        dark=True,
                        children=['Open In']
                    )
                }],
                children=[
                    v.List(children=[
                        v.Subheader(children=['Open in'])
                    ] + list_items)
                ]
            )

            v.Container(class_='text-center', children=[bottom_sheet])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div class="text-center">
                <v-bottom-sheet v-model="sheet">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="purple"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Open In
                    </v-btn>
                  </template>
                  <v-list>
                    <v-subheader>Open in</v-subheader>
                    <v-list-item
                      v-for="tile in tiles"
                      :key="tile.title"
                      @click="sheet = false"
                    >
                      <v-list-item-avatar>
                        <v-avatar
                          size="32px"
                          tile
                        >
                          <img
                            :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                            :alt="tile.title"
                          >
                        </v-avatar>
                      </v-list-item-avatar>
                      <v-list-item-title>{{ tile.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-bottom-sheet>
              </div>
            </template>

            <script>
              export default {
                data: () => ({
                  sheet: false,
                  tiles: [
                    { img: 'keep.png', title: 'Keep' },
                    { img: 'inbox.png', title: 'Inbox' },
                    { img: 'hangouts.png', title: 'Hangouts' },
                    { img: 'messenger.png', title: 'Messenger' },
                    { img: 'google.png', title: 'Google+' },
                  ],
                }),
              }
            </script>
