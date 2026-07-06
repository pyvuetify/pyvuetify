import pyvuetify as v

v.ThemeProvider(
    class_="pa-10",
    theme="dark",
    with_background=True,
    children=[
        v.Card(
            subtitle="Subtitle",
            title="Title",
        ),
    ],
)
