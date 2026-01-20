import ipyvuetify as v

btns = [
    ("mdi-pencil", "green"),
    ("mdi-plus", "indigo"),
    ("mdi-delete", "red"),
]

v.Card(
    width=600,
    height=300,
    class_="mx-auto my-2",
    children=[
        v.SpeedDial(
            absolute=True,
            top=True,
            right=True,
            direction="bottom",
            open_on_hover=True,
            v_slots=[
                {
                    "name": "activator",
                    "children": v.Btn(
                        color="blue darken-2",
                        dark=True,
                        fab=True,
                        children=[v.Icon(children=["mdi-account-circle"])],
                    ),
                }
            ],
            children=[
                v.Btn(
                    fab=True, dark=True, small=True, color=color, children=[v.Icon(children=[icon])]
                )
                for icon, color in btns
            ],
        )
    ],
)
