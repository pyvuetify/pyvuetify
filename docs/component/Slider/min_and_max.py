import pyvuetify as v

v.Slider(
    v_model="slider",
    # JS expression, needs manual conversion
    max="max",
    # JS expression, needs manual conversion
    min="min",
    class_="align-center",
    hide_details=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.TextField(
                    v_model="slider",
                    density="compact",
                    style_="width: 70px",
                    type="number",
                    hide_details=True,
                    single_line=True,
                ),
            ],
        ),
    ],
)
