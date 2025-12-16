Breadcrumbs
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/breadcrumbs/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Breadcrumbs <ipyvuetify.Breadcrumbs>` component is a navigational helper for pages.
It can accept a Material Icons icon or text characters as a divider. An array of objects can be passed
to the ``items`` property of the component. Additionally, slots exists for more control of the breadcrumbs,
either utilizing :py:class:`BreadcrumbsItem <ipyvuetify.BreadcrumbsItem>` or other custom markup.

.. api::

    - :py:class:`ipyvuetify.Breadcrumbs`
    - :py:class:`ipyvuetify.BreadcrumbsItem`
    - :py:class:`ipyvuetify.BreadcrumbsDivider`

.. note:: Caveat

    By default v-breadcrumbs will disable all crumbs up to the current page in a nested paths.
    You can prevent this behavior by using exact: true on each applicable breadcrumb in the
    items array.

Usage
-----

By default, breadcrumbs use a text divider. This can be any string.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Breadcrumbs(items=items)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Breadcrumbs(items=items)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-breadcrumbs :items="items"></v-breadcrumbs>
            </template>

            <script>
                export default {
                    data: () => ({
                        items: [
                            {
                                text: 'Dashboard',
                                disabled: false,
                                href: 'breadcrumbs_dashboard',
                            },
                            {
                                text: 'Link 1',
                                disabled: false,
                                href: 'breadcrumbs_link_1',
                            },
                            {
                                text: 'Link 2',
                                disabled: true,
                                href: 'breadcrumbs_link_2',
                            },
                        ],
                    }),
                }
            </script>

Divider
-------

Breadcrumbs separator can be set using ``divider`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Container(children=[
                v.Breadcrumbs(items=items, divider="."),
                v.Breadcrumbs(items=items, divider="-"),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Container(children=[
                v.Breadcrumbs(items=items, divider="."),
                v.Breadcrumbs(items=items, divider="-"),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-breadcrumbs :items="items" divider="."></v-breadcrumbs>
                <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
            </template>

            <script>
                export default {
                    data: () => ({
                        items: [
                            {
                                text: 'Dashboard',
                                disabled: false,
                                href: 'breadcrumbs_dashboard',
                            },
                            {
                                text: 'Link 1',
                                disabled: false,
                                href: 'breadcrumbs_link_1',
                            },
                            {
                                text: 'Link 2',
                                disabled: true,
                                href: 'breadcrumbs_link_2',
                            },
                        ],
                    }),
                }
            </script>

Large
-----

Large breadcrumbs have larger font size.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Container(children=[
                v.Breadcrumbs(items=items),
                v.Breadcrumbs(items=items, large=True)
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Container(children=[
                v.Breadcrumbs(items=items),
                v.Breadcrumbs(items=items, large=True)
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-breadcrumbs :items="items"></v-breadcrumbs>
                    <v-breadcrumbs
                        :items="items"
                        large
                    ></v-breadcrumbs>
                </div>
            </template>

            <script>
                export default {
                    data: () => ({
                        items: [
                            {
                                text: 'Dashboard',
                                disabled: false,
                                href: 'breadcrumbs_dashboard',
                            },
                            {
                                text: 'Link 1',
                                disabled: false,
                                href: 'breadcrumbs_link_1',
                            },
                            {
                                text: 'Link 2',
                                disabled: true,
                                href: 'breadcrumbs_link_2',
                            },
                        ],
                    }),
                }
            </script>

Icon Dividers
-------------

For the icon variant, breadcrumbs can use any icon in Material Design Icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Breadcrumbs(
                items=items,
                v_slots=[{
                    'name': 'divider',
                    'children': v.Icon(children=['mdi-forward'])
                }]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Breadcrumbs(
                items=items,
                v_slots=[{
                    'name': 'divider',
                    'children': v.Icon(children=['mdi-forward'])
                }]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-breadcrumbs :items="items">
                    <template v-slot:divider>
                        <v-icon>mdi-forward</v-icon>
                    </template>
                </v-breadcrumbs>
            </template>

            <script>
                export default {
                    data: () => ({
                        items: [
                            {
                                text: 'Dashboard',
                                disabled: false,
                                href: 'breadcrumbs_dashboard',
                            },
                            {
                                text: 'Link 1',
                                disabled: false,
                                href: 'breadcrumbs_link_1',
                            },
                            {
                                text: 'Link 2',
                                disabled: true,
                                href: 'breadcrumbs_link_2',
                            },
                        ],
                    }),
                }
            </script>

Item
----

You can use the ``item`` slot to customize each breadcrumb.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Breadcrumbs(
                items=items,
                v_slots=[{
                    'name': 'item',
                    'variable': 'props',
                    'children': v.BreadcrumbsItem(
                        v_bind='props',
                        children=[v.Html(tag='span', children=['{{ props.item.text.toUpperCase() }}'])]
                    )
                }]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {'text': 'Dashboard', 'disabled': False, 'href': 'breadcrumbs_dashboard'},
                {'text': 'Link 1', 'disabled': False, 'href': 'breadcrumbs_link_1'},
                {'text': 'Link 2', 'disabled': True, 'href': 'breadcrumbs_link_2'}
            ]

            v.Breadcrumbs(
                items=items,
                v_slots=[{
                    'name': 'item',
                    'variable': 'props',
                    'children': v.BreadcrumbsItem(
                        v_bind='props',
                        children=[v.Html(tag='span', children=[props.item.text])]
                    )
                }]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-breadcrumbs :items="items">
                    <template v-slot:item="{ item }">
                        <v-breadcrumbs-item
                            :href="item.href"
                            :disabled="item.disabled"
                        >
                            {{ item.text.toUpperCase() }}
                        </v-breadcrumbs-item>
                    </template>
                </v-breadcrumbs>
            </template>

            <script>
                export default {
                    data: () => ({
                        items: [
                            {
                                text: 'Dashboard',
                                disabled: false,
                                href: 'breadcrumbs_dashboard',
                            },
                            {
                                text: 'Link 1',
                                disabled: false,
                                href: 'breadcrumbs_link_1',
                            },
                            {
                                text: 'Link 2',
                                disabled: true,
                                href: 'breadcrumbs_link_2',
                            },
                        ],
                    }),
                }
            </script>
