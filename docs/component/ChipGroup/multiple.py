import ipyvuetify as v

v.Container(
    class_="mx-auto my-2",
    children=[
        v.ChipGroup(
            active_class="text-primary",
            v_model=[0, 2],
            multiple=True,
            children=[
                v.Chip(children=["Work"]),
                v.Chip(children=["Home Improvement"]),
                v.Chip(children=["Vacation"]),
                v.Chip(children=["Food"]),
                v.Chip(children=["Drawers"]),
                v.Chip(children=["Shopping"]),
                v.Chip(children=["Art"]),
                v.Chip(children=["Tech"]),
                v.Chip(children=["Creative Writing"]),
            ],
        )
    ],
)
