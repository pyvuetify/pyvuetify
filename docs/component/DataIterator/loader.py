import pyvuetify as v

v.DataIterator(
    # JS expression, needs manual conversion
    items="mice",
    # JS expression, needs manual conversion
    items_per_page="itemsPerPage",
    loading=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Row(
                    children=[
                        v.Col(
                            # JS expression, needs manual conversion
                            key="i",
                            cols="12",
                            sm="6",
                            xl="3",
                            children=[
                                v.Sheet(
                                    border=True,
                                    children=[
                                        v.Img(
                                            gradient=(
                                                "to top right, rgba(255, 255, 255, .1), rgba({item.raw.color}, .15))"
                                                # JS expression, needs manual conversion
                                            ),
                                            # JS expression, needs manual conversion
                                            src="item.raw.src",
                                            height="150",
                                            cover=True,
                                        ),
                                        v.ListItem(
                                            # JS expression, needs manual conversion
                                            title="item.raw.name",
                                            density="comfortable",
                                            lines="two",
                                            subtitle="Lorem ipsum dil orei namdie dkaf",
                                            children=[
                                                v.Html(
                                                    tag="template",
                                                    children=[
                                                        v.Html(
                                                            tag="strong",
                                                            class_="text-title-large",
                                                            children=["{{ item.raw.name }}"],
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
