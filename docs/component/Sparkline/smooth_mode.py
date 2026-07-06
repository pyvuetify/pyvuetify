import pyvuetify as v

v.Container(
    children=[
        v.Card(
            class_="pa-5 mx-auto",
            max_width="500",
            rounded="lg",
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex align-center mb-4",
                    children=[
                        v.Switch(
                            v_model="monotone",
                            color="primary",
                            label="monotone",
                            hide_details=True,
                        ),
                        v.Spacer(),
                        v.Slider(
                            v_model="smooth",
                            max=20,
                            min=0,
                            class_="ml-4",
                            density="compact",
                            label="smooth",
                            step="1",
                            style_="max-width: 200px",
                            hide_details=True,
                            thumb_label=True,
                        ),
                    ],
                ),
                v.Sparkline(
                    # JS expression, needs manual conversion
                    model_value="values",
                    # JS expression, needs manual conversion
                    smooth="smooth",
                    # JS expression, needs manual conversion
                    smooth_mode="monotone ? 'monotone' : 'default'",
                    color="primary",
                    height="80",
                    line_width="2",
                    marker_stroke="rgb(var(--v-theme-surface))",
                    padding="8",
                    stroke_linecap="round",
                    show_markers=True,
                ),
            ],
        ),
    ],
)
