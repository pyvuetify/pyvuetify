import pyvuetify as v

v.Html(
    tag="div",
    class_="pa-4 text-center",
    children=[
        v.Dialog(
            max_width="800",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(text="Open Dialog"),
                    ],
                ),
            ],
        ),
    ],
)
