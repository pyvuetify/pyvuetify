import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    max_width=374,
    loading=True,
    children=[
        v.Img(height="250", src="https://cdn.vuetifyjs.com/images/cards/cooking.png"),
        v.CardTitle(children=["Cafe Badilico"]),
        v.CardText(
            children=[
                v.Container(
                    class_="pa-0 flex",
                    children=[
                        v.Rating(
                            value=4.5,
                            color="amber",
                            dense=True,
                            half_increments=True,
                            readonly=True,
                            size=14,
                            class_="d-inline-flex",
                        ),
                        v.Html(
                            tag="div",
                            class_="grey--text mb-2 d-inline-flex",
                            children=["4.5 (413)"],
                        ),
                    ],
                ),
                v.Html(tag="div", children=["$ • Italian, Cafe"], class_="my-2 text-subtitle-1"),
                v.Html(
                    tag="div",
                    children=[
                        "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating."
                    ],
                ),
            ]
        ),
        v.Divider(class_="mx-4"),
        v.CardTitle(children=["Tonight's availability"]),
        v.CardText(
            children=[
                v.ChipGroup(
                    v_model="selection",
                    active_class="deep-purple accent-4 white--text",
                    children=[
                        v.Chip(children=["5:30PM"], active=True),
                        v.Chip(children=["7:30PM"]),
                        v.Chip(children=["8:00PM"]),
                        v.Chip(children=["9:00PM"]),
                    ],
                ),
            ]
        ),
        v.CardActions(
            children=[
                v.Btn(color="deep-purple lighten-2", text=True, children=["Reserve"]),
            ]
        ),
    ],
)
