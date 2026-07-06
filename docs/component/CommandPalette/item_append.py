import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center my-3",
    children=[
        v.Btn(text="Open"),
        v.CommandPalette(
            v_model="model",
            # JS expression, needs manual conversion
            items="items",
            # JS expression, needs manual conversion
            search_props='{ autocomplete: "off" }',
            hotkey="ctrl+slash",
            max_width="500",
            placeholder="Remind me...",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Kbd(
                            class_="opacity-70 align-self-center py-1",
                            children=["Esc"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
