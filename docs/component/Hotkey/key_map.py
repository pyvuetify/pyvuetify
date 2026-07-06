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
                    children=[
                        v.Html(
                            tag="strong",
                            children=["Custom Key Mapping:"],
                        ),
                        ("Override default key representations for localization, branding, or special keys."),
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
                            subtitle="Standard Vuetify key representations",
                            title="Default Key Mapping",
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
                                                        "ctrl+s:",
                                                        v.Hotkey(keys="ctrl+s"),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "meta+z:",
                                                        v.Hotkey(keys="meta+z"),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "alt+f4:",
                                                        v.Hotkey(keys="alt+f4"),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    class_="d-flex align-center justify-space-between",
                                                    children=[
                                                        "shift+enter:",
                                                        v.Hotkey(keys="shift+enter"),
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
