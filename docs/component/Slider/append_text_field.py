import pyvuetify as v

v.Card(
    style_="margin: auto",
    width="400",
    children=[
        v.Responsive(
            # JS expression, needs manual conversion
            style_="{ background: `rgb(${red}, ${green}, ${blue})` }",
            height="300px",
        ),
        v.CardText(
            children=[
                v.Slider(
                    v_model="red",
                    max=255,
                    step=1,
                    class_="ma-4",
                    label="R",
                    hide_details=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.TextField(
                                    v_model="red",
                                    density="compact",
                                    style_="width: 80px",
                                    type="number",
                                    variant="outlined",
                                    hide_details=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
