import pyvuetify as v

v.Sheet(
    class_="mx-auto",
    max_width="400",
    rounded="xl",
    border=True,
    children=[
        v.Html(
            tag="div",
            class_="pa-4",
            children=[
                v.Html(
                    tag="div",
                    class_="text-title-large",
                    children=["What are you into?"],
                ),
                v.Html(
                    tag="div",
                    class_="text-body-large",
                    children=["Select topics to continue"],
                ),
                v.Responsive(
                    class_="overflow-y-auto",
                    max_height="280",
                    children=[
                        v.ChipGroup(
                            class_="mt-3",
                            column=True,
                            children=[
                                v.Chip(
                                    # JS expression, needs manual conversion
                                    key="topic",
                                    # JS expression, needs manual conversion
                                    text="topic",
                                    # JS expression, needs manual conversion
                                    value="topic",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Divider(),
        v.Html(
            tag="div",
            class_="pa-2",
            children=[
                v.Btn(
                    color="orange-darken-1",
                    rounded="t-0 b-xl",
                    size="x-large",
                    text="Continue",
                    variant="flat",
                    block=True,
                ),
            ],
        ),
    ],
)
