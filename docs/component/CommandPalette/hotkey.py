import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Alert(
            class_="mb-4",
            type="info",
            variant="tonal",
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex align-center justify-space-between",
                    children=[
                        v.Html(
                            tag="span",
                            children=[
                                "Press",
                                v.Hotkey(
                                    keys="ctrl+shift+p",
                                    inline=True,
                                ),
                                "to open the command palette",
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.CommandPalette(
            v_model="dialog",
            v_model_search="search",
            # JS expression, needs manual conversion
            items="items",
            hotkey="ctrl+shift+p",
            placeholder="Type a command or search...",
        ),
        v.Card(
            children=[
                v.CardTitle(children=["Last Action"]),
                v.CardText(
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex flex-column ga-2",
                            children=[
                                v.Html(
                                    tag="div",
                                    children=[
                                        v.Html(
                                            tag="strong",
                                            children=["Command:"],
                                        ),
                                        "{{ lastAction.title }}",
                                    ],
                                ),
                                v.Html(
                                    tag="div",
                                    children=[
                                        v.Html(
                                            tag="strong",
                                            children=["Hotkey:"],
                                        ),
                                        v.Hotkey(
                                            # JS expression, needs manual conversion
                                            keys="lastAction.hotkey",
                                            inline=True,
                                        ),
                                    ],
                                ),
                                v.Html(
                                    tag="div",
                                    children=[
                                        v.Html(
                                            tag="strong",
                                            children=["Value:"],
                                        ),
                                        "{{ lastAction.value }}",
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
