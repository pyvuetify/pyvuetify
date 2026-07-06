import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Row(
            class_="justify-space-between",
            density="comfortable",
            children=[
                v.Col(
                    cols="12",
                    md="5",
                    children=[
                        v.Treeview(
                            v_model_activated="active",
                            v_model_opened="open",
                            # JS expression, needs manual conversion
                            items="items",
                            # JS expression, needs manual conversion
                            load_children="fetchUsers",
                            density="compact",
                            item_title="name",
                            item_value="id",
                            activatable=True,
                            border=True,
                            fluid=True,
                            open_on_click=True,
                            rounded=True,
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Icon(icon="mdi-account"),
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
