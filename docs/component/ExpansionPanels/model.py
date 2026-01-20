from ipywidgets import jslink

import ipyvuetify as v

select = v.Select(
    label="Select panels",
    v_model=[],
    items=[{"text": f"Panel {i+1}", "value": i} for i in range(5)],
    multiple=True,
    readonly=True,
    chips=True,
)

panels = v.ExpansionPanels(
    v_model=[],
    inset=True,
    multiple=True,
    children=[
        v.ExpansionPanel(
            children=[
                v.ExpansionPanelHeader(children=["Item"]),
                v.ExpansionPanelContent(
                    children=[
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    ]
                ),
            ]
        )
        for i in range(5)
    ],
)

jslink((select, "v_model"), (panels, "v_model"))

v.Card(class_="pa-2", children=[select, panels])
