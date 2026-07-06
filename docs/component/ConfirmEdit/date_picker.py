import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="328",
    rounded="lg",
    border=True,
    children=[
        v.ConfirmEdit(
            v_model="date",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.DatePicker(
                            v_model="proxyModel.value",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Html(
                                            tag="component",
                                            # JS expression, needs manual conversion
                                            # is='actions',
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
