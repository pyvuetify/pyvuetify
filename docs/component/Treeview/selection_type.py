import pyvuetify as v

v.Sheet(
    border=True,
    rounded=True,
    children=[
        v.Container(
            fluid=True,
            children=[
                v.Select(
                    v_model="strategy",
                    items=[
                        "leaf",
                        "single-leaf",
                        "independent",
                        "single-independent",
                        "classic",
                        "trunk",
                        "branch",
                    ],
                    label="Selection type",
                ),
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            md="6",
                            children=[
                                v.Treeview(
                                    v_model_selected="selected",
                                    # JS expression, needs manual conversion
                                    items="items",
                                    # JS expression, needs manual conversion
                                    select_strategy="strategy",
                                    item_value="id",
                                    return_object=True,
                                    selectable=True,
                                ),
                            ],
                        ),
                        v.Divider(vertical=True),
                        v.Col(
                            class_="pa-6",
                            cols="12",
                            md="6",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=["No nodes selected."],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
