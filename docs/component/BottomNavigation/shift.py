import ipyvuetify as v

colors = ["blue-grey", "teal", "brown", "indigo"]

bottom_nav = v.BottomNavigation(
    v_model=1,
    background_color=colors[1],
    dark=True,
    shift=True,
    children=[
        v.Btn(
            children=[
                v.Html(tag="span", children=["Video"]),
                v.Icon(children=["mdi-television-play"]),
            ]
        ),
        v.Btn(
            children=[v.Html(tag="span", children=["Music"]), v.Icon(children=["mdi-music-note"])]
        ),
        v.Btn(children=[v.Html(tag="span", children=["Book"]), v.Icon(children=["mdi-book"])]),
        v.Btn(children=[v.Html(tag="span", children=["Image"]), v.Icon(children=["mdi-image"])]),
    ],
)


def update_color(widget, event, data):
    if data < len(colors):
        bottom_nav.background_color = colors[data]


bottom_nav.on_event("change", update_color)

v.Container(children=[bottom_nav])
