import ipyvuetify as v

states = [
    {"name": "Florida", "abbr": "FL", "id": 1},
    {"name": "Georgia", "abbr": "GA", "id": 2},
    {"name": "Nebraska", "abbr": "NE", "id": 3},
    {"name": "California", "abbr": "CA", "id": 4},
    {"name": "New York", "abbr": "NY", "id": 5},
]

v.Card(
    class_="overflow-hidden",
    color="purple lighten-1",
    dark=True,
    children=[
        v.Toolbar(
            flat=True,
            color="purple",
            children=[
                v.Icon(children=["mdi-account"]),
                v.ToolbarTitle(class_="font-weight-light", children=["User Profile"]),
                v.Spacer(),
            ],
        ),
        v.CardText(
            children=[
                v.TextField(
                    color="white",
                    label="Name",
                ),
                v.Autocomplete(
                    items=states,
                    item_text="name",
                    color="white",
                    label="State",
                    no_filter=True,
                ),
            ]
        ),
        v.Divider(),
        v.CardActions(
            children=[
                v.Spacer(),
                v.Btn(color="success", children=["Save"]),
            ]
        ),
    ],
)
