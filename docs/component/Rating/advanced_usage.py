import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    width=600,
    children=[
        v.Row(
            children=[
                v.Col(
                    class_="d-flex",
                    cols=6,
                    children=[
                        v.Img(
                            src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png",
                        ),
                    ],
                ),
                v.Col(
                    cols=6,
                    children=[
                        v.Container(
                            class_="pa-0 pl-2",
                            style="margin: -4px 0",
                            children=[
                                v.Row(
                                    children=[
                                        v.Col(
                                            class_="d-flex",
                                            cols=7,
                                            children=[
                                                v.Img(
                                                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png",
                                                ),
                                            ],
                                        ),
                                        v.Col(
                                            class_="d-flex",
                                            cols=5,
                                            children=[
                                                v.Img(
                                                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png",
                                                ),
                                            ],
                                        ),
                                        v.Col(
                                            class_="d-flex",
                                            cols=5,
                                            children=[
                                                v.Img(
                                                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png",
                                                ),
                                            ],
                                        ),
                                        v.Col(
                                            class_="d-flex",
                                            cols=7,
                                            children=[
                                                v.Img(
                                                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite5.png",
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.CardTitle(
            align_start=True,
            children=[
                v.Html(
                    tag="div",
                    children=[
                        v.Html(
                            tag="span",
                            class_="text-h5",
                            children=["FORTNITE"],
                        ),
                        v.Html(
                            tag="div",
                            class_="grey--text font-weight-light",
                            children=["Video game"],
                        ),
                    ],
                ),
                v.Spacer(),
                v.Icon(
                    children=["mdi-share-variant"],
                ),
            ],
        ),
        v.Divider(),
        v.CardActions(
            children=[
                v.Html(
                    tag="span",
                    class_="pl-2 grey--text text--darken-2 font-weight-light text-caption",
                    children=["16,544 reviews"],
                ),
                v.Spacer(),
                v.Rating(
                    v_model=7,
                    length=10,
                    readonly=True,
                    v_slots=[
                        {
                            "name": "item",
                            "variable": "props",
                            "children": v.Icon(
                                large=True,
                                children=["mdi-numeric-0-box"],
                                color="purple darken-4",
                            ),
                        }
                    ],
                ),
            ]
        ),
        v.Html(
            tag="div",
            class_="pa-4 pt-0 text-caption",
            children=[
                v.Html(
                    tag="em",
                    children=[
                        "Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic."
                    ],
                ),
            ],
        ),
    ],
)
