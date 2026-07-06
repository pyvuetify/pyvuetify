import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex flex-column",
    children=[
        v.Html(
            tag="div",
            children=[
                v.Html(
                    tag="div",
                    class_="text-body-small",
                    children=["Show thumb when using slider"],
                ),
                v.Slider(
                    v_model="slider1",
                    thumb_label=True,
                ),
            ],
        ),
        v.Html(
            tag="div",
            children=[
                v.Html(
                    tag="div",
                    class_="text-body-small",
                    children=["Always show thumb label"],
                ),
                v.Slider(
                    v_model="slider2",
                    thumb_label="always",
                ),
            ],
        ),
        v.Html(
            tag="div",
            children=[
                v.Html(
                    tag="div",
                    class_="text-body-small",
                    children=["Show thumb label on hover and focus"],
                ),
                v.Slider(
                    v_model="slider5",
                    thumb_label="hover",
                ),
            ],
        ),
        v.Html(
            tag="div",
            children=[
                v.Html(
                    tag="div",
                    class_="text-body-small",
                    children=["Show thumb label on hover and focus"],
                ),
                v.Slider(
                    v_model="slider5",
                    thumb_label="hover",
                ),
            ],
        ),
        v.Html(
            tag="div",
            children=[
                v.Html(
                    tag="div",
                    class_="text-body-small",
                    children=["Custom thumb size"],
                ),
                v.Slider(
                    v_model="slider3",
                    thumb_size=36,
                    thumb_label="always",
                ),
            ],
        ),
        v.Html(
            tag="div",
            children=[
                v.Html(
                    tag="div",
                    class_="text-body-small",
                    children=["Custom thumb label"],
                ),
                v.Slider(
                    v_model="slider4",
                    thumb_label="always",
                    children=[
                        v.Html(
                            tag="template",
                            children=["{{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
