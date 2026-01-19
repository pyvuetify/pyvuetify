import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    color="grey lighten-4",
    width=600,
    children=[
        v.CardTitle(
            children=[
                v.Icon(color="indigo", class_="mr-12", size=64, children=["mdi-heart-pulse"]),
                v.Row(
                    align="start",
                    children=[
                        v.Html(
                            tag="div",
                            class_="text-caption grey--text text-uppercase",
                            children=["Heart rate"],
                        ),
                        v.Html(
                            tag="div",
                            children=[
                                v.Html(
                                    tag="span", class_="text-h3 font-weight-black", children=["128"]
                                ),
                                v.Html(tag="strong", children=["BPM"]),
                            ],
                        ),
                    ],
                ),
                v.Spacer(),
                v.Btn(
                    icon=True,
                    class_="align-self-start",
                    size=28,
                    children=[v.Icon(children=["mdi-arrow-right-thick"])],
                ),
            ]
        ),
        v.Sheet(
            color="transparent",
            children=[
                v.Sparkline(
                    key="—",
                    smooth=16,
                    gradient=["#f72047", "#ffd200", "#1feaea"],
                    line_width=3,
                    value=[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
                    auto_draw=True,
                    stroke_linecap="round",
                )
            ],
        ),
    ],
)
