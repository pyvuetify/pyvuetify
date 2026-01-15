SkeletonLoader
==============

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/skeleton-loaders/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>` component is a versatile tool that can fill many roles within a project. At its heart, the component provides an indication to the user that something is coming but not yet available.

.. api::

    :py:class:`ipyvuetify.SkeletonLoader`

Usage
-----

The ``v-skeleton-loader`` component provides a user with a visual indicator that content is coming / loading.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.SkeletonLoader(
                type='card'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.SkeletonLoader(
                type='card'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-skeleton-loader
                type="card"
              ></v-skeleton-loader>
            </template>

Types
-----

There are over 30 pre-defined options available that can be combined.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.SkeletonLoader(type='article', class_='mb-2'),
                v.SkeletonLoader(type='list-item-avatar', class_='mb-2'),
                v.SkeletonLoader(type='card-avatar', class_='mb-2')
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.SkeletonLoader(type='article'),
                v.SkeletonLoader(type='list-item-avatar'),
                v.SkeletonLoader(type='card-avatar')
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-skeleton-loader type="article"></v-skeleton-loader>
                <v-skeleton-loader type="list-item-avatar"></v-skeleton-loader>
                <v-skeleton-loader type="card-avatar"></v-skeleton-loader>
              </v-container>
            </template>
