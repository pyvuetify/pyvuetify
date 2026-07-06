import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.ProgressLinear(
            v_model="value",
            # JS expression, needs manual conversion
            buffer_value="bufferValue",
        ),
        v.ProgressLinear(
            v_model="value",
            # JS expression, needs manual conversion
            buffer_value="bufferValue",
            color="purple",
        ),
        v.ProgressLinear(
            v_model="value",
            # JS expression, needs manual conversion
            buffer_value="bufferValue",
            color="red-lighten-2",
        ),
        v.ProgressLinear(
            v_model="value",
            # JS expression, needs manual conversion
            buffer_value="bufferValue",
            color="black",
        ),
    ],
)
