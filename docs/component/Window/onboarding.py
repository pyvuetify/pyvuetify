import pyvuetify as v

v.Card(
    rounded="0",
    theme="dark",
    flat=True,
    children=[
        v.Window(
            v_model="onboarding",
            children=[
                v.WindowItem(
                    # JS expression, needs manual conversion
                    key="card-{n}",
                    # JS expression, needs manual conversion
                    value="{n}",
                    children=[
                        v.Card(
                            class_="d-flex justify-center align-center",
                            height="200",
                            children=[
                                v.Html(
                                    tag="span",
                                    class_="text-display-large",
                                    children=["Card {n}"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.CardActions(
            class_="justify-space-between",
            children=[
                v.Btn(
                    icon="mdi-chevron-left",
                    variant="plain",
                ),
                v.ItemGroup(
                    v_model="onboarding",
                    class_="text-center",
                    mandatory=True,
                    children=[
                        v.Item(
                            # JS expression, needs manual conversion
                            key="btn-{n}",
                            # JS expression, needs manual conversion
                            value="{n}",
                            children=[
                                v.Btn(
                                    # JS expression, needs manual conversion
                                    variant="isSelected ? 'outlined' : 'text'",
                                    icon="mdi-record",
                                ),
                            ],
                        ),
                    ],
                ),
                v.Btn(
                    icon="mdi-chevron-right",
                    variant="plain",
                ),
            ],
        ),
    ],
)
