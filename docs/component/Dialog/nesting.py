import pyvuetify as v

v.Html(
    tag="div",
    class_="pa-4 text-center",
    children=[
        v.Btn(text="Open Dialog 1"),
        v.Dialog(
            v_model="dialog",
            max_width="480",
            children=[
                v.Card(
                    title="Dialog 1",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Btn(
                                    class_="my-2",
                                    text="Open Dialog 2",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
