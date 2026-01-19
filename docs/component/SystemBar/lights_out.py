import ipyvuetify as v

v.Container(
    children=[
        v.Subheader(children=["Lights out (light)"]),
        v.Card(
            img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg",
            height="200px",
            children=[
                v.SystemBar(
                    lights_out=True,
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
        v.Subheader(children=["Lights out (dark)"]),
        v.Card(
            img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg",
            height="200px",
            children=[
                v.SystemBar(
                    lights_out=True,
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
