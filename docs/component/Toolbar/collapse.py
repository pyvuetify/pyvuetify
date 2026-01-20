import ipyvuetify as v

v.Card(
    color="grey lighten-4",
    flat=True,
    height="200px",
    tile=True,
    children=[
        v.Toolbar(
            collapse=True,
            children=[
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ],
        ),
    ],
)
