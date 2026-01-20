from datetime import datetime as dt

import ipyvuetify as v

icons = ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"]

v.Footer(
    children=[
        v.Card(
            flat=True,
            tile=True,
            width="100%",
            padless=True,
            class_="red lighten-1 text-center",
            children=[
                v.CardText(
                    children=[
                        v.Btn(
                            icon=True,
                            class_="mx-4",
                            children=[v.Icon(children=[i])],
                        )
                        for i in icons
                    ],
                ),
                v.Divider(),
                v.CardText(
                    class_="white--text",
                    children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["IpyVuetify"])],
                ),
            ],
        ),
    ],
)
