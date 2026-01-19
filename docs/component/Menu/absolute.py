import ipyvuetify as v

v.Menu(
    absolute=True,
    offset_y=True,
    style="max-width: 600px",
    v_slots=[
        {
            "name": "activator",
            "variable": "props",
            "children": v.Card(
                class_="portrait mx-auto my-2",
                img="https://cdn.vuetifyjs.com/images/cards/girl.jpg",
                height="300",
                width="600",
                v_bind="props.attrs",
                v_on="props.on",
            ),
        }
    ],
    children=[
        v.List(
            children=[
                v.ListItem(children=[v.ListItemTitle(children=[f"Item {i}"])]) for i in range(4)
            ]
        )
    ],
)
