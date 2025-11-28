Select
======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/selects/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Select <ipyvuetify.Select>` component is used for collecting user provided information from a list of options.

.. api::

    :py:class:`ipyvuetify.Select`

Usage
-----

Select fields components are used for collecting user provided information from a list of options.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Select(
                items=['California', 'Colorado', 'Florida', 'Georgia', 'Texas'],
                label='Standard'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Select(
                items=['California', 'Colorado', 'Florida', 'Georgia', 'Texas'],
                label='Standard'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-select
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas']"
                label="Standard"
              ></v-select>
            </template>

Dense
-----

You can use dense prop to reduce the field height and lower max height of list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Select(
                items=['California', 'Colorado', 'Florida', 'Georgia', 'Texas'],
                label='Standard',
                dense=True
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Select(
                items=['California', 'Colorado', 'Florida', 'Georgia', 'Texas'],
                label='Standard',
                dense=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-select
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas']"
                label="Standard"
                dense
              ></v-select>
            </template>

Multiple
--------

A multi-select can utilize v-chip as the display for selected items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Select(
                v_model=['Florida'],
                items=['Alabama', 'Alaska', 'Florida', 'Georgia', 'Texas'],
                label='Multiple',
                multiple=True,
                hint='Select your favorite states',
                persistent_hint=True
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Select(
                v_model=['Florida'],
                items=['Alabama', 'Alaska', 'Florida', 'Georgia', 'Texas'],
                label='Multiple',
                multiple=True,
                hint='Select your favorite states',
                persistent_hint=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-select
                v-model="select"
                :items="['Alabama', 'Alaska', 'Florida', 'Georgia', 'Texas']"
                label="Multiple"
                multiple
                hint="Select your favorite states"
                persistent-hint
              ></v-select>
            </template>
