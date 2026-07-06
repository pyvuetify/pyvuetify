import pyvuetify as v

v.Container(
    children=[
        v.Card(
            class_="pa-4 pb-2 mx-auto",
            rounded="lg",
            width="500",
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex align-center ga-2 mb-1",
                    children=[
                        v.Icon(
                            icon="mdi-chevron-down",
                            size="18",
                        ),
                        v.Html(
                            tag="span",
                            class_="text-uppercase text-body-small font-weight-bold",
                            children=["Weekly Downloads"],
                        ),
                        v.Spacer(),
                        v.Html(
                            tag="div",
                            class_="text-body-small text-medium-emphasis mb-2",
                            children=["{{ hoveredWeek ?? lastWeek }}"],
                        ),
                    ],
                ),
                v.Html(
                    tag="div",
                    class_="d-flex align-end ga-4 pl-1",
                    children=[
                        v.Html(
                            tag="span",
                            class_="text-headline-large font-weight-bold mb-1",
                            style_="min-width: 140px",
                            children=["{{ hoveredValue ?? lastValue }}"],
                        ),
                        v.Sparkline(
                            gradient=[
                                "rgba(var(--v-theme-surface-variant), .2)",
                                "rgba(var(--v-theme-surface-variant), .1)",
                            ],
                            # JS expression, needs manual conversion
                            model_value="weeklyValues",
                            class_="mr-n2",
                            color="medium-emphasis",
                            height="60",
                            line_width="1.5",
                            marker_size="12",
                            marker_stroke="rgb(var(--v-theme-surface))",
                            min="0",
                            padding="6",
                            smooth="2",
                            stroke_linecap="round",
                            style_="flex: 1",
                            width="300",
                            fill=True,
                            interactive=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
