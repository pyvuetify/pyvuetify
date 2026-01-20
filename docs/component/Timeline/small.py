import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus."
items = [
    ("purple lighten-2", "mdi-magnify"),
    ("amber lighten-1", "mdi-home-outline"),
    ("cyan lighten-1", "mdi-email-outline"),
    ("red lighten-1", "mdi-account-multiple-outline"),
    ("green lighten-1", "mdi-phone-in-talk"),
]

v.Timeline(
    children=[
        v.TimelineItem(
            color=color,
            fill_dot=True,
            right=(i % 2 == 0),
            small=(i % 2 != 0),
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            class_=f"{color} {'justify-end' if i % 2 != 0 else ''}",
                            children=[
                                v.Icon(
                                    dark=True,
                                    size=42,
                                    class_="mr-4",
                                    children=[icon],
                                )
                                if i % 2 == 0
                                else "",
                                v.Html(
                                    tag="h4",
                                    class_="white--text font-weight-light mr-4 my-0",
                                    children=[f"Title {i + 1}"],
                                ),
                                v.Icon(
                                    dark=True,
                                    size=42,
                                    children=[icon],
                                )
                                if i % 2 != 0
                                else "",
                            ],
                        ),
                        v.CardText(children=[text]),
                    ],
                )
            ],
        )
        for i, (color, icon) in enumerate(items)
    ],
)
