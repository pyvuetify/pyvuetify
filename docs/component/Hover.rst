Hover
=====

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/hover/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Hover <ipyvuetify.Hover>` component provides a clean interface for handling hover states for any component.

.. api::

    :py:class:`ipyvuetify.Hover`

Usage
-----

The ``v-hover`` component is a wrapper that should contain only one child element, and can trigger an event when hovered over.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            card = v.Card(
                elevation=0,
                children=[
                    v.CardText(children=['Hover over me!'])
                ]
            )

            def on_hover(widget, event, data):
                if data:
                    card.elevation = 12
                else:
                    card.elevation = 0

            hover = v.Hover(
                children=[card]
            )
            hover.on_event('update:model-value', on_hover)

            hover

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            card = v.Card(
                elevation=0,
                children=[
                    v.CardText(children=['Hover over me!'])
                ]
            )

            def on_hover(widget, event, data):
                if data:
                    card.elevation = 12
                else:
                    card.elevation = 0

            hover = v.Hover(
                children=[card]
            )
            hover.on_event('update:model-value', on_hover)

            hover

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 12 : 0">
                  <v-card-text>Hover over me!</v-card-text>
                </v-card>
              </v-hover>
            </template>

Disabled
--------

The ``disabled`` prop disables the hover functionality.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            card = v.Card(
                elevation=0,
                children=[
                    v.CardText(children=['Hover over me!'])
                ]
            )

            hover = v.Hover(
                disabled=True,
                children=[card]
            )

            hover

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            card = v.Card(
                elevation=0,
                children=[
                    v.CardText(children=['Hover over me!'])
                ]
            )

            hover = v.Hover(
                disabled=True,
                children=[card]
            )

            hover

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-hover disabled>
                <v-card elevation="0">
                  <v-card-text>Hover over me!</v-card-text>
                </v-card>
              </v-hover>
            </template>

Transition
----------

Create highly customized components that respond to user interaction.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            overlay = v.Overlay(
                absolute=True,
                opacity=0.8,
                value=False,
                children=[
                    v.Html(tag='div', class_='text-h6 white--text', children=[
                        'For the perfect meal'
                    ])
                ]
            )

            card = v.Card(
                class_='mx-auto',
                max_width='400',
                children=[
                    v.Img(
                        height='250',
                        src='https://cdn.vuetifyjs.com/images/cards/cooking.png',
                        children=[overlay]
                    ),
                    v.CardTitle(children=['QW cooking utensils']),
                    v.CardText(children=[
                        'Our Vintage kitchen utensils delight any chef. Made of bamboo by hand.'
                    ])
                ]
            )

            def on_hover(widget, event, data):
                overlay.value = data

            hover = v.Hover(children=[card])
            hover.on_event('update:model-value', on_hover)

            hover

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            overlay = v.Overlay(
                absolute=True,
                opacity=0.8,
                value=False,
                children=[
                    v.Html(tag='div', class_='text-h6 white--text', children=[
                        'For the perfect meal'
                    ])
                ]
            )

            card = v.Card(
                class_='mx-auto',
                max_width='400',
                children=[
                    v.Img(
                        height='250',
                        src='https://cdn.vuetifyjs.com/images/cards/cooking.png',
                        children=[overlay]
                    ),
                    v.CardTitle(children=['QW cooking utensils']),
                    v.CardText(children=[
                        'Our Vintage kitchen utensils delight any chef.'
                    ])
                ]
            )

            def on_hover(widget, event, data):
                overlay.value = data

            hover = v.Hover(children=[card])
            hover.on_event('update:model-value', on_hover)

            hover

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-hover v-slot="{ hover }">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  >
                    <v-overlay
                      :absolute="true"
                      :opacity="0.8"
                      :value="hover"
                    >
                      <div class="text-h6 white--text">
                        For the perfect meal
                      </div>
                    </v-overlay>
                  </v-img>
                  <v-card-title>QW cooking utensils</v-card-title>
                  <v-card-text>
                    Our Vintage kitchen utensils delight any chef.
                  </v-card-text>
                </v-card>
              </v-hover>
            </template>
