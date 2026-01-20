import ipyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="4",
                    children=[v.Subheader(children=["Prefix for dollar currency"])],
                ),
                v.Col(
                    cols="8",
                    children=[
                        v.TextField(
                            label="Amount",
                            value="10.00",
                            prefix="$",
                        )
                    ],
                ),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols="4",
                    children=[v.Subheader(children=["Suffix for weight"])],
                ),
                v.Col(
                    cols="8",
                    children=[
                        v.TextField(
                            label="Weight",
                            value="28.00",
                            suffix="lbs",
                        )
                    ],
                ),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols="4",
                    children=[v.Subheader(children=["Suffix for email domain"])],
                ),
                v.Col(
                    cols="8",
                    children=[
                        v.TextField(
                            label="Email address",
                            value="example",
                            suffix="@gmail.com",
                        )
                    ],
                ),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols="4",
                    children=[v.Subheader(children=["Suffix for time zone"])],
                ),
                v.Col(
                    cols="8",
                    children=[
                        v.TextField(
                            label="Label Text",
                            value="12:30:00",
                            type="time",
                            suffix="PST",
                        )
                    ],
                ),
            ]
        ),
    ],
)
