import pyvuetify as v

v.Container(
    children=[
        v.Select(
            v_model="model",
            # JS expression, needs manual conversion
            items="items",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.ListItem(
                            title=None,
                            children=[
                                v.ListItemTitle(children=["{{ item }}"]),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
