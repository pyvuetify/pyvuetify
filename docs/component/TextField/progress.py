import ipyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.TextField(
            v_model="value",
            color="cyan darken",
            label="Text field",
            placeholder="Start typing...",
            loading=True,
            v_slots=[
                {
                    "name": "progress",
                    "children": v.ProgressLinear(
                        color="red lighten-2",
                        absolute=True,
                        height=7,
                        indeterminate=True,
                    ),
                }
            ],
        )
    ],
)
