import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="ma-10",
            subtitle="Subtitle",
            title="Title",
        ),
        v.DefaultsProvider(
            # JS expression, needs manual conversion
            defaults="defaults",
            children=[
                v.Card(
                    class_="ma-10",
                    subtitle="Subtitle",
                    title="Title",
                ),
            ],
        ),
    ],
)
