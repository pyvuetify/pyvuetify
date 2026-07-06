import pyvuetify as v

v.Layout(
    children=[
        v.AppBar(
            density="compact",
            title="My Website",
            children=[
                v.Btn(
                    # JS expression, needs manual conversion
                    key="group.name",
                    # JS expression, needs manual conversion
                    text="group.name",
                    append_icon="mdi-chevron-down",
                ),
            ],
        ),
        v.Menu(
            v_model="menu",
            # JS expression, needs manual conversion
            activator="activator",
            # JS expression, needs manual conversion
            content_class="{ 'menu-move-transition': menuMoving }",
            location="bottom end",
            offset="4",
            viewport_margin="0",
            children=[
                v.List(
                    # JS expression, needs manual conversion
                    items="menuItems",
                    class_="py-1",
                    density="compact",
                    rounded="lg",
                    border=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Icon(icon="mdi-arrow-top-right"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
