import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="500",
    children=[
        v.Sheet(
            class_="pa-4",
            color="surface-variant",
            children=[
                v.TextField(
                    v_model="search",
                    clear_icon="mdi-close-circle-outline",
                    label="Search Company Directory",
                    variant="solo",
                    clearable=True,
                    flat=True,
                    hide_details=True,
                ),
                v.CheckboxBtn(
                    v_model="caseSensitive",
                    label="Case sensitive search",
                ),
            ],
        ),
        v.Treeview(
            v_model_opened="open",
            # JS expression, needs manual conversion
            custom_filter="filter",
            # JS expression, needs manual conversion
            items="items",
            # JS expression, needs manual conversion
            search="search",
            item_value="id",
            open_on_click=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Icon(
                            # JS expression, needs manual conversion
                            icon="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
