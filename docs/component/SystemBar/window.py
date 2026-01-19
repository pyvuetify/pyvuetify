import ipyvuetify as v

v.SystemBar(
    window=True,
    dark=True,
    children=[
        v.Icon(children=["mdi-message"]),
        v.Html(tag="span", children=["10 unread messages"]),
        v.Spacer(),
        v.Icon(children=["mdi-minus"]),
        v.Icon(children=["mdi-checkbox-blank-outline"]),
        v.Icon(children=["mdi-close"]),
    ],
)
