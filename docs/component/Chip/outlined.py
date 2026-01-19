import ipyvuetify as v

v.Container(
    children=[
        v.Chip(
            class_="ma-2",
            color="success",
            outlined=True,
            children=[v.Icon(left=True, children=["mdi-server-plus"]), "Server Status"],
        ),
        v.Chip(
            class_="ma-2",
            color="primary",
            outlined=True,
            pill=True,
            children=["User Account", v.Icon(right=True, children=["mdi-account-outline"])],
        ),
        v.Chip(
            class_="ma-2",
            color="deep-purple accent-4",
            outlined=True,
            children=[v.Icon(left=True, children=["mdi-wrench"]), "Update Settings"],
        ),
        v.Chip(
            class_="ma-2",
            close_=True,
            color="indigo darken-3",
            outlined=True,
            children=[v.Icon(left=True, children=["mdi-fire"]), "New Posts Available"],
        ),
    ]
)
