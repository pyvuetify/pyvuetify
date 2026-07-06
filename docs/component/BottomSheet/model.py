import pyvuetify as v

v.Html(
    tag="div",
    class_="pa-8 text-center",
    children=[
        v.Btn(
            class_="ma-auto",
            size="x-large",
            text="Click Me",
        ),
        v.BottomSheet(
            v_model="sheet",
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
                                    children=[
                                        "This is a bottom sheet using the controlled by v-model instead of activator"
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
