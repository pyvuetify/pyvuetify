Toolbar
=======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Toolbars
    documentation <https://v2.vuetifyjs.com/en/components/toolbars/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Toolbar <ipyvuetify.Toolbar>` component is pivotal to any graphical
user interface (GUI), as it generally is the primary source of site navigation. The
toolbar component works great in conjunction with
:py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>` and
:py:class:`Card <ipyvuetify.Card>`.

.. api::

    - :py:class:`ipyvuetify.Toolbar`
    - :py:class:`ipyvuetify.ToolbarItems`
    - :py:class:`ipyvuetify.ToolbarTitle`

.. warning::

    When :py:class:`Btn <ipyvuetify.Btn>`s with the ``icon`` prop are used inside
    of :py:class:`Toolbar <ipyvuetify.Toolbar>` and
    :py:class:`AppBar <ipyvuetify.AppBar>` they will automatically have their size
    increased and negative margin applied to ensure proper spacing according to the
    Material Design Specification. If you choose to wrap your buttons in any
    container, such as a ``div``, you will need to apply negative margin to that
    container in order to properly align them.

Usage
-----

A toolbar is a flexible container that can be used in a number of ways. By default,
the toolbar is **64px** high on desktop and **56px** high on mobile. There are a
number of helper components available to use with the toolbar. The
:py:class:`ToolbarTitle <ipyvuetify.ToolbarTitle>` is used for displaying a title
and :py:class:`ToolbarItems <ipyvuetify.ToolbarItems>` allow
:py:class:`Btn <ipyvuetify.Btn>` to extend full height.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Toolbar(
        color="success",
        children=[
            v.ToolbarTitle(children=["My Application"]),
            v.Spacer(),
            v.ToolbarItems(
                children=[
                    v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                    v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                    v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                ]
            ),
        ]
    )

Examples
--------

Background
^^^^^^^^^^

Toolbars can display a background as opposed to a solid color using the ``src``
prop. This can be modified further by using the ``img`` slot and providing your own
:py:class:`Img <ipyvuetify.Img>` component. Backgrounds can be faded using a
:py:class:`AppBar <ipyvuetify.AppBar>`__.

.. __: https://v2.vuetifyjs.com/en/components/app-bars/#prominent-w-scroll-shrink-and-image

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Toolbar(
                dark=True,
                prominent=True,
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
                children=[
                    v.AppBarNavIcon(),
                    v.ToolbarTitle(children=["Vuetify"]),
                    v.Spacer(),
                    v.Btn(icon=True, children=[v.Icon(children=["mdi-export"])]),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Toolbar(
                dark=True,
                prominent=True,
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
                children=[
                    v.AppBarNavIcon(),
                    v.ToolbarTitle(children=["Vuetify"]),
                    v.Spacer(),
                    v.Btn(icon=True, children=[v.Icon(children=["mdi-export"])]),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-toolbar
                dark
                prominent
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Vuetify</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-export</v-icon>
                </v-btn>
                </v-toolbar>
            </div>
            </template>

Collapse
^^^^^^^^

Toolbars can be collapsed to save screen space.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(collapse=True, children=[
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ]),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(collapse=True, children=[
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ]),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                color="grey lighten-4"
                flat
                height="200px"
                tile
            >
                <v-toolbar collapse>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
            </v-card>
            </template>

Dense toolbars
^^^^^^^^^^^^^^

**Dense** toolbars reduce their height to **48px**. When using in conjunction with
the ``prominent`` prop, will reduce height to **96px**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(dense=True, children=[
                        v.AppBarNavIcon(),
                        v.ToolbarTitle(children=["Title"]),
                        v.Spacer(),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ]),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(dense=True, children=[
                        v.AppBarNavIcon(),
                        v.ToolbarTitle(children=["Title"]),
                        v.Spacer(),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ]),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                color="grey lighten-4"
                flat
                height="200px"
                tile
            >
                <v-toolbar dense>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
            </v-card>
            </template>

Extended
^^^^^^^^

Toolbars can be extended without using the ``extension`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(extended=True, children=[
                        v.AppBarNavIcon(),
                        v.ToolbarTitle(children=["Title"]),
                        v.Spacer(),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ]),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(extended=True, children=[
                        v.AppBarNavIcon(),
                        v.ToolbarTitle(children=["Title"]),
                        v.Spacer(),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ]),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                color="grey lighten-4"
                flat
                height="200px"
                tile
            >
                <v-toolbar extended>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
            </v-card>
            </template>

Extension height
^^^^^^^^^^^^^^^^

