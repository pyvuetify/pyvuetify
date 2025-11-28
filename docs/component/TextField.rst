TextField
=========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/text-fields/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`TextField <ipyvuetify.TextField>` component is used for collecting user provided information. Text fields components are used for collecting user provided information.

.. api::

    :py:class:`ipyvuetify.TextField`

Usage
-----

A simple text field with placeholder and/or label.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            text_field = v.TextField(
                v_model='',
                label='Label'
            )
            text_field

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text_field = v.TextField(
                v_model='',
                label='Label'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-text-field
                v-model="value"
                label="Label"
              ></v-text-field>
            </template>

Dense
-----

You can reduce the text field height with ``dense`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            text_field = v.TextField(
                v_model='',
                label='Dense',
                dense=True
            )
            text_field

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text_field = v.TextField(
                v_model='',
                label='Dense',
                dense=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-text-field
                v-model="value"
                label="Dense"
                dense
              ></v-text-field>
            </template>

Outlined
--------

Text fields can be used with an alternative outlined design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            text_field = v.TextField(
                v_model='John',
                label='Outlined',
                outlined=True
            )
            text_field

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text_field = v.TextField(
                v_model='John',
                label='Outlined',
                outlined=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-text-field
                v-model="value"
                label="Outlined"
                outlined
              ></v-text-field>
            </template>
