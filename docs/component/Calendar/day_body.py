import pyvuetify as v

v.Row(
    children=[
        v.Col(
            children=[
                v.Sheet(
                    height="500",
                    children=[
                        v.Calendar(
                            ref="calendar",
                            v_model="value",
                            type="week",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Html(
                                            tag="div",
                                            # JS expression, needs manual conversion
                                            class_="{ first: date === week[0].date }",
                                            # JS expression, needs manual conversion
                                            style_="{ top: nowY() }",
                                            # class_="v-current-time",
                                        ),
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
