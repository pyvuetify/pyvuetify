import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Rating(
            v_model="rating",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Icon(
                            # JS expression, needs manual conversion
                            color="props.isFilled ? colors[props.index] : 'grey-lighten-1'",
                            size="large",
                            children=[
                                ("{{ props.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline' }}"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
