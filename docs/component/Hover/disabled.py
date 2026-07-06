import pyvuetify as v

v.Container(
    children=[
        v.Hover(
            # JS expression, needs manual conversion
            disabled="pending",
            children=[
                v.Card(
                    class_="pa-4",
                    children=[
                        "Quarterly report",
                        v.Html(
                            tag="span",
                            children=["(Generating…)"],
                        ),
                        v.Overlay(
                            # JS expression, needs manual conversion
                            model_value="isHovering",
                            class_="d-flex pa-2 justify-end align-center",
                            contained=True,
                            children=[
                                v.Btn(
                                    # JS expression, needs manual conversion
                                    color="success ? 'success' : ''",
                                    # JS expression, needs manual conversion
                                    loading="pending && !success",
                                    # JS expression, needs manual conversion
                                    text="success ? 'Done!' : 'Generate'",
                                    style_="min-width: 120px",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
