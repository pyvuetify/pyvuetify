import ipyvuetify as v

people = [
    {"name": "Sandra Adams", "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg"},
    {"name": "Britta Holt", "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg"},
]

v.Card(
    color="blue-grey darken-1",
    dark=True,
    children=[
        v.Img(
            height=200,
            src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg",
            children=[
                v.Row(
                    children=[
                        v.Col(
                            class_="text-right",
                            cols=12,
                            children=[
                                v.Menu(
                                    bottom=True,
                                    left=True,
                                    transition="slide-y-transition",
                                    v_slots=[
                                        {
                                            "name": "activator",
                                            "variable": "menuProps",
                                            "children": v.Btn(
                                                icon=True,
                                                v_on="menuProps.on",
                                                children=[v.Icon(children=["mdi-dots-vertical"])],
                                            ),
                                        }
                                    ],
                                    children=[
                                        v.List(
                                            children=[
                                                v.ListItem(
                                                    children=[
                                                        v.ListItemAction(
                                                            children=[v.Icon(children=["mdi-cogs"])]
                                                        ),
                                                        v.ListItemContent(
                                                            children=[
                                                                v.ListItemTitle(children=["Update"])
                                                            ]
                                                        ),
                                                    ]
                                                ),
                                            ]
                                        )
                                    ],
                                )
                            ],
                        ),
                        v.Row(
                            class_="ma-auto",
                            align="center",
                            justify="center",
                            children=[
                                v.Col(
                                    class_="text-center",
                                    children=[
                                        v.Html(
                                            tag="h3",
                                            class_="mb-1 text-white",
                                            children=["Midnight Crew"],
                                        ),
                                        v.Html(
                                            tag="span",
                                            class_="mt-1 grey--text text--lighten-1",
                                            children=["The summer breeze"],
                                        ),
                                    ],
                                )
                            ],
                        ),
                    ]
                )
            ],
        ),
        v.Form(
            children=[
                v.Container(
                    children=[
                        v.Row(
                            children=[
                                v.Col(
                                    cols=12,
                                    md=6,
                                    children=[
                                        v.TextField(
                                            v_model="Midnight Crew",
                                            filled=True,
                                            color="blue-grey lighten-2",
                                            label="Name",
                                        )
                                    ],
                                ),
                                v.Col(
                                    cols=12,
                                    md=6,
                                    children=[
                                        v.TextField(
                                            v_model="The summer breeze",
                                            filled=True,
                                            color="blue-grey lighten-2",
                                            label="Title",
                                        )
                                    ],
                                ),
                                v.Col(
                                    cols=12,
                                    children=[
                                        v.Autocomplete(
                                            v_model=["Sandra Adams", "Britta Holt"],
                                            items=people,
                                            filled=True,
                                            chips=True,
                                            color="blue-grey lighten-2",
                                            label="Select",
                                            item_text="name",
                                            item_value="name",
                                            multiple=True,
                                        )
                                    ],
                                ),
                            ]
                        )
                    ]
                )
            ]
        ),
    ],
)
