import pyvuetify as v

v.Container(
    children=[
        v.Row(
            children=[
                v.Col(
                    children=[
                        v.Html(
                            tag="h5",
                            class_="my-0",
                            children=['(default precision="0")'],
                        ),
                        v.NumberInput(
                            v_model="example1",
                            precision=0,
                            hide_details="auto",
                        ),
                        v.Html(
                            tag="code",
                            class_="d-block pt-3",
                            children=["value: {{ example1 }}"],
                        ),
                    ],
                ),
            ],
        ),
        v.Row(
            children=[
                v.Col(
                    children=[
                        v.Html(
                            tag="h5",
                            class_="my-0",
                            children=['(precision="2")'],
                        ),
                        v.NumberInput(
                            v_model="example2",
                            precision=2,
                            hide_details="auto",
                        ),
                        v.Html(
                            tag="code",
                            class_="d-block pt-3",
                            children=["value: {{ example2 }}"],
                        ),
                    ],
                ),
                v.Col(
                    children=[
                        v.Html(
                            tag="h5",
                            class_="my-0",
                            children=['(precision="5")'],
                        ),
                        v.NumberInput(
                            v_model="example3",
                            precision=5,
                            hide_details="auto",
                        ),
                        v.Html(
                            tag="code",
                            class_="d-block pt-3",
                            children=["value: {{ example3 }}"],
                        ),
                    ],
                ),
                v.Col(
                    children=[
                        v.Html(
                            tag="h5",
                            class_="my-0",
                            children=["(precision unrestricted)"],
                        ),
                        v.NumberInput(
                            v_model="example4",
                            precision=None,
                            hide_details="auto",
                        ),
                        v.Html(
                            tag="code",
                            class_="d-block pt-3",
                            children=["value: {{ example4 }}"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
