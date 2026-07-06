import pyvuetify as v

v.Container(
    class_="pa-0",
    fluid=True,
    children=[
        v.Row(
            density="comfortable",
            children=[
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Card(
                            height="200",
                            title="Single Keys",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Html(
                                            tag="div",
                                            class_="d-flex flex-column ga-2",
                                            children=[
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "Letter key:",
                                                        v.Hotkey(keys="k"),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "Enter key:",
                                                        v.Hotkey(keys="enter"),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "Escape key:",
                                                        v.Hotkey(keys="escape"),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "Arrow key:",
                                                        v.Hotkey(keys="arrowup"),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
