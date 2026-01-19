import ipyvuetify as v

colors = ["primary", "success", "warning", "error"]

v.Container(
    class_="text-center d-flex align-center justify-space-around",
    children=[
        v.Tooltip(
            bottom=True,
            color=c,
            v_slots=[
                {
                    "name": "activator",
                    "variable": "props",
                    "children": v.Btn(
                        color=c,
                        dark=True,
                        children=[c],
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }
            ],
            children=[
                f"{c.capitalize()} tooltip",
            ],
        )
        for c in colors
    ],
)
