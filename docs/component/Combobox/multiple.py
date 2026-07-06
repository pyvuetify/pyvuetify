import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="12",
                    children=[
                        v.Combobox(
                            v_model="select",
                            # JS expression, needs manual conversion
                            items="items",
                            label="Select a favorite activity or create a new one",
                            multiple=True,
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    children=[
                        v.Combobox(
                            v_model="select",
                            # JS expression, needs manual conversion
                            items="items",
                            label="I use chips",
                            chips=True,
                            multiple=True,
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    children=[
                        v.Combobox(
                            v_model="select",
                            # JS expression, needs manual conversion
                            items="items",
                            label="I use a scoped slot",
                            multiple=True,
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Chip(
                                            # JS expression, needs manual conversion
                                            text="item.title",
                                            # JS expression, needs manual conversion
                                            value="internalItem.value",
                                            size="small",
                                            children=[
                                                v.Html(
                                                    tag="template",
                                                    children=[
                                                        v.Avatar(
                                                            class_="bg-accent text-uppercase",
                                                            start=True,
                                                            children=["{{ item.slice(0, 1) }}"],
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
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
