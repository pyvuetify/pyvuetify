import pyvuetify as v

v.BottomSheet(
    v_model="sheet",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Html(
                    tag="div",
                    class_="text-center pa-8",
                    children=[
                        v.Btn(
                            color="purple",
                            size="x-large",
                            text="Click Me",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
