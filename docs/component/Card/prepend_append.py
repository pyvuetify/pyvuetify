import pyvuetify as v

v.Row(
    class_="align-center justify-center",
    density="comfortable",
    children=[
        v.Col(
            cols="12",
            md="6",
            children=[
                v.Card(
                    append_icon="mdi-check",
                    class_="mx-auto",
                    prepend_icon="mdi-account",
                    subtitle="prepend-icon and append-icon",
                    title="Icons",
                    children=[
                        v.CardText(
                            children=[("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.")],
                        ),
                    ],
                ),
            ],
        ),
        v.Col(
            cols="12",
            md="6",
            children=[
                v.Card(
                    class_="mx-auto",
                    subtitle="prepend and append",
                    title="Icons",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Icon(
                                    color="primary",
                                    icon="mdi-account",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
