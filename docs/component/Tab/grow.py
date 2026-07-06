import pyvuetify as v

v.Card(
    color="basil",
    children=[
        v.CardTitle(
            class_="text-center justify-center py-6",
            children=[
                v.Html(
                    tag="h1",
                    class_="font-weight-bold text-display-large text-basil my-0",
                    children=["BASiL"],
                ),
            ],
        ),
        v.Tabs(
            v_model="tab",
            color="basil",
            grow=True,
            children=[
                v.Tab(
                    # JS expression, needs manual conversion
                    key="item",
                    # JS expression, needs manual conversion
                    text="item",
                    # JS expression, needs manual conversion
                    value="item",
                ),
            ],
        ),
        v.TabsWindow(
            v_model="tab",
            children=[
                v.TabsWindowItem(
                    # JS expression, needs manual conversion
                    key="item",
                    # JS expression, needs manual conversion
                    value="item",
                    children=[
                        v.Card(
                            color="basil",
                            flat=True,
                            children=[
                                v.CardText(children=["{{ text }}"]),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
