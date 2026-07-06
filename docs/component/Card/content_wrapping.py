import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="400",
    children=[
        v.Img(
            color="surface-variant",
            height="200",
            src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",
            cover=True,
            children=[
                v.Toolbar(
                    color="transparent",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Btn(icon="$menu"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
