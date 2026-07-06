import pyvuetify as v

v.Layout(
    height="300",
    children=[
        v.Container(
            class_="d-flex flex-wrap gc-3 justify-center align-self-start",
            children=[
                v.Btn(
                    color="primary",
                    height="50",
                    prepend_icon="$arrowleft",
                    spaced="start",
                    children=[
                        v.Html(
                            tag="span",
                            class_="text-right",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="mb-1",
                                    children=["Add Message"],
                                ),
                                v.Html(
                                    tag="small",
                                    class_="opacity-80",
                                    children=["default (hold)"],
                                ),
                            ],
                        ),
                    ],
                ),
                v.Btn(
                    append_icon="$arrowright",
                    color="primary",
                    height="50",
                    spaced="end",
                    children=[
                        v.Html(
                            tag="span",
                            class_="text-left",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="mb-1",
                                    children=["Add Message"],
                                ),
                                v.Html(
                                    tag="small",
                                    class_="opacity-80",
                                    children=["overflow"],
                                ),
                            ],
                        ),
                    ],
                ),
                v.Divider(class_="mt-4"),
                v.Switch(
                    v_model="collapsed",
                    color="primary",
                    density="comfortable",
                    label="Collapsed",
                    hide_details=True,
                ),
                v.Divider(class_="mb-4"),
                v.Btn(text="Clear all"),
            ],
        ),
        v.SnackbarQueue(
            ref="queue1",
            v_model="messages1",
            # JS expression, needs manual conversion
            collapsed="collapsed",
            total_visible=3,
            location="bottom start",
            closable=True,
            contained=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.IconBtn(
                            aria_label="Close",
                            icon="$close",
                            size="small",
                            variant="text",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
