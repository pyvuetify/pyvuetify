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
                    children=[
                        v.Card(
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Html(
                                            tag="div",
                                            class_="mb-4 text-center",
                                            children=[
                                                v.Html(
                                                    tag="div",
                                                    class_="mb-2",
                                                    children=[
                                                        v.BtnToggle(
                                                            v_model="displayMode",
                                                            density="compact",
                                                            border=True,
                                                            divided=True,
                                                            mandatory=True,
                                                            children=[
                                                                v.Btn(
                                                                    value="icon",
                                                                    children=["Icon"],
                                                                ),
                                                                v.Btn(
                                                                    value="symbol",
                                                                    children=["Symbol"],
                                                                ),
                                                                v.Btn(
                                                                    value="text",
                                                                    children=["Text"],
                                                                ),
                                                            ],
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    children=[
                                                        v.BtnToggle(
                                                            v_model="platform",
                                                            density="compact",
                                                            border=True,
                                                            divided=True,
                                                            mandatory=True,
                                                            children=[
                                                                v.Btn(
                                                                    value="pc",
                                                                    children=["PC Platform"],
                                                                ),
                                                                v.Btn(
                                                                    value="mac",
                                                                    children=["Mac Platform"],
                                                                ),
                                                            ],
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                        v.Html(
                                            tag="div",
                                            class_="d-flex flex-column ga-4",
                                            children=[
                                                v.Html(
                                                    tag="div",
                                                    children=[
                                                        v.Html(
                                                            tag="h4",
                                                            class_="text-body-large mt-0 mb-2",
                                                            children=["Standard Display (Block-level)"],
                                                        ),
                                                        v.Html(
                                                            tag="div",
                                                            class_="pa-3 border rounded",
                                                            children=[
                                                                v.Html(
                                                                    tag="p",
                                                                    class_="mb-2",
                                                                    children=[
                                                                        "Save your work with",
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+s",
                                                                        ),
                                                                        ("or create a new file using"),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+n",
                                                                        ),
                                                                        ".",
                                                                    ],
                                                                ),
                                                                v.Html(
                                                                    tag="p",
                                                                    class_="mb-0",
                                                                    children=[
                                                                        ("Access the command palette with"),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+shift+p",
                                                                        ),
                                                                        ("to quickly navigate your project."),
                                                                    ],
                                                                ),
                                                            ],
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="div",
                                                    children=[
                                                        v.Html(
                                                            tag="h4",
                                                            class_="text-body-large mt-0 mb-2",
                                                            children=["Inline Display (Text-integrated)"],
                                                        ),
                                                        v.Html(
                                                            tag="div",
                                                            class_="pa-4 border rounded",
                                                            style_="line-height: 1.7;",
                                                            children=[
                                                                v.Html(
                                                                    tag="h4",
                                                                    class_="text-title-large mt-0 mb-3",
                                                                    children=[("Getting Started with Code Editor")],
                                                                ),
                                                                v.Html(
                                                                    tag="p",
                                                                    class_="mb-3",
                                                                    children=[
                                                                        (
                                                                            "Welcome to your new development "
                                                                            "environment! Here are the essential"
                                                                            " keyboard shortcuts to boost your "
                                                                            " productivity. Press"
                                                                        ),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+shift+p",
                                                                            inline=True,
                                                                        ),
                                                                        ("to open the command palette, or use"),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+p",
                                                                            inline=True,
                                                                        ),
                                                                        ("to quickly open any file in your project."),
                                                                    ],
                                                                ),
                                                                v.Html(
                                                                    tag="p",
                                                                    class_="mb-3",
                                                                    children=[
                                                                        v.Html(
                                                                            tag="strong",
                                                                            children=["File Operations:"],
                                                                        ),
                                                                        "Save your current file with",
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+s",
                                                                            inline=True,
                                                                        ),
                                                                        ("or create a new file by pressing"),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+n",
                                                                            inline=True,
                                                                        ),
                                                                        (". Need to close a file? Use"),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+w",
                                                                            inline=True,
                                                                        ),
                                                                        "to close the current tab.",
                                                                    ],
                                                                ),
                                                                v.Html(
                                                                    tag="p",
                                                                    class_="mb-3",
                                                                    children=[
                                                                        v.Html(
                                                                            tag="strong",
                                                                            children=["Navigation:"],
                                                                        ),
                                                                        ("Jump to a specific line with"),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+g",
                                                                            inline=True,
                                                                        ),
                                                                        ", find text using",
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+f",
                                                                            inline=True,
                                                                        ),
                                                                        (", or search across your entire project with"),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+shift+f",
                                                                            inline=True,
                                                                        ),
                                                                        ".",
                                                                    ],
                                                                ),
                                                                v.Html(
                                                                    tag="p",
                                                                    class_="mb-0",
                                                                    children=[
                                                                        v.Html(
                                                                            tag="strong",
                                                                            children=["Advanced:"],
                                                                        ),
                                                                        ("For power users, try the sequence"),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+k-p",
                                                                            inline=True,
                                                                        ),
                                                                        ("to access advanced search options, or use"),
                                                                        v.Hotkey(
                                                                            # JS expression, needs manual conversion
                                                                            display_mode="displayMode",
                                                                            # JS expression, needs manual conversion
                                                                            platform="platform",
                                                                            keys="cmd+k-s",
                                                                            inline=True,
                                                                        ),
                                                                        "to open settings.",
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
                ),
            ],
        ),
    ],
)
