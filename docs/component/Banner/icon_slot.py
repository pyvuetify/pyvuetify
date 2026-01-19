import ipyvuetify as v

v.Banner(
    two_line=True,
    v_slots=[
        {
            "name": "icon",
            "children": v.Avatar(
                color="deep-purple accent-4",
                size=40,
                children=[v.Icon(icon="mdi-lock", color="white", children=["mdi-lock"])],
            ),
        },
        {
            "name": "actions",
            "children": [
                v.Btn(text=True, color="deep-purple accent-4", children=["Action"]),
                v.Btn(text=True, color="deep-purple accent-4", children=["Action"]),
            ],
        },
    ],
    children=[
        "Three line text string example with two actions. One to two lines is preferable. "
        "Three lines should be considered the maximum string length on desktop in order to "
        "keep messages short and actionable."
    ],
)
