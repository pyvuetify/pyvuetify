import pyvuetify as v

v.Banner(
    color="warning",
    icon="mdi-wifi-strength-alert-outline",
    lines="one",
    children=[
        v.Html(
            tag="template",
            children=["No Internet connection"],
        ),
    ],
)
