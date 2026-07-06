import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Btn(
            append_icon="mdi-open-in-new",
            color="deep-purple-accent-4",
            children=["Launch Application"],
        ),
        v.Overlay(
            # JS expression, needs manual conversion
            model_value="overlay",
            class_="align-center justify-center",
            children=[
                v.ProgressCircular(
                    color="primary",
                    size="64",
                    indeterminate=True,
                ),
            ],
        ),
    ],
)
