import pyvuetify as v

v.Select(
    v_model="selected",
    items=["Apple", "Orange", "Banana", "Pear"],
    # JS expression, needs manual conversion
    list_props="{ bgColor: 'purple' }",
    item_color="yellow",
    label="Label",
    multiple=True,
)
