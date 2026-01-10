Grid
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation
    <https://v2.vuetifyjs.com/en/components/grids/>`_. All examples have been
    converted to ipyvuetify syntax.

Vuetify comes with a 12 point grid system built using flexbox. The grid is used to
create specific layouts within an application's content. It contains 5 types of
media breakpoints that are used for targeting specific screen sizes or orientations:
``xs``, ``sm``, ``md``, ``lg`` and ``xl``. These resolutions are defined below in
the Viewport Breakpoints table.

.. jupyter-execute::
    :hide-code:

    import ipyvuetify as v

    items = [
        {"icon": "mdi-cellphone", "device": "Extra small", "code": "xs", "type": "Small to large phone", "range": "<600px"},
        {"icon": "mdi-tablet", "device": "Small", "code": "sm", "type": "Small to medium tablet", "range": "600px - 960px"},
        {"icon": "mdi-laptop", "device": "Medium", "code": "md", "type": "Large tablet to laptop", "range": "960px - 1264px"},
        {"icon": "mdi-monitor", "device": "Large", "code": "lg", "type": "Desktop", "range": "1264px - 1904px"},
        {"icon": "mdi-television", "device": "Extra large", "code": "xl", "type": "4k and ultra-wide", "range": "> 1904px"},
    ]

    v.SimpleTable(
        children=[
            v.Html(
                tag="thead",
                children=[
                    v.Html(
                        tag="tr",
                        children=[
                            v.Html(tag="th", class_="text-left", children=["Device"]),
                            v.Html(tag="th", class_="text-left", children=["Breakpoint"]),
                            v.Html(tag="th", class_="text-left", children=["Type"]),
                            v.Html(tag="th", class_="text-left", children=["Range"]),
                        ]
                    )
                ]
            ),
            v.Html(
                tag="tbody",
                children=[
                    v.Html(
                        tag="tr",
                        children=[
                            v.Html(tag="td", children=[v.Icon(children=[item["icon"]]), " ", item["device"]]),
                            v.Html(tag="td", children=[item["code"]]),
                            v.Html(tag="td", children=[item["type"]]),
                            v.Html(tag="td", children=[item["range"]]),
                        ]
                    )
                    for item in items
                ]
            ),
        ]
    )

.. api::

    - :py:class:`ipyvuetify.Container`
    - :py:class:`ipyvuetify.Row`
    - :py:class:`ipyvuetify.Col`
    - :py:class:`ipyvuetify.Spacer`

Sub-components
--------------

Container
~~~~~~~~~

:py:class:`Container <ipyvuetify.Container>` provides the ability to center and
horizontally pad your site's contents. You can also use the ``fluid`` prop to
fully extend the container across all viewport and device sizes. Maintains previous
1.x functionality in which props are passed through as classes on
:py:class:`Container <ipyvuetify.Container>` allowing for the application of helper
classes (such as ``ma-#``/``pa-#``/``fill-height``) to easily be applied.

Col
~~~

:py:class:`Col <ipyvuetify.Col>` is a content holder that must be a direct child
of :py:class:`Row <ipyvuetify.Row>`. This is the 2.x replacement for v-flex in 1.x.

Row
~~~

:py:class:`Row <ipyvuetify.Row>` is a wrapper component for
:py:class:`Col <ipyvuetify.Col>`. It utilizes flex properties to control the
layout and flow of its inner columns. It uses a standard gutter of 24px. This
can be reduced with the ``dense`` prop or removed completely with ``no-gutters``.
This is the 2.x replacement for v-layout in 1.x.

Spacer
~~~~~~

:py:class:`Spacer <ipyvuetify.Spacer>` is a basic yet versatile spacing component
used to distribute remaining width in-between a parent's child components. When
placing a single :py:class:`Spacer <ipyvuetify.Spacer>` before or after the child
components, the components will push to the right and left of its container. When
more than one :py:class:`Spacer <ipyvuetify.Spacer>` are used between multiple
components, the remaining width is evenly distributed between each spacer.

Usage
-----

The Vuetify grid is heavily inspired by the `Bootstrap grid
<https://getbootstrap.com/docs/4.0/layout/grid/>`__. It is integrated by using a
series of containers, rows, and columns to layout and align content.If you are **new to flexbox**,
`Read the CSS Tricks flexbox guide for background <https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background>`__,
terminology, guidelines, and code snippets.

.. jupyter-execute::
    :hide-code:

    import ipyvuetify as v

    v.Container(
        class_="grey lighten-5",
        children=[
            v.Row(
                no_gutters=True,
                children=[
                    v.Col(
                        cols=12,
                        sm=4,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["One of three columns"]
                            )
                        ]
                    )
                    for n in range(3)
                ]
            )
        ]
    )

