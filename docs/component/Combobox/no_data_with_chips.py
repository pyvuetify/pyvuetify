import ipyvuetify as v

options = ["Hiking", "Swimming", "Reading", "Cooking", "Traveling", "Gaming"]

v.Container(
    fluid=True,
    children=[
        v.Combobox(
            v_model=[],
            items=options,
            label="Add some tags",
            multiple=True,
            small_chips=True,
            hide_selected=True,
            hint="Maximum of 5 tags",
            persistent_hint=True,
            v_slots=[
                {
                    "name": "no-data",
                    "children": v.ListItem(
                        children=[
                            v.ListItemContent(
                                children=[
                                    v.ListItemTitle(
                                        children=[
                                            "No results matching ",
                                            v.Html(tag="strong", children=["{{ search }}"]),
                                            ". Press ",
                                            v.Html(tag="kbd", children=["enter"]),
                                            " to create a new one",
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                }
            ],
        )
    ],
)
