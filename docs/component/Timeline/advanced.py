import pyvuetify as v

v.Container(
    style_="max-width: 600px;",
    children=[
        v.Timeline(
            density="compact",
            side="end",
            children=[
                v.TimelineItem(
                    class_="mb-12",
                    dot_color="orange",
                    size="large",
                    fill_dot=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Html(
                                    tag="span",
                                    children=["JL"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
