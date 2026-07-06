import pyvuetify as v

v.Html(
    tag="div",
    class_="pa-4 text-center",
    children=[
        v.Dialog(
            width="auto",
            scrollable=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            color="brown",
                            prepend_icon="mdi-earth",
                            text="Select Country",
                            variant="outlined",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
