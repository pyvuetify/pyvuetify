import ipyvuetify as v

sizes = ["04", "06", "08", "10", "12", "14"]

v.Card(
    class_="mx-auto my-2",
    max_width="400",
    children=[
        v.CardTitle(
            children=[
                v.Html(tag="h2", children=["Shirt Blouse"]),
                v.Spacer(),
                v.Html(tag="h3", children=["$44.50"]),
            ]
        ),
        v.CardText(
            children=[
                "Our blouses are available in 8 colors. You can custom order a built-in arch support for any of the models."
            ]
        ),
        v.Divider(class_="mx-4"),
        v.CardText(
            children=[
                v.Html(tag="span", class_="subheading", children=["Select size"]),
                v.ChipGroup(
                    v_model=2,
                    active_class="deep-purple--text text--accent-4",
                    mandatory=True,
                    children=[v.Chip(children=[size]) for size in sizes],
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
