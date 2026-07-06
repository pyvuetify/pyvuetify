import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="300",
    children=[
        # JS expression, needs manual conversion
        v.List(items="items"),
    ],
)
