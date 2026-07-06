import pyvuetify as v

v.Timeline(
    align="start",
    children=[
        v.TimelineItem(
            # JS expression, needs manual conversion
            key="i",
            # JS expression, needs manual conversion
            dot_color="year.color",
            size="small",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="div",
                            # JS expression, needs manual conversion
                            class_="`pt-1 headline font-weight-bold text-${year.color}`",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
