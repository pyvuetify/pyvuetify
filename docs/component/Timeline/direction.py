import pyvuetify as v

v.Timeline(
    direction="horizontal",
    children=[
        v.TimelineItem(
            children=[
                v.Html(
                    tag="template",
                    children=["Opposite content"],
                ),
            ],
        ),
    ],
)
