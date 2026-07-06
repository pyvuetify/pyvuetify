import pyvuetify as v

v.Row(
    density="comfortable",
    children=[
        v.Col(
            cols="12",
            md="6",
            children=[
                v.DateInput(
                    label="Select a date",
                    prepend_icon="",
                    prepend_inner_icon="$calendar",
                    variant="solo",
                ),
            ],
        ),
        v.Col(
            cols="12",
            md="6",
            children=[
                v.DateInput(
                    label="Select a date",
                    prepend_icon="",
                    variant="solo",
                ),
            ],
        ),
    ],
)
