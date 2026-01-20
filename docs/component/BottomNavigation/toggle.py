from ipywidgets import jslink

import ipyvuetify as v

toggle_btn = v.Btn(
    color="deep-purple",
    outlined=True,
    children=["Toggle Navigation"],
    v_model=True,
)

bottom_nav = v.BottomNavigation(
    v_model=True,
    input_value=True,
    color="indigo",
    children=[
        v.Btn(
            children=[v.Html(tag="span", children=["Recents"]), v.Icon(children=["mdi-history"])]
        ),
        v.Btn(
            children=[v.Html(tag="span", children=["Favorites"]), v.Icon(children=["mdi-heart"])]
        ),
        v.Btn(
            children=[v.Html(tag="span", children=["Nearby"]), v.Icon(children=["mdi-map-marker"])]
        ),
    ],
)


def toggle_navigation(widget, event, data):
    bottom_nav.v_model = not widget.v_model


toggle_btn.on_event("click", toggle_navigation)
jslink((toggle_btn, "v_model"), (bottom_nav, "v_model"))

v.Container(
    class_="overflow-hidden",
    children=[v.Html(tag="div", class_="text-center mb-8", children=[toggle_btn]), bottom_nav],
)
