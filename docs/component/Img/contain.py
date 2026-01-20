import ipyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Row(
            justify="space-around",
            children=[
                v.Col(
                    cols=5,
                    children=[
                        v.Html(tag="h3", children=["Default (cover)"], class_="mb-1"),
                        v.Html(tag="h4", children=["Matching"], class_="subheading"),
                        v.Img(src="https://picsum.photos/510/300?random", aspect_ratio=1.7),
                        v.Html(tag="h4", children=["Too high"], class_="subheading pt-4"),
                        v.Img(src="https://picsum.photos/510/300?random", aspect_ratio=2),
                        v.Html(tag="h4", children=["Too low"], class_="subheading pt-4"),
                        v.Img(src="https://picsum.photos/510/300?random", aspect_ratio=1.4),
                    ],
                ),
                v.Col(
                    cols=5,
                    children=[
                        v.Html(tag="h3", children=["Contain"], class_="mb-1"),
                        v.Html(tag="h4", children=["Matching"], class_="subheading"),
                        v.Img(
                            src="https://picsum.photos/510/300?random",
                            aspect_ratio=1.7,
                            contain=True,
                        ),
                        v.Html(tag="h4", children=["Too high"], class_="subheading pt-4"),
                        v.Img(
                            src="https://picsum.photos/510/300?random", aspect_ratio=2, contain=True
                        ),
                        v.Html(tag="h4", children=["Too low"], class_="subheading pt-4"),
                        v.Img(
                            src="https://picsum.photos/510/300?random",
                            aspect_ratio=1.4,
                            contain=True,
                        ),
                    ],
                ),
            ],
        )
    ],
)
