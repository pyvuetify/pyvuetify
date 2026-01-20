import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."

items = [
    ("red lighten-2", "mdi-star"),
    ("purple darken-1", "mdi-book-variant"),
    ("green lighten-1", "mdi-airballoon"),
    ("indigo", "mdi-buffer"),
]

v.Timeline(
    align_top=True,
    children=[
        v.TimelineItem(
            color=color,
            icon=icon,
            fill_dot=True,
            children=[
                v.Card(
                    color=color,
                    dark=True,
                    children=[
                        v.CardTitle(
                            class_="text-h6",
                            children=["Lorem Ipsum Dolor"],
                        ),
                        v.CardText(
                            class_="white text--primary",
                            children=[
                                v.Html(tag="p", children=[text]),
                                v.Btn(
                                    color=color,
                                    class_="mx-0",
                                    outlined=True,
                                    children=["Button"],
                                ),
                            ],
                        ),
                    ],
                )
            ],
        )
        for color, icon in items
    ],
)
