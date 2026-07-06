import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Hover(
            children=[
                v.Card(
                    class_="mx-auto",
                    color="grey-lighten-4",
                    max_width="600",
                    children=[
                        v.Img(
                            # JS expression, needs manual conversion
                            aspect_ratio="16/9",
                            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png",
                            cover=True,
                            children=[
                                v.ExpandTransition(
                                    children=[
                                        v.Html(
                                            tag="div",
                                            class_=("d-flex bg-orange-darken-2 v-card--reveal text-display-large"),
                                            style_="height: 100%;",
                                            children=["$14.99"],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.CardText(
                            class_="pt-6",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="font-weight-light text-grey text-title-large mb-2",
                                    children=["For the perfect meal"],
                                ),
                                v.Html(
                                    tag="h3",
                                    class_=("text-headline-large font-weight-light text-orange mt-0 mb-2"),
                                    children=["QW cooking utensils"],
                                ),
                                v.Html(
                                    tag="div",
                                    class_="font-weight-light text-title-large mb-2",
                                    children=[
                                        "Our Vintage kitchen utensils delight any chef.",
                                        "Made of bamboo by hand",
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
