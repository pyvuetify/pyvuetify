import pyvuetify as v

v.Card(
    class_="overflow-auto mx-auto",
    max_height="300",
    width="448",
    children=[
        v.Toolbar(
            color="primary",
            children=[
                v.ToolbarTitle(children=["My Document"]),
                v.Html(
                    tag="template",
                    children=[
                        v.Switch(
                            v_model="sticky",
                            color="secondary",
                            label="Sticky Banner",
                            hide_details=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
