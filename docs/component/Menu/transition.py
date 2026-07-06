import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-space-around",
    children=[
        v.Menu(
            transition="scale-transition",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            color="primary",
                            children=["Scale Transition"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
