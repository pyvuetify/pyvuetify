import pyvuetify as v

v.Container(
    children=[
        v.Combobox(
            v_model="model",
            v_model_menu="menu",
            # JS expression, needs manual conversion
            items="filteredItems",
            item_title="value",
            item_value="id",
            multiple=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Tabs(
                            v_model="tab",
                            class_="mt-2",
                            slider_color="primary",
                            grow=True,
                            children=[
                                v.Tab(
                                    value="fruits",
                                    children=["Fruits"],
                                ),
                                v.Tab(
                                    value="vegetables",
                                    children=["Vegetables"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
