import pyvuetify as v

v.Container(
    max_width="300",
    children=[
        v.Html(
            tag="div",
            # JS expression, needs manual conversion
            key="n",
            class_="py-2 border-b d-flex align-center ga-2",
            children=[
                "Some Text Here",
                v.Spacer(),
                v.IconBtn(
                    icon="mdi-dots-vertical",
                    size="small",
                    variant="outlined",
                ),
            ],
        ),
        v.Menu(
            v_model="showMenu",
            offset=[-8, -12],
            # JS expression, needs manual conversion
            target="menuTarget",
            location="bottom end",
            scroll_strategy="close",
            children=[
                v.List(
                    # JS expression, needs manual conversion
                    items="menuItems",
                    class_="py-0",
                    density="compact",
                    item_value="code",
                    item_props=True,
                    slim=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Icon(
                                    class_="mr-n2",
                                    size="small",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
