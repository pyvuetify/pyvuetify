Subheader
=========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/subheaders/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Subheader <ipyvuetify.Subheader>` component is used to separate sections of lists or provide context for grouped content.

.. api::

    :py:class:`ipyvuetify.Subheader`

Usage
-----

Subheaders in their simplest form display a subheading with default theme.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Subheader(children=['Subheader'])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Subheader(children=['Subheader'])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-subheader>Subheader</v-subheader>
            </template>

Inset
-----

Inset subheaders are moved 72px to the right. This gives you the option to line them up with list items and inset dividers.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.List(children=[
                v.Subheader(inset=True, children=['Subheader']),
                v.ListItem(children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['List item 1'])
                    ])
                ]),
                v.ListItem(children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['List item 2'])
                    ])
                ]),
                v.ListItem(children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['List item 3'])
                    ])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.List(children=[
                v.Subheader(inset=True, children=['Subheader']),
                v.ListItem(children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['List item 1'])
                    ])
                ]),
                v.ListItem(children=[
                    v.ListItemContent(children=[
                        v.ListItemTitle(children=['List item 2'])
                    ])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-list>
                <v-subheader inset>Subheader</v-subheader>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>List item 1</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>List item 2</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </template>
