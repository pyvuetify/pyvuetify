Combobox
========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/combobox/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Combobox <ipyvuetify.Combobox>` component is a :py:class:`Autocomplete <ipyvuetify.Autocomplete>` that allows the user to enter values that do not exist within the provided items. Created items will be returned as strings.

.. api::

    :py:class:`ipyvuetify.Combobox`

Usage
-----

With Combobox, you can allow a user to create new values that may not be present in a provided items list.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Combobox(
                v_model=None,
                items=['Vuetify', 'Programming', 'Design'],
                label='Select or create'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Combobox(
                v_model=None,
                items=['Vuetify', 'Programming', 'Design'],
                label='Select or create'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-combobox
                v-model="select"
                :items="items"
                label="Select or create"
              ></v-combobox>
            </template>

            <script>
              export default {
                data: () => ({
                  select: null,
                  items: ['Vuetify', 'Programming', 'Design'],
                }),
              }
            </script>

Multiple
--------

Previously known as tags - user is allowed to enter more than 1 value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Combobox(
                v_model=['Vuetify', 'Programming'],
                items=['Vuetify', 'Programming', 'Design', 'Development'],
                label='Select a favorite activity or create a new one',
                multiple=True,
                chips=True
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Combobox(
                v_model=['Vuetify', 'Programming'],
                items=['Vuetify', 'Programming', 'Design', 'Development'],
                label='Select a favorite activity or create a new one',
                multiple=True,
                chips=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-combobox
                v-model="select"
                :items="items"
                label="Select a favorite activity or create a new one"
                multiple
                chips
              ></v-combobox>
            </template>

            <script>
              export default {
                data: () => ({
                  select: ['Vuetify', 'Programming'],
                  items: ['Vuetify', 'Programming', 'Design', 'Development'],
                }),
              }
            </script>

Dense
-----

You can use ``dense`` prop to reduce combobox height and lower max height of list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Combobox(
                v_model=['Vuetify', 'Programming'],
                items=['Vuetify', 'Programming', 'Design', 'Development'],
                label='Combobox',
                multiple=True,
                dense=True
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Combobox(
                v_model=['Vuetify', 'Programming'],
                items=['Vuetify', 'Programming', 'Design', 'Development'],
                label='Combobox',
                multiple=True,
                dense=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-combobox
                v-model="select"
                :items="items"
                label="Combobox"
                multiple
                dense
              ></v-combobox>
            </template>

            <script>
              export default {
                data: () => ({
                  select: ['Vuetify', 'Programming'],
                  items: ['Vuetify', 'Programming', 'Design', 'Development'],
                }),
              }
            </script>
