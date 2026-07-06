import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="400",
    children=[
        v.Row(
            class_="pa-6 align-center",
            children=[
                v.Html(
                    tag="span",
                    class_="me-4",
                    children=["To"],
                ),
                v.Menu(
                    v_model="menu",
                    location="top start",
                    origin="top start",
                    transition="scale-transition",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Chip(
                                    link=True,
                                    pill=True,
                                    children=[
                                        v.Avatar(
                                            start=True,
                                            children=[
                                                v.Img(src="https://cdn.vuetifyjs.com/images/john.png"),
                                            ],
                                        ),
                                        "John Leider",
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
