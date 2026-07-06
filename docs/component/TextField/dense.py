import pyvuetify as v

v.Card(
    class_="mx-auto",
    color="surface-light",
    max_width="400",
    children=[
        v.CardText(
            children=[
                v.TextField(
                    # JS expression, needs manual conversion
                    loading="loading",
                    append_inner_icon="mdi-magnify",
                    density="compact",
                    label="Search templates",
                    variant="solo",
                    hide_details=True,
                    single_line=True,
                ),
            ],
        ),
    ],
)
