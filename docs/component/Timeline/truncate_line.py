import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-space-around",
    children=[
        v.Timeline(
            truncate_line="start",
            children=[
                v.TimelineItem(
                    children=[
                        v.Html(
                            tag="template",
                            children=["Opposite"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
