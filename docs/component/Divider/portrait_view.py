import ipyvuetify as v

v.Container(
    children=[
        v.Card(
            xlass_="mx-auto",
            max_width=600,
            children=[
                v.CardTitle(
                    class_="cyan darken-1",
                    children=[
                        v.Html(tag="span", class_="text-h5 white--text", children=["Sarah Mcbeal"]),
                        v.Spacer(),
                        v.Btn(
                            icon=True, dark=True, children=[v.Icon(children=["mdi-chevron-left"])]
                        ),
                        v.Btn(icon=True, dark=True, children=[v.Icon(children=["mdi-pencil"])]),
                        v.Btn(
                            icon=True, dark=True, children=[v.Icon(children=["mdi-dots-vertical"])]
                        ),
                    ],
                ),
                v.List(
                    children=[
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Icon(children=["mdi-phone"])]),
                                v.ListItemContent(
                                    children=[v.ListItemTitle(children=["(650) 555-1234"])]
                                ),
                                v.ListItemAction(children=[v.Icon(children=["mdi-message-text"])]),
                            ]
                        ),
                        v.Divider(inset=True, class_="mt-0"),
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Icon(children=["mdi-phone"])]),
                                v.ListItemContent(
                                    children=[v.ListItemTitle(children=["(323) 555-6789"])]
                                ),
                                v.ListItemAction(children=[v.Icon(children=["mdi-message-text"])]),
                            ]
                        ),
                        v.Divider(inset=True, class_="mt-0"),
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Icon(children=["mdi-email"])]),
                                v.ListItemContent(
                                    children=[v.ListItemTitle(children=["sarah@example.com"])]
                                ),
                                v.ListItemAction(children=[v.Icon(children=["mdi-message-text"])]),
                            ]
                        ),
                        v.Divider(inset=True, class_="mt-0"),
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Icon(children=["mdi-email"])]),
                                v.ListItemContent(
                                    children=[v.ListItemTitle(children=["Orlando, FL 79938"])]
                                ),
                            ]
                        ),
                    ]
                ),
                v.Img(src="https://picsum.photos/700?image=996", height="200px"),
            ],
        )
    ]
)
