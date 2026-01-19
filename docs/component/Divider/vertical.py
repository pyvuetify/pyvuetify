import ipyvuetify as v

v.Toolbar(
    color="purple",
    dark=True,
    children=[
        v.ToolbarTitle(children=["Title"]),
        v.Divider(class_="mx-4", vertical=True),
        v.Html(tag="span", class_="subheading", children=["My Home"]),
        v.Spacer(),
        v.ToolbarItems(
            class_="hidden-sm-and-down",
            children=[
                v.Btn(text=True, children=["News"]),
                v.Divider(vertical=True),
                v.Btn(text=True, children=["Blog"]),
                v.Divider(vertical=True),
                v.Btn(text=True, children=["Music"]),
                v.Divider(vertical=True),
            ],
        ),
        v.AppBarNavIcon(),
    ],
)
