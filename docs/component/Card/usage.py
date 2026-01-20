import ipyvuetify as v

v.Card(
    children=[
        v.CardTitle(children=["Card title"]),
        v.CardSubtitle(children=["Subtitle text"]),
        v.CardText(
            children=[
                "Greyhound divisively hello coldly wonderfully marginally far upon excluding."
            ]
        ),
        v.CardActions(
            children=[
                v.Btn(text=True, color="primary", children=["Action 1"]),
                v.Btn(text=True, color="primary", children=["Action 2"]),
            ]
        ),
    ]
)
