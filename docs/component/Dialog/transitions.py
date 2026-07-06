import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-space-around",
            children=[
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Dialog(
                            transition="dialog-bottom-transition",
                            width="auto",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Btn(
                                            text="Transition from Bottom",
                                            block=True,
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
