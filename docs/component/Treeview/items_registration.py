import pyvuetify as v

v.Sheet(
    class_="overflow-y-auto",
    max_height="300",
    children=[
        v.Treeview(
            # JS expression, needs manual conversion
            items="items",
            items_registration="props",
            open_on_click=True,
        ),
    ],
)
