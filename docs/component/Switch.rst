Switch
======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/switches/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Switch <ipyvuetify.Switch>` component provides users the ability to choose between two distinct values. These are very similar to a toggle, or on/off switch, though aesthetically different than a checkbox.

.. api::

    :py:class:`ipyvuetify.Switch`

Usage
-----

A ``v-switch`` in its simplest form provides a toggle between 2 values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            switch = v.Switch(
                v_model=True,
                label='Switch'
            )
            switch

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            switch = v.Switch(
                v_model=True,
                label='Switch'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-switch
                v-model="value"
                label="Switch"
              ></v-switch>
            </template>

Colors
------

Switches can be colored by using any of the builtin colors and contextual names using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Switch(v_model=True, label='red', color='red'),
                v.Switch(v_model=True, label='primary', color='primary'),
                v.Switch(v_model=True, label='success', color='success')
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Switch(v_model=True, label='red', color='red'),
                v.Switch(v_model=True, label='primary', color='primary'),
                v.Switch(v_model=True, label='success', color='success')
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-switch v-model="value" label="red" color="red"></v-switch>
                <v-switch v-model="value" label="primary" color="primary"></v-switch>
                <v-switch v-model="value" label="success" color="success"></v-switch>
              </v-container>
            </template>

Inset
-----

You can make switch render in inset mode.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Switch(v_model=True, label='Switch 1', inset=True),
                v.Switch(v_model=False, label='Switch 2', inset=True)
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Switch(v_model=True, label='Switch 1', inset=True),
                v.Switch(v_model=False, label='Switch 2', inset=True)
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-switch v-model="switch1" label="Switch 1" inset></v-switch>
                <v-switch v-model="switch2" label="Switch 2" inset></v-switch>
              </v-container>
            </template>
