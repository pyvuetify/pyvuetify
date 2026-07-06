import pyvuetify as v

v.Layout(
    min_height="120",
    children=[
        v.Snackbar(
            max_width="400",
            prepend_avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg",
            text="The reproduction is missing. Would you...",
            timeout="-1",
            title="@marley4122",
            contained=True,
            model_value=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex text-body-small pa-3 pb-0",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="text-uppercase",
                                    children=["Signal"],
                                ),
                                v.Spacer(),
                                v.Html(
                                    tag="div",
                                    children=["2 min ago"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
