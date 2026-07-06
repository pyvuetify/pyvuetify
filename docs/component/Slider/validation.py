import pyvuetify as v

v.Card(
    color="transparent",
    flat=True,
    children=[
        v.Html(
            tag="div",
            class_="text-title-small",
            children=["Rules"],
        ),
        v.CardText(
            class_="pt-0",
            children=[
                v.Slider(
                    v_model="value",
                    # JS expression, needs manual conversion
                    rules="rules",
                    label="How many?",
                    step="10",
                    thumb_label="always",
                    ticks=True,
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="text-title-small",
            children=["Persistent hint"],
        ),
        v.CardText(
            class_="pt-0",
            children=[
                v.Slider(
                    v_model="value",
                    # JS expression, needs manual conversion
                    rules="rules",
                    hint="40 in stock",
                    label="How many?",
                    step="10",
                    thumb_label="always",
                    persistent_hint=True,
                    ticks=True,
                ),
            ],
        ),
    ],
)
