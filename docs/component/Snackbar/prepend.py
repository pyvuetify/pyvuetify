import pyvuetify as v

v.Layout(
    min_height="100",
    children=[
        v.Snackbar(
            color="amber-lighten-3",
            text="There are new reports...",
            timeout="-1",
            title="New notifications",
            contained=True,
            model_value=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Avatar(
                            class_="bell-shake",
                            color="amber",
                            icon="mdi-bell-ring-outline",
                            variant="elevated",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
