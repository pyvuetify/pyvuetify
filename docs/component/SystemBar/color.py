import ipyvuetify as v

colors = ["primary", "red lighten-2", "indigo darken-2"]

v.Container(
    children=[
        v.SystemBar(
            class_="my-3",
            color=color,
            dark=True,
            children=[
                v.Spacer(),
                v.Icon(children=["mdi-wifi-strength-2"]),
                v.Icon(children=["mdi-signal-cellular-2"]),
                v.Icon(children=["mdi-battery-90"]),
                v.Html(tag="span", children=["12:30"]),
            ],
        )
        for color in colors
    ]
)
