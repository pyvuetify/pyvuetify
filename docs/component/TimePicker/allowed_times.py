import ipyvuetify as v

v.Container(
    class_="d-flex flex-row justify-space-around",
    children=[
        v.TimePicker(
            v_model="11:15",
            allowed_hours=[h for h in range(24) if h % 2 == 1],
            allowed_minutes=[m for m in range(60) if 10 <= m <= 50],
            format="24hr",
            scrollable=True,
            min="9:30",
            max="22:15",
        ),
        v.TimePicker(
            v_model="10:10",
            allowed_minutes=[m for m in range(60) if m % 10 == 0],
            format="24hr",
        ),
    ],
)
