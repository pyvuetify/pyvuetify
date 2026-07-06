import pyvuetify as v

v.DataTable(
    # JS expression, needs manual conversion
    headers="headers",
    # JS expression, needs manual conversion
    items="items",
    children=[
        v.Html(
            tag="template",
            children=[
                v.ProgressLinear(
                    # JS expression, needs manual conversion
                    color="color(item.progress)",
                    # JS expression, needs manual conversion
                    model_value="item.progress",
                    height="25",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Html(
                                    tag="strong",
                                    children=["{{ value }}%"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
