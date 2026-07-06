import pyvuetify as v

v.Select(
    v_model="select",
    # JS expression, needs manual conversion
    hint="`${select.state}, ${select.abbr}`",
    # JS expression, needs manual conversion
    items="items",
    item_title="state",
    item_value="abbr",
    label="Select",
    persistent_hint=True,
    return_object=True,
    single_line=True,
)
