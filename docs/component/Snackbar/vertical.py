import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Btn(
            color="indigo",
            children=["Open Snackbar"],
        ),
        v.Snackbar(
            v_model="snackbar",
            vertical=True,
            children=[
                v.Html(
                    tag="div",
                    class_="text-body-large pb-2",
                    children=["This is a snackbar message"],
                ),
                v.Html(
                    tag="p",
                    children=["This is a longer paragraph explaining something"],
                ),
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            color="indigo",
                            variant="text",
                            children=["Close"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
