import ipyvuetify as v

v.Container(
    children=[
        v.Combobox(
            v_model=[],
            items=["Item 1", "Item 2", "Item 3"],
            label="Combobox",
            multiple=True,
            outlined=True,
            dense=True,
        )
    ]
)
