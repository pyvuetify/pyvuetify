import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    max_width=700,
    children=[
        v.Tabs(
            show_arrows=True,
            background_color="teal darken-3",
            dark=True,
            children=[v.Tab(children=[f"Item {i}"]) for i in range(1, 31)],
        )
    ],
)
