import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="d-flex",
            children=[
                v.Checkbox(
                    v_model="disabled",
                    label="Disabled",
                ),
            ],
        ),
        v.ExpansionPanels(
            v_model="panel",
            # JS expression, needs manual conversion
            disabled="disabled",
            multiple=True,
            children=[
                v.ExpansionPanel(
                    children=[
                        v.ExpansionPanelTitle(children=["Panel 1"]),
                        v.ExpansionPanelText(children=["Some content"]),
                    ],
                ),
                v.ExpansionPanel(
                    children=[
                        v.ExpansionPanelTitle(children=["Panel 2"]),
                        v.ExpansionPanelText(children=["Some content"]),
                    ],
                ),
                v.ExpansionPanel(
                    children=[
                        v.ExpansionPanelTitle(children=["Panel 3"]),
                        v.ExpansionPanelText(children=["Some content"]),
                    ],
                ),
            ],
        ),
    ],
)
