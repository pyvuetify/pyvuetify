import ipyvuetify as v

v.Container(
    class_="text-center d-flex align-center justify-space-around",
    children=[
        v.Tooltip(
            bottom=True,
            v_slots=[
                {
                    "name": "activator",
                    "variable": "props",
                    "children": v.Btn(
                        color="primary",
                        dark=True,
                        children=["Button"],
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }
            ],
            children=[
                "Tooltip",
            ],
        ),
        v.Tooltip(
            bottom=True,
            v_slots=[
                {
                    "name": "activator",
                    "variable": "props",
                    "children": v.Icon(
                        color="primary",
                        dark=True,
                        large=True,
                        children=["mdi-home"],
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }
            ],
            children=[
                "Tooltip",
            ],
        ),
        v.Tooltip(
            bottom=True,
            v_slots=[
                {
                    "name": "activator",
                    "variable": "props",
                    "children": v.Html(
                        tag="span",
                        children=["This text has a tooltip"],
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }
            ],
            children=[
                "Tooltip",
            ],
        ),
    ],
)
