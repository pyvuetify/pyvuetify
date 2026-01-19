import ipyvuetify as v

v.Container(
    class_="text-center mt-2",
    style_="width: 100%",
    children=[v.Badge(content="6", children=[v.Icon(large=True, children=["mdi-vuetify"])])],
)
