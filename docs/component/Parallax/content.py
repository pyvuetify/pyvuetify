import ipyvuetify as v

v.Parallax(
    height=200,
    dark=True,
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
    children=[
        v.Row(
            align="center",
            justify="center",
            children=[
                v.Col(
                    class_="text-center",
                    cols=12,
                    children=[
                        v.Html(
                            tag="h1",
                            class_="font-weight-thin mb-0 white--text",
                            children=["Vuetify"],
                        ),
                        v.Html(
                            tag="h3",
                            class_="subheading white--text mt-1",
                            children=["Build your application today!"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
