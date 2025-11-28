Chip
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/chips/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Chip <ipyvuetify.Chip>` component is used to convey small pieces of information. Using the ``close`` property, the chip becomes interactive, allowing user interaction. This component is used by the :py:class:`ChipGroup <ipyvuetify.ChipGroup>` for advanced selection options.

.. api::

    :py:class:`ipyvuetify.Chip`

Usage
-----

Chips come in the following variations: closeable, colored, outlined, and sized. The default slot allows you to customize the content inside the chip.

.. jupyter-execute::

    import ipyvuetify as v

    v.Container(
        children=[
            v.Row(
                children=[
                    v.Col(cols=12, children=[
                        v.Chip(
                            class_='ma-2',
                            children=['Default']
                        ),
                        v.Chip(
                            class_='ma-2',
                            color='primary',
                            children=['Primary']
                        ),
                        v.Chip(
                            class_='ma-2',
                            color='secondary',
                            children=['Secondary']
                        ),
                        v.Chip(
                            class_='ma-2',
                            color='red',
                            text_color='white',
                            children=['Colored Chip']
                        ),
                    ])
                ]
            )
        ]
    )

Closeable
---------

Closeable chips can be controlled with a ``v_model``. You can also listen to the ``click:close`` event to perform actions when the chip is closed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            chip1 = v.Chip(
                class_='ma-2',
                close=True,
                color='teal',
                text_color='white',
                children=['Teal Chip']
            )

            chip2 = v.Chip(
                class_='ma-2',
                close=True,
                color='purple',
                text_color='white',
                children=['Purple Chip']
            )

            chip3 = v.Chip(
                class_='ma-2',
                close=True,
                color='orange',
                text_color='white',
                children=['Orange Chip']
            )

            output = v.Alert(
                class_='mt-4',
                type='info',
                children=['Click the close icon to see the event']
            )

            def on_close(widget, event, data):
                output.children = [f'Closed: {widget.children[0]}']

            chip1.on_event('click:close', on_close)
            chip2.on_event('click:close', on_close)
            chip3.on_event('click:close', on_close)

            v.Container(
                children=[
                    chip1, chip2, chip3,
                    output
                ]
            )

    .. tab-item:: :fas:`code` Code

        .. jupyter-execute::

            import ipyvuetify as v

            chip1 = v.Chip(
                class_='ma-2',
                close=True,
                color='teal',
                text_color='white',
                children=['Teal Chip']
            )

            chip2 = v.Chip(
                class_='ma-2',
                close=True,
                color='purple',
                text_color='white',
                children=['Purple Chip']
            )

            chip3 = v.Chip(
                class_='ma-2',
                close=True,
                color='orange',
                text_color='white',
                children=['Orange Chip']
            )

            output = v.Alert(
                class_='mt-4',
                type='info',
                children=['Click the close icon to see the event']
            )

            def on_close(widget, event, data):
                output.children = [f'Closed: {widget.children[0]}']

            chip1.on_event('click:close', on_close)
            chip2.on_event('click:close', on_close)
            chip3.on_event('click:close', on_close)

            v.Container(
                children=[
                    chip1, chip2, chip3,
                    output
                ]
            )

Colored
-------

Any color from the Material Design palette can be used to change a chip's color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color=color,
                        text_color='white',
                        children=[color.capitalize()]
                    ) for color in colors
                ]
            )

    .. tab-item:: :fas:`code` Code

        .. jupyter-execute::

            import ipyvuetify as v

            colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color=color,
                        text_color='white',
                        children=[color.capitalize()]
                    ) for color in colors
                ]
            )

Outlined
--------

Outlined chips inherit their border color from the current text color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        outlined=True,
                        children=['Outlined']
                    ),
                    v.Chip(
                        class_='ma-2',
                        outlined=True,
                        color='primary',
                        children=['Primary']
                    ),
                    v.Chip(
                        class_='ma-2',
                        outlined=True,
                        color='secondary',
                        children=['Secondary']
                    ),
                    v.Chip(
                        class_='ma-2',
                        outlined=True,
                        color='green',
                        children=['Green']
                    ),
                ]
            )

    .. tab-item:: :fas:`code` Code

        .. jupyter-execute::

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        outlined=True,
                        children=['Outlined']
                    ),
                    v.Chip(
                        class_='ma-2',
                        outlined=True,
                        color='primary',
                        children=['Primary']
                    ),
                    v.Chip(
                        class_='ma-2',
                        outlined=True,
                        color='secondary',
                        children=['Secondary']
                    ),
                    v.Chip(
                        class_='ma-2',
                        outlined=True,
                        color='green',
                        children=['Green']
                    ),
                ]
            )

Sizes
-----

Chips can be small, default, large, or extra-large using the ``small``, ``large``, and ``x_large`` props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        x_small=True,
                        children=['x-small chip']
                    ),
                    v.Chip(
                        class_='ma-2',
                        small=True,
                        children=['small chip']
                    ),
                    v.Chip(
                        class_='ma-2',
                        children=['Default']
                    ),
                    v.Chip(
                        class_='ma-2',
                        large=True,
                        children=['large chip']
                    ),
                    v.Chip(
                        class_='ma-2',
                        x_large=True,
                        children=['x-large chip']
                    ),
                ]
            )

    .. tab-item:: :fas:`code` Code

        .. jupyter-execute::

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        x_small=True,
                        children=['x-small chip']
                    ),
                    v.Chip(
                        class_='ma-2',
                        small=True,
                        children=['small chip']
                    ),
                    v.Chip(
                        class_='ma-2',
                        children=['Default']
                    ),
                    v.Chip(
                        class_='ma-2',
                        large=True,
                        children=['large chip']
                    ),
                    v.Chip(
                        class_='ma-2',
                        x_large=True,
                        children=['x-large chip']
                    ),
                ]
            )

Icon
----

Chips can use icons as content or decoration. You can use the default slot or prepend/append slots for icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color='primary',
                        text_color='white',
                        children=[
                            v.Icon(left=True, children=['mdi-star']),
                            'Premium'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='green',
                        text_color='white',
                        children=[
                            v.Icon(left=True, children=['mdi-check-circle']),
                            'Verified'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='orange',
                        text_color='white',
                        close=True,
                        children=[
                            v.Icon(left=True, children=['mdi-fire']),
                            'Hot Topic'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        children=[
                            v.Avatar(left=True, children=[
                                v.Icon(children=['mdi-account-circle'])
                            ]),
                            'User Account'
                        ]
                    ),
                ]
            )

    .. tab-item:: :fas:`code` Code

        .. jupyter-execute::

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Chip(
                        class_='ma-2',
                        color='primary',
                        text_color='white',
                        children=[
                            v.Icon(left=True, children=['mdi-star']),
                            'Premium'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='green',
                        text_color='white',
                        children=[
                            v.Icon(left=True, children=['mdi-check-circle']),
                            'Verified'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        color='orange',
                        text_color='white',
                        close=True,
                        children=[
                            v.Icon(left=True, children=['mdi-fire']),
                            'Hot Topic'
                        ]
                    ),
                    v.Chip(
                        class_='ma-2',
                        children=[
                            v.Avatar(left=True, children=[
                                v.Icon(children=['mdi-account-circle'])
                            ]),
                            'User Account'
                        ]
                    ),
                ]
            )
