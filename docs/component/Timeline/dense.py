import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
alerts = [
    ("info", "mdi-information"),
    ("success", "mdi-check-circle"),
    ("warning", "mdi-alert"),
    ("error", "mdi-close-circle"),
]

v.Card(
    class_="mx-auto my-2",
    width=600,
    children=[
        v.CardTitle(
            class_="blue-grey",
            children=[
                v.Html(tag="h4", children=["Logs"], class_="white--text ma-0"),
                v.Spacer(),
                v.Btn(
                    outlined=True,
                    color="white",
                    dark=True,
                    depressed=True,
                    children=["Realtime Logging"],
                ),
            ],
        ),
        v.CardText(
            class_="py-0",
            children=[
                v.Timeline(
                    dense=True,
                    children=[
                        v.SlideXReverseTransition(
                            group=True,
                            hide_on_leave=True,
                            children=[
                                v.TimelineItem(
                                    key=i,
                                    color=color,
                                    small=True,
                                    fill_dot=True,
                                    children=[
                                        v.Alert(
                                            value=True,
                                            color=color,
                                            icon=icon,
                                            class_="white--text",
                                            children=[text],
                                        )
                                    ],
                                )
                                for i, (color, icon) in enumerate(alerts)
                            ],
                        )
                    ],
                )
            ],
        ),
    ],
)
