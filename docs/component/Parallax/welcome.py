import pyvuetify as v

v.Parallax(
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
    children=[
        v.Container(
            class_="fill-height",
            children=[
                v.Row(
                    class_="flex-column-reverse flex-md-row align-center justify-center",
                    children=[
                        v.Col(
                            cols="12",
                            md="6",
                            children=[
                                v.Html(
                                    tag="h1",
                                    class_="text-display-large mt-0 mb-8",
                                    children=["John Doe"],
                                ),
                                v.Html(
                                    tag="h3",
                                    class_="text-display-medium mt-0 mb-8 font-weight-thin",
                                    children=["Web Developer"],
                                ),
                                v.Btn(
                                    class_="elevation-2 rounded-xl mb-4",
                                    color="primary",
                                    children=["Contact Me"],
                                ),
                            ],
                        ),
                        v.Col(
                            class_="text-center",
                            cols="12",
                            md="6",
                            children=[
                                v.Avatar(
                                    size=300,
                                    class_="elevation-4 mx-auto mb-8",
                                    children=[
                                        v.Img(src="https://randomuser.me/api/portraits/men/78.jpg"),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
