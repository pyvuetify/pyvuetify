import pyvuetify as v

v.Treeview(
    v_model="model",
    # JS expression, needs manual conversion
    items="items",
    lines=False,
    collapse_icon="mdi-chevron-down",
    density="compact",
    expand_icon="mdi-chevron-right",
    select_strategy="leaf",
    fluid=True,
    selectable=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Html(
                    tag="span",
                    class_=(
                        '["text-body-small", model.includes(item.value) && "text-decoration-line-through"]'
                        # JS expression, needs manual conversion
                    ),
                    children=["{item.title}"],
                ),
            ],
        ),
    ],
)
