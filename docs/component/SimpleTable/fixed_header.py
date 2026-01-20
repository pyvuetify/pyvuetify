import ipyvuetify as v

desserts = [
    ("Frozen Yogurt", 159),
    ("Ice cream sandwich", 237),
    ("Eclair", 262),
    ("Cupcake", 305),
    ("Gingerbread", 356),
    ("Jelly bean", 375),
    ("Lollipop", 392),
    ("Honeycomb", 408),
    ("Donut", 452),
    ("KitKat", 518),
]

v.SimpleTable(
    fixed_header=True,
    height=300,
    children=[
        v.Html(
            tag="thead",
            children=[
                v.Html(
                    tag="tr",
                    children=[
                        v.Html(tag="th", class_="text-left", children=["Name"]),
                        v.Html(tag="th", class_="text-left", children=["Calories"]),
                    ],
                )
            ],
        ),
        v.Html(
            tag="tbody",
            children=[
                v.Html(
                    tag="tr",
                    children=[
                        v.Html(tag="td", children=[name]),
                        v.Html(tag="td", children=[str(calorie)]),
                    ],
                )
                for name, calorie in desserts
            ],
        ),
    ],
)
