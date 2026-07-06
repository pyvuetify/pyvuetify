import pyvuetify as v

v.Html(
    tag="div",
    class_="py-3",
    children=[
        v.FileInput(
            v_model="files",
            show_size=1000,
            color="deep-purple-accent-4",
            label="File input",
            placeholder="Select your files",
            prepend_icon="mdi-paperclip",
            variant="outlined",
            counter=True,
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
                                v.Html(
                                    tag="span",
                                    class_="text-label-medium text-medium-emphasis mx-2",
                                    children=["+{{ files.length - 2 }} File(s)"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
