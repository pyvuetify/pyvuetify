import pyvuetify as v

v.Row(
    children=[
        v.Col(
            children=[
                v.Sheet(
                    height="400",
                    children=[
                        v.Calendar(
                            ref="calendar",
                            # JS expression, needs manual conversion
                            events="events",
                            # JS expression, needs manual conversion
                            model_value="today",
                            # JS expression, needs manual conversion
                            now="today",
                            color="primary",
                            type="week",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
