import pyvuetify as v

v.Card(
    class_="mx-auto",
    color="surface-variant",
    image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg",
    max_width="340",
    subtitle="Take a walk down the beach",
    title="Evening sunset",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Btn(
                    append_icon="mdi-chevron-right",
                    color="red-lighten-2",
                    text="Book Activity",
                    variant="outlined",
                    block=True,
                ),
            ],
        ),
    ],
)
