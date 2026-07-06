import pyvuetify as v

v.Table(
    height="300px",
    fixed_header=True,
    children=[
        v.Html(
            tag="thead",
            children=[
                v.Html(
                    tag="tr",
                    children=[
                        v.Html(
                            tag="th",
                            class_="text-left",
                            children=["Name"],
                        ),
                        v.Html(
                            tag="th",
                            class_="text-left",
                            children=["Calories"],
                        ),
                    ],
                ),
            ],
        ),
        v.Html(
            tag="tbody",
            children=[
                v.Html(
                    tag="tr",
                    # JS expression, needs manual conversion
                    key="item.name",
                    children=[
                        v.Html(
                            tag="td",
                            children=["{{ item.name }}"],
                        ),
                        v.Html(
                            tag="td",
                            children=["{{ item.calories }}"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
