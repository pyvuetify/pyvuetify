import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Row(
            class_="flex justify-center",
            children=[
                v.Card(
                    ripple=False,
                    class_="portrait",
                    height="300px",
                    img="https://cdn.vuetifyjs.com/images/cards/girl.jpg",
                ),
            ],
        ),
        v.Menu(
            v_model="showMenu",
            # JS expression, needs manual conversion
            target="[x, y]",
            absolute=True,
            children=[
                v.List(
                    children=[
                        v.ListItem(
                            # JS expression, needs manual conversion
                            key="index",
                            children=[
                                v.ListItemTitle(children=["{{ item.title }}"]),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
