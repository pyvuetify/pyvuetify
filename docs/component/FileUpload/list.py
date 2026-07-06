import pyvuetify as v

v.FileUpload(
    v_model="model",
    clearable=True,
    multiple=True,
    show_size=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.FileUploadDropzone(density="comfortable"),
                v.FileUploadList(
                    class_="upload-list",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.FileUploadItem(
                                    # JS expression, needs manual conversion
                                    key="file",
                                    # JS expression, needs manual conversion
                                    file="file",
                                    clearable=True,
                                    show_size=True,
                                    children=[
                                        v.Html(
                                            tag="template",
                                            children=[
                                                v.Html(
                                                    tag="vavatar",
                                                    rounded="circle",
                                                ),
                                                v.ProgressLinear(
                                                    # JS expression, needs manual conversion
                                                    buffer_value="uploads.get(file).buffer",
                                                    color=(
                                                        "uploads.get(file).progress >= 100 ? 'success' : 'primary'"
                                                        # JS expression, needs manual conversion
                                                    ),
                                                    # JS expression, needs manual conversion
                                                    model_value="uploads.get(file).progress",
                                                    location="bottom",
                                                    absolute=True,
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
