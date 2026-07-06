import pyvuetify as v

v.Sheet(
    color="#0d1117",
    elevation="1",
    rounded="lg",
    children=[
        v.Tabs(
            v_model="tab",
            # JS expression, needs manual conversion
            items="tabs",
            align_tabs="center",
            color="white",
            height="60",
            slider_color="#f78166",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Tab(
                            # JS expression, needs manual conversion
                            prepend_icon="item.icon",
                            # JS expression, needs manual conversion
                            text="item.text",
                            # JS expression, needs manual conversion
                            value="item.value",
                            class_="text-none",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
