import ipyvuetify as v

v.Timeline(
    children=[
        v.TimelineItem(children=["timeline item"]),
        v.TimelineItem(class_="text-right", children=["timeline item"]),
        v.TimelineItem(children=["timeline item"]),
    ]
)
