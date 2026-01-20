import ipyvuetify as v

v.Row(
    children=[
        v.Col(
            cols=4,
            class_="d-flex child-flex",
            children=[
                v.Img(
                    src=f"https://picsum.photos/500/300?image={n * 5 + 10}",
                    lazy_src=f"https://picsum.photos/10/6?image={n * 5 + 10}",
                    aspect_ratio=1,
                    class_="grey lighten-2",
                    v_slots=[
                        {
                            "name": "placeholder",
                            "children": [
                                v.Row(
                                    class_="fill-height ma-0",
                                    align="center",
                                    justify="center",
                                    children=[
                                        v.ProgressCircular(
                                            indeterminate=True, color="grey lighten-5"
                                        )
                                    ],
                                )
                            ],
                        }
                    ],
                )
            ],
        )
        for n in range(9)
    ]
)
