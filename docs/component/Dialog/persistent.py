import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center pa-4",
    children=[
        v.Dialog(
            v_model="dialog",
            max_width="400",
            persistent=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(children=["Open Dialog"]),
                    ],
                ),
            ],
        ),
    ],
)
