Flex
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Flex documentation
    <https://v2.vuetifyjs.com/en/styles/flex/>`__. All examples have been converted
    to ipyvuetify syntax.

Control the layout of flex containers with alignment, justification and more with
responsive flexbox utilities.

.. note::
    Flex is implemented using CSS utility classes that you apply via the ``class_``
    parameter on ipyvuetify components.

.. Warning::

    The ``d-flex`` class sets the CSS of the according element to
    ``display: flex !important``. As a result, it overrides any other settings.



Enabling flexbox
----------------

Using **display** utilities you can turn any element into a flexbox container
transforming direct children elements into flex items. Using additional flex
property utilities, you can customize their interaction even further.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="d-flex pa-2",
                outlined=True,
                tile=True,
                children=[
                    v.Html(tag="div", children=["I'm a flexbox container!"])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="d-flex pa-2",
                outlined=True,
                tile=True,
                children=[
                    v.Html(tag="div", children=["I'm a flexbox container!"])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="d-flex pa-2"
                outlined
                tile
            >
                <div>
                I'm a flexbox container!
                </div>
            </v-card>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="d-inline-flex pa-2",
                outlined=True,
                tile=True,
                children=[
                    v.Html(tag="div", children=["I'm an inline flexbox container!"])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="d-inline-flex pa-2",
                outlined=True,
                tile=True,
                children=[
                    v.Html(tag="div", children=["I'm an inline flexbox container!"])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="d-inline-flex pa-2"
                outlined
                tile
            >
                <div>
                I'm an inline flexbox container!
                </div>
            </v-card>
            </template>

You can also customize flex utilities to apply based upon various breakpoints:

- ``.d-flex``
- ``.d-inline-flex``
- ``.d-sm-flex``
- ``.d-sm-inline-flex``
- ``.d-md-flex``
- ``.d-md-inline-flex``
- ``.d-lg-flex``
- ``.d-lg-inline-flex``
- ``.d-xl-flex``
- ``.d-xl-inline-flex``

Examples
--------

Flex direction
^^^^^^^^^^^^^^

By default, ``d-flex`` applies ``flex-direction: row`` and can generally be omitted.
However, there may be situations where you need to explicitly define it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-row mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex flex-row-reverse",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-row mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex flex-row-reverse",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex flex-row mb-6"
                :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                flat
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </v-card>
                <v-card
                class="d-flex flex-row-reverse"
                :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                flat
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </v-card>
            </div>
            </template>

The ``flex-column`` and ``flex-column-reverse`` utility classes can be used to
change the orientation of the flexbox container. Keep in mind that IE11 and Safari
may have issues with the column direction.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-column mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex flex-column-reverse",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-column mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex flex-column-reverse",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <div class="d-flex flex-column mb-6">
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </div>
                <div class="d-flex flex-column-reverse">
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </div>
            </div>
            </template>

There are also responsive variations for ``flex-direction``:

- ``.flex-row``
- ``.flex-row-reverse``
- ``.flex-column``
- ``.flex-column-reverse``
- ``.flex-sm-row``
- ``.flex-sm-row-reverse``
- ``.flex-sm-column``
- ``.flex-sm-column-reverse``
- ``.flex-md-row``
- ``.flex-md-row-reverse``
- ``.flex-md-column``
- ``.flex-md-column-reverse``
- ``.flex-lg-row``
- ``.flex-lg-row-reverse``
- ``.flex-lg-column``
- ``.flex-lg-column-reverse``
- ``.flex-xl-row``
- ``.flex-xl-row-reverse``
- ``.flex-xl-column``
- ``.flex-xl-column-reverse``

Flex justify
^^^^^^^^^^^^

The ``justify-content`` flex setting can be changed using the flex justify classes.
This by default will modify the flexbox items on the x-axis but is reversed when
using ``flex-direction: column``, modifying the y-axis. Choose from ``start``
(browser default), ``end``, ``center``, ``space-between``, or ``space-around``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                class_="ma-2",
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex justify-start mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-start"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex justify-end mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-end"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex justify-center mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-center"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex justify-space-between mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-space-between"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex justify-space-around mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-space-around"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                class_="ma-2",
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex justify-start mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-start"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex justify-end mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-end"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex justify-center mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-center"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex justify-space-between mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-space-between"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex justify-space-around mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["justify-space-around"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex justify-start mb-6"
                :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                flat
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    justify-start
                </v-card>
                </v-card>

                <v-card
                class="d-flex justify-end mb-6"
                :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                flat
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    justify-end
                </v-card>
                </v-card>

                <v-card
                class="d-flex justify-center mb-6"
                :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                flat
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    justify-center
                </v-card>
                </v-card>

                <v-card
                class="d-flex justify-space-between mb-6"
                :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                flat
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    justify-space-between
                </v-card>
                </v-card>

                <v-card
                class="d-flex justify-space-around mb-6"
                :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                flat
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    justify-space-around
                </v-card>
                </v-card>
            </div>
            </template>

There are also responsive variations for ``justify-content``:

- ``.justify-start``
- ``.justify-end``
- ``.justify-center``
- ``.justify-space-between``
- ``.justify-space-around``
- ``.justify-sm-start``
- ``.justify-sm-end``
- ``.justify-sm-center``
- ``.justify-sm-space-between``
- ``.justify-sm-space-around``
- ``.justify-md-start``
- ``.justify-md-end``
- ``.justify-md-center``
- ``.justify-md-space-between``
- ``.justify-md-space-around``
- ``.justify-lg-start``
- ``.justify-lg-end``
- ``.justify-lg-center``
- ``.justify-lg-space-between``
- ``.justify-lg-space-around``
- ``.justify-xl-start``
- ``.justify-xl-end``
- ``.justify-xl-center``
- ``.justify-xl-space-between``
- ``.justify-xl-space-around``

Flex align
^^^^^^^^^^

The ``align-items`` flex setting can be changed using the flex align classes. This by default will modify the flexbox items on the y-axis but is reversed when using ``flex-direction: column``, modifying the x-axis. Choose from ``start``, ``end``, ``center``, ``baseline``, or ``stretch`` (browser default).

.. note::
    When using flex align with IE11 you will need to set an explicit ``height`` as ``min-height`` will not suffice and cause undesired results.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-start mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-start"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-end mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-end"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-center mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-center"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-baseline mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-baseline"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-stretch mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-stretch"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-start mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-start"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-end mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-end"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-center mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-center"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-baseline mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-baseline"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-stretch mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["align-stretch"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-start mb-6"
                color="grey lighten-2"
                flat
                height="100"
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    align-start
                </v-card>
                </v-card>

                <v-card
                class="d-flex align-end mb-6"
                color="grey lighten-2"
                flat
                height="100"
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    align-end
                </v-card>
                </v-card>

                <v-card
                class="d-flex align-center mb-6"
                color="grey lighten-2"
                flat
                height="100"
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    align-center
                </v-card>
                </v-card>

                <v-card
                class="d-flex align-baseline mb-6"
                color="grey lighten-2"
                flat
                height="100"
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    align-baseline
                </v-card>
                </v-card>

                <v-card
                class="d-flex align-stretch mb-6"
                color="grey lighten-2"
                flat
                height="100"
                tile
                >
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    align-stretch
                </v-card>
                </v-card>
            </div>
            </template>

There are also responsive variations for ``align-items``:

- ``.align-start``
- ``.align-end``
- ``.align-center``
- ``.align-baseline``
- ``.align-stretch``
- ``.align-sm-start``
- ``.align-sm-end``
- ``.align-sm-center``
- ``.align-sm-baseline``
- ``.align-sm-stretch``
- ``.align-md-start``
- ``.align-md-end``
- ``.align-md-center``
- ``.align-md-baseline``
- ``.align-md-stretch``
- ``.align-lg-start``
- ``.align-lg-end``
- ``.align-lg-center``
- ``.align-lg-baseline``
- ``.align-lg-stretch``
- ``.align-xl-start``
- ``.align-xl-end``
- ``.align-xl-center``
- ``.align-xl-baseline``
- ``.align-xl-stretch``

Flex align self
^^^^^^^^^^^^^^^

The ``align-self`` flex setting can be changed using the flex align-self classes. This by default will modify the flexbox items on the x-axis but is reversed when using ``flex-direction: column``, modifying the y-axis. Choose from ``start``, ``end``, ``center``, ``baseline``, ``auto``, or ``stretch`` (browser default).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-start",
                                outlined=True,
                                tile=True,
                                children=["Aligned start"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-center",
                                outlined=True,
                                tile=True,
                                children=["Aligned center"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-end",
                                outlined=True,
                                tile=True,
                                children=["Aligned end"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-baseline",
                                outlined=True,
                                tile=True,
                                children=["Aligned baseline"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-auto",
                                outlined=True,
                                tile=True,
                                children=["Aligned auto"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-stretch",
                                outlined=True,
                                tile=True,
                                children=["Aligned stretch"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-start",
                                outlined=True,
                                tile=True,
                                children=["Aligned start"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-center",
                                outlined=True,
                                tile=True,
                                children=["Aligned center"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-end",
                                outlined=True,
                                tile=True,
                                children=["Aligned end"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-baseline",
                                outlined=True,
                                tile=True,
                                children=["Aligned baseline"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-auto",
                                outlined=True,
                                tile=True,
                                children=["Aligned auto"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        height="100",
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            ),
                            v.Card(
                                class_="pa-2 align-self-stretch",
                                outlined=True,
                                tile=True,
                                children=["Aligned stretch"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["flex item"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>

                <v-card class="pa-2 align-self-start" outlined tile>
                    Aligned start
                </v-card>

                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>
                </v-card>

                <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>

                <v-card class="pa-2 align-self-center" outlined tile>
                    Aligned center
                </v-card>

                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>
                </v-card>

                <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>

                <v-card class="pa-2 align-self-end" outlined tile>
                    Aligned end
                </v-card>

                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>
                </v-card>

                <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>

                <v-card class="pa-2 align-self-baseline" outlined tile>
                    Aligned baseline
                </v-card>

                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>
                </v-card>

                <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>

                <v-card class="pa-2 align-self-auto" outlined tile>
                    Aligned auto
                </v-card>

                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>
                </v-card>

                <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>

                <v-card class="pa-2 align-self-stretch" outlined tile>
                    Aligned stretch
                </v-card>

                <v-card class="pa-2" outlined tile>
                    flex item
                </v-card>
                </v-card>
            </div>
            </template>

There are also responsive variations for ``align-self``:

- ``.align-self-start``
- ``.align-self-end``
- ``.align-self-center``
- ``.align-self-baseline``
- ``.align-self-auto``
- ``.align-self-stretch``
- ``.align-self-sm-start``
- ``.align-self-sm-end``
- ``.align-self-sm-center``
- ``.align-self-sm-baseline``
- ``.align-self-sm-auto``
- ``.align-self-sm-stretch``
- ``.align-self-md-start``
- ``.align-self-md-end``
- ``.align-self-md-center``
- ``.align-self-md-baseline``
- ``.align-self-md-auto``
- ``.align-self-md-stretch``
- ``.align-self-lg-start``
- ``.align-self-lg-end``
- ``.align-self-lg-center``
- ``.align-self-lg-baseline``
- ``.align-self-lg-auto``
- ``.align-self-lg-stretch``
- ``.align-self-xl-start``
- ``.align-self-xl-end``
- ``.align-self-xl-center``
- ``.align-self-xl-baseline``
- ``.align-self-xl-auto``
- ``.align-self-xl-stretch``

Auto margins
^^^^^^^^^^^^

Using the margin helper classes in a flexbox container, you can control the
positioning of flex items on the x-axis or y-axis when using ``flex-row`` or
``flex-column`` respectively.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(3)
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2 mr-auto",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2 ml-auto",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(3)
                        ]
                    ),
                    v.Card(
                        class_="d-flex mb-6",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2 mr-auto",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2 ml-auto",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
                <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
                    Flex item
                </v-card>
                </v-card>

                <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
                <v-card class="pa-2 mr-auto" outlined tile> Flex item </v-card>

                <v-card class="pa-2" outlined tile> Flex item </v-card>

                <v-card class="pa-2" outlined tile> Flex item </v-card>
                </v-card>

                <v-card class="d-flex" color="grey lighten-2" flat tile>
                <v-card class="pa-2" outlined tile> Flex item </v-card>

                <v-card class="pa-2" outlined tile> Flex item </v-card>

                <v-card class="pa-2 ml-auto" outlined tile> Flex item </v-card>
                </v-card>
            </div>
            </template>

Using align-items
"""""""""""""""""

Mixing ``flex-direction: column`` and ``align-items``, you can utilize ``.mt-auto``
and ``.mb-auto`` helper classes to adjust flex item positioning.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-start flex-column mb-6",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        height="200",
                        children=[
                            v.Card(
                                class_="pa-2 mb-auto",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-end flex-column",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2 mt-auto",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-start flex-column mb-6",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        height="200",
                        children=[
                            v.Card(
                                class_="pa-2 mb-auto",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            )
                        ]
                    ),
                    v.Card(
                        class_="d-flex align-end flex-column",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ),
                            v.Card(
                                class_="pa-2 mt-auto",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-start flex-column mb-6"
                color="grey lighten-2"
                flat
                tile
                height="200"
                >
                <v-card class="pa-2 mb-auto" outlined tile> Flex item </v-card>

                <v-card class="pa-2" outlined tile> Flex item </v-card>

                <v-card class="pa-2" outlined tile> Flex item </v-card>
                </v-card>

                <v-card
                class="d-flex align-end flex-column"
                color="grey lighten-2"
                flat
                tile
                height="200"
                >
                <v-card class="pa-2" outlined tile> Flex item </v-card>

                <v-card class="pa-2" outlined tile> Flex item </v-card>

                <v-card class="pa-2 mt-auto" outlined tile> Flex item </v-card>
                </v-card>
            </div>
            </template>

Flex wrap
^^^^^^^^^

By default ``.d-flex`` does not provide any wrapping (behaves similarly to
``flex-wrap: nowrap``). This can be modified by applying flex-wrap helper classes
in the format ``flex-{condition}`` where condition can be ``nowrap``, ``wrap``,
or ``wrap-reverse``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-nowrap py-3",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        width="125",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-nowrap py-3",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        width="125",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(5)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex flex-nowrap py-3"
                color="grey lighten-2"
                flat
                tile
                width="125"
                >
                <v-card
                    v-for="n in 5"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item
                </v-card>
                </v-card>
            </div>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 21)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 21)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex flex-wrap"
                color="grey lighten-2"
                flat
                tile
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </v-card>
            </div>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap-reverse",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 21)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap-reverse",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 21)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex flex-wrap-reverse"
                color="grey lighten-2"
                flat
                tile
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </v-card>
            </div>
            </template>

These helper classes can also be applied in the format ``flex-{breakpoint}-{condition}``
to create more responsive variations based on breakpoints:

- ``.flex-nowrap``
- ``.flex-wrap``
- ``.flex-wrap-reverse``
- ``.flex-sm-nowrap``
- ``.flex-sm-wrap``
- ``.flex-sm-wrap-reverse``
- ``.flex-md-nowrap``
- ``.flex-md-wrap``
- ``.flex-md-wrap-reverse``
- ``.flex-lg-nowrap``
- ``.flex-lg-wrap``
- ``.flex-lg-wrap-reverse``
- ``.flex-xl-nowrap``
- ``.flex-xl-wrap``
- ``.flex-xl-wrap-reverse``

Flex order
^^^^^^^^^^

You can change the visual order of flex items with the ``order`` utilities.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap-reverse",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="order-3 pa-2",
                                outlined=True,
                                tile=True,
                                children=["First flex item"]
                            ),
                            v.Card(
                                class_="order-1 pa-2",
                                outlined=True,
                                tile=True,
                                children=["Second flex item"]
                            ),
                            v.Card(
                                class_="order-2 pa-2",
                                outlined=True,
                                tile=True,
                                children=["Third flex item"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap-reverse",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="order-3 pa-2",
                                outlined=True,
                                tile=True,
                                children=["First flex item"]
                            ),
                            v.Card(
                                class_="order-1 pa-2",
                                outlined=True,
                                tile=True,
                                children=["Second flex item"]
                            ),
                            v.Card(
                                class_="order-2 pa-2",
                                outlined=True,
                                tile=True,
                                children=["Third flex item"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card class="d-flex flex-wrap-reverse" color="grey lighten-2" flat tile>
                <v-card class="order-3 pa-2" outlined tile> First flex item </v-card>

                <v-card class="order-1 pa-2" outlined tile> Second flex item </v-card>

                <v-card class="order-2 pa-2" outlined tile> Third flex item </v-card>
                </v-card>
            </div>
            </template>

There are also responsive variations for ``order``:

- ``.order-first``
- ``.order-0`` through ``.order-12``
- ``.order-last``
- ``.order-sm-first``
- ``.order-sm-0`` through ``.order-sm-12``
- ``.order-sm-last``
- ``.order-md-first``
- ``.order-md-0`` through ``.order-md-12``
- ``.order-md-last``
- ``.order-lg-first``
- ``.order-lg-0`` through ``.order-lg-12``
- ``.order-lg-last``
- ``.order-xl-first``
- ``.order-xl-0`` through ``.order-xl-12``
- ``.order-xl-last``

Flex align content
^^^^^^^^^^^^^^^^^^

The ``align-content`` flex setting can be changed using the flex align-content classes. This by default will modify the flexbox items on the x-axis but is reversed when using ``flex-direction: column``, modifying the y-axis. Choose from ``start`` (browser default), ``end``, ``center``, ``between``, ``around`` or ``stretch``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-start flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-start flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-content-start flex-wrap"
                color="grey lighten-2"
                flat
                tile
                min-height="200"
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item
                </v-card>
                </v-card>
            </div>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-end flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-end flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-content-end flex-wrap"
                color="grey lighten-2"
                flat
                tile
                min-height="200"
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item
                </v-card>
                </v-card>
            </div>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-center flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-center flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-content-center flex-wrap"
                color="grey lighten-2"
                flat
                tile
                min-height="200"
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item
                </v-card>
                </v-card>
            </div>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-space-between flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-space-between flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-content-space-between flex-wrap"
                color="grey lighten-2"
                flat
                tile
                min-height="200"
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item
                </v-card>
                </v-card>
            </div>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-space-around flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-space-around flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-content-space-around flex-wrap"
                color="grey lighten-2"
                flat
                tile
                min-height="200"
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item
                </v-card>
                </v-card>
            </div>
            </template>

There are also responsive variations for ``align-content``:

- ``.align-content-start``
- ``.align-content-end``
- ``.align-content-center``
- ``.align-content-space-between``
- ``.align-content-space-around``
- ``.align-content-stretch``
- ``.align-sm-content-start``
- ``.align-sm-content-end``
- ``.align-sm-content-center``
- ``.align-sm-content-space-between``
- ``.align-sm-content-space-around``
- ``.align-sm-content-stretch``
- ``.align-md-content-start``
- ``.align-md-content-end``
- ``.align-md-content-center``
- ``.align-md-content-space-between``
- ``.align-md-content-space-around``
- ``.align-md-content-stretch``
- ``.align-lg-content-start``
- ``.align-lg-content-end``
- ``.align-lg-content-center``
- ``.align-lg-content-space-between``
- ``.align-lg-content-space-around``
- ``.align-lg-content-stretch``
- ``.align-xl-content-start``
- ``.align-xl-content-end``
- ``.align-xl-content-center``
- ``.align-xl-content-space-between``
- ``.align-xl-content-space-around``
- ``.align-xl-content-stretch``

Flex grow and shrink
^^^^^^^^^^^^^^^^^^^^

Vuetify has helper classes for applying grow and shrink manually. These can be applied
by adding the helper class in the format ``flex-{condition}-{value}``, where condition
can be either ``grow`` or ``shrink`` and value can be either ``0`` or ``1``. The
condition ``grow`` will permit an element to grow to fill available space, whereas
``shrink`` will permit an element to shrink down to only the space needs for its
contents. However, this will only happen if the element must shrink to fit their
container such as a container resize or being effected by a ``flex-grow-1``. The
value ``0`` will prevent the condition from occurring whereas ``1`` will permit
the condition.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Container(
                        class_="grey lighten-5",
                        children=[
                            v.Row(
                                no_gutters=True,
                                style_="flex-wrap: nowrap;",
                                children=[
                                    v.Col(
                                        cols=2,
                                        class_="flex-grow-0 flex-shrink-0",
                                        children=[
                                            v.Card(
                                                class_="pa-2",
                                                outlined=True,
                                                tile=True,
                                                children=["I'm 2 column wide"]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=1,
                                        style_="min-width: 100px; max-width: 100%;",
                                        class_="flex-grow-1 flex-shrink-0",
                                        children=[
                                            v.Card(
                                                class_="pa-2",
                                                outlined=True,
                                                tile=True,
                                                children=["I'm 1 column wide and I grow to take all the space"]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=5,
                                        style_="min-width: 100px;",
                                        class_="flex-grow-0 flex-shrink-1",
                                        children=[
                                            v.Card(
                                                class_="pa-2",
                                                outlined=True,
                                                tile=True,
                                                children=["I'm 5 column wide and I shrink if there's not enough space"]
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Container(
                        class_="grey lighten-5",
                        children=[
                            v.Row(
                                no_gutters=True,
                                style_="flex-wrap: nowrap;",
                                children=[
                                    v.Col(
                                        cols=2,
                                        class_="flex-grow-0 flex-shrink-0",
                                        children=[
                                            v.Card(
                                                class_="pa-2",
                                                outlined=True,
                                                tile=True,
                                                children=["I'm 2 column wide"]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=1,
                                        style_="min-width: 100px; max-width: 100%;",
                                        class_="flex-grow-1 flex-shrink-0",
                                        children=[
                                            v.Card(
                                                class_="pa-2",
                                                outlined=True,
                                                tile=True,
                                                children=["I'm 1 column wide and I grow to take all the space"]
                                            )
                                        ]
                                    ),
                                    v.Col(
                                        cols=5,
                                        style_="min-width: 100px;",
                                        class_="flex-grow-0 flex-shrink-1",
                                        children=[
                                            v.Card(
                                                class_="pa-2",
                                                outlined=True,
                                                tile=True,
                                                children=["I'm 5 column wide and I shrink if there's not enough space"]
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container class="grey lighten-5">
                <v-row
                no-gutters
                style="flex-wrap: nowrap;"
                >
                <v-col
                    cols="2"
                    class="flex-grow-0 flex-shrink-0"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    I'm 2 column wide
                    </v-card>
                </v-col>
                <v-col
                    cols="1"
                    style="min-width: 100px; max-width: 100%;"
                    class="flex-grow-1 flex-shrink-0"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    I'm 1 column wide and I grow to take all the space
                    </v-card>
                </v-col>
                <v-col
                    cols="5"
                    style="min-width: 100px;"
                    class="flex-grow-0 flex-shrink-1"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    I'm 5 column wide and I shrink if there's not enough space
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

The following classes are available:

- ``.flex-grow-0``
- ``.flex-grow-1``
- ``.flex-shrink-0``
- ``.flex-shrink-1``

These helper classes can also be applied in the format ``flex-{breakpoint}-{condition}-{state}`` to create more responsive variations based on breakpoints:

- ``.flex-sm-grow-0``
- ``.flex-md-grow-0``
- ``.flex-lg-grow-0``
- ``.flex-xl-grow-0``
- ``.flex-sm-grow-1``
- ``.flex-md-grow-1``
- ``.flex-lg-grow-1``
- ``.flex-xl-grow-1``
- ``.flex-sm-shrink-0``
- ``.flex-md-shrink-0``
- ``.flex-lg-shrink-0``
- ``.flex-xl-shrink-0``
- ``.flex-sm-shrink-1``
- ``.flex-md-shrink-1``
- ``.flex-lg-shrink-1``
- ``.flex-xl-shrink-1``