.. note::

    ``fill-height`` applies ``height: 100%`` to an element. When applied to
    :py:class:`Container <ipyvuetify.Container>` it will also ``align-items: center``.

.. note::

    Breakpoints based props on grid components work in an ``andUp`` fashion. With this
    in mind the ``xs`` breakpoint is assumed and has been removed from the props context.
    This applies to ``offset``, ``justify``, ``align``, and single breakpoint props on
    :py:class:`Col <ipyvuetify.Col>`.

    Props like ``justify-sm`` and ``justify-md`` exist, but ``justify-xs`` does not, it is
    simply ``justify``. The ``xs`` prop does not exist on :py:class:`Col <ipyvuetify.Col>`.
    The equivalent to this is  the ``cols`` prop

Align
-----

Change the vertical alignment of flex items and their parents using the ``align`` and ``align-self`` properties.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Container(
                        class_="ma-0",
                        children=[
                            v.Row(
                                class_="grey lighten-5 mb-3",
                                align=align,
                                no_gutters=True,
                                style_="height: 150px;",
                                children=[
                                    v.Col(
                                        children=[
                                            v.Card(
                                                class_="pa-2 ma-2",
                                                outlined=True,
                                                tile=True,
                                                children=["One of three columns"]
                                            )
                                        ]
                                    )
                                    for n in range(3)
                                ]
                            )
                            for align in ["start", "center", "end", "stretch"]
                        ] + [
                            v.Row(
                                class_="grey lighten-5",
                                no_gutters=True,
                                style_="height: 150px;",
                                children=[
                                    v.Col(
                                        align_self=align,
                                        children=[
                                            v.Card(
                                                class_="pa-2 ma-2",
                                                outlined=True,
                                                tile=True,
                                                children=["One of three columns"]
                                            )
                                        ]
                                    )
                                    for align in ["start", "center", "end"]
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
                        class_="ma-0",
                        children=[
                            v.Row(
                                class_="grey lighten-5 mb-3",
                                align=align,
                                no_gutters=True,
                                style_="height: 150px;",
                                children=[
                                    v.Col(
                                        children=[
                                            v.Card(
                                                class_="pa-2 ma-2",
                                                outlined=True,
                                                tile=True,
                                                children=["One of three columns"]
                                            )
                                        ]
                                    )
                                    for n in range(3)
                                ]
                            )
                            for align in ["start", "center", "end", "stretch"]
                        ] + [
                            v.Row(
                                class_="grey lighten-5",
                                no_gutters=True,
                                style_="height: 150px;",
                                children=[
                                    v.Col(
                                        align_self=align,
                                        children=[
                                            v.Card(
                                                class_="pa-2 ma-2",
                                                outlined=True,
                                                tile=True,
                                                children=["One of three columns"]
                                            )
                                        ]
                                    )
                                    for align in ["start", "center", "end"]
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-container
                v-for="align in alignments"
                :key="align"
                class="grey lighten-5 mb-6"
                >
                <v-row
                    :align="align"
                    no-gutters
                    style="height: 150px;"
                >
                    <v-col
                    v-for="n in 3"
                    :key="n"
                    >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        One of three columns
                    </v-card>
                    </v-col>
                </v-row>
                </v-container>

                <v-container class="grey lighten-5">
                <v-row
                    no-gutters
                    style="height: 150px;"
                >
                    <v-col
                    v-for="align in alignments"
                    :key="align"
                    :align-self="align"
                    >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        One of three columns
                    </v-card>
                    </v-col>
                </v-row>
                </v-container>
            </div>
            </template>

Breakpoint sizing
-----------------

Columns will automatically take up an equal amount of space within their parent container. This can be modified using the ``cols`` prop. You can also utilize the ``sm``, ``md``, ``lg``, and ``xl`` props to further define how the column will be sized in different viewport sizes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        key=n,
                        class_="mb-6" if n == 1 else "",
                        no_gutters=True,
                        children=[
                            v.Col(
                                key=k,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[f"{k} of {n + 1}"]
                                    )
                                ]
                            ) for k in range(1, n + 2)
                        ]
                    ) for n in range(1, 3)
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        key=n,
                        class_="mb-6" if n == 1 else "",
                        no_gutters=True,
                        children=[
                            v.Col(
                                key=k,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[f"{k} of {n + 1}"]
                                    )
                                ]
                            ) for k in range(1, n + 2)
                        ]
                    ) for n in range(1, 3)
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container class="grey lighten-5">
                <v-row
                v-for="n in 2"
                :key="n"
                :class="n === 1 ? 'mb-6' : ''"
                no-gutters
                >
                <v-col
                    v-for="k in n + 1"
                    :key="k"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    {{ k }} of {{ n + 1 }}
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Justify
-------

Change the horizontal alignment of flex items using the ``justify`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        key=j,
                        justify=j,
                        children=[
                            v.Col(
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["One of two columns"]
                                    )
                                ]
                            )
                            for k in range(2)
                        ]
                    )
                    for j in ["start", "center", "end", "space-between", "space-around", "space-evenly"]
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        key=j,
                        justify=j,
                        children=[
                            v.Col(
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["One of two columns"]
                                    )
                                ]
                            )
                            for k in range(2)
                        ]
                    )
                    for j in ["start", "center", "end", "space-between", "space-around", "space-evenly"]
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container class="grey lighten-5">
                <v-row
                v-for="j in justify"
                :key="j"
                :justify="j"
                >
                <v-col
                    v-for="k in 2"
                    :key="k"
                    md="4"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    One of two columns
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

No gutters
----------

You can remove the negative margins from :py:class:`Row <ipyvuetify.Row>` and the
padding from its direct :py:class:`Col <ipyvuetify.Col>` children using the
``no-gutters`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                cols=12,
                                sm=6,
                                md=8,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-12 .col-sm-6 .col-md-8"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6 .col-md-4"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                cols=12,
                                sm=6,
                                md=8,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-12 .col-sm-6 .col-md-8"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6 .col-md-4"]
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
                <v-row no-gutters>
                <v-col
                    cols="12"
                    sm="6"
                    md="8"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-12 .col-sm-6 .col-md-8
                    </v-card>
                </v-col>
                <v-col
                    cols="6"
                    md="4"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-6 .col-md-4
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Offset
------

