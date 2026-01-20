import ipyvuetify as v

icons = [
    ("mdi-domain", "green darken-2"),
    ("mdi-message-text", "blue darken-2"),
    ("mdi-dialpad", "purple darken-2"),
    ("mdi-email", "teal darken-2"),
    ("mdi-call-split", "blue-grey darken-2"),
    ("mdi-arrow-up-bold-box-outline", "orange darken-2"),
]

v.Layout(
    class_="d-flex flex-row justify-space-evenly",
    children=[
        v.Html(
            tag="div",
            class_="d-flex flex-grow-1 justify-center",
            children=[
                v.Icon(
                    children=[icon_name],
                    large=True,
                    color=color,
                )
            ],
        )
        for icon_name, color in icons
    ],
)
