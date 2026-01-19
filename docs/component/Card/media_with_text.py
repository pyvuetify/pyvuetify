import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    max_width=400,
    children=[
        v.Img(
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            height="200px",
            class_="white--text align-end",
            children=[v.CardTitle(children=["Top 10 Australian beaches"])],
        ),
        v.CardSubtitle(class_="pb-0", children=["Number 10"]),
        v.CardText(
            class_="text--primary",
            children=[
                v.Html(tag="div", children=["Whitehaven Beach"]),
                v.Html(tag="div", children=["Whitsunday Island, Whitsunday Islands"]),
            ],
        ),
        v.CardActions(
            children=[
                v.Btn(color="orange", text=True, children=["Share"]),
                v.Btn(color="orange", text=True, children=["Explore"]),
            ]
        ),
    ],
)
