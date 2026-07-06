import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center pa-8",
    children=[
        v.Btn(
            class_="ma-auto",
            size="x-large",
            text="Click Me",
        ),
        v.BottomSheet(
            v_model="sheet",
            inset=True,
            children=[
                v.Card(
                    class_="text-center",
                    height="200",
                    children=[
                        v.CardText(
                            children=[
                                v.Btn(
                                    text="Close",
                                    variant="text",
                                ),
                                v.Html(
                                    tag="div",
                                    children=["This is a bottom sheet that is using the inset prop"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
