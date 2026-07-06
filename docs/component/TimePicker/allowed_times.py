import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-space-around",
            children=[
                v.TimePicker(
                    v_model="time",
                    # JS expression, needs manual conversion
                    allowed_hours="allowedHours",
                    # JS expression, needs manual conversion
                    allowed_minutes="allowedMinutes",
                    format="24hr",
                    max="22:15",
                    min="9:30",
                    scrollable=True,
                ),
                v.TimePicker(
                    v_model="timeStep",
                    # JS expression, needs manual conversion
                    allowed_minutes="allowedStep",
                    format="24hr",
                ),
            ],
        ),
    ],
)
