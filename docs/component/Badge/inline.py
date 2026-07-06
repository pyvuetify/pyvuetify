import pyvuetify as v

v.List(
    class_="mx-auto",
    max_width="256",
    border=True,
    children=[
        v.ListItem(
            prepend_icon="mdi-inbox-arrow-down",
            title="Inbox",
            link=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Badge(
                            color="error",
                            content="6",
                            inline=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
