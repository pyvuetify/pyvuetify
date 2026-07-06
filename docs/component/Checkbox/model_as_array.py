import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Html(
            tag="p",
            children=["{{ selected }}"],
        ),
        v.Checkbox(
            v_model="selected",
            label="John",
            value="John",
        ),
        v.Checkbox(
            v_model="selected",
            label="Jacob",
            value="Jacob",
        ),
    ],
)
