import pyvuetify as v

v.Card(
    children=[
        v.DataIterator(
            # JS expression, needs manual conversion
            items="games",
            items_per_page=3,
            # JS expression, needs manual conversion
            search="search",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Toolbar(
                            class_="px-2",
                            children=[
                                v.TextField(
                                    v_model="search",
                                    density="comfortable",
                                    placeholder="Search",
                                    prepend_inner_icon="mdi-magnify",
                                    style_="max-width: 300px;",
                                    variant="solo",
                                    clearable=True,
                                    hide_details=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
