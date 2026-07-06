import pyvuetify as v

v.Card(
    children=[
        v.CardText(
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex pa-4",
                    children=[
                        v.CheckboxBtn(
                            v_model="includeFiles",
                            class_="pe-2",
                        ),
                        v.TextField(
                            label="Include files",
                            hide_details=True,
                        ),
                    ],
                ),
                v.Html(
                    tag="div",
                    class_="d-flex pa-4",
                    children=[
                        v.CheckboxBtn(
                            v_model="enabled",
                            class_="pe-2",
                        ),
                        v.TextField(
                            # JS expression, needs manual conversion
                            disabled="!enabled",
                            label="I only work if you check the box",
                            hide_details=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
