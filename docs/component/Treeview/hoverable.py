import pyvuetify as v

v.Treeview(
    # JS expression, needs manual conversion
    items="items",
    item_title="name",
    item_value="id",
    hoverable=True,
)
