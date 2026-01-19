import ipyvuetify as v

items = [
    "Wifi",
    "Bluetooth",
    "Data Usage",
    None,
    "Airplane Mode",
    "Hotspot",
]

v.Card(
    class_="mx-auto my-2",
    width=500,
    children=[
        v.List(
            shaped=True,
            children=[
                v.ListItemGroup(
                    multiple=True,
                    v_model=[4],
                    children=[
                        v.ListItem(
                            key=i,
                            value=item,
                            active_class="deep-purple--text text--accent-4",
                            children=[
                                v.ListItemContent(children=[v.ListItemTitle(children=[item])]),
                                v.ListItemAction(
                                    children=[
                                        v.Checkbox(
                                            input_value=False,
                                            true_value=True,
                                            color="deep-purple accent-4",
                                            v_bind="{ 'input-value': active }",
                                        )
                                    ]
                                ),
                            ],
                        )
                        if item
                        else v.Divider()
                        for i, item in enumerate(items)
                    ],
                )
            ],
        )
    ],
)
