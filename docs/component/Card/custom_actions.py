import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="344",
    children=[
        v.Img(
            height="200px",
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
            cover=True,
        ),
        v.CardTitle(children=["Top western road trips"]),
        v.CardSubtitle(children=["1,000 miles of wonder"]),
        v.CardActions(
            children=[
                v.Btn(
                    color="orange-lighten-2",
                    text="Explore",
                ),
                v.Spacer(),
                v.Btn(
                    # JS expression, needs manual conversion
                    icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'",
                ),
            ],
        ),
        v.ExpandTransition(
            children=[
                v.Html(
                    tag="div",
                    children=[
                        v.Divider(),
                        v.CardText(
                            children=[
                                (
                                    "I'm a thing. But, like most politicians, he promised more than he could "
                                    "deliver. You won't have time for sleeping, soldier, not with all the bed "
                                    "making you'll be doing. Then we'll go with that data file! Hey, you add "
                                    "a one and two zeros to that or we walk! You're going to do his laundry? "
                                    "I've got to find a way to escape."
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
