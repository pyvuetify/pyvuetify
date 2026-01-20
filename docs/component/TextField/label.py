import ipyvuetify as v

v.Container(
    children=[
        v.TextField(
            outlined=True,
            v_slots=[
                {
                    "name": "label",
                    "children": v.Html(
                        tag="div",
                        children=[
                            "What about ",
                            v.Html(tag="strong", children=["icon"]),
                            " here?",
                            v.Icon(style_="vertical-align: middle", children=["mdi-file-find"]),
                        ],
                    ),
                }
            ],
        )
    ]
)
