import pyvuetify as v

v.Container(
    children=[
        v.Select(
            v_model="model",
            v_model_menu="menu",
            # JS expression, needs manual conversion
            items="items",
            item_title="value",
            item_value="id",
            multiple=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="div",
                            class_="pa-2 border-b",
                            children=[
                                v.TextField(
                                    v_model="search.value",
                                    # JS expression, needs manual conversion
                                    error="!!search.value && !filteredItems.length",
                                    density="compact",
                                    placeholder="Search...",
                                    prepend_inner_icon="mdi-magnify",
                                    variant="outlined",
                                    clearable=True,
                                    hide_details=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
