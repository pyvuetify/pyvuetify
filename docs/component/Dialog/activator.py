import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="text-center",
            children=[
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Dialog(
                            max_width="340",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Btn(
                                            prepend_icon="mdi-package",
                                            width="204",
                                            children=["Slot Activator"],
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
