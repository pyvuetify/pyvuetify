from datetime import datetime as dt

import ipyvuetify as v

v.Footer(
    color="primary",
    padless=True,
    children=[
        v.Col(
            class_="text-center",
            justify_center=True,
            no_gutters=True,
            children=[
                v.Btn(
                    color="white",
                    text=True,
                    rounded=True,
                    class_="my-2 d-inline",
                    children=[link.title()],
                )
                for link in ["home", "about us", "services", "contact"]
            ],
        ),
        v.Col(
            class_="primary py-4 text-center white--text",
            cols="12",
            children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
        ),
    ],
)
