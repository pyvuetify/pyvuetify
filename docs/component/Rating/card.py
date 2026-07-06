import pyvuetify as v

v.Card(
    class_="mx-auto",
    color="purple",
    elevation="3",
    width="360",
    children=[
        v.Html(
            tag="div",
            class_="d-flex justify-between",
            children=[
                v.CardTitle(
                    class_="flex-grow-1 flex-column align-start",
                    children=[
                        v.Html(
                            tag="div",
                            class_="text-headline-small",
                            children=["Halycon Days"],
                        ),
                        v.Html(
                            tag="div",
                            class_="text-title-large font-weight-thin",
                            children=["Ellie Goulding"],
                        ),
                        v.Html(
                            tag="div",
                            class_="text-title-large font-weight-thin",
                            children=["(2013)"],
                        ),
                    ],
                ),
                v.Img(
                    class_="flex-grow-0",
                    height="125px",
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png",
                    style_="flex-basis: 125px",
                ),
            ],
        ),
        v.Divider(),
        v.CardActions(
            class_="pa-4",
            children=[
                "Rate this album",
                v.Spacer(),
                v.Html(
                    tag="span",
                    class_="text-grey-lighten-2 text-body-small me-2",
                    children=["({{ rating }})"],
                ),
                v.Rating(
                    v_model="rating",
                    active_color="yellow-accent-4",
                    color="white",
                    size="18",
                    half_increments=True,
                    hover=True,
                ),
            ],
        ),
    ],
)
