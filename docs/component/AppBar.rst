AppBar
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify App Bar documentation <https://v2.vuetifyjs.com/en/components/app-bars/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`AppBar <ipyvuetify.AppBar>` component is pivotal to any graphical user interface (GUI),
as it generally is the primary source of site navigation. The app-bar component works great in conjunction
with a :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>` for providing site navigation in
your application.

.. api::

    :py:class:`ipyvuetify.AppBar`
    :py:class:`ipyvuetify.AppBarNavIcon`

Usage
-----

The :py:class:`AppBar <ipyvuetify.AppBar>` component is used for application-wide actions and information.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        children = [
            v.AppBar(
                color='primary',
                dark=True,
                children=[
                    v.AppBarNavIcon(),
                    v.ToolbarTitle(children=['My Application']),
                    v.Spacer(),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                ]
            )
        ]
    )

AppBarNavIcon
-------------

A styled icon button component created specifically for use with :py:class:`Toolbar <ipyvuetify.Toolbar>`
and :py:class:`AppBar <ipyvuetify.AppBar>`. Typically seen on the left side of a toolbar as a hamburger
menu, it is often used to control the state of a navigation drawer. The default slot can be used to
customize the icon and function of this component. This is a **functional** component.

Dense
-----

You can make app-bar dense. A dense app bar has lower height than regular one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.AppBar(
                color='deep-purple accent-4',
                dense=True,
                dark=True,
                children=[
                    v.AppBarNavIcon(),
                    v.ToolbarTitle(children=['Page title']),
                    v.Spacer(),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.AppBar(
                color='deep-purple accent-4',
                dense=True,
                dark=True,
                children=[
                    v.AppBarNavIcon(),
                    v.ToolbarTitle(children=['Page title']),
                    v.Spacer(),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                    v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-app-bar
                    color="deep-purple accent-4"
                    dense
                    dark
                >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title>Page title</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-app-bar>
            </template>

Elevate on Scroll
-----------------

When using the ``elevate_on_scroll`` prop, the :py:class:`AppBar <ipyvuetify.AppBar>` will rest at an
elevation of 0dp until the user begins to scroll down. Once scrolling, the bar raises to 4dp.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='white',
                        elevate_on_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='white',
                        elevate_on_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card class="overflow-hidden">
                    <v-app-bar
                        absolute
                        color="white"
                        elevate-on-scroll
                        scroll-target="#scrolling-techniques-7"
                    >
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <v-toolbar-title>Title</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </v-app-bar>
                    <v-sheet
                        id="scrolling-techniques-7"
                        class="overflow-y-auto"
                        max-height="600"
                    >
                        <v-container style="height: 1500px;"></v-container>
                    </v-sheet>
                </v-card>
            </template>

Prominent
---------

An :py:class:`AppBar <ipyvuetify.AppBar>` with the ``prominent`` prop can opt to have its height shrunk
as the user scrolls down. This provides a smooth transition to taking up less visual space when the
user is scrolling through content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='indigo darken-2',
                        dark=True,
                        shrink_on_scroll=True,
                        prominent=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='indigo darken-2',
                        dark=True,
                        shrink_on_scroll=True,
                        prominent=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                        ]
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card class="overflow-hidden">
                    <v-app-bar
                        absolute
                        color="indigo darken-2"
                        dark
                        shrink-on-scroll
                        prominent
                        scroll-target="#scrolling-techniques"
                    >
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <v-app-bar-title>Title</v-app-bar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                    </v-app-bar>
                    <v-sheet
                        id="scrolling-techniques"
                        class="overflow-y-auto"
                        max-height="600"
                    >
                    <v-container style="height: 1000px;"></v-container>
                </v-sheet>
            </v-card>
            </template>

Collapse
--------

With the ``collapse`` and ``collapse_on_scroll`` props you can easily control the state of toolbar
that the user interacts with.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='deep-purple accent-4',
                        dark=True,
                        collapse_on_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Collapsing Bar']),
                            v.Spacer(),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='deep-purple accent-4',
                        dark=True,
                        collapse_on_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Collapsing Bar']),
                            v.Spacer(),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-card class="overflow-hidden">
                    <v-app-bar
                        :collapse-on-scroll="true"
                        absolute
                        color="deep-purple accent-4"
                        dark
                        scroll-target="#scrolling-techniques-6"
                    >
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <v-toolbar-title>Collapsing Bar</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-app-bar>
                    <v-sheet
                        id="scrolling-techniques-6"
                        class="overflow-y-auto"
                        max-height="600"
                    >
                        <v-container style="height: 1000px;"></v-container>
                    </v-sheet>
                </v-card>
            </template>

Hiding on scroll
----------------

:py:class:`AppBar <ipyvuetify.AppBar>` can be hidden on scroll. Use the ``hide_on_scroll``
property for this.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='teal lighten-3',
                        dark=True,
                        hide_on_scroll=True,
                        prominent=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='teal lighten-3',
                        dark=True,
                        hide_on_scroll=True,
                        prominent=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-card class="overflow-hidden">
                    <v-app-bar
                        absolute
                        color="teal lighten-3"
                        dark
                        hide-on-scroll
                        prominent
                        scroll-target="#scrolling-techniques-4"
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
                    </v-app-bar>
                    <v-sheet
                        id="scrolling-techniques-4"
                        class="overflow-y-auto"
                        max-height="600"
                    >
                        <v-container style="height: 1000px;"></v-container>
                    </v-sheet>
                </v-card>
            </template>

Images
------

:py:class:`AppBar <ipyvuetify.AppBar>` can contain background images. You can set source via the
``src`` prop. If you need to customize the :py:class:`Img <ipyvuetify.Img>` properties, the app-bar
provides you with an ``img`` slot.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='#fcb69f',
                        dark=True,
                        shrink_on_scroll=True,
                        src='https://picsum.photos/1920/1080?random',
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='#fcb69f',
                        dark=True,
                        shrink_on_scroll=True,
                        src='https://picsum.photos/1920/1080?random',
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-card class="overflow-hidden">
                    <v-app-bar
                        absolute
                        color="#fcb69f"
                        dark
                        shrink-on-scroll
                        src="https://picsum.photos/1920/1080?random"
                        scroll-target="#scrolling-techniques-2"
                    >
                        <template v-slot:img="{ props }">
                            <v-img
                                v-bind="props"
                                gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                            ></v-img>
                        </template>

                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <v-app-bar-title>Title</v-app-bar-title>
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
                    </v-app-bar>
                    <v-sheet
                        id="scrolling-techniques-2"
                        class="overflow-y-auto"
                        max-height="600"
                    >
                        <v-container style="height: 1000px;"></v-container>
                    </v-sheet>
                </v-card>
            </template>

Fade image on scroll
--------------------

The background image of a :py:class:`AppBar <ipyvuetify.AppBar>` can fade on scroll. Use the
``fade_img_on_scroll`` property for this.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='#6A76AB',
                        dark=True,
                        shrink_on_scroll=True,
                        prominent=True,
                        src='https://picsum.photos/1920/1080?random',
                        fade_img_on_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='#6A76AB',
                        dark=True,
                        shrink_on_scroll=True,
                        prominent=True,
                        src='https://picsum.photos/1920/1080?random',
                        fade_img_on_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-card class="overflow-hidden">
                    <v-app-bar
                        absolute
                        color="#6A76AB"
                        dark
                        shrink-on-scroll
                        prominent
                        src="https://picsum.photos/1920/1080?random"
                        fade-img-on-scroll
                        scroll-target="#scrolling-techniques-3"
                    >
                        <template v-slot:img="{ props }">
                            <v-img
                                v-bind="props"
                                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                            ></v-img>
                        </template>

                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <v-app-bar-title>Title</v-app-bar-title>
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
                    </v-app-bar>
                    <v-sheet
                        id="scrolling-techniques-3"
                        class="overflow-y-auto"
                        max-height="600"
                    >
                        <v-container style="height: 1000px;"></v-container>
                    </v-sheet>
                </v-card>
            </template>

Inverted scrolling
------------------

When using the ``inverted_scroll`` property, the bar will hide until the user scrolls past the
designated threshold. Once past the threshold, the :py:class:`AppBar <ipyvuetify.AppBar>` will
continue to display until the users scrolls up past the threshold. If no ``scroll_threshold`` value
is supplied a default value of 0 will be used.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='primary',
                        dark=True,
                        inverted_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1500px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='primary',
                        dark=True,
                        inverted_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1500px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-card class="overflow-hidden">
                    <v-app-bar
                        absolute
                        color="primary"
                        dark
                        inverted-scroll
                        scroll-target="#scrolling-techniques-8"
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
                    </v-app-bar>
                    <v-sheet
                        id="scrolling-techniques-8"
                        class="overflow-y-auto"
                        max-height="600"
                    >
                        <v-container style="height: 1500px;"></v-container>
                    </v-sheet>
                </v-card>
            </template>

Scroll threshold
----------------

:py:class:`AppBar <ipyvuetify.AppBar>` can have scroll threshold. It will start reacting to scroll
only after defined via ``scroll_threshold`` property amount of pixels.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='#43a047',
                        dark=True,
                        shrink_on_scroll=True,
                        prominent=True,
                        src='https://picsum.photos/1920/1080?random',
                        fade_img_on_scroll=True,
                        scroll_threshold=500,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1500px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='#43a047',
                        dark=True,
                        shrink_on_scroll=True,
                        prominent=True,
                        src='https://picsum.photos/1920/1080?random',
                        fade_img_on_scroll=True,
                        scroll_threshold=500,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])]),
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1500px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-card class="overflow-hidden">
                    <v-app-bar
                        absolute
                        color="#43a047"
                        dark
                        shrink-on-scroll
                        prominent
                        src="https://picsum.photos/1920/1080?random"
                        fade-img-on-scroll
                        scroll-target="#scrolling-techniques-5"
                        scroll-threshold="500"
                    >
                        <template v-slot:img="{ props }">
                            <v-img
                                v-bind="props"
                                gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
                            ></v-img>
                        </template>

                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <v-app-bar-title>Title</v-app-bar-title>
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
                    </v-app-bar>
                    <v-sheet
                        id="scrolling-techniques-5"
                        class="overflow-y-auto"
                        max-height="600"
                    >
                        <v-container style="height: 1500px;"></v-container>
                    </v-sheet>
                </v-card>
            </template>

Menu
----

You can easily extend the functionality of app bar by adding :py:class:`Menu <ipyvuetify.Menu>`
there. Click on last icon to see it in action.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            menu = v.Menu(
                bottom=True,
                left=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'menuProps',
                    'children': v.Btn(
                        icon=True,
                        color='yellow',
                        v_on='menuProps.on',
                        children=[v.Icon(children=['mdi-dots-vertical'])]
                    )
                }],
                children=[
                    v.List(children=[
                        v.ListItem(children=[v.ListItemTitle(children=['Click Me 1'])]),
                        v.ListItem(children=[v.ListItemTitle(children=['Click Me 2'])]),
                        v.ListItem(children=[v.ListItemTitle(children=['Click Me 3'])]),
                    ])
                ]
            )

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='#6A76AB',
                        dark=True,
                        shrink_on_scroll=True,
                        prominent=True,
                        src='https://picsum.photos/1920/1080?random',
                        fade_img_on_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            menu,
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            menu = v.Menu(
                bottom=True,
                left=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'menuProps',
                    'children': v.Btn(
                        icon=True,
                        color='yellow',
                        v_on='menuProps.on',
                        children=[v.Icon(children=['mdi-dots-vertical'])]
                    )
                }],
                children=[
                    v.List(children=[
                        v.ListItem(children=[v.ListItemTitle(children=['Click Me 1'])]),
                        v.ListItem(children=[v.ListItemTitle(children=['Click Me 2'])]),
                        v.ListItem(children=[v.ListItemTitle(children=['Click Me 3'])]),
                    ])
                ]
            )

            v.Card(
                class_='overflow-hidden',
                children=[
                    v.AppBar(
                        absolute=True,
                        color='#6A76AB',
                        dark=True,
                        shrink_on_scroll=True,
                        prominent=True,
                        src='https://picsum.photos/1920/1080?random',
                        fade_img_on_scroll=True,
                        children=[
                            v.AppBarNavIcon(),
                            v.ToolbarTitle(children=['Title']),
                            v.Spacer(),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                            v.Btn(icon=True, children=[v.Icon(children=['mdi-heart'])]),
                            menu,
                        ]
                    ),
                    v.Sheet(
                        class_='overflow-y-auto',
                        max_height=400,
                        children=[
                            v.Container(style_='height: 1000px;')
                        ]
                    )
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-card class="overflow-hidden">
                    <v-app-bar
                        absolute
                        color="#6A76AB"
                        dark
                        shrink-on-scroll
                        prominent
                        src="https://picsum.photos/1920/1080?random"
                        fade-img-on-scroll
                        scroll-target="#scrolling-techniques-4"
                    >
                        <template v-slot:img="{ props }">
                            <v-img
                                v-bind="props"
                                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                            ></v-img>
                        </template>

                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <v-toolbar-title>Title</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn icon color="yellow" v-bind="attrs" v-on="on">
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                            </template>
                            <v-list>
                            <v-list-item>
                                <v-list-item-title>Click Me 1</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Click Me 2</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Click Me 3</v-list-item-title>
                            </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-app-bar>
                    <v-sheet
                        id="scrolling-techniques-4"
                        class="overflow-y-auto"
                        max-height="600"
                    >
                        <v-container style="height: 1000px;"></v-container>
                    </v-sheet>
                </v-card>
            </template>

Toggle navigation drawers
--------------------------

Using the functional component :py:class:`AppBarNavIcon <ipyvuetify.AppBarNavIcon>` you can toggle the
state of other components such as a :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>`.

