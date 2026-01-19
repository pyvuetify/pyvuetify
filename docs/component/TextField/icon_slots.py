import ipyvuetify as v

v.Container(
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="12",
                    children=[
                        v.TextField(
                            v_model="message",
                            outlined=True,
                            clearable=True,
                            label="Message",
                            v_slots=[
                                {
                                    "name": "prepend",
                                    "children": v.Tooltip(
                                        bottom=True,
                                        v_slots=[
                                            {
                                                "name": "activator",
                                                "variable": "activator",
                                                "children": v.Icon(
                                                    children=["mdi-help-circle-outline"],
                                                    v_on="activator.on",
                                                    v_bind="activator.attrs",
                                                ),
                                            }
                                        ],
                                        children="I'm a tooltip",
                                    ),
                                },
                                {
                                    "name": "append",
                                    "children": v.Img(
                                        width=24,
                                        height=24,
                                        src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg",
                                    ),
                                },
                                {
                                    "name": "append-outer",
                                    "children": v.Menu(
                                        offset_y=True,
                                        style="top: -12px",
                                        v_slots=[
                                            {
                                                "name": "activator",
                                                "variable": "activator",
                                                "children": v.Btn(
                                                    v_on="activator.on",
                                                    v_bind="activator.attrs",
                                                    children=[
                                                        v.Icon(
                                                            left=True,
                                                            children=["mdi-menu"],
                                                        ),
                                                        "Menu",
                                                    ],
                                                ),
                                            }
                                        ],
                                        children=[
                                            v.Card(
                                                children=[
                                                    v.CardText(
                                                        class_="pa-6",
                                                        children=[
                                                            v.Btn(
                                                                large=True,
                                                                text=True,
                                                                color="primary",
                                                                click="clickMe",
                                                                children=[
                                                                    v.Icon(
                                                                        left=True,
                                                                        children=["mdi-target"],
                                                                    ),
                                                                    "Click me",
                                                                ],
                                                            ),
                                                        ],
                                                    ),
                                                ]
                                            ),
                                        ],
                                    ),
                                },
                            ],
                        )
                    ],
                )
            ]
        )
    ]
)
