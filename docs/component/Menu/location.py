import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Select(
            v_model="location",
            # JS expression, needs manual conversion
            items="locations",
            label="Location",
        ),
        v.Menu(
            # JS expression, needs manual conversion
            location="location",
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
