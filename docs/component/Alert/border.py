import ipyvuetify as v

v.Container(
    children=[
        v.Alert(
            border="top",
            color="red lighten-2",
            dark=True,
            children=["I'm an alert with a top border and red color"],
        ),
        v.Alert(
            border="right",
            color="blue-grey",
            dark=True,
            children=["I'm an alert with a right border and blue-grey color"],
        ),
        v.Alert(
            border="bottom",
            color="pink darken-1",
            dark=True,
            children=["I'm an alert with a bottom border and pink color"],
        ),
        v.Alert(
            border="left",
            color="indigo",
            dark=True,
            children=["I'm an alert with a border left type info"],
        ),
    ]
)
