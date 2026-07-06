import pyvuetify as v

v.Sheet(
    border="lg opacity-12",
    class_="text-body-medium mx-auto",
    max_width="550",
    children=[
        v.Container(
            fluid=True,
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            md="3",
                            children=[
                                v.Img(
                                    height="88",
                                    src="https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png",
                                    cover=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            md="9",
                            children=[
                                v.Html(
                                    tag="p",
                                    class_="mb-4",
                                    children=[
                                        "This is part of our",
                                        v.Html(
                                            tag="a",
                                            href="#",
                                            children=["Most Comprehensive Guide to Referral Programs"],
                                        ),
                                        ">",
                                        v.Html(
                                            tag="a",
                                            href="#",
                                            children=["Do I Need A Referral Program?"],
                                        ),
                                        "section. You may enjoy other related articles:",
                                    ],
                                ),
                                v.Html(
                                    tag="ul",
                                    class_="ps-4 mb-6",
                                    children=[
                                        v.Html(
                                            tag="li",
                                            children=[
                                                v.Html(
                                                    tag="a",
                                                    href="#",
                                                    children=["5 Ways to See if Referral Programs Can Work for You"],
                                                ),
                                            ],
                                        ),
                                        v.Html(
                                            tag="li",
                                            children=[
                                                v.Html(
                                                    tag="a",
                                                    href="#",
                                                    children=["The 6 Key Benefits of Referral Marketing"],
                                                ),
                                            ],
                                        ),
                                        v.Html(
                                            tag="li",
                                            children=[
                                                v.Html(
                                                    tag="a",
                                                    href="#",
                                                    children=["Leading Indicators of Referral Program Success"],
                                                ),
                                            ],
                                        ),
                                        v.Html(
                                            tag="li",
                                            children=[
                                                v.Html(
                                                    tag="a",
                                                    href="#",
                                                    children=[("Debunking the Top 5 Worst Referral Program Myths")],
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                                v.Btn(
                                    class_="text-none",
                                    color="info",
                                    rounded="0",
                                    variant="flat",
                                    block=True,
                                    children=[
                                        v.Html(
                                            tag="span",
                                            class_="hidden-sm-and-down",
                                            children=["Explore our 38+ Referral Program Resources"],
                                        ),
                                        v.Html(
                                            tag="span",
                                            class_="hidden-md-and-up",
                                            children=["Explore Referral Resources"],
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
