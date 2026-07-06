import pyvuetify as v

v.Sheet(
    class_="mx-auto",
    elevation="3",
    max_width="300",
    rounded="xl",
    children=[
        v.Sheet(
            class_="pa-3 bg-primary text-right",
            rounded="t-xl",
            children=[
                v.Btn(icon="mdi-content-save-cog-outline"),
                v.Btn(
                    class_="ms-2",
                    icon="mdi-check-bold",
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="pa-4",
            children=[
                v.ChipGroup(
                    selected_class="text-primary",
                    column=True,
                    children=[
                        v.Chip(
                            # JS expression, needs manual conversion
                            key="tag",
                            children=["{{ tag }}"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
