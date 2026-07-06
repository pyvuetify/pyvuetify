import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="500",
    children=[
        v.Container(
            fluid=True,
            children=[
                v.Row(
                    density="comfortable",
                    children=[
                        v.Col(
                            # JS expression, needs manual conversion
                            key="card.title",
                            # JS expression, needs manual conversion
                            cols="card.flex",
                            children=[
                                v.Card(
                                    children=[
                                        v.Img(
                                            # JS expression, needs manual conversion
                                            src="card.src",
                                            class_="align-end",
                                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                            height="200px",
                                            cover=True,
                                            children=[
                                                v.CardTitle(class_="text-white"),
                                            ],
                                        ),
                                        v.CardActions(
                                            children=[
                                                v.Spacer(),
                                                v.Btn(
                                                    color="medium-emphasis",
                                                    icon="mdi-heart",
                                                    size="small",
                                                ),
                                                v.Btn(
                                                    color="medium-emphasis",
                                                    icon="mdi-bookmark",
                                                    size="small",
                                                ),
                                                v.Btn(
                                                    color="medium-emphasis",
                                                    icon="mdi-share-variant",
                                                    size="small",
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
    ],
)