Offsets are useful for compensating for elements that may not be visible yet, or
to control the position of content. Just as with breakpoints, you can set an offset
for any available sizes. This allows you to fine tune your application layout
precisely to your needs.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-4"]
                                    )
                                ]
                            ),
                            v.Col(
                                md=4,
                                offset_md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-4 .offset-md-4"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                md=3,
                                offset_md=3,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-3 .offset-md-3"]
                                    )
                                ]
                            ),
                            v.Col(
                                md=3,
                                offset_md=3,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-3 .offset-md-3"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                md=6,
                                offset_md=3,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-6 .offset-md-3"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-4"]
                                    )
                                ]
                            ),
                            v.Col(
                                md=4,
                                offset_md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-4 .offset-md-4"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                md=3,
                                offset_md=3,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-3 .offset-md-3"]
                                    )
                                ]
                            ),
                            v.Col(
                                md=3,
                                offset_md=3,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-3 .offset-md-3"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                md=6,
                                offset_md=3,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-6 .offset-md-3"]
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
                class="mb-6"
                no-gutters
                >
                <v-col md="4">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-md-4
                    </v-card>
                </v-col>
                <v-col
                    md="4"
                    offset-md="4"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-md-4 .offset-md-4
                    </v-card>
                </v-col>
                </v-row>
                <v-row
                class="mb-6"
                no-gutters
                >
                <v-col
                    md="3"
                    offset-md="3"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-md-3 .offset-md-3
                    </v-card>
                </v-col>
                <v-col
                    md="3"
                    offset-md="3"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-md-3 .offset-md-3
                    </v-card>
                </v-col>
                </v-row>
                <v-row no-gutters>
                <v-col
                    md="6"
                    offset-md="3"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-md-6 .offset-md-3
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Offset breakpoint
-----------------

Offset can also be applied on a per breakpoint basis.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                sm=5,
                                md=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-sm-5 .col-md-6"]
                                    )
                                ]
                            ),
                            v.Col(
                                sm=5,
                                offset_sm=2,
                                md=6,
                                offset_md=0,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                sm=6,
                                md=5,
                                lg=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-sm-6 .col-md-5 .col-lg-6"]
                                    )
                                ]
                            ),
                            v.Col(
                                sm=6,
                                md=5,
                                offset_md=2,
                                lg=6,
                                offset_lg=0,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                sm=5,
                                md=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-sm-5 .col-md-6"]
                                    )
                                ]
                            ),
                            v.Col(
                                sm=5,
                                offset_sm=2,
                                md=6,
                                offset_md=0,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                sm=6,
                                md=5,
                                lg=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-sm-6 .col-md-5 .col-lg-6"]
                                    )
                                ]
                            ),
                            v.Col(
                                sm=6,
                                md=5,
                                offset_md=2,
                                lg=6,
                                offset_lg=0,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0"]
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
                class="mb-6"
                no-gutters
                >
                <v-col
                    sm="5"
                    md="6"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-sm-5 .col-md-6
                    </v-card>
                </v-col>
                <v-col
                    sm="5"
                    offset-sm="2"
                    md="6"
                    offset-md="0"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
                    </v-card>
                </v-col>
                </v-row>
                <v-row no-gutters>
                <v-col
                    sm="6"
                    md="5"
                    lg="6"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-sm-6 .col-md-5 .col-lg-6
                    </v-card>
                </v-col>
                <v-col
                    sm="6"
                    md="5"
                    offset-md="2"
                    lg="6"
                    offset-lg="0"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Order
-----

You can control the ordering of grid items. As with offsets, you can set different
orders for different sizes. Design specialized screen layouts that accommodate
to any application.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["First, but unordered"]
                                    )
                                ]
                            ),
                            v.Col(
                                order=12,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Second, but last"]
                                    )
                                ]
                            ),
                            v.Col(
                                order=1,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Third, but first"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["First, but unordered"]
                                    )
                                ]
                            ),
                            v.Col(
                                order=12,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Second, but last"]
                                    )
                                ]
                            ),
                            v.Col(
                                order=1,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Third, but first"]
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
                <v-row no-gutters>
                <v-col>
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    First, but unordered
                    </v-card>
                </v-col>
                <v-col order="12">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    Second, but last
                    </v-card>
                </v-col>
                <v-col order="1">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    Third, but first
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Order first and last
--------------------

You can also designate explicitly ``first`` or ``last`` which will assign ``-1``
or ``13`` values respectively to the ``order`` CSS property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                order="last",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["First, but last"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Second, but unordered"]
                                    )
                                ]
                            ),
                            v.Col(
                                order="first",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Third, but first"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                order="last",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["First, but last"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Second, but unordered"]
                                    )
                                ]
                            ),
                            v.Col(
                                order="first",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Third, but first"]
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
                <v-row no-gutters>
                <v-col order="last">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    First, but last
                    </v-card>
                </v-col>
                <v-col>
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    Second, but unordered
                    </v-card>
                </v-col>
                <v-col order="first">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    Third, but first
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Column wrapping
---------------

When more than 12 columns are placed within a given row (that is not using the
``.flex-nowrap`` utility class), each group of extra columns will wrap onto a new
line.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                cols=9,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-9"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-4\nSince 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit."]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6\nSubsequent columns continue along the new line."]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                cols=9,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-9"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-4\nSince 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit."]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6\nSubsequent columns continue along the new line."]
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
                <v-row no-gutters>
                <v-col cols="9">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-9
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-6<br>Subsequent columns continue along the new line.
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Equal width columns
-------------------

