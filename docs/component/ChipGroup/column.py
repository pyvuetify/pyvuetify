import ipyvuetify as v

tags = [
    "Work",
    "Home Improvement",
    "Vacation",
    "Food",
    "Drawers",
    "Shopping",
    "Art",
    "Tech",
    "Creative Writing",
]

chip_group = v.ChipGroup(
    column=True, active_class="text-primary", children=[v.Chip(children=[tag]) for tag in tags]
)

v.Sheet(
    class_="mx-auto my-2",
    elevation=10,
    max_width="500",
    rounded="xl",
    children=[
        v.Sheet(
            class_="pa-3 bg-primary text-right text-white",
            rounded="t-xl",
            children=[
                v.Btn(icon=True, children=[v.Icon(children=["mdi-content-save"])]),
                v.Btn(class_="ms-2", icon=True, children=[v.Icon(children=["mdi-check-bold"])]),
            ],
        ),
        v.Html(tag="div", class_="pa-4", children=[chip_group]),
    ],
)
