Toolbar
=======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/toolbars/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Toolbar <ipyvuetify.Toolbar>` component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation. The toolbar component works great in conjunction with v-navigation-drawer and v-card.

.. api::

    :py:class:`ipyvuetify.Toolbar`

Usage
-----

A toolbar is a flexible container that can be used in a number of ways. By default, the toolbar is 64px high on desktop and 56px high on mobile.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Toolbar(children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=['Title']),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])]),
                v.Btn(icon=True, children=[v.Icon(children=['mdi-dots-vertical'])])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Toolbar(children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=['Title']),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=['mdi-magnify'])])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-toolbar>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-toolbar>
            </template>

Dense
-----

Dense toolbars reduce their height to 48px.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Toolbar(
                dense=True,
                children=[
                    v.AppBarNavIcon(),
                    v.ToolbarTitle(children=['Title'])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Toolbar(
                dense=True,
                children=[
                    v.AppBarNavIcon(),
                    v.ToolbarTitle(children=['Title'])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-toolbar dense>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Title</v-toolbar-title>
              </v-toolbar>
            </template>
