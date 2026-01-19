import ipyvuetify as v

v.Container(
    children=[
        v.Subheader(children=["Light status bar"]),
        v.Card(
            img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg",
            height="200px",
            children=[
                v.SystemBar(
                    color="primary",
                    children=[
                        v.Spacer(),
                        v.Icon(children=["mdi-wifi-strength-4"]),
                        v.Icon(children=["mdi-signal-cellular-outline"]),
                        v.Icon(children=["mdi-battery"]),
                        v.Html(tag="span", children=["12:30"]),
                    ],
                )
            ],
        ),
        v.Subheader(children=["Dark status bar"]),
        v.Card(
            img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg",
            height="200px",
            children=[
                v.SystemBar(
                    color="primary",
                    dark=True,
                    children=[
                        v.Spacer(),
                        v.Icon(children=["mdi-wifi-strength-4"]),
                        v.Icon(children=["mdi-signal-cellular-outline"]),
                        v.Icon(children=["mdi-battery"]),
                        v.Html(tag="span", children=["12:30"]),
                    ],
                )
            ],
        ),
    ]
)
