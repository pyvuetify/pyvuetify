import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="d-flex",
            children=[
                v.Checkbox(
                    v_model="readonly",
                    label="Readonly",
                ),
            ],
        ),
        v.ExpansionPanels(
            v_model="panel",
            # JS expression, needs manual conversion
            readonly="readonly",
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
