import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="d-flex justify-center",
            children=[
                v.BtnToggle(
                    density="comfortable",
                    rounded="lg",
                    border=True,
                    divided=True,
                    children=[
                        v.Btn(
                            # JS expression, needs manual conversion
                            active="Array.isArray(disabled) && disabled?.includes('cancel')",
                            text="Toggle cancel",
                        ),
                        v.Btn(
                            # JS expression, needs manual conversion
                            active="Array.isArray(disabled) && disabled?.includes('save')",
                            text="Toggle save",
                        ),
                        v.Btn(
                            # JS expression, needs manual conversion
                            active="typeof disabled === 'boolean'",
                            text="Toggle Boolean",
                        ),
                        v.Btn(
                            # JS expression, needs manual conversion
                            active="disabled === undefined",
                            text="Default",
                        ),
                    ],
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="d-flex justify-center align-center py-4 ga-2",
            children=[
                v.Html(
                    tag="strong",
                    children=["Disabled:"],
                ),
                v.Html(
                    tag="span",
                    class_="bg-surface-light rounded rounded-md pa-1",
                    size="small",
                ),
            ],
        ),
        v.Sheet(
            class_="pa-4",
            color="surface-light",
            rounded="lg",
            children=[
                v.ConfirmEdit(
                    v_model="value",
                    # JS expression, needs manual conversion
                    disabled="disabled",
                    children=[
                        v.Card(
                            class_="mx-auto",
                            max_width="400",
                            rounded="lg",
                            title="Update Field",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.TextField(
                                            v_model="proxyModel.value",
                                            label="Name",
                                            prepend_icon="$vuetify",
                                            variant="outlined",
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
