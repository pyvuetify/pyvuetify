import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.Btn(
            children=[
                "None",
                v.Overlay(
                    activator="parent",
                    location_strategy="connected",
                    scroll_strategy="none",
                    children=[
                        v.Card(
                            class_="pa-2",
                            children=["Hello!"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
