import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-space-around",
    children=[
        v.Icon(icon="md:home"),
        v.Icon(icon="md:event"),
        v.Icon(icon="md:info"),
        v.Icon(icon="md:folder_open"),
        v.Icon(icon="md:widgets"),
        v.Icon(icon="md:gavel"),
    ],
)
