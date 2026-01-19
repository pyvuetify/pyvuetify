import ipyvuetify as v

v.Container(
    children=[
        v.Chip(class_="ma-2", label=True, children=["Label"]),
        v.Chip(
            class_="ma-2",
            color="pink",
            label=True,
            text_color="white",
            children=[v.Icon(left=True, children=["mdi-label"]), "Tags"],
        ),
        v.Chip(
            class_="ma-2",
            color="primary",
            label=True,
            children=[v.Icon(left=True, children=["mdi-account-circle-outline"]), "John Leider"],
        ),
        v.Chip(
            class_="ma-2",
            close_=True,
            color="cyan",
            label=True,
            text_color="white",
            children=[v.Icon(left=True, children=["mdi-twitter"]), "New Tweets"],
        ),
    ]
)
