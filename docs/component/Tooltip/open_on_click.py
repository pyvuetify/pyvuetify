import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Tooltip(
            open_on_hover=False,
            open_on_click=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(children=["Click me"]),
                    ],
                ),
            ],
        ),
    ],
)
