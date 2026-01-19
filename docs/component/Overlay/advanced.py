import ipyvuetify as v

v.Hover(
    v_slots=[
        {
            "name": "default",
            "variable": "default",
            "children": v.Card(
                class_="mx-auto",
                max_width=344,
                children=[
                    v.Img(src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"),
                    v.CardText(
                        children=[
                            v.Html(
                                tag="h2",
                                class_="text-h6 primary--text",
                                children=["Magento Forests"],
                            ),
                            "Travel to the best outdoor experience on planet Earth. A vacation you will never forget!",
                        ]
                    ),
                    v.CardTitle(
                        children=[
                            v.Rating(
                                value=4,
                                dense=True,
                                color="orange",
                                background_color="orange",
                                hover=True,
                                class_="mr-2",
                            ),
                            v.Html(
                                tag="span",
                                class_="primary--text text-subtitle-2",
                                children=["64 Reviews"],
                            ),
                        ]
                    ),
                    v.FadeTransition(
                        children=[
                            v.Overlay(
                                v_if="default.hover",
                                absolute=True,
                                color="#036358",
                                children=[v.Btn(children=["See more info"])],
                            )
                        ]
                    ),
                ],
            ),
        }
    ]
)
