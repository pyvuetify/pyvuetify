import pyvuetify as v

v.Timeline(
    children=[
        v.TimelineItem(
            dot_color="purple-lighten-2",
            fill_dot=True,
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            class_="bg-purple-lighten-2",
                            children=[
                                v.Icon(
                                    class_="me-4",
                                    icon="mdi-magnify",
                                    size="large",
                                ),
                                v.Html(
                                    tag="h2",
                                    class_="font-weight-light my-0",
                                    children=["Title 1"],
                                ),
                            ],
                        ),
                        v.CardText(
                            children=[
                                (
                                    "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola "
                                    "imperdiet nec ut, sed euismod convenire principes at. Est et nobis "
                                    "iisque percipit."
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.TimelineItem(
            dot_color="amber-lighten-1",
            size="x-small",
            fill_dot=True,
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            class_="bg-amber-lighten-1 justify-end",
                            children=[
                                v.Html(
                                    tag="h2",
                                    class_="mt-0 me-4 font-weight-light",
                                    children=["Title 2"],
                                ),
                                v.Icon(
                                    icon="mdi-home-outline",
                                    size="large",
                                ),
                            ],
                        ),
                        v.CardText(
                            children=[
                                (
                                    "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola "
                                    "imperdiet nec ut, sed euismod convenire principes at. Est et nobis "
                                    "iisque percipit."
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.TimelineItem(
            dot_color="cyan-lighten-1",
            fill_dot=True,
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            class_="bg-cyan-lighten-1",
                            children=[
                                v.Icon(
                                    class_="me-4",
                                    icon="mdi-email-outline",
                                    size="large",
                                ),
                                v.Html(
                                    tag="h2",
                                    class_="font-weight-light my-0",
                                    children=["Title 3"],
                                ),
                            ],
                        ),
                        v.CardText(
                            children=[
                                (
                                    "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola "
                                    "imperdiet nec ut, sed euismod convenire principes at. Est et nobis "
                                    "iisque percipit."
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.TimelineItem(
            dot_color="red-lighten-1",
            size="x-small",
            fill_dot=True,
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            class_="bg-red-lighten-1 justify-end",
                            children=[
                                v.Html(
                                    tag="h2",
                                    class_="mt-0 me-4 font-weight-light",
                                    children=["Title 4"],
                                ),
                                v.Icon(
                                    icon="mdi-account-multiple-outline",
                                    size="large",
                                ),
                            ],
                        ),
                        v.CardText(
                            children=[
                                (
                                    "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola "
                                    "imperdiet nec ut, sed euismod convenire principes at. Est et nobis "
                                    "iisque percipit."
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.TimelineItem(
            dot_color="green-lighten-1",
            fill_dot=True,
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            class_="bg-green-lighten-1",
                            children=[
                                v.Icon(
                                    class_="me-4",
                                    icon="mdi-phone-in-talk",
                                    size="large",
                                ),
                                v.Html(
                                    tag="h2",
                                    class_="font-weight-light my-0",
                                    children=["Title 5"],
                                ),
                            ],
                        ),
                        v.CardText(
                            children=[
                                (
                                    "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola"
                                    " imperdiet nec ut, sed euismod convenire principes at. Est et nobis"
                                    " iisque percipit.",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
