import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="368",
    children=[
        v.CardItem(
            title="Florida",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Icon(
                            class_="me-1 pb-1",
                            color="error",
                            icon="mdi-alert",
                            size="18",
                        ),
                        "Extreme Weather Alert",
                    ],
                ),
            ],
        ),
    ],
)
