import pyvuetify as v

v.Sheet(
    elevation="2",
    children=[
        v.Tabs(
            bg_color="indigo",
            next_icon="mdi-arrow-right-bold-box-outline",
            prev_icon="mdi-arrow-left-bold-box-outline",
            show_arrows=True,
            children=[
                v.Tab(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    text="`Item ${i}`",
                ),
            ],
        ),
    ],
)
