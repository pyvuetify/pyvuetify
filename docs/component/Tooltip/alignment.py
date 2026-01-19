import ipyvuetify as v

directions = ["left", "top", "bottom", "right"]

v.Container(
    class_="text-center d-flex align-center justify-space-around",
    children=[
        v.Tooltip(
            v_slots=[
                {
                    "name": "activator",
                    "variable": "props",
                    "children": v.Btn(
                        color="primary",
                        dark=True,
                        children=[d.capitalize()],
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }
            ],
            children=[
                f"{d.capitalize()} tooltip",
            ],
            **{d: True},
        )
        for d in directions
    ],
)
