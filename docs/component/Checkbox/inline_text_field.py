from ipywidgets import jslink

import ipyvuetify as v

container = v.Container(
    children=[
        v.Card(
            children=[
                v.CardText(
                    children=[
                        v.Html(
                            tag="div",
                            class_="flex align-center",
                            children=[
                                v.Checkbox(
                                    v_model=False,
                                    hide_details=True,
                                    class_="shrink mr-2 mt-0 d-inline-flex",
                                ),
                                v.TextField(label="Include files", class_="d-inline-flex"),
                            ],
                        ),
                        v.Html(
                            tag="div",
                            class_="flex align-center",
                            children=[
                                (
                                    checkbox := v.Checkbox(
                                        v_model=True,
                                        hide_details=True,
                                        class_="shrink mr-2 mt-0 d-inline-flex",
                                    )
                                ),
                                (
                                    text_field := v.TextField(
                                        label="I only work if you uncheck the box",
                                        disabled=True,
                                        class_="d-inline-flex",
                                    )
                                ),
                            ],
                        ),
                    ]
                ),
            ]
        ),
    ]
)

jslink((checkbox, "v_model"), (text_field, "disabled"))

container
