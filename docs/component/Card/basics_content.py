import pyvuetify as v

v.Row(
    children=[
        v.Col(
            cols="12",
            md="4",
            children=[
                v.Card(
                    subtitle="This is a card subtitle",
                    text=(
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione "
                        "debitis quis est labore voluptatibus!"
                    ),
                    title="This is a title",
                ),
                v.Html(
                    tag="div",
                    class_="text-center text-body-small",
                    children=["Using Props Only"],
                ),
            ],
        ),
        v.Col(
            cols="12",
            md="4",
            children=[
                v.Card(
                    children=[
                        v.Html(
                            tag="template",
                            children=["This is a title"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
