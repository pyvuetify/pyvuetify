Overlay
=======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/overlays/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Overlay <ipyvuetify.Overlay>` component is used to provide emphasis on a particular element or parts of it. It signals to the user of a state change within the application and can be used for creating loaders, dialogs and more.

.. api::

    :py:class:`ipyvuetify.Overlay`

Usage
-----

In its simplest form, the ``v-overlay`` component will add a dimmed layer over your application.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            overlay = v.Overlay(value=False)

            btn = v.Btn(
                children=['Show Overlay'],
                on_event=('click', lambda *args: setattr(overlay, 'value', True))
            )

            def close_overlay(*args):
                overlay.value = False

            overlay.on_event('click', close_overlay)

            v.Container(children=[btn, overlay])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            overlay = v.Overlay(value=False)

            btn = v.Btn(
                children=['Show Overlay'],
                on_event=('click', lambda *args: setattr(overlay, 'value', True))
            )

            def close_overlay(*args):
                overlay.value = False

            overlay.on_event('click', close_overlay)

            v.Container(children=[btn, overlay])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-btn @click="overlay = true">
                  Show Overlay
                </v-btn>
                <v-overlay :value="overlay" @click="overlay = false">
                </v-overlay>
              </v-container>
            </template>

Absolute
--------

Absolute overlays are positioned absolutely and contained inside of their parent element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            overlay = v.Overlay(absolute=True, value=False)

            btn = v.Btn(
                children=['Show Overlay'],
                on_event=('click', lambda *args: setattr(overlay, 'value', True))
            )

            def close_overlay(*args):
                overlay.value = False

            overlay.on_event('click', close_overlay)

            v.Card(
                height='300',
                style_='position: relative;',
                children=[
                    v.CardText(children=[btn]),
                    overlay
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            overlay = v.Overlay(absolute=True, value=False)

            btn = v.Btn(
                children=['Show Overlay'],
                on_event=('click', lambda *args: setattr(overlay, 'value', True))
            )

            def close_overlay(*args):
                overlay.value = False

            overlay.on_event('click', close_overlay)

            v.Card(
                height='300',
                style_='position: relative;',
                children=[
                    v.CardText(children=[btn]),
                    overlay
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-card height="300" style="position: relative;">
                <v-card-text>
                  <v-btn @click="overlay = true">
                    Show Overlay
                  </v-btn>
                </v-card-text>
                <v-overlay :value="overlay" absolute @click="overlay = false">
                </v-overlay>
              </v-card>
            </template>

Opacity
-------

Opacity allows you to customize the transparency of ``v-overlay`` components.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            overlay = v.Overlay(value=False, opacity=0.3)

            btn = v.Btn(
                children=['Show Overlay'],
                on_event=('click', lambda *args: setattr(overlay, 'value', True))
            )

            def close_overlay(*args):
                overlay.value = False

            overlay.on_event('click', close_overlay)

            v.Container(children=[btn, overlay])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            overlay = v.Overlay(value=False, opacity=0.3)

            btn = v.Btn(
                children=['Show Overlay'],
                on_event=('click', lambda *args: setattr(overlay, 'value', True))
            )

            def close_overlay(*args):
                overlay.value = False

            overlay.on_event('click', close_overlay)

            v.Container(children=[btn, overlay])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-btn @click="overlay = true">
                  Show Overlay
                </v-btn>
                <v-overlay :value="overlay" :opacity="0.3" @click="overlay = false">
                </v-overlay>
              </v-container>
            </template>
