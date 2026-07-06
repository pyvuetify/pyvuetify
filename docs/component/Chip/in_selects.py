import pyvuetify as v

v.Combobox(
    v_model="chips",
    # JS expression, needs manual conversion
    items="items",
    label="Your favorite hobbies",
    prepend_icon="mdi-filter-variant",
    variant="solo",
    chips=True,
    clearable=True,
    closable_chips=True,
    multiple=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Chip(
                    children=[
                        v.Html(
                            tag="strong",
                            children=["{{ item }}"],
                        ),
                        v.Html(
                            tag="span",
                            children=["(interest)"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
