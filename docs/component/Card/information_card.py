import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="344",
    children=[
        v.CardText(
            children=[
                v.Html(
                    tag="div",
                    children=["Word of the Day"],
                ),
                v.Html(
                    tag="div",
                    class_="text-headline-large font-weight-black mb-4",
                    children=["be•nev•o•lent"],
                ),
                v.Html(
                    tag="div",
                    class_="mb-4",
                    children=["adjective"],
                ),
                v.Html(
                    tag="div",
                    class_="text-medium-emphasis",
                    children=[
                        "well meaning and kindly.",
                        '"a benevolent smile"',
                    ],
                ),
            ],
        ),
        v.CardActions(
            children=[
                v.Btn(
                    color="deep-purple-accent-4",
                    text="Learn More",
                    variant="text",
                ),
            ],
        ),
    ],
)
