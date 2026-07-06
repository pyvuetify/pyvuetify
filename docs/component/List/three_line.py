import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="450",
    children=[
        v.Toolbar(
            color="cyan-lighten-1",
            children=[
                v.Btn(
                    icon="mdi-menu",
                    variant="text",
                ),
                v.ToolbarTitle(children=["Inbox"]),
                v.Btn(
                    icon="mdi-magnify",
                    variant="text",
                ),
            ],
        ),
        v.List(
            # JS expression, needs manual conversion
            items="items",
            lines="three",
            item_props=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(tag="div"),
                    ],
                ),
            ],
        ),
    ],
)
