import ipyvuetify as v

items = [
    {"text": "Florida", "value": "FL"},
    {"text": "Georgia", "value": "GA"},
    {"text": "Nebraska", "value": "NE"},
    {"text": "California", "value": "CA"},
    {"text": "New York", "value": "NY"},
]

v.Container(
    fluid=True,
    children=[
        v.Row(
            align="center",
            children=[
                v.Col(
                    cols=6,
                    children=[
                        v.Subheader(children=["Custom items"]),
                    ],
                ),
                v.Col(
                    cols=6,
                    children=[
                        v.Select(
                            v_model="FL",
                            hint="Select a state",
                            items=items,
                            label="Select",
                            persistent_hint=True,
                            return_object=True,
                            single_line=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
