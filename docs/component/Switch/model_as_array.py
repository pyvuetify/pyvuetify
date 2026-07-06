import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Html(
            tag="p",
            children=["{{ people }}"],
        ),
        v.Switch(
            v_model="people",
            color="primary",
            label="John",
            value="John",
            hide_details=True,
        ),
        v.Switch(
            v_model="people",
            color="primary",
            label="Jacob",
            value="Jacob",
            hide_details=True,
        ),
    ],
)
