import ipyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.RadioGroup(
            v_model="Duckduckgo",
            v_slots=[
                {
                    "name": "label",
                    "children": [
                        v.Html(
                            tag="div",
                            children=[
                                "Your favourite ",
                                v.Html(
                                    tag="strong",
                                    children=["search engine"],
                                ),
                            ],
                        )
                    ],
                }
            ],
            children=[
                v.Radio(
                    value="Google",
                    v_slots=[
                        {
                            "name": "label",
                            "children": [
                                v.Html(
                                    tag="div",
                                    children=[
                                        "Of course it's ",
                                        v.Html(
                                            tag="strong",
                                            class_="success--text",
                                            children=["Google"],
                                        ),
                                    ],
                                )
                            ],
                        }
                    ],
                ),
                v.Radio(
                    value="Duckduckgo",
                    v_slots=[
                        {
                            "name": "label",
                            "children": [
                                v.Html(
                                    tag="div",
                                    children=[
                                        "Definitely ",
                                        v.Html(
                                            tag="strong",
                                            class_="primary--text",
                                            children=["Duckduckgo"],
                                        ),
                                    ],
                                )
                            ],
                        }
                    ],
                ),
            ],
        )
    ],
)
