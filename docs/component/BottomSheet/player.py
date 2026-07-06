import pyvuetify as v

v.BottomSheet(
    inset=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Html(
                    tag="div",
                    class_="text-center pa-8",
                    children=[
                        v.Btn(
                            color="red",
                            size="x-large",
                            text="Click Me",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
