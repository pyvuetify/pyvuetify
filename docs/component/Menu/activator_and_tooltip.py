import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Menu(
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Tooltip(
                            location="top",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Btn(
                                            color="primary",
                                            children=["Dropdown w/ Tooltip"],
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
