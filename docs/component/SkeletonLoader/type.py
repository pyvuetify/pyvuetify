import pyvuetify as v

v.Container(
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.SkeletonLoader(
                            class_="mx-auto border",
                            max_width="300",
                            type="card-avatar, actions",
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.SkeletonLoader(
                            class_="mx-auto border",
                            max_width="300",
                            type="image, article",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
