import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Menu(
            v_model="menu",
            close_on_content_click=False,
            location="end",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            color="indigo",
                            children=["Menu as Popover"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
