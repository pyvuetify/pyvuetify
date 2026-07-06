import pyvuetify as v

v.Sheet(
    class_="py-4 px-1",
    children=[
        v.ChipGroup(
            selected_class="text-primary",
            multiple=True,
            children=[
                v.Chip(
                    # JS expression, needs manual conversion
                    key="tag",
                    # JS expression, needs manual conversion
                    text="tag",
                ),
            ],
        ),
    ],
)
