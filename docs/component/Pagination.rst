Pagination
==========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/paginations/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Pagination <ipyvuetify.Pagination>` component is used to separate long sets of data so that it is easier for a user to consume information. Depending on the length provided, the pagination component will automatically scale.

.. api::

    :py:class:`ipyvuetify.Pagination`

Usage
-----

Pagination by default displays the number of pages based on the set length prop, with prev and next buttons surrounding to help you navigate.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=15
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=15
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-pagination
                v-model="page"
                :length="15"
              ></v-pagination>
            </template>

Circle
------

The circle prop gives you an alternate style for pagination buttons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=5,
                circle=True
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=5,
                circle=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-pagination
                v-model="page"
                :length="5"
                circle
              ></v-pagination>
            </template>

Length
------

Using the length prop you can set the length of ``v-pagination``, if the number of page buttons exceeds the parent container, it will truncate the list.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=100
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=100
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-pagination
                v-model="page"
                :length="100"
              ></v-pagination>
            </template>

Total Visible
-------------

You can also manually set the maximum number of visible page buttons with the total_visible prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=15,
                total_visible=7
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Pagination(
                v_model=1,
                length=15,
                total_visible=7
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-pagination
                v-model="page"
                :length="15"
                :total-visible="7"
              ></v-pagination>
            </template>
