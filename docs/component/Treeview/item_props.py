import pyvuetify as v

v.Treeview(
    # JS expression, needs manual conversion
    items="items",
    item_value="id",
    item_props=True,
    selectable=True,
)
