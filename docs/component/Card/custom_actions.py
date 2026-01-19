import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    max_width=344,
    children=[
        v.Img(src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", height="200px"),
        v.CardTitle(children=["Top western road trips"]),
        v.CardSubtitle(children=["1,000 miles of wonder"]),
        v.CardActions(
            children=[
                v.Btn(color="orange lighten-2", text=True, children=["Explore"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-chevron-down"])]),
            ]
        ),
        v.ExpandTransition(
            children=[
                v.Divider(),
                v.CardText(
                    children=[
                        "I'm a thing. But, like most politicians, he promised more than he could deliver. "
                        "You won't have time for sleeping, soldier, not with all the bed making you'll be doing. "
                        "Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! "
                        "You're going to do his laundry? I've got to find a way to escape."
                    ]
                ),
            ]
        ),
    ],
)
