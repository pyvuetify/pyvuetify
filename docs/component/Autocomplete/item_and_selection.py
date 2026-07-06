import pyvuetify as v

v.Card(
    # JS expression, needs manual conversion
    loading="isUpdating",
    class_="mx-auto",
    color="blue-grey-darken-1",
    max_width="420",
    children=[
        v.Html(
            tag="template",
            children=[
                v.ProgressLinear(
                    # JS expression, needs manual conversion
                    active="isActive",
                    color="green-lighten-3",
                    height="4",
                    indeterminate=True,
                ),
            ],
        ),
    ],
)
