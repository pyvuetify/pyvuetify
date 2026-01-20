from ipywidgets import jslink

import ipyvuetify as v

checkbox = v.Checkbox(label="Disabled", v_model=False)

panels = v.ExpansionPanels(
    disabled=False,
    children=[
        v.ExpansionPanel(
            children=[
                v.ExpansionPanelHeader(children=[f"Panel {i+1}"]),
                v.ExpansionPanelContent(children=["Some content"]),
            ]
        )
        for i in range(3)
    ],
)

jslink((checkbox, "v_model"), (panels, "disabled"))

v.Container(children=[v.Row(children=[checkbox]), panels])
