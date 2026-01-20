import ipyvuetify as v

v.Rating()

v.Rating(
    class_="text-center",
    v_model=3,
    v_slots=[
        {
            "name": "item",
            "variable": "props",
            "children": v.Icon(
                children=["mdi-star-circle"],
            ),
        }
    ],
)
