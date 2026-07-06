import pyvuetify as v

v.Card(
    # JS expression, needs manual conversion
    disabled="loading",
    # JS expression, needs manual conversion
    loading="loading",
    class_="mx-auto my-12",
    max_width="374",
    children=[
        v.Html(
            tag="template",
            children=[
                v.ProgressLinear(
                    # JS expression, needs manual conversion
                    active="isActive",
                    color="deep-purple",
                    height="4",
                    indeterminate=True,
                ),
            ],
        ),
    ],
)
