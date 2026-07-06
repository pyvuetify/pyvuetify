import pyvuetify as v

v.Card(
    children=[
        v.Tabs(
            bg_color="teal-darken-3",
            slider_color="teal-lighten-3",
            show_arrows=True,
            children=[
                v.Tab(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    text="'Item ' + i",
                    # JS expression, needs manual conversion
                    value="'tab-' + i",
                ),
            ],
        ),
    ],
)
