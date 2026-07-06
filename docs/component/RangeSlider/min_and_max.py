import pyvuetify as v

v.RangeSlider(
    v_model="range",
    max=10,
    min=-10,
    step=1,
    class_="align-center",
    hide_details=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.TextField(
                    v_model="range[0]",
                    density="compact",
                    style_="width: 70px",
                    type="number",
                    variant="outlined",
                    hide_details=True,
                    single_line=True,
                ),
            ],
        ),
    ],
)
