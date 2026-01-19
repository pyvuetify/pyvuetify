import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
years = [
    ("cyan", "1960"),
    ("green", "1970"),
    ("pink", "1980"),
    ("amber", "1990"),
    ("orange", "2000"),
]

v.Timeline(
    children=[
        v.TimelineItem(
            color=color,
            small=True,
            children=[
                v.Html(
                    tag="div",
                    class_="py-4",
                    children=[
                        v.Html(
                            tag="h2",
                            class_=f"headline font-weight-light mb-4 {color}--text",
                            children=["Lorem ipsum"],
                        ),
                        v.Html(
                            tag="div",
                            children=[text],
                        ),
                    ],
                )
            ],
            v_slots=[
                {
                    "name": "opposite",
                    "children": v.Html(
                        tag="span",
                        class_=f"headline font-weight-bold {color}--text",
                        children=[year],
                    ),
                }
            ],
        )
        for color, year in years
    ],
)
