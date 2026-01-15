Sheet
=====

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/sheets/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Sheet <ipyvuetify.Sheet>` component is the baseline for numerous components such as v-card, v-toolbar, and more. The available properties form the foundation of Material Design.

.. api::

    :py:class:`ipyvuetify.Sheet`

Usage
-----

The ``v-sheet`` component is a transformable piece of paper that provides a basic foundation for Vuetify features.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Sheet(
                color='white',
                elevation=1,
                height='100',
                width='100'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Sheet(
                color='white',
                elevation=1,
                height='100',
                width='100'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-sheet
                color="white"
                :elevation="1"
                height="100"
                width="100"
              ></v-sheet>
            </template>

Elevation
---------

The ``v-sheet`` component accepts a custom elevation between 0 and 24.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Sheet(elevation=0, height='100', width='100', class_='ma-2'),
                v.Sheet(elevation=6, height='100', width='100', class_='ma-2'),
                v.Sheet(elevation=12, height='100', width='100', class_='ma-2'),
                v.Sheet(elevation=24, height='100', width='100', class_='ma-2')
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Sheet(elevation=0, height='100', width='100'),
                v.Sheet(elevation=6, height='100', width='100'),
                v.Sheet(elevation=12, height='100', width='100'),
                v.Sheet(elevation=24, height='100', width='100')
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-sheet :elevation="0" height="100" width="100"></v-sheet>
                <v-sheet :elevation="6" height="100" width="100"></v-sheet>
                <v-sheet :elevation="12" height="100" width="100"></v-sheet>
                <v-sheet :elevation="24" height="100" width="100"></v-sheet>
              </v-container>
            </template>
