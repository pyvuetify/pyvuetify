import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    max_width=400,
    tile=True,
    children=[
        v.ListItem(
            children=[v.ListItemContent(children=[v.ListItemTitle(children=["Single-line item"])])]
        ),
        v.ListItem(
            two_line=True,
            children=[
                v.ListItemContent(
                    children=[
                        v.ListItemTitle(children=["Two-line item"]),
                        v.ListItemSubtitle(children=["Secondary text"]),
                    ]
                )
            ],
        ),
        v.ListItem(
            three_line=True,
            children=[
                v.ListItemContent(
                    children=[
                        v.ListItemTitle(children=["Three-line item"]),
                        v.ListItemSubtitle(
                            children=[
                                "Secondary line text Lorem ipsum dolor sit amet,",
                                "consectetur adipiscing elit.",
                            ]
                        ),
                    ]
                )
            ],
        ),
    ],
)
