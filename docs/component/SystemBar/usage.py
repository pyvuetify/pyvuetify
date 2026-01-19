import ipyvuetify as v

v.Card(
    img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg",
    height="200px",
    children=[
        v.SystemBar(
            color="orange",
            children=[
                v.Spacer(),
                v.Icon(children=["mdi-wifi-strength-2"]),
                v.Icon(children=["mdi-signal-cellular-2"]),
                v.Icon(children=["mdi-battery-90"]),
                v.Html(tag="span", children=["12:30"]),
            ],
        )
    ],
)
