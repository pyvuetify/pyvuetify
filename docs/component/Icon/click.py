import ipyvuetify as v

v.Card(
    children=[
        v.Toolbar(
            color="pink",
            dark=True,
            dense=True,
            flat=True,
            children=[
                v.ToolbarTitle(
                    class_="text-body-2",
                    children=["Upcoming Changes"],
                ),
            ],
        ),
        v.CardText(
            children=[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                "sed do eiusmod tempor incididunt ut labore et dolore magna "
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                "Duis aute irure dolor in reprehenderit in voluptate velit "
                "esse cillum dolore eu fugiat nulla pariatur. Excepteur "
                "sint occaecat cupidatat non proident, sunt in culpa qui "
                "officia deserunt mollit anim id est laborum."
            ]
        ),
        v.CardActions(
            children=[
                v.Spacer(),
                v.Icon(
                    large=True,
                    children=["mdi-chevron-right"],
                    # on_click=lambda x: print("Icon clicked!"),
                ),
            ]
        ),
    ]
)
