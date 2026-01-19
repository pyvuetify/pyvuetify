import ipyvuetify as v

v.Container(
    children=[
        v.Row(
            justify="space-around",
            children=[
                v.Card(
                    width=400,
                    children=[
                        v.Img(
                            height="200px",
                            src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",
                            children=[
                                v.AppBar(
                                    flat=True,
                                    color="rgba(0, 0, 0, 0)",
                                    children=[
                                        v.AppBarNavIcon(color="white"),
                                        v.ToolbarTitle(
                                            class_="text-h6 white--text pl-0", children=["Messages"]
                                        ),
                                        v.Spacer(),
                                        v.Btn(
                                            color="white",
                                            icon=True,
                                            children=[v.Icon(children=["mdi-dots-vertical"])],
                                        ),
                                    ],
                                )
                            ],
                        ),
                        v.CardText(
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="font-weight-bold ml-8 mb-2",
                                    children=["Today"],
                                ),
                                v.Timeline(
                                    align_top=True,
                                    dense=True,
                                    children=[
                                        v.TimelineItem(
                                            color=message["color"],
                                            small=True,
                                            children=[
                                                v.Html(
                                                    tag="div",
                                                    children=[
                                                        v.Html(
                                                            tag="div",
                                                            class_="font-weight-normal",
                                                            children=[
                                                                v.Html(
                                                                    tag="strong",
                                                                    children=[message["from"]],
                                                                ),
                                                                f" @{message['time']}",
                                                            ],
                                                        ),
                                                        v.Html(
                                                            tag="div", children=[message["message"]]
                                                        ),
                                                    ],
                                                )
                                            ],
                                        )
                                        for message in [
                                            {
                                                "from": "You",
                                                "message": "Sure, I'll see you later.",
                                                "time": "10:42am",
                                                "color": "deep-purple lighten-1",
                                            },
                                            {
                                                "from": "John Doe",
                                                "message": "Yeah, sure. Does 1:00pm work?",
                                                "time": "10:37am",
                                                "color": "green",
                                            },
                                            {
                                                "from": "You",
                                                "message": "Did you still want to grab lunch today?",
                                                "time": "9:47am",
                                                "color": "deep-purple lighten-1",
                                            },
                                        ]
                                    ],
                                ),
                            ]
                        ),
                    ],
                )
            ],
        )
    ]
)
