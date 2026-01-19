import ipyvuetify as v

v.Container(
    class_="text-center",
    children=[
        v.Dialog(
            transition="dialog-bottom-transition",
            children=[
                v.Card(
                    children=[
                        v.Toolbar(
                            children=["Opening from the bottom"],
                            color="primary",
                            dark=True,
                        ),
                        v.CardText(
                            children=[
                                v.Html(tag="div", class_="text-h2 pa-12", children=["Hello world!"])
                            ]
                        ),
                        v.CardActions(
                            class_="justify-end",
                            children=[
                                v.Btn(
                                    children=["Close"],
                                    text=True,
                                )
                            ],
                        ),
                    ]
                )
            ],
            v_slots=[
                {
                    "name": "activator",
                    "variable": "dialog_bottom",
                    "children": v.Btn(
                        class_="mx-4",
                        children=["From the bottom"],
                        color="primary",
                        v_bind="dialog_bottom.attrs",
                        v_on="dialog_bottom.on",
                    ),
                }
            ],
        ),
        v.Dialog(
            transition="dialog-top-transition",
            children=[
                v.Card(
                    children=[
                        v.Toolbar(
                            children=["Opening from the top"],
                            color="primary",
                            dark=True,
                        ),
                        v.CardText(
                            children=[
                                v.Html(tag="div", class_="text-h2 pa-12", children=["Hello world!"])
                            ]
                        ),
                        v.CardActions(
                            class_="justify-end",
                            children=[
                                v.Btn(
                                    children=["Close"],
                                    text=True,
                                )
                            ],
                        ),
                    ]
                )
            ],
            v_slots=[
                {
                    "name": "activator",
                    "variable": "dialog_top",
                    "children": v.Btn(
                        class_="mx-4",
                        children=["From the top"],
                        color="primary",
                        v_bind="dialog_top.attrs",
                        v_on="dialog_top.on",
                    ),
                }
            ],
        ),
    ],
)
