import ipyvuetify as v

v.Sheet(
    class_="mx-auto my-2",
    width=700,
    children=[
        v.Tabs(
            background_color="cyan",
            dark=True,
            next_icon="mdi-arrow-right-bold-box-outline",
            prev_icon="mdi-arrow-left-bold-box-outline",
            show_arrows=True,
            children=[v.TabsSlider(color="yellow")]
            + [v.Tab(children=[f"Item {i}"]) for i in range(1, 31)],
        )
    ],
)
