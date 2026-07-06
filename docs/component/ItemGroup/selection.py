import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="400",
    children=[
        v.Container(
            class_="pa-1",
            children=[
                v.ItemGroup(
                    v_model="selection",
                    multiple=True,
                    children=[
                        v.Row(
                            children=[
                                v.Col(
                                    # JS expression, needs manual conversion
                                    key="i",
                                    cols="12",
                                    md="6",
                                    children=[
                                        v.Item(
                                            children=[
                                                v.Img(
                                                    # JS expression, needs manual conversion
                                                    src="`https://cdn.vuetifyjs.com/images/${item.src}`",
                                                    class_="text-right pa-2",
                                                    height="150",
                                                    cover=True,
                                                    children=[
                                                        v.Btn(
                                                            # JS expression, needs manual conversion
                                                            icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'",
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
