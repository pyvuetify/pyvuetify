import pyvuetify as v

v.Row(
    density="comfortable",
    children=[
        v.Col(
            # JS expression, needs manual conversion
            key="i",
            cols="12",
            md="4",
            children=[
                v.Card(
                    # JS expression, needs manual conversion
                    variant="variant",
                    class_="mx-auto",
                    color="surface-variant",
                    max_width="344",
                    subtitle="Greyhound divisely hello coldly fonwderfully",
                    title="Headline",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Btn(text="Button"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
