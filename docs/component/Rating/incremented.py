import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    width=400,
    children=[
        v.CardTitle(
            class_="text-h5",
            children=["Rate Our Framework"],
        ),
        v.CardText(
            children=[
                "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!",
                v.Divider(),
                v.Rating(
                    v_model=3.5,
                    color="yellow darken-3",
                    background_color="grey darken-1",
                    empty_icon="$ratingFull",
                    half_increments=True,
                    hover=True,
                    class_="text-center",
                ),
            ],
        ),
        v.Divider(),
        v.CardActions(
            class_="justify-space-between",
            children=[
                v.Btn(
                    text=True,
                    children=["No Thanks"],
                ),
                v.Btn(
                    color="primary",
                    text=True,
                    children=["Rate Now"],
                ),
            ],
        ),
    ],
)
