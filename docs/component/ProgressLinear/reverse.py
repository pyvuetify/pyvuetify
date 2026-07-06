import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.ProgressLinear(
            color="pink",
            model_value="15",
            reverse=True,
        ),
        v.ProgressLinear(
            color="lime",
            indeterminate=True,
            reverse=True,
        ),
        v.ProgressLinear(
            buffer_value="55",
            color="success",
            model_value="30",
            reverse=True,
            streams=True,
        ),
        v.Html(
            tag="p",
            children=[
                (
                    "In specific cases you may want progress to display in left-to-right mode "
                    "regardless of the application direction (LTR or RTL):"
                ),
            ],
        ),
        v.ProgressLinear(
            # JS expression, needs manual conversion
            reverse="$vuetify.locale.isRtl",
            model_value="15",
        ),
    ],
)
