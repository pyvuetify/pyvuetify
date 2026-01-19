import ipyvuetify as v

v.Card(
    class_="d-flex pa-2",
    outlined=True,
    tile=True,
    children=[v.Html(tag="div", children=["I'm a flexbox container!"])],
)
