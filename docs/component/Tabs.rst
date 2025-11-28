Tabs
====

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/tabs/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Tabs <ipyvuetify.Tabs>` component is used for hiding content behind a selectable item. This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content.

.. api::

    :py:class:`ipyvuetify.Tabs`

Usage
-----

The ``v-tabs`` component is a styled extension of v-item-group. It provides an easy to use interface for organizing groups of content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            tabs = v.Tabs(
                v_model=0,
                children=[
                    v.Tab(children=['Tab 1']),
                    v.Tab(children=['Tab 2']),
                    v.Tab(children=['Tab 3'])
                ]
            )
            items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(children=[v.Card(flat=True, children=['Tab 1 content'])]),
                    v.TabItem(children=[v.Card(flat=True, children=['Tab 2 content'])]),
                    v.TabItem(children=[v.Card(flat=True, children=['Tab 3 content'])])
                ]
            )
            v.Container(children=[tabs, items])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            tabs = v.Tabs(
                v_model=0,
                children=[
                    v.Tab(children=['Tab 1']),
                    v.Tab(children=['Tab 2']),
                    v.Tab(children=['Tab 3'])
                ]
            )
            items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(children=[v.Card(flat=True, children=['Tab 1 content'])]),
                    v.TabItem(children=[v.Card(flat=True, children=['Tab 2 content'])]),
                    v.TabItem(children=[v.Card(flat=True, children=['Tab 3 content'])])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div>
                <v-tabs v-model="tab">
                  <v-tab>Tab 1</v-tab>
                  <v-tab>Tab 2</v-tab>
                  <v-tab>Tab 3</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <v-card flat>Tab 1 content</v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>Tab 2 content</v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>Tab 3 content</v-card>
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </template>

Vertical
--------

The ``vertical`` prop allows for v-tab components to stack vertically.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            tabs = v.Tabs(
                v_model=0,
                vertical=True,
                children=[
                    v.Tab(children=['Option 1']),
                    v.Tab(children=['Option 2']),
                    v.Tab(children=['Option 3'])
                ]
            )
            items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(children=[v.Card(flat=True, children=['Content for Option 1'])]),
                    v.TabItem(children=[v.Card(flat=True, children=['Content for Option 2'])]),
                    v.TabItem(children=[v.Card(flat=True, children=['Content for Option 3'])])
                ]
            )
            v.Card(flat=True, children=[
                v.Row(no_gutters=True, children=[
                    v.Col(cols=3, children=[tabs]),
                    v.Col(cols=9, children=[items])
                ])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            tabs = v.Tabs(
                v_model=0,
                vertical=True,
                children=[
                    v.Tab(children=['Option 1']),
                    v.Tab(children=['Option 2'])
                ]
            )
            items = v.TabsItems(
                v_model=0,
                children=[
                    v.TabItem(children=[v.Card(flat=True, children=['Content 1'])]),
                    v.TabItem(children=[v.Card(flat=True, children=['Content 2'])])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-card flat>
                <v-row no-gutters>
                  <v-col cols="3">
                    <v-tabs v-model="tab" vertical>
                      <v-tab>Option 1</v-tab>
                      <v-tab>Option 2</v-tab>
                    </v-tabs>
                  </v-col>
                  <v-col cols="9">
                    <v-tabs-items v-model="tab">
                      <v-tab-item>
                        <v-card flat>Content 1</v-card>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card flat>Content 2</v-card>
                      </v-tab-item>
                    </v-tabs-items>
                  </v-col>
                </v-row>
              </v-card>
            </template>
