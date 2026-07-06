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
                            height="232",
                            subtitle="Uses SVG icons - compact and modern",
                            title="Icon Mode (Default)",
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
                                                        "Ctrl + K:",
                                                        v.Hotkey(
                                                            display_mode="icon",
                                                            keys="ctrl+k",
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "Meta + Shift + P:",
                                                        v.Hotkey(
                                                            display_mode="icon",
                                                            keys="meta+shift+p",
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "Alt + Arrow:",
                                                        v.Hotkey(
                                                            display_mode="icon",
                                                            keys="alt+arrowup",
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "Enter:",
                                                        v.Hotkey(
                                                            display_mode="icon",
                                                            keys="enter",
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
        ),
    ],
)
