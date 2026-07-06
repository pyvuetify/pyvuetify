import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Menu(
            open_on_hover=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            color="primary",
                            children=["Dropdown"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
