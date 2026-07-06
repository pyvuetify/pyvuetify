import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Btn(
            color="orange-darken-2",
            children=["Open Snackbar"],
        ),
        v.Snackbar(
            v_model="snackbar",
            # JS expression, needs manual conversion
            timeout="timeout",
            children=[
                "{{ text }}",
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            color="blue",
                            variant="text",
                            children=["Close"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
