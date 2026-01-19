import ipyvuetify as v

v.Container(
    children=[
        v.Chip(
            class_="ma-2",
            close_icon="mdi-close-outline",
            close_=True,
            color="purple",
            children=["Default"],
            text_color="white",
        ),
    ]
)
