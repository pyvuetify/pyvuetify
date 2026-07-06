import pyvuetify as v

v.FileInput(
    v_model="files",
    label="File input",
    placeholder="Upload your documents",
    prepend_icon="mdi-paperclip",
    multiple=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Html(
                    tag="template",
                    # JS expression, needs manual conversion
                    key="fileName",
                    children=[
                        v.Chip(
                            class_="me-2",
                            color="primary",
                            size="small",
                            label=True,
                            children=["{{ fileName }}"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
