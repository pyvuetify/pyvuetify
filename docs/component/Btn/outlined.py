import ipyvuetify as v

v.Container(
    children=[
        v.Btn(class_="ma-2", outlined=True, color="indigo", children=["Outlined Button"]),
        v.Btn(
            class_="ma-2",
            outlined=True,
            fab=True,
            color="teal",
            children=[v.Icon(children="mdi-format-list-bulleted-square")],
        ),
        v.Btn(
            class_="ma-2",
            outlined=True,
            large=True,
            fab=True,
            color="indigo",
            children=[v.Icon(children=["mdi-pencil"])],
        ),
    ]
)
