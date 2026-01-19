import ipyvuetify as v

values = [423, 446, 675, 510, 590, 610, 760]

v.Card(
    class_="mx-auto text-center",
    color="green",
    dark=True,
    width=600,
    children=[
        v.CardText(
            children=[
                v.Sheet(
                    color="rgba(0, 0, 0, .12)",
                    children=[
                        v.Sparkline(
                            value=values,
                            color="rgba(255, 255, 255, .7)",
                            height=100,
                            padding=24,
                            stroke_linecap="round",
                            smooth=True,
                            v_slots=[
                                {
                                    "name": "label",
                                    "variable": "item",
                                    "children": "${{ item.value }}",
                                }
                            ],
                        )
                    ],
                )
            ]
        ),
        v.CardText(
            children=[v.Html(tag="h3", class_="font-weight-thin", children=["Sales Last 24h"])]
        ),
        v.Divider(),
        v.CardActions(
            class_="justify-center",
            children=[v.Btn(block=True, text=True, children=["Go to Report"])],
        ),
    ],
)
