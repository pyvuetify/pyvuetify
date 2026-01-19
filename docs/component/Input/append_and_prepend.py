import ipyvuetify as v

v.TextField(
    v_slots=[
        {
            "name": "append",
            "children": [
                v.Icon(
                    children=["mdi-plus"],
                    slot="append",
                    color="red",
                ),
            ],
        },
        {
            "name": "prepend",
            "children": [
                v.Icon(
                    children=["mdi-minus"],
                    slot="prepend",
                    color="green",
                )
            ],
        },
    ],
)
