Timeline
========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/timelines/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Timeline <ipyvuetify.Timeline>` is useful for stylistically displaying chronological information.

.. api::

    :py:class:`ipyvuetify.Timeline`

Usage
-----

``v-timeline``'s in their simplest form display a vertical timeline that should contain at least one ``v-timeline-item``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Timeline(children=[
                v.TimelineItem(children=['Timeline item 1']),
                v.TimelineItem(children=['Timeline item 2']),
                v.TimelineItem(children=['Timeline item 3'])
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Timeline(children=[
                v.TimelineItem(children=['Timeline item 1']),
                v.TimelineItem(children=['Timeline item 2']),
                v.TimelineItem(children=['Timeline item 3'])
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-timeline>
                <v-timeline-item>Timeline item 1</v-timeline-item>
                <v-timeline-item>Timeline item 2</v-timeline-item>
                <v-timeline-item>Timeline item 3</v-timeline-item>
              </v-timeline>
            </template>

Dense
-----

Dense timelines position all content to the right.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Timeline(
                dense=True,
                children=[
                    v.TimelineItem(small=True, children=[
                        v.Alert(color='info', children=['Timeline item 1'])
                    ]),
                    v.TimelineItem(small=True, children=[
                        v.Alert(color='success', children=['Timeline item 2'])
                    ]),
                    v.TimelineItem(small=True, children=[
                        v.Alert(color='error', children=['Timeline item 3'])
                    ])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Timeline(
                dense=True,
                children=[
                    v.TimelineItem(small=True, children=[
                        v.Alert(color='info', children=['Timeline item 1'])
                    ]),
                    v.TimelineItem(small=True, children=[
                        v.Alert(color='success', children=['Timeline item 2'])
                    ])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-timeline dense>
                <v-timeline-item small>
                  <v-alert color="info">Timeline item 1</v-alert>
                </v-timeline-item>
                <v-timeline-item small>
                  <v-alert color="success">Timeline item 2</v-alert>
                </v-timeline-item>
              </v-timeline>
            </template>
