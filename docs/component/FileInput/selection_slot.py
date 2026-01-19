import ipyvuetify as v

v.FileInput(
    v_model=None,
    label="File input",
    multiple=True,
    placeholder="Upload your documents",
    prepend_icon="mdi-paperclip",
    v_slots=[
        {
            "name": "selection",
            "variable": "selection",
            "children": v.Chip(
                children=["selection.text"],
                small=True,
                label=True,
                color="primary",
            ),
        }
    ],
)
