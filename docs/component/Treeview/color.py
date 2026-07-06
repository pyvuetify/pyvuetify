import pyvuetify as v

v.Treeview(
    # JS expression, needs manual conversion
    items="items",
    color="warning",
    item_value="id",
    activatable=True,
)
