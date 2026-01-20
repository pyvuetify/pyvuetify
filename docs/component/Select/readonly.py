import ipyvuetify as v

items = ["Foo", "Bar", "Fizz", "Buzz"]

v.Row(
    align="center",
    children=[
        v.Col(
            cols=12,
            children=[
                v.Select(
                    items=items,
                    readonly=True,
                    label="Read-only",
                ),
            ],
        ),
    ],
)
