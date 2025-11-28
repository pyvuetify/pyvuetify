SlideGroup
==========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/slide-groups/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SlideGroup <ipyvuetify.SlideGroup>` component is used to display pseudo paginated information. It uses ItemGroup at its core and provides a baseline for components such as Tabs and ChipGroup.

.. api::

    :py:class:`ipyvuetify.SlideGroup`

Usage
-----

Similar to the v-window component, ``v-slide-group`` lets items take up as much space as needed, allowing the user to move horizontally through the provided information.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            slide_group = v.SlideGroup(v_model=None, children=[
                v.SlideItem(children=[
                    v.Btn(children=['Option 1'], class_='ma-2')
                ]),
                v.SlideItem(children=[
                    v.Btn(children=['Option 2'], class_='ma-2')
                ]),
                v.SlideItem(children=[
                    v.Btn(children=['Option 3'], class_='ma-2')
                ]),
                v.SlideItem(children=[
                    v.Btn(children=['Option 4'], class_='ma-2')
                ]),
                v.SlideItem(children=[
                    v.Btn(children=['Option 5'], class_='ma-2')
                ])
            ])
            slide_group

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            slide_group = v.SlideGroup(v_model=None, children=[
                v.SlideItem(children=[
                    v.Btn(children=['Option 1'])
                ]),
                v.SlideItem(children=[
                    v.Btn(children=['Option 2'])
                ]),
                v.SlideItem(children=[
                    v.Btn(children=['Option 3'])
                ])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-slide-group v-model="model">
                <v-slide-item>
                  <v-btn>Option 1</v-btn>
                </v-slide-item>
                <v-slide-item>
                  <v-btn>Option 2</v-btn>
                </v-slide-item>
                <v-slide-item>
                  <v-btn>Option 3</v-btn>
                </v-slide-item>
              </v-slide-group>
            </template>

Center Active
-------------

Using the ``center_active`` prop will make the active item always centered.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            slide_group = v.SlideGroup(
                v_model=0,
                center_active=True,
                children=[
                    v.SlideItem(
                        v_slots=[{'name': 'default', 'variable': 'slotProps', 'children':
                            v.Card(
                                color='grey' if not 'slotProps.active' else 'primary',
                                height='200',
                                width='100',
                                class_='ma-2'
                            )
                        }]
                    ) for i in range(10)
                ]
            )
            slide_group

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            slide_group = v.SlideGroup(
                v_model=0,
                center_active=True,
                children=[
                    v.SlideItem(children=[
                        v.Card(height='200', width='100')
                    ]) for i in range(10)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-slide-group
                v-model="model"
                center-active
              >
                <v-slide-item v-for="n in 10" :key="n">
                  <v-card height="200" width="100"></v-card>
                </v-slide-item>
              </v-slide-group>
            </template>
