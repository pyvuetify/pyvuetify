import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="450",
    children=[
        v.Img(
            # JS expression, needs manual conversion
            aspect_ratio="16/9",
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg",
            cover=True,
        ),
        v.CardTitle(
            class_="flex-column align-start",
            children=[
                v.Html(
                    tag="div",
                    class_="text-headline-large mb-2",
                    children=["Welcome Home..."],
                ),
                v.Html(
                    tag="div",
                    class_="text-title-large font-weight-regular text-grey",
                    children=["Monday, 12:30 PM, Mostly Sunny"],
                ),
                v.Html(
                    tag="div",
                    class_="d-flex align-center",
                    children=[
                        v.Avatar(
                            class_="me-4",
                            size="24",
                            children=[
                                v.Img(
                                    src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png",
                                ),
                            ],
                        ),
                        v.Html(
                            tag="span",
                            class_="text-body-medium text-grey",
                            children=["81° / 62°"],
                        ),
                    ],
                ),
            ],
        ),
        v.Divider(class_="mx-4"),
        v.CardText(
            class_="d-flex justify-space-between",
            children=[
                v.Chip(
                    prepend_icon="mdi-brightness-5",
                    children=["Turn on lights"],
                ),
                v.Chip(
                    prepend_icon="mdi-alarm-check",
                    children=["Set alarm"],
                ),
                v.Chip(
                    icon="mdi-blinds",
                    children=["Close blinds"],
                ),
            ],
        ),
    ],
)
