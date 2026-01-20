import ipyvuetify as v

v.Sheet(
    class_="px-7 pt-7 pb-4 mx-auto text-center d-inline-block",
    color="blue-grey darken-3",
    dark=True,
    children=[
        v.Html(
            tag="div",
            class_="grey--text text--lighten-1 text-body-2 mb-4",
            children=["Are you sure you want to delete this album?"],
        ),
        v.Btn(class_="ma-1", color="grey", plain=True, children=["Cancel"]),
        v.Btn(class_="ma-1", color="error", plain=True, children=["Delete"]),
    ],
)
