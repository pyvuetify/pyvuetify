import ipyvuetify as v

bristle_types = ["Extra Soft", "Soft", "Medium", "Hard"]

v.Card(
    class_="mx-auto my-2",
    max_width="400",
    children=[
        v.CardTitle(
            children=[
                v.Html(tag="h2", children=["Toothbrush"]),
                v.Spacer(),
                v.Html(tag="h3", children=["$4.99"]),
            ]
        ),
        v.CardText(
            children=[
                "Our company takes pride in making handmade brushes. Our toothbrushes are available in 4 different bristel types, from extra soft to hard."
            ]
        ),
        v.Divider(class_="mx-4"),
        v.CardText(
            children=[
                v.Html(tag="span", class_="subheading", children=["Select type"]),
                v.ChipGroup(
                    v_model=0,
                    active_class="deep-purple--text text--accent-4",
                    mandatory=True,
                    children=[v.Chip(children=[bristle]) for bristle in bristle_types],
                ),
            ]
        ),
        v.CardActions(
            children=[
                v.Btn(
                    block=True,
                    class_="white--text",
                    color="deep-purple accent-4",
                    children=["Add to Cart"],
                )
            ]
        ),
    ],
)
