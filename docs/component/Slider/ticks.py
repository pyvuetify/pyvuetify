import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="text-body-small",
            children=["Show ticks when using slider"],
        ),
        v.Slider(
            step="10",
            show_ticks=True,
        ),
        v.Html(
            tag="div",
            class_="text-body-small",
            children=["Always show ticks"],
        ),
        v.Slider(
            show_ticks="always",
            step="10",
        ),
        v.Html(
            tag="div",
            class_="text-body-small",
            children=["Tick size"],
        ),
        v.Slider(
            show_ticks="always",
            step="10",
            tick_size="4",
        ),
        v.Html(
            tag="div",
            class_="text-body-small",
            children=["Tick labels"],
        ),
        v.Slider(
            max=3,
            # JS expression, needs manual conversion
            ticks="tickLabels",
            show_ticks="always",
            step="1",
            tick_size="4",
        ),
    ],
)
