import ipyvuetify as v

chip_group = v.ChipGroup(
    active_class="primary--text",
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

output = v.Alert(class_="mt-4", type="info", children=["Select a chip"])

v.Container(children=[chip_group, output])
