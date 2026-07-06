import pyvuetify as v

v.Container(
    children=[
        v.Textarea(
            bg_color="light-blue",
            color="black",
            label="Label",
        ),
        v.Textarea(
            bg_color="grey-lighten-2",
            color="cyan",
            label="Label",
        ),
        v.Textarea(
            bg_color="amber-lighten-4",
            color="orange orange-darken-4",
            label="Label",
        ),
    ],
)
