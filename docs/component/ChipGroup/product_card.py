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
                    children=["Shirt Blouse"],
                ),
                v.Spacer(),
                v.Html(
                    tag="span",
                    class_="text-title-large",
                    children=["$44.50"],
                ),
            ],
        ),
        v.CardText(
            children=[
                (
                    "Our blouses are available in 8 colors. You can custom order a built-in arch "
                    "support for any of the models."
                ),
            ],
        ),
        v.Divider(class_="mx-4"),
        v.CardText(
            children=[
                v.Html(
                    tag="span",
                    class_="subheading",
                    children=["Select size"],
                ),
                v.ChipGroup(
                    v_model="selection",
                    selected_class="v-chip--selected v-chip--variant-tonal text-deep-purple-accent-4",
                    variant="outlined",
                    mandatory=True,
                    children=[
                        v.Chip(
                            # JS expression, needs manual conversion
                            key="size",
                            # JS expression, needs manual conversion
                            text="size",
                            # JS expression, needs manual conversion
                            value="size",
                        ),
                    ],
                ),
            ],
        ),
        v.CardActions(
            children=[
                v.Btn(
                    color="deep-purple-accent-4",
                    text="Add to Cart",
                    variant="flat",
                    block=True,
                ),
            ],
        ),
    ],
)
