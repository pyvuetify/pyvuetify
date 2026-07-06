import pyvuetify as v

v.Container(
    children=[
        v.FileUpload(
            # JS expression, needs manual conversion
            disabled="disabled",
            # JS expression, needs manual conversion
            loading="loading",
        ),
        v.Switch(
            v_model="loading",
            label="Loading",
        ),
    ],
)
