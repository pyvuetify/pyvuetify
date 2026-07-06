import pyvuetify as v

v.Container(
    class_="pa-0",
    fluid=True,
    children=[
        v.Alert(
            class_="mb-2",
            type="info",
            variant="tonal",
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex align-center",
                    children=[
                        v.Html(
                            tag="div",
                            children=[
                                v.Html(
                                    tag="strong",
                                    children=["Platform Detection:"],
                                ),
                                "Currently detected as {{ isMac ? 'Mac' : 'PC' }}",
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Row(
            density="comfortable",
            children=[
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Card(
                            subtitle="These keys automatically adapt to your platform",
                            title="Cross-Platform Keys",
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
                                                        "meta+k:",
                                                        v.Hotkey(keys="meta+k"),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "alt+shift+f:",
                                                        v.Hotkey(keys="alt+shift+f"),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "meta+alt+shift+k:",
                                                        v.Hotkey(keys="meta+alt+shift+k"),
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
