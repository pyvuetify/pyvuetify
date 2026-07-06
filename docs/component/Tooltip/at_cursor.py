import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.Tooltip(
            v_model="tooltipVisible",
            open_on_hover=False,
            target="cursor",
            open_on_click=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Card(
                            height="300",
                            image="https://picsum.photos/600/300",
                            width="600",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
