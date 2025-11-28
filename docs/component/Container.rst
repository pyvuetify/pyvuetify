Container
=========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/grids/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Container <ipyvuetify.Container>` provides the ability to center and horizontally pad your site's contents. You can also use the ``fluid`` prop to fully extend the container across all viewport and device sizes.

.. api::

    :py:class:`ipyvuetify.Container`

Usage
-----

The container component is used to center and pad your content horizontally.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Html(tag='div', children=['Centered content'])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Html(tag='div', children=['Centered content'])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <div>Centered content</div>
              </v-container>
            </template>

Fluid
-----

The ``fluid`` prop extends the container to fill all available space.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[v.Html(tag='div', children=['Full width content'])]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[v.Html(tag='div', children=['Full width content'])]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container fluid>
                <div>Full width content</div>
              </v-container>
            </template>

Grid System
-----------

Container is typically used with :py:class:`Row <ipyvuetify.Row>` and :py:class:`Col <ipyvuetify.Col>` to create responsive layouts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.Html(tag='div', children=['One of three columns'])]),
                    v.Col(children=[v.Html(tag='div', children=['One of three columns'])]),
                    v.Col(children=[v.Html(tag='div', children=['One of three columns'])]),
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Row(children=[
                    v.Col(children=[v.Html(tag='div', children=['One of three columns'])]),
                    v.Col(children=[v.Html(tag='div', children=['One of three columns'])]),
                    v.Col(children=[v.Html(tag='div', children=['One of three columns'])]),
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-row>
                  <v-col>
                    <div>One of three columns</div>
                  </v-col>
                  <v-col>
                    <div>One of three columns</div>
                  </v-col>
                  <v-col>
                    <div>One of three columns</div>
                  </v-col>
                </v-row>
              </v-container>
            </template>
