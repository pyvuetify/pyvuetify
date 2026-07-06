import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Combobox(
            v_model="model",
            v_model_search="search",
            # JS expression, needs manual conversion
            custom_filter="filter",
            # JS expression, needs manual conversion
            items="items",
            label="Search for an option",
            variant="solo",
            hide_selected=True,
            multiple=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Chip(
                            # JS expression, needs manual conversion
                            color="`${item.color}-lighten-3`",
                            # JS expression, needs manual conversion
                            text="item.title",
                            size="small",
                            variant="flat",
                            closable=True,
                            label=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
