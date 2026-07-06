import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Row(
            children=[
                v.Col(
                    class_="d-flex flex-column align-center",
                    cols="12",
                    children=[
                        v.Html(
                            tag="code",
                            children=["{{ code }}"],
                        ),
                        v.Tooltip(
                            # JS expression, needs manual conversion
                            location="location",
                            # JS expression, needs manual conversion
                            origin="origin",
                            no_click_animation=True,
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Btn(
                                            class_="my-12",
                                            text="Hover Me",
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
