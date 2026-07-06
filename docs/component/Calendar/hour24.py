import pyvuetify as v

v.Row(
    children=[
        v.Col(
            children=[
                v.Select(
                    v_model="format",
                    items=["ampm", "24hr"],
                    class_="mb-2",
                    density="compact",
                    label="Format",
                    hide_details=True,
                ),
                v.Sheet(
                    height="400",
                    children=[
                        v.Calendar(
                            ref="calendar",
                            # JS expression, needs manual conversion
                            events="events",
                            # JS expression, needs manual conversion
                            format="format",
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
