import pyvuetify as v

v.Row(
    children=[
        v.Col(
            class_="pa-12",
            children=[
                v.RangeSlider(
                    model_value=[0, 1],
                    step=1,
                    # JS expression, needs manual conversion
                    ticks="seasons",
                    max="3",
                    min="0",
                    show_ticks="always",
                    thumb_label="always",
                    tick_size="4",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Icon(
                                    # JS expression, needs manual conversion
                                    icon="season(modelValue)",
                                    theme="dark",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
