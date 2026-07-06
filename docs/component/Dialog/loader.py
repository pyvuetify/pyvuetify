import pyvuetify as v

v.Html(
    tag="div",
    class_="pa-4 text-center",
    children=[
        v.Btn(
            # JS expression, needs manual conversion
            disabled="dialog",
            color="primary",
            icon="mdi-refresh",
            text="Start loading",
        ),
        v.Dialog(
            v_model="dialog",
            max_width="320",
            persistent=True,
            children=[
                v.List(
                    class_="py-2",
                    color="primary",
                    elevation="4",
                    rounded="lg",
                    children=[
                        v.ListItem(
                            prepend_icon="$vuetify-outline",
                            title="Refreshing Application...",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Html(
                                            tag="div",
                                            class_="pe-4",
                                            children=[
                                                v.Icon(
                                                    color="primary",
                                                    size="x-large",
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
