import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-space-around",
            children=[
                v.DatePicker(
                    v_model="date",
                    # JS expression, needs manual conversion
                    allowed_dates="allowedDates",
                    max="2018-03-20",
                    min="2016-06-15",
                ),
            ],
        ),
    ],
)
