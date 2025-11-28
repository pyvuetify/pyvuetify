Tooltip
=======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/tooltips/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Tooltip <ipyvuetify.Tooltip>` component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a v_model.

.. api::

    :py:class:`ipyvuetify.Tooltip`

Usage
-----

Tooltips can wrap any element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            tooltip = v.Tooltip(
                bottom=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'tooltip',
                    'children': v.Btn(
                        v_on='tooltip.on',
                        color='primary',
                        children=['Button']
                    )
                }],
                children=['This is a tooltip']
            )
            tooltip

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            tooltip = v.Tooltip(
                bottom=True,
                v_slots=[{
                    'name': 'activator',
                    'variable': 'tooltip',
                    'children': v.Btn(
                        v_on='tooltip.on',
                        color='primary',
                        children=['Button']
                    )
                }],
                children=['This is a tooltip']
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" v-on="on">Button</v-btn>
                </template>
                <span>This is a tooltip</span>
              </v-tooltip>
            </template>

Alignment
---------

A tooltip can be aligned to any of the four sides of the activator element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Tooltip(
                    top=True,
                    v_slots=[{
                        'name': 'activator',
                        'variable': 'tooltip',
                        'children': v.Btn(
                            v_on='tooltip.on',
                            color='primary',
                            class_='ma-2',
                            children=['Top']
                        )
                    }],
                    children=['Top tooltip']
                ),
                v.Tooltip(
                    bottom=True,
                    v_slots=[{
                        'name': 'activator',
                        'variable': 'tooltip',
                        'children': v.Btn(
                            v_on='tooltip.on',
                            color='primary',
                            class_='ma-2',
                            children=['Bottom']
                        )
                    }],
                    children=['Bottom tooltip']
                ),
                v.Tooltip(
                    left=True,
                    v_slots=[{
                        'name': 'activator',
                        'variable': 'tooltip',
                        'children': v.Btn(
                            v_on='tooltip.on',
                            color='primary',
                            class_='ma-2',
                            children=['Left']
                        )
                    }],
                    children=['Left tooltip']
                ),
                v.Tooltip(
                    right=True,
                    v_slots=[{
                        'name': 'activator',
                        'variable': 'tooltip',
                        'children': v.Btn(
                            v_on='tooltip.on',
                            color='primary',
                            class_='ma-2',
                            children=['Right']
                        )
                    }],
                    children=['Right tooltip']
                )
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Tooltip(
                    top=True,
                    v_slots=[{
                        'name': 'activator',
                        'variable': 'tooltip',
                        'children': v.Btn(
                            v_on='tooltip.on',
                            color='primary',
                            children=['Top']
                        )
                    }],
                    children=['Top tooltip']
                )
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">Top</v-btn>
                  </template>
                  <span>Top tooltip</span>
                </v-tooltip>
              </v-container>
            </template>
