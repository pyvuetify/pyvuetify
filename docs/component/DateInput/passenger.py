import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="420",
    children=[
        v.Layout(
            children=[
                v.SystemBar(
                    color="#4603c0",
                    children=[
                        v.Icon(icon="mdi-square"),
                        v.Icon(icon="mdi-circle"),
                        v.Icon(icon="mdi-triangle"),
                    ],
                ),
                v.AppBar(
                    color="#6200ee",
                    title="Passenger information",
                    flat=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Btn(icon="mdi-arrow-left"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
