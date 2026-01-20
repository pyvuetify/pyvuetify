import ipyvuetify as v

v.Container(
    class_="text-center",
    children=[
        v.Dialog(
            v_model=False,
            width=300,
            children=[
                v.Card(
                    color="primary",
                    dark=True,
                    children=[
                        v.CardText(
                            children=[
                                "Please stand by",
                                v.ProgressLinear(
                                    indeterminate=True,
                                    color="white",
                                    class_="mb-0",
                                ),
                            ]
                        )
                    ],
                )
            ],
            v_slots=[
                {
                    "name": "activator",
                    "variable": "dialog",
                    "children": v.Btn(
                        children=["Start loading"],
                        color="purple darken-2",
                        class_="white--text",
                        v_bind="dialog.attrs",
                        v_on="dialog.on",
                    ),
                }
            ],
        )
    ],
)
