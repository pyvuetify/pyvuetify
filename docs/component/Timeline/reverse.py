from ipywidgets import jslink

import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."

reverse = v.Switch(label="Toggle reverse", v_model=True)
timeline = v.Timeline(
    reverse=True,
    children=[
        v.TimelineItem(
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
            slots={"opposite": "Tus eu perfecto"},
        )
        for n in range(2)
    ],
)
timeline2 = v.Timeline(
    reverse=True,
    dense=True,
    children=[
        v.TimelineItem(
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
            slots={"opposite": "Tus eu perfecto"},
        )
        for n in range(2)
    ],
)

jslink((reverse, "v_model"), (timeline, "reverse"))
jslink((reverse, "v_model"), (timeline2, "reverse"))

v.Container(
    children=[
        reverse,
        timeline,
        timeline2,
    ]
)