You can break equal width columns into multiple lines.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Column"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Column"]
                                    )
                                ]
                            ),
                            v.Responsive(
                                v_if="n === 2",
                                width="100%"
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Column"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Column"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Column"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Column"]
                                    )
                                ]
                            ),
                            v.Responsive(
                                v_if="n === 2",
                                width="100%"
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Column"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Column"]
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
                <v-row no-gutters>
                <template v-for="n in 4">
                    <v-col :key="n">
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        Column
                    </v-card>
                    </v-col>
                    <v-responsive
                    v-if="n === 2"
                    :key="`width-${n}`"
                    width="100%"
                    ></v-responsive>
                </template>
                </v-row>
            </v-container>
            </template>

Grow and Shrink
---------------

By default, flex components will automatically fill the available space in a row
or column. They will also shrink relative to the rest of the flex items in the flex
container when a specific size is not designated. You can define the column width
of the :py:class:`Col <ipyvuetify.Col>` by using the ``cols`` prop and providing
a value from 1 to 12.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["col"]
                                    )
                                ]
                            ) for n in range(4)
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                cols=8 if n == 1 else 4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[f"col-{8 if n == 1 else 4}"]
                                    )
                                ]
                            ) for n in range(2)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["col"]
                                    )
                                ]
                            ) for n in range(4)
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                cols=8 if n == 1 else 4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[f"col-{8 if n == 1 else 4}"]
                                    )
                                ]
                            ) for n in range(2)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container class="grey lighten-5">
                <v-row
                class="mb-6"
                no-gutters
                >
                <v-col
                    v-for="n in 4"
                    :key="n"
                >
                    <v-card
                    class="pa-2"
                    tile
                    outlined
                    >
                    col
                    </v-card>
                </v-col>
                </v-row>

                <v-row no-gutters>
                <v-col
                    v-for="n in 2"
                    :key="n"
                    :cols="n === 1 ? 8 : 4"
                >
                    <v-card
                    class="pa-2"
                    tile
                    outlined
                    >
                    col-{{ n === 1 ? 8 : 4 }}
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Margin helpers
--------------

