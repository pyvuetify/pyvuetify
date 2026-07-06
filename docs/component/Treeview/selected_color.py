import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex ga-4 flex-wrap",
    children=[
        v.Treeview(
            v_model_selected="selection",
            # JS expression, needs manual conversion
            items="items",
            class_="flex-1-1-0",
            item_value="id",
            select_strategy="classic",
            selected_color="primary",
            open_all=True,
            selectable=True,
        ),
        v.Treeview(
            v_model_selected="selection",
            # JS expression, needs manual conversion
            items="items",
            class_="flex-1-1-0",
            item_value="id",
            select_strategy="classic",
            selected_color="success",
            open_all=True,
            selectable=True,
        ),
        v.Treeview(
            v_model_selected="selection",
            # JS expression, needs manual conversion
            items="items",
            class_="flex-1-1-0",
            item_value="id",
            select_strategy="classic",
            selected_color="red",
            open_all=True,
            selectable=True,
        ),
    ],
)
