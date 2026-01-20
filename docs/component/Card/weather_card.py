import ipyvuetify as v

labels = ["SU", "MO", "TU", "WED", "TH", "FR", "SA"]
forecast = [
    {"day": "'Tuesday", "icon": "mdi-white-balance-sunny", "temp": "24\xB0/12\xB0"},
    {"day": "Wednesday", "icon": "mdi-white-balance-sunny", "temp": "22\xB0/14\xB0"},
    {"day": "Thursday", "icon": "mdi-cloud", "temp": "25\xB0/15\xB0"},
]

v.Card(
    class_="mx-auto my-2",
    min_width=500,
    children=[
        v.ListItem(
            two_line=True,
            children=[
                v.ListItemContent(
                    children=[
                        v.ListItemTitle(
                            children=[
                                v.Html(
                                    tag="h3", class_="text--primary", children=["San Francisco"]
                                ),
                            ]
                        ),
                        v.ListItemSubtitle(children=["Mon, 12:30 PM, Mostly sunny"]),
                    ]
                )
            ],
        ),
        v.CardText(
            children=[
                v.Row(
                    align="center",
                    children=[
                        v.Col(
                            cols=6,
                            children=[
                                v.Html(tag="h1", children=["23°C"], class_="text--primary"),
                            ],
                        ),
                        v.Col(
                            cols=6,
                            children=[
                                v.Img(
                                    src="https://cdn.vuetifyjs.com/images/cards/sun.png",
                                    alt="Sunny image",
                                    width="92",
                                )
                            ],
                        ),
                    ],
                )
            ]
        ),
        v.ListItem(
            children=[
                v.ListItemIcon(children=[v.Icon(children=["mdi-send"])]),
                v.ListItemSubtitle(children=["23 km/h"]),
            ]
        ),
        v.ListItem(
            children=[
                v.ListItemIcon(children=[v.Icon(children=["mdi-cloud-download"])]),
                v.ListItemSubtitle(children=["48%"]),
            ]
        ),
        v.Slider(v_model=0, max=6, tick_labels=labels, class_="mx-4", ticks=True),
        v.List(
            class_="transparent",
            children=[
                v.ListItem(
                    key=i,
                    children=[
                        v.ListItemTitle(children=[day["day"]]),
                        v.ListItemIcon(children=[v.Icon(children=[day["icon"]])]),
                        v.ListItemSubtitle(class_="text-right", children=[day["temp"]]),
                    ],
                )
                for i, day in enumerate(forecast)
            ],
        ),
        v.Divider(),
        v.CardActions(children=[v.Btn(text=True, children=["Full Report"])]),
    ],
)
