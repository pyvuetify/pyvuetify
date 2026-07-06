import pyvuetify as v

v.Sheet(
    class_="d-flex flex-column",
    children=[
        v.Snackbar(
            timeout=2000,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            class_="ma-2",
                            children=["open"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
