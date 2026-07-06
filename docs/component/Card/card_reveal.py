import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="344",
    children=[
        v.CardText(
            children=[
                v.Html(
                    tag="div",
                    children=["Word of the Day"],
                ),
                v.Html(
                    tag="div",
                    class_="text-headline-large font-weight-black mb-4",
                    children=["el·ee·mos·y·nar·y"],
                ),
                v.Html(
                    tag="div",
                    class_="mb-4",
                    children=["adjective"],
                ),
                v.Html(
                    tag="div",
                    class_="text-medium-emphasis",
                    children=[
                        "relating to or dependent on charity; charitable; charitable donations. Pertaining to alms.",
                        '"an eleemosynary educational institution."',
                    ],
                ),
            ],
        ),
        v.CardActions(
            children=[
                v.Btn(
                    color="teal-accent-4",
                    text="Learn More",
                    variant="text",
                ),
            ],
        ),
        v.ExpandTransition(
            children=[
                v.Card(
                    class_="position-absolute w-100",
                    height="100%",
                    style_="bottom: 0;",
                    children=[
                        v.CardText(
                            class_="pb-0",
                            children=[
                                v.Html(
                                    tag="p",
                                    class_="text-headline-large",
                                    children=["Origin"],
                                ),
                                v.Html(
                                    tag="p",
                                    class_="text-medium-emphasis",
                                    children=[
                                        (
                                            "late 16th century (as a noun denoting a place where "
                                            "alms were distributed): from medieval Latin "
                                            "eleemosynarius, from late Latin eleemosyna ‘alms’, "
                                            "from Greek eleēmosunē ‘compassion’"
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.CardActions(
                            class_="pt-0",
                            children=[
                                v.Btn(
                                    color="teal-accent-4",
                                    text="Close",
                                    variant="text",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
