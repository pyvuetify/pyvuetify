import pyvuetify as v

v.Treeview(
    # JS expression, needs manual conversion
    items="items",
    # JS expression, needs manual conversion
    search="search",
    item_value="id",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Btn(
                    prepend_icon="mdi-backup-restore",
                    rounded="lg",
                    text="Reset category",
                    variant="text",
                    border=True,
                    open_all=True,
                ),
            ],
        ),
    ],
)
