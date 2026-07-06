import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center my-3",
    children=[
        v.Btn(text="Open"),
        v.CommandPalette(
            v_model="model",
            filter_keys=["raw.name", "raw.username"],
            # JS expression, needs manual conversion
            items="items",
            class_="pa-2",
            hotkey="alt+g",
            item_title="name",
            item_value="name",
            max_height="800",
            placeholder="Search by name",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="div",
                            class_="ma-2 text-title-small",
                            children=["What are you looking for?"],
                        ),
                        v.ChipGroup(
                            class_="pl-2 mt-n1 mb-1 flex-1-0",
                            children=[
                                v.Chip(
                                    # JS expression, needs manual conversion
                                    key="c",
                                    # JS expression, needs manual conversion
                                    text="c",
                                    size="small",
                                    closable=True,
                                    label=True,
                                    children=[
                                        v.Html(
                                            tag="template",
                                            children=[
                                                v.Icon(
                                                    icon="$close",
                                                    size="14",
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
