import pyvuetify as v

v.Switch(
    v_model="model",
    # JS expression, needs manual conversion
    label="`Switch: ${model}`",
    false_value="no",
    true_value="yes",
    hide_details=True,
)
