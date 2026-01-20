from datetime import datetime as dt

import ipyvuetify as v

v.Footer(
    padless=True,
    children=[
        v.Col(
            class_="text-center",
            cols="12",
            children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
        ),
    ],
)
