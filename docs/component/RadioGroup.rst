RadioGroup
==========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/radio/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`RadioGroup <ipyvuetify.RadioGroup>` component provides an interface for selecting a single value from a set of options.

.. api::

    :py:class:`ipyvuetify.RadioGroup`

Usage
-----

Radio groups allow you to select a single value from a group of radio buttons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.RadioGroup(
                v_model=1,
                children=[
                    v.Radio(label='Option 1', value=1),
                    v.Radio(label='Option 2', value=2)
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.RadioGroup(
                v_model=1,
                children=[
                    v.Radio(label='Option 1', value=1),
                    v.Radio(label='Option 2', value=2)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-radio-group v-model="radios">
                <v-radio label="Option 1" :value="1"></v-radio>
                <v-radio label="Option 2" :value="2"></v-radio>
              </v-radio-group>
            </template>

Row
---

Radio groups can be displayed in a row instead of a column.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.RadioGroup(
                v_model=1,
                row=True,
                children=[
                    v.Radio(label='Option 1', value=1),
                    v.Radio(label='Option 2', value=2),
                    v.Radio(label='Option 3', value=3)
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.RadioGroup(
                v_model=1,
                row=True,
                children=[
                    v.Radio(label='Option 1', value=1),
                    v.Radio(label='Option 2', value=2),
                    v.Radio(label='Option 3', value=3)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-radio-group v-model="radios" row>
                <v-radio label="Option 1" :value="1"></v-radio>
                <v-radio label="Option 2" :value="2"></v-radio>
                <v-radio label="Option 3" :value="3"></v-radio>
              </v-radio-group>
            </template>
