import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="h1",
            class_="my-0",
            children=["Plan your event:"],
        ),
        v.Row(
            class_="align-center justify-space-around",
            children=[
                v.Col(
                    style_="width: 350px; flex: 0 1 auto;",
                    children=[
                        v.Html(
                            tag="h2",
                            class_="my-0",
                            children=["Start:"],
                        ),
                        v.TimePicker(
                            v_model="start",
                            # JS expression, needs manual conversion
                            max="end",
                        ),
                    ],
                ),
                v.Col(
                    style_="width: 350px; flex: 0 1 auto;",
                    children=[
                        v.Html(
                            tag="h2",
                            class_="my-0",
                            children=["End:"],
                        ),
                        v.TimePicker(
                            v_model="end",
                            # JS expression, needs manual conversion
                            min="start",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
