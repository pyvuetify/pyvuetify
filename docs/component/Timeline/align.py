import pyvuetify as v

v.Timeline(
    align="start",
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
