Tooltip
=======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Tooltips
    documentation <https://v2.vuetifyjs.com/en/components/tooltips/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Tooltip <ipyvuetify.Tooltip>` component is useful for conveying
information when a user hovers over an element. You can also programmatically
control the display of tooltips through a ``v_model``. When activated, tooltips
display a text label identifying an element, such as a description of its function.

.. api::

    - :py:class:`ipyvuetify.Tooltip`

.. note::

    In order for :py:class:`Tooltip <ipyvuetify.Tooltip>` to be positioned
    correctly a position prop (**top** | **bottom** | **left** | **right**) is
    required.

Usage
-----

Tooltips can wrap any element.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        class_="text-center d-flex align-center justify-space-around",
        children=[
            v.Tooltip(
                bottom=True,
                v_slots=[{
                    "name": "activator",
                    "variable": "props",
                    "children": v.Btn(
                        color="primary",
                        dark=True,
                        children=["Button"],
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }],
                children=[
                    "Tooltip",
                ],
            ),
            v.Tooltip(
                bottom=True,
                v_slots=[{
                    "name": "activator",
                    "variable": "props",
                    "children": v.Icon(
                        color="primary",
                        dark=True,
                        large=True,
                        children=["mdi-home"],
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }],
                children=[
                    "Tooltip",
                ],
            ),
            v.Tooltip(
                bottom=True,
                v_slots=[{
                    "name": "activator",
                    "variable": "props",
                    "children": v.Html(
                        tag="span",
                        children=["This text has a tooltip"],
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }],
                children=[
                    "Tooltip",
                ],
            ),
        ],
    )

Examples
--------

Alignment
^^^^^^^^^

A tooltip can be aligned to any of the **four sides** of the activator element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            directions = ["left", "top", "bottom", "right"]

            v.Container(
                class_="text-center d-flex align-center justify-space-around",
                children=[
                    v.Tooltip(
                        v_slots=[{
                            "name": "activator",
                            "variable": "props",
                            "children": v.Btn(
                                color="primary",
                                dark=True,
                                children=[d.capitalize()],
                                v_bind="props.attrs",
                                v_on="props.on",
                            ),
                        }],
                        children=[
                            f"{d.capitalize()} tooltip",
                        ],
                        **{d: True},
                    ) for d in directions
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            directions = ["left", "top", "bottom", "right"]

            v.Container(
                class_="text-center d-flex align-center justify-space-around",
                children=[
                    v.Tooltip(
                        v_slots=[{
                            "name": "activator",
                            "variable": "props",
                            "children": v.Btn(
                                color="primary",
                                dark=True,
                                children=[d.capitalize()],
                                v_bind="props.attrs",
                                v_on="props.on",
                            ),
                        }],
                        children=[
                            f"{d.capitalize()} tooltip",
                        ],
                        **{d: True},
                    ) for d in directions
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center d-flex align-center justify-space-around">
                <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Left
                    </v-btn>
                </template>
                <span>Left tooltip</span>
                </v-tooltip>

                <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Top
                    </v-btn>
                </template>
                <span>Top tooltip</span>
                </v-tooltip>

                <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Bottom
                    </v-btn>
                </template>
                <span>Bottom tooltip</span>
                </v-tooltip>

                <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Right
                    </v-btn>
                </template>
                <span>Right tooltip</span>
                </v-tooltip>
            </div>
            </template>

Color
^^^^^

Tooltip color can be set with the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = ["primary", "success", "warning", "error"]

            v.Container(
                class_="text-center d-flex align-center justify-space-around",
                children=[
                    v.Tooltip(
                        bottom=True,
                        color=c,
                        v_slots=[{
                            "name": "activator",
                            "variable": "props",
                            "children": v.Btn(
                                color=c,
                                dark=True,
                                children=[c],
                                v_bind="props.attrs",
                                v_on="props.on",
                            ),
                        }],
                        children=[
                            f"{c.capitalize()} tooltip",
                        ],
                    ) for c in colors
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = ["primary", "success", "warning", "error"]

            v.Container(
                class_="text-center d-flex align-center justify-space-around",
                children=[
                    v.Tooltip(
                        bottom=True,
                        color=c,
                        v_slots=[{
                            "name": "activator",
                            "variable": "props",
                            "children": v.Btn(
                                color=c,
                                dark=True,
                                children=[c],
                                v_bind="props.attrs",
                                v_on="props.on",
                            ),
                        }],
                        children=[
                            f"{c.capitalize()} tooltip",
                        ],
                    ) for c in colors
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div class="text-center d-flex align-center justify-space-around">
                <v-tooltip bottom color="primary">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    primary
                    </v-btn>
                </template>
                <span>Primary tooltip</span>
                </v-tooltip>

                <v-tooltip bottom color="success">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="success"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    success
                    </v-btn>
                </template>
                <span>Success tooltip</span>
                </v-tooltip>

                <v-tooltip bottom color="warning">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="warning"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    warning
                    </v-btn>
                </template>
                <span>Warning tooltip</span>
                </v-tooltip>

                <v-tooltip bottom color="error">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="error"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    error
                    </v-btn>
                </template>
                <span>Error tooltip</span>
                </v-tooltip>
            </div>
            </template>

Visibility
^^^^^^^^^^

Tooltip visibility can be programmatically changed using ``v_model``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label="Show tooltip", v_model=False)

            tooltip = v.Tooltip(
                v_model=switch.v_model,
                top=True,
                v_slots=[{
                    "name": "activator",
                    "variable": "props",
                    "children": v.Btn(
                        icon=True,
                        large=True,
                        v_bind="props.attrs",
                        v_on="props.on",
                        children=[
                            v.Icon(color="grey lighten-1", children=["mdi-cart"]),
                        ],
                    ),
                }],
                children=[
                    "Programmatic tooltip",
                ],
            )

            jslink((switch, 'v_model'), (tooltip, 'v_model'))

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[switch, tooltip],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            switch = v.Switch(label="Show tooltip", v_model=False)

            tooltip = v.Tooltip(
                v_model=switch.v_model,
                top=True,
                v_slots=[{
                    "name": "activator",
                    "variable": "props",
                    "children": v.Btn(
                        icon=True,
                        large=True,
                        v_bind="props.attrs",
                        v_on="props.on",
                        children=[
                            v.Icon(color="grey lighten-1", children=["mdi-cart"]),
                        ],
                    ),
                }],
                children=[
                    "Programmatic tooltip",
                ],
            )

            jslink((switch, 'v_model'), (tooltip, 'v_model'))

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[switch, tooltip],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container
                fluid
                class="text-center"
            >
                <v-row
                class="flex"
                justify="space-between"
                >
                <v-col cols="12">
                    <v-btn @click="show = !show">
                    toggle
                    </v-btn>
                </v-col>

                <v-col
                    cols="12"
                    class="mt-12"
                >
                    <v-tooltip
                    v-model="show"
                    top
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        >
                        <v-icon color="grey lighten-1">
                            mdi-cart
                        </v-icon>
                        </v-btn>
                    </template>
                    <span>Programmatic tooltip</span>
                    </v-tooltip>
                </v-col>
                </v-row>
            </v-container>
            </template>
