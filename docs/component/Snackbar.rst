Snackbar
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Snackbar
    documentation <https://v2.vuetifyjs.com/en/components/snackbars/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Snackbar <ipyvuetify.Snackbar>` component is used to display a
quick message to a user. Snackbars support positioning, removal delay, and
callbacks.

.. api::

    - :py:class:`ipyvuetify.Snackbar`

Usage
-----

A :py:class:`Snackbar <ipyvuetify.Snackbar>` in its simplest form displays a
temporary and closable notification to the user.

.. jupyter-execute::
    :raises:
    :hide-code:

    import ipyvuetify as v
    from ipywidgets import jslink

    switch = v.Switch(label='Open Snackbar', v_model=False)
    switch_close = v.Switch(v_model=False)
    snackbar = v.Snackbar(
        dark=True,
        v_model=False,
        children=['This is a simple snackbar', switch_close],
    )

    jslink((switch, 'v_model'), (snackbar, 'v_model'))
    jslink((switch_close, 'v_model'), (snackbar, 'v_model'))

    v.Container(class_='text-center ma-2', children=[switch, snackbar])

Examples
--------

Multi line
^^^^^^^^^^

The ``multi_line`` property extends the height of the
:py:class:`Snackbar <ipyvuetify.Snackbar>` to give you a little more room for
content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Open Snackbar', v_model=False)
            switch_close = v.Switch(v_model=False)
            snackbar = v.Snackbar(
                v_model=False,
                multi_line=True,
                children=[
                    'This is a multi-line snackbar. You can add more text '
                    'here to demonstrate the increased height.',
                    switch_close
                ],
            )

            jslink((switch, 'v_model'), (snackbar, 'v_model'))
            jslink((switch_close, 'v_model'), (snackbar, 'v_model'))

            v.Container(class_='text-center ma-2', children=[switch, snackbar])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Open Snackbar', v_model=False)
            switch_close = v.Switch(v_model=False)
            snackbar = v.Snackbar(
                v_model=False,
                multi_line=True,
                children=[
                    'This is a multi-line snackbar. You can add more text '
                    'here to demonstrate the increased height.',
                    switch_close
                ],
            )

            jslink((switch, 'v_model'), (snackbar, 'v_model'))
            jslink((switch_close, 'v_model'), (snackbar, 'v_model'))

            v.Container(class_='text-center ma-2', children=[switch, snackbar])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-btn
                dark
                color="red darken-2"
                @click="snackbar = true"
                >
                Open Snackbar
                </v-btn>

                <v-snackbar
                v-model="snackbar"
                :multi-line="multiLine"
                >
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="red"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>
            </div>
            </template>

Timeout
^^^^^^^

The ``timeout`` property lets you customize the delay before the
:py:class:`Snackbar <ipyvuetify.Snackbar>` is hidden.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Open Snackbar', v_model=False)
            switch_close = v.Switch(v_model=False)
            snackbar = v.Snackbar(
                v_model=False,
                timeout=2000,
                children=['This snackbar will disappear after 2 seconds', switch_close],
            )

            jslink((switch, 'v_model'), (snackbar, 'v_model'))
            jslink((switch_close, 'v_model'), (snackbar, 'v_model'))

            v.Container(class_='text-center ma-2', children=[switch, snackbar])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Open Snackbar', v_model=False)
            switch_close = v.Switch(v_model=False)
            snackbar = v.Snackbar(
                v_model=False,
                timeout=2000,
                children=['This snackbar will disappear after 2 seconds', switch_close],
            )

            jslink((switch, 'v_model'), (snackbar, 'v_model'))
            jslink((switch_close, 'v_model'), (snackbar, 'v_model'))

            v.Container(class_='text-center ma-2', children=[switch, snackbar])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-btn
                dark
                color="orange darken-2"
                @click="snackbar = true"
                >
                Open Snackbar
                </v-btn>

                <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
                >
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>
            </div>
            </template>

Variants
^^^^^^^^

