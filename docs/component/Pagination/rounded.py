import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Pagination(
            v_model="page",
            length=4,
            rounded="circle",
        ),
        v.Pagination(
            v_model="page",
            length=4,
            rounded="0",
        ),
    ],
)
