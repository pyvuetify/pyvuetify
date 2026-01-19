import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."

v.Timeline(
    children=[
        v.TimelineItem(
            large=True,
            children=[
                v.Card(
                    class_="elevation-2",
                    children=[
                        v.CardTitle(
                            class_="text-h5",
                            children=["Lorem ipsum"],
                        ),
                        v.CardText(
                            children=[text],
                        ),
                    ],
                )
            ],
            v_slots=[
                {
                    "name": "icon",
                    "children": v.Avatar(children=[v.Img(src="https://i.pravatar.cc/64")]),
                },
                {"name": "opposite", "children": "Tus eu perfecto"},
            ],
        )
        for n in range(4)
    ],
)
