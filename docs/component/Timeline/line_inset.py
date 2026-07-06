import pyvuetify as v

v.Timeline(
    direction="horizontal",
    line_inset="12",
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
)
