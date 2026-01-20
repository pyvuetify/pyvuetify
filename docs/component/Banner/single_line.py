import ipyvuetify as v

switch = v.Switch(v_model=False, label="Sticky Banner", hide_details=True)

banner = v.Banner(
    single_line=True,
    sticky=False,
    v_slots=[
        {
            "name": "actions",
            "children": v.Btn(text=True, color="deep-purple accent-4", children=["Get Online"]),
        }
    ],
    children=["We can't save your edits while you are in offline mode."],
)


def update_sticky(widget, event, data):
    banner.sticky = data


switch.on_event("change", update_sticky)

v.Card(
    children=[
        v.SystemBar(),
        v.Toolbar(
            flat=True,
            children=[
                v.ToolbarTitle(children=["My Document"]),
                v.Spacer(),
                v.Html(tag="div", children=[switch]),
            ],
        ),
        banner,
        v.CardText(
            class_="grey lighten-4", children=[v.Sheet(max_width=800, height=500, class_="mx-auto")]
        ),
    ]
)