The extension's height can be customized.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(extended=True, extension_height="100", children=[
                        v.AppBarNavIcon(),
                        v.ToolbarTitle(children=["Title"]),
                        v.Spacer(),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ]),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(extended=True, extension_height="100", children=[
                        v.AppBarNavIcon(),
                        v.ToolbarTitle(children=["Title"]),
                        v.Spacer(),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ]),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                color="grey lighten-4"
                flat
                height="200px"
                tile
            >
                <v-toolbar
                extended
                extension-height="100"
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
            </v-card>
            </template>

Floating with search
^^^^^^^^^^^^^^^^^^^^

A **floating** toolbar is turned into an inline element that only takes up as much
space as needed. This is particularly useful when placing toolbars over content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="pa-4",
                flat=True,
                height="300px",
                img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg",
                children=[
                    v.Toolbar(
                        dense=True,
                        floating=True,
                        children=[
                            v.TextField(
                                hide_details=True,
                                prepend_icon="mdi-magnify",
                                single_line=True,
                            ),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-crosshairs-gps"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="pa-4",
                flat=True,
                height="300px",
                img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg",
                children=[
                    v.Toolbar(
                        dense=True,
                        floating=True,
                        children=[
                            v.TextField(
                                hide_details=True,
                                prepend_icon="mdi-magnify",
                                single_line=True,
                            ),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-crosshairs-gps"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="pa-4"
                flat
                height="300px"
                img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
            >
                <v-toolbar
                dense
                floating
                >
                <v-text-field
                    hide-details
                    prepend-icon="mdi-magnify"
                    single-line
                ></v-text-field>

                <v-btn icon>
                    <v-icon>mdi-crosshairs-gps</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
            </v-card>
            </template>

Light and Dark
^^^^^^^^^^^^^^

Toolbars come in **2 variants**, **light** and **dark**. Light toolbars have dark
tinted buttons and dark text whereas dark toolbars have white tinted buttons and
white text.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                flat=True,
                children=[
                    v.Container(
                        fluid=True,
                        class_="child-flex",
                        children=[
                            v.Toolbar(
                                children=[
                                    v.Btn(
                                        icon=True,
                                        class_="hidden-xs-only",
                                        children=[v.Icon(children=["mdi-arrow-left"])],
                                    ),
                                    v.ToolbarTitle(children=["Title"]),
                                    v.Spacer(),
                                    v.Btn(
                                        icon=True,
                                        class_="hidden-xs-only",
                                        children=[v.Icon(children=["mdi-magnify"])],
                                    ),
                                ],
                            ),
                            v.Toolbar(
                                dark=True,
                                children=[
                                    v.Spacer(),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-reply"])]),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                                ],
                            ),
                        ]
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                flat=True,
                children=[
                    v.Container(
                        fluid=True,
                        class_="child-flex",
                        children=[
                            v.Toolbar(
                                children=[
                                    v.Btn(
                                        icon=True,
                                        class_="hidden-xs-only",
                                        children=[v.Icon(children=["mdi-arrow-left"])],
                                    ),
                                    v.ToolbarTitle(children=["Title"]),
                                    v.Spacer(),
                                    v.Btn(
                                        icon=True,
                                        class_="hidden-xs-only",
                                        children=[v.Icon(children=["mdi-magnify"])],
                                    ),
                                ],
                            ),
                            v.Toolbar(
                                dark=True,
                                children=[
                                    v.Spacer(),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-reply"])]),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                                ],
                            ),
                        ]
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card flat>
                <v-container fluid>
                <v-row class="child-flex">
                    <div>
                    <v-toolbar>
                        <v-btn
                        icon
                        class="hidden-xs-only"
                        >
                        <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>

                        <v-toolbar-title>Title</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-btn
                        icon
                        class="hidden-xs-only"
                        >
                        <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </v-toolbar>
                    </div>

                    <div style="flex-basis: 20%">
                    <v-toolbar dark>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                        <v-icon>mdi-reply</v-icon>
                        </v-btn>

                        <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-toolbar>
                    </div>
                </v-row>
                </v-container>
            </v-card>
            </template>

Prominent toolbars
^^^^^^^^^^^^^^^^^^

**Prominent** toolbars increase the :py:class:`Toolbar <ipyvuetify.Toolbar>`'s
height to **128px** and positions the
:py:class:`ToolbarTitle <ipyvuetify.ToolbarTitle>` towards the bottom of the
container. This is expanded upon in :py:class:`AppBar <ipyvuetify.AppBar>`__ with
the ability to shrink a prominent toolbar to a dense or short one.

.. __: https://v2.vuetifyjs.com/en/components/app-bars/#prominent-w-scroll-shrink

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(
                        prominent=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Title"]),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                color="grey lighten-4",
                flat=True,
                height="200px",
                tile=True,
                children=[
                    v.Toolbar(
                        prominent=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=["Title"]),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                            v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                color="grey lighten-4"
                flat
                height="200px"
                tile
            >
                <v-toolbar
                prominent
                extended
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
            </v-card>
            </template>

Contextual action bar
^^^^^^^^^^^^^^^^^^^^^

It is possible to update the appearance of a toolbar in response to changes in app
state. In this example, the color and content of the toolbar changes in response to
user selections in the :py:class:`Select <ipyvuetify.Select>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            colors = ["red", "blue", "green", "yellow", "purple", "orange"]

            select = v.Select(
                items=colors,
                label="Select an option",
                v_model='red',
            )

            toolbar = v.Toolbar(
                color="red",
                children=[
                    v.ToolbarTitle(children=["Photos"]),
                    v.Spacer(),
                    v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                ]
            )

            jslink((select, 'v_model'), (toolbar, 'color'))

            v.Card(
                width="500",
                class_="mx-auto my-2",
                children=[
                    toolbar,
                    v.CardText(children=[select]),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            colors = ["red", "blue", "green", "yellow", "purple", "orange"]

            select = v.Select(
                items=colors,
                label="Select an option",
                v_model='red',
            )

            toolbar = v.Toolbar(
                color="red",
                children=[
                    v.ToolbarTitle(children=["Photos"]),
                    v.Spacer(),
                    v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                ]
            )

            jslink((select, 'v_model'), (toolbar, 'color'))

            v.Card(
                width="500",
                class_="mx-auto my-2",
                children=[
                    toolbar,
                    v.CardText(children=[select]),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                max-width="500"
                class="mx-auto"
            >
                <v-toolbar
                :color="selection.length ? 'grey darken-4' : 'deep-purple accent-4'"
                dark
                >
                <v-app-bar-nav-icon v-if="!selection.length"></v-app-bar-nav-icon>
                <v-btn
                    v-else
                    icon
                    @click="selection = []"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>

                <v-toolbar-title>
                    {{ selection.length ? `${selection.length} selected` : 'Photos' }}
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-scale-transition>
                    <v-btn
                    v-if="selection.length"
                    key="export"
                    icon
                    >
                    <v-icon>mdi-export-variant</v-icon>
                    </v-btn>
                </v-scale-transition>
                <v-scale-transition>
                    <v-btn
                    v-if="selection.length"
                    key="delete"
                    icon
                    >
                    <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-scale-transition>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>

                <v-card-text>
                <v-select
                    v-model="selection"
                    :items="items"
                    multiple
                    label="Select an option"
                ></v-select>
                </v-card-text>
            </v-card>
            </template>

Flexible and card toolbar
^^^^^^^^^^^^^^^^^^^^^^^^^^

In this example we offset our card onto the extended content area of a toolbar
using the ``extended`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="my-4",
                flat=True,
                children=[
                    v.Toolbar(
                        color="primary",
                        dark=True,
                        extended=True,
                        flat=True,
                        children=[
                            v.AppBarNavIcon(),
                        ],
                    ),
                    v.Card(
                        class_="mx-auto",
                        width="700",
                        style_="margin-top: -64px;",
                        children=[
                            v.Toolbar(
                                flat=True,
                                children=[
                                    v.ToolbarTitle(children=["Title"], class_="grey--text"),
                                    v.Spacer(),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-apps"])]),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                                ],
                            ),
                            v.Divider(),
                            v.CardText(style_="height: 200px;"),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="my-4",
                flat=True,
                children=[
                    v.Toolbar(
                        color="primary",
                        dark=True,
                        extended=True,
                        flat=True,
                        children=[
                            v.AppBarNavIcon(),
                        ],
                    ),
                    v.Card(
                        class_="mx-auto",
                        width="700",
                        style_="margin-top: -64px;",
                        children=[
                            v.Toolbar(
                                flat=True,
                                children=[
                                    v.ToolbarTitle(children=["Title"], class_="grey--text"),
                                    v.Spacer(),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-apps"])]),
                                    v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                                ],
                            ),
                            v.Divider(),
                            v.CardText(style_="height: 200px;"),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card flat>
                <v-toolbar
                color="primary"
                dark
                extended
                flat
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </v-toolbar>

                <v-card
                class="mx-auto"
                max-width="700"
                style="margin-top: -64px;"
                >
                <v-toolbar flat>
                    <v-toolbar-title class="grey--text">
                    Title
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                    </v-btn>

                    <v-btn icon>
                    <v-icon>mdi-apps</v-icon>
                    </v-btn>

                    <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-divider></v-divider>

                <v-card-text style="height: 200px;"></v-card-text>
                </v-card>
            </v-card>
            </template>
