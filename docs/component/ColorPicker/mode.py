import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-space-around",
    children=[
        v.ColorPicker(
            v_model="color",
            modes=["rgba"],
        ),
        v.Html(
            tag="div",
            class_="d-flex flex-column",
            children=[
                v.ColorPicker(
                    v_model="color",
                    v_model_mode="mode",
                ),
                v.Select(
                    v_model="mode",
                    # JS expression, needs manual conversion
                    items="modes",
                    style_="max-width: 300px",
                ),
            ],
        ),
    ],
)
