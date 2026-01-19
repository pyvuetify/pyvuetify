import ipyvuetify as v

v.Tabs(
    fixed_tabs=True,
    background_color="indigo",
    dark=True,
    children=[
        v.Tab(children=["Option"]),
        v.Tab(children=["Another Selection"]),
        v.Tab(children=["Items"]),
        v.Tab(children=["Another Screen"]),
    ],
)
