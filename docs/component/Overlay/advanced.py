import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Hover(
            children=[
                v.Card(
                    class_="mx-auto",
                    max_width="344",
                    children=[
                        v.Img(src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"),
                        v.CardText(
                            children=[
                                v.Html(
                                    tag="h2",
                                    class_="text-title-large text-primary my-0",
                                    children=["Magento Forests"],
                                ),
                                (
                                    "Travel to the best outdoor experience on planet Earth. A "
                                    "vacation you will never forget!"
                                ),
                            ],
                        ),
                        v.CardTitle(
                            children=[
                                v.Rating(
                                    model_value=4,
                                    class_="me-2",
                                    color="orange",
                                    density="compact",
                                    hover=True,
                                ),
                                v.Html(
                                    tag="span",
                                    class_="text-primary text-title-small",
                                    children=["64 Reviews"],
                                ),
                            ],
                        ),
                        v.Overlay(
                            # JS expression, needs manual conversion
                            model_value="!!isHovering",
                            class_="align-center justify-center",
                            scrim="#036358",
                            contained=True,
                            children=[
                                v.Btn(
                                    variant="flat",
                                    children=["See more info"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
