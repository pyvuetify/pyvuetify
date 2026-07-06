import pyvuetify as v

v.Container(
    class_="position-relative",
    min_height="150",
    children=[
        v.Toolbar(
            color="primary",
            density="compact",
            location="top left",
            title="Application",
            absolute=True,
            floating=True,
            rounded=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(icon="mdi-menu"),
                    ],
                ),
            ],
        ),
    ],
)
