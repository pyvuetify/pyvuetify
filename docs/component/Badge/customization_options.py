import ipyvuetify as v

v.Container(
    class_="d-inline-flex justify-center",
    children=[
        v.Badge(
            bordered=True,
            color="error",
            icon="mdi-lock",
            overlap=True,
            children=[
                v.Btn(
                    class_="white--text", color="error", depressed=True, children=["Lock Account"]
                )
            ],
        ),
        v.Html(tag="div", class_="mx-3"),
        v.Badge(
            bordered=True,
            bottom=True,
            color="deep-purple accent-4",
            dot=True,
            offset_x=10,
            offset_y=10,
            children=[
                v.Avatar(
                    size=40, children=[v.Img(src="https://cdn.vuetifyjs.com/images/lists/2.jpg")]
                )
            ],
        ),
        v.Html(tag="div", class_="mx-3"),
        v.Badge(
            avatar=True,
            bordered=True,
            overlap=True,
            v_slots=[
                {
                    "name": "badge",
                    "children": v.Avatar(
                        children=[v.Img(src="https://cdn.vuetifyjs.com/images/logos/v.png")]
                    ),
                }
            ],
            children=[
                v.Avatar(size=40, children=[v.Img(src="https://cdn.vuetifyjs.com/images/john.png")])
            ],
        ),
    ],
)
