import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-center",
            children=[
                v.DatePicker(
                    # JS expression, needs manual conversion
                    weekday_format="$vuetify.display.width > 550 ? 'long' : 'short'",
                    width="700",
                ),
            ],
        ),
    ],
)