Using the `auto margin helper utilities <https://v2.vuetifyjs.com/en/styles/flex/#auto-margins>`__
you can force sibling columns away from each other.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-4"]
                                    )
                                ]
                            ),
                            v.Col(
                                md=4,
                                class_="ml-auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-4 .ml-auto"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                md=3,
                                class_="ml-md-auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-3 .ml-md-auto"]
                                    )
                                ]
                            ),
                            v.Col(
                                md=3,
                                class_="ml-md-auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-3 .ml-md-auto"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="auto",
                                class_="mr-auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-auto .mr-auto"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols="auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-auto"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-4"]
                                    )
                                ]
                            ),
                            v.Col(
                                md=4,
                                class_="ml-auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-4 .ml-auto"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                md=3,
                                class_="ml-md-auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-3 .ml-md-auto"]
                                    )
                                ]
                            ),
                            v.Col(
                                md=3,
                                class_="ml-md-auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-3 .ml-md-auto"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="auto",
                                class_="mr-auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-auto .mr-auto"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols="auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-auto"]
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
            <div class="ma-5 pa-5">
                <v-container class="grey lighten-5">
                <v-row>
                    <v-col md="4">
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        .col-md-4
                    </v-card>
                    </v-col>
                    <v-col
                    md="4"
                    class="ml-auto"
                    >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        .col-md-4 .ml-auto
                    </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    md="3"
                    class="ml-md-auto"
                    >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        .col-md-3 .ml-md-auto
                    </v-card>
                    </v-col>
                    <v-col
                    md="3"
                    class="ml-md-auto"
                    >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        .col-md-3 .ml-md-auto
                    </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="auto"
                    class="mr-auto"
                    >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        .col-auto .mr-auto
                    </v-card>
                    </v-col>
                    <v-col cols="auto">
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        .col-auto
                    </v-card>
                    </v-col>
                </v-row>
                </v-container>
            </div>
            </template>

Nested grid
-----------

