Sparkline
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Sparkline
    documentation <https://v2.vuetifyjs.com/en/components/sparklines/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Sparkline <ipyvuetify.Sparkline>` component can be used to
create simple graphs, like GitHub's contribution chart. The sparkline
component comes in 2 variations, trend (default) and bar.

.. api::

    - :py:class:`ipyvuetify.Sparkline`

Usage
-----

A sparkline is a tiny chart that provides a visual representation of data.
The sparkline component comes in 2 variations, trend (default) and bar. Each
supports a multitude of options for customizing the look and feel of the
sparkline.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    gradient = ['#f72047', '#ffd200', '#1feaea']
    values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

    v.Sparkline(
        class_='mx-auto my-2',
        line_width=2,
        smooth=10,
        padding=8,
        line_cap='round',
        gradient=gradient,
        value=values,
        gradient_direction='top',
        fill=False,
        type='trend',
        auto_line_width=False,
        auto_draw=True,
    )


Examples
--------

Fill
^^^^

You can create a :py:class:`Sparkline <ipyvuetify.Sparkline>` with fill using
the ``fill`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            gradient = ['#f72047', '#ffd200', '#1feaea']
            values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

            switch = v.Switch(label='Fill', v_model=True)

            sparkline = v.Sparkline(
                class_='mx-auto my-2',
                line_width=2,
                smooth=10,
                padding=8,
                line_cap='round',
                gradient=gradient,
                value=values,
                gradient_direction='top',
                fill=True,
                type='trend',
                auto_line_width=False,
                auto_draw=True,
            )

            jslink((switch, 'v_model'), (sparkline, 'fill'))

            v.Col(children=[switch, sparkline])


    .. tab-item:: :fab:`python` Python

        .. code-block:: python


            import ipyvuetify as v
            from ipywidgets import jslink

            gradient = ['#f72047', '#ffd200', '#1feaea']
            values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

            switch = v.Switch(label='Fill', v_model=True)

            sparkline = v.Sparkline(
                class_='mx-auto my-2',
                line_width=2,
                smooth=10,
                padding=8,
                line_cap='round',
                gradient=gradient,
                value=values,
                gradient_direction='top',
                fill=True,
                type='trend',
                auto_line_width=False,
                auto_draw=True,
            )

            jslink((switch, 'v_model'), (sparkline, 'fill'))

            v.Col(children=[switch, sparkline])


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
            ></v-sparkline>
            </template>

Width
^^^^^

You can customize the line width of a :py:class:`Sparkline
<ipyvuetify.Sparkline>` using the ``line_width`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            gradient = ['#f72047', '#ffd200', '#1feaea']
            values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

            slider = v.Slider(
                label='Line Width',
                min=1,
                max=10,
                step=.1,
                v_model=2,
            )

            sparkline = v.Sparkline(
                class_='mx-auto my-2',
                line_width=2,
                smooth=10,
                padding=8,
                line_cap='round',
                gradient=gradient,
                value=values,
                gradient_direction='top',
                fill=False,
                type='trend',
                auto_line_width=False,
                auto_draw=True,
            )

            jslink((slider, 'v_model'), (sparkline, 'line_width'))

            v.Col(children=[slider, sparkline])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            gradient = ['#f72047', '#ffd200', '#1feaea']
            values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

            slider = v.Slider(
                label='Line Width',
                min=1,
                max=10,
                step=.1,
                v_model=2,
            )

            sparkline = v.Sparkline(
                class_='mx-auto my-2',
                line_width=2,
                smooth=10,
                padding=8,
                line_cap='round',
                gradient=gradient,
                value=values,
                gradient_direction='top',
                fill=False,
                type='trend',
                auto_line_width=False,
                auto_draw=True,
            )

            jslink((slider, 'v_model'), (sparkline, 'line_width'))

            v.Col(children=[slider, sparkline])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
            ></v-sparkline>
            </template>

smooth
^^^^^^

You can customize the smoothness of a :py:class:`Sparkline
<ipyvuetify.Sparkline>` using the ``smooth`` property.


