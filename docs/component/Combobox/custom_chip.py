import pyvuetify as v

v.Combobox(
    v_model="selected",
    # JS expression, needs manual conversion
    items="items",
    item_title="name",
    item_value="name",
    chips=True,
    closable_chips=True,
    multiple=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Chip(
                    label=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="me-1",
                                    children=["{{ item.symbol }}"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
