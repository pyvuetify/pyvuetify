import ipyvuetify as v

items = ["Foo", "Bar", "Fizz", "Buzz"]

v.Container(
    fluid=True,
    children=[
        v.Row(
            align="center",
            children=[
                v.Col(
                    cols=6,
                    children=[
                        v.Subheader(children=["Prepended icon"]),
                    ],
                ),
                v.Col(
                    cols=6,
                    children=[
                        v.Select(
                            v_model="Foo",
                            items=items,
                            menu_props="auto",
                            label="Select",
                            hide_details=True,
                            prepend_icon="mdi-map",
                            single_line=True,
                        ),
                    ],
                ),
                v.Col(
                    cols=6,
                    children=[
                        v.Subheader(children=["Appended icon"]),
                    ],
                ),
                v.Col(
                    cols=6,
                    children=[
                        v.Select(
                            v_model="Bar",
                            items=items,
                            append_outer_icon="mdi-map",
                            menu_props="auto",
                            hide_details=True,
                            label="Select",
                            single_line=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
