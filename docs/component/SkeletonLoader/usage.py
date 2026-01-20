import ipyvuetify as v

v.Sheet(
    class_="pa-3",
    color="grey lighten-4",
    children=[v.SkeletonLoader(type="card", width=300, class_="mx-auto my-2")],
)
