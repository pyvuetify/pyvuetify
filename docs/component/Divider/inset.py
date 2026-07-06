import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="425",
    children=[
        v.List(
            lines="two",
            children=[
                v.ListSubheader(children=["Today"]),
                v.ListItem(
                    prepend_avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    title="Brunch this weekend?",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Html(
                                    tag="span",
                                    class_="font-weight-bold",
                                    children=["Ali Connors"],
                                ),
                                ("— I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
