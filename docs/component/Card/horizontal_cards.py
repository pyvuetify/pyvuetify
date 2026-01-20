import ipyvuetify as v

items = [
    {
        "color": "#1F7087",
        "src": "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        "title": "Supermodel",
        "artist": "Foster the People",
    },
    {
        "color": "#952175",
        "src": "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        "title": "Halcyon Days",
        "artist": "Ellie Goulding",
    },
]

v.Card(
    class_="mx-auto my-2",
    max_width=400,
    children=[
        v.SystemBar(
            color="pink darken-2",
            dark=True,
            children=[
                v.Spacer(),
                v.Icon(children=["mdi-window-minimize"]),
                v.Icon(children=["mdi-window-maximize"]),
                v.Icon(children=["mdi-close"]),
            ],
        ),
        v.AppBar(
            dark=True,
            color="pink",
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["My Music"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
            ],
        ),
        v.Container(
            children=[
                v.Row(
                    dense=True,
                    children=[
                        v.Col(
                            cols=12,
                            children=[
                                v.Card(
                                    color="#385F73",
                                    dark=True,
                                    children=[
                                        v.CardTitle(
                                            class_="text-h5", children=["Unlimited music now"]
                                        ),
                                        v.CardSubtitle(
                                            children=[
                                                "Listen to your favorite artists and albums whenever and wherever, "
                                                "online and offline."
                                            ]
                                        ),
                                        v.CardActions(
                                            children=[v.Btn(text=True, children=["Listen Now"])]
                                        ),
                                    ],
                                )
                            ],
                        ),
                        *[
                            v.Col(
                                cols=12,
                                children=[
                                    v.Card(
                                        color=item["color"],
                                        dark=True,
                                        children=[
                                            v.Html(
                                                tag="div",
                                                class_="d-flex flex-no-wrap justify-space-between",
                                                children=[
                                                    v.Html(
                                                        tag="div",
                                                        children=[
                                                            v.CardTitle(
                                                                class_="text-h5",
                                                                children=[item["title"]],
                                                            ),
                                                            v.CardSubtitle(
                                                                children=[item["artist"]]
                                                            ),
                                                            v.CardActions(
                                                                children=[
                                                                    v.Btn(
                                                                        class_="ml-2 mt-3"
                                                                        if item["artist"]
                                                                        == "Ellie Goulding"
                                                                        else "ml-2 mt-5",
                                                                        fab=True
                                                                        if item["artist"]
                                                                        == "Ellie Goulding"
                                                                        else False,
                                                                        icon=True
                                                                        if item["artist"]
                                                                        == "Ellie Goulding"
                                                                        else False,
                                                                        height="40px"
                                                                        if item["artist"]
                                                                        == "Ellie Goulding"
                                                                        else None,
                                                                        right=True
                                                                        if item["artist"]
                                                                        == "Ellie Goulding"
                                                                        else False,
                                                                        width="40px"
                                                                        if item["artist"]
                                                                        == "Ellie Goulding"
                                                                        else None,
                                                                        outlined=False
                                                                        if item["artist"]
                                                                        == "Ellie Goulding"
                                                                        else True,
                                                                        rounded=False
                                                                        if item["artist"]
                                                                        == "Ellie Goulding"
                                                                        else True,
                                                                        small=False
                                                                        if item["artist"]
                                                                        == "Ellie Goulding"
                                                                        else True,
                                                                        children=[
                                                                            v.Icon(
                                                                                children=[
                                                                                    "mdi-play"
                                                                                ]
                                                                            )
                                                                            if item["artist"]
                                                                            == "Ellie Goulding"
                                                                            else "START RADIO"
                                                                        ],
                                                                    )
                                                                ]
                                                            ),
                                                        ],
                                                    ),
                                                    v.Avatar(
                                                        class_="ma-3",
                                                        size="125",
                                                        tile=True,
                                                        children=[v.Img(src=item["src"])],
                                                    ),
                                                ],
                                            )
                                        ],
                                    )
                                ],
                            )
                            for item in items
                        ],
                    ],
                )
            ]
        ),
    ],
)
