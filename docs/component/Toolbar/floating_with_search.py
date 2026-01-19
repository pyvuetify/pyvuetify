import ipyvuetify as v

v.Card(
    class_="pa-4",
    flat=True,
    height="300px",
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg",
    children=[
        v.Toolbar(
            dense=True,
            floating=True,
            children=[
                v.TextField(
                    hide_details=True,
                    prepend_icon="mdi-magnify",
                    single_line=True,
                ),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-crosshairs-gps"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ],
        ),
    ],
)
