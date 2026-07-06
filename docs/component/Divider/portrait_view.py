import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="500",
    children=[
        v.CardItem(
            class_="bg-cyan-darken-1",
            children=[
                v.CardTitle(
                    children=[
                        v.Html(
                            tag="span",
                            class_="text-headline-small",
                            children=["Sarah Mcbeal"],
                        ),
                    ],
                ),
                v.Html(
                    tag="template",
                    children=[
                        v.DefaultsProvider(
                            # JS expression, needs manual conversion
                            defaults="""{
                                VBtn: {
                                variant: 'text',
                                density: 'comfortable',
                                }
                            }""",
                            children=[
                                v.Btn(icon="mdi-chevron-left"),
                                v.Btn(icon="mdi-pencil"),
                                v.Btn(icon="mdi-dots-vertical"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
