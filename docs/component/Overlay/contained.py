import pyvuetify as v

v.Row(
    class_="ma-4 align-center justify-center",
    children=[
        v.Card(
            height="300",
            width="250",
            children=[
                v.Row(
                    class_="justify-center",
                    children=[
                        v.Btn(
                            class_="mt-12",
                            color="success",
                            children=["Show Overlay"],
                        ),
                        v.Overlay(
                            v_model="overlay",
                            class_="align-center justify-center",
                            contained=True,
                            children=[
                                v.Btn(
                                    color="success",
                                    children=["Hide Overlay"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
