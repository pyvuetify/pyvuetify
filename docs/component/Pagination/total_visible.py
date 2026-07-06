import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Pagination(
            v_model="page",
            length=15,
            total_visible=7,
        ),
    ],
)