.. tab-set::

    .. tab-item:: Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            drawer = v.NavigationDrawer(
                v_model=False,
                absolute=True,
                temporary=True,
                children=[
                    v.List(
                        nav=True,
                        dense=True,
                        children=[
                            v.ListItemGroup(
                                children=[
                                    v.ListItem(children=[
                                        v.ListItemIcon(children=[v.Icon(children=['mdi-home'])]),
                                        v.ListItemTitle(children=['Home'])
                                    ]),
                                    v.ListItem(children=[
                                        v.ListItemIcon(children=[v.Icon(children=['mdi-account'])]),
                                        v.ListItemTitle(children=['Account'])
                                    ]),
                                ]
                            )
                        ]
                    )
                ]
            )

            def toggle_drawer(widget, event, data):
                drawer.v_model = not drawer.v_model

            nav_icon = v.AppBarNavIcon()
            nav_icon.on_event('click', toggle_drawer)

            v.Card(
                class_='mx-auto overflow-hidden',
                max_height=400,
                children=[
                    v.AppBar(
                        color='deep-purple',
                        dark=True,
                        children=[
                            nav_icon,
                            v.ToolbarTitle(children=['Title']),
                        ]
                    ),
                    drawer,
                ]
            )

    .. tab-item:: Python

        .. code-block:: python

            import ipyvuetify as v

            drawer = v.NavigationDrawer(
                v_model=False,
                absolute=True,
                temporary=True,
                children=[
                    v.List(
                        nav=True,
                        dense=True,
                        children=[
                            v.ListItemGroup(
                                children=[
                                    v.ListItem(children=[
                                        v.ListItemIcon(children=[v.Icon(children=['mdi-home'])]),
                                        v.ListItemTitle(children=['Home'])
                                    ]),
                                    v.ListItem(children=[
                                        v.ListItemIcon(children=[v.Icon(children=['mdi-account'])]),
                                        v.ListItemTitle(children=['Account'])
                                    ]),
                                ]
                            )
                        ]
                    )
                ]
            )

            def toggle_drawer(widget, event, data):
                drawer.v_model = not drawer.v_model

            nav_icon = v.AppBarNavIcon()
            nav_icon.on_event('click', toggle_drawer)

            v.Card(
                class_='mx-auto overflow-hidden',
                max_height=400,
                children=[
                    v.AppBar(
                        color='deep-purple',
                        dark=True,
                        children=[
                            nav_icon,
                            v.ToolbarTitle(children=['Title']),
                        ]
                    ),
                    drawer,
                ]
            )

    .. tab-item:: Vue template

        .. code-block:: vue

            <template>
                <v-card
                    class="mx-auto overflow-hidden"
                    height="400"
                >
                    <v-app-bar
                        color="deep-purple"
                        dark
                    >
                        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                        <v-toolbar-title>Title</v-toolbar-title>
                    </v-app-bar>

                    <v-navigation-drawer
                        v-model="drawer"
                        absolute
                        temporary
                    >
                        <v-list nav dense>
                            <v-list-item-group
                                v-model="group"
                                active-class="deep-purple--text text--accent-4"
                            >
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-home</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>Home</v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-account</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>Account</v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-navigation-drawer>
                </v-card>
            </template>

