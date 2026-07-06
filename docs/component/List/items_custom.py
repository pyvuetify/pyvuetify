import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="300",
    children=[
        v.List(
            # JS expression, needs manual conversion
            items="items",
            item_title="name",
            item_value="id",
        ),
    ],
)
