Snackbar
========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/snackbars/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Snackbar <ipyvuetify.Snackbar>` component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.

.. api::

    :py:class:`ipyvuetify.Snackbar`

Usage
-----

A ``v-snackbar`` in its simplest form displays a temporary and closable notification to the user.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            snackbar = v.Snackbar(
                v_model=False,
                children=['Hello, I\'m a snackbar']
            )
            btn = v.Btn(children=['Open Snackbar'])

            def on_click(widget, event, data):
                snackbar.v_model = True

            btn.on_event('click', on_click)

            v.Container(children=[btn, snackbar])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            snackbar = v.Snackbar(
                v_model=False,
                children=['Hello, I\'m a snackbar']
            )
            btn = v.Btn(children=['Open Snackbar'])

            def on_click(widget, event, data):
                snackbar.v_model = True

            btn.on_event('click', on_click)

            v.Container(children=[btn, snackbar])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div>
                <v-btn @click="snackbar = true">Open Snackbar</v-btn>
                <v-snackbar v-model="snackbar">
                  Hello, I'm a snackbar
                </v-snackbar>
              </div>
            </template>

Timeout
-------

The ``timeout`` property lets you customize the delay before the snackbar is hidden.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            snackbar = v.Snackbar(
                v_model=False,
                timeout=2000,
                children=['I will be closed in 2 seconds']
            )
            btn = v.Btn(children=['Open Snackbar'])

            def on_click(widget, event, data):
                snackbar.v_model = True

            btn.on_event('click', on_click)

            v.Container(children=[btn, snackbar])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            snackbar = v.Snackbar(
                v_model=False,
                timeout=2000,
                children=['I will be closed in 2 seconds']
            )
            btn = v.Btn(children=['Open Snackbar'])

            def on_click(widget, event, data):
                snackbar.v_model = True

            btn.on_event('click', on_click)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div>
                <v-btn @click="snackbar = true">Open Snackbar</v-btn>
                <v-snackbar
                  v-model="snackbar"
                  :timeout="2000"
                >
                  I will be closed in 2 seconds
                </v-snackbar>
              </div>
            </template>

Vertical
--------

The ``vertical`` property allows you to stack the content of your snackbar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            snackbar = v.Snackbar(
                v_model=False,
                vertical=True,
                children=[
                    'This is a vertical snackbar with more content',
                    v.Btn(text=True, color='pink', children=['Close'])
                ]
            )
            btn = v.Btn(children=['Open Snackbar'])

            def on_click(widget, event, data):
                snackbar.v_model = True

            def on_close(widget, event, data):
                snackbar.v_model = False

            btn.on_event('click', on_click)
            snackbar.children[1].on_event('click', on_close)

            v.Container(children=[btn, snackbar])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            snackbar = v.Snackbar(
                v_model=False,
                vertical=True,
                children=[
                    'This is a vertical snackbar',
                    v.Btn(text=True, children=['Close'])
                ]
            )
            btn = v.Btn(children=['Open Snackbar'])

            def on_click(widget, event, data):
                snackbar.v_model = True

            btn.on_event('click', on_click)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <div>
                <v-btn @click="snackbar = true">Open Snackbar</v-btn>
                <v-snackbar
                  v-model="snackbar"
                  vertical
                >
                  This is a vertical snackbar
                  <v-btn text>Close</v-btn>
                </v-snackbar>
              </div>
            </template>
