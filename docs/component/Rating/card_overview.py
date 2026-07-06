import pyvuetify as v

v.Card(
    class_="d-flex flex-column mx-auto py-8",
    elevation="3",
    height="500",
    width="360",
    children=[
        v.Html(
            tag="div",
            class_="d-flex justify-center mt-auto text-headline-small ",
            children=["Rating overview"],
        ),
        v.Html(
            tag="div",
            class_="d-flex align-center flex-column my-auto",
            children=[
                v.Html(
                    tag="div",
                    class_="text-display-large mt-5",
                    children=[
                        "3.5",
                        v.Html(
                            tag="span",
                            class_="text-title-large ml-n3",
                            children=["/5"],
                        ),
                    ],
                ),
                v.Rating(
                    model_value=3.5,
                    color="yellow-darken-3",
                    half_increments=True,
                ),
                v.Html(
                    tag="div",
                    class_="px-3",
                    children=["3,360 ratings"],
                ),
            ],
        ),
        v.List(
            bg_color="transparent",
            class_="d-flex flex-column-reverse",
            density="compact",
            children=[
                v.ListItem(
                    # JS expression, needs manual conversion
                    key="i",
                    children=[
                        v.ProgressLinear(
                            # JS expression, needs manual conversion
                            model_value="rating * 15",
                            class_="mx-n5",
                            color="yellow-darken-3",
                            height="20",
                            rounded=True,
                        ),
                        v.Html(
                            tag="template",
                            children=[
                                v.Html(
                                    tag="span",
                                    children=["{{ rating }}"],
                                ),
                                v.Icon(
                                    class_="mx-3",
                                    icon="mdi-star",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
