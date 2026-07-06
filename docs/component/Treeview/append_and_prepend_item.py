import pyvuetify as v

v.Treeview(
    v_model_activated="activated",
    # JS expression, needs manual conversion
    items="items",
    item_key="id",
    item_value="id",
    activatable=True,
    open_all=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.IconBtn(
                    # JS expression, needs manual conversion
                    disabled="!depth",
                    icon="mdi-arrow-left",
                ),
                v.IconBtn(
                    # JS expression, needs manual conversion
                    disabled="isFirst",
                    icon="mdi-arrow-up",
                ),
                v.IconBtn(
                    # JS expression, needs manual conversion
                    disabled="isLast",
                    icon="mdi-arrow-down",
                ),
                v.IconBtn(
                    # JS expression, needs manual conversion
                    disabled="isFirst",
                    icon="mdi-arrow-right",
                ),
            ],
        ),
    ],
)
