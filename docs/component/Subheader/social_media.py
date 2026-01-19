from random import random

import ipyvuetify as v

types = ["Places to Be", "Places to See"]
cards = ["Good", "Best", "Finest"]
socials = [
    ("mdi-facebook", "indigo"),
    ("mdi-linkedin", "cyan darken-1"),
    ("mdi-instagram", "red lighten-3"),
]

v.Card(
    flat=True,
    tile=True,
    children=[
        v.Toolbar(
            color="cyan",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Application"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
            ],
        ),
        *[
            v.Container(
                fluid=True,
                class_="grey lighten-4",
                children=[
                    v.Subheader(children=[type_]),
                    v.Row(
                        children=[
                            v.Spacer(),
                            *[
                                v.Col(
                                    cols=12,
                                    sm=6,
                                    md=4,
                                    children=[
                                        v.Card(
                                            children=[
                                                v.Img(
                                                    src=f"https://picsum.photos/200/300?image={int(random() * 11) + 550}",
                                                    height="300px",
                                                    children=[
                                                        v.Html(
                                                            tag="span",
                                                            class_="text-h5 white--text pl-4 pt-4 d-inline-block",
                                                            children=[card],
                                                        )
                                                    ],
                                                ),
                                                v.CardActions(
                                                    class_="white justify-center",
                                                    children=[
                                                        v.Btn(
                                                            color=social[1],
                                                            class_="white--text",
                                                            fab=True,
                                                            icon=True,
                                                            small=True,
                                                            children=[v.Icon(children=[social[0]])],
                                                        )
                                                        for social in socials
                                                    ],
                                                ),
                                            ]
                                        )
                                    ],
                                )
                                for j, card in enumerate(cards)
                            ],
                        ]
                    ),
                ],
            )
            for i, type_ in enumerate(types)
        ],
    ],
)
