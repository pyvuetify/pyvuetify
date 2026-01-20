import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    max_width=344,
    children=[
        v.CardTitle(children=["Word of the Day"]),
        v.CardSubtitle(children=["el·ee·mos·y·nar·y"]),
        v.CardActions(children=[v.Btn(text=True, children=["Learn More"])]),
        v.ExpandTransition(
            children=[
                v.Card(
                    class_="transition-fast-in-fast-out v-card--reveal",
                    style_="height: 100%;",
                    children=[
                        v.CardText(
                            class_="pb-0",
                            children=[
                                v.Html(
                                    tag="p", class_="text-h4 text--primary", children=["adjective"]
                                ),
                                v.Html(
                                    tag="p",
                                    children=["relating to or dependent on charity; charitable."],
                                ),
                                v.Html(
                                    tag="p", children=['"an eleemosynary educational institution."']
                                ),
                            ],
                        ),
                        v.CardActions(
                            class_="pt-0",
                            children=[v.Btn(text=True, color="teal accent-4", children=["Close"])],
                        ),
                    ],
                )
            ]
        ),
    ],
)
