import pyvuetify as v

v.Window(
    v_model="onboarding",
    direction="vertical",
    show_arrows=True,
    children=[
        v.WindowItem(
            # JS expression, needs manual conversion
            key="`card-${n}`",
            children=[
                v.Card(
                    class_="d-flex align-center justify-center ma-2",
                    elevation="1",
                    height="200",
                    children=[
                        v.Html(
                            tag="h1",
                            class_="text-display-large my-0",
                            children=["Slide {{ n }}"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
