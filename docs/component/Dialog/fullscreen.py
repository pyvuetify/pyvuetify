from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(
    v_model=False,
    label="close dialog",
    class_="mb-4",
)

dialog = v.Dialog(
    v_model=False,
    fullscreen=True,
    # hide_hoverlay=True,
    transition="dialog-bottom-transition",
    children=[
        v.Card(
            children=[
                v.List(
                    three_line=True,
                    subheader=True,
                    children=[
                        v.Subheader(children=["User Controls"]),
                        v.ListItem(
                            children=[
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=["Content filtering"]),
                                        v.ListItemSubtitle(
                                            children=[
                                                "Set the content filtering level to restrict apps that can be downloaded"
                                            ]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                        v.ListItem(
                            children=[
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=["Password"]),
                                        v.ListItemSubtitle(
                                            children=[
                                                "Require password for purchase or use password to restrict purchase"
                                            ]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                    ],
                ),
                v.Divider(),
                v.List(
                    three_line=True,
                    subheader=True,
                    children=[
                        v.Subheader(children=["General"]),
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Checkbox(v_model=True)]),
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=["Notifications"]),
                                        v.ListItemSubtitle(
                                            children=[
                                                "Notify me about updates to apps or games that I downloaded"
                                            ]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Checkbox(v_model=False)]),
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=["Sound"]),
                                        v.ListItemSubtitle(
                                            children=[
                                                "Auto-update apps at any time. Data charges may apply"
                                            ]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Checkbox(v_model=True)]),
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=["Auto-add widgets"]),
                                        v.ListItemSubtitle(
                                            children=["Automatically add home screen widgets"]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                    ],
                ),
                v.CardActions(class_="justify-center", children=[v.Spacer(), switch, v.Spacer()]),
            ]
        )
    ],
    v_slots=[
        {
            "name": "activator",
            "variable": "dialog",
            "children": v.Btn(
                children=["Open Dialog"],
                color="primary",
                dark=True,
                v_bind="dialog.attrs",
                v_on="dialog.on",
            ),
        }
    ],
)

jslink((switch, "v_model"), (dialog, "v_model"))

v.Container(children=[dialog], class_="text-center")
