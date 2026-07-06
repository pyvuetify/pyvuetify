import pyvuetify as v

v.Select(
    v_model="model",
    # JS expression, needs manual conversion
    items="items",
    label="Read-only",
    readonly=True,
)
