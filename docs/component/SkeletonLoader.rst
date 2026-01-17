SkeletonLoader
==============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Skeleton loaders
    documentation <https://v2.vuetifyjs.com/en/components/skeleton-loaders/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>` component is a
versatile tool that can fill many roles within a project. At its heart, the
component provides an indication to the user that something is coming but not
yet available. There are over 30 pre-defined options available that can be
combined to make custom examples.

.. api::

    - :py:class:`ipyvuetify.SkeletonLoader`

Usage
-----

The :py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>` component provides
a user with a visual indicator that content is coming / loading. This is better
received than traditional full-screen loaders.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Sheet(
        class_='pa-3',
        color="grey lighten-4",
        children=[
            v.SkeletonLoader(
                type='card',
                width=300,
                class_='mx-auto my-2'
            )
        ]
    )

Examples
--------

Boilerplate component
^^^^^^^^^^^^^^^^^^^^^

The :py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>` can be used as
boilerplate designs when creating mockups. Mix and match various pre-defined
options or create your own unique implementations. In this example, we use a
custom data property to apply the same props to multiple
:py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>`'s at once.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='card-avatar, article, actions',
                                        class_='my-3'
                                    ),
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='date-picker',
                                        class_='my-3'
                                    )
                                ]
                            ),
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='article, actions',
                                        class_='my-3'
                                    ),
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='table-heading, list-item-two-line, image, table-tfoot',
                                        class_='my-3'
                                    )
                                ]
                            ),
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='list-item-avatar, divider, list-item-three-line, card-heading, image, actions',
                                        class_='my-3'
                                    ),
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='list-item-avatar-three-line, image, article',
                                        class_='my-3'
                                    )
                                ]
                            )
                        ]
                    ),

                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='card-avatar, article, actions',
                                        class_='my-3'
                                    ),
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='date-picker',
                                        class_='my-3'
                                    )
                                ]
                            ),
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='article, actions',
                                        class_='my-3'
                                    ),
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='table-heading, list-item-two-line, image, table-tfoot',
                                        class_='my-3'
                                    )
                                ]
                            ),
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='list-item-avatar, divider, list-item-three-line, card-heading, image, actions',
                                        class_='my-3'
                                    ),
                                    v.SkeletonLoader(
                                        elevation=6,
                                        type='list-item-avatar-three-line, image, article',
                                        class_='my-3'
                                    )
                                ]
                            )
                        ]
                    ),

                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="card-avatar, article, actions"
                    ></v-skeleton-loader>

                    <v-skeleton-loader
                    v-bind="attrs"
                    type="date-picker"
                    ></v-skeleton-loader>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="article, actions"
                    ></v-skeleton-loader>

                    <v-skeleton-loader
                    v-bind="attrs"
                    type="table-heading, list-item-two-line, image, table-tfoot"
                    ></v-skeleton-loader>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
                    ></v-skeleton-loader>

                    <v-skeleton-loader
                    v-bind="attrs"
                    type="list-item-avatar-three-line, image, article"
                    ></v-skeleton-loader>
                </v-col>
                </v-row>
            </v-container>
            </template>

Accessibility
-------------

By default, the :py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>`
component is assigned a `WAI-ARIA
<https://www.w3.org/WAI/standards-guidelines/aria/>`__ role of `alert
<https://www.w3.org/TR/wai-aria/#alert>`__. We augment this role with two aria
properties. An `aria-busy
<https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-busy>`__ value
of true denotes that a widget is missing required owned elements. An
`aria-live <https://www.w3.org/TR/wai-aria-1.1/#aria-live>`__ value of polite
sets the screen reader's priority of live regions.