Grids can be nested, similar to other frameworks, in order to achieve very custom
layouts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                sm=9,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Level 1: .col-sm-9"]
                                    ),
                                    v.Row(
                                        no_gutters=True,
                                        children=[
                                            v.Col(
                                                cols=8,
                                                sm=6,
                                                children=[
                                                    v.Card(
                                                        class_="pa-2",
                                                        outlined=True,
                                                        tile=True,
                                                        style_="background-color: lightgrey;",
                                                        children=["Level 2: .col-8 .col-sm-6"]
                                                    )
                                                ]
                                            ),
                                            v.Col(
                                                cols=4,
                                                sm=6,
                                                children=[
                                                    v.Card(
                                                        class_="pa-2",
                                                        outlined=True,
                                                        tile=True,
                                                        style_="background-color: lightgrey;",
                                                        children=["Level 3: .col-4 .col-sm-6"]
                                                    )
                                                ]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                sm=9,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Level 1: .col-sm-9"]
                                    ),
                                    v.Row(
                                        no_gutters=True,
                                        children=[
                                            v.Col(
                                                cols=8,
                                                sm=6,
                                                children=[
                                                    v.Card(
                                                        class_="pa-2",
                                                        outlined=True,
                                                        tile=True,
                                                        style_="background-color: lightgrey;",
                                                        children=["Level 2: .col-8 .col-sm-6"]
                                                    )
                                                ]
                                            ),
                                            v.Col(
                                                cols=4,
                                                sm=6,
                                                children=[
                                                    v.Card(
                                                        class_="pa-2",
                                                        outlined=True,
                                                        tile=True,
                                                        style_="background-color: lightgrey;",
                                                        children=["Level 3: .col-4 .col-sm-6"]
                                                    )
                                                ]
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
                <v-row>
                <v-col sm="9">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    Level 1: .col-sm-9
                    </v-card>
                    <v-row no-gutters>
                    <v-col
                        cols="8"
                        sm="6"
                    >
                        <v-card
                        class="pa-2"
                        outlined
                        style="background-color: lightgrey;"
                        tile
                        >
                        Level 2: .col-8 .col-sm-6
                        </v-card>
                    </v-col>
                    <v-col
                        cols="4"
                        sm="6"
                    >
                        <v-card
                        class="pa-2"
                        outlined
                        style="background-color: lightgrey;"
                        tile
                        >
                        Level 3: .col-4 .col-sm-6
                        </v-card>
                    </v-col>
                    </v-row>
                </v-col>
                </v-row>
            </v-container>
            </template>

One column width
----------------

When using the auto-layout, you can define the width of only one column and still
have its siblings to automatically resize around it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["1 of 3"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["2 of 3 (wider)"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["3 of 3"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["1 of 3"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=5,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["2 of 3 (wider)"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["3 of 3"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["1 of 3"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["2 of 3 (wider)"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["3 of 3"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["1 of 3"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=5,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["2 of 3 (wider)"]
                                    )
                                ]
                            ),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["3 of 3"]
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
                    class="mb-6"
                    no-gutters
                    >
                    <v-col
                        v-for="n in 3"
                        :key="n"
                        :cols="n === 2 ? 6 : undefined"
                    >
                        <v-card
                        class="pa-2"
                        outlined
                        tile
                        >
                        {{ n }} of 3 {{ n === 2 ? '(wider)' : '' }}
                        </v-card>
                    </v-col>
                    </v-row>
                    <v-row no-gutters>
                    <v-col
                        v-for="n in 3"
                        :key="n"
                        :cols="n === 2 ? 5 : undefined"
                    >
                        <v-card
                        class="pa-2"
                        outlined
                        tile
                        >
                        {{ n }} of 3 {{ n === 2 ? '(wider)' : '' }}
                        </v-card>
                    </v-col>
                    </v-row>
                </v-container>
                </template>

Spacers
-------

The :py:class:`Spacer <ipyvuetify.Spacer>` component is useful when you want to fill available space or make space between two components.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col"]
                                    )
                                ]
                            ),
                            v.Spacer(),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="auto",
                                lg=3,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-auto"]
                                    )
                                ]
                            ),
                            v.Spacer(),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col"]
                                    )
                                ]
                            ),
                            v.Spacer(),
                            v.Col(
                                md=5,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        cols="auto",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-5"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col"]
                                    )
                                ]
                            ),
                            v.Spacer(),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols="auto",
                                lg=3,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-auto"]
                                    )
                                ]
                            ),
                            v.Spacer(),
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col"]
                                    )
                                ]
                            ),
                            v.Spacer(),
                            v.Col(
                                md=5,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        cols="auto",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-md-5"]
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
                <v-row>
                <v-col>
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col
                    </v-card>
                </v-col>

                <v-spacer></v-spacer>

                <v-col>
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col
                    </v-card>
                </v-col>
                </v-row>

                <v-row>
                <v-col
                    cols="auto"
                    lg="3"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-auto
                    </v-card>
                </v-col>

                <v-spacer></v-spacer>

                <v-col>
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col
                    </v-card>
                </v-col>

                <v-spacer></v-spacer>

                <v-col md="5">
                    <v-card
                    class="pa-2"
                    cols="auto"
                    outlined
                    tile
                    >
                    .col-md-5
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Unique layouts
--------------

The power and flexibility of the Vuetify grid system allows you to create amazing
user interfaces.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols=12,
                                md=8,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-12 .col-md-8"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6 .col-md-4"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6 .col-md-4"]
                                    )
                                ]
                            ) for _ in range(3)
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6"]
                                    )
                                ]
                            ) for _ in range(2)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols=12,
                                md=8,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-12 .col-md-8"]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=6,
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6 .col-md-4"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                md=4,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6 .col-md-4"]
                                    )
                                ]
                            ) for _ in range(3)
                        ]
                    ),
                    v.Row(
                        children=[
                            v.Col(
                                cols=6,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=[".col-6"]
                                    )
                                ]
                            ) for _ in range(2)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container class="grey lighten-5">
                <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                <v-row>
                <v-col
                    cols="12"
                    md="8"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-12 .col-md-8
                    </v-card>
                </v-col>
                <v-col
                    cols="6"
                    md="4"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-6 .col-md-4
                    </v-card>
                </v-col>
                </v-row>

                <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
                <v-row>
                <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="6"
                    md="4"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-6 .col-md-4
                    </v-card>
                </v-col>
                </v-row>

                <!-- Columns are always 50% wide, on mobile and desktop -->
                <v-row>
                <v-col
                    v-for="n in 2"
                    :key="n"
                    cols="6"
                >
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    .col-6
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>

