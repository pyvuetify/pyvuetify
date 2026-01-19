import ipyvuetify as v

dialog = v.Dialog(
    v_model=False,
    width=500,
    children=[
        v.Card(
            children=[
                v.CardTitle(
                    children=["Privacy Policy"],
                    class_="text-h5 grey lighten-2",
                ),
                v.CardText(
                    children=[
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
                        "sed do eiusmod tempor incididunt ut labore et dolore magna ",
                        "aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                        "ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                        "Duis aute irure dolor in reprehenderit in voluptate velit "
                        "esse cillum dolore eu fugiat nulla pariatur. Excepteur "
                        "sint occaecat cupidatat non proident, sunt in culpa qui "
                        "officia deserunt mollit anim id est laborum.",
                    ]
                ),
                v.Divider(),
                v.CardActions(
                    children=[
                        v.Spacer(),
                        v.Btn(
                            children=["I accept"],
                            color="primary",
                        ),
                    ]
                ),
            ]
        )
    ],
    v_slots=[
        {
            "name": "activator",
            "variable": "dialog",
            "children": v.Btn(
                children=["Click me"],
                color="red lighten-2",
                dark=True,
                v_bind="dialog.attrs",
                v_on="dialog.on",
            ),
        }
    ],
)

v.Container(children=[dialog], class_="text-center")
