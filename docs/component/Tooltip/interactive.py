import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.Tooltip(
            interactive=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.IconBtn(icon="mdi-information-outline"),
                    ],
                ),
            ],
        ),
    ],
)
