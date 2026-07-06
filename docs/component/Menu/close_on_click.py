import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Switch(
            v_model="closeOnClick",
            color="primary",
            label="Close on click",
        ),
        v.Menu(
            # JS expression, needs manual conversion
            persistent="!closeOnClick",
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