Variable content width
----------------------

Assigning breakpoint width for columns can be configured to resize based upon the
nature width of their content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        justify="center",
                        no_gutters=True,
                        children=[
                            v.Col(
                                lg=2,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["1 of 3"]
                                    )
                                ]
                            ),
                            v.Col(
                                md="auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Variable width content"]
                                    )
                                ]
                            ),
                            v.Col(
                                lg=2,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["3 of 3"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["1 of 3"]
                                    )
                                ]
                            ),
                            v.Col(
                                md="auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Variable width content"]
                                    )
                                ]
                            ),
                            v.Col(
                                lg=2,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["3 of 3"]
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

            v.Container(
                class_="grey lighten-5",
                children=[
                    v.Row(
                        class_="mb-6",
                        justify="center",
                        no_gutters=True,
                        children=[
                            v.Col(
                                lg=2,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["1 of 3"]
                                    )
                                ]
                            ),
                            v.Col(
                                md="auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Variable width content"]
                                    )
                                ]
                            ),
                            v.Col(
                                lg=2,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["3 of 3"]
                                    )
                                ]
                            )
                        ]
                    ),
                    v.Row(
                        no_gutters=True,
                        children=[
                            v.Col(
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["1 of 3"]
                                    )
                                ]
                            ),
                            v.Col(
                                md="auto",
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["Variable width content"]
                                    )
                                ]
                            ),
                            v.Col(
                                lg=2,
                                children=[
                                    v.Card(
                                        class_="pa-2",
                                        outlined=True,
                                        tile=True,
                                        children=["3 of 3"]
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
                class="mb-6"
                justify="center"
                no-gutters
                >
                <v-col lg="2">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    1 of 3
                    </v-card>
                </v-col>
                <v-col md="auto">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    Variable width content
                    </v-card>
                </v-col>
                <v-col lg="2">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    3 of 3
                    </v-card>
                </v-col>
                </v-row>
                <v-row no-gutters>
                <v-col>
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    1 of 3
                    </v-card>
                </v-col>
                <v-col md="auto">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    Variable width content
                    </v-card>
                </v-col>
                <v-col lg="2">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    >
                    3 of 3
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </template>
