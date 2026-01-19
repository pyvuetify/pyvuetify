import ipyvuetify as v

v.Card(
    class_="mx-auto elevation-20",
    color="purple",
    dark=True,
    style="max-width: 400px;",
    children=[
        v.Row(
            justify="space-between",
            children=[
                v.Col(
                    cols=8,
                    children=[
                        v.CardTitle(
                            children=[
                                v.Html(
                                    tag="div",
                                    children=[
                                        v.Html(
                                            tag="div",
                                            class_="text-h5",
                                            children=["Halycon Days"],
                                        ),
                                        v.Html(
                                            tag="div",
                                            children=["Ellie Goulding"],
                                        ),
                                        v.Html(
                                            tag="div",
                                            children=["(2013)"],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
                v.Img(
                    class_="shrink ma-2",
                    contain=True,
                    height="125px",
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png",
                    style_="flex-basis: 125px",
                ),
            ],
        ),
        v.Divider(dark=True, class_="my-0"),
        v.CardActions(
            class_="pa-4",
            children=[
                "Rate this album",
                v.Spacer(),
                v.Rating(
                    v_model=3.5,
                    background_color="white",
                    color="yellow accent-4",
                    dense=True,
                    half_increments=True,
                    hover=True,
                    size=18,
                ),
            ],
        ),
    ],
)
