import ipyvuetify as v

v.Container(
    class_="text-center",
    children=[
        v.Dialog(
            v_model=False,
            # persistent=True,  # not working in the documentation so we comment it out
            max_width=290,
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            class_="text-h5",
                            children=["Use Google's location service?"],
                        ),
                        v.CardText(
                            children=[
                                "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
                            ]
                        ),
                        v.CardActions(
                            children=[
                                v.Spacer(),
                                v.Btn(
                                    text=True,
                                    color="green darken-1",
                                    children=["Disagree"],
                                ),
                                v.Btn(
                                    text=True,
                                    color="green darken-1",
                                    children=["Agree"],
                                ),
                            ]
                        ),
                    ]
                )
            ],
            v_slots=[
                {
                    "name": "activator",
                    "variable": "dialog",
                    "children": v.Btn(
                        children=["Open Dialog"],
                        color="primary",
                        v_bind="dialog.attrs",
                        v_on="dialog.on",
                    ),
                }
            ],
        )
    ],
)
