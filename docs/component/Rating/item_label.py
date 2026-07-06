import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Rating(
            v_model="rating",
            # JS expression, needs manual conversion
            item_labels="labels",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="span",
                            # JS expression, needs manual conversion
                            class_="`text-${colors[props.index]}`",
                            # class_="font-weight-black text-body-small",
                            children=["{{ props.label }}"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
