import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="4",
                    children=[
                        v.ListSubheader(children=["Prefix for dollar currency"]),
                    ],
                ),
                v.Col(
                    cols="8",
                    children=[
                        v.TextField(
                            label="Amount",
                            model_value="10.00",
                            prefix="$",
                        ),
                    ],
                ),
            ],
        ),
        v.Row(
            children=[
                v.Col(
                    cols="4",
                    children=[
                        v.ListSubheader(children=["Suffix for weight"]),
                    ],
                ),
                v.Col(
                    cols="8",
                    children=[
                        v.TextField(
                            label="Weight",
                            model_value="28.00",
                            suffix="lbs",
                        ),
                    ],
                ),
            ],
        ),
        v.Row(
            children=[
                v.Col(
                    cols="4",
                    children=[
                        v.ListSubheader(children=["Suffix for email domain"]),
                    ],
                ),
                v.Col(
                    cols="8",
                    children=[
                        v.TextField(
                            label="Email address",
                            model_value="example",
                            suffix="@gmail.com",
                        ),
                    ],
                ),
            ],
        ),
        v.Row(
            children=[
                v.Col(
                    cols="4",
                    children=[
                        v.ListSubheader(children=["Suffix for time zone"]),
                    ],
                ),
                v.Col(
                    cols="8",
                    children=[
                        v.TextField(
                            label="Label Text",
                            model_value="12:30:00",
                            suffix="PST",
                            type="time",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
