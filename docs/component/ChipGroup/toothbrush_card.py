import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="400",
    children=[
        v.CardTitle(
            class_="d-flex",
            children=[
                v.Html(
                    tag="h2",
                    class_="text-headline-large my-0",
                    children=["Toothbrush"],
                ),
                v.Spacer(),
                v.Html(
                    tag="span",
                    class_="text-title-large",
                    children=["$4.99"],
                ),
            ],
        ),
        v.CardText(
            children=[
                (
                    "Our company takes pride in making handmade brushes. Our toothbrushes are "
                    "available in 4 different bristel types, from extra soft to hard."
                ),
            ],
        ),
        v.Divider(class_="mx-4"),
        v.CardText(
            children=[
                v.Html(
                    tag="span",
                    class_="subheading",
                    children=["Select type"],
                ),
                v.ChipGroup(
                    v_model="selection",
                    selected_class="v-chip--selected v-chip--variant-flat",
                    variant="outlined",
                    mandatory=True,
                    children=[
                        v.Chip(text="Extra Soft"),
                        v.Chip(text="Soft"),
                        v.Chip(text="Medium"),
                        v.Chip(text="Hard"),
                    ],
                ),
            ],
        ),
        v.CardActions(
            children=[
                v.Btn(
                    color="secondary",
                    text="Add to Cart",
                    variant="flat",
                    block=True,
                ),
            ],
        ),
    ],
)
