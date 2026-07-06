import pyvuetify as v

v.Card(
    class_="mx-auto my-8",
    elevation="4",
    max_width="344",
    children=[
        v.CardItem(
            children=[
                v.CardTitle(children=["Card title"]),
                v.CardSubtitle(children=["Card subtitle secondary text"]),
            ],
        ),
        v.CardText(
            children=[
                (
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    " ut labore et dolore magna aliqua."
                ),
            ],
        ),
    ],
)
