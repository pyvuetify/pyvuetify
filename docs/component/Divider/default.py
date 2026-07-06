import pyvuetify as v

v.Container(
    class_="d-flex flex-column gr-4",
    children=[
        v.Divider(
            content_offset="2rem",
            opacity=".7",
            thickness="5",
            variant="dotted",
            gradient=True,
            children=["CHAPTER 1.4"],
        ),
        v.Divider(
            content_offset=[40, -1.5],
            opacity=".7",
            thickness="2",
            variant="dashed",
            children=["∞"],
        ),
        v.Divider(
            content_offset=[12, 2.5],
            opacity=".7",
            children=["* * *"],
        ),
        v.Divider(
            color="primary",
            content_offset="-16",
            opacity="1",
            style_="color: inherit",
            thickness="1",
            children=[
                v.Avatar(
                    class_="border border-primary border-opacity-100",
                    icon="mdi-chevron-down",
                    size="36",
                ),
            ],
        ),
    ],
)