.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            gradient = ['#f72047', '#ffd200', '#1feaea']
            values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

            slider = v.Slider(
                label='Radius',
                min=0,
                max=20,
                step=.1,
                v_model=10,
            )

            sparkline = v.Sparkline(
                class_='mx-auto my-2',
                line_width=2,
                smooth=10,
                padding=8,
                line_cap='round',
                gradient=gradient,
                value=values,
                gradient_direction='top',
                fill=False,
                type='trend',
                auto_line_width=False,
                auto_draw=True,
            )

            jslink((slider, 'v_model'), (sparkline, 'smooth'))

            v.Col(children=[slider, sparkline])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            gradient = ['#f72047', '#ffd200', '#1feaea']
            values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

            slider = v.Slider(
                label='Radius',
                min=0,
                max=20,
                step=.1,
                v_model=10,
            )

            sparkline = v.Sparkline(
                class_='mx-auto my-2',
                line_width=2,
                smooth=10,
                padding=8,
                line_cap='round',
                gradient=gradient,
                value=values,
                gradient_direction='top',
                fill=False,
                type='trend',
                auto_line_width=False,
                auto_draw=True,
            )

            jslink((slider, 'v_model'), (sparkline, 'smooth'))

            v.Col(children=[slider, sparkline])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
            ></v-sparkline>
            </template>


padding
^^^^^^^

