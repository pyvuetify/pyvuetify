Treeview
========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/treeview/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Treeview <ipyvuetify.Treeview>` component is useful for displaying large amounts of nested data.

.. api::

    :py:class:`ipyvuetify.Treeview`

Usage
-----

A basic treeview example.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {'id': 1, 'name': 'Applications', 'children': [
                    {'id': 2, 'name': 'Calendar'},
                    {'id': 3, 'name': 'Chrome'},
                ]},
                {'id': 4, 'name': 'Documents', 'children': [
                    {'id': 5, 'name': 'vuetify'},
                ]},
                {'id': 6, 'name': 'Downloads'},
                {'id': 7, 'name': 'Videos'}
            ]

            v.Treeview(items=items)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {'id': 1, 'name': 'Applications', 'children': [
                    {'id': 2, 'name': 'Calendar'},
                    {'id': 3, 'name': 'Chrome'},
                ]},
                {'id': 4, 'name': 'Documents'},
                {'id': 5, 'name': 'Downloads'}
            ]

            v.Treeview(items=items)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-treeview :items="items"></v-treeview>
            </template>

            <script>
            export default {
              data: () => ({
                items: [
                  { id: 1, name: 'Applications', children: [
                    { id: 2, name: 'Calendar' },
                    { id: 3, name: 'Chrome' },
                  ]},
                  { id: 4, name: 'Documents' },
                  { id: 5, name: 'Downloads' }
                ]
              })
            }
            </script>

Selectable
----------

You can easily select treeview nodes and children.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {'id': 1, 'name': 'Applications', 'children': [
                    {'id': 2, 'name': 'Calendar'},
                    {'id': 3, 'name': 'Chrome'},
                ]},
                {'id': 4, 'name': 'Documents'},
                {'id': 5, 'name': 'Downloads'}
            ]

            v.Treeview(
                items=items,
                selectable=True,
                v_model=[]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {'id': 1, 'name': 'Applications', 'children': [
                    {'id': 2, 'name': 'Calendar'},
                    {'id': 3, 'name': 'Chrome'},
                ]},
                {'id': 4, 'name': 'Documents'}
            ]

            v.Treeview(
                items=items,
                selectable=True,
                v_model=[]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-treeview
                :items="items"
                selectable
                v-model="selection"
              ></v-treeview>
            </template>
