import pyvuetify as v

v.Card(
    class_="mx-auto pa-4",
    max_width="480",
    rounded="lg",
    children=[
        v.Html(
            tag="div",
            class_="d-flex align-center mb-2",
            children=[
                v.Html(
                    tag="div",
                    children=[
                        v.Html(
                            tag="div",
                            class_="text-title-medium font-weight-bold",
                            children=["Page Views"],
                        ),
                        v.Html(
                            tag="div",
                            class_="text-body-small text-medium-emphasis",
                            children=["{{ periodLabel }}"],
                        ),
                    ],
                ),
                v.Spacer(),
                v.BtnToggle(
                    v_model="period",
                    density="compact",
                    rounded="lg",
                    variant="outlined",
                    mandatory=True,
                    children=[
                        v.Btn(
                            value="weekly",
                            children=["Weekly"],
                        ),
                        v.Btn(
                            value="monthly",
                            children=["Monthly"],
                        ),
                        v.Btn(
                            value="quarterly",
                            children=["Quarterly"],
                        ),
                    ],
                ),
            ],
        ),
        v.Sparkline(
            # JS expression, needs manual conversion
            model_value="series[period]",
            auto_draw="once",
            auto_draw_duration="800",
            color="primary",
            line_width="2",
            smooth="4",
            stroke_linecap="round",
            animation=True,
        ),
    ],
)
