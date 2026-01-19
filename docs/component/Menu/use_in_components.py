import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    width=400,
    height=200,
    children=[
        v.CardTitle(
            class_="blue white--text",
            children=[
                v.Html(tag="span", class_="text-h5", children=["Menu"]),
                v.Spacer(),
                v.Menu(
                    bottom=True,
                    left=True,
                    v_slots=[
                        {
                            "name": "activator",
                            "variable": "props",
                            "children": v.Btn(
                                icon=True,
                                dark=True,
                                children=[v.Icon(children=["mdi-dots-vertical"])],
                                v_bind="props.attrs",
                                v_on="props.on",
                            ),
                        }
                    ],
                    children=[
                        v.List(
                            children=[
                                v.ListItem(children=[v.ListItemTitle(children=[f"Item {i}"])])
                                for i in range(4)
                            ]
                        )
                    ],
                ),
            ],
        ),
        v.CardText(children=["Lorem Ipsum"]),
    ],
)
