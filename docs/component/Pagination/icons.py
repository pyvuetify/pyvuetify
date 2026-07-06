import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Pagination(
            v_model="page",
            length=4,
            next_icon="mdi-menu-right",
            prev_icon="mdi-menu-left",
        ),
    ],
)
