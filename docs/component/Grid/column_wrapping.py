import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    cols=9,
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=[".col-9"])],
                ),
                v.Col(
                    cols=4,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[
                                ".col-4\nSince 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit."
                            ],
                        )
                    ],
                ),
                v.Col(
                    cols=6,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-6\nSubsequent columns continue along the new line."],
                        )
                    ],
                ),
            ],
        )
    ],
)
