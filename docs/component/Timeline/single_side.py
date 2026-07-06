import pyvuetify as v

v.Timeline(
    side="end",
    children=[
        v.TimelineItem(
            # JS expression, needs manual conversion
            key="item.id",
            # JS expression, needs manual conversion
            dot_color="item.color",
            size="small",
            children=[
                v.Alert(
                    # JS expression, needs manual conversion
                    color="item.color",
                    # JS expression, needs manual conversion
                    icon="item.icon",
                    value=True,
                    children=[
                        (
                            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola "
                            "imperdiet nec ut, sed euismod convenire principes at. Est et nobis "
                            "iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
                        ),
                    ],
                ),
            ],
        ),
    ],
)
