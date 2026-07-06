import pyvuetify as v

v.FileUpload(
    v_model="model",
    density="comfortable",
    clearable=True,
    multiple=True,
    show_size=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.FileUploadItem(
                    lines="two",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Avatar(
                                    rounded="lg",
                                    size="32",
                                    style_="transform: rotate(45deg)",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
