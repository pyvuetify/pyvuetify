import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="400",
    children=[
        v.Img(
            class_="align-end text-white",
            height="200",
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            cover=True,
            children=[
                v.CardTitle(children=["Top 10 Australian beaches"]),
            ],
        ),
        v.CardSubtitle(
            class_="pt-4",
            children=["Number 10"],
        ),
        v.CardText(
            children=[
                v.Html(
                    tag="div",
                    children=["Whitehaven Beach"],
                ),
                v.Html(
                    tag="div",
                    children=["Whitsunday Island, Whitsunday Islands"],
                ),
            ],
        ),
        v.CardActions(
            children=[
                v.Btn(
                    color="orange",
                    text="Share",
                ),
                v.Btn(
                    color="orange",
                    text="Explore",
                ),
            ],
        ),
    ],
)
