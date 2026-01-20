import ipyvuetify as v

items = [
    v.ListItem(
        dense=True,
        children=[
            v.ListItemAction(children=[v.Icon(children=["mdi-label"])]),
            v.ListItemContent(children=[f"List item {i}"]),
        ],
    )
    for i in range(1, 4)
]

v.Col(
    cols=12,
    sm=6,
    offset_sm=3,
    children=[
        v.Card(
            children=[
                v.Subheader(inset=True, children=["Subheader"]),
                v.List(
                    dense=True,
                    children=[
                        items[0],
                        v.Divider(inset=True),
                        items[1],
                        v.Divider(inset=True),
                        items[2],
                    ],
                ),
            ]
        )
    ],
)
