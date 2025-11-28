ItemGroup
=========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/item-groups/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ItemGroup <ipyvuetify.ItemGroup>` component provides the ability to create a group of selectable items out of any component. This is the baseline functionality for components such as v-tabs and v-carousel.

.. api::

    :py:class:`ipyvuetify.ItemGroup`

Usage
-----

The core usage of the ``v-item-group`` is to create groups of anything that should be controlled by a model.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            def create_item(text):
                card = v.Card(
                    color='grey lighten-3',
                    class_='pa-4 ma-2',
                    children=[v.Html(tag='div', children=[text])]
                )

                def on_toggle(widget, event, data):
                    card.color = 'primary' if data else 'grey lighten-3'

                item = v.Item(v_slots=[{'name': 'default', 'children': [card]}])
                item.on_event('group:selected', on_toggle)
                return item

            v.ItemGroup(children=[
                create_item('Item 1'),
                create_item('Item 2'),
                create_item('Item 3')
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            def create_item(text):
                card = v.Card(
                    color='grey lighten-3',
                    class_='pa-4 ma-2',
                    children=[v.Html(tag='div', children=[text])]
                )

                def on_toggle(widget, event, data):
                    card.color = 'primary' if data else 'grey lighten-3'

                item = v.Item(v_slots=[{'name': 'default', 'children': [card]}])
                item.on_event('group:selected', on_toggle)
                return item

            v.ItemGroup(children=[
                create_item('Item 1'),
                create_item('Item 2'),
                create_item('Item 3')
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-item-group>
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? 'primary' : 'grey lighten-3'"
                    class="pa-4 ma-2"
                    @click="toggle"
                  >
                    <div>Item 1</div>
                  </v-card>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? 'primary' : 'grey lighten-3'"
                    class="pa-4 ma-2"
                    @click="toggle"
                  >
                    <div>Item 2</div>
                  </v-card>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? 'primary' : 'grey lighten-3'"
                    class="pa-4 ma-2"
                    @click="toggle"
                  >
                    <div>Item 3</div>
                  </v-card>
                </v-item>
              </v-item-group>
            </template>

Mandatory
---------

Mandatory item groups must have at least 1 item selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            group = v.ItemGroup(v_model=0, mandatory=True)

            def create_item(text):
                card = v.Card(
                    color='grey lighten-3',
                    class_='pa-4 ma-2',
                    children=[v.Html(tag='div', children=[text])]
                )

                def on_toggle(widget, event, data):
                    card.color = 'primary' if data else 'grey lighten-3'

                item = v.Item(v_slots=[{'name': 'default', 'children': [card]}])
                item.on_event('group:selected', on_toggle)
                return item

            group.children = [
                create_item('Item 1'),
                create_item('Item 2'),
                create_item('Item 3')
            ]

            v.Container(children=[
                v.Html(tag='div', children=[f'Active: {group.v_model}']),
                group
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            group = v.ItemGroup(v_model=0, mandatory=True)

            def create_item(text):
                card = v.Card(
                    color='grey lighten-3',
                    class_='pa-4 ma-2',
                    children=[v.Html(tag='div', children=[text])]
                )

                def on_toggle(widget, event, data):
                    card.color = 'primary' if data else 'grey lighten-3'

                item = v.Item(v_slots=[{'name': 'default', 'children': [card]}])
                item.on_event('group:selected', on_toggle)
                return item

            group.children = [
                create_item('Item 1'),
                create_item('Item 2'),
                create_item('Item 3')
            ]

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <div>Active: {{ active }}</div>
                <v-item-group v-model="active" mandatory>
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      :color="active ? 'primary' : 'grey lighten-3'"
                      class="pa-4 ma-2"
                      @click="toggle"
                    >
                      <div>Item 1</div>
                    </v-card>
                  </v-item>
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      :color="active ? 'primary' : 'grey lighten-3'"
                      class="pa-4 ma-2"
                      @click="toggle"
                    >
                      <div>Item 2</div>
                    </v-card>
                  </v-item>
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      :color="active ? 'primary' : 'grey lighten-3'"
                      class="pa-4 ma-2"
                      @click="toggle"
                    >
                      <div>Item 3</div>
                    </v-card>
                  </v-item>
                </v-item-group>
              </v-container>
            </template>

Multiple
--------

Item groups can have multiple items selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            def create_item(text):
                card = v.Card(
                    color='grey lighten-3',
                    class_='pa-4 ma-2',
                    children=[v.Html(tag='div', children=[text])]
                )

                def on_toggle(widget, event, data):
                    card.color = 'primary' if data else 'grey lighten-3'

                item = v.Item(v_slots=[{'name': 'default', 'children': [card]}])
                item.on_event('group:selected', on_toggle)
                return item

            v.ItemGroup(
                multiple=True,
                children=[
                    create_item('Item 1'),
                    create_item('Item 2'),
                    create_item('Item 3')
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            def create_item(text):
                card = v.Card(
                    color='grey lighten-3',
                    class_='pa-4 ma-2',
                    children=[v.Html(tag='div', children=[text])]
                )

                def on_toggle(widget, event, data):
                    card.color = 'primary' if data else 'grey lighten-3'

                item = v.Item(v_slots=[{'name': 'default', 'children': [card]}])
                item.on_event('group:selected', on_toggle)
                return item

            v.ItemGroup(
                multiple=True,
                children=[
                    create_item('Item 1'),
                    create_item('Item 2'),
                    create_item('Item 3')
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-item-group multiple>
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? 'primary' : 'grey lighten-3'"
                    class="pa-4 ma-2"
                    @click="toggle"
                  >
                    <div>Item 1</div>
                  </v-card>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? 'primary' : 'grey lighten-3'"
                    class="pa-4 ma-2"
                    @click="toggle"
                  >
                    <div>Item 2</div>
                  </v-card>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? 'primary' : 'grey lighten-3'"
                    class="pa-4 ma-2"
                    @click="toggle"
                  >
                    <div>Item 3</div>
                  </v-card>
                </v-item>
              </v-item-group>
            </template>
