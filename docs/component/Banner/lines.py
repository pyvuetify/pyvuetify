import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Banner(
            class_="my-4",
            color="deep-purple-accent-4",
            icon="mdi-lock",
            lines="one",
            children=[
                v.BannerText(children=["Banner with one line of text."]),
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(children=["Action"]),
                    ],
                ),
            ],
        ),
    ],
)