You can customize the padding of a :py:class:`Sparkline
<ipyvuetify.Sparkline>` using the ``padding`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            gradient = ['#f72047', '#ffd200', '#1feaea']
            values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

            slider = v.Slider(
                label='Padding',
                min=0,
                max=20,
                step=.1,
                v_model=8,
            )

            sparkline = v.Sparkline(
                class_='mx-auto my-2',
                line_width=2,
                smooth=10,
                padding=8,
                line_cap='round',
                gradient=gradient,
                value=values,
                gradient_direction='top',
                fill=False,
                type='trend',
                auto_line_width=False,
                auto_draw=True,
            )

            jslink((slider, 'v_model'), (sparkline, 'padding'))

            v.Col(children=[slider, sparkline])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            gradient = ['#f72047', '#ffd200', '#1feaea']
            values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

            slider = v.Slider(
                label='Padding',
                min=0,
                max=20,
                step=.1,
                v_model=8,
            )

            sparkline = v.Sparkline(
                class_='mx-auto my-2',
                line_width=2,
                smooth=10,
                padding=8,
                line_cap='round',
                gradient=gradient,
                value=values,
                gradient_direction='top',
                fill=False,
                type='trend',
                auto_line_width=False,
                auto_draw=True,
            )

            jslink((slider, 'v_model'), (sparkline, 'padding'))

            v.Col(children=[slider, sparkline])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
            ></v-sparkline>
            </template>

Misc
----

Custom labels
^^^^^^^^^^^^^

By providing a ``label`` slot, we are able to modify the displayed content by
adding a dollar sign ($). This slot is exclusively for text content. For more
information on the svg ``<text>`` element, navigate to the
`MDN documentation <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            values = [423, 446, 675, 510, 590, 610, 760]

            v.Card(
                class_="mx-auto text-center",
                color="green",
                dark=True,
                width=600,
                children=[
                    v.CardText(
                        children=[
                            v.Sheet(
                                color="rgba(0, 0, 0, .12)",
                                children=[
                                    v.Sparkline(
                                        value=values,
                                        color="rgba(255, 255, 255, .7)",
                                        height=100,
                                        padding=24,
                                        stroke_linecap="round",
                                        smooth=True,
                                        v_slots=[{
                                            "name": "label",
                                            "variable": "item",
                                            "children": f"${{ item.value }}"
                                        }]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CardText(
                        children=[
                            v.Html(
                                tag="h3",
                                class_="font-weight-thin",
                                children=["Sales Last 24h"]
                            )
                        ]
                    ),
                    v.Divider(),
                    v.CardActions(
                        class_="justify-center",
                        children=[
                            v.Btn(
                                block=True,
                                text=True,
                                children=["Go to Report"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            values = [423, 446, 675, 510, 590, 610, 760]

            v.Card(
                class_="mx-auto text-center",
                color="green",
                dark=True,
                width=600,
                children=[
                    v.CardText(
                        children=[
                            v.Sheet(
                                color="rgba(0, 0, 0, .12)",
                                children=[
                                    v.Sparkline(
                                        value=values,
                                        color="rgba(255, 255, 255, .7)",
                                        height=100,
                                        padding=24,
                                        stroke_linecap="round",
                                        smooth=True,
                                        v_slots=[{
                                            "name": "label",
                                            "variable": "item",
                                            "children": f"${{ item.value }}"
                                        }]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.CardText(
                        children=[
                            v.Html(
                                tag="h3",
                                class_="font-weight-thin",
                                children=["Sales Last 24h"]
                            )
                        ]
                    ),
                    v.Divider(),
                    v.CardActions(
                        class_="justify-center",
                        children=[
                            v.Btn(
                                block=True,
                                text=True,
                                children=["Go to Report"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto text-center"
                color="green"
                dark
                max-width="600"
            >
                <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                    :value="value"
                    color="rgba(255, 255, 255, .7)"
                    height="100"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                    >
                    <template v-slot:label="item">
                        ${{ item.value }}
                    </template>
                    </v-sparkline>
                </v-sheet>
                </v-card-text>

                <v-card-text>
                <div class="text-h4 font-weight-thin">
                    Sales Last 24h
                </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                <v-btn
                    block
                    text
                >
                    Go to Report
                </v-btn>
                </v-card-actions>
            </v-card>
            </template>

Dashboard card
^^^^^^^^^^^^^^

The :py:class:`Sparkline <ipyvuetify.Sparkline>` component pairs nicely with
:py:class:`Card <ipyvuetify.Card>` and :py:class:`Sheet <ipyvuetify.Sheet>`
to create customized information cards, perfect for admin dashboards. Here we
use custom labels to provide additional context for the sparkline.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            value = [200,675,410,390, 310,460,250,240]
            labels = ['12am','3am','6am','9am','12pm','3pm','6pm','9pm']

            v.Card(
                class_="mt-8 mb-2 mx-auto",
                width=600,
                children=[
                    v.Sheet(
                        class_="mx-auto",
                        color="cyan",
                        elevation=12,
                        max_width="calc(100% - 32px)",
                        children=[
                            v.Sparkline(
                                labels=labels,
                                value=values,
                                color="white",
                                line_width=2,
                                padding=16
                            )
                        ],
                        style_="top: -24px; position: relative;"
                    ),

                    v.CardText(
                        class_="pt-0",
                        children=[
                            v.Html(
                                tag="h5",
                                class_="font-weight-light mb-2 mt-0",
                                children=["User Registrations"]
                            ),
                            v.Html(
                                tag="h6",
                                class_="font-weight-light grey--text mt-1",
                                children=["Last Campaign Performance"]
                            ),
                            v.Divider(class_="my-2"),
                            v.Icon(
                                class_="mr-2",
                                small=True,
                                children=["mdi-clock"]
                            ),
                            v.Html(
                                tag="span",
                                class_="text-caption grey--text font-weight-light",
                                children=["last registration 26 minutes ago"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            value = [200,675,410,390, 310,460,250,240]
            labels = ['12am','3am','6am','9am','12pm','3pm','6pm','9pm']

            v.Card(
                class_="mt-8 mb-2 mx-auto",
                width=600,
                children=[
                    v.Sheet(
                        class_="mx-auto",
                        color="cyan",
                        elevation=12,
                        max_width="calc(100% - 32px)",
                        children=[
                            v.Sparkline(
                                labels=labels,
                                value=values,
                                color="white",
                                line_width=2,
                                padding=16
                            )
                        ],
                        style_="top: -24px; position: relative;"
                    ),

                    v.CardText(
                        class_="pt-0",
                        children=[
                            v.Html(
                                tag="h5",
                                class_="font-weight-light mb-2 mt-0",
                                children=["User Registrations"]
                            ),
                            v.Html(
                                tag="h6",
                                class_="font-weight-light grey--text mt-1",
                                children=["Last Campaign Performance"]
                            ),
                            v.Divider(class_="my-2"),
                            v.Icon(
                                class_="mr-2",
                                small=True,
                                children=["mdi-clock"]
                            ),
                            v.Html(
                                tag="span",
                                class_="text-caption grey--text font-weight-light",
                                children=["last registration 26 minutes ago"]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mt-4 mx-auto"
                max-width="400"
            >
                <v-sheet
                class="v-sheet--offset mx-auto"
                color="cyan"
                elevation="12"
                max-width="calc(100% - 32px)"
                >
                <v-sparkline
                    :labels="labels"
                    :value="value"
                    color="white"
                    line-width="2"
                    padding="16"
                ></v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                <div class="text-h6 font-weight-light mb-2">
                    User Registrations
                </div>
                <div class="subheading font-weight-light grey--text">
                    Last Campaign Performance
                </div>
                <v-divider class="my-2"></v-divider>
                <v-icon
                    class="mr-2"
                    small
                >
                    mdi-clock
                </v-icon>
                <span class="text-caption grey--text font-weight-light">last registration 26 minutes ago</span>
                </v-card-text>
            </v-card>
            </template>

Heart rate
^^^^^^^^^^

For concise information, a complete chart might be overkill. Using a trend
line with gradient provides enough detail for the user without showing too
much information.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                color="grey lighten-4",
                width=600,
                children=[
                    v.CardTitle(
                        children=[
                            v.Icon(
                                color="indigo",
                                class_="mr-12",
                                size=64,
                                children=["mdi-heart-pulse"]
                            ),
                            v.Row(
                                align="start",
                                children=[
                                    v.Html(
                                        tag="div",
                                        class_="text-caption grey--text text-uppercase",
                                        children=["Heart rate"]
                                    ),
                                    v.Html(
                                        tag="div",
                                        children=[
                                            v.Html(
                                                tag="span",
                                                class_="text-h3 font-weight-black",
                                                children=["128"]
                                            ),
                                            v.Html(
                                                tag="strong",
                                                children=["BPM"]
                                            )
                                        ]
                                    )
                                ]
                            ),

                            v.Spacer(),

                            v.Btn(
                                icon=True,
                                class_="align-self-start",
                                size=28,
                                children=[
                                    v.Icon(children=["mdi-arrow-right-thick"])
                                ]
                            )
                        ]
                    ),

                    v.Sheet(color="transparent",
                        children=[
                            v.Sparkline(
                                key="—",
                                smooth=16,
                                gradient=['#f72047', '#ffd200', '#1feaea'],
                                line_width=3,
                                value=[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],
                                auto_draw=True,
                                stroke_linecap="round"
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="mx-auto my-2",
                color="grey lighten-4",
                width=600,
                children=[
                    v.CardTitle(
                        children=[
                            v.Icon(
                                color="indigo",
                                class_="mr-12",
                                size=64,
                                children=["mdi-heart-pulse"]
                            ),
                            v.Row(
                                align="start",
                                children=[
                                    v.Html(
                                        tag="div",
                                        class_="text-caption grey--text text-uppercase",
                                        children=["Heart rate"]
                                    ),
                                    v.Html(
                                        tag="div",
                                        children=[
                                            v.Html(
                                                tag="span",
                                                class_="text-h3 font-weight-black",
                                                children=["128"]
                                            ),
                                            v.Html(
                                                tag="strong",
                                                children=["BPM"]
                                            )
                                        ]
                                    )
                                ]
                            ),

                            v.Spacer(),

                            v.Btn(
                                icon=True,
                                class_="align-self-start",
                                size=28,
                                children=[
                                    v.Icon(children=["mdi-arrow-right-thick"])
                                ]
                            )
                        ]
                    ),

                    v.Sheet(color="transparent",
                        children=[
                            v.Sparkline(
                                key="—",
                                smooth=16,
                                gradient=['#f72047', '#ffd200', '#1feaea'],
                                line_width=3,
                                value=[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],
                                auto_draw=True,
                                stroke_linecap="round"
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="600"
            >
                <v-card-title>
                <v-icon
                    :color="checking ? 'red lighten-2' : 'indigo'"
                    class="mr-12"
                    size="64"
                    @click="takePulse"
                >
                    mdi-heart-pulse
                </v-icon>
                <v-row align="start">
                    <div class="text-caption grey--text text-uppercase">
                    Heart rate
                    </div>
                    <div>
                    <span
                        class="text-h3 font-weight-black"
                        v-text="avg || '—'"
                    ></span>
                    <strong v-if="avg">BPM</strong>
                    </div>
                </v-row>

                <v-spacer></v-spacer>

                <v-btn
                    icon
                    class="align-self-start"
                    size="28"
                >
                    <v-icon>mdi-arrow-right-thick</v-icon>
                </v-btn>
                </v-card-title>

                <v-sheet color="transparent">
                <v-sparkline
                    :key="String(avg)"
                    :smooth="16"
                    :gradient="['#f72047', '#ffd200', '#1feaea']"
                    :line-width="3"
                    :value="heartbeats"
                    auto-draw
                    stroke-linecap="round"
                ></v-sparkline>
                </v-sheet>
            </v-card>
            </template>
