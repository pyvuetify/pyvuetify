import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    color="#26c6da",
    dark=True,
    max_width=400,
    children=[
        v.CardTitle(
            children=[
                v.Icon(large=True, left=True, children=["mdi-twitter"]),
                v.Html(tag="span", class_="text-h6 font-weight-light", children=["Twitter"]),
            ]
        ),
        v.CardText(
            class_="text-h5 font-weight-bold",
            children=[
                '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."'
            ],
        ),
        v.CardActions(
            children=[
                v.ListItem(
                    class_="flex-grow",
                    children=[
                        v.ListItemAvatar(
                            color="grey darken-3",
                            children=[
                                v.Img(
                                    class_="elevation-6",
                                    alt="",
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
                                )
                            ],
                        ),
                        v.ListItemContent(children=[v.ListItemTitle(children=["Evan You"])]),
                        v.Container(
                            class_="flex",
                            children=[
                                v.Icon(class_="mr-1", children=["mdi-heart"]),
                                v.Html(tag="span", class_="subheading mr-2", children=["256"]),
                                v.Html(tag="span", class_="mr-1", children=["·"]),
                                v.Icon(class_="mr-1", children=["mdi-share-variant"]),
                                v.Html(tag="span", class_="subheading", children=["45"]),
                            ],
                        ),
                    ],
                )
            ]
        ),
    ],
)
