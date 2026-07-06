import pyvuetify as v

v.Layout(
    min_height="250",
    children=[
        v.Snackbar(
            color="success",
            location="bottom start",
            prepend_icon="$success",
            text="Your changes have been saved.",
            timeout="-1",
            title="Success",
            contained=True,
            model_value=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            class_="px-3",
                            density="comfortable",
                            rounded="lg",
                            text="Got it!",
                            variant="tonal",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
