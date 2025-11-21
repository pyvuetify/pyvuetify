App
===

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/application/>`_.
    All examples have been converted to ipyvuetify syntax.

In Vuetify, the :py:class:`App <ipyvuetify.App>` component and the ``app`` prop on components like
:py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>`, :py:class:`AppBar <ipyvuetify.AppBar>`,
:py:class:`Footer <ipyvuetify.Footer>` and more, help bootstrap your application with the proper sizing
around :py:class:`Main <ipyvuetify.Main>` component. This allows you to create truly unique interfaces
without the hassle of managing your layout sizing. The :py:class:`App <ipyvuetify.App>` component is
**REQUIRED** for all applications. This is the mount point for many of Vuetify's components and
functionality and ensures that it propagates the default application variant (dark/light) to children
components and also ensures proper cross-browser support for certain click events in browsers like
Safari. :py:class:`App <ipyvuetify.App>` should only be rendered within your application **ONCE**.

.. api::

    :py:class:`ipyvuetify.App`

Default application markup
---------------------------

This is an example of the default application markup for Vuetify. You can place
your layout elements anywhere, as long as you apply the ``app`` property.

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.App(
                children=[
                    v.NavigationDrawer(
                        app=True,
                        children=[v.Html(tag='div', children=['Navigation content'])]
                    ),
                    v.AppBar(
                        app=True,
                        children=[v.Html(tag='div', children=['App bar content'])]
                    ),
                    v.Container(
                        fluid=True,
                        children=[v.Html(tag='div', children=['Main content area'])]
                    )
                    v.Footer(
                        app=True,
                        children=[v.Html(tag='div', children=['Footer content'])]
                    ),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <!-- App.vue -->
            <v-app>
                <v-navigation-drawer app>
                    <!-- -->
                </v-navigation-drawer>

                <v-app-bar app>
                    <!-- -->
                </v-app-bar>

                <!-- Sizes your content based upon application components -->
                <v-main>

                    <!-- Provides the application the proper gutter -->
                    <v-container fluid>

                        <!-- If using vue-router -->
                        <router-view></router-view>
                    </v-container>
                </v-main>

                <v-footer app>
                    <!-- -->
                </v-footer>
            </v-app>

.. note::

    Applying the ``app`` prop automatically applies ``position: fixed`` to the layout element. If
    your application calls for an absolute element, you can overwrite this functionality by using the
    ``absolute`` prop.

Application components
----------------------

Below is a list of all the components that support the ``app`` prop and can be used as layout
elements in your application. These can be mixed and matched and only **one** of each particular
component should exist at any time. You can, however, swap them out and the layout will accommodate.

Each of these application components have a designated location and priority that it affects within the layout system:

-   :py:class:`AppBar <ipyvuetify.AppBar>`: Is always placed at the top of an application with a lower
    priority than :py:class:`SystemBar <ipyvuetify.SystemBar>`.
-   :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>`: Is always placed at the bottom of an
    application with a higher priority than :py:class:`Footer <ipyvuetify.Footer>`.
-   :py:class:`Footer <ipyvuetify.Footer>`: Is always placed at the bottom of an application with a
    lower priority than :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>`.
-   :py:class:`NavigationDrawer <ipyvuetify.NavigationDrawer>`: Can be placed on the left or right
    side of an application and can be configured to sit next to or below :py:class:`AppBar <ipyvuetify.AppBar>`.
-   :py:class:`SystemBar <ipyvuetify.SystemBar>`: Is always placed at the top of an application with
    higher priority than :py:class:`AppBar <ipyvuetify.AppBar>`.

.. todo::

        Missing image from the original page: https://v2.vuetifyjs.com/en/components/application/#application-components
