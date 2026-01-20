import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    min_width=500,
    children=[
        v.CardText(
            children=[
                v.Html(tag="div", children=["Word of the Day"]),
                v.Html(tag="h3", class_="text--primary my-2", children=["be•nev•o•lent"]),
                v.Html(tag="p", children=["adjective"]),
                v.Html(
                    tag="div",
                    class_="text--primary",
                    children=["well meaning and kindly.", v.Html(tag="br"), '"a benevolent smile"'],
                ),
            ]
        ),
        v.CardActions(
            children=[v.Btn(text=True, color="deep-purple accent-4", children=["Learn More"])]
        ),
    ],
)
