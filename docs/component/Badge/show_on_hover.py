import ipyvuetify as v

icon = v.Icon(color="grey lighten-1", large=True, children=["mdi-account"])

badge = v.Badge(
    value=True,
    color="deep-purple accent-4",
    content="9999+",
    left=True,
    transition="slide-x-transition",
    children=[icon],
)

# Simulate hover with mouse events
icon.on_event("mouseenter", lambda *args: badge.set("value", True))
icon.on_event("mouseleave", lambda *args: badge.set("value", False))

v.Container(class_="d-inline-flex justify-center pb-1 pt-5", children=[badge])
