import ipyvuetify as v

v.Container(
    children=[
        v.Row(
            children=[
                v.Col(
                    cols=12,
                    sm=6,
                    class_="py-2",
                    children=[
                        v.Html(tag="p", children=["Exclusive"]),
                        v.BtnToggle(
                            children=[
                                v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])]),
                            ]
                        ),
                    ],
                ),
                v.Col(
                    cols=12,
                    sm=6,
                    class_="py-2",
                    children=[
                        v.Html(tag="p", children=["Multiple"]),
                        v.BtnToggle(
                            dense=True,
                            background_color="primary",
                            dark=True,
                            multiple=True,
                            children=[
                                v.Btn(children=[v.Icon(children=["mdi-format-bold"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-italic"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-underline"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-color-fill"])]),
                            ],
                        ),
                    ],
                ),
                v.Col(
                    cols=12,
                    sm=6,
                    class_="py-2",
                    children=[
                        v.Html(tag="p", children=["No Options Selected"]),
                        v.BtnToggle(
                            children=[
                                v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])]),
                            ]
                        ),
                    ],
                ),
                v.Col(
                    cols=12,
                    sm=6,
                    class_="py-2",
                    children=[
                        v.Html(tag="p", children=["Mandatory"]),
                        v.BtnToggle(
                            shaped=True,
                            mandatory=True,
                            children=[
                                v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
                                v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])]),
                            ],
                        ),
                    ],
                ),
                v.Col(
                    cols=12,
                    class_="py-2",
                    children=[
                        v.Html(tag="p", children=["Text Options"]),
                        v.BtnToggle(
                            tile=True,
                            color="deep-purple accent-3",
                            group=True,
                            children=[
                                v.Btn(value="left", children=["Left"]),
                                v.Btn(value="center", children=["Center"]),
                                v.Btn(value="right", children=["Right"]),
                                v.Btn(value="justify", children=["Justify"]),
                            ],
                        ),
                    ],
                ),
                v.Col(
                    cols=12,
                    class_="py-2",
                    children=[
                        v.Html(tag="p", children=["Text & Icon Options"]),
                        v.BtnToggle(
                            borderless=True,
                            children=[
                                v.Btn(
                                    value="left",
                                    children=[
                                        v.Html(
                                            tag="span",
                                            class_="hidden-sm-and-down",
                                            children=["Left"],
                                        ),
                                        v.Icon(right=True, children=["mdi-format-align-left"]),
                                    ],
                                ),
                                v.Btn(
                                    value="center",
                                    children=[
                                        v.Html(
                                            tag="span",
                                            class_="hidden-sm-and-down",
                                            children=["Center"],
                                        ),
                                        v.Icon(right=True, children=["mdi-format-align-center"]),
                                    ],
                                ),
                                v.Btn(
                                    value="right",
                                    children=[
                                        v.Html(
                                            tag="span",
                                            class_="hidden-sm-and-down",
                                            children=["Right"],
                                        ),
                                        v.Icon(right=True, children=["mdi-format-align-right"]),
                                    ],
                                ),
                                v.Btn(
                                    value="justify",
                                    children=[
                                        v.Html(
                                            tag="span",
                                            class_="hidden-sm-and-down",
                                            children=["Justify"],
                                        ),
                                        v.Icon(right=True, children=["mdi-format-align-justify"]),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ]
        ),
    ]
)
