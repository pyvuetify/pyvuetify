Pagination
==========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Pagination
    documentation <https://v2.vuetifyjs.com/en/components/paginations/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Pagination <ipyvuetify.Pagination>` component is used to
separate long sets of data so that it is easier for a user to consume
information. Depending on the length provided, the pagination component will
automatically scale. To maintain the current page, simply supply a v-model
attribute.

.. api::

    :py:class:`ipyvuetify.Pagination`

Usage
-----

Pagination by default displays the number of pages based on the set length
prop, with prev and next buttons surrounding to help you navigate.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Pagination(
        v_model=1,
        length=10,
        class_='text-center my-2',
    )

Examples
--------

Circle
^^^^^^

The circle prop gives you an alternate style for pagination buttons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=4,
                circle=True,
                class_='text-center my-2',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=4,
                circle=True,
                class_='text-center my-2',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-pagination
                v-model="page"
                :length="4"
                circle
                ></v-pagination>
            </div>
            </template>

Disabled
^^^^^^^^

Pagination items can be manually deactivated using the disabled prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Pagination(
                length=3,
                disabled=True,
                class_='text-center my-2',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Pagination(
                length=3,
                disabled=True,
                class_='text-center my-2',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-pagination
                :length="3"
                disabled
                ></v-pagination>
            </div>
            </template>

Icons
^^^^^

Previous and next page icons can be customized with the prev-icon and next-icon
props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=4,
                prev_icon='mdi-menu-left',
                next_icon='mdi-menu-right',
                class_='text-center my-2',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=4,
                prev_icon='mdi-menu-left',
                next_icon='mdi-menu-right',
                class_='text-center my-2',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-pagination
                v-model="page"
                :length="4"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
                ></v-pagination>
            </div>
            </template>

Length
^^^^^^

Using the length prop you can set the length of
:py:class:`Pagination <ipyvuetify.Pagination>`, if the number of page buttons
exceeds the parent container, it will truncate the list.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                width='400px',
                children=[
                    v.Pagination(
                        v_model=1,
                        length=15,
                        class_='text-center my-4',
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_='mx-auto my-2',
                width='400px',
                children=[
                    v.Pagination(
                        v_model=1,
                        length=15,
                        class_='text-center my-4',
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-container>
                <v-row justify="center">
                    <v-col cols="8">
                    <v-container class="max-width">
                        <v-pagination
                        v-model="page"
                        class="my-4"
                        :length="15"
                        ></v-pagination>
                    </v-container>
                    </v-col>
                </v-row>
                </v-container>
            </div>
            </template>

Total visible
^^^^^^^^^^^^^

You can also manually set the maximum number of visible page buttons with the
total-visible prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=15,
                total_visible=7,
                class_='text-center my-2',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=15,
                total_visible=7,
                class_='text-center my-2',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-pagination
                v-model="page"
                :length="15"
                :total-visible="7"
                ></v-pagination>
            </div>
            </template>
