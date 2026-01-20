import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    width="400px",
    children=[
        v.Pagination(
            v_model=1,
            length=15,
            class_="text-center my-4",
        )
    ],
)
