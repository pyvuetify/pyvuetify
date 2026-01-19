import ipyvuetify as v

v.Row(
    justify="space-around",
    children=[
        v.Avatar(
            color="indigo",
            size=36,
            children=[v.Html(tag="span", class_="text-white", children=["36"])],
        ),
        v.Avatar(
            color="teal",
            size=48,
            children=[v.Html(tag="span", class_="text-white", children=["48"])],
        ),
        v.Avatar(
            color="orange",
            size=62,
            children=[v.Html(tag="span", class_="text-white", children=["62"])],
        ),
    ],
)
