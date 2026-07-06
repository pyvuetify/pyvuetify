import pyvuetify as v

v.Container(
    children=[
        v.Autocomplete(
            v_model="model",
            v_model_menu="menu",
            # JS expression, needs manual conversion
            items="items",
            item_title="value",
            item_value="id",
            hide_details=True,
            multiple=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex justify-space-between pa-2 border-t",
                            children=[
                                v.Btn(
                                    text="Clear",
                                    variant="text",
                                ),
                                v.Btn(
                                    text="Done",
                                    variant="tonal",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
