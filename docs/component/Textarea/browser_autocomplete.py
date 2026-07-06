import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Textarea(
            autocomplete="email",
            label="Email",
        ),
    ],
)
