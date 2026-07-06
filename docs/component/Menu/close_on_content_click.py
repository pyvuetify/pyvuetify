import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Switch(
            v_model="closeOnContentClick",
            label="Close on content click",
        ),
        v.Menu(
            # JS expression, needs manual conversion
            close_on_content_click="closeOnContentClick",
            location="top",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            color="primary",
                            children=["Dropdown"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
