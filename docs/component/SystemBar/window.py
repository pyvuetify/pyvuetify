import pyvuetify as v

v.Layout(
    style_="height: 50px",
    children=[
        v.SystemBar(
            window=True,
            children=[
                v.Icon(
                    class_="me-2",
                    icon="mdi-message",
                ),
                v.Html(
                    tag="span",
                    children=["10 unread messages"],
                ),
                v.Spacer(),
                v.Btn(
                    icon="mdi-minus",
                    variant="text",
                ),
                v.Btn(
                    class_="ms-2",
                    icon="mdi-checkbox-blank-outline",
                    variant="text",
                ),
                v.Btn(
                    class_="ms-2",
                    icon="mdi-close",
                    variant="text",
                ),
            ],
        ),
    ],
)
