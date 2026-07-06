import pyvuetify as v

v.Layout(
    min_height="100",
    children=[
        v.Snackbar(
            color="indigo",
            prepend_avatar="https://cdn.vuetifyjs.com/images/john.jpg",
            text="Hey, are you available for a quick call?",
            timeout="-1",
            title="John Leider",
            contained=True,
            model_value=True,
        ),
    ],
)