Apply different styles to the snackbar using props such as ``text``,
``shaped``, ``outlined``, and more.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                height="300",
                flat=True,
                children=[
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        left=True,
                        shaped=True,
                        top=True,
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['Shaped']),
                            ' property.'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        color='blue-grey',
                        absolute=True,
                        right=True,
                        rounded='pill',
                        top=True,
                        children=[
                            'rounded="pill"'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        centered=True,
                        left=True,
                        color='deep-purple accent-4',
                        elevation=24,
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['elevation: 24']),
                            ' property.'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        centered=True,
                        right=True,
                        tile=True,
                        color='red accent-2',
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['tile']),
                            ' property.'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        bottom=True,
                        color='primary',
                        left=True,
                        text=True,
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['text']),
                            ' property.'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        bottom=True,
                        color='success',
                        outlined=True,
                        right=True,
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['outlined']),
                            ' property.'
                        ],
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                height="300",
                flat=True,
                children=[
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        left=True,
                        shaped=True,
                        top=True,
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['Shaped']),
                            ' property.'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        color='blue-grey',
                        absolute=True,
                        right=True,
                        rounded='pill',
                        top=True,
                        children=[
                            'rounded="pill"'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        centered=True,
                        left=True,
                        color='deep-purple accent-4',
                        elevation=24,
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['elevation: 24']),
                            ' property.'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        centered=True,
                        right=True,
                        tile=True,
                        color='red accent-2',
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['tile']),
                            ' property.'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        bottom=True,
                        color='primary',
                        left=True,
                        text=True,
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['text']),
                            ' property.'
                        ]
                    ),
                    v.Snackbar(
                        v_model=True,
                        absolute=True,
                        bottom=True,
                        color='success',
                        outlined=True,
                        right=True,
                        children=[
                            'snackbar with ',
                            v.Html(tag='strong', children=['outlined']),
                            ' property.'
                        ],
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                height="300"
                flat
            >
                <v-snackbar
                :timeout="-1"
                :value="true"
                absolute
                left
                shaped
                top
                >
                snackbar with <strong>Shaped</strong> property.
                </v-snackbar>

                <v-snackbar
                :timeout="-1"
                :value="true"
                color="blue-grey"
                absolute
                right
                rounded="pill"
                top
                >
                rounded="pill"
                </v-snackbar>

                <v-snackbar
                :timeout="-1"
                :value="true"
                absolute
                centered
                left
                color="deep-purple accent-4"
                elevation="24"
                >
                snackbar with <strong>elevation: 24</strong> property.
                </v-snackbar>

                <v-snackbar
                :timeout="-1"
                :value="true"
                absolute
                centered
                right
                tile
                color="red accent-2"
                >
                snackbar with <strong>tile</strong> property.
                </v-snackbar>

                <v-snackbar
                :timeout="-1"
                :value="true"
                absolute
                bottom
                color="primary"
                left
                text
                >
                snackbar with <strong>text</strong> property.
                </v-snackbar>

                <v-snackbar
                :timeout="-1"
                :value="true"
                absolute
                bottom
                color="success"
                outlined
                right
                >
                snackbar with <strong>outlined</strong> property.
                </v-snackbar>
            </v-card>
            </template>

Vertical
^^^^^^^^

The ``vertical`` property allows you to stack the content of your
:py:class:`Snackbar <ipyvuetify.Snackbar>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Open Snackbar', v_model=False)
            switch_close = v.Switch(v_model=False)
            snackbar = v.Snackbar(
                v_model=False,
                vertical=True,
                children=['This is a vertical snackbar', switch_close],
            )

            jslink((switch, 'v_model'), (snackbar, 'v_model'))
            jslink((switch_close, 'v_model'), (snackbar, 'v_model'))

            v.Container(class_='text-center ma-2', children=[switch, snackbar])


    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label='Open Snackbar', v_model=False)
            switch_close = v.Switch(v_model=False)
            snackbar = v.Snackbar(
                v_model=False,
                vertical=True,
                children=['This is a vertical snackbar', switch_close],
            )

            jslink((switch, 'v_model'), (snackbar, 'v_model'))
            jslink((switch_close, 'v_model'), (snackbar, 'v_model'))

            v.Container(class_='text-center ma-2', children=[switch, snackbar])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center">
                <v-btn
                dark
                color="indigo"
                @click="snackbar = true"
                >
                Open Snackbar
                </v-btn>

                <v-snackbar
                v-model="snackbar"
                :vertical="vertical"
                >
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="indigo"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>
            </div>
            </template>
