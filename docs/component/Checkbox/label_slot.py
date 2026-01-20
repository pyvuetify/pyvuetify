import ipyvuetify as v

v.Container(
    children=[
        v.Checkbox(
            v_model=False,
            v_slots=[
                {
                    "name": "label",
                    "variable": "label",
                    "children": v.Html(
                        tag="div",
                        children=[
                            "I agree that ",
                            v.Tooltip(
                                bottom=True,
                                v_slots=[
                                    {
                                        "name": "activator",
                                        "variable": "activator",
                                        "children": v.Html(
                                            tag="a",
                                            v_on="activator.on",
                                            attributes={
                                                "href": "https://vuetifyjs.com",
                                                "target": "_blank",
                                            },
                                            children=["Vuetify"],
                                        ),
                                    }
                                ],
                            ),
                            " is awesome",
                        ],
                    ),
                }
            ],
        )
    ]
)
