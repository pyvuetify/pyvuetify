from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(label="Toggle Drawer", v_model=True)

navigation_drawer = v.NavigationDrawer(
    v_model=True,
    absolute=True,
    bottom=True,
    temporary=True,
    children=[
        v.List(
            nav=True,
            dense=True,
            children=[
                v.ListItem(
                    children=[
                        v.ListItemTitle(children=["Foo"]),
                    ],
                ),
                v.ListItem(
                    children=[
                        v.ListItemTitle(children=["Bar"]),
                    ],
                ),
                v.ListItem(
                    children=[
                        v.ListItemTitle(children=["Fizz"]),
                    ],
                ),
                v.ListItem(
                    children=[
                        v.ListItemTitle(children=["Buzz"]),
                    ],
                ),
            ],
        )
    ],
)

jslink((switch, "v_model"), (navigation_drawer, "v_model"))

v.Card(
    class_="mx-auto my-2 overflow-hidden",
    height=400,
    width=344,
    children=[
        v.SystemBar(color="deep-purple darken-3"),
        v.AppBar(
            color="deep-purple accent-4",
            dark=True,
            prominent=True,
            children=[
                switch,
                v.ToolbarTitle(children=["My files"]),
                v.Spacer(),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-magnify"])],
                ),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-filter"])],
                ),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-dots-vertical"])],
                ),
            ],
        ),
        navigation_drawer,
        v.CardText(
            children=["The navigation drawer will appear from the bottom on smaller size screens."],
        ),
    ],
)
