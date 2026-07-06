import pyvuetify as v

v.Select(
    v_model="value",
    # JS expression, needs manual conversion
    items="items",
    label="Chips",
    chips=True,
    multiple=True,
)
