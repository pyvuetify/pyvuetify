import pyvuetify as v

v.Card(
    class_="pa-8 d-flex justify-center flex-wrap",
    theme="dark",
    children=[
        v.Container(
            class_="text-center",
            children=[
                v.Row(
                    class_="justify-center",
                    density="comfortable",
                    children=[
                        v.Col(
                            cols="12",
                            children=[
                                v.Img(
                                    class_="mx-auto mt-12 mb-16",
                                    max_height="140",
                                    max_width="240",
                                    src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-text.svg",
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            children=[
                                v.Autocomplete(
                                    # JS expression, needs manual conversion
                                    items="items",
                                    append_inner_icon="mdi-microphone",
                                    class_="mx-auto",
                                    density="comfortable",
                                    menu_icon="",
                                    placeholder="Search Google or type a URL",
                                    prepend_inner_icon="mdi-magnify",
                                    style_="max-width: 350px;",
                                    theme="light",
                                    variant="solo",
                                    auto_select_first=True,
                                    item_props=True,
                                    rounded=True,
                                ),
                            ],
                        ),
                        v.Col(
                            # JS expression, needs manual conversion
                            key="i",
                            cols="auto",
                            children=[
                                v.Card(
                                    # JS expression, needs manual conversion
                                    href="shortcut.href",
                                    class_="pa-4",
                                    rel="noopener noreferrer",
                                    target="_blank",
                                    width="112",
                                    flat=True,
                                    children=[
                                        v.Avatar(
                                            # JS expression, needs manual conversion
                                            icon="shortcut.icon",
                                            class_="mb-2",
                                            color="white",
                                            variant="tonal",
                                        ),
                                        v.Html(
                                            tag="div",
                                            class_="text-body-small text-truncate",
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.Col(
                            cols="auto",
                            children=[
                                v.Dialog(
                                    v_model="dialog",
                                    max_width="500",
                                    children=[
                                        v.Html(
                                            tag="template",
                                            children=[
                                                v.Card(
                                                    class_="pa-4",
                                                    width="112",
                                                    flat=True,
                                                    children=[
                                                        v.Avatar(
                                                            class_="mb-2",
                                                            color="white",
                                                            icon="mdi-plus",
                                                            variant="tonal",
                                                        ),
                                                        v.Html(
                                                            tag="div",
                                                            class_="text-body-small text-truncate",
                                                            children=["Add shortcut"],
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
