import pyvuetify as v

v.Treeview(
    v_model_selected="model",
    # JS expression, needs manual conversion
    items="items",
    item_value="id",
    select_strategy="classic",
    open_all=True,
    selectable=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Badge(
                    # JS expression, needs manual conversion
                    color="isSelected ? 'success' : 'warning'",
                    # JS expression, needs manual conversion
                    model_value="isSelected || isIndeterminate",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Icon(icon="$complete"),
                                v.Html(
                                    tag="span",
                                    children=["{{ selectionsInfo(path) }}"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
