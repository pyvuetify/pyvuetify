import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Html(
            tag="h5",
            class_="my-2",
            children=["Numeric (default)"],
        ),
        v.OtpInput(
            v_model="numeric",
            pattern="numeric",
        ),
        v.Html(
            tag="h5",
            class_="my-2",
            children=["Alpha"],
        ),
        v.OtpInput(
            v_model="alpha",
            pattern="alpha",
        ),
        v.Html(
            tag="h5",
            class_="my-2",
            children=["Custom RegExp (uppercase only)"],
        ),
        # JS expression, needs manual conversion
        v.OtpInput(v_model="upper", pattern="/[A-Z]/"),
    ],
)
