import ipyvuetify as v

v.Container(
    children=[
        v.Row(
            children=[
                v.Col(
                    cols=12,
                    md=4,
                    children=[
                        v.SkeletonLoader(
                            elevation=6, type="card-avatar, article, actions", class_="my-3"
                        ),
                        v.SkeletonLoader(elevation=6, type="date-picker", class_="my-3"),
                    ],
                ),
                v.Col(
                    cols=12,
                    md=4,
                    children=[
                        v.SkeletonLoader(elevation=6, type="article, actions", class_="my-3"),
                        v.SkeletonLoader(
                            elevation=6,
                            type="table-heading, list-item-two-line, image, table-tfoot",
                            class_="my-3",
                        ),
                    ],
                ),
                v.Col(
                    cols=12,
                    md=4,
                    children=[
                        v.SkeletonLoader(
                            elevation=6,
                            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions",
                            class_="my-3",
                        ),
                        v.SkeletonLoader(
                            elevation=6,
                            type="list-item-avatar-three-line, image, article",
                            class_="my-3",
                        ),
                    ],
                ),
            ]
        ),
    ]
)
