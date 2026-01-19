from datetime import datetime as dt

import ipyvuetify as v

icons = ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-linkedin"]

v.Footer(
    dark=True,
    padless=True,
    children=[
        v.Card(
            width="100%",
            flat=True,
            tile=True,
            children=[
                v.CardTitle(
                    class_="teal",
                    children=[
                        v.Html(
                            tag="strong",
                            class_="subheading",
                            children=["Get connected with us on social networks!"],
                        ),
                        v.Spacer(),
                        *[
                            v.Btn(
                                icon=True,
                                class_="mx-4",
                                children=[v.Icon(size="24px", children=[i])],
                            )
                            for i in icons
                        ],
                    ],
                ),
                v.CardText(
                    class_="py-2 white--text text-center",
                    children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                ),
            ],
        ),
    ],
)
