import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Combobox(
            v_model="model",
            v_model_search="search",
            hide_no_data=False,
            # JS expression, needs manual conversion
            items="items",
            hint="Maximum of 5 tags",
            label="Add some tags",
            chips=True,
            hide_selected=True,
            multiple=True,
            persistent_hint=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.ListItem(
                            children=[
                                v.ListItemTitle(
                                    children=[
                                        'No results matching "',
                                        v.Html(
                                            tag="strong",
                                            children=["{{ search }}"],
                                        ),
                                        '". Press',
                                        v.Html(
                                            tag="kbd",
                                            children=["enter"],
                                        ),
                                        "to create a new one",
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
