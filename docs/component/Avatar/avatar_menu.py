import pyvuetify as v

v.Container(
    style_="height: 300px",
    fluid=True,
    children=[
        v.Row(
            class_="justify-center",
            children=[
                v.Menu(
                    min_width="200px",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Btn(
                                    icon=True,
                                    children=[
                                        v.Avatar(
                                            color="brown",
                                            size="large",
                                            children=[
                                                v.Html(
                                                    tag="span",
                                                    class_="text-headline-small",
                                                    children=["{{ user.initials }}"],
                                                ),
                                            ],
                                        ),
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
