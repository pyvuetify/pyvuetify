import pyvuetify as v

v.Select(
    v_model="favorites",
    # JS expression, needs manual conversion
    items="states",
    hint="Pick your favorite states",
    label="Select",
    multiple=True,
    persistent_hint=True,
)
