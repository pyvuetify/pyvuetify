import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Avatar(
            color="blue-darken-2",
            rounded="0",
            children=[
                v.Icon(icon="mdi-alarm"),
            ],
        ),
    ],
)
