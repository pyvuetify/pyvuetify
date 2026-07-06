import pyvuetify as v

v.Treeview(
    v_model_opened="open",
    # JS expression, needs manual conversion
    items="items",
    density="compact",
    item_value="title",
    activatable=True,
    open_on_click=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Icon(
                    # JS expression, needs manual conversion
                    icon="isOpen ? 'mdi-folder-open' : 'mdi-folder'",
                ),
                v.Icon(
                    # JS expression, needs manual conversion
                    icon="files[item.file]",
                ),
            ],
        ),
    ],
)
