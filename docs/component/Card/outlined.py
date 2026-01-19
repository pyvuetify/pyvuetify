import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    max_width=344,
    outlined=True,
    children=[
        v.ListItem(
            three_line=True,
            children=[
                v.ListItemContent(
                    children=[
                        v.Html(tag="div", class_="text-overline mb-4", children=["OVERLINE"]),
                        v.ListItemTitle(class_="text-h5 mb-1", children=["Headline 5"]),
                        v.ListItemSubtitle(
                            children=["Greyhound divisely hello coldly fonwderfully"]
                        ),
                    ]
                ),
                v.ListItemAvatar(
                    tile=True,
                    size=80,
                    color="grey",
                ),
            ],
        ),
        v.CardActions(
            children=[v.Btn(outlined=True, rounded=True, text=True, children=["Button"])]
        ),
    ],
)
