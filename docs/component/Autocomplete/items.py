import pyvuetify as v

v.Container(
    children=[
        v.Autocomplete(
            # JS expression, needs manual conversion
            items="items",
            label="Special items like in VList",
            chips=True,
            multiple=True,
        ),
        v.Autocomplete(
            # JS expression, needs manual conversion
            items="items",
            label="I have custom divider",
            chips=True,
            multiple=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex ga-4 align-center",
                            children=[
                                v.Divider(),
                                "{{ props.text }}",
                                v.Divider(),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
