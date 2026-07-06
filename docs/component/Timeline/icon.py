import pyvuetify as v

v.Timeline(
    children=[
        v.TimelineItem(
            size="large",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Avatar(image="https://i.pravatar.cc/64"),
                    ],
                ),
            ],
        ),
    ],
)
